// const requestIp = require('request-ip');

// const ipMiddleware = function(req, res, next) {
//     return requestIp.getClientIp(req); 
// };

// console.log(ipMiddleware());

// // Import iplocation object that will allow us to get user's address based on their IP address
// const iplocation = require('iplocation').default;

// iplocation(ipMiddleware(), [], (error, res) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(res);
//     }
// });
const express = require('express');
const app = express();

