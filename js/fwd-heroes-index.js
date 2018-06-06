$(function() {
  var loaArr = ['translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', 'translate3d(163px, 0px, 0px) scale3d(1, 1, 1)', 'translate3d(325px, 0px, 0px) scale3d(1, 1, 1)', ' translate3d(488px, 0px, 0px) scale3d(1, 1, 1)', 'translate3d(650px, 0px, 0px) scale3d(1, 1, 1)', 'translate3d(813px, 0px, 0px) scale3d(1, 1, 1)', 'translate3d(976px, 0px, 0px) scale3d(1, 1, 1)', 'translate3d(0px, 276px, 0px) scale3d(1, 1, 1)', 'translate3d(163px, 276px, 0px) scale3d(1, 1, 1)', 'translate3d(325px, 276px, 0px) scale3d(1, 1, 1)', 'translate3d(488px, 276px, 0px) scale3d(1, 1, 1)', 'translate3d(650px, 276px, 0px) scale3d(1, 1, 1)', 'translate3d(813px, 276px, 0px) scale3d(1, 1, 1)', 'translate3d(976px, 276px, 0px) scale3d(1, 1, 1)', 'translate3d(0px, 551px, 0px) scale3d(1, 1, 1)', 'translate3d(163px, 551px, 0px) scale3d(1, 1, 1)', 'translate3d(325px, 551px, 0px) scale3d(1, 1, 1)', 'translate3d(488px, 551px, 0px) scale3d(1, 1, 1)', 'translate3d(650px, 551px, 0px) scale3d(1, 1, 1)', 'translate3d(813px, 551px, 0px) scale3d(1, 1, 1)', 'translate3d(976px, 551px, 0px) scale3d(1, 1, 1)', 'translate3d(0px, 827px, 0px) scale3d(1, 1, 1)', 'translate3d(163px, 827px, 0px) scale3d(1, 1, 1)', 'translate3d(325px, 827px, 0px) scale3d(1, 1, 1)', 'translate3d(488px, 827px, 0px) scale3d(1, 1, 1)', 'translate3d(650px, 827px, 0px) scale3d(1, 1, 1)', 'translate3d(813px, 827px, 0px) scale3d(1, 1, 1)']

  var heroesSelectorContainer = $('.heroes-selector-container');
  var iconArr = ['.heroes-selector-navigation ul li:nth-child(2) svg',
    '.heroes-selector-navigation ul li:nth-child(3) svg',
    '.heroes-selector-navigation ul li:nth-child(4) svg',
    '.heroes-selector-navigation ul li:nth-child(5) svg'
  ];
  // 动态生成
  for (var i = 0; i < heroesArr.length; i++) {
    var heroesItem = $('<div></div>');
    heroesItem.addClass('heroes-item')
      .prop('type', heroesArr[i].type)
      .appendTo(heroesSelectorContainer);
    var a = $('<a href="javascript:"></a>').appendTo(heroesItem);
    var blueMask = $('<div></div>').appendTo(a);
    var img = $("<img src='" + heroesArr[i].h_img + "'>").appendTo(a);
    var heroTitle = $('<span></span>').addClass('hero-title').appendTo(a);
    var classIcon = $('<span></span>').addClass('class-icon').appendTo(heroTitle);
    var svg = $(iconArr[heroesArr[i].type]).clone().appendTo(classIcon);
    var itemTitle = $('<span></span>').addClass('item-title').text(heroesArr[i].name).appendTo(heroTitle);
  }

  var heroes_All = document.querySelectorAll('.heroes-item');
  var blueMasks = document.querySelectorAll('.heroes-selector .heroes-index .heroes-selector-container .heroes-item a>div')
    // 通过listNode创建新的数组
  var heroesNewArr = Array.prototype.slice.call(heroes_All);
  newArray(heroesNewArr);

  // 通过新数组渲染画面位置
  function newArray(n) {
    for (var i = 0; i < n.length; i++) {
      n[i].style.transform = loaArr[i];
    }
  }

  // 获取英雄导航栏按钮
  var $lis = $('.heroes-selector-navigation ul li');

  // 注册英雄导航栏按钮点击事件
  $('#allHeroesBtn').on('click', function() {
    $(this).addClass('current').siblings().removeClass('current');

    var heroesNewArr = Array.prototype.slice.call(heroes_All);
    newArray(heroesNewArr);

    $(blueMasks).removeClass('blueMask current')
  })

  $('#tujiHeroesBtn').on('click', function() {
    $(this).addClass('current').siblings().removeClass('current');
    heroesNewArr = heroesNewArr.splice(returnIndex(0), 8).concat(heroesNewArr)
    newArray(heroesNewArr);
    $(blueMasks).removeClass('blueMask current')
    for (var i = 0; i < blueMasks.length; i++) {
      if (i < 8) {
        blueMasks[i].className = 'blueMask';
      } else {
        blueMasks[i].className = 'current';
      }
    }
  })
  $("#fangHeroesBtn").on('click', function() {
    $(this).addClass('current').siblings().removeClass('current');
    heroesNewArr = heroesNewArr.splice(returnIndex(1), 6).concat(heroesNewArr)
    newArray(heroesNewArr);
    $(blueMasks).removeClass('blueMask current')
    for (var i = 0; i < blueMasks.length; i++) {
      if (i >= 8 && i < 14) {
        blueMasks[i].className = 'blueMask';
      } else {
        blueMasks[i].className = 'current';
      }
    }
  })
  $('#zhongHeroesBtn').on('click', function() {
    $(this).addClass('current').siblings().removeClass('current');

    heroesNewArr = heroesNewArr.splice(returnIndex(2), 6).concat(heroesNewArr)
    newArray(heroesNewArr);
    $(blueMasks).removeClass('blueMask current')
    for (var i = 0; i < blueMasks.length; i++) {
      if (i >= 14 && i < 20) {
        blueMasks[i].className = 'blueMask';
      } else {
        blueMasks[i].className = 'current';
      }
    }
  })
  $('#yuanHeroesBtn').on('click', function() {
      $(this).addClass('current').siblings().removeClass('current');

      heroesNewArr = heroesNewArr.splice(returnIndex(3), 7).concat(heroesNewArr)
      newArray(heroesNewArr);
      $(blueMasks).removeClass('blueMask current');
      for (var i = 0; i < blueMasks.length; i++) {
        if (i >= 20 && i < 27) {
          blueMasks[i].className = 'blueMask';
        } else {
          blueMasks[i].className = 'current';
        }
      }
    })
    // 返回指定英雄第一个下标
  function returnIndex(n) {
    for (var i = 0; i < heroesNewArr.length; i++) {
      if (heroesNewArr[i].type == n) {
        return i;
      }
    }
  }
})