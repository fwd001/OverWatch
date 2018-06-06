;
(function() {
  var enemies = []; // 敌人;
  var that;
  var bulletTime = 777 // 子弹时间;  
  var timeId1;
  var timeId2;
  var timeId3;

  function Game(map) {
    this.fj = new Faji();
    this.bindEvents(); // 按键事件    
    this.fj.render(map);
    this.fj.bullet(map); // 子弹渲染

    this.mt = new Monster();
    this.attack(); // 子弹攻击
    this.createEy(map); // 敌人渲染
    this.timer;
  }

  var methods = Game.prototype

  // 注册按键
  methods.bindEvents = function() {
      that = this;
      document.onkeydown = (function(e) {
        this.fj.setDirections(e)
      }).bind(this)

      document.onkeyup = (function(e) {
        this.fj.setDirections(e)
      }).bind(this)
    }
    // 游戏运行
  methods.run = function() {
    this.timer = window.setInterval(function() {
      this.fj.move();
    }.bind(this), 1000 / 60)
  }

  // 子弹攻击
  methods.attack = function() {
    anmiateAtt();
    timeId1 = setInterval(function() {
      anmiateAtt();
    }, bulletTime)
  }

  // 子弹动画加判断撞击敌人
  function anmiateAtt() {
    attackAudio();
    that.fj.bullets.animate({ left: that.fj._div.position().left + that.fj._map.width() }, {
      duration: bulletTime,
      step: function() {
        enemies.forEach(function(o, i) {
          var left = parseInt(that.fj.bullets.position().left);
          var top = parseInt(that.fj.bullets.position().top);

          if (left > (parseInt(o.position().left) - 7) && top > (parseInt(o.position().top) - 6)) {
            if (left < parseInt(o.position().left + that.mt.width) && top < parseInt(o.position().top + that.mt.height)) {
              enemies.splice(i, 1);
              o.remove();
            }
          }
        });
      },
      easing: 'linear',
      complete: function() {
        that.fj.bullets.css({
          left: that.fj._div.position().left + that.fj._div.width() + 3,
          top: that.fj._div.position().top + 39,
        });
      },
    })
  }

  // 生成敌人
  methods.createEy = function(map) {

    timeId2 = setInterval(function() {
      enemies.push(that.mt.enemy(map));
    }, 1777)
    timeId3 = setInterval(function() {
      for (var i = 0; i < enemies.length; i++) {
        enemies[i].css('left', parseInt(enemies[i].css('left')) - 20)
        enemies[i].appendTo(map);
      }
    }, 400)
  }

  function attackAudio() {
    $('#fwd-audio audio').get(4).load();
    $('#fwd-audio audio').get(4).play();
  }
  methods.stop = function() {
    clearInterval(this.timer);
    clearInterval(timeId1);
    clearInterval(timeId2);
    clearInterval(timeId3);
  }
  window.Game = Game
})()