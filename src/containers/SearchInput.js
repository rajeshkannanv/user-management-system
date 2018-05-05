import { connect } from 'react-redux';

import TextBox from '../components/TextBox'
import { handleChange } from "../action/index";

function mapStateToProps({users: {searchValue} }) {
  return {
    searchValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: value => dispatch(handleChange(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
