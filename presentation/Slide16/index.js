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

export default class Slide14 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div className="slide14__wrapper">
        <span className="micorix-logo"></span>
        <Heading size={2} textColor="primary">Dziękuję za uwagę</Heading>
        <Text textColor="primary" lineHeight={1.2}>Michał Oręziak</Text>
        <Image src="/assets/logo.png" />
          </div>
    );
  }
}
