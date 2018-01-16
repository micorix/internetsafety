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

export default class Slide12 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div className="slide12__wrapper">
        <span className="micorix-logo"></span>
        <iframe src="https://player.vimeo.com/video/248278877" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
    );
  }
}
