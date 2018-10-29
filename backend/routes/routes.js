const DoctorsController = require('../controllers/doctorsController');

module.exports = (app) => {

    app.post('/api/doctor', DoctorsController.create);
};