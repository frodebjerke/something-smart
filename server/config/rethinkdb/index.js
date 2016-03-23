import r, { setupDb } from './connection';
import indices from './indices';
import tables, { ensureTables} from './tables';

export default r;
export { indices, tables, setupDb, ensureTables };
