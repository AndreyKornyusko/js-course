'use strict';
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-1.com',
  },
  {
    img: 'https://placeimg.com/400/150/nature',
    title: 'Post title 2',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-2.com',
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com',
  },
];

const createPostCard = function(post) {
  const postNode = document.createElement('div');
  postNode.classList.add('post');

  const img = document.createElement('img');
  img.classList.add('post__image');
  img.setAttribute('src', `${post.img}`);
  img.setAttribute('alt', 'post image');

  const title = document.createElement('h2');
  title.classList.add('post__title');
  title.textContent = `${post.title}`;

  const text = document.createElement('p');
  text.classList.add('post__text');
  text.textContent = `${post.text}`;

  const button = document.createElement('a');
  button.classList.add('button');
  button.setAttribute('href', `${post.link}`);
  button.textContent = 'Read more';

  postNode.append(img, title, text, button);
  return postNode;
};

const createCards = function(posts) {
  let postNodes = posts.map(card => createPostCard(card));
  return postNodes;
};

const wrapper = document.querySelector('.wrapper');
const postCard = createCards(posts);
// console.log(...postCard);
// wrapper.appendChild(...postCard); Оператор Рест не работает в этом случае почему-то
postCard.forEach(postItem => wrapper.appendChild(postItem));
