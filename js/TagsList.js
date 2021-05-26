class TagsList extends List {
  constructor(apiUrl = URL, listUrl = URL_TAGS_LIST, cssSelector = TAG_LIST_CSS_SELECTOR) {
    super(apiUrl, listUrl,cssSelector);
    this.makeGETRequest(this.url)
      .then(response => this.requestHandler(response));
    this._init()
  }

  _init() {
    //const tagListEl = document.querySelector(this.cssSelector);
    this.listEl.addEventListener('change', this.highlightCheckedEl)
  }

  highlightCheckedEl(evt) {
    let labelEl = document.querySelector(`label[for="${evt.target.id}"]`);
    if (evt.target.checked) {
      labelEl.classList.add('checked');
    } else {
      labelEl.classList.remove('checked');
    }
  }
}
