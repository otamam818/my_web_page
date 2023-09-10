import { ImageBullet } from './ImageBullet';
import { FooterData } from '.';

export function Section({ direction, title, data }: FooterData) {
  const bulletComponents = Object.entries(data).map((value, index) => {
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
