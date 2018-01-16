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

export default class Slide8 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div className="slide8__wrapper">
        <span className="micorix-logo"></span>
        <div>
<Heading size={3} textAlign="left" textColor="tertiary">Treść</Heading>
<List>
<ListItem>Wszystkie maile</ListItem>
<ListItem>Twoje posty</ListItem>
</List>
</div>
<div>
<Heading size={3} textAlign="left" textColor="tertiary">Metadane</Heading>
<List>
<ListItem>Data opublikowania</ListItem>
<ListItem>Lokalizacja</ListItem>
</List>
</div>
          </div>
    );
  }
}
