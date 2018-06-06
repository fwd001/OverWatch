/**
 * Created by Administrator on 2018/5/2.
 */
var login = document.querySelector("#login");
var btn = document.getElementById("btn");
var btn2 =  document.getElementById("btn2");
var user = document.querySelector("#user");
var footer =  document.querySelector("footer");
var loginPage = document.getElementById("login-page");
btn.addEventListener("click", function () {
  loginPage.style.display = "block";

});
btn2.addEventListener("click", function (e) {
  if($('#pswd').val() == '123456') {
    login.style.display = "none";
    user.style.display = "block";
    footer.style.marginTop = "2000px";
    $('.spans1').text('');
  } else {
    $('.spans1').text('密码输入错误请重新输入！')
  }
  
})
var email = document.getElementById("email");
check(email, /^\w+@\w+(\.\w+)+$/);

function check(element,reg) {
  element.addEventListener("blur",function () {
    if(reg.test(this.value)){
      element.nextElementSibling.style.color = "green";
      element.nextElementSibling.innerText = "欢迎回来,英雄!";
    }else if(this.value == ""){
      element.nextElementSibling.innerText = "";
    } else{
      element.nextElementSibling.style.color = "red";
      element.nextElementSibling.innerText = "请输入正确的暴雪账号!";
    }
  })
}

