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

export default class Slide6 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div className="slide6__wrapper">
        <span className="micorix-logo"></span>
        <Heading size={3}>W ten sposób mogą znaleźć informacje o kimkolwiek</Heading>
<Image src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png"/>
          </div>
    );
  }
}
