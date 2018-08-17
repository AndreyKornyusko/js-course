'use strict';
/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  {
    preview: 'img/preview-1.jpeg',
    fullview: 'img/fullview-1.jpeg',
    alt: 'A girl on mountain',
  },
  {
    preview: 'img/preview-2.jpeg',
    fullview: 'img/fullview-2.jpeg',
    alt: 'A boy on mountain',
  },
  {
    preview: 'img/preview-3.jpeg',
    fullview: 'img/fullview-3.jpeg',
    alt: 'text 3',
  },
  {
    preview: 'img/preview-4.jpeg',
    fullview: 'img/fullview-4.jpeg',
    alt: 'text 4',
  },
  {
    preview: 'img/preview-5.jpeg',
    fullview: 'img/fullview-5.jpeg',
    alt: 'text 5',
  },
  {
    preview: 'img/preview-6.jpeg',
    fullview: 'img/fullview-6.jpeg',
    alt: 'text 6',
  },
  {
    preview: 'img/preview-7.jpeg',
    fullview: 'img/fullview-7.jpeg',
    alt: 'text 7',
  },
  {
    preview: 'img/preview-8.jpeg',
    fullview: 'img/fullview-8.jpeg',
    alt: 'text 8',
  },
  {
    preview: 'img/preview-9.jpeg',
    fullview: 'img/fullview-9.jpeg',
    alt: 'text 9',
  },
  {
    preview: 'img/preview-10.jpeg',
    fullview: 'img/fullview-10.jpeg',
    alt: 'text 10',
  },
  {
    preview: 'img/preview-11.jpeg',
    fullview: 'img/fullview-11.jpeg',
    alt: 'text 11',
  },
  {
    preview: 'img/preview-12.jpeg',
    fullview: 'img/fullview-12.jpeg',
    alt: 'text 12',
  },
  {
    preview: 'img/preview-13.jpeg',
    fullview: 'img/fullview-13.jpeg',
    alt: 'text 13',
  },
  {
    preview: 'img/preview-14.jpeg',
    fullview: 'img/fullview-14.jpeg',
    alt: 'text 14',
  },
];


const createGallery = arr => {
  const gallery = document.querySelector('.js-image-gallery');
  const fullview = document.createElement('div');
  fullview.classList.add('fullview');

  const preview = document.createElement('ul');
  preview.classList.add('preview');

  gallery.append(fullview, preview); 

  for (let i = 0; i < arr.length; i++) {
    preview.insertAdjacentHTML('beforeend', `<li class="preview-item"><img src=${arr[i].preview} data-fullview=${arr[i].fullview} alt=${arr[i].alt}></li>`);
  }

  fullview.insertAdjacentHTML(
    'beforeend', `<img src=${arr[0].fullview} alt=${arr[0].alt}>`);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onClick = event => {
    event.preventDefault();
    if (event.target !== event.currentTarget) {
      const parentNode = event.target.parentNode;
      
      const previewImgsLiArr = document.querySelectorAll('.preview-item');
      const previewArr = Array.from(previewImgsLiArr);
      previewArr.forEach(imgLi=>imgLi.style.backgroundColor = 'rgb(255, 255, 255)');
      
      parentNode.style.backgroundColor = `rgb(${getRandomInRange(0, 255)}, ${getRandomInRange(0, 255)}, ${getRandomInRange(0, 255)})`;

      const galleryImgData = event.target.dataset.fullview;
      const galleryImgAlt = event.target.alt;
      const fullViewImg = document.querySelector('.fullview img');
      fullViewImg.setAttribute("src", galleryImgData);
      fullViewImg.setAttribute("alt", galleryImgAlt);
       console.log(gallery);
     }
  };

  preview.addEventListener('click', onClick);
};

createGallery(galleryItems);
