import productsRouter from '@modules/products/routes/products.routes';
import suplierRouter from '@modules/suplier/routes/suplier.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionRouter from '@modules/users/routes/session.routes';


import Router from 'express';

const routes = Router();

routes.use('/users',usersRouter);
routes.use('/products',productsRouter);
routes.use('/suplier',suplierRouter);
routes.use('/session',sessionRouter);


export default routes;
