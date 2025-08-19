import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "../../data/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      className="max-w-[min(1100px,calc(100vw-32px))] flex flex-col md:items-center md:justify-center w-full mx-auto px-4 md:px-0 md:py-14"
    >
      <div className="flex flex-col md:justify-center md:items-center gap-2 mb-6 md:mb-12">
        <h3 className="text-primary-dark-2 font-sora text-base tracking-[1.28px] md:text-xl leading-[130%] md:tracking-[1.6px]">
          FAQ
        </h3>
        <h2 className="text-primary-dark-2 font-poppins text-2xl md:text-[32px] font-medium leading-[130%] tracking-[-0.32px]">
          Perguntas Frequentes
        </h2>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-6 max-w-[646px]"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-primary-dark-2 font-poppins text-lg font-medium text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-primary-dark-4 font-sora text-sm md:text-base leading-[150%] opacity-[0.7]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
