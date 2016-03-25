import winston from 'winston';
import App from './app';
import co from 'co';
import { migrations } from './config/rethinkdb';

migrations();

const app = App();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    winston.info(`Application running on port ${port}`);
});
