var main = document.querySelector('.navbaars-main');
var navbars = document.querySelector('.navbars');
var goTop = $('#goTop');
var gamesBtn = document.querySelector('#gamesBtn');

var navbarModel = document.querySelector('#Navbar-modalContent');
var $firstGame = $('#firstGame');

var navbarShow = false;

// 小导航按钮
var smallGameBtn = document.querySelector('#smallGameBtn');
var hideCovers = document.querySelectorAll('.navbars .hideCover');
var smallActivityBtn = document.querySelector('#smallActivityBtn');

window.addEventListener('scroll', function() {
  // 1.2 判断当前页面滚动出去的距离是否超过10px
  var scrollTop = getScroll().scrollTop;
  if (scrollTop >= 41) {
    // 1.3 设置top的类样式，显示回到顶部
    main.className = 'navbaars-main clearfix fixed';
    navbars.className = 'navbars fixed';
  } else {
    main.className = 'navbaars-main clearfix';
    navbars.className = 'navbars';
  }

  if (scrollTop >= 230) {
    goTop.show();    
  } else {
    goTop.hide();
    
  }
})
var animateTime = 77;
var animateBfTop = -10;
// 导航栏按钮事件
gamesBtn.addEventListener('click', function() {
  if (navbarShow) {
    navbarShow = false;
    $firstGame.css({top: animateBfTop, opacity: 0})
    $firstGame.nextAll().css({top: animateBfTop, opacity: 0});
    navbarModel.style.display = 'none'
  } else {
    navbarShow = true;
    navbarModel.style.display = 'block'    
    $(navbarModel).animate({ opacity: 1 }, animateTime)
    $firstGame.animate({ top: 15, opacity: 1 }, animateTime, function() {
      $firstGame.next().animate({ top: 15, opacity: 1 }, animateTime, function() {
        $firstGame.next().next().animate({ top: 15, opacity: 1 }, animateTime, function() {
          $firstGame.next().next().next().animate({ top: 15, opacity: 1 }, animateTime, function() {
            $firstGame.next().next().next().next().animate({ top: 15, opacity: 1 }, animateTime, function() {
              $firstGame.next().next().next().next().next().animate({ top: 15, opacity: 1 }, animateTime)
            })
          })
        })
      })
    })
  }
})

function getScroll() {
  return {
    scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
    scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft
  }
}
// 小导航按钮事件
smallGameBtn.addEventListener('click', function () {
  hideCovers[1].style.display = 'none';
  if (hideCovers[0].style.display == 'block') {
    hideCovers[0].style.display = 'none'
  } else {
    hideCovers[0].style.display = 'block'
  }
});
smallActivityBtn.addEventListener('click', function () {
  hideCovers[0].style.display = 'none';

  if (hideCovers[1].style.display == 'block') {
    hideCovers[1].style.display = 'none'
  } else {
    hideCovers[1].style.display = 'block'
  }
  
})
/* 回到顶部开始 */

goTop.on('click', function() {
  animate(document.documentElement, {scrollTop: 0}) 
  
}) 
/* 回到顶部结束 */