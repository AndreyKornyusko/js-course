export default class View {
  constuctor() {
    this.refs = {};
    this.refs.form = document.querySelector('.js-form');
    this.refs.inputLink = document.querySelector('input[name=link]');
    this.refs.addBtn = document.querySelector('.form button');
    this.refs.container = document.querySelector('#root');
    this.refs.sourse = document.querySelector('#card').innerHTML.trim();
    this.refs.delBtn = document.querySelector('#root');
  }

  createTemplate() {
    const template = Handlebars.compile(sourse);
    const markup = template(model._items[0]);
    this.refs.container.insertAdjacentHTML('afterbegin', markup);
  }

  createTemplateFromLs() {
    const linksFromLs = JSON.parse(localStorage.getItem('links'));
    if (linksFromLs !== null) {
      model._items = linksFromLs;
      const template = Handlebars.compile(sourse);
      const markup = model._items.reduce(
        (acc, item) => acc + template(item),
        '',
      );
      this.refs.container.insertAdjacentHTML('afterbegin', markup);
    }
  }
}
