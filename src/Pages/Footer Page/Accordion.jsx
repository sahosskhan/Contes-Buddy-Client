import { useState } from "react";
import Container from "../../Components/Container";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {title: "How do I create an account?", description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',},

    {title: "How do I participate in an contest?", description: 'To participate in an contest, click on the "All Contest" from Nav and select any contest then click on "Registration" button then pay and select form and that is the process.',},

    {title: "How do I payment for contest registration?", description: 'To payment for contest registration, we accept Visa card, Master card, Dual Currency card, Debit card, Credit card via Stripe Payment System.',},
    
    {title: "What should I need for contest registration?", description: 'To need for contest registration, please see description and task description for each dedicated contest.',},

    {title: "Can I register multiple contest?", description: 'Yes, we accept a user can register multiple contest as his wish but each contest will be only one time register.',},

    {title: "Apart from this I have question can I ask?", description: 'Yes, no worries please direct any question to support@contest-buddy.web.app. We try reply within 24 hours.',},


    ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
  };
    return (
        <div>
            <Container>
            <h1 className="text-center text-5xl mt-24 mb-10 font-bold">Most <span className="text-red-500">Frequently</span> Asked <span className="text-red-500"> Question</span> _?</h1>
            <div className=" rounded-lg font-sans mb-24">
        {accordionsData .map((PerAccordion, idx) => (
          <div  data-aos="zoom-in-up" key={idx} className="border-b border-black ">
            <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between py-4 font-medium text-black">
              <span className="text-2xl">{PerAccordion.title}</span>
              <span className="rounded-full p-2 ">
                <svg className="ml-8 mr-7 shrink-0 fill-[#000]" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                  <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                </svg>
              </span>
            </button>
            <div className={`grid overflow-hidden text-xl text-red-500 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">{PerAccordion.description}</div>
            </div>
          </div>
        ))}
      </div>
      </Container>
        </div>
    );
};

export default Accordion;