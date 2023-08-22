
function LeftSection ( { allData, counter, waiting } ) {
  let chosenClass = waiting
    ? "squeeze-in"
    : "";
  return (
    <div className="left-section" >
      I make <span className={chosenClass}>{allData[counter].description}</span>
    </div>
  )
}

export default LeftSection;

