(function(root) {
  var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇'],
      data;

  var clark = function(data) {
    var min = Math.min.apply(Math, data),
        max = (Math.max.apply(Math, data) - min) / (ticks.length - 1),
        currentTick;

    var i, len, results = [];

    for (i = 0, len = data.length; i < len; i++) {
      currentTick = data[i];
      results.push(ticks[(currentTick - min) / max >> 0]);
    }

    return results.join('');
  };

  /* expose it to the world */

  if((typeof module !== "undefined") && module.exports){
    module.exports = clark;
  } else if((typeof define === 'function') && define.amd) {
    // AMD
    define('clark', [], function() {
      root.clark = clark;
      return clark;
    });
  } else {
    // Browser global
    root.clark  = clark;
  }
}).call(this);
