import { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import pathnames from '../utils/pathnames';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../components/Context';

const useStyle = makeStyles((theme) => ({
    rootContainer: {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'solid',
        borderRadius: '5px',
        borderColor: '#cfcfcf',
        marginTop: '2.5em',
        marginBottom: '2em',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '90vw',
            borderStyle: 'none',
            padding: '0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '1em',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '2em',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '3em',
        },
    },
    input: {
        margin: '1em',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95vw',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '60vw',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '40vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30vw',
        },
    },
    title: {
        marginTop: 0,
        marginBottom: '1em',
        fontFamily: 'roboto',
        fontSize: '1.5em'
    },
    button: {
        marginTop: '1em'
    }
}))


function UserForm() {
    const aliasRef = useRef(null);
    const [sended, setSended] = useState(false);
    const classes = useStyle();
    let history = useHistory();
    const { setUserData } = useContext(ThemeContext);

    function saveData() {
        setSended(true)
        if (aliasRef.current.value.length > 0) {
            localStorage.setItem('alias', aliasRef.current.value);
            setUserData({'alias': aliasRef.current.value});
            history.push(pathnames.formembu);
        }
    }

    return (
        <div>
            <AppBar />
            <div className={classes.rootContainer}>
                <form className={classes.root}>
                    <h3 className={classes.title}>DATOS INFORMATIVOS</h3>
                    <TextField
                        required
                        id="alias"
                        label="Alias"
                        variant="outlined"
                        inputRef={aliasRef}
                        className={classes.input}
                        helperText={sended && aliasRef.current.value === "" ? 'Debe completar este campo' : ''}
                        error={sended && aliasRef.current.value === ""}
                        name="alias"
                        InputProps={{ inputProps: { maxLength: 30 } }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        onClick={saveData}
                    >
                        ACEPTAR
                    </Button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default UserForm;