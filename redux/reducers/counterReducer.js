import {DECREMENT_COUNTER, INCREMENT_COUNTER,CHANGE_NAME,TEST} from '../actions/counterActions';

const counterReducer = (state = {value: 0,name:'Talha',data:null}, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        case CHANGE_NAME:
            if(state.name === 'talha'){
                return {...state, name: 'shabu'};
            }else{
                return {...state, name: 'talha'};
            }

        case TEST:
            
            return {...state, data: action.payload};
        
        default:
            return {...state};
    }
};

export default counterReducer;