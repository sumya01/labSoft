    const Doctor = require('../models/doctors');

    module.exports = {
        
        create(req,res,next){
            console.log("req.body", req);
            const doctorProps = req.body;
            Doctor.create(doctorProps)
                .then(doctor => res.send(doctor))
                .catch(next);
        },

    };
    