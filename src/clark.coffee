_ = require('underscore')._

ticks = ['▁','▂','▃','▄','▅','▆','▇','█']
root = exports ? this

root.clark = (data) ->
  min = _.min data
  max = _.max data
  chunk =  (max - min) / (ticks.length - 1)
  graph = ""

  return (for d in data
    i = ((d - min) / chunk) >> 0
    i = 1 if i < 1
    ticks[i - 1]).join('')
