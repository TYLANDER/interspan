import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

export default class UserModel {

   static signUp(user, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO user SET ?`, user, cb);
    }

    static login(user, cb: CallBackFunction) {
        console.log(user)
        connection
            .query(`SELECT id,first_name,last_name,email,social_security FROM user WHERE email=? AND password=?`,[user.email,user.password], cb)
    }
}