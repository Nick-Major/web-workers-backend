const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

let news = [
    {
        header: 'Бегемот',
        caption: '/images/articles/hippopotamus.jpg',
        content: `Бегемот — одно из самых крупных животных на земле, его ещё называют гиппопотам. Бегемоты обитают в Африке, выбирают местность с неглубокими водоёмами: болотами, реками, озёрами.\n
        Бегемоты проводят большую часть времени в воде, на сушу выходят, как правило, ночью. У них короткие ноги с перепончатыми лапами и огромная пасть.\n
        Питаются бегемоты в основном травой, растущей по берегам водоёмов. За день один бегемот может съесть от 40 до 70 килограммов растительной пищи.\n
        Бегемоты считаются непредсказуемыми и опасными животными. Они способны развивать скорость до 35 км/ч и считаются одними из наиболее опасных животных Африки.`
    },
    {
        header: 'Лев',
        caption: '/images/articles/lion.jpg',
        content: `Лев — хищное млекопитающее семейства кошачьих. Это самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг.\n
        Самцы львов отличаются от самок наличием гривы, которая у некоторых подвидов покрывает плечи, часть спины и грудь. Окраска льва жёлто-серая с различными оттенками, на конце хвоста есть кисточка длинных волос.\n
        Львы населяют в основном саванны, но иногда могут перебираться в кустарниковую местность или лес. Живут не поодиночке, а в особых семейных группах — прайдах.\n
        Пищу добывают в основном самки, которые совместно охотятся преимущественно на копытных. Взрослые самцы живут поодиночке или небольшими группами (2–5 особей), питаются мелкими животными.\n
        Львы активны преимущественно ночью, могут спать до 20 ч в сутки. Продолжительность жизни около 40 лет, наибольшая репродуктивная активность до 20 лет.`
    },
    {
        header: 'Горилла',
        caption: '/images/articles/gorilla.jpg',
        content: `Гориллы — крупные млекопитающие, одни из ближайших родственников человека. Они обитают в тропических лесах и горных районах Африки.\n
        Гориллы обладают огромной силой и могут весить до 180 кг, что делает их одними из самых крупных обезьян на планете. Обычно передвигаются на четвереньках, но могут ходить и на задних ногах.\n
        Питаются в основном фруктами, листьями, стеблями и корнями, а также иногда моллюсками и насекомыми. Гориллы живут группами, состоящими из самца-вожака, нескольких самок и их детёнышей.\n
        В настоящее время гориллы находятся под угрозой исчезновения из-за разрушения их естественной среды обитания, браконьерства и болезней.\n`
    }
];

app.get('/news', (req, res) => {
    res.send(news);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});