import Card from "./Card";
import LinkComponent from "./LinkComponent";

function LinkCard({path, cardProps}) {
  return (
    <LinkComponent path={path}>
      <Card {...cardProps}></Card>
    </LinkComponent>
  )
}

export default LinkCard