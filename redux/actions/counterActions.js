//Action Types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const CHANGE_NAME = "CHANGE_NAME";
export const TEST = "TEST";


//Action Creator
export const incrementCounter = () => ({
   type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});

export const changeName = () => ({
    type: CHANGE_NAME
});

export const test = () => async(dispatch, getState) => {

   
    const data = {
        message:'module after dispatch',
        data:[
            {'name':'List One','id':1,'project_id':1},
            {'name':'List Two','id':2,'project_id':1},
            {'name':'List Three','id':3,'project_id':1},
            {'name':'List Four','id':4,'project_id':1},
            {'name':'List Five','id':5,'project_id':1},
            {'name':'List Six','id':6,'project_id':1},
          ]
    };
    dispatch({
    
      type: TEST,
      payload: data,
      
    })
  
 
}