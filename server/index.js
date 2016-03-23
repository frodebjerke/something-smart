import winston from 'winston';
import App from './app';
import co from 'co';
import r, {
  setupDb,
  ensureTables,
  indices
} from './config/rethinkdb';

co(setupDb())
.then(() => {
  winston.info("db setup done")
  return co(ensureTables(r))
    .catch((err) => {
      winston.error('Failed to run database setup', err);
      throw new Error('Could not start server');
    })
})
.then(() => {
  return co(indices())
    .catch((err) => {
      winston.error('Failed to ensure indices');
      throw new Error('Could not start server', err);
    })
}).catch((err) => { console.log(err)})

const app = App();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    winston.info(`Application running on port ${port}`);
});
