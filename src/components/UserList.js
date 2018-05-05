import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Hidden from 'material-ui/Hidden';
import MoreVert from '@material-ui/icons/MoreVert';


const styles = theme => ({
  root: {
    width: '100%',
  },
  listItem: {
    flex: 'auto'
  },
  listItemDate: {
    flex: 'none',
    width: '100px'
  },
  caption: theme.typography.caption
});


const UserList = ({ classes, userList }) => {
  return <div className={classes.root}>
          <List className={classes.root}>
            {userList.map((user, idx) => (
              <ListItem dense button key={idx}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>

                <Hidden smDown>
                  <ListItemText
                    className={classes.listItem}
                    primary={user.fullName}
                    secondary={user.email}
                  />
                  <ListItemText
                    className={classes.listItemDate}
                    primary={user.date}
                  />
                  <ListItemText
                    className={classes.listItemDate}
                    primary={user.year}
                  />
                </Hidden>

                <Hidden mdUp>
                  <ListItemText
                    className={classes.listItem}
                    primary={user.fullName}
                    secondary={
                      <div>
                        <div className={classes.caption}>{user.email}</div>
                        <div className={classes.caption}>last login: {user.date}</div>
                      </div>
                    }
                    disableTypography
                  />
                </Hidden>

                <ListItemSecondaryAction>
                  <IconButton aria-label="Actions">
                    <MoreVert />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
    };

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserList);
