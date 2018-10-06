const url = inputLinkValue => {
  const apiKey = '5ba0af33f2af89d0737b612698e2451865b0a0af180af';
  const getUrl = `https://api.linkpreview.net/?key=${apiKey}&q=${inputLinkValue}`;
  return getUrl;
};
// const getLink = 'https://www.ukr.net/';
// view.refs.inputLink.value.trim();

// export 
const getLinkData = () => {
  return (
    fetch(url)
      .then(response => {
        if (response.ok) return response.json();

        throw new Error(`Error while fetching: ${response.statusText}`);
      })
      // .then((data, inputLinkValue, modelItem) => {
      //   console.log('data', data);
      //   const linksItem = {
      //     link: inputLinkValue,
      //     id: Date.now(),
      //     img: data.image,
      //     title: data.title,
      //   };
      //   modelItem.unshift(linksItem);
      // })
      .catch(error => console.log(error))
  );
};
