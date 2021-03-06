export default class path {

    // static environment = "dev";
    static environment = "prod";
    static baseUrl = path.environment == "dev" ? "" : "https://interspanresources-164914.appspot.com/";
    //authentication URL
    static SIGNUP = path.baseUrl + "api/user/signup";
    static LOGIN = path.baseUrl + "api/user/login";
    //JOB URL
    static GET_JOB = path.baseUrl + "api/jobs/jobs";
    static POST_JOB = path.baseUrl + "api/jobs/jobs";
    static APPLY_JOB = path.baseUrl + "api/apply";
}