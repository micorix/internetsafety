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

export default class Slide7 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div className="slide7__wrapper">
        <span className="micorix-logo"></span>
<Image src="http://assets.sbnation.com/assets/2925305/flowchart_final_008.png"/>
          </div>
    );
  }
}
