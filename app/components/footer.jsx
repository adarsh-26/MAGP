import React from "react";
import ".././components/footer.css";

export default function Footer() {
  const down1="Copyright "
  const down2=" 2023  Malaysia Airports Holdings Berhad / Malaysia Airports Group Procurement"

  const farr=[
    {
      text: "Introduction",
      subh: ['Preface','Procurement Codes of Ethics','General Provision','Terms and Definations','Process Symbols','MAHB Procurement value chain']
    },
    {
      text: "Procurement Planning",
      subh: ['Business Case','Annual Procurement Planning','Strategy Paper']
    
    },
    {
      text: "Requisition",
      subh: ['Purchase Requisition',' Process of Purchase Requisition']
    
    },
    {
      text: "Sourcing",
      subh: ['Tender Management','Tender Administration','Tender Evaluation','Abort of Tender','Classification/Negotiation prior to Award']
    
    },
    {
      text: "Contract Administration",
      subh: ['Contract management implementation','Contract Renewal','Contract Termination','Contract closeout']
    
    },
    {
      text: "Vendor Management",
      subh: ['Vendor Registration','Potential Vendor Screening','Vendor Management']
    
    },
    {
      text: "Others",
      subh: ['Calendar','Frequently asked questions']
    
    },

  ]
  return (
    <div className="tfooter">
      <div className="footer">
        {farr.map((item, index) => (
          <div className="each" key={index}>
            <h4>{item.text}</h4>
            {item.subh.map((subItem, subIndex) => (
              <p key={subIndex}>{subItem}</p>
            ))}
          </div>
        ))}
      </div>
      <p>{down1}<svg className="copyw"  viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.520508 4.49992C0.520508 2.02617 2.52592 0.020752 4.99967 0.020752C7.47342 0.020752 9.47884 2.02617 9.47884 4.49992C9.47884 6.97367 7.47342 8.97909 4.99967 8.97909C2.52592 8.97909 0.520508 6.97367 0.520508 4.49992ZM4.99967 0.645752C3.97749 0.645752 2.99716 1.05181 2.27437 1.77461C1.55157 2.49741 1.14551 3.47773 1.14551 4.49992C1.14551 5.52211 1.55157 6.50243 2.27437 7.22523C2.99716 7.94802 3.97749 8.35409 4.99967 8.35409C6.02186 8.35409 7.00219 7.94802 7.72498 7.22523C8.44778 6.50243 8.85384 5.52211 8.85384 4.49992C8.85384 3.47773 8.44778 2.49741 7.72498 1.77461C7.00219 1.05181 6.02186 0.645752 4.99967 0.645752Z" fill="#FEFEFE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.11884 3.14575C4.28426 3.14575 3.64551 3.772 3.64551 4.49992C3.64551 5.22784 4.28426 5.85409 5.11884 5.85409C5.33176 5.85409 5.53342 5.81242 5.71467 5.73867C5.75268 5.72316 5.79336 5.71528 5.83441 5.71549C5.87545 5.71571 5.91605 5.724 5.95389 5.7399C5.99173 5.7558 6.02607 5.779 6.05494 5.80817C6.08382 5.83735 6.10666 5.87192 6.12217 5.90992C6.13769 5.94792 6.14556 5.98861 6.14535 6.02965C6.14514 6.0707 6.13685 6.1113 6.12095 6.14914C6.10504 6.18698 6.08184 6.22132 6.05267 6.25019C6.0235 6.27906 5.98893 6.30191 5.95092 6.31742C5.68664 6.42464 5.40405 6.47954 5.11884 6.47909C3.98051 6.47909 3.02051 5.61284 3.02051 4.49992C3.02051 3.387 3.98051 2.52075 5.11884 2.52075C5.40405 2.5203 5.68664 2.57521 5.95092 2.68242C6.02773 2.71369 6.08896 2.7742 6.12115 2.85062C6.15335 2.92704 6.15386 3.01312 6.12259 3.08992C6.09132 3.16672 6.03082 3.22796 5.95439 3.26015C5.87797 3.29234 5.79189 3.29286 5.71509 3.26159C5.52573 3.1847 5.32322 3.14536 5.11884 3.14575Z" fill="#FEFEFE"/>
</svg>
{down2}</p>
    </div>
  );
}
