/**
 * Helper function for response
 */

import express = require('express');

export type CallBackFunction = (err, data) => void

export function responseJsonHandler(err, data, res: express.Response) { 
    (err) ? 
        res.json({ data: null, err}) : 
        res.json({ data, 'err': null});
}