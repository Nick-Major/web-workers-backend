const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.use(cors());

const generateArticle = () => {
    let content = faker.lorem.text();
    content = content.substring(0, 50); // Обрезаем до 50 символов
  
    return {
      header: faker.lorem.sentence(),
      caption: faker.image.url(),
      content: content
    };
};

function generateNews() {
    const randomNumber = faker.number.int({ min: 1, max: 3 });
    let arr = [];

    for (let index = 0; index < randomNumber; index++) {
        arr.push(generateArticle());
    }

    return arr;
};

app.get('/news', (req, res) => {
    const response = generateNews();
    res.send(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});