interface ImageBulletProps {
  imagePath: string;
  title: string;
  link: string | null;
}
export function ImageBullet({ imagePath, title, link }: ImageBulletProps) {
  const imageSource = `Footer/${imagePath}`;
  return link
    ? (
      <a href={link} className="image-bullet spread">
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
