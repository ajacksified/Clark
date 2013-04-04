{spawn, exec} = require 'child_process'

option '-p', '--prefix [DIR]', 'set the installation prefix for `cake install`'

task 'doc', 'rebuild the Clark documentation', ->
  exec([
    'paige'
  ].join(' && '), (err) ->
    throw err if err
  )
