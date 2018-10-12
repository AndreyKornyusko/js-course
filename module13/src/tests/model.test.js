import Model from '../js/model';
import axios from 'axios';
jest.mock('axios');

describe('Model class', () => {
  it('Should create Model instance', () => {
    const model = new Model();
    expect(model instanceof Model).toBe(true);
  });

  it('Should contain starting items', () => {
    const model = new Model();
    expect((model._items = [])).toEqual([]);
  });

  it('Should get url', () => {
    const model = new Model();
    expect(model.getUrl('https://www.google.com.ua/')).toBe(
      'https://api.linkpreview.net/?key=5ba0af33f2af89d0737b612698e2451865b0a0af180af&q=https://www.google.com.ua/',
    );
  });

  it('Should get link data', () => {
    const model = new Model();
    expect.assertions(1);
    const url = 'https://www.google.com.ua/';
    const response = {
      data: {
        description:
          "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
        image:
          'http://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png',
        title: 'Google',
        url: url,
      },
    };

    axios.get.mockResolvedValue(response);

    const result = {
      description:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
      image:
        'http://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png',
      title: 'Google',
      url: url,
    };

    return model
      .getLinkData(url)
      .then(data => {
        expect(data).toEqual(result);
      })
      .catch(error => {
        expect(error).not.toBeNull();
      });
  });

  it('Shoud add data to model item', () => {
    const model = new Model();
    const url = 'https://www.google.com.ua/';

    const response = {
      data: {
        description:
          "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
        image:
          'http://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png',
        title: 'Google',
        url: url,
      },
    };

    axios.get.mockResolvedValue(response);

    return model.addData(url).then(data => {
      expect(data).toEqual({
        link: url,
        id: expect.any(Number),
        image:
          'http://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png',
        title: 'Google'
      });
    });
  });
});
