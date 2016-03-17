export default class Store {
  constructor(key) {
  		var storage = window['localStorage'],
  		x = '__storage_test__';
  		storage.setItem(x, x);
  		storage.removeItem(x);

  		this.key = key;
  }

  get() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  set(state) {
    localStorage.setItem(this.key, JSON.stringify(state));
  }
}