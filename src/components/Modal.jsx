import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        [theme.breakpoints.between('xs', 'md')]: {
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            width: '70%',
        },
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: '80vh',
        overflow: 'auto'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: "0.9em"
    }, 
    qa: {
        overflow: 'auto',
        maxHeight: '70%'
    },
    options:{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1.3em',
        marginLeft: 'none'
    }
}));

export default function SimpleModal({ open, questions, answer, handleClose }) {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [modalStyle] = useState(getModalStyle);

    useEffect(() => {
        let processedAnswers = [];
        for (let i = 0; i < 23; i++) {
            processedAnswers.push({
                opcionA: {
                    text: questions[i].options[0],
                    locus: questions[i].locus,
                    chosen: answer.answers[i] === 0
                },
                opcionB: {
                    text: questions[i].options[1],
                    locus: (questions[i].locus === 'externo' ? 'interno' : 'externo'),
                    chosen: answer.answers[i] === 1
                }
            })
        }
        setData(processedAnswers);
    }, [answer])

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title" style={{textAlign: 'center'}}>Detalles</h2>
                    <div className={classes.info}>
                        <span>Alias: {answer.alias}</span>
                        <span>Edad: {answer.age}</span>
                        <span>Sexo: {answer.sex}</span>
                        <span>Grado: {answer.paralelo}</span>
                        <span>Locus: {answer.locus}</span>
                        <span>Locus Interno: {answer.locusInterno}</span>
                        <span>Locus Externo: {answer.locusExterno}</span>
                    </div>
                    <div className={classes.qa}>
                        <ol style={{paddingLeft: 0}}>
                            {data.map((answer, index) => 
                                <li className={classes.options} key={index}>
                                    <span style={{textAlign: "center", fontSize: "0.8em", lineHeight: '1.5em', textDecoration: 'underline'}}>{index + 1}</span>
                                    <span style={{backgroundColor: answer.opcionA.chosen ? '#d1ffd8': '#ffffff'}}>
                                        {answer.opcionA.text}{'\u00A0'}
                                        <span style={{fontSize: '0.8em', fontWeight: 600}}>({answer.opcionA.locus})</span>
                                    </span>
                                    <span style={{backgroundColor: answer.opcionB.chosen ? '#d1ffd8': '#ffffff', lineHeight: '1.5em'}}>
                                        {answer.opcionB.text}{'\u00A0'}
                                        <span style={{fontSize: '0.8em', fontWeight: 600}}>({answer.opcionB.locus})</span>
                                    </span>
                                </li>
                            )}
                        </ol>
                    </div>

                </div>
            </Modal>
        </div>
    );
}