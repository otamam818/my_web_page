import {useState, useEffect} from 'react';
import "./style.scss";

function Footer() {
  const data = [
    {
      direction: 'left',
      title: 'Contact Me:',
      dataPath: './leftData.json',
    },
    {
      direction: 'right',
      title: 'Made using:',
      dataPath: './rightData.json',
    }
  ]

  const information = data.map((value, index) => {
    return <Section key={index} {...value} />;
  });

  return (
    <footer>
      {information}
    </footer>
  )
}

function Section( { direction, title, dataPath } ) {
  const [currData, setCurrdata] = useState(null)
  // const data = require(`${dataPath}`);
  useEffect(() => {
    import( /* @vite-ignore */ dataPath)
      .then((value) => setCurrdata(value.default));
  })

  if (currData === null) {
    return null;
  }

  const bulletComponents = Object.entries(currData).map((value, index) => {
    const [imagePath, {title, link}] = value;
    return <ImageBullet key={index} imagePath={imagePath} title={title} link={link} />;
  });

  return (
    <div className={`${direction}-section`}>
      <h3> {title} </h3>
      { bulletComponents }
    </div>
  )
}

function ImageBullet ( { imagePath, title, link } ) {
  const imageSource = `Footer/${imagePath}`;
  return link 
    ? (
      <a href={link} className="image-bullet spread" >
        <img src={imageSource} alt="logo" />
        <span>{title}</span>
      </a>
  ) : (
      <div className="image-bullet spread">
        <img src={imageSource} alt="logo" />
        <span>{title}</span>
      </div>
  );
}

export default Footer;
