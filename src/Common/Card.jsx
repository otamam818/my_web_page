function Card( { innerText, addedClass, clickResponse } ) {
  const chosenClass = `card ${addedClass ? addedClass : ''}`;
  if (!clickResponse) {
    clickResponse = () => {};
  }

  return (
    <div className={chosenClass} onClick={clickResponse()} >
      {innerText}
    </div>
  )
}

export default Card;
