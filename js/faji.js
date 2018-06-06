(function() {
  function Faji(options) {
    options = options || {};
    this.width = options.color || 80;
    this.height = options.color || 80;
    this.color = options.color || 'red';
    this.direction = {
      left: false,
      up: false,
      right: false,
      down: false
    }
    this.speed = 4;
    this._div;
    this._map;
    this.bullets;
  }
  // 渲染法鸡
  Faji.prototype.render = function(map) {

      var $div = $('<div></div>');
      this._div = $div;
      this._map = map;
      $div.css({
          width: this.width,
          height: this.height,
          position: 'absolute',
          left: 0 * this.width,
          top: map.height() / 2 - this.height / 2,
          backgroundImage: 'url(image/法鸡.png)',
          backgroundSize: this.width,
          backgroundRepeat: 'no-repeat',
        })
        .appendTo(map)
    }
  // 注册按键
  Faji.prototype.setDirections = function(e) {
      switch (e.type) {
        case 'keydown':
          switch (e.keyCode) {
            case 37:
              this.direction.left = true
              this.direction.right = false
              e.preventDefault();
              break
            case 38:
              this.direction.up = true;
              this.direction.down = false;
              e.preventDefault();
              break
            case 39:
              this.direction.right = true
              this.direction.left = false
              e.preventDefault();
              break
            case 40:
              this.direction.down = true
              this.direction.up = false
              e.preventDefault();
              break
          }
          break
        case 'keyup':
          switch (e.keyCode) {
            case 37:
              this.direction.left = false
              break
            case 38:
              this.direction.up = false
              break
            case 39:
              this.direction.right = false
              break
            case 40:
              this.direction.down = false
              break
          }
          break
      }
    }
  // 移动加撞墙判断
  Faji.prototype.move = function() {
      if (this.direction.left) {
        var x = this._div.get(0).offsetLeft - this.speed;
        x = x < 0 ? 0 : x;
        this._div.get(0).style.left = x + 'px'
      } else if (this.direction.up) {
        var y = this._div.get(0).offsetTop - this.speed;
        y = y < -36 ? -36 : y;
        this._div.get(0).style.top = y + 'px'
      } else if (this.direction.right) {
        var x = this._div.get(0).offsetLeft + this.speed;
        x = x > (this._map.width() - this._div.width()) ? (this._map.width() - this._div.width()) : x;
        this._div.get(0).style.left = x + 'px'
      } else if (this.direction.down) {
        var y = this._div.get(0).offsetTop + this.speed;
        y = y > (this._map.height() - this._div.height() + 33) ? (this._map.height() - this._div.height() + 33) : y;
        this._div.get(0).style.top = y + 'px'
      }
    }
  // 子弹渲染
  Faji.prototype.bullet = function(map) {
    var $span = $('<span></span>');
    $span.css({
        width: 7,
        height: 6,
        position: 'absolute',
        left: this._div.position().left + this._div.width() + 3,
        top: this._div.position().top + 39,
        backgroundColor: '#000',
        borderRadius: "0 3px 3px 0",
      })
      .appendTo(map)
    this.bullets = $span;
  }
  window.Faji = Faji;
})();