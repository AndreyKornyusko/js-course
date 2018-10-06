
export default class Controller {
  constructor(viev, model) {
    this._viev = viev;
    this._model = model;
    this._view.refs.addBtn.addEventListener('click', this.onClickAdd.bind(this));
    this._view.refs.delBtn.addEventListener('click', this.onClickDel.bind(this));
  }

  onClickDel(evt) {
    const target = evt.target;
    const nodeName = target.nodeName;
    const action = target.dataset.action;

    if (nodeName !== 'BUTTON' || action !== 'delete') return;

    const parent = evt.target.closest('.link-card');

    const id = Number(evt.target.parentNode.dataset.id);
    const updatedLinksList = this._model._items.filter(val => val.id !== id);
    this._model._items = updatedLinksList;
    this._model.setLocalStorage();
    parent.remove();
    console.log('constants.links', this._model._items);
  }

  onClickAdd(evt) {
    const target = evt.target;
    const action = target.dataset.action;
    if (target.nodeName !== 'BUTTON' || action !== 'add') return;
    evt.preventDefault();

    if (!this.isEnteredUrlValid()) {
      form.reset();
      return;
    }

    this._model.getLinkData().then(data => {
      console.log('data', data);

      const linksItem = {
        link: this._view.refs.inputLink.value.trim(),
        id: Date.now(),
        img: data.image,
        title: data.title,
      };

      this._model._items.unshift(linksItem);
      this._view.createTemplate();
      console.log('constants.links:', this._model._items);

      model.setLocalStorage();
      form.reset();
    });
  }

  isEnteredUrlValid() {
    const enteredUrl = this._view.refs.inputLink.value.trim();
    const isUrlValid = /^((https?|ftp)\:\/\/)/.test(enteredUrl);
    const isValid = val => val.link === this._view.refs.inputLink.value.trim();
    const isLinkValid =this._model._items.some(isValid);

    if (!isUrlValid) {
      alert('Your URL is not valid');
      return false;
    }
    if (isLinkValid) {
      alert('Such a bookmark already exists');
      return false;
    }

    return true;
  }
}
