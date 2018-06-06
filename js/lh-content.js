/**
 * Created by Administrator on 2018/5/2.
 */
var bannerImg =  document.querySelector(".banner-img");
var ul =  document.querySelector(".banner-img ul");
var points =  document.querySelectorAll(".banner-img ol li");
var lis =  document.querySelectorAll(".banner-img ul li");
var arrow =  document.querySelector(".arrow");
var arrRight =  document.querySelector(".arrRight");
var arrLeft =  document.querySelector(".arrLeft");
var timeTd;
var count = 0 ;
bannerImg.onmouseover = function () {
  clearInterval(timeTd);
  animate(arrow,{opacity:1})
};
//自动播放效果
bannerImg.onmouseout = function () {
  timeTd = setInterval(function () {
    arrRight.click();
  },1500)
  animate(arrow,{opacity:0})
};
//左右箭头点击事件
arrRight.onclick = function () {
  if (count >= lis.length - 1) {
    count = 0;
    ul.style.left = 0;
  }
  count++;
  animate(ul, {left: -count * bannerImg.offsetWidth});
  for(var i = 0; i< points.length; i++){
    points[i].className = "";
  }
  if(count >= lis.length-1){
    points[0].className = "now";
  }else{
    points[count].className = "now";
  }
}
arrLeft.onclick = function () {
  if (count <= 0) {
    count = lis.length - 1;
    ul.style.left = -count * bannerImg.offsetWidth + "px";
  }
  count--;
  animate(ul, {left: -count * bannerImg.offsetWidth});
  for(var i = 0; i< points.length; i++){
    points[i].className = "";
  }
  if(count >= lis.length-1){
    points[0].className = "now";
  }else{
    points[count].className = "now";
  }
}
