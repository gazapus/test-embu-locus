import { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthService from '../services/auth.service';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';

const useStyles = makeStyles({
    root: {

    },
    innerRoot: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        margin: "1em"
    },
    login: {
        borderStyle: "solid",
        padding: "2em",
        borderColor: "grey",
        display: "flex",
        flexDirection: "column",
        marginBottom: '2em'
    },
    input: {
        margin: "1em"
    },
    button: {
        margin: "1em"
    }
})

function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        AuthService.isLogged()
            .then(res => history.push(pathnames.dashboard))
            .catch(err => { AuthService.logout() })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleSubmit() {
        if (username === "") {
            setErrorUsername("Debe completar este campo");
            setErrorPassword("");
        } else {
            setErrorUsername("");
            if (password === "") {
                setErrorPassword("Debe completar este campo");
            } else {
                setErrorPassword("");
                AuthService.login(username, password)
                    .then(res => history.push(pathnames.dashboard))
                    .catch(err => alert("Usuario o contraseña invalido"))
            }
        }
    }

    return (
        <div>
            <AppBar />
            <div className={classes.innerRoot}>
                <Typography variant="h4" className={classes.title}>Iniciar Sesión</Typography>
                <form className={classes.login}>
                    <TextField
                        required
                        id="username"
                        label="Nombre de usuario"
                        variant="outlined"
                        type="text"
                        className={classes.input}
                        helperText={errorUsername}
                        error={errorUsername !== ""}
                        InputProps={{ inputProps: { maxLength: 20 } }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                    />
                    <TextField
                        required
                        id="password"
                        label="Contraseña"
                        variant="outlined"
                        type="password"
                        className={classes.input}
                        helperText={errorPassword}
                        error={errorPassword !== ""}
                        InputProps={{ inputProps: { maxLength: 20 } }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        className={classes.button}
                        color="secondary"
                    >
                        Entrar
                    </Button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;

