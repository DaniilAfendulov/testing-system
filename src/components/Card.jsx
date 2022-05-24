import React from 'react'
import Styles from '../../src/styles/card.module.scss'

const onMouseOver = (e) => {
    if(!e.currentTarget.classList.contains(Styles.container)){
        console.log('stop onMouseOver');
        e.stopPropagation();
        return;
    }
    e.currentTarget.classList.add(Styles['show-description']);
    e.currentTarget.children[1].classList.add(Styles.show);
}
const onMouseOut = (e) => {
    const to = e.nativeEvent.relatedTarget;
    const sender = e.currentTarget;
    if(sender.contains(to)){
        e.stopPropagation();
        return;
    }
    e.currentTarget.classList.remove(Styles['show-description']);
    e.currentTarget.children[1].classList.remove(Styles.show);
}

function Card({title, description, onCardClick}) {
  return (
    <div className={Styles.container} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onCardClick}>
        <div className={Styles.title}><span>{title}</span></div>
        <div className={Styles.description}>{description}</div>
    </div>
  )
}

export default Card