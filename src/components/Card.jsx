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

function Card(props) {
  const title = props.title;
  const description = props.description;
  const component = description ? 
    (
      <div className={Styles.container} onMouseOver={ onMouseOver } onMouseOut={ onMouseOut } >
        <div className={Styles.title}><span>{title}</span></div>
        { description &&
          <div className={Styles.description}>{description}</div>
        }
      </div>
    ) :
    (
      <div className={Styles.container}>
        <div className={Styles.title}><span>{title}</span></div>
      </div>
    );
  return (<>{component}</>)
}

export default Card