class TagItem extends Item {
  constructor(tagItemObject) {
    super(tagItemObject);
  }

  render() {
    return `<input type="checkbox" class="tags-item" id="tag-${this.id}">
            <label for="tag-${this.id}" class="tags-label" tabindex="0">${this.title}</label>`
  }

}
