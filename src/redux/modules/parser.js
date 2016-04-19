const FETCH_DATA = 'FETCH_DATA';
const IS_FETCHING = 'IS_FETCHING';

const getTime = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;
  var day = date.getDate();
  if (day < 10) day = '0' + day;

  var dateString = year + month + day;
  console.log(dateString);
  return dateString;
}

const fetchDataPatch = (json) => {
  return {
    type: FETCH_DATA,
    payload: json
  }
}

export const isFetching = (status) => {
  return {
    type: IS_FETCHING,
    payload: status
  }
}

export const fetchData = (channel, date) => {
  return (dispatch, getState) => {
    var date = getTime();
    console.log(channel, date);
    dispatch(isFetching(true));
    fetch(`http://localhost:1337/get/${channel}/${date}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        var json = r;
        dispatch(isFetching(false));
        dispatch(fetchDataPatch(json));
      })
      .catch((e) => console.log(e));
  }
}

export const actions = {
  fetchData,
  isFetching
}

export default function parserReducer (state = {isFetching: false}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, ...{program: action.payload}};
    case IS_FETCHING:
      return {...state, ...{isFetching: action.payload}}
    default:
      return state;
  }
}
