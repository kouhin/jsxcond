# JSXCOND

[![Greenkeeper badge](https://badges.greenkeeper.io/kouhin/jsxcond.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/kouhin/jsxcond.svg?branch=master)](https://travis-ci.org/kouhin/jsxcond)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm](https://img.shields.io/npm/v/jsxcond.svg)](https://npmjs.org/package/jsxcond)

## Installation

```
npm install jsxcond --save
```

## Usage

### if-else-then

**`_if (TEST_FORM, THEN_FORM, [ELSE_FORM])`**

- Common Usage

``` jsx
import React from 'react';
import { _if } from 'jsxcond'

class SomeComponent extends React.Component {
  render() {
    const condition = true;
    <div>
      {_if ( condition, () => (
        <span>
          condition is true
        </span>
      ), () => (
        <span>
          condition is false
        </span>
      ))}
    </div>
  }
}
```

- Only if, no else

``` jsx
import React from 'react';
import { _if } from 'jsxcond'

class SomeComponent extends React.Component {
  render() {
    const condition = true;
    <div>
      {_if ( condition, () => (
        <span>
          condition is true
        </span>
      ))}
    </div>
  }
}
```

- `TEST_FORM` can be a function

``` jsx
import React from 'react';
import { _if } from 'jsxcond'

class SomeComponent extends React.Component {
  render() {
    const condition = true;
    <div>
      {_if ( () => {
        return true
      }, () => (
        <span>
          condition is true
        </span>
      ), () => (
        <span>
          condition is false
        </span>
      ))}
    </div>
  }
}
```

- Recommend using `() => ()` to have lazy eval(). However using common value as `THEN_FORM` and `ELSE_FORM` is still supported.

``` jsx
import React from 'react';
import { _if } from 'jsxcond'

class SomeComponent extends React.Component {
  render() {
    const condition = true;
    <div>
      {_if ( condition, 'condition is true', (
        <span>
          condition is false
        </span>
      ))}
    </div>
  }
}
```

### cond

**`_cond (STATEMENT1, STATEMENT2...)`**

STATEMENT can be `array`, `function`, `common value`:

  - When it is a value, it will be returned immediately.
  - When it is a function, it will be evaluated and returned immediately.
  - When it is a array, the first value will be used as TEST_FORM, and the second will be used as THEN_FORM.

- Common Usage

``` jsx
import React from 'react';
import { _cond } from 'jsxcond'

class SomeComponent extends React.Component {
  render() {
    const condition = 3
    <div>
      {_cond (
        [condition === 1, () => (
          <span>
            condition is 1
          </span>
        )],
        [condition === 2 , () => (
          <span>
            condition is 2
          </span>
        )], () => (
          <span>
            Otherwise
          </span>
        )}
    </div>
  }
}
```

- `TEST_FORM` can be a function

``` jsx
import React from 'react';
import { _cond } from 'jsxcond'

class SomeComponent extends React.Component {
  const condition = 3;
  render() {
    <div>
      {_cond (
        [
          () => {
            return condition === 1
          }, () => (
            <span> condition is 1 </span>
          )
        ],
        [
          () => {
            return condition === 2
          }, () => (
            <span> condition is 2 </span>
          )
        ]
      )}
    </div>
  }
}
```

## License

MIT
