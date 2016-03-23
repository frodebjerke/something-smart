import express from 'express';
import morgan from 'morgan';
import pages from './pages';
import exphbs from 'express-handlebars'

export default function App() {
    const app = express();
    app.use(morgan('combined'));
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.use('/assets', express.static('dist'));
    app.use('/', pages())

    return app;
}
