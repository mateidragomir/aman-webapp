import { AppContext } from "./AppContext";

import { useCombindState } from "../hooks";
import { authActions as auth } from "../actions";
import { orderActions as order } from "../actions";

import { defaultUser, userInit } from "./user";

const CombindAppContextProvider = ({children}) => {
    const [user, setUser] = useCombindState(defaultUser, userInit);
    
    const login = (parms, callback) => {
		setUser({isLoading: true});
        const bundledCallback = (req) => {
            callback(req);
            let newUser;
            if (req.wasSuccessful) {
                newUser = {
                    role: 'USER',
                    username: parms.username,
                    isLoading: false,
                    data: req.data,
                }
            }
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
        }
        auth.login(parms, bundledCallback);
    }

    const logout = (parms, callback) => {
		setUser({isLoading: true});
        const bundledCallback = (req) => {
            callback(req);
            let newUser;
            if (req.wasSuccessful) {
                newUser = {
                    role: 'ANONYMOUS',
                    isLoading: false,
                    data: {},
                };
            }
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
        }
        auth.logout(parms, bundledCallback);
    }

    const addOrUpdateLine = (parms, callback) => {
        const bundledCallback = (req) => {
            callback(req);
            
        }
        order.addOrUpdateLine(parms, bundledCallback);
    }

    const itemCodeCheck = (parms, callback) => {
        const bundledCallback = (req) => {
            callback(req);
            
        }
        order.itemCodeCheck(parms, bundledCallback);
    }
    
    const actions = {
        login,
        logout,
        addOrUpdateLine,
        itemCodeCheck,
    }
    
    return (
        <AppContext.Actions.Provider value={actions}>
            <AppContext.User.Provider value={user}>
                {children}
            </AppContext.User.Provider>
        </AppContext.Actions.Provider>
    );
}

export { CombindAppContextProvider };