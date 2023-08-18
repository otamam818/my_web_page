import {useEffect, useState} from "react";

function RightSection ( { allData, counter, waiting } ) {
  let currData = allData[counter];
  let allImages = useState(allData.map( (value, _) => {
    return require(`./images/${value.image}`);
  }))[0];

  let [currImage, setCurrImage] = useState(null);
  let chosenClass = waiting
    ? "image-animation"
    : "";

  useEffect(() => {
    setCurrImage(allImages[counter]);
  }, [currImage, counter, allImages])

  return (
    <div className="right-section" >
      <img className={chosenClass} src={currImage} alt={currData.description} />
    </div>
  )
}

export default RightSection;

