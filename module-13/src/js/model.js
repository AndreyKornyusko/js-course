export default class Model {
  constructor(items = []) {
    this._items = items;
  } 
   getLinkData() {
    const apiKey = '5ba0af33f2af89d0737b612698e2451865b0a0af180af';
    const getLink = this.refs.inputLink.value.trim();
    const url = `https://api.linkpreview.net/?key=${apiKey}&q=${getLink}`;
  
    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
  
        throw new Error(`Error while fetching: ${response.statusText}`);
      })
      .catch(error => console.log(error));
  }

  setLocalStorage() {
    localStorage.setItem('links',JSON.stringify(model._items));
  }
}