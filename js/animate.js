// 带有透明效果的缓动函数
function animate(element, obj, fn) {
  clearInterval(element.timeId);
  element.timeId = setInterval(function() {
    var flag = true;
    for (var key in obj) {
      if (key == 'opacity') {
        var attr = key;
        var target = obj[key] * 1000;
        var current = Math.round(parseFloat(window.getComputedStyle(element).opacity) * 1000)
      } else if (key == 'scrollTop') {
        var attr = key;
        var target = obj[key];
        var current = Math.ceil(element.scrollTop) || 0;
      } else {
        var attr = key;
        var target = obj[key];
        var current = parseInt(window.getComputedStyle(element)[attr]) || 0;
      }
      // current = parseInt(current);
      var step = (target - current) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step);

      current += step;

      if (key == 'opacity') {
        element.style[attr] = current / 1000;
        element.style.filter = 'alpha(optacipy: ' + current + ')'
      } else if (key == 'scrollTop') {
        element.scrollTop = current;
      } else {
        element.style[attr] = current + 'px';
      }

      if (current != target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(element.timeId);
      fn && fn();
    }
  }, 17)
}

function setOpacity(element, obj, fn) {
  clearInterval(element.timeId);
  element.timeId = setInterval(function() {
    var flag = true;
    for (var key in obj) {
      var attr = key;
      var target = obj[key] * 1000;
      var current = Math.round(parseFloat(window.getComputedStyle(element)[attr]) * 1000);

      // current = parseInt(current);
      var step = (target - current) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step);

      current += step;

      element.style[attr] = current / 1000;
      element.style.filter = 'alpha(optacipy: ' + current + ')'
      if (current != target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(element.timeId);
      fn && fn();
    }
  }, 77)
}