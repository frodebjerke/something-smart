import rethinkdbdash from 'rethinkdbdash';

const host = 'localhost' || process.env.SS_RDB_HOST;
const dbname = 'somethingsmart' || process.env.SS_RDB_DB;

const r = rethinkdbdash({
    host: host,
    db: dbname
});

export default r;
export function* setupDb() {
    var dbList = yield r.dbList();

    if (dbList.indexOf(dbname) === -1) {
        yield r.dbCreate(dbname);
    }
}
