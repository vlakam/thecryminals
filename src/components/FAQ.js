import classes from "./FAQ.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";

const FAQ = () => {
  return (
    <section id="faq">
      <h2>ANY QUESTIONS?</h2>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>What is NFT?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              NFT (non-fungible token) is an information or data stored on the
              blockchain. Owning an NFT means owning the original image, music
              track, animation - you name it! You can easily buy, sell and trade
              any pieces of art as well as store them in your Metamask wallet.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>What is minting?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Minting is a process of creation of NFTs. Whenever you put your
              digital assets on the blockchain - that’s minting!
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>HOW MUCH DOES THE MINT COST?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Purchasing a Cryminal costs 0.05 ETH + gas fee. There is no
              bonding curve! Unfortunately, we can’t control the additional
              fees, but we do hope you will get yourself a gangster without any
              problems :)
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>What can i do with my cryminal?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Literally anything your heart desires! As long as you own your
              personal Cryminal, you have a right to use it as you wish! Besides
              that, you become a member of The Gang which lets you decide how to
              develop the project in the future.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>How to contact the team?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>You can reach us on Twitter and Discord any time!</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <div className={classes.space}></div>
    </section>
  );
};
export default FAQ;
