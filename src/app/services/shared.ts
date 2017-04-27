export const GlobalReadOnly = Object.freeze({
    BASE_API_URL: 'http://shop2020.in:8080/profitmandi-web/',
    /*BASE_API_URL: 'http://shop2020.in:8080/profitmandi-web/',*/
    //... more of your variables
});

export const GlobalVariable = {
    getAuthToken: () => localStorage.getItem('auth'),
    setAuthToken: (auth) => localStorage.setItem('auth', auth),
    getEmail: () => localStorage.getItem('email'),
    setEmail: (email) => localStorage.setItem('email', email),
    getMobile: () => localStorage.getItem('mobile'),
    setMobile: (mobile) => localStorage.setItem('mobile', mobile),
};

export const GlobalFunctions = Object.freeze({
    serialize: function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    },
});