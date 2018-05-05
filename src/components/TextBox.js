import React from 'react'
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: `calc(100% - ${theme.spacing.unit * 5}px)`,
    }
});

const TextBox = ({ label, classes, handleChange}) =>
    <TextField
        label={label}
        placeholder={label}
        className={classes.textField}
        margin="normal"
        onChange={e => handleChange(e.target.value)}
    />

export default withStyles(styles)(TextBox)
