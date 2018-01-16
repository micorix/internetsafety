// Import React
import React from "react";
import './styles.css';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#333",
  tertiary: "#27ae60",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

import Slide0 from './Slide0';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';
import Slide7 from './Slide7';
import Slide8 from './Slide8';
import Slide9 from './Slide9';
import Slide10 from './Slide10';
import Slide11 from './Slide11';
import Slide12 from './Slide12';
import Slide13 from './Slide13';
import Slide14 from './Slide14';
import Slide15 from './Slide15';
import Slide16 from './Slide16';
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}
    >
                <Slide transition={["zoom"]} bgColor="secondary" className="full-size" >
                        <Slide0 />
                </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
        <Slide1 />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" className="full-size">
        <Slide2 />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
        <Slide3 />
        </Slide>
        <Slide transition={["fade"]}
        bgImage="http://world-visits.com/wp-content/uploads/2011/11/World-Trade-Center-3.jpg"
         textColor="tertiary" className="full-size">
      <Slide4 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="secondary" textColor="primary">
      <Slide5 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="secondary" textColor="primary">
      <Slide6 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="secondary" textColor="primary" className="full-size">
      <Slide7 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="primary" textColor="secondary" className="full-size">
      <Slide8 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="primary" textColor="secondary" className="full-size">
      <Slide9 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="primary" textColor="secondary" className="full-size">
      <Slide10 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="secondary" textColor="white" className="full-size">
      <Slide11 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="secondary" textColor="white" className="full-size">
      <Slide12 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="secondary" textColor="white" className="full-size">
      <Slide13 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="tertiary" textColor="secondary" className="full-size">
      <Slide14 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="primary" textColor="secondary" className="full-size">
      <Slide15 />
        </Slide>
        <Slide transition={["fade"]}
        bgColor="secondary" textColor="white" className="full-size">
      <Slide16 />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" className="slide17__wrapper">
          <BlockQuote>
            <Quote>The only truly secure system is one that is powered off</Quote>
            <Cite>Gene Spafford</Cite>
          </BlockQuote>
          <Text size={6} textColor="primary">Źródła: TEDx, strony rządowe USA, strony wymienionych firm, wikimedia.org</Text>
        </Slide>
      </Deck>
    );
  }
}
