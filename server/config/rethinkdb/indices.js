const r = require('./connection');
const tables = require('./tables');

export default function* () {
    return yield [
    ];
}

function* ensureIndex(table, column) {
    try {
        yield r.table(table).indexCreate(column)
    } catch (error) {
        if (error.name !== 'ReqlRuntimeError') {
            throw new Error(error);
        }
    }
}
