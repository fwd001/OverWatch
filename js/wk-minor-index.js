/**
 * Created by Administrator on 2018/5/10.
 */

/**
 * Created by Administrator on 2018/5/2.
 */

//给主体图片区域内characters区域注册屏幕滑动事件
var characters = document.querySelector(".characters")
window.addEventListener("scroll", function () {
  var scrollTop = getScroll().scrollTop;
  characters.style.top = 110 - (scrollTop / 3) + "px";
  if ($(".action .message").attr("index") == 0) {
    if (scrollTop > 1100) {
      $(".derma ul").slideDown(2000)
    }
    if (scrollTop > 2050) {
      $(".feature ul").fadeIn(2000)
    }
    if (scrollTop > 2450){
      $(".expression ul").fadeIn(2000)
    }
  } else if ($(".action .message").attr("index") == 1) {
    if (scrollTop > 2460) {
      $(".derma ul").slideDown(2000)
    }
    if (scrollTop > 3410) {
      $(".feature ul").fadeIn(2000)
    }
    if (scrollTop > 3810){
      $(".expression ul").fadeIn(2000)
    }
    if (scrollTop > 1000){
      $(".moreInformation .VeniceAction .VeniceAction-content").animate({left:787,opacity: 1})
    }
    if(scrollTop > 1150){
      $(".moreInformation .VeniceAction .VeniceAction-text").animate({top:282,opacity:1})
    }
  }
})




//给主体图片区域内img一个点击事件
var allMask = document.querySelector(".allMask")
$(".flex-content .play-button").click(function () {
  $(".flex-pop-up .pop-up-video .video")
    .attr({controls:"controls",src:"video/wk-minor-FFoitnFHDFFoitn-mobile.mp4"})
    .get(0).play();
  $(".flex-pop-up .title h2").text("《守望先锋》:欢度新春")
  $(".flex-pop-up").show(200);
  $(".allMask").css({display: "block",top:0})
})
//给主体图片区域内img点击出来的弹框中的一个div点击关闭事件
var closeFlexPopUp = document.querySelector(".flex-pop-up .title .close")
$(".flex-pop-up .title .close").click(function () {
  $(".flex-pop-up").hide(200);
  $(".flex-pop-up .pop-up-video .video ").get(0).pause();
  $(".allMask").css({display: "none"})
})
window.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    closeFlexPopUp.click();
  }
});


//给行动档案区域的a注册点击事件以控制更多信息区域
var moreInformation = document.querySelector(".moreInformation")
$(".action .message").attr("index", 0)
$(".action .message").click(function () {
  if ($(this).text() == "更多信息") {
    $(this).text("隐藏信息").attr("index", 1);
    $(".moreInformation").slideDown(1000);
  }else {
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
var dermaA = derma.querySelectorAll("a")
var dermaImg = ["wk-minor-Flunar-new-yearFskinsFthumbnailsFwidowmaker.jpg", "wk-minor-FskinsFthumbnailFpharah.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFgenji.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFmccree-kr.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFmercy01.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFzarya.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFmercy02.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFjunkrat.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFdva-kr.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFroadhog.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFsymmetra.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFana-kr.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFbastion.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFmei.jpg", "wk-minor-dFlunar-new-yearFskinsFthumbnailsFmei.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFzenyatta.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFtracer.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFwinston.jpg", "wk-minor-Flunar-new-yearFskinsFthumbnailsFreinhardt.jpg"]
var pop = ["wk-minor-Flunar-new-yearFskinsFwidowmaker.jpg", "wk-minor-FeventsFlunar-new-yearFskinsFpharah.jpg", "wk-minor-FeventsFlunar-new-yearFskinsFgenji.jpg", "wk-minor-Flunar-new-yearFskinsFmccree-kr.jpg", "wk-minor-Flunar-new-yearFskinsFmercy01.jpg", "wk-minr-Flunar-new-yearFskinsFzarya.jpg", "wk-minor-Flunar-new-yearFskinsFmercy02.jpg", "wk-minor-Flunar-new-yearFskinsFjunkrat.jpg", "wk-minor-Flunar-new-yearFskinsFdva-kr.jpg", "wk-minor-Flunar-new-yearFskinsFroadhog.jpg", "wk-minor-Flunar-new-yearFskinsFsymmetra.jpg", "wk-minor-Flunar-new-yearFskinsFana-kr.jpg", "wk-minor-Flunar-new-yearFskinsFbastion.jpg", "wk-minor-Flunar-new-yearFskinsFmei02.jpg", "wk-minor-Flunar-new-yearFskinsFmei01.jpg", "wk-minor-Flunar-new-yearFskinsFzenyatta.jpg", "wk-minor-Flunar-new-yearFskinsFtracer.jpg", "wk-minor-Flunar-new-yearFskinsFwinston.jpg", "wk-minor-Flunar-new-yearFskinsFreinhardt.jpg"]
var dermaContent = ["午夜百合", "青龙", "白虎", "将军", "朱雀", "玄武", "金黄", "爆竹", "旧正机甲", "悟能", "旗袍", "河回假面", "幺鸡堡垒", "嫦娥", "月神", "三藏", "玫瑰", "悟空", "悟净"]
var unlocksContent = document.querySelector(".unlocks-pop-up .title h2")
var unlocksPopUp = document.querySelector(".unlocks-pop-up")
var popImg = document.querySelector(".unlocks-pop-up img ")
var count;
for (var i = 0; i < dermaA.length; i++) {
  $(".derma a").eq(i).css("backgroundImage", "url(image/" + dermaImg[i] + ")");
  $("<li><img></li>").appendTo(".unlocks-pop-up .pop-up-img ul");
  $(".unlocks-pop-up .pop-up-img ul li img").eq(i).attr({src: "image/" + pop[i]});
}
$(".derma a").click(function () {
  count = $(this).parent().index();
  $(".unlocks-pop-up .title span").text(count + 1 + "/19")
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
//弹窗部分的右箭头点击事件
$(".unlocks-pop-up .pop-up-img .toRight").click(function () {
  count++;
  if (count > dermaContent.length-1) {
    count = 0;
  }
  $(".unlocks-pop-up .title span").text((count + 1 )+ "/19");
  $(".unlocks-pop-up .title h2").text(dermaContent[count]);
  $(".unlocks-pop-up .pop-up-img ul li").eq(count).fadeIn(200).siblings().fadeOut(200)
})
window.addEventListener("keyup", function (e) {
  if (e.keyCode === 39) {
    $(".unlocks-pop-up .pop-up-img .toRight").click();
  }
})
//弹窗部分的左箭头点击事件
$(".unlocks-pop-up .pop-up-img .toLeft").click(function () {
  count--;
  if (count <0) {
    count = dermaContent.length-1;
  }
  $(".unlocks-pop-up .title span").text((count + 1 )+ "/19");
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
var featureImg = ["wk-minor-Flunar-new-yearFhighlightFthumbnailsFmccree.jpg", "wk-minor-Flunar-new-yearFhighlightFthumbnailsFtracer.jpg", "wk-minor-Flunar-new-yearFhighlightFthumbnailsFroadhog-.jpg", "wk-minor-Flunar-new-yearFhighlightFthumbnailsFmercy.jpg"]
var featureVideo = ["wk-minor-Flunar-new-yearFhighlightFmccree.mp4", "wk-minor-Flunar-new-yearFhighlightFtracer.mp4", "wk-minor-Flunar-new-yearFhighlightFroadhog-02.mp4", "wk-minor-Flunar-new-yearFhighlightFmercy.mp4"]
var featureContent = ["自信转身", "舞狮迎春", "胡吃海塞", "福到运到"]
for (var i = 0; i < featureA.length; i++) {
  $(".feature a").eq(i).css({backgroundImage:"url(image/" + featureImg[i] + ")"})
}
$(".feature a").click(function () {
  var idx=$(this).parents().index();
  $(".title h2").text(featureContent[idx]);
  $(".flex-pop-up").show(200);
  $(".flex-pop-up .pop-up-video .video")
    .attr({controls: "controls", src: "video/"+featureVideo[idx]+""})
    .get(0).play();
  $(".allMask").css({top: 0})
  $(".allMask").fadeIn(200);
})
//特写区域弹窗部分


//给表情区域每个li设置背景图片
var expression = document.querySelector(".expression")
var expressionA = expression.querySelectorAll("a")
var expressionImg = ["wk-minor-Flunar-new-year2Femotes2FthumbnailsFroadhog-01.jpg", "wk-minor-Flunar-new-year2FemotesFthumbnailsFdoomfist.jpg", "wk-minor-Flunar-new-yearFemotesFthumbnailsFDVa-kr.jpg", "wk-minor-Flunar-new-yearFemotesFthumbnails2Fmei.jpg", "wk-minor-Flunar-new-year2Femotes2FthumbnailsFjunkrat.jpg"]
var expressionVideo = ["wk-minor-Flunar-new-yearFemotesFroadhog-01.mp4", "wk-minor-Flunar-new-yearFemotesFdoomfist.mp4",
  "wk-minor-Flunar-new-yearFemotesFDVa-kr.mp4", "wk-minor-Flunar-new-yearFemotesFmei.mp4", "wk-minor-Flunar-new-yearFemotesFjunkrat.mp4"]
var expressionContent = ["捏捏", "轻而易举", "行礼", "激动", "哑弹？"]
for (var i = 0; i < expressionA.length; i++) {
  $(".expression a").eq(i).css({backgroundImage:"url(image/" + expressionImg[i] + ")"})
  expressionA[i].index = i;
}
$(".expression a").click(function () {
  var idx=$(this).parents().index();
  $(".title h2").text(expressionContent[idx]);
  $(".flex-pop-up").show(200);
  $(".flex-pop-up .pop-up-video .video")
    .attr({controls: "controls", src: "video/"+expressionVideo[idx]+""})
    .get(0).play();
  $(".allMask").css({top: 0})
  $(".allMask").fadeIn(200);
})

