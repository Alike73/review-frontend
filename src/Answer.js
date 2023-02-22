import Gloria from './Assets/Gloria.png';
import AlexMarty from './Assets/Alex-and-Marty.png';
import Melman from './Assets/Melman.png';

const Answer = () => {

    const clearPage = () => {
        document.location.reload(true);
    }

    return (
        <div>
            <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img className='Melman' src={Melman} alt="Melman" width={128} />
                            <h1 className="modal-title display-5 fw-bold text-center w-100" id="myModalLabel">Thank you.</h1>
                            <i onClick={clearPage} className="bi bi-x-circle fs-3" data-bs-dismiss="modal" aria-label="Close"></i>
                        </div>
                        <div className="modal-body w-100 d-flex justify-content-center py-5">
                            <img className='Gloria' src={Gloria} alt="GloriaHippo" />
                            <h2 className="fs-1 fw-bold text-center AnswerBodyText">Your questionnaire is received!</h2>
                            <img className='AlexMarty' src={AlexMarty} alt="AlexMarty" />
                        </div>
                        <div className="modal-footer py-3">
                            <button onClick={clearPage} type="button" className="btn btn-warning me-auto" data-bs-dismiss="modal">
                            <i className="bi bi-list-ol me-2"></i>
                                Go back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Answer;