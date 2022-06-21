import { createContext, Dispatch, useEffect, useReducer } from 'react';
import { Action, AppState, authReducer, initialState } from './authReducer';

interface AuthProviderProps {
    children?: React.ReactNode;
}

const AuthContext =  createContext<{
    state: AppState;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => {}
})


function AuthProvider({ children }: AuthProviderProps) {

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    }, [state.currentUser])

    return (
      <AuthContext.Provider value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};