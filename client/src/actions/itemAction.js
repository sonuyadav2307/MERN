import {GET_ITEMS,ADD_ITEMS,DELETE_ITEMS,ITEMS_LOADING} from './types';
import axios from 'axios';
import {useDispatch as dispatch} from 'react-redux'


export const getItems = () =>async dispatch=> {
   await dispatch(setItemsLoading())
   await axios.get('/api/items')
        .then(res => dispatch({
            type:GET_ITEMS,
            payload:res.data
        }))
}
export const addItems = (item)=> dispatch => {
    axios.post('/api/items', item)
        .then(res => 
            dispatch({
                type:ADD_ITEMS,
                payload:res.data
            }))
}
export const deleteItems = (id)=> dispatch => {
    axios.delete(`/api/items/${id}`).then(res => 
        dispatch({
            type:DELETE_ITEMS,
            payload: id
        })
        )
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
