import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles } from '@material-ui/core'
import AuthService from '../services/auth.service';
import AnswerService from '../services/answer.service';
import QuestionService from '../services/question.service';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';
import { useEffect, useState } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '../components/Table';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Modal from '../components/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    dataContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: '2em',
        [theme.breakpoints.between('xs', 'md')]: {
            width: '98%',
        },
        [theme.breakpoints.up('md')]: {
            width: '75%',
        },
    },
    title: {
        margin: "1.4em",
        textAlign: "center"
    },
    details: {
        display: "flex",
        flexDirection: "column",
        padding: "1em",
        width: '100%',
        boxSizing: 'border-box'
    },
    detail: {
        textIndent: '1em',
        fontFamily: 'roboto',
        lineHeight: '1.5em',
        fontSize: '0.9em'
    }
}));

function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLoggeed] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [modalAnswer, setModalAnswer] = useState(null);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        AnswerService.getAll()
            .then(res => {
                setLocus(res.data);
            })
            .catch(err => {
                alert("Error al traer los datos: answers")
            })
    }, [questions])

    useEffect(() => {
        if (isLogged) {
            QuestionService.getAll()
                .then(res => {
                    setQuestions(res.data);
                })
                .catch(err => alert("Error al traer los datos: questions"))
        }
    }, [isLogged])

    useEffect(() => {
        AuthService.isLogged()
            .then(res => {
                setIsLoggeed(true);
            })
            .catch(err => {
                history.push(pathnames.login)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function deleteAnswer(id) {
        confirmAlert({
            title: '¿Eliminar Registro?',
            buttons: [
                {
                    label: 'Confirmar',
                    onClick: () => {
                        AnswerService.remove(id)
                            .then(res => {
                                let newAnswers = [...answers];
                                newAnswers.splice(newAnswers.findIndex(e => e.id === id), 1);
                                setAnswers(newAnswers);
                            })
                            .catch(err => alert("Error al eliminar"));
                    }
                },
                {
                    label: 'Cancelar',
                }
            ]
        });
    }

    function logout() {
        AuthService.logout();
        history.push(pathnames.login);
    }

    function calculateLocus(answer) {
        let locusInterno = 0;
        let locusExterno = 0;
        for (let i = 0; i < questions.length; i++) {
            if ((questions[i].locus === "interno" && answer.answers[i] === 0)
                || (questions[i].locus === "externo" && answer.answers[i] === 1)
            ) {
                locusInterno++;
            } else {
                locusExterno++;
            }
        }
        answer.locusInterno = locusInterno;
        answer.locusExterno = locusExterno;
        answer.locus = (locusInterno > locusExterno) ? "Interno" : "Externo";
    }

    function setLocus(answers) {
        for (let i = 0; i < answers.length; i++) {
            calculateLocus(answers[i]);
        }
        setAnswers(answers);
        setLoading(false);
    }

    if (loading) return <CircularProgress color="primary"></CircularProgress>

    return (
        <div>
            <AppBar rightComponent={
                <div >
                    <span style={{ fontFamily: 'roboto', textTransform: 'capitalize', color: '#eeeeee' }}>
                        {AuthService.getCurrentUser().username}
                    </span>
                    <IconButton onClick={logout}>
                        <ExitToAppIcon fontSize="large" color="secondary" />
                    </IconButton>
                </div>}
            />
            <div className={classes.root}>
                <Typography variant="h5" className={classes.title}>Administración</Typography>
                <div className={classes.dataContainer}>
                    <div className={classes.details}>
                        <span className={classes.detail}>Locus Externo: {answers.filter(e => e.locus === "Externo").length}</span>
                        <span className={classes.detail}>Locus Interno: {answers.filter(e => e.locus === "Interno").length}</span>
                    </div>
                    <Table
                        answers={answers}
                        onDelete={deleteAnswer}
                        onDetails={(answer) => setModalAnswer(answer)} />
                </div>
            </div>
            <Footer />
            {modalAnswer ?
                <Modal
                    open={modalAnswer !== null}
                    answer={modalAnswer}
                    questions={questions}
                    handleClose={() => setModalAnswer(null)}
                /> : ''
            }
        </div>
    )
}

export default Dashboard;