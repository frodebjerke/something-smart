import { Router } from 'express';
import co from 'co';
import { get as getRandomQuote } from '../repos/quote-repo';

export default function Views() {
    const router = Router();

    router.get('*', (req, res, next) => {
      getRandomQuote()
      .then((quote) => {
        res.render('index', { quote });
      })
      .catch((err) => {
        res.render('error', { err })
      })
    });

    return router;
}
