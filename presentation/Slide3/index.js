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

export default class Slide3 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div>
        <span className="micorix-logo"></span>
        <Heading size={6} textColor="secondary" caps>Upublicznił informacje o:</Heading>
        <List textColor="tertiary">
        <ListItem>programie inwigilacji</ListItem>
        <ListItem>nagrywaniu rozmów polityków (m.in. Angeli Merkel)</ListItem>
        <ListItem>...</ListItem>
        </List>
          </div>
    );
  }
}
