import CourseModel from "../../model/Course.js";
import mongoose from "../../utils/mongoose.js";

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        CourseModel.findOne({ slug: req.params.slug })
            .then(course => {
                course = mongoose.mongooseToObject(course)
                res.render('courses/show', { course })
            })
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res) {
        res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res) {
        const formData = req.body;
        const course = new CourseModel(formData)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {
                console.log(error)
            })
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        CourseModel.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongoose.mongooseToObject(course)
            }))
            .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        CourseModel.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    // [DELETE] /courses/:id
    delete(req, res, next) {
        CourseModel.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        CourseModel.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        CourseModel.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [POST] /courses/handle-form-action
    handleFormAction(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                CourseModel.delete({ _id: { $in: req.body.courseIds }})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break
            default:
                res.json({ message: 'Invalid action' })
        }
    }
}

export default new CourseController();
