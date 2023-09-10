import "./style.scss";
import { Section } from './Section';
import leftData from './leftData.json';
import rightData from './rightData.json';

interface FooterValue {
  title: string,
  link: string | null
}

interface FooterKey {
  [key: string] : FooterValue
}

export interface FooterData {
  direction: string,
  title: string,
  data: FooterKey,
}

function Footer() {
  const data: FooterData[] = [
    {
      direction: 'left',
      title: 'Contact Me:',
      data: leftData
    },
    {
      direction: 'right',
      title: 'Made using:',
      data: rightData
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