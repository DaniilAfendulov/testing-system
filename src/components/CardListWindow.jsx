import CardContainer from './CardContainer'
import LinkCard from './LinkCard'

function CardListWindow({cards, path}) {
  return (
    <CardContainer>
        {cards.map(c => <LinkCard key={c.id} cardProps={c} path={path+c.id}/>)}
    </CardContainer>
  )
}

export default CardListWindow