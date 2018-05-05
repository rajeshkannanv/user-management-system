import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import ChromeReaderMode from '@material-ui/icons/ChromeReaderMode';
import { Route } from 'react-router-dom'
import { listItems } from './tileData';
import ContentToolbar from '../containers/ContentToolbar';
import UserListForm from './UserListForm'
import UserListType from './UserListType'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBarHeader: {
    position: 'absolute',
  },
  appTitle: {
    flex: 1,
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    top: '56px',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#f5f5f5',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      top: '64px',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  toolbarHeader:{
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  docked: {
    [theme.breakpoints.up('md')]: {
      marginTop: '64px',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
    marginBottom: theme.spacing.unit * 3,
  },
  button: {
    color: '#fff',
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

@withStyles(styles, { withTheme: true })
class ResponsiveDrawer extends Component {
  state = {
    mobileMenuOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <AppBar className={classes.toolbarHeader}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Users
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <List>{listItems}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBarHeader}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.appTitle} noWrap>
              Product Name
            </Typography>

            <div>
                <IconButton color="inherit">
                    <ChromeReaderMode />
                </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <AppBar className={classes.appBar}>
          <ContentToolbar />
        </AppBar>

        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileMenuOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              docked: classes.docked,
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.toolbar} />

            <Route path="/" exact component={UserListForm} />
            <Route path="/favourites" component={UserListType} />
            <Route path="/administrators" component={UserListType} />
            <Route path="/non-admins" component={UserListType} />

          <Button variant="fab" color="secondary" aria-label="add" className={classes.button}>
            <AddIcon />
          </Button>
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default ResponsiveDrawer;
