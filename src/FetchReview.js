
import axios from 'axios';

const myURL = "https://user-review.onrender.com";

const addReview = (name, email, question1, question2, question3, question4, message, starsRate, playModal) => {
    axios.post(`${myURL}/saveReview`, {
        name, email, question1, question2, 
        question3, question4, message, starsRate
    })
    
    playModal();
}

export {addReview};



