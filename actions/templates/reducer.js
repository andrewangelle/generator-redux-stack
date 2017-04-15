import { handleActions } from 'redux-actions';
import { placeholder } from '../actions/<%= name %>';

const initialState = null;

export default handleActions({
  [placeholder]: state => state
}, initialState);
