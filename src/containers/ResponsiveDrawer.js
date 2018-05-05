import { connect } from 'react-redux';

import ResponsiveDrawer from '../components/ResponsiveDrawer'
import { handleDrawerToggle, sortUsers } from "../action/index";

function mapStateToProps({drawer: {mobileMenuOpen}, users: {sortDirection} }) {
  return {
    mobileMenuOpen,
    sortDirection
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleDrawerToggle: show => dispatch(handleDrawerToggle(show)),
    sortUsers: sortDirection => dispatch(sortUsers(sortDirection)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
