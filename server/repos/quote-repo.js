import db from '../config/mongo';

export function get() {
  const collection = db().collection('quotes');
  return collection.findOne()
    .then((res) => {
      return res;
    });
}
