(function() {
  var root, ticks, _;
  _ = require('underscore')._;
  ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  root.clark = function(data) {
    var chunk, d, graph, i, max, min;
    min = _.min(data);
    max = _.max(data);
    chunk = (max - min) / (ticks.length - 1);
    graph = "";
    return ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        d = data[_i];
        i = ((d - min) / chunk) >> 0;
        if (i < 1) {
          i = 1;
        }
        _results.push(ticks[i - 1]);
      }
      return _results;
    })()).join('');
  };
}).call(this);
