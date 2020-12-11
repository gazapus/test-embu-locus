import AppBar from '../components/AppBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';
import pathnames from '../utils/pathnames';
import { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import AnswerService from '../services/answerEmbu.service';
import {useContext} from 'react';
import {ThemeContext} from '../components/Context';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '8vh'
    },
    titleMain: {
        textAlign: 'center',
        marginTop: '1em',
        maxWidth: '95%',
        color: '#007400'
    },
    title: {
        textAlign: 'center',
        marginTop: '1em',
        maxWidth: '95%'
    },
    titleError: {
        textAlign: 'center',
        marginTop: '1em',
        maxWidth: '95%',
        color: '#740000'
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


function Ending({location}) {
    const [saving, setSaving] = useState(true);
    const [saved, setSaved] = useState(false);
    const { userData} = useContext(ThemeContext);

    const classes = useStyle();

    useEffect(() => {
        let dataToSave = {
            answers: location.state.answers,
            alias: userData.alias
        }
        console.log(dataToSave)
        AnswerService.create(dataToSave)
            .then(res => {
                if(res.status === 200) {
                    setSaved(true);
                } else {
                    setSaved(false);
                }
            })
            .catch(err => setSaved(false))
            .finally(() => setSaving(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.rootContainer}>
            <AppBar />
            <div className={classes.root}>
                {
                    saving ?
                        <CircularProgress color="secondary" />
                        :
                        saved ?
                            <div>
                                <Typography variant={window.innerWidth > 400 ? 'h3' : 'h4'} className={classes.titleMain}>
                                    Se ha registrado con éxito su respuesta
                                </Typography>
                                <Typography variant={window.innerWidth > 400 ? 'h4' : 'h5'} className={classes.title}>
                                    Gracias por su participación
                                </Typography>
                            </div>
                            :
                            <div>
                                <Typography variant={window.innerWidth > 400 ? 'h3' : 'h4'} className={classes.titleError}>
                                    Error al registrar su respuesta. Intente nuevamente
                                </Typography>
                                <Link to={pathnames.home} style={{textDecoration: 'none'}}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="large"
                                        className={classes.button}
                                    >
                                        Regresar
                                </Button>
                                </Link>
                            </div>
                }
            </div>
            <Footer />
        </div>

    )
}

export default Ending;