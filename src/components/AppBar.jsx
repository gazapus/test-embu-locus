import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UNLIcon from '../images/unl.png';
import pathnames from '../utils/pathnames';

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        margin: '0.8em 0 0.8em 0'
    },
    menuIcon: {
        marginRight: theme.spacing(2),
        width: '3em'
    },
    title: {
        flexGrow: 1,
        color: '#141414',
    },
}));

function AppTopBar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to={pathnames.home} className={classes.link}>
                    <img src={UNLIcon} className={classes.menuIcon} alt="" />
                    <Typography variant="h4" className={classes.title}>
                        UNL - Encuesta estudiantil
                        </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppTopBar;