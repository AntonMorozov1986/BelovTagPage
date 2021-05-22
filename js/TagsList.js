class TagsList extends List {
  constructor(url, cssSelector) {
    super(url, cssSelector);
    this.makeGETRequest(this.url)
      .then(response => this.requestHandler(response));
  }
}