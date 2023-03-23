export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('Code must be string');

    if (typeof name !== 'string') throw TypeError('Name must be string');

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') throw TypeError('Code must be string');
    this._code = code;
  }

  get name() {
    return this._code;
  }

  set name(name) {
    if (typeof name !== 'string') throw TypeError('Name must be string');
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
