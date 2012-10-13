var assert = require('assert')
  , Twit = require('../lib/twitter')
  , config = require('../config')

var twit = new Twit(config)

describe('REST API', function () {
  it('POST `account/update_profile`', function (done) {
    twit.post('account/update_profile', function (err, reply) {
      check(err, reply)
      console.log('screen name:', reply.screen_name)
      done()
    })
  })
  it('GET `statuses/home_timeline`', function (done) {
    twit.get('statuses/home_timeline', function (err, reply) {
      check(err, reply)
      done()
    })
  })
  it('GET `statuses/mentions_timeline`', function (done) {
    twit.get('statuses/mentions_timeline', function (err, reply) {
      check(err, reply)
      done()
    })
  })
  it('GET `statuses/user_timeline`', function (done) {
    twit.get('statuses/user_timeline', function (err, reply) {
      check(err, reply)
      done()
    })
  })
  it('GET `search/tweets` { q: "grape", since_id: 12345 }', function (done) {
    var params = { q: 'grape', since_id: 12345 }
    twit.get('search/tweets', params, function (err, reply) {
      check(err, reply)
      done()
    })
  })
  it('GET `search/tweets` { q: "banana", since: "2011-11-11" }', function (done) {
    var params = { q: 'banana', since: '2011-11-11' }
    twit.get('search/tweets', params, function (err, reply) {
      check(err, reply)
      done()
    })
  })
  it('GET `direct_messages`', function (done) {
    twit.get('direct_messages', function (err, reply) {
      check(err, reply)
      done()
    })
  })
  it('GET `followers/ids`', function (done) {
    twit.get('followers/ids', function (err, reply) {
      check(err, reply)
      done()
    })
  })
})

function check (err, reply) {
  assert.equal(err, null)
  assert.equal(typeof reply, 'object')
  assert.ok(typeof reply === 'object' || Array.isArray(reply))
}
