import React from 'react';
import Card from './Card';
import ArticleList from './Article';
import './CSS/Card.css';

function cardcomponent (Article , i){
  return <Card
  image = {Article.image}
  name = {Article.name}
  description = {Article.description}
  star = {Article.star}
  name1 = {Article.name1}
  />
}

  const CardListRow1 = () => {
    return (
      <div className='row'>
        {ArticleList.map(cardcomponent)}
  
      </div>
    );
  };

 // image: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
 //   name: faker.hacker.ingverb(),
 //   description: faker.company.bs(),
 //   star: '1',
 //   name1


//const CardListRow1 = () => {
//  return (
//    <div className='row'>
//      <Card
//        image={ArticleList[0].image}
//        name={ArticleList[0].name}
//        description={ArticleList[0].description}
//        star={ArticleList[0].star}
//        name1={ArticleList[0].name1}
//      />
//      <Card
//        image={ArticleList[1].image}
//        name={ArticleList[1].name}
//        description={ArticleList[1].description}
//        star={ArticleList[1].star}
//        name1={ArticleList[1].name1}
//      />
//      <Card
//        image={ArticleList[2].image}
//        name={ArticleList[2].name}
//        description={ArticleList[2].description}
//        star={ArticleList[2].star}
//        name1={ArticleList[2].name1}
//      />
//
//    </div>
//  );
//};
export default CardListRow1;
