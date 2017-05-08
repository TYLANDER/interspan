import express = require('express');

export type CallBackFunction = (err, data) => void

export function responseJsonHandler(err, data, res: express.Response) {
    (err) ? res.json({ 'data': null, err ,'success':false }) : res.json({ data, 'err': null , 'success':true , 'status': 404 });
}