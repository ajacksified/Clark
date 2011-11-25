#!/usr/bin/env coffee
ticks = ['▁','▂','▃','▄','▅','▆','▇','█']

exports.clark = (data) ->
  m = Math.min data...
  n = (Math.max(data...)-m)/(ticks.length - 1)
  (ticks[(t-m)/n >> 0] for t in data).join('')

if require.main == module
  data = process.argv
    .map((a) -> parseInt(a, 10))
    .filter((v) -> v==v)
  process.stdout.write("#{exports.clark(data)}\n")
