const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const mailerRoute = require('./mail/nodemailer.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/mail', mailerRoute);

module.exports = router;
