class List {
  constructor(apiUrl, listUrl, cssSelector, classRelation = CLASS_RELATION) {
    this.url = `${apiUrl + listUrl}`;
    this.listEl = document.querySelector(cssSelector)
    this.itemList = [];
    //this.cssSelector = cssSelector;
    this.classRelation = classRelation
    this._init();
  }

  _init() {
    return false;
  }

  render() {
    //const htmlEl = document.querySelector(this.cssSelector);
    for (let item of this.itemList) {
      const itemObject = new this.classRelation[this.constructor.name](item);
      this.listEl.insertAdjacentHTML('beforeend', itemObject.render());
    }
  }

  /**
   *
   * @param url - url-адрес getRequest
   * @return - возвращает обьект JSON или ошибку в console
   */
  makeGETRequest(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log(`ОШИБКА!!! - ${error}`));
  }

  requestHandler(json) {
    this.itemList = [...json];
    this.render();
  }
}