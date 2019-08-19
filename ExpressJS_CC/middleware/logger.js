const moment = require('moment'); // deals with dates

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}  Date: ${moment().format()}`);
    next();
};

module.exports = logger;