(function() {
  var data, index, sparks, ticks, _;
  _ = require('underscore')._;
  ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
  sparks = function(data) {
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
  };
  index = 0;
  _.find(process.argv, function(a, i) {
    index = i;
    return !_.isNaN(parseInt(a));
  });
  data = _.rest(process.argv, index);
  process.stdout.write(sparks(data) + "\n");
}).call(this);
