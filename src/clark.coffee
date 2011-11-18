_     = require('underscore')._
ticks = ['▁','▂','▃','▄','▅','▆','▇','█']
root = exports ? this

root.clark =
  sparks: (data) ->
    min = _.min data
    max = _.max data
    chunk =  (max - min) / (ticks.length - 1)
    graph = ""

    _.each data, (d) ->
      i = ((d - min) / chunk) >> 0
      i = 1 if i < 1
      graph +=  ticks[i - 1]

    return graph
