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

  const CardListRow2 = () => {
    return (
      <div className='row'>
        {ArticleList.map(cardcomponent)}
  
      </div>
    );
  };
export default CardListRow2;
