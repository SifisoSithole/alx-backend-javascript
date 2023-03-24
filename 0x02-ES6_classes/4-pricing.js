import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) throw TypeError('currency must be an instance of Currency');

    if (typeof amount !== 'number') throw TypeError('amonut must be a number');

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw TypeError('amonut must be a number');

    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(cur) {
    if (!(cur instanceof Currency)) throw TypeError('currency must be an instance of Currency');

    this._currency = cur;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw TypeError('amount must be a number');
    if (typeof conversionRate !== 'number') throw TypeError('conversion rate must be a number');
    return amount * conversionRate;
  }
}
