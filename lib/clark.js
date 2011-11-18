(function() {
  var root, ticks, _;
  _ = require('underscore')._;
  ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.clark = {
    sparks: function(data) {
      var chunk, graph, max, min;
      min = _.min(data);
      max = _.max(data);
      chunk = (max - min) / (ticks.length - 1);
      graph = "";
      _.each(data, function(d) {
        var i;
        i = ((d - min) / chunk) >> 0;
        if (i < 1) {
          i = 1;
        }
        return graph += ticks[i - 1];
      });
      return graph;
    }
  };
}).call(this);
