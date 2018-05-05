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

export const userList = [
  {
      "fullName": "Susy Cuningham",
      "email": "suzy.cuningham@gmail.com",
      "date": "2015-10-01",
      "year": "1 year ago"
  },{
      "fullName": "Bobby Daniels",
      "email": "bobbyD@outlook.com",
      "date": "2015-10-01",
      "year": "1 year ago"
  },{
      "fullName": "John Walker",
      "email": "johnnyWalker@blue.com",
      "date": "2015-10-01",
      "year": "1 year ago"
  },{
      "fullName": "Eddy Stevens",
      "email": "eStevens@yahoo.com",
      "date": "2015-10-01",
      "year": "1 year ago"
  },{
      "fullName": "Jan Williams",
      "email": "jDubz@msn.com",
      "date": "2015-12-31",
      "year": "1 year ago"
  }
]
const initialState = {
  userList,
  searchValue: '',
  sortDirection: true,
};

export default function reducer(state = initialState, action){
  switch (action.type){
    case SEARCH_CHANGE:
      return {
          ...state,
          searchValue: action.value,
          userList: action.value !== ""
              ? state.userList.filter(user => user.fullName.toLowerCase()
                  .match(action.value.toLowerCase()))
              : userList
      };
    case SORT_USERS:
      return action.sortDirection
          ? {...state, userList: [...state.userList.sort((a,b) =>
                  a.fullName < b.fullName
                      ? -1
                      : a.fullName > b.fullName
                      ? 1
                      : 0)],
          sortDirection: !action.sortDirection}
          : {...state, userList: [...state.userList.sort((a,b) =>
                  a.fullName > b.fullName
                      ? -1
                      : a.fullName < b.fullName
                      ? 1
                      : 0)],
            sortDirection: !action.sortDirection}
      default:
          return state;
  }
}
