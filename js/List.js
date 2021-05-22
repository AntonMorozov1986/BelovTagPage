class List {
  constructor(url, cssSelector, classRelation = CLASS_RELATION) {
    this.url = url;
    this.itemList = [];
    this.cssSelector = cssSelector;
    this._init();
  }

  _init() {
    return false;
  }

  render() {
    const htmlEl = document.querySelector(this.cssSelector);
    for (let item in this.itemList) {
      const itemObject = new this.cssSelector[this.constructor.name](item);
      htmlEl.insertAdjacentHTML('beforeend', itemObject.render());
    }
  }
}