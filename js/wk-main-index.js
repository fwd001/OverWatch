/**
 * Created by Administrator on 2018/5/2.
 */


//给主体图片区域内characters区域注册屏幕滑动事件
//console.log($(".moreInformation").is(":visible"));

var characters = document.querySelector(".characters")
window.addEventListener("scroll", function () {
  var scrollTop = getScroll().scrollTop;
  characters.style.top = 110 - (scrollTop / 7) + "px";
  if ($(".action .message").attr("index") == 0) {
    if (scrollTop > 1164) {
      $(".derma ul").slideDown(2000)
    }
    if (scrollTop > 2150) {
      $(".feature ul").fadeIn(2000)
    }
    if (scrollTop > 2610){
      $(".expression ul").fadeIn(2000)
    }
  } else if ($(".action .message").attr("index") == 1) {
    if (scrollTop > 3356) {
      $(".derma ul").slideDown(2000)
    }
    if (scrollTop > 4342) {
      $(".feature ul").fadeIn(2000)
    }
    if (scrollTop > 4800){
      $(".expression ul").fadeIn(2000)
    }
    if (scrollTop > 1100){
      $(".moreInformation .VeniceAction .VeniceAction-content").animate({left:787,opacity: 1})
    }
    if(scrollTop > 1850){
      $(".kingAction .kingAction-content").animate({top:130,opacity:1})
    }
  }
})

//给主体图片区域内img一个点击事件
var allMask = document.querySelector(".allMask")
$(".flex-content .play-button").click(function () {
  $(".flex-pop-up .pop-up-video .video")
    .attr({controls: "controls", src: "video/wk-FHDFYSqlT-mobile.mp4"})
    .get(0).play();
  $(".flex-pop-up .title h2").text("《守望先锋》:威尼斯行动")
  $(".flex-pop-up").show(200);
  $(".allMask").css({top: 0})
  $(".allMask").fadeIn(200);
})
//给主体图片区域内img点击出来的弹框中的一个div点击关闭事件
$(".flex-pop-up .title .close").click(function () {
  $(".flex-pop-up").hide(200);
  $(".flex-pop-up .pop-up-video .video ").get(0).pause();
  $(".allMask").fadeOut(200)
})
window.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    $(".flex-pop-up .title .close").click();
  }
})

//给行动档案区域的a注册点击事件以控制更多信息区域
var moreInformation = document.querySelector(".moreInformation")
$(".action .message").attr("index", 0)
$(".action .message").click(function () {
  if ($(this).text() == "更多信息") {
    $(this).text("隐藏信息").attr("index", 1);
    $(".moreInformation").slideDown(1000);
  } else {
    $(this).text("更多信息").attr("index", 0);
    $(".moreInformation").slideUp(1000);
  }
})

//给更多信息区域中的accordion一个手风琴特效
var accordion = document.querySelector(".accordion")
var accordionRight = document.querySelector(".accordion .accordion-right")
var accordionRightContent = document.querySelector(".accordion .accordion-right .accordion-content")
var accordionLeft = document.querySelector(".accordion .accordion-left")
var accordionLeftContent = document.querySelector(".accordion .accordion-left .accordion-content")
var accordionLine = document.querySelector(".accordion .line")
var maskleft = document.querySelector(".accordion .accordion-left .mask")
var maskright = document.querySelector(".accordion .accordion-right .mask")
accordionRight.addEventListener("mouseover", function () {
  accordionLeftContent.style.opacity = "0";
  maskright.style.display = "none";
  maskleft.style.display = "block";
  animate(accordionLine, {left: 330});
  animate(accordionRight, {left: 333})
  animate(accordionLeft, {left: -775}, function () {
    animate(accordionRightContent, {opacity: 1})
  })
})
accordionLeft.addEventListener("mouseover", function () {
  accordionRightContent.style.opacity = "0";
  maskright.style.display = "block";
  maskleft.style.display = "none";
  animate(accordionLine, {left: 1080});
  animate(accordionRight, {left: 1083})
  animate(accordionLeft, {left: 0}, function () {
    animate(accordionLeftContent, {opacity: 1})
  })
})

//给皮肤区域每个li设置背景图片
var derma = document.querySelector(".derma")
var dermaImg = ["wk-Thumbsskin.jpg", "wk-Fmoira-skin.jpg", "wk-Freaper-skin.jpg", "wk-FThumbsFmei-skin.jpg", "wk-Fhanzo-skin.jpg", "wk-Fsombra-skin.jpg", "wk-Fdoomfist-skin.jpg", "wk-Fwinston-skin.jpg", "wk-Forisa-skin.jpg", "wk-Ftorbjorn-skin-02.jpg", "wk-Fbastion-skin.jpg", "wk-Freinhardt-skin.jpg", "wk-Fgenji-skin.jpg", "wk-skin.jpg", "wk-Ftracer-skin.jpg", "wk-Ftorbjorn-skin-01.jpg", "wk-Fmccree-skin.jpg", "wk-Fwidowmaker-skin.jpg",]
var pop = ["wk-FeventsFarchivesFSkinsFlucio-skin.jpg", "wk-FSkinsFmoira-skin.jpg", "wk-FarchivesFSkinsFreaper-skin.jpg", "wk-FarchivesFSkinsFmei-skin.jpg", "wk-FarchivesFSkinsFhanzo-skin.jpg", "wk-FarchivesFSkinsFsombra-skin.jpg", "wk-FarchivesFSkinsFdoomfist-skin.jpg", "wk-FarchivesFSkinsFwinston-skin.jpg", "wk-FuprisingFskinsFOris.jpg", "wk-FarchivesFSkinsFtorbjorn-skin-02.jpg", "wk-FarchivesFSkinsFbastion-skin.jpg", "wk-FarchivesFSkinsFreinhardt-skin.jpg", "wk-FarchivesFSkinsFgenji-skin.jpg", "wk-FarchivesFSkinsFmercy-skin.jpg", "wk-FarchivesFSkinsFtracer-skin.jpg", "wk-FarchivesFSkinsFtorbjorn-skin-01.jpg", "wk-FarchivesFSkinsFmccree-skin.jpg", "wk-FarchivesFSkinsFwidowmaker-skin.jpg"]
var dermaContent = ["调音师", "黑暗守望者", "士兵：24", "居家小美", "岛田先生", "黑爪特工", "黑爪特工", "28号实验品", "归零战甲", "首席工程师林德霍姆", "归零堡垒", "中尉威尔海姆", "黑暗守望者", "战地医生齐格勒", "学员奥克斯顿", "铁架工程师", "黑暗守望者", "黑爪"]
var count;
for (var i = 0; i < $(".derma a").length; i++) {
  $(".derma a").eq(i).css("backgroundImage", "url(image/" + dermaImg[i] + ")");
  $("<li><img></li>").appendTo(".unlocks-pop-up .pop-up-img ul");
  $(".unlocks-pop-up .pop-up-img ul li img").eq(i).attr({src: "image/" + pop[i]});
}
$(".derma a").click(function () {
  count = $(this).parent().index();
  $(".unlocks-pop-up .title span").text(count + 1 + "/18")
  $(".unlocks-pop-up").show(200)
  $(".unlocks-pop-up .title h2").text(dermaContent[count]);
  $(".unlocks-pop-up .pop-up-img ul li").eq(count).fadeIn(200).siblings().fadeOut(200);
  $(".allMask").css({display: "block", top: 0})
})

//关闭弹窗
$(".unlocks-pop-up .title .close").click(function () {
  $(".unlocks-pop-up").hide(200);
  $(".allMask").css({display: "none"})
})
window.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    $(".unlocks-pop-up .title .close").click();
  }
})

//弹窗部分的右箭头点击事件39
$(".unlocks-pop-up .pop-up-img .toRight").click(function () {
  count++;
  if (count > dermaContent.length - 1) {
    count = 0;
  }
  $(".unlocks-pop-up .title span").text((count + 1 ) + "/18");
  $(".unlocks-pop-up .title h2").text(dermaContent[count]);
  $(".unlocks-pop-up .pop-up-img ul li").eq(count).fadeIn(200).siblings().fadeOut(200)
})
window.addEventListener("keyup", function (e) {
  if (e.keyCode === 39) {
    $(".unlocks-pop-up .pop-up-img .toRight").click();
  }
})
//弹窗部分的左箭头点击事件37
$(".unlocks-pop-up .pop-up-img .toLeft").click(function () {
  count--;
  if (count < 0) {
    count = dermaContent.length - 1;
  }
  $(".unlocks-pop-up .title span").text((count + 1 ) + "/18");
  $(".unlocks-pop-up .title h2").text(dermaContent[count]);
  $(".unlocks-pop-up .pop-up-img ul li").eq(count).fadeIn(200).siblings().fadeOut(200)
})
window.addEventListener("keyup", function (e) {
  if (e.keyCode === 37) {
    $(".unlocks-pop-up .pop-up-img .toLeft").click();
  }
})

//给特写区域每个li设置背景图片
var feature = document.querySelector(".feature")
var featureA = feature.querySelectorAll("a")
var featureImg = ["wk-Fzarya-potg.jpg", "wk-Fdoomfist-potg.jpg", "wk-Forisa-potg.jpg", "wk-Ftorb-thumb.jpg", "wk-thumb.jpg", "wk-Fzeny-thumb.jpg",]
var featureVideo = ["wk-FeventsFarchivesFzarya-potg.mp4", "wk-FeventsFarchivesFdoomfist-potg.mp4", "wk-FeventsFarchivesForisa-potg.mp4", "wk-FhighlightsFvideosFuprising-torb-highlight.mp4", "wk-FhighlightsFvideosFuprising-dva-highlight.mp4", "wk-FhighlightsFvideosFuprising-zen-highlight.mp4"]
var featureContent = ["重力喷涌", "铁拳连击", "不动如山", "我的宝贝", "来张自拍", "换位思考"]
for (var i = 0; i < featureA.length; i++) {
  $(".feature a").eq(i).css({backgroundImage: "url(image/" + featureImg[i] + ")"})
}
$(".feature a").click(function () {
  var idx = $(this).parents().index();
  $(".title h2").text(featureContent[idx]);
  $(".flex-pop-up").show(200);
  $(".flex-pop-up .pop-up-video .video")
    .attr({controls: "controls", src: "video/" + featureVideo[idx] + ""})
    .get(0).play();
  $(".allMask").css({top: 0})
  $(".allMask").fadeIn(200);
})
//特写区域弹窗部分
//给表情区域每个li设置背景图片
var expression = document.querySelector(".expression")
var expressionA = expression.querySelectorAll("a")
var expressionImg = ["wk-Fhanz-thumb.jpg", "wangl.jpg", "wk-Fphar-thumb.jpg",]
var expressionVideo = ["wk-FemotesFvideosFuprising-hanzo-emote.mp4", "wk-FemotesFvideosFuprising-soldier-emote.mp4",
  "wk-FemotesFvideosFuprising-pharrah-emote.mp4"]
var expressionContent = ["训练", "俯卧撑", "检修"]
for (var i = 0; i < expressionA.length; i++) {
  $(".expression a").eq(i).css({backgroundImage: "url(image/" + expressionImg[i] + ")"})
  expressionA[i].index = i;
}
$(".expression a").click(function () {
  var idx = $(this).parents().index();
  $(".title h2").text(expressionContent[idx]);
  $(".flex-pop-up").show(200);
  $(".flex-pop-up .pop-up-video .video")
    .attr({controls: "controls", src: "video/" + expressionVideo[idx] + ""})
    .get(0).play();
  $(".allMask").css({top: 0})
  $(".allMask").fadeIn(200);
})