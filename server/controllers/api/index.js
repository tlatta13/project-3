const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/income', require('./incomeController'));
apiControllers.use('/expense', require('./expenseController'));
<<<<<<< HEAD

apiControllers.use('/savings', require('./savingsController'));
=======
apiControllers.use('/savings', require('./expenseController'));
>>>>>>> 193aa089056c82cc88cc06fd5bea1f115cf71730
apiControllers.use('/stock', require('./stockController'));
module.exports = apiControllers;
