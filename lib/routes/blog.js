const express = require('express'),
    router = express.Router();
let Blog = require('../../models').Blog,
    User = require('../../models').User;

/* GET blog listing. */
router.get('/blog', (req, res, next) => {
    Blog.findAll({order:[["createdAt", "DESC"]]}).then(post => {

    }).catch(err =>{
        res.send(500, err);
    });
});

/* POST create article. */
router.post('/blog', (req, res, next) => {
    Blog.create(req.body).then(post => {
        res.redirect("/" + post.id)
    }).catch(err => {
        if(err.name === "SequelizeValidationError"){
        } else {
            throw err
        }
    }).catch(err => {
        res.send(500, err);
    });
});

/* Create a new article form. */
router.get('/', (req, res, next) => {

})

/* Edit article form. */
router.get("/:id/edit", (req, res, next) => {
    Blog.findById(req.params.id).then(post => {
        if(post){

        }else{
            res.send(404);
        }
    }).catch(err =>{
        res.send(500, err);
    });
});

/* GET individual article. */
router.get("/:id", (req, res, next)=> {
    Blog.findById(req.params.id).then(post => {
        if(post) {

        } else {
            res.send(404);
        }
    }).catch(err => {
        res.send(500, err);
    });
});

/* PUT update article. */
router.put('/:id', (req, res, next) => {
    Blog.findById(req.params.id).then( post => {
        if(post){
            return Blog.update(req.body);
        } else {
            res.send(404);
        }
    }).then( post => {
        res.redirect("", + post.id);
    }).catch( err => {
        if(err.name === "SequelizeValidationError"){
            let post = Blog.build(req.body);
            post.id = req.params.id;
        } else {
            throw err
        }
    }).catch( err => {
        res.send(500, err);
    });
});

/* DELETE individual article. */
router.delete('/:id', (req, res, next) =>{
    Blog.findById(req.params.id).then(post =>{
        if(post){
            return post.destroy();
        } else {
            res.send(404);
        }
    }).then(() => {
        res.redirect('/');
    }).catch(err => {
        res.send(500, err);
    });
});


module.exports = router;