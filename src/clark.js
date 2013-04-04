(function(root) {
  // Define the various steps; we'll use 7 fairly safe ticks.
  var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇'],
      data;

  // Build the actual clark function, which takes an array of numbers and
  // outputs back the graph as a string.
  var clark = function(data) {

    // Find the min and max and normalize into steps based on the number of 
    // ticks.
    var min = Math.min.apply(Math, data),
        max = (Math.max.apply(Math, data) - min) / (ticks.length - 1),
        results = [];

    for (var i = 0, len = data.length; i < len; i++) {
      // Pick the correct tick based on the min-shifted value.
      results.push(ticks[parseInt((data[i] - min) / max)]);
    }

    // Smush together the array of tick asciis.
    return results.join('');
  };


  // Expose the module in whatever the most appropriate way probably is based
  // on the global environment.

  // Node.js
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
