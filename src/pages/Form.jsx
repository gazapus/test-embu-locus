import { useState, useEffect } from 'react';
import QuestionService from '../services/question.service';
import Question from '../components/Question.jsx';
import Alert from '../components/Alert';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    progressContainer: {
        display: 'flex',
        width: '98vw',
        justifyContent: 'center',
        margin: '1vmax',
    },
}));

function Form() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const classes = useStyles();

    useEffect(() => {
        let answers = Array(23).fill(-1);
        setAnswers(answers);
        QuestionService.getAll()
            .then(res => setQuestions(res.data))
            .catch(err => setErrorMessage('Error: Reintenté de vuelta'))
    }, []);

    function saveAnswer(optionChosen) {
        let newAnswers = [...answers];
        newAnswers[currentQuestion] = optionChosen;
        setAnswers(newAnswers);
        nextQuestion();
    }

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            alert("fin");
        }
    }

    return (
        <div>
            <AppBar />
            <Alert message={errorMessage} handleClose={() => setErrorMessage('')} />
            {
                questions.length === 0 ?
                    <div className={classes.progressContainer}>
                        <CircularProgress color="secondary" />
                    </div>
                    :
                    <Question
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        saveAnswer={saveAnswer}
                        setErrorMessage={setErrorMessage}
                    />
            }
            <Footer/>
        </div>
    )
}

export default Form;