import "./style.scss";
import { Section } from './Section';

export interface FooterData {
  direction: string,
  title: string,
  dataPath: string,
}

function Footer() {
  const data: FooterData[] = [
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

export default Footer;