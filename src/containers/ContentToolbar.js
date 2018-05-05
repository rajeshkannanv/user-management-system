import { connect } from 'react-redux';
import ContentToolbar from '../components/ContentToolbar'
import { sortUsers } from "../action/index";

function mapStateToProps({users: {sortDirection} }) {
  return {
    sortDirection
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortUsers: sortDirection => dispatch(sortUsers(sortDirection)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentToolbar);
