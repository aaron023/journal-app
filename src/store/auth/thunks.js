import { loginWithEmailPassword, registerUserWithEmailPasswrord, singInWhitGoogle } from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWhitGoogle();
        
        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const resp = await registerUserWithEmailPasswrord({email, password, displayName});
        const { ok, uid, photoURL, errorMessage } = resp;

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}