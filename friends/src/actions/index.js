import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
 
export const getChars = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get('http://localhost:5000/api/friends')
    
    .then(response => {
      dispatch({ type: FETCHED, chars: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching the data' });
    });
};

// const id = `http://localhost:5000/api/friends/${}`
export const deleteFriend = (id) => dispatch => {
  
  dispatch({ type: FETCHING, data: id });

  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({type: SUCCESS, successMessage: 'Friend Deleted'})
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching the data' });
    });
};

// app.delete('/api/friends/:id', (req, res) => {
//   const { id } = req.params;

//   friends = friends.filter(f => f.id !== Number(id));

//   res.send(friends);
// });