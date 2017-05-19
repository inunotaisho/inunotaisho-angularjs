let User = require('../../models').User;

module.exports = (req,res, next) => {
    res.locals.isAuthenticated = () => {
        return !!req.user;
    };
    if(req.session.user_id) {
        User.findbyId(req.session.user_id)
            .then((user) => {
                req.user = user;
                res.locals.user = user;
                next();
            })
    } else {
        next();
    }
};