import { createContext, useState } from "react";
import { isAuth } from "../utlis/helper";
// import { isAuth } from "../utlis/helper";

export const AllContext = createContext();

const ContextData = ({ children }) => {
    const [user, setUser] = useState(isAuth());
    const [userDetails, setUserDetails] = useState(isAuth());
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [redirectPath, setRedirectPath] = useState(null);


    const contextInfo = {
        user,
        setUser,
        userDetails,
        setUserDetails,
        loading,
        setLoading,
        authError,
        setAuthError,
        redirectPath,
        setRedirectPath,
    };

    return (
        <div>
            <AllContext.Provider value={contextInfo}>
                {children}
            </AllContext.Provider>
        </div>
    );
};

export default ContextData;
