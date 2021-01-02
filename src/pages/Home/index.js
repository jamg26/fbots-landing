import React from "react";

import ContactFrom from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import MiddleBlock from "../../components/MiddleBlock";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";

import Introduction from "../../content/introduction.json";
import FirstBlock from "../../content/firstBlock.json";
import SecondBlock from "../../content/secondBlock.json";
import ThirdBlock from "../../content/thirdBlock.json";
import FourthBlock from "../../content/fourthBlock.json";
import ContactBlock from "../../content/contactBlock.json";
import AutomatedBlock from "../../content/automatedBlock.json";
import ControlPanel from "../../content/cpanelBlock.json";

import axios from "axios";

const Home = () => {
  React.useEffect(() => {
    axios.post("https://contact-mailer.glitch.me/wake").then(() => {});
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        icon="developer.svg"
      />
      <MiddleBlock
        title={FirstBlock.title}
        content={FirstBlock.text}
        button={FirstBlock.button}
      />
      <ContentBlock
        type="left"
        title={SecondBlock.title}
        content={SecondBlock.text}
        section={SecondBlock.section}
        icon="graphs.svg"
      />
      <ContentBlock
        type="right"
        title={ThirdBlock.title}
        content={ThirdBlock.text}
        icon="ecommerce.svg"
      />
      <ContentBlock
        type="left"
        title={AutomatedBlock.title}
        content={AutomatedBlock.text}
        icon="workspace.svg"
      />
      <ContentBlock
        type="right"
        title={ControlPanel.title}
        content={ControlPanel.text}
        icon="process.svg"
      />
      <ContentBlock
        type="left"
        title={FourthBlock.title}
        content={FourthBlock.text}
        icon="waving.svg"
      />
      <ContactFrom title={ContactBlock.title} content={ContactBlock.text} />
    </Container>
  );
};

export default Home;
