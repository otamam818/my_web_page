import "./style.scss";

function InfoCards() {
  // Background should be white-ish
  // Foreground should contain an array of card elements
  let cardData = [
    { title: "Projects", subtitle: "How I contribute to the world",  link: ""},
    { title: "LinkedIn", subtitle: "My professional profile",  link: ""},
    { title: "About Me", subtitle: "General info about who I am",  link: ""},
  ];
  let cardComponents = cardData.map(value => <Card {...value} />)
  return (
    <div className="info-cards">
      {cardComponents}
    </div>
  )
}

function Card( { title, subtitle, link } ) {
  return (
    <a href={link}>
      <div className="card">
        <h1> {title} </h1>
        <span> {subtitle} </span>
      </div>
    </a>
  )
}

export default InfoCards;

