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
              <p>
                When does The Cryminals collection Relaunch? When can I mint?
              </p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Public Sale: Monday 25th 4PM EDT</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>How do I get on the pre-sale?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>There will not be a Pre-sale for the Relaunch</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>Where do we Mint?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>https://thecryminals.com/mint</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>How many Cryminals will be created?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              10.000 unique Cryminals will be created in total. 1600 will be put
              aside for owners of the Cryminal OG collection
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>How much will it cost to mint?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>0.025 ETH + gas per transaction</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>How many can I mint?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>This information to follow</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>Which wallet do I need to mint?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Our website supports MetaMask wallet - https://metamask.io/</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>Where can I see my Cryminals?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Your Cryminals will be available on your profile on
              https://opensea.io/ usually instantly but can take up to 5-10
              minutes after purchase
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>When is the reveal?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>5-10 minutes after purchase</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>Will there be a bonding curve?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Of course not.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>What will happen next?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>See roadmap</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <p>I want to help, what can I do?</p>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Spreading the word about our mission on Twitter & Discord is
              great! If you want to do more, feel free to reach out to us in DM
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <div className={classes.space}></div>
    </section>
  );
};
export default FAQ;
