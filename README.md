# ember-mock-socket-shim

[![CircleCI](https://circleci.com/gh/dustinfarris/ember-mock-socket-shim.svg?style=svg)](https://circleci.com/gh/dustinfarris/ember-mock-socket-shim)

Use [mock-socket](https://github.com/thoov/mock-socket) in your Ember project.


## Installation

```
ember install ember-mock-socket-shim
```


## Usage

```javascript
import { Server } from 'mock-socket';

moduleForAcceptance('chat', {
  beforeEach() {
    this.mockServer = new Server('ws://localhost:8080');
  },
  afterEach() {
    this.mockServer.stop();
  }
});

test('receiving messages', function(assert) {
  mockServer.on('connection', server => {
    mockServer.send('test message 1');
    mockServer.send('test message 2');
  });

  visit('/chat');

  andThen(() => {
    assert.equal(find('.message').length, 2, 'should be 2 messages');
  });
});
```


## Development

### Installation

* `git clone <repository-url>` this repository
* `cd ember-mock-socket-shim`
* `yarn install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
