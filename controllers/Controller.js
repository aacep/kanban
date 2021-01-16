const { Activity } = require('../models')

class Controller{

    static home(req,res){
        Activity.findAll()
            .then(data => {
                //res.send(data)
                res.render('home', {data})
            })
            .catch(err => {
                res.send('err')
            })
    }

    static addForm(req,res){
        res.render('addForm')
    }

    static addPost(req,res){
        const newActivity = {
            "todo" : req.body.fname,
            "due_to" : req.body.ldate,
            "todo_status" : true,
            "doing" : req.body.fname,
            "doing_status" : false,
            "done" : req.body.fname
        }
        Activity.create(newActivity)
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send('err')
            })
    }

    static editForm(req,res){
        Activity.findByPk(+req.params.id)
            .then(data => {
                res.render('editForm', {data})
            })
            .catch(err => {
                res.send('err')
            })
    }

    static editPost(req,res){
        const editActivity = {
            "todo" : req.body.fname,
            "due_to" : req.body.ldate,
            "doing" : req.body.fname,
            "done" : req.body.fname
        }
        Activity.update(editActivity, {
            where : {
                id : +req.params.id
            }
        })
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send('err')
            })
    }

    static delete(req,res){
        Activity.destroy({
            where : {
                id : +req.params.id
            }
        })
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send('err')
            })
    }

    static doing(req,res){
        Activity.update({"todo_status" : false, "doing_status" : true }, {
            where : {
                id : +req.params.id
            }
        })
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send('err')
            })
    }

    static done(req,res){
        Activity.update({"doing_status" : false }, {
            where : {
                id : +req.params.id
            }
        })
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.send('err')
            })
    }

}

module.exports = Controller