/**
 * Created by shiwa on 2018/5/11.
 */
//找到对应的播放器盒子 当鼠标点击盒子的时候 显示视频内容

  var player = document.querySelector(".player");
  var videoBox = document.querySelector(".videoBox");
  var video = videoBox.querySelector("video")
  player.onmousedown = function () {
    videoBox.style.display = "block";
    video.src = "video/swj-video.mp4";
    document.addEventListener("scroll", function () {
      var spaceY = window.pageYOffset;
      videoBox.style.top = spaceY + "px";
    })
  }




//当点击关闭按钮的时候 关闭视频内容

  var closeBtn=document.querySelector(".closeBtn");
  closeBtn.addEventListener("click",function () {
    var src = video.src.slice(-19);  
    
    if (src == "video/swj-video.mp4") {
      videoBox.style.display = "none"
      video.src = "";
    } else {
      video.src = "video/swj-video.mp4";
    }
  })


