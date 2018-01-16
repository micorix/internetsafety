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
  Text
} from "spectacle";

export default class Slide1 extends React.Component {
constructor(){
  super();
  this.state = {shown: false}
}
handleClick = e => {
  console.log(e);
this.setState({shown:true});
console.log(this.state);
}
  render = () => {

    return (
      <div onClick={(e)=>this.handleClick(e)}>
        <span className="micorix-logo"></span>
          <Heading size={2} caps lineHeight={1} textColor="primary" className="slide1__heading--sub">
          Inwigilacja w internecie
          </Heading>
          <Heading size={1} caps lineHeight={2} textColor="primary" className={`slide1__heading ${this.state.shown ? 'shown' : ''}`}>
          ISTNIEJE
          </Heading>
          </div>
    );
  }
}
