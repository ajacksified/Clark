Clark
=====

Current version: 0.0.6

A coffeescript, npm-ready version of the [spark](https://github.com/holman/spark)
shell script. See spark documentation for details how to use.

Check out the:

* [Source code on Github](https://github.com/ajacksified/Clark/)
* [Documentation](https://ajacksified.github.com/Clark/)

![Clark](http://3.bp.blogspot.com/_-gVIsw8A1eI/TQoX8ONKImI/AAAAAAAAAJY/1HLqqXStGvY/s1600/clark-griswold.jpg)

Installation
------------

__Command-line__: 
* Install node
* `npm install clark -g`
* `clark 1 2 3` or `clark 1,2,3`

Clark ships with exports for CommonJS, AMD, and browser globals.

Usage
-----

__Command-line Usage__

    clark 1 2 3 4 5

output: ▁▂▄▆█

    echo 1 2 3 4 5 | xargs clark

output: ▁▂▄▆█

    clark 1,2,3,4,5

output: ▁▂▄▆█

__Node Usage__

```
var clark = require('clark');
console.log(clark([1,2,3]));
```

__Browser Usage__

```
<script src="src/clark.js"></script>
<script>
  console.log(clark([1,2,3]));
</script>
```


Check out [the spark page](https://github.com/holman/spark/wiki/Wicked-Cool-Usage) for some neat things to do.

Also available as a [hubot script](https://github.com/github/hubot-scripts).

Changelog
---------

__v0.0.6__ *breaking*: change export to return a function instead of and object
