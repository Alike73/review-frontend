
import { addReview } from './FetchReview';
import LowMouse from './LowMouse';
import LowMouseFooter from './LowMouseFooter';
import { BsListCheck } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import myLogo from './Assets/My-new-Logo.png';
import mouse1 from './Assets/mouse1.png';
import Character from './Assets/3Dcharacter.png';
import ThinkMouse from './Assets/ThinkMouse.png';
import { gsap } from "gsap";
import './Stars.css';

const Form = ({ 
    name, setName, email, setEmail,
    question1, setQuestion1, question2, setQuestion2,
    question3, setQuestion3, question4, setQuestion4, 
    message, setMessage,
    starsRate, setStarsRate}) => {

    const year = new Date().getFullYear();

    const playModal = () => {
        gsap.config({
            nullTargetWarn: false,
        });
        gsap.fromTo('.Melman', {opacity: 0, x: -100,}, {duration: .7, opacity: 1, x: 0})
        gsap.fromTo('.modal-title', {opacity: 0, y: -50}, {delay: .2, duration: .5, opacity: 1, y: 0})
        gsap.fromTo('.AnswerBodyText', {opacity: 0, y: 50}, {delay: .25, duration: .5, opacity: 1, y: 0})
        gsap.fromTo('.Gloria', {opacity: 0, x: -100}, {delay: .3, duration: .5, opacity: 1, x: 0})
        gsap.fromTo('.AlexMarty', {opacity: 0, x: 100, rotation: 180}, {delay: .35, duration: .5, opacity: 1, x: 0, rotation: 0})
    }

    return (
        <div>
            <div className="container">
                <div className="pt-5 text-center col-md-10 mx-auto col-lg-6">
                    <img className="d-block mx-auto Mouse" src={mouse1} alt="Mouse" />
                    <h2 className="display-3 fw-bold Title">Website Questionnaire</h2>
                    <LowMouse />
                </div>
            
                <div className="col-md-10 mx-auto col-lg-6">
                    <form className="p-3 p-md-3 border rounded-3 mb-5">
                        <h3 className='text-center my-5 fs-1 FormTitle'>Please, complete our survey.</h3>

                        <div className="row1 mb-5">
                            <span>
                                <input 
                                value={ name } 
                                onChange={(e) => setName(e.target.value)} 
                                className="gate" id="class" 
                                type="text" placeholder="Type your name" />
                                <label htmlFor="class">Your name...</label>
                            </span>
                            <span>
                                <input 
                                value={ email } 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="gate" id="element" 
                                type="text" placeholder="example@gmail.com..." />
                                <label htmlFor="element">Your email...</label>
                            </span>
                        </div>

                        <label className="LabelText" htmlFor="question1"><i className="bi bi-1-square fs-5"></i> . How many times have you visited [website] in the past month?</label>
                        <div className='InputBgBox'>
                            <select 
                                value={question1} 
                                onChange={(e) => setQuestion1(e.target.value)} 
                                id='question1' className="form-select form-select-lg mb-5" 
                                aria-label=".form-select-lg example">
                                <option>Options</option>
                                <option>None</option>
                                <option>Once</option>
                                <option>More than once</option>
                            </select>
                            <i className="bi bi-box-arrow-down fs-3"></i>
                        </div>

                        <label className="LabelText" htmlFor="question2"><i className="bi bi-2-square fs-5"></i> . What is the primary reason for your visit to [website]?</label>
                        <div className='InputBgBox'>
                            <select 
                                value={question2} 
                                onChange={(e) => setQuestion2(e.target.value)} 
                                id='question2' className="form-select form-select-lg mb-5" 
                                aria-label=".form-select-lg example">
                                <option>Options</option>
                                <option>To make a purchase</option>
                                <option>To find more information before making a purchase in-store</option>
                                <option>To contact customer service</option>
                            </select>
                            <i className="bi bi-box-arrow-down fs-3"></i>
                        </div>

                        <label className="LabelText" htmlFor="question3"><i className="bi bi-3-square fs-5"></i> . Are you able to find what you're looking for on the website homepage?</label>
                        <div className='InputBgBox'>
                            <select 
                                value={question3} 
                                onChange={(e) => setQuestion3(e.target.value)} 
                                id='question3' className="form-select form-select-lg mb-5" 
                                aria-label=".form-select-lg example">
                                <option>Options</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <i className="bi bi-box-arrow-down fs-3"></i>
                        </div>

                        <label className="LabelText" htmlFor="question4"><i className="bi bi-4-square fs-5"></i> . How likely are you to recommend us to family, friends, or colleagues?</label>
                        <div className='InputBgBox'>
                            <select 
                                value={question4} 
                                onChange={(e) => setQuestion4(e.target.value)} 
                                id='question4' className="form-select form-select-lg mb-5" 
                                aria-label=".form-select-lg example">
                                <option>Options</option>
                                <option>Extremely unlikely</option>
                                <option>Somewhat unlikely</option>
                                <option>Neutral</option>
                                <option>Somewhat likely</option>
                                <option>Extremely likely</option>
                            </select>
                            <i className="bi bi-box-arrow-down fs-3"></i>
                        </div>

                        <label htmlFor="textArea" className="LabelText"><i className="bi bi-5-square fs-5"></i>. Send us a message...</label>
                        <div className="mb-3 textAreaBox">
                            <textarea 
                            className="form-control form-control-lg" 
                            id="textArea" 
                            rows="5" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} />
                            
                            <img className='ThinkMouse' src={ThinkMouse} alt="ThinkMouse" width={80} />

                        </div>
                        
                        <p className='LabelText'><i className="bi bi-6-square fs-5"></i> . Please, rate our services</p>
                        <div className='w-100 d-flex justify-content-center'>
                            <div className="rating mb-3">
                                <input type='radio' hidden name='rate' id='rating_opt5' data-idx='0' value={starsRate} onChange={() => setStarsRate("⭐⭐⭐⭐⭐-Stars")} />	
                                <label htmlFor='rating_opt5'><span>one of the best!</span></label>
                            
                                <input type='radio' hidden name='rate' id='rating_opt4' data-idx='1' value={starsRate} onChange={() => setStarsRate("⭐⭐⭐⭐-Stars")} />
                                <label htmlFor='rating_opt4'><span>amazing</span></label>
                            
                                <input type='radio' hidden name='rate' id='rating_opt3' data-idx='2' value={starsRate} onChange={() => setStarsRate("⭐⭐⭐-Stars")} />
                                <label htmlFor='rating_opt3'><span>interesting...</span></label>
                            
                                <input type='radio' hidden name='rate' id='rating_opt2' data-idx='3' value={starsRate} onChange={() => setStarsRate("⭐⭐-Stars")} />
                                <label htmlFor='rating_opt2'><span>worth something</span></label>
                            
                                <input type='radio' hidden name='rate' id='rating_opt1' data-idx='4' value={starsRate} onChange={() => setStarsRate("⭐-Star")} />
                                <label htmlFor='rating_opt1'><span>don't waste your time</span></label>
                            </div>
                        </div>
                        
                        <div className='w-100 d-flex justify-content-start'>
                            <button
                                disabled ={ !name || !email || !question1 || !question2 || !question3 || !question4 || !message }
                                className="floating-button" 
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#myModal"
                                onClick = { () => addReview(name, email, question1, question2, question3, question4, message, starsRate, playModal) } >
                                Send
                            </button>
                        </div>
                        <hr className="my-4" />
                        <div className="w-100 d-flex justify-content-evenly align-items-center">
                            <p className="warningText"><BsListCheck className='fs-5'></BsListCheck> Please, complete all fields to confirm your questionary!</p>
                            <img className='Character' src={Character} alt="3DCharacter" />
                        </div>
                        
                    </form>
                    <LowMouseFooter />
                    <footer className="py-3 my-4 d-flex justify-content-center">
                        <small className="footer-tex-down">
                            <AiOutlineCopyrightCircle className='fs-5'></AiOutlineCopyrightCircle> {year} Created with
                            <i className="fa-solid fa-heart ps-2 fs-5"></i> by
                            <img className='myLogo' src={myLogo} alt="myLogo" />
                        </small>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Form;