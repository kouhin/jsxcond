function evalFunc(v) {
  return (typeof v === 'function') ? v() : v
}

export function _if (testForm, thenForm, elseForm) {
  const result = evalFunc(testForm) ? thenForm : (elseForm || null)
  return evalFunc(result);
}

export function _cond() {
  for (var _len = arguments.length, _key = 0; _key < _len; _key++) {
    const block = arguments[_key];
    if (!(block instanceof Array)) {
      return evalFunc(block)
    }
    const testForm = block[0], thenForm = block.length > 1 ? block[1] : null
    if (evalFunc(testForm)) {
      return evalFunc(thenForm)
    }
  }
  return null
}
