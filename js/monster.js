(function() {
  var colors = ["red", "green", "hotpink", "pink", "cyan", "yellowgreen", "purple", "deepskyblue"];
  var monsters = ['monsters2', 'monsters3']

  function Monster(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
  }
  var methods = Monster.prototype

  // 生成怪物盒子
  methods.enemy = function(map) {
    var $span = $('<span></span>');
    var randomIndex = parseInt(Math.random() * monsters.length);
    $span.css({
      width: this.width,
      height: this.height,
      position: 'absolute',
      left: map.width(),
      top: parseInt(Math.random() * map.height() - this.width),
      // backgroundColor: colors[randomIndex],
      backgroundImage: 'url(image/' + monsters[randomIndex] + '.png)',
      backgroundSize: this.width,
      backgroundRepeat: 'no-repeat',
    })
    return $span;
  }
  window.Monster = Monster;
})();