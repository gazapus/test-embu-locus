import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: (window.innerHeight > 420) ? 'absolute' : 'relative',
        bottom: 0,
        backgroundColor: '#1f1f1f',
        padding: '1vmin 0 1vmin 0'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    footerTitle: {
        fontSize: '0.9em',
        margin: 0
    },
    footerText: {
        fontSize: '0.7em',
        margin: 0
    }
}));

function AppTopBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.content}>
                <p className={ classes.footerTitle}>
                    titulo
                </p>
                <p className={ classes.footerText}>
                    subtitulo
                </p>
            </Toolbar>
        </AppBar>
    )
}

export default AppTopBar;