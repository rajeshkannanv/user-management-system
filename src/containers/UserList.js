import { connect } from 'react-redux';
import UserList from '../components/UserList'

function mapStateToProps({users: {userList} }) {
  return {
    userList
  }
}

export default connect(mapStateToProps)(UserList);
