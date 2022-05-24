import React from 'react'
import Styles from '../../src/styles/card-list-window.module.scss'
import Card from './Card'

function CardListWindow({cards, onCardClick}) {
  return (
    <div className={Styles.container}>
        {cards.map(c => <Card key={c.id} {...c} onCardClick={onCardClick}/>)}
    </div>
  )
}

export default CardListWindow