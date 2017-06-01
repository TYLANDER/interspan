import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';
let crypto = require('crypto');

export default class UserModel {
    
   static signUp(user, cb: CallBackFunction) {
       user['password'] = crypto.createHash('md5').update(user.password).digest("hex");
        connection
            .query(`INSERT INTO user SET ?`, user, cb);
    }

    static login(user, cb: CallBackFunction) {
        user['password'] = crypto.createHash('md5').update(user.password).digest("hex");
        console.log(user)
        connection
            .query(`SELECT id,first_name,last_name,email,social_security FROM user WHERE email=? AND passwords=?`,[user.email,user.password], cb)
    }
}