import React from 'react'

export default function AccordionItem({id,icon,title,items}) {
  return (
    <div className="accordion" id="supportAccordion">
                        <div className="accordion" id="supportAccordion">
                            <div className="accordion-item mb-4">
                               <h2 className="accordion-header">
                                    <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${id}`}
                                    aria-expanded="false"
                                    aria-controls={id}
                                    >
                                    <div className="d-flex align-items-center gap-3">
                                            <i className={icon} style={{color:"rgb(57, 125, 208)"}}></i>
                                        <span className="fs-5">
                                        {title}
                                        </span>
                                    </div>
                                    </button>
                                </h2>

                                <div id={id} className="accordion-collapse collapse " data-bs-parent="#supportAccordion">
                                    <div className="accordion-body">
                                        <ul>
                                            {items.map((item)=>(
                                                <li><a href="#" style={{textDecoration:"none"}}>{item}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}
