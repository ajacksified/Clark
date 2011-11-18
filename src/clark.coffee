_     = require('underscore')._
ticks = ['▁','▂','▃','▄','▅','▆','▇','█']

sparks = (data) ->
  min = _.min data
  max = _.max data
  chunk =  (max - min) / (ticks.length - 1)
  graph = ""

  _.each data, (d) ->
    i = ((d - min) / chunk) >> 0
    i = 1 if i < 1
    graph +=  ticks[i - 1]

  return graph

index = 0

_.find process.argv, (a, i) ->
  index = i
  return ! _.isNaN(parseInt a)

data = _.rest(process.argv, index)
process.stdout.write sparks(data) + "\n"
