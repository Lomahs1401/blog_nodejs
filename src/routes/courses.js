import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const courseRouter = express.Router();
courseRouter.get('/create', CourseController.create);
courseRouter.post('/store', CourseController.store)
courseRouter.post('/handle-form-action', CourseController.handleFormAction)
courseRouter.get('/:id/edit', CourseController.edit);
courseRouter.put('/:id', CourseController.update);
courseRouter.patch('/:id/restore', CourseController.restore);
courseRouter.delete('/:id', CourseController.delete);
courseRouter.delete('/:id/force', CourseController.forceDelete);
courseRouter.get('/:slug', CourseController.show);

export default courseRouter;
