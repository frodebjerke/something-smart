import r, { setupDb } from './connection';
import indices from './indices';
import tables, { ensureTables} from './tables';
import co from 'co';
import winston from 'winston';

function migrations() {
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
}

export default r;
export { indices, tables, setupDb, ensureTables, migrations };
