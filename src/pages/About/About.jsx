import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { eventAccordion } from "../../utils/accordionData";

const About = () => {
  return (
    <div className="max-w-[1600px] min-h-[70vh] mx-auto px-4 lg:px-0 bg-transparent text-color-white flex justify-center items-center">
      <div className="w-full my-5 lg:my-0">
        <h1 className="text-2xl md:text-3xl text-color-white font-bold mb-3">
          Frequently asked questions{" "}
          <span className="text-color-blue">Answer the question </span>
        </h1>
        <Accordion allowZeroExpanded>
          {eventAccordion.map((accordion) => (
            <AccordionItem
              key={accordion.id}
              className="bg-transparent border border-color-border"
            >
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{
                    background: "transparent",
                    color: "#94a3b4",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {accordion.title}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel style={{ color: "#94a3b4" }}>
                {accordion.description}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default About;
