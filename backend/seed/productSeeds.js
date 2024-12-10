const Product = require('../models/product');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');


const productSeeds = [
  {
    "name": "Аметист",
    "description": "Камень, который помогает успокоить ум и улучшить интуицию.",
    "price": 252.00,
    "category": "Кристаллы",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Amethyst_DSCF0451.jpg",
    "brand": "Crystal Magic",
    "stock": 50
  },
  {
    "name": "Розовый кварц",
    "description": "Камень любви и гармонии, который помогает открыть сердце.",
    "price": 181.00,
    "category": "Кристаллы",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Uncut_Rose_Quartz.jpg/540px-Uncut_Rose_Quartz.jpg",
    "brand": "Crystal Magic",
    "stock": 75
  },
  {
    "name": "Тигровый глаз",
    "description": "Камень, который приносит удачу и защиту, улучшает концентрацию.",
    "price": 223.00,
    "category": "Кристаллы",
    "image": "https://cdn.alweb.com/thumbs/zumurrod/article/fit710x532/%D9%83%D9%85-%D8%B3%D8%B9%D8%B1-%D8%AD%D8%AC%D8%B1-%D8%B9%D9%8A%D9%86-%D8%A7%D9%84%D9%87%D8%B1.jpg",
    "brand": "Crystal Magic",
    "stock": 60
  },
  {
    "name": "Кварц",
    "description": "Универсальный камень, который усиливает энергию и улучшает ясность ума.",
    "price": 1050.00,
    "category": "Кристаллы",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Quartz_Crystal.jpg",
    "brand": "Crystal Magic",
    "stock": 100
  },
  {
    "name": "Лазурит",
    "description": "Камень мудрости и интуиции, который помогает в духовном росте.",
    "price": 300.00,
    "category": "Кристаллы",
    "image": "https://shoplineimg.com/5d04dbdc2415b30001d56de4/65f801378afbf70017bbd7ce/750x.jpg?",
    "brand": "Crystal Magic",
    "stock": 40
  },
  {
    "name": "Амулет защиты",
    "description": "Амулет, который защищает от негативной энергии и приносит удачу.",
    "price": 4500.00,
    "category": "Амулеты",
    "image": "https://static.alltime.ru/obj/article/image-blog/oberegi_na_rabotu/oberegi_na_rabotu_7.jpg",
    "brand": "Mystic Amulets",
    "stock": 30
  },
  {
    "name": "Талисман удачи",
    "description": "Талисман, который привлекает удачу и процветание в жизнь.",
    "price": 3500.00,
    "category": "Амулеты",
    "image": "https://img.joomcdn.net/9146d60f1559021368c1ca24d86eae7f6336e4bb_original.jpeg",
    "brand": "Mystic Amulets",
    "stock": 45
  },
  {
    "name": "Амулет любви",
    "description": "Амулет, который помогает найти и укрепить любовь.",
    "price": 3000.00,
    "category": "Амулеты",
    "image": "https://img.freepik.com/premium-photo/illustration-magical-amulet-which-brings-happy-love_756405-66162.jpg",
    "brand": "Mystic Amulets",
    "stock": 50
  },
  {
    "name": "Амулет здоровья",
    "description": "Амулет, который способствует улучшению здоровья и благополучия.",
    "price": 3800.00,
    "category": "Амулеты",
    "image": "https://i.etsystatic.com/6497964/r/il/3a6866/2740831971/il_570xN.2740831971_4kap.jpg",
    "brand": "Mystic Amulets",
    "stock": 35
  },
  {
    "name": "Магический шар",
    "description": "Шар, который помогает предсказывать будущее и получать ответы на вопросы.",
    "price": 6000.00,
    "category": "Артефакты",
    "image": "https://kartinki.pics/uploads/posts/2022-08/thumbs/1660942068_3-kartinkin-net-p-magicheskii-zhezl-oboi-krasivo-4.jpg",
    "brand": "Ancient Artifacts",
    "stock": 25
  },
  {
    "name": "Магический компас",
    "description": "Компас, который помогает найти правильный путь и принять верные решения.",
    "price": 5500.00,
    "category": "Артефакты",
    "image": "https://img.freepik.com/premium-photo/magic-compass_763713-2219.jpg",
    "brand": "Ancient Artifacts",
    "stock": 30
  },
  {
    "name": "Магическое зеркало",
    "description": "Зеркало, которое отражает внутренний мир и помогает в самопознании.",
    "price": 8000.00,
    "category": "Артефакты",
    "image": "https://img.freepik.com/free-photo/ornate-mirror-art-nouveau-style_23-2150975523.jpg",
    "brand": "Ancient Artifacts",
    "stock": 15
  },
  {
    "name": "Магический светильник",
    "description": "Светильник, который создает атмосферу магии и спокойствия.",
    "price": 4000.00,
    "category": "Артефакты",
    "image": "https://cs1.livemaster.ru/storage/bb/fe/692390f71cfb48dbf0787e1ebdi5--dlya-doma-i-interera-svetilnik-solntse-30-sm-svetilnik-planet.jpg",
    "brand": "Ancient Artifacts",
    "stock": 40
  },
  {
    "name": "Магический ковер",
    "description": "Ковёр, который помогает в медитации и создает гармонию в доме.",
    "price": 1200.00,
    "category": "Артефакты",
    "image": "https://ae04.alicdn.com/kf/Sc228a7e2cad34a3a9f489347bb436552o.jpg_480x480.jpg",
    "brand": "Ancient Artifacts",
    "stock": 10
  },
  {
    "name": "Магический кубок",
    "description": "Кубок, который усиливает энергию напитков и помогает в ритуалах.",
    "price": 5000.00,
    "category": "Артефакты",
    "image": "https://ir.ozone.ru/s3/multimedia-e/c1000/6458406806.jpg",
    "brand": "Ancient Artifacts",
    "stock": 35
  },
  {
    "name": "Магический меч",
    "description": "Меч, который защищает от негативной энергии и помогает в духовных битвах.",
    "price": 150000.00,
    "category": "Артефакты",
    "image": "https://cs15.pikabu.ru/post_img/big/2024/11/12/6/1731405462191618811.jpg",
    "brand": "Ancient Artifacts",
    "stock": 5
  },
  {
    "name": "Магический щит",
    "description": "Щит, который защищает от негативной энергии и помогает в духовных битвах.",
    "price": 1000.00,
    "category": "Артефакты",
    "image": "https://img.freepik.com/premium-photo/vibrant-3d-fantasy-shield-with-swirling-ethereal-energy-pattern_938957-68963.jpg",
    "brand": "Ancient Artifacts",
    "stock": 10
  },
  {
    "name": "Магический посох",
    "description": "Посох, который усиливает магические способности и помогает в ритуалах.",
    "price": 900.00,
    "category": "Артефакты",
    "image": "https://kartinki.pics/uploads/posts/2022-08/1661347341_2-kartinkin-net-p-boevoi-posokh-maga-oboi-krasivo-2.jpg",
    "brand": "Ancient Artifacts",
    "stock": 15
  },
  {
    "name": "Магический перстень",
    "description": "Перстень, который приносит удачу и защиту.",
    "price": 6500.00,
    "category": "Артефакты",
    "image": "https://sorokastore.com/image/catalog/tovar_more/_6sMHGUAjdw.jpg",
    "brand": "Ancient Artifacts",
    "stock": 25
  },
  {
    "name": "Магический браслет",
    "description": "Браслет, который улучшает энергетику и приносит гармонию.",
    "price": 4500.00,
    "category": "Артефакты",
    "image": "https://ir.ozone.ru/s3/multimedia-u/c1000/6831745374.jpg",
    "brand": "Ancient Artifacts",
    "stock": 30
  },
  {
    "name": "Магический медальон",
    "description": "Медальон, который защищает от негативной энергии и приносит удачу.",
    "price": 5500.00,
    "category": "Артефакты",
    "image": "https://amuletika.ru/image/catalog/tovar/BJK132d.jpg",
    "brand": "Ancient Artifacts",
    "stock": 20
  }
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(productSeeds);
  console.log('Products data seeded successfully!');
};


if (process.argv[2] == 'dev') {
  dotenv.config({ path: path.resolve(__dirname, '../.env') });
  mongoose.connect(process.env.MONGO_URI, {}).then(async () => {
    await seedDB();
    process.exit();
  });
}

module.exports = seedDB;
