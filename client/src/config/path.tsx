export default class path {

    // static environment = "dev";
    static environment = "prod";

    static baseUrl = path.environment == "dev" ? "" : "http://interspanresources-164914.appspot.com/";

    static SIGNUP = path.baseUrl+"api/user/signup";
    static LOGIN = path.baseUrl+"api/user/login";
    
}