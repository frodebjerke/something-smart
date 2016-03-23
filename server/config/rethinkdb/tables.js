const r = require('./connection');

const tables = {
  quotes: 'quotes'
}

export default tables;

export function* ensureTables(r) {
    return yield Object.keys(tables).map(function* (tableName) {
        try {
            yield r.tableCreate(tableName);
        } catch (error) {
            if (error.name !== 'ReqlOpFailedError') {
                throw new Error(error);
            }
        }
    });
}
