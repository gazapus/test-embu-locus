import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        width: (window.innerWidth < 800) ? '100%' : '80%',
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle:  (window.innerWidth < 800) ? 'none' : 'solid',
        boxSizing: 'border-box',
        padding: '1em',
        borderColor: '#e6e2ff',
        marginBottom: '1em'
    },
    title: {
        color: '#1f1f1f',
        margin: '3vmax'
    },
    optionsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    optionButton: {
        padding: '1em',
        fontSize: '1.1em',
        marginTop: '1em',
        textTransform: 'none',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95vw',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '70vw',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50vw',
        },
    },
    buttonContainer: {
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95vw',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '70vw',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '60vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50vw',
        },
        marginTop: '4em',
        marginBottom: '1em',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
}));


function Question({ question, options, saveAnswer, setErrorMessage }) {
    const [optionChosen, setOptionChosen] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        setOptionChosen(-1);
    }, [question])


    function handleSubmit() {
        if (optionChosen === -1) {
            setErrorMessage('Debe elegir una opción');
        } else {
            setErrorMessage('');
            saveAnswer(optionChosen);
        }
    }

    return (
        <div  className={classes.rootContainer}>
            <div className={classes.root}>
                <Typography variant={window.innerWidth < 800 ? "h5" : "h4"} className={classes.title}>
                    {question}
                </Typography>
                <div className={classes.optionsContainer}>
                    <Button
                        size="large"
                        color="primary"
                        variant={optionChosen === 0 ? "contained" : "outlined"}
                        onClick={() => setOptionChosen(0)}
                        className={classes.optionButton}
                    >
                        {"A - " + options[0]}
                    </Button>
                    <Button
                        size="large"
                        color="primary"
                        variant={optionChosen === 1 ? "contained" : "outlined"}
                        onClick={() => setOptionChosen(1)}
                        className={classes.optionButton}
                    >
                        {"B - " + options[1]}
                    </Button>
                </div>
                <div className={classes.buttonContainer}>
                    <Button
                        size="large"
                        color="secondary"
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Siguiente
                </Button>
                </div>
            </div>
        </div>
    )
}

export default Question;