import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Alert, AlertTitle} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    invisible: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}));

export default function ActionAlerts({ message, handleClose}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert 
                className = {(message === '' ? classes.invisible : classes.visible)}
                onClose={handleClose}
                severity='error'
            >  
                <AlertTitle>Error</AlertTitle>
                {message === '' ? 'A' : message}
            </Alert>
        </div>
    );
}