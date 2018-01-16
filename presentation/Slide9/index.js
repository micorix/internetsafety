// Import React
import React from "react";
import './styles.css';
import 'animate.css';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text
} from "spectacle";

export default class Slide9 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div className="slide9__wrapper">
        <span className="micorix-logo"></span>
        <Heading size={3} textColor="tertiary">Facebook zbiera informacje o:</Heading>

<List>
<ListItem>Twojej lokalizacji</ListItem>
<ListItem>Twojej sieci WiFi</ListItem>
<ListItem>Rodzaju twojego systemu</ListItem>
<ListItem>Numerze telefonu</ListItem>
<ListItem>Usługach Bluetooth</ListItem>
<ListItem>Adresie IP</ListItem>
<ListItem>Stanie baterii twojego telefonu</ListItem>
</List>

          </div>
    );
  }
}
