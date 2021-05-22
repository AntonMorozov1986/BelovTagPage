class List {
  constructor(url = URL, cssSelector, classRelation = CLASS_RELATION) {
    this.url = url;
    this.itemList = [];
    this.cssSelector = cssSelector;
    this.classRelation = classRelation
    this._init();
  }

  _init() {
    return false;
  }

  render() {
    const htmlEl = document.querySelector(this.cssSelector);
    for (let item in this.itemList) {
      const itemObject = new this.classRelation[this.constructor.name](item);
      htmlEl.insertAdjacentHTML('beforeend', itemObject.render());
    }
  }

  /**
   *
   * @param url - url-адрес getRequest
   * @return - возвращает обьект JSON или ошибку в console
   */
  makeGETRequest(url) {
    return fetch(url)
      .then(response => response)
      .catch(error => console.log(`ОШИБКА!!! - ${error}`));
  }

  requestHandler(requestResponse) {
    const jsonData = requestResponse.json();
    this.itemList = [...jsonData];
    this.render();
  }
}