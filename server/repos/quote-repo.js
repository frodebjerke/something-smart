import r, { tables } from '../config/rethinkdb';

export function* get() {
  return r.table(tables.quotes);
}
