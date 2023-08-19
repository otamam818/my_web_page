import { useState, useEffect } from 'react';
import { ImageBullet } from './ImageBullet';
import { FooterData } from '.';

interface StackDescription {
  title: string;
  link: string;
}
type FooterMap = Map<string, StackDescription>;
export function Section({ direction, title, dataPath }: FooterData) {
  const [currData, setCurrdata] = useState<FooterMap | null>(null);
  // const data = require(`${dataPath}`);
  useEffect(() => {
    import(/* @vite-ignore */ dataPath)
      .then((value) => setCurrdata(value.default));
  });

  if (currData === null) {
    return null;
  }

  const bulletComponents = Object.entries(currData).map((value, index) => {
    const [imagePath, { title, link }] = value;
    return (
      <ImageBullet
        key={index}
        imagePath={imagePath}
        title={title}
        link={link} />
    );
  });

  return (
    <div className={`${direction}-section`}>
      <h3> {title} </h3>
      {bulletComponents}
    </div>
  );
}
