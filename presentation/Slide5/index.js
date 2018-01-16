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

export default class Slide5 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div className="slide5__wrapper">
        <span className="micorix-logo"></span>
<Heading textColor="primary" textAlign="left" size={3}>Planning tool for</Heading>
<Heading textColor="primary" textAlign="left" size={3}>Resource</Heading>
<Heading textColor="primary" textAlign="left"size={3}>Integration,</Heading>
<Heading textColor="primary" textAlign="left" size={3}>Synchronization and</Heading>
<Heading textColor="primary" textAlign="left" size={3}>Management</Heading>
          </div>
    );
  }
}
