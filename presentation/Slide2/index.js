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

export default class Slide2 extends React.Component {
constructor(){
  super();
}
  render = () => {

    return (
      <div className="slide2__wrapper">
        <span className="micorix-logo"></span>
        <Image src="https://pbs.twimg.com/profile_images/648888480974508032/66_cUYfj_400x400.jpg"/>
<div>
          <Heading size={2} caps lineHeight={1} textColor="secondary">
          Edward Snowden
          </Heading>
          <Text textColor="secondary">
          Były pracownik NSA i CIA
          </Text>
          <Text textColor="secondary" size={6}>
          Miał dostęp do tajnych akt
          </Text>
          </div>
          </div>
    );
  }
}
