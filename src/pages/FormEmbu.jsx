import { useState, useEffect } from 'react';
import Alert from '../components/Alert';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';
import { questions } from '../data/questions';
import QuestionEmbu from '../components/QuestionEmbu';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    progressContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '1em'
    },
    progress: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '80%',
        },
    }
}))

function FormEmbu() {
    const [answers, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    let history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        if (!localStorage.getItem('alias')) {
            history.push(pathnames.userformembu);
        }
    }, [])

    useEffect(() => {
        if (answers[questions.length - 1]) {
            history.push({
                pathname: pathnames.end2,
                state: { answers: answers }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [answers])

    function saveAnswer(selectedValue) {
        let newAnswer = Object.assign({}, questions[currentQuestion]);
        newAnswer.selected = selectedValue;
        let newAnswers = [...answers];
        newAnswers.push(newAnswer);
        setAnswers(newAnswers);
        nextQuestion();
    }

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    return (
        <div>
            <AppBar />
            <Alert message={errorMessage} handleClose={() => setErrorMessage('')} />
            <QuestionEmbu
                question={questions[currentQuestion]}
                saveAnswer={saveAnswer}
                setErrorMessage={setErrorMessage}
                number={currentQuestion + 1}
            />
            <div className={classes.progressContainer}>
                <LinearProgress
                    variant="determinate"
                    value={(currentQuestion + 1) * 100 / 81}
                    className={classes.progress}
                />
            </div>
            { window.innerWidth < 700 || window.innerHeight < 700 ? <Footer2 /> : <Footer />}
        </div>
    )
}

export default FormEmbu;

