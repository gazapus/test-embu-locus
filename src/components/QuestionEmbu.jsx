import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'double',
        borderWidth: '5px',
        boxSizing: 'border-box',
        padding: '1em',
        borderColor: '#ded9ff',
        marginBottom: '1em',
        [theme.breakpoints.down('sm')]: {
            borderStyle: 'none',
            padding:'0em',
            width: '100%',
        },
    },
    title: {
        color: '#1f1f1f',
        margin: '3vmax',
        textAlign: 'center',
        minHeight: '3em'
    },
    radios: {
        display: 'flex',
        justifyContent: 'center',

        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    radio: {
        display: 'flex',
        margin: '0 1em 0 1em',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row'
        },
    },
    label: {

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
}))


function Question({ question, saveAnswer, setErrorMessage, number }) {
    const [selectedValue, setSelectedValue] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        setSelectedValue(-1);
    }, [question])


    function handleSubmit() {
        if (selectedValue === -1) {
            setErrorMessage('Debe elegir una opción');
        } else {
            setErrorMessage('');
            saveAnswer(selectedValue);
        }
    }

    const handleChange = (event) => {
        setSelectedValue(parseInt(event.target.value));
    };


    return (
        <div className={classes.rootContainer}>
            <form className={classes.root}>
                <Typography variant="h5" className={classes.title}>
                    {number + " - " + question.question}
                </Typography>
                <div className={classes.radios}>
                    <div className={classes.radio}>
                        <Radio
                            checked={selectedValue === 1}
                            onChange={handleChange}
                            value={1}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 1 }}
                            onKeyDown={e => {if(e.key === "Enter") handleSubmit()}}
                            id="Nunca"
                        />
                        <label htmlFor="Nunca" className={classes.label}>Nunca</label>
                    </div>
                    <div className={classes.radio}>
                        <Radio
                            checked={selectedValue === 2}
                            onChange={handleChange}
                            value={2}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 2 }}
                            onKeyDown={e => {if(e.key === "Enter") handleSubmit()}}
                            id="pocas"
                        />
                        <label htmlFor="pocas" className={classes.label}>Pocas veces</label>
                    </div>
                    <div className={classes.radio}>
                        <Radio
                            checked={selectedValue === 3}
                            onChange={handleChange}
                            value={3}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 3 }}
                            onKeyDown={e => {if(e.key === "Enter") handleSubmit()}}
                            id="algunas"
                        />
                        <label htmlFor="algunas" className={classes.label}>Algunas veces</label>
                    </div>
                    <div className={classes.radio}>
                        <Radio
                            checked={selectedValue === 4}
                            onChange={handleChange}
                            value={4}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 4 }}
                            id="muchas"
                            onKeyDown={e => {if(e.key === "Enter") handleSubmit()}}
                        />
                        <label htmlFor="muchas" className={classes.label}>Muchas veces</label>
                    </div>
                    <div className={classes.radio}>
                        <Radio
                            checked={selectedValue === 5}
                            onChange={handleChange}
                            value={5}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 5 }}
                            id="siempre"
                            onKeyDown={e => {if(e.key === "Enter") handleSubmit()}}
                        />
                        <label htmlFor="siempre" className={classes.label}>Siempre</label>
                    </div>
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
            </form>
        </div>
    )
}

export default Question;