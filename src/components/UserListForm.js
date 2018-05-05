import React from 'react'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Search from '@material-ui/icons/Search';
import SearchInput from '../containers/SearchInput';
import UserList from '../containers/UserList';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  form: {
    width: '100%',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginTop: `-${theme.spacing.unit * 2}px`,
    '& label + div': {
      marginTop: 24,
    }
  }
});

const UserListForm = ({ classes }) => (
  <Paper className={classes.container}>
    <div className={classes.form}>
      <label htmlFor="searchTextBox">
        <Search/>
      </label>
      <SearchInput label="Search"/>
      <UserList />
    </div>
  </Paper>)

export default withStyles(styles)(UserListForm)
