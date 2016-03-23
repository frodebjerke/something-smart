import { Router } from 'express';
import co from 'co';
import { get as getQuotes } from '../repos/quote-repo';

export default function Views() {
    const router = Router();

    router.get('*', (req, res, next) => {
      co(getQuotes())
      .then((quotes) => {
        const quote = quotes[0];
        res.render('index', { quote });
      })
      .catch((err) => {
        res.render('error', { err })
      })
    });

    return router;
}
