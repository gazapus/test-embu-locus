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
                    Instrumento: Escala EMBU 89 (Hijos)
                </Typography>
                <p className={classes.text}>
                    Este instrumento fue creado por Perris et al. (1996) para obtener los datos referidos a las percepciones 
                    que tienen los hijos sobre las  estrategias educativas parentales. Consta de 81 ítems con cinco posibilidades
                    de respuesta  <em>5 «siempre», 4 «muchas veces», 3 «algunas veces», 2 «pocas veces» y 1 «nunca». </em>
                </p>
                <p className={classes.textStrong}>Instrucciones:</p>
                <p className={classes.text}>
                    A continuación se presenta una escala para evaluar los estilos educativos parentales percibidos por los hijos, 
                    la información recogida será confidencial y servirá para el desarrollo de un proyecto de investigación. 
                    Sírvase contestar con toda sinceridad. Marque en el número correspondiente según sea su respuesta
                </p>
                <Link to={pathanames.formembu} style={{textDecoration: 'none'}}>
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