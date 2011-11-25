(function() {
  var data, ticks;
  ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
  exports.clark = function(data) {
    var m, n, t;
    m = Math.min.apply(Math, data);
    n = (Math.max.apply(Math, data) - m) / (ticks.length - 1);
    return ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        t = data[_i];
        _results.push(ticks[(t - m) / n >> 0]);
      }
      return _results;
    })()).join('');
  };
  if (require.main === module) {
    data = process.argv.map(function(a) {
      return parseInt(a, 10);
    }).filter(function(v) {
      return v === v;
    });
    process.stdout.write("" + (exports.clark(data)) + "\n");
  }
}).call(this);
