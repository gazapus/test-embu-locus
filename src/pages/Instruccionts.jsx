import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import pathanames from '../utils/pathnames';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        margin: '1em'
    },
    text: {
        textAlign: 'left',
        fontFamily: 'roboto',
        marginBottom: 0,
        marginTop: '0.3em',
        lineHeight: '1.4em',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95%',
            fontSize: '1em',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '80%',
            fontSize: '1.15em',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
            fontSize: '1.15em',
        },
    },
    textStrong: {
        textIndent: '1em',
        textAlign: 'left',
        fontFamily: 'roboto',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95%',
            fontSize: '1em',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: '80%',
            fontSize: '1.15em',
        },
        [theme.breakpoints.up('md')]: {
            width: '65%',
            fontSize: '1.15em',
        },
        fontWeight: 'bold',
        margin: '0.5em',
    },
    button: {
        margin: '2em',
    }
}))


function Preview() {
    const classes = useStyles();

    return (
        <div>
            <AppBar />
            <div className={classes.root}>
                <Typography variant="h4" className={classes.title}>
                    INSTRUCCIONES
                </Typography>
                <p className={classes.text}>
                    Este es un cuestionario para determinar cómo ciertos acontecimientos en nuestra  sociedad afectan
                    a las personas. Cada ítem consiste de dos oraciones  denominadas A y B. Escoja entre las alternativas, la que
                    más fuertemente usted crea (en su opinión)  que  describa  la situación expuesta.
                </p>
                <p className={classes.text}>
                    Marque  la alternativa (A o B) que indique su opinión. Cerciórese de escoger  la alternativa en que  verdaderamente
                    crea, en vez de la que piensa que deba escoger o la que quisiera que fuese verdad.
                </p>
                <p className={classes.text}>
                    El presente cuestionario es una medida  de las creencias personales  y por lo tanto,  no hay respuestas  correctas  o incorrectas
                </p>
                <p className={classes.text}>
                    Por  favor conteste  con cuidado  pero  sin detenerse particularmente en ningún  ítem.  Tal vez descubra  que  en algunos  casos usted
                    crea  en ambas alternativas o que no cree en ninguna  de las dos. En esos casos escoja la alternativa que más se acerque  a lo que
                    usted cree y en lo que a usted  respecta.  Trate  de contestar a cada  ítem  independientemente al hacer  su selección, no se deje
                    afectar  por sus selecciones anteriores.
                </p>
                <span className={classes.textStrong}>
                    RECUERDE: Escoja la alternativa que usted personalmente crea que sea la más verdadera en cada ítem.
                </span>
                <Link to={pathanames.form} style={{textDecoration: 'none'}}>
                    <Button color="secondary" variant="contained" className={classes.button} size="large">
                        ACEPTAR
                </Button>
                </Link>
            </div>
            <Footer />
        </div >
    )
}

export default Preview;