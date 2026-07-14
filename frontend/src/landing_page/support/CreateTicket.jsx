import React from 'react'
import AccordionItem from './AccordionItem';

export default function CreateTicket() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-8">
                    <AccordionItem id="accountOpening" icon="fa-solid fa-circle-plus" title="Account Opening" items={['Resident individual', 'Minor', 'Non Resident Indian (NRI)', 'Company, Partnership', 'HUF and LLP, Glossary']}/>
                    <AccordionItem id="yourzerodhaaccount" icon=" fa-regular fa-circle-user" title="Your Zerodha Account" items={['Your Profile', 'Account modification', 'Client Master Report (CMR) and Depository Participant (DP)', 'Nomination', 'Transfer and conversion of securities']}/>
                    <AccordionItem id="kite" icon="fa-brands fa-pushed" title="Kite" items={["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"]}/>
                    <AccordionItem id="funds" icon="fa-solid fa-indian-rupee-sign" title="Funds" items={["Add money", "Withdraw money", "Add bank accounts", "eMandates"]}/>
                    <AccordionItem id="console" icon="fa-brands fa-gofore" title="Console" items={["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"]}/>
                    <AccordionItem id="coin" icon="fa-solid fa-coins" title="Coin" items={["Mutual funds", "National Pension Scheme (NPS)", "Fixed Deposit (FD)", "Features on Coin", "Payments and Orders", "General"]}/>
                </div>
                <div className="col-4">
                    <div className="p-4" style={{borderLeft:"7px solid rgb(255, 145, 0)" , backgroundColor:"rgba(255, 145, 0,0.1)"}}>
                        <li className='mb-3'><a href="#">Latest Intraday leverages and Square-off timings</a></li>
                        <li><a href="#">Current Takeovers and Delisting – July 2026</a></li>
                    </div>
                    <div className="mt-4">
                        <div className="border">
                            <h5
                            className="p-3 mb-0"
                            style={{ backgroundColor: "#f5f5f5" }}
                            >
                            Quick links
                            </h5>

                            <ol className="list-group list-group-numbered list-group-flush">
                            <li className="list-group-item p-3">
                                <a href="#" className="text-decoration-none">
                                Track account opening
                                </a>
                            </li>

                            <li className="list-group-item p-3">
                                <a href="#" className="text-decoration-none">
                                Track segment activation
                                </a>
                            </li>

                            <li className="list-group-item p-3">
                                <a href="#" className="text-decoration-none">
                                Intraday margins
                                </a>
                            </li>

                            <li className="list-group-item p-3">
                                <a href="#" className="text-decoration-none">
                                Kite user manual
                                </a>
                            </li>

                            <li className="list-group-item p-3">
                                <a href="#" className="text-decoration-none">
                                Learn how to create a ticket
                                </a>
                            </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





