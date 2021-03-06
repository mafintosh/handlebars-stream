var test = require('tape');
var concat = require('concat-stream');
var handlebars = require('../');

test('basic', function(t) {
  var strm = handlebars('hello {{data}}');
  strm.pipe(concat(function(result) {
    t.equal(result, 'hello world');
    t.end();
  }));

  strm.end({data: 'world'});
});
