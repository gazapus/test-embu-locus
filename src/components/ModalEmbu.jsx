import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

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
    options: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1.3em',
        marginLeft: 'none'
    }
}));

export default function SimpleModal({ open, answer, handleClose }) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="outlined" onClick={handleClose}>X</Button>
                    </div>
                    <h2 id="simple-modal-title" style={{ textAlign: 'center' }}>Detalles EMBU</h2>
                    <h4 id="simple-modal-title" style={{ textAlign: 'center' }}>{answer.alias}</h4>

                    <TableContainer component={Paper} >
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dimensión</TableCell>
                                    <TableCell align="right">Puntaje</TableCell>
                                    <TableCell align="right">Escala</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {answer.results.map((row) => (
                                    <TableRow key={row.name} hover={true}>
                                        <TableCell component="th" scope="row">
                                            {row.dimension}
                                        </TableCell>
                                        <TableCell align="right">{row.score}</TableCell>
                                        <TableCell align="right">{row.scale}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Accordion style={{backgroundColor: '#e9e9e9'}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h4 className={classes.heading}>Ver respuestas</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ol style={{display: 'flex', flexDirection: 'column'}}>
                                {answer.answers.map((e, index) =>
                                    <li style={{display: 'flex', flexDirection: 'column', marginBottom: '1em'}}>
                                        <span>
                                            {(1 + index) + ' - ' + e.question}
                                            <span style={{color: 'red', fontWeight: 'bold'}}>{e.reverse ? '*' : ''}</span>
                                            <span style={{color: 'grey', fontSize: '0.65em'}}>{ '(' + e.dimension + ')' }</span>
                                            </span>
                                        <span style={{fontSize: '0.8em', fontWeight: 'bold', textIndent: '2em'}}>{'Rta: ' + e.selected}</span>
                                    </li>
                                )}
                            </ol>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Modal>
        </div>
    );
}