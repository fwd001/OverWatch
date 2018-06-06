$(function() {
  // 动态生成li
  for (var i = 0; i < heroesArr.length; i++) {
    var $li = $('<li></li>');
    $li[0].index = i;
    $('.heroes-bottom ul').append($li);
    var $a = $('<a href="javascript:"></a>');
    $li.append($a);
    var $divMask = $('<div></div>');
    $divMask.addClass('hero-portrait-image-mask');
    $a.append($divMask);
    var $span = $('<span></span>');
    $a.append($span);
    $span.text(heroesArr[i].name);
    var $pic = $('<div></div>');
    $divMask.append($pic);
    $pic.css({
      backgroundImage: heroesArr[i].img,
    })
    $li.mouseenter(mouseLi);
  }
  // 事件改变成员
  var masks = $('.heroes-bottom ul li a>div');
  var spans = $('.heroes-bottom ul li a span');
  var spotlightImg = $('#spotlight-image');
  var heroName = $('#heroName');
  var heroDesc = $('#heroDesc');

  masks.eq(21).addClass("current");
  spans.eq(21).addClass("current");
  // 鼠标经过li触发事件
  function mouseLi() {
    var index = $(this).index();
    masks.removeClass("current");
    spans.removeClass("current");
    masks.eq(index).addClass("current");
    spans.eq(index).addClass("current");

    spotlightImg.css('backgroundImage', heroesArr[index].bigImg)
    heroName.text(heroesArr[index].name);
    heroDesc.text(heroesArr[index].desc);
  }
  // fight section定时器
  var bg_fftfArr = [0, 1, 0];
  var bg_fftfs = document.querySelectorAll('#bg-fftf');
  for (var i = 0; i < bg_fftfs.length; i++) {
    bg_fftfs[i].style.opacity = bg_fftfArr[i];
  }
  setInterval(function() {
    bg_fftfArr.unshift(bg_fftfArr.pop());
    for (var i = 0; i < bg_fftfs.length; i++) {
      setOpacity(bg_fftfs[i], { opacity: bg_fftfArr[i] })
    }
  }, 7000)

  // 隐藏彩蛋
  var easterIndex = 0;
  var $easter = $('#bg-show-for-story');
  var $easterDesc = $('#story-desc');
  var easterImgArr = ['', '头号玩家.jpg', 'OverWatch.jpg', '英雄不朽3.jpg', '英雄不朽4.jpg', '吴宏宇.jpg', '事发地.jpg', '最后一条朋友圈.jpg', '玩家请愿.jpg', '小花圈.jpg', '国外留言.png', '吴宏宇追悼.jpg', '', '你渴望力量么.png', '不我渴望屁股.png'];
  var easterPArr = ['', '最近有一部根据厄内斯特·克莱恩（Ernest Cline）2011年同名科幻小说改编的电影《头号玩家 Ready Player One》', '因电影里的无数彩蛋而被观众津津乐道！', '在2016年6月中《守望先锋》的一次更新上线后，玩家们都忙于“天梯”（竞技模式）的征战。直到更新上线数天后的某一天，才有国外玩家率先发现了暴雪新中加入的一个地图彩蛋,这件事的发生还要等上许久，但暴雪的迅速动作，让人惊讶。惊讶之余，心中被感动所充盈，久久不能退去。', '你可以在“漓江塔：控制中心”地图中，双方交战的控制点旁一处小房间内，发现这三座宇航员雕像，正中的一座雕像上，胸前写着“宏宇”，脚下基座为祭奠用的白花所环绕，背后的墙上有“英雄不朽”的字样——这些细节，都是在本次更新后新添加的。', '就是这位年轻英雄：吴宏宇是广东工业大学的大一学生，今年20岁。', '2016年，5月23日下午，吴宏宇发现有贼偷车，骑车追赶却遭小偷恶意撞击，倒地时头部受撞击，最终抢救无效去世。稍让人欣慰的是，肇事的小偷于次日凌晨3点落网。人们在事发地献花祭奠宏宇', '特别让人难过的是，这位品学兼优、富有正义感的好同学，事发当天发出的最后一条朋友圈，还在热切期盼着次日《守望先锋》的开服。', '事发后，宏宇的同学在《守望先锋》国服官方论坛上，发表了以下这个帖子，希望暴雪能在游戏中添加彩蛋，添补宏宇未能进入这个“需要更多英雄的世界”的遗憾。', '这样的愿望显然引起了暴雪官方的注意。<br />时隔一月有余，暴雪果然在游戏中添加了这样的彩蛋。<br />正如他们的风格，一切都在静悄悄中完成，直到彩蛋被玩家们发现。最戳人泪点的是，墙上的“英雄不朽”和雕像下的白花，代表了暴雪对一位普通玩家的至高评价。', '国外玩家留言', '除了游戏中对宏宇的纪念，让人欣慰的是，在现实生活中，英雄的善后并未被怠慢。<br />“这个世界需要更多的英雄。”<br />但这个世界更需要更多的欢乐。', '我们将不戴宝冠，不争荣宠，要啥自行车<br />我们黑暗的利剑，是堡垒的守卫者……', '', '']
    // 成员彩蛋
  var $firstMember = $('#firstMember')
  var animateTime = 500;
  var movePosition = 23;
  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 37) { // 左键
      if (easterIndex == 1 || easterIndex == 0) {
        return;
      }
      easterIndex--
    }
    if (e.keyCode == 39) { // 右键
      easterIndex++;
      easterIndex = easterIndex > easterPArr.length - 1 ? easterPArr.length - 1 : easterIndex;
    }
    if (e.keyCode != 37 && e.keyCode != 39) {
      return;
    }
    if (easterIndex == 8 || easterIndex == 9 || easterIndex == 10 || easterIndex == 13 || easterIndex == 14) {
      $easter.css({
        backgroundSize: '32%',
      })
    } else {
      $easter.css({
        backgroundSize: '',
      })
    }
    if (easterIndex === easterPArr.length - 1) {
      setTimeout(() => {
        $('.bg-show-for-story .memberbox .last-logo').fadeIn();
        $('#fwd-audio audio').get(3).play();
        $('#fwd-audio audio').get(3).addEventListener('ended', function() {
          $('#fwd-audio audio').get(0).play();
        })
        $('#fwd-audio audio').get(0).addEventListener('ended', function() {
          $('#fwd-audio audio').get(1).play()
        }, false);
      }, 1000);
    } else {
      $('.bg-show-for-story .memberbox .last-logo').fadeOut();
    }

    function playAudio() {
      $('#fwd-audio audio').get(2).load();
      $('#fwd-audio audio').get(2).play();
    }
    // 头像判断
    if (easterIndex === easterPArr.length - 3) {
      $firstMember.animate({ top: movePosition, opacity: 1 }, animateTime, function() {
        playAudio()
        $firstMember.next().animate({ top: movePosition, opacity: 1 }, animateTime, function() {
          playAudio()
          $firstMember.next().next().animate({ top: movePosition, opacity: 1 }, animateTime, function() {
            playAudio()
            $firstMember.next().next().next().animate({ top: movePosition, opacity: 1 }, animateTime, function() {
              playAudio()
              $firstMember.next().next().next().next().animate({ top: movePosition, opacity: 1 }, animateTime, function() {
                playAudio()
                $firstMember.next().next().next().next().next().animate({ top: movePosition, opacity: 1 }, animateTime, function() {
                  playAudio()
                  setTimeout(() => {
                    $('.bg-show-for-story .member img').stop().fadeIn();
                    $('#dogGif').stop().fadeIn();
                  }, (2333));

                })
              })
            })
          })
        })
      })
    } else {
      $('.memberbox .member').css({
        top: 230,
        opacity: 0
      })
    }

    $easterDesc.html(easterPArr[easterIndex]);
    $easter.css({
      backgroundImage: 'url(image/easterImg/' + easterImgArr[easterIndex] + ')',
      backgroundPosition: '100px center',
    })
  }, false)

  // 首页视频播放
  $('.startVideo').click(function(e) {
      $('.startVideo').remove();
      $('.home-header-video video')[0].play();
      e.stopPropagation();
    })
    // 首页游戏彩蛋
  var game;
  $('.gameMask').on('click', function() {
    $(this).hide();
    $('.gameMask #map').hide();
    $('.gameMask #map').empty();
    game.stop();
    $('.gameMask .juhua').css('transform', 'translateY(-50%) translateX(-50%) rotate(0)')
  })
  $('#map').on('click', function(e) {
    e.stopPropagation()
  })

  $('.heroes-bottom ul li').eq(3).on('mouseenter', function() {
    setTimeout(() => {
      $('#spotlight-image a').fadeIn();
    }, 1000);
  })
  $('#spotlight-image a').on('click', function() {

    $('.gameMask').show();
    var angle = 0;
    var timeId;
    $('.gameMask .juhua').show();
    timeId = setInterval(function() {
      angle += 2;
      $('.gameMask .juhua').rotate(angle);
    }, 23);
    setTimeout(() => {
      $('.gameMask .juhua').hide();
      clearInterval(timeId);
      $('.gameMask #map').show();
      var $map = $('#map');
      game = new Game($map)
      game.run()
    }, 500);


  })

})