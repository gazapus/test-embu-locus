import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#1f1f1f',
        paddingBottom: '1em',
        position: props => props.position,
        bottom: 0,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTitle: {
        fontSize: (window.innerHeight <650 ) ? '0.8em' : '0.9em',
        margin: (window.innerHeight <650 ) ? '0.5em 0 0 0' : '1.5em 0 0 0',
        textAlign: 'center',
        color: '#adadad'
    },
    footerText: {
        fontSize: (window.innerHeight <650 ) ? '0.6em' : '0.7em',
        margin: '0.5em 0 0 0',
        textAlign: 'center',
        color: '#adadad'
    }
});

function Footer() {
    const [position, setPosition] = useState('relative');

    useEffect(() => {
        let html = document.documentElement;
        if(html.scrollHeight <= html.offsetHeight ) {
            setPosition('relative');
        } else {
            setPosition('absolute')
        }
        //if(window.innerHeight < 650 ) setPosition('relative')
    }, [])

    const classes = useStyles({position: position});
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.content}>
                <p className={ classes.footerTitle}>
                    Universidad Nacional de Loja  |  Carrera de Psicología Educativa y Orientación
                </p>
                <p className={ classes.footerText}>
                    Diseñado por <a href="https://github.com/sendrarisk" style={{textDecoration: 'none', color: 'inherit'}}>Cristian Villafañe</a>
                </p>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;