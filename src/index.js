import express from 'express';
import morgan from 'morgan';
import path from 'path';
import methodOverride from 'method-override';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import route from './routes/index.js';
import db from './config/db/index.js';

// Connect to db
db.connect()

const app = express();
const port = 3000;

// Lấy đường dẫn của module hiện tại
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
); // Xu ly cho html form
app.use(express.json()); // xu ly cho ma js gui tu client len (gui len server bang cac thu vien nhu axios, XMLHttpRequest..)
app.use(methodOverride('_method'))

//Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(morgan("combined"));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
