import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const text = `Este es un cuestionario para determinar cómo ciertos acontecimientos en nuestra  sociedad afectan
    a las personas. Cada ítem consiste de dos oraciones  denominadas A y B. Escoja entre las alternativas, la que 
    más fuertemente usted crea (en su opinión)  que  describa  la situación expuesta.
    Marque  la alternativa (A o B) que indique su opinión. Cerciórese de escoger  la alternativa en que  verdaderamente  
    crea, en vez de la que piensa que deba escoger o la que quisiera que fuese verdad. \n
    El presente cuestionario es una medida  de las creencias personales  y por lo tanto,  no hay respuestas  correctas  o incorrectas.\n
    Por  favor conteste  con cuidado  pero  sin detenerse particularmente en ningún  ítem.  Tal vez descubra  que  en algunos  casos usted
    crea  en ambas alternativas o que no cree en ninguna  de las dos. En esos casos escoja la alternativa que más se acerque  a lo que
    usted cree y en lo que a usted  respecta.  Trate  de contestar a cada  ítem  independientemente al hacer  su selección, no se deje
    afectar  por sus selecciones anteriores.\n
`;

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
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95%',
            fontSize: '1em',
            lineHeight: '1.3em',

        },
        [theme.breakpoints.up('sm')]: {
            width: '80%',
            fontSize: '1.15em',
            lineHeight: '1.4em',

        },
    },
    textStrong: {
        textAlign: 'left',
        fontFamily: 'roboto',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '95%',
            fontSize: '1em',
        },
        [theme.breakpoints.up('sm')]: {
            width: '80%',
            fontSize: '1.15em',
        },
        fontWeight: 'bold'
    },
    button: {
        margin: '2em'
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
                    <br/>
                    Marque  la alternativa (A o B) que indique su opinión. Cerciórese de escoger  la alternativa en que  verdaderamente
                    crea, en vez de la que piensa que deba escoger o la que quisiera que fuese verdad.
                    <br/>
                    El presente cuestionario es una medida  de las creencias personales  y por lo tanto,  no hay respuestas  correctas  o incorrectas
                    <br/>
                    Por  favor conteste  con cuidado  pero  sin detenerse particularmente en ningún  ítem.  Tal vez descubra  que  en algunos  casos usted
                    crea  en ambas alternativas o que no cree en ninguna  de las dos. En esos casos escoja la alternativa que más se acerque  a lo que
                    usted cree y en lo que a usted  respecta.  Trate  de contestar a cada  ítem  independientemente al hacer  su selección, no se deje
                    afectar  por sus selecciones anteriores.
                </p>
                <span className={classes.textStrong}>
                    RECUERDE: Escoja la alternativa que usted personalmente crea que sea la más verdadera en cada ítem.
                </span>
                <Button color="secondary" variant="contained" className={classes.button}>
                    ACEPTAR
                </Button>
            </div>
            <Footer />
        </div>
    )
}

export default Preview;