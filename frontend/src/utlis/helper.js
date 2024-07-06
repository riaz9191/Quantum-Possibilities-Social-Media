import cookie from "js-cookie";

// set in cookie
export const setCookie = (key, value) => {
    if (window !== "undefined") {
        cookie.set(key, value, {
            expires: 1,
        });
    }
};
// remove from cookie
export const removeCookie = (key) => {
    if (window !== "undefined") {
        cookie.remove(key, {
            expires: 1,
        });
    }
};
// get from cookie such as stored tokeen
// will be useful when we need to make request to server with token??
export const getCookie = (key) => {
    if (window !== "undefined") {
        return cookie.get(key);
    }
};
// set in localstorage
export const setLocalStorage = (key, value) => {
    if (window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    }
};
// set in localstorage
export const getLocalStorage = (key) => {
    // console.log("key", key);
    if (window !== "undefined") {
        return JSON.parse(localStorage.getItem(key));
    }
};
// remove from localstorage
export const removeLocalStorage = (key) => {
    if (window !== "undefined") {
        localStorage.removeItem(key);
    }
};
// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    // console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE", response);
    setCookie("token", response.token);
    setLocalStorage("user", response);
    // setLocalStorage("userRole", response.role);
    // setLocalStorage("user", response.id);
    next();
};
// access user info from localstorage rr
export const isAuth = () => {
    if (window !== "undefined") {
        if (getCookie("token")) {
            const cookieChecked = getCookie("token");
            if (cookieChecked && cookieChecked != "undefined") {
                if (
                    localStorage.getItem("email") &&
                    localStorage.getItem("email") != "undefined"
                ) {
                    return JSON.parse(localStorage.getItem("email"));
                }
            }
        }
    }
    return false;
};

export const signout = (next) => {
    removeCookie("token");
    removeLocalStorage("email");
    next();
};

export const updateUser = (response, next) => {
    if (typeof window !== "undefined") {
        let auth = JSON.parse(localStorage.getItem("email"));

        auth = { ...auth, name: response.data.name };

        localStorage.setItem("email", JSON.stringify(auth));
        isAuth()
    }
    next();
}; 