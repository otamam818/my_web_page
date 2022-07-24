import React from 'react';

export class Footer extends React.Component {
  render() {
    const contactData = Object.entries(require('../assets/contact.json'));
    const list_values = contactData.map((values) => {
        const destination = values[0];
        const metadata = values[1];

        const image = require(`../pictures/${metadata.Image}`)
        return (
          <li key={destination}><a href={metadata.Link}>
            <img src={image} alt=""/>
            <strong className="destination">{destination}</strong> 
            {metadata.Name}
          </a></li>
        )
    });
    return (
        <footer>
          <b>My Contacts:</b>
          <ul>
            {list_values}
          </ul>
        </footer>
    )
  }
}
