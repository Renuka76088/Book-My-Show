import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGoogle, faXTwitter, faInstagram, faYoutube, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTicket, faUser } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <>
            <div className='bg-dark text-light mt-5'>
                <div>
                    <div className='container-fluid p-3'>
                        <div className='row'>
                            <div className='col-md-9'>
                                <img className='d-inline-flex' src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
                                <p className='d-inline-flex'>List your Show Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
                            </div>
                            <div className='col-md-3'>
                                <button className='btn btn-danger text-light'>Contact today</button>
                            </div>

                        </div>

                    </div>


                    <div className='container-flow '>
                        <div className='row gry'>
                            <div className='col-md-4'>

                                <FontAwesomeIcon icon={faUser} width={300} className='font' style={{ color: "#fafafa", }} />
                                <p className='text-light ms-5 p-3'>24/7 CUSTOMER CARE</p>
                            </div>
                            <div className='col-md-4'>
                                <FontAwesomeIcon icon={faTicket} width={300} className='font' style={{ color: "#f6f7f8", }} />
                                <p className='text-light p-3'>RESEND BOOKING CONFIRMATION</p>
                            </div>
                            <div className='col-md-4'>
                                <FontAwesomeIcon icon={faEnvelope} width={300} className='font' style={{ color: "#f6f7f8", }} />
                                <p className='text-light p-3'>SUBSCRIBE TO THE NEWSLETTER</p>
                            </div>

                        </div>


                    </div>
                  
                </div>
                <div className='container-fluid'>
                    <h4 className='siz p-3'>MOVIES NOW SHOWING IN DELHI-NCR</h4>
                    <p className='ms-3'>Venom: The Last Dance | Vicky Vidhya Ka Woh Wala Vedio | Jigra | The Wild Robot | The House of Dead Horror | The House of Dead Horror | Wild Roller Coaster | Prehistoric Adventure | Singham | Tabaah | Smile 2</p>

                    <h4 className='siz p-3'>UPCOMING MOVIES IN DELHI-NCR</h4>
                    <p className='ms-3'>Pani | Kundannoorile Kulsitha Lahala | Chor Dil | Roti Kapda Romance | Swargam | C202 | Conclave | Laggam | Look Back | Daitya | </p>

                    <h4 className='siz p-3'>MOVIES BY GENRE</h4>
                    <p className='ms-3'>Drama Movies | Action Movies | Comedy Movies | Adventure Movies | Thriller Movies | Romantic Movies | Animation Movies | Horror Movies | Period Movies | Fantasy Movies </p>

                    <h4 className='siz p-3'>MOVIES BY LANGUAGE</h4>
                    <p className='ms-3'>Movies in English | Movies in Hindi | Movies in Punjabi | Movies in English 7D | Movies in Tamil | Movies in Bengali | Movies in Telugu | Movies in Chattisgarhi | Movies in Portuguese | Movies in Bhojpuri</p>

                    <h4 className='siz p-3'>SPORTS EVENTS IN DELHI-NCR</h4>
                    <p className='ms-3'>Kabaddi | Running | Chess | Cycling | Athletics | Motorsports | CardGames | Hockey | Rugby | Badminton </p>

                    <h4 className='siz p-3'>EVENTS IN TOP CITIES</h4>
                    <p className='ms-3'>Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events in Bengaluru | Events in Hyderabad |  Events in Pune | Events in Ahmedabad | Events in Kolkata | Events in Kochi </p>

                    <h4 className='siz p-3'>CINEMAS IN TOP CITIES</h4>
                    <p className='ms-3'>Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas in Bengaluru | Cinemas in Hyderabad |  Cinemas in Pune | Cinemas in Ahmedabad  | Cinemas in Kolkata | Cinemas in Kochi </p>

                    <h4 className='siz p-3'>PLAYS IN TOP CITIES </h4>
                    <p className='ms-3'>Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | Plays in Hyderabad |  Plays in Pune | Plays in Ahmedabad  | Plays in Kolkata | Plays in Kochi </p>

                    <h4 className='siz p-3'>ACTIVITIES IN TOP CITIES</h4>
                    <p className='ms-3'>Activities in Mumbai | Activities in Delhi-NCR | Activities in Chennai | Activities in Bengaluru | Activities in Hyderabad |  Activities in Pune | Activities in Ahmedabad  | Activities in Kolkata | Activities in Kochi </p>

                    <h4 className='siz p-3'>MOVIES NOW SHOWING </h4>
                    <p className='ms-3'>Venom: The Last Dance | Vicky Vidhya Ka Woh Wala Vedio | Vettaiyan | Jigra | The Wild Robot | Vettaiyan-The Hunter | Devara-part 1 | Martin | Viswam | Hahacar</p>

                    <h4 className='siz p-3'>COUNTRIES</h4>
                    <p className='ms-3'>Indonesia | Singapore | UAE | Shri Lanka | West Indies  </p>

                    <h4 className='siz p-3'>HELP</h4>
                    <p className='ms-3'>About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap |FAQs | Terms and Conditions | Privacy Policy  </p>

                    <h4 className='siz p-3'>BOOKMYSHOW EXCLUSIVES</h4>
                    <p className='ms-3'>Lollapalooza India | Superstar | BookAChange | Corporate Vouchers | List My Show | Offers | Stream | Trailers  </p>

                </div>

                <div className='container  nav justify-content-center'>
                    <p>
                        
                        <img width={130} src="https://cdn.brandfetch.io/id4J58sqa_/w/800/h/227/theme/light/logo.png?k=bfHSJFAPEG" alt=""/>

                    </p>

                </div>

                <div className='container nav justify-content-center'>
                


                        <FontAwesomeIcon icon={faFacebook} className='text-dark  ms-2circle' />
                        <FontAwesomeIcon icon={faXTwitter} className=' text-dark ms-2 circle' />
                        <FontAwesomeIcon icon={faInstagram} className=' text-dark  ms-2 circle' />
                        <FontAwesomeIcon icon={faYoutube} className=' text-dark  ms-2 circle' />
                        <FontAwesomeIcon icon={faPinterestP} className=' text-dark  ms-2 circle' />
                        <FontAwesomeIcon icon={faLinkedinIn} className=' text-dark  ms-2 circle' />
                    

                </div>
            </div>

        </>
    )
}

export default Footer