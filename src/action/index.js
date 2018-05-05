const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export function handleDrawerToggle(show){
    return {
        type: TOGGLE_DRAWER,
        show
    }
}

const SEARCH_CHANGE = 'SEARCH_CHANGE';
const SORT_USERS = 'SORT_USERS';

export function handleChange(value){
  return {
      type: SEARCH_CHANGE,
      value
  }
}

export function sortUsers(sortDirection){
  return {
      type: SORT_USERS,
      sortDirection
  }
}
