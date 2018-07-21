const nodemailer=require('nodemailer');

user='ali.5991.jalali@gmail.com';
pass='************';



const transporter=nodemailer.createTransport({

    service:'gmail',
    secure:false,
    port:587,
    auth:{

        user,
        pass
    },
    tls:{

        rejectUnauthorized:false
    }

})

module.exports=transporter;




