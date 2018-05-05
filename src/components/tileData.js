import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PeopleIcon from '@material-ui/icons/People';
import InboxIcon from '@material-ui/icons/Inbox';

export const listItems = (
  <div>
      <ListItem button component={Link} to="/">
          <ListItemIcon>
              <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="All Users" />
      </ListItem>
      <ListItem button component={Link} to="/favourites">
          <ListItemIcon>
              <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Favourites" />
      </ListItem>
      <ListItem button component={Link} to="/administrators">
          <ListItemIcon>
              <VerifiedUserIcon />
          </ListItemIcon>
          <ListItemText primary="Administrators" />
      </ListItem>
      <ListItem button component={Link} to="/non-admins">
          <ListItemIcon>
              <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Non-Admins" />
      </ListItem>
      <ListItem button component={Link} to="/archived">
          <ListItemIcon>
              <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Archived" />
      </ListItem>
  </div>
);
