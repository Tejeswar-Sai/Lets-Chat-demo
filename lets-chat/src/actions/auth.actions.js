import { auth,firestore } from '../index';
import { authConstant } from './constants';
import { doc, getDoc } from 'firebase/compat/firestore'


export const signup = (user) => {
    return async (dispatch) => {
        dispatch({ type : `${authConstant.USER_LOGIN}_REQUEST`});
        auth.fetchSignInMethodsForEmail(user.email)
        .then((fetchData) => {
            if(fetchData.length===0)
            {
                auth.createUserWithEmailAndPassword(user.email, user.password)
                .then((data) => {
                    const loggedInUser = { 
                        firstName : user.firstname,
                        lastName : user.lastname,
                        email : user.email,
                        uid : data.user.uid,
                        createdTime : new Date() }
                    firestore.collection('users').add(loggedInUser)
                    alert("Registration Successfull...!")
                    .then(() => {
                        dispatch({
                            type : `${authConstant.USER_LOGIN}_SUCCESS`,
                            payload :  { user : JSON.stringify(loggedInUser) }
                        })
                        
                    })
                        
                })
                .catch(error => {
                    console.log(error);
                    dispatch({ type : `${authConstant.USER_LOGIN}_FAILURE` })
                })
            }
            else
                alert("User already exists");
            }
        )
        .catch((error) => {
            console.log(error);
        });
    }
        
}

export const signin = (user) => {
    return async (dispatch) => {
        dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST` });
        auth.signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            console.log(data);
            const fb = firestore.collection('users').

            
              //localStorage.setItem('user', JSON.stringify(loggedInUser));

                dispatch({
                    type: `${authConstant.USER_LOGIN}_SUCCESS`,
                    payload: { user: "dbdata" }
            });
    })
        .catch(error => {
            console.log(error);
        })
    }
}