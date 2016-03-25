import winston from 'winston';
import App from './app';
import co from 'co';
import { setupDb } from './config/mongo';

setupDb()
  .then(() => {
    const app = App();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        winston.info(`Application running on port ${port}`);
    });
  })
  .catch((err) => {
    winston.error('Could not setup database connection', err);
  });
