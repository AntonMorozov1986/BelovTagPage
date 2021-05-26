class SsmItem extends Item {
  constructor(ssmItemObject) {
    super(ssmItemObject);
  }

  render() {
    return `<a href="#">${this.id}. ${this.title}</a>`
  }
}