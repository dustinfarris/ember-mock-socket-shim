import { module, test } from 'ember-qunit';

import {
  WebSocket,
  Server,
  SocketIO
} from 'mock-socket';


module('Unit | vendor imports | mock-socket');


test('it exports WebSocket', function(assert) {
  assert.ok(WebSocket);
});


test('it exports Server', function(assert) {
  assert.ok(Server);
});


test('it exports SocketIO', function(assert) {
  assert.ok(SocketIO);
});
