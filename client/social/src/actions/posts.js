import * as api from '../API'
// craete post
export const getPost = () => async(dispatch) => {
    try {
        const {data} =await api.fetchpost();
        dispatch({type:'FETCH_ALL' , payload:[]});
    } catch (error) {
        console.log(error.message);
    }
// const action = {type:'FETCH_ALL', payload:[]}
 

// dispatch(action)
}

