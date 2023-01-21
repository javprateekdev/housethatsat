import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__faq-area mb-100">
        
            <div className="container">
            <h4 className="title-2">Frequently Asked Questions</h4>  
            <div className="row">
                <div className="col-lg-8">
                <div className="ltn__faq-inner ltn__faq-inner-2">
                    <div id="accordion_2">
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                        1.Why to choose Ace Divino ?
                        </h6>
                        <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                        <ul>
                            <li>Posh location</li>
                            <li>Excellent Connectivity</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="true"> 
                        2.What is Ace Divino Address?
                        </h6>
                        <div id="faq-item-2-2" className="collapse show" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            
                            
                            <p>GH 14A, Sector 1 Noida Extension, Greater Noida </p>
                        </div>
                        </div>
                    </div>                          
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                        3.What is 2 BHK Starting Price? 
                        </h6>
                        <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>2 BHK flat of Size 995 Sq. ft. Starts from Rs. 75 lakh onwards.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                        4.How many flat units available in Ace Divino?
                        </h6>
                        <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>1748 flats are available in the project</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                        5.Does Ace Divino has kids play area?
                        </h6>
                        <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Yes, there is kids playing area available.</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-6" aria-expanded="false">
                        6. What is the RERA no. of Ace Divino?
                        </h6>
                        <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Ace Divino RERA NO. UPRERAPRJ6734</p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-7" aria-expanded="false">
                        7.  What is the Possession date of Ace Divino Sector 1?
                        </h6>
                        <div id="faq-item-2-7" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Expected Possession date is around August 2023 </p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-8" aria-expanded="false">
                        8.Is this Project is Bank Approved?
                        </h6>
                        <div id="faq-item-2-8" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Yes, Ace Divino is Approved by SBI Bank and HDFC Bank and many more</p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-9" aria-expanded="false">
                        9.From where I can download Ace Divino Brochure?
                        </h6>
                        <div id="faq-item-2-9" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>You can download the brochure from the website. Download brochure link: -></p>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-10" aria-expanded="false">
                        10.Does Ace Divino have Penthouse?
                        </h6>
                        <div id="faq-item-2-10" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <p>Yes, the Project has Penthouse. </p>
                        </div>
                        </div>
                    </div>
                </div>
                    
                </div>
                </div>
                <div className="col-lg-4">
              
                </div>
            </div>
            </div>
        </div>
  
        }
}

export default FaqV1