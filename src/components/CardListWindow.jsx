import CardContainer from './CardContainer'
import LinkCard from './LinkCard'

function CardListWindow({cards, getPath}) {
  return (
    <CardContainer>
      {cards.map(c => <LinkCard key={c.id} cardProps={c} path={getPath(c)}/>)}
    </CardContainer>
  )
}

export default CardListWindow