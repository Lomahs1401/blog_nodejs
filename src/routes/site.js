import express from 'express';
import SiteController from '../app/controllers/SiteController.js';

const siteRouter = express.Router();
siteRouter.use('/search', SiteController.search);
siteRouter.use('/', SiteController.index);

export default siteRouter;
