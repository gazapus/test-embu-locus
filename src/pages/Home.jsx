import AppBar from '../components/AppBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';
import pathnames from '../utils/pathnames';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '8vh'
    },
    title: {
        textAlign: 'center',
        marginTop: '1em',
        maxWidth: '95%'
    },
    locus: {
        textAlign: 'center',
        marginTop: 0,
        maxWidth: '95%'
    },
    button: {
        marginTop: '5em',
        marginBottom: '4em',
        padding: '1.3em 3em 1.3em 3em',
    }
})


function Home() {
    const classes = useStyle();

    return (
        <div className={classes.rootContainer}>
            <AppBar />
            <div className={classes.root}>
                <Typography variant={window.innerWidth > 400 ? 'h4' : 'h5'}className={classes.title}>
                    Carrera de Psicología Educativa y Orientación
                </Typography>
                <Typography variant={window.innerWidth > 400 ? 'h4' : 'h5'} className={classes.title}>
                    Proyecto para el trabajo de Titulación
                </Typography>
                <Typography className={classes.title}>
                    Instrumento: Inventario personal sobre algunas situaciones sociales de Rotter.
                </Typography>
                <Typography  className={classes.locus}>
                    (Locus de Control)
                </Typography>
                <Link to={pathnames.userform} style={{textDecoration: 'none'}}>
                    <Button variant="contained" color="secondary" size="large" className={classes.button}>EMPEZAR</Button>
                </Link>
            </div>
            <Footer />
        </div>

    )
}

export default Home;