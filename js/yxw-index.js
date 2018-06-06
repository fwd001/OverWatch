/**
 * Created by 18361 on 2018/4/30.
 */
//视频部分开始
var imgs = document.querySelectorAll(".videos a");
for (var i = 0; i < imgs.length; i++) {
  var div = document.createElement("div");
  div.className = "videoimg";
  imgs[i].appendChild(div);

}

//视频部分结束
//小动画部分开始
var littlevideos = document.querySelector(".littlevideos");
var links = littlevideos.querySelectorAll("li a");
for (var i = 0; i < links.length; i++) {
  var div = document.createElement("div");
  div.className = "box-no"
  links[i].appendChild(div);
  var littleVideo = document.createElement("div");
  littleVideo.className = "littlevideoimg";
  links[i].appendChild(littleVideo);

}


var littleVideos = document.querySelectorAll(".littlevideoimg");
var divs = document.querySelectorAll(".box-no");
for (var i = 0; i < links.length; i++) {
  links[i].index = i;
  links[i].onmouseover = function () {
    divs[this.index].style.display = "block";
    littleVideos[this.index].className = "move"
  }
  links[i].onmouseout = function () {
    divs[this.index].style.display = "none";
    littleVideos[this.index].className = "littlevideoimg"
  }
}
//小动画部分结束


//右侧小导航部分开始
var lis = document.querySelectorAll(".sub-nav-manu li");
var icons = document.querySelectorAll(".sub-nav-manu .sub-nav-icon");
var count;
for (var i = 0; i < lis.length; i++) {
  lis[i].onmouseover = function () {
    this.className = "now"
    animate(this, {left: 0});
  }
  lis[i].onmouseout = function () {
    for (var i = 1; i < lis.length; i++) {
      lis[i].className = "";
    }
    if (count) {
      lis[0].className = "";
      lis[count].className = "now";
    }
    animate(this, {left: 70});
  }
  lis[i].index = i;
  lis[i].addEventListener("click", function () {
    count = this.index;

  })
}

for (var i = 0; i < icons.length; i++) {
  icons[i].style.backgroundImage = "url(image/yxw-little" + (i + 1) + ".png)";
  icons[i].style.backgroundPosition = "center top";
}

//右侧小导航部分结束
//视频弹出部分
var closebtn = document.querySelector(".closebtn");
var popBox = document.querySelector(".pop-box");
var videos = document.querySelectorAll(".videos a ");
var boxModel = document.querySelector(".boxModel");
var littlevideos = document.querySelectorAll(".littlevideos li");
for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener("click", function () {
    popBox.style.display = "block";
    boxModel.style.display = "block";
  })
}
for (var i = 0;i < littlevideos.length;i++) {
  littlevideos[i].addEventListener("click",function () {
    popBox.style.display = "block";
    boxModel.style.display = "block";

  })
}

closebtn.addEventListener("click", function () {
  popBox.style.display = "none";
  boxModel.style.display = "none";
  $('.pop-box .content video').get(0).pause();
})
//视频弹出部分结束

