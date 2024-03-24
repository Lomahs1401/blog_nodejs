import CourseModel from "../../model/Course.js";
import mongoose from "../../utils/mongoose.js";

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([CourseModel.find({}), CourseModel.countDocumentsWithDeleted({ deleted: true })])
        .then(([courses, deletedCount]) => {
            res.render('me/storedCourses', {
                deletedCount,
                courses: mongoose.mutipleMongooseToObject(courses)
            })
        })
        .catch(next)
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        CourseModel.findWithDeleted({ deleted: true })
            .then(courses => res.render('me/trashCourses', {
                courses: mongoose.mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

export default new MeController();
