import React from 'react'
import Intro from "../components/intro";
import Faq from "../components/faq";

export default function Faqs() {

  const data1 = [
    {
      text: "Procurement Planning",
      highlighted: true,
      id: "1",
      matter: [
        {
          head: "What is Procurement Manual (PM)?",
          text: "PM is a new edition of the Procurement Policies, Procedures & Guidelines (3rd Edition, January 2008) or widely known as 3Ps. The purpose of this new PM remains as in the previous editions that is to create standard policies and procedures in all procurement activities throughout Malaysia Airports Group of Companies. It lays out the policies and procedures for raising business cases, developing annual procurement plans, raising requisitions, sourcing quotations, tender proposals, managing tenders, contract administration and vendor management.",
        },
        {
          head: " Is PM covers internal process?",
          text: "Users can link to internal Standard Operating Procedure of Procurement & Contract Division (PCD) for details on its internal process.",
        },
        {
          head: "Which are authorities to refer to for any changes/deviation to Procurement policies, procedures and guidelines? ",
          text: "Users can link to internal Standard Operating Procedure of Procurement & Contract Division (PCD) for details on its internal process.",
        },
        {
          head: " Is PM covers policy on gifts received from suppliers?",
          text: "Please refer to the MAHB’s Code of Ethic & Conduct and Rule 4 of Procurement Codes of Ethics of PM.",
        },
      ],
    },
    {
      text: "Requisition",
      highlighted: false,
      id: "2",
      matter: [
        {
          head: " Which are authorities to refer to for any changes/deviation to Procurement policies, procedures and guidelines?",
          text: "Any changes to the policies shall be tabled to the Board Procurement Committee (BPC) for approval.    Any deviation to the procedures and/or guidelines shall be presented to the Head of Department of Procurement & Contract Division for approval.",
        },
      ],
    },
    {
      text: "Sourcing",
      highlighted: false,
      id: "3",
      matter: [
        {
          head: "What is Standard Operating Procedure (SOP)?",
          text: "SOP is detailing the internal process flow and documented as standard step to be taken by users and shall be constantly reviewed to capture changes in law, reputational demands and changes in the business.",
        },
        {
          head: " Does the PM include changes on GALOA, SOP etc?",
          text: "GALOA and SOP are mentioned in general. Users will be linked to the current GALOA and SOPs.",
        },
      ],
    },
    {
      text: "Contract Administration",
      highlighted: false,
      id: "4",
      matter: [
        {
          head: " Is the Tender Advertisement compulsory?",
          text: "Tender advertisement is required for open tender type with tender estimated value above RM500k. Notice of Tender will be displayed in MAHB’s Vendor Management System website.",
        },
        {
          head: "Is the Tender Briefing Compulsory",
          text: "No. Tender Briefing shall subject to Superintending Officer (S.O.)’s request. Requirement for Tender Briefing will be stated in advertisement.",
        },
        {
            head: "What will be the tendering period?",
            text: "The maximum of tendering period is 4 weeks. However, the Head of Department PCD has the discretion to vary the tendering period based on nature and complexity of the tender.",
          },
          {
            head: "What is the maximum duration for a set of clarification to be responded by PCD?",
            text: "PCD shall compile all queries from tenderer and issue to tenderers during tendering period. The respective person in charge for the project is required to respond within 3 days from the date receipt of queries compilation from PCD.",
          },
          {
            head: " How to request for extension of Tender closing date?",
            text: " Official request must be sent officially to Head of Department PCD.",
          } 
      ], 
    }, 
    { 
      text: "Vendor Management",
      highlighted: false,
      id: "5",
      matter: [
        {
          head: " Is the Tender Advertisement compulsory?",
          text: "Tender advertisement is required for open tender type with tender estimated value above RM500k. Notice of Tender will be displayed in MAHB’s Vendor Management System website.",
        },
        {
          head: "Is the Tender Briefing Compulsory",
          text: "No. Tender Briefing shall subject to Superintending Officer (S.O.)’s request. Requirement for Tender Briefing will be stated in advertisement.",
        },
        {
            head: "What will be the tendering period?",
            text: "The maximum of tendering period is 4 weeks. However, the Head of Department PCD has the discretion to vary the tendering period based on nature and complexity of the tender.",
          },
          {
            head: "What is the maximum duration for a set of clarification to be responded by PCD?",
            text: "PCD shall compile all queries from tenderer and issue to tenderers during tendering period. The respective person in charge for the project is required to respond within 3 days from the date receipt of queries compilation from PCD.",
          },
          {
            head: " How to request for extension of Tender closing date?",
            text: " Official request must be sent officially to Head of Department PCD.",
          } 
      ],
    },
  ];
  
  const introhead="FAQs"
  const introimg="./images/faq2.jpg"
  const introsubhead="Sit pellentesque laoreet sit malesuada pharetra cras. Diam nunc tellus nulla egestas felis amet. Gravida eu egestas adipiscing suspendisse ut fermentum quam tincidunt."
  return (
    <div>
        <Intro heading={introhead}
          subhead={introsubhead} introimg={introimg}>
      </Intro>
      <Faq data1={data1}></Faq>
    </div>
  )
}
