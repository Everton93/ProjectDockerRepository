import productsRouter from '@modules/products/infrastructure/http/routes/products.routes';
import suplierRouter from '@modules/suplier/infrastructure/http/routes/suplier.routes';
import usersRouter from '@modules/users/infrastructure/http/routes/users.routes';
import sessionRouter from '@modules/users/infrastructure/http/routes/session.routes';
import passwordRouter from '@modules/users/infrastructure/http/routes/password.routes';
import profileRouter from '@modules/users/infrastructure/http/routes/profile.routes';
import roomsRouter from '@modules/room/infrastructure/http/Routes/Rooms.routes';
import reserveRouter from '@modules/room/infrastructure/http/Routes/Reserve.routes';
import serviceRoomRouter from '@modules/room/infrastructure/http/Routes/ServiceRoom.routes';
import checkOutRouter from '@modules/room/infrastructure/http/Routes/CheckOut.routes';

import Router from 'express';

const routes = Router();

routes.use('/users',usersRouter);
routes.use('/products',productsRouter);
routes.use('/suplier',suplierRouter);
routes.use('/session',sessionRouter);
routes.use('/password',passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/rooms',roomsRouter);
routes.use('/reserve',reserveRouter);
routes.use('/services',serviceRoomRouter);
routes.use('/check',checkOutRouter);


export default routes;

