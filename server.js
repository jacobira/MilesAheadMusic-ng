const io = require('socket.io')();
const nodemailer = require('nodemailer');
const pg = require('pg');
const conString = "postgres://postgres:Jjrhmjbb97$$@milesaheadmusicdb.ctcjl8pyfn9w.us-east-2.rds.amazonaws.com:5432/postgres";

var dbclient = new pg.Client(conString);
dbclient.connect();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'butler.milesaheadmusicutah@gmail.com',
        pass: 'Jjrhmjbb97$$'
    }
});

function sendEmail(time, data) {
    var form = JSON.parse(data);
    var mailOptions = {
    from: 'butler.milesaheadmusicutah@gmail.com',
    to: 'jazzyjacobbaldwin@gmail.com',
    subject: '(TEST) New Contact Form Received!',
    html: 
        `<div>
            THIS IS A TEST OF THE MILES AHEAD MUSIC BUTLER SYSTEM<br><br>
            CONTACT FORM:<br>
            Submitted at: ${time}<br><br>

            Name: ${form.firstname + ' ' + form.lastname}<br>
            Phone Number: ${form.phone}<br>
            Email: ${form.email}<br>
            Student: ${form.studentfirst + ' ' + form.studentlast}<br>
            Instrument: ${form.instrument}
        </div>`
    };
    transporter.sendMail(mailOptions, function(err, info){
        if (err){
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}




io.on('connection', client => {
    phone = '8888888888';
    console.log('Server connection successful: ' + client.id);
    // dbclient.query(`SELECT firstname, lastname FROM contact_forms WHERE phone = '${phone}';`, (err, results) => {
    //     if (err){
    //         throw err;
    //     }
    //     else {
    //         console.log(results.rows[0].firstname + ' ' + results.rows[0].lastname);
    //     }
    // });

    client.on('newFormSubmit', (formData) => {
        var currentdate = new Date();
        var dateTime = "" + (currentdate.getMonth()+1) + "/" + currentdate.getDate() + "/" +
        currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + 
        ":" + currentdate.getSeconds() + "";

        sendEmail(dateTime, formData);

        let cleanData = JSON.parse(formData);
        dbclient.query(`INSERT INTO contact_forms (timestamp,firstname,lastname,phone,email,studentfirst,studentlast,instrument) 
        VALUES ((SELECT NOW()), '${cleanData.firstname}', '${cleanData.lastname}', '${cleanData.phone}', 
        '${cleanData.email}', '${cleanData.studentfirst}', '${cleanData.studentlast}', '${cleanData.instrument}');`, (err, results) => {
            if (err) {
                throw err;
            } else {
                console.log('Database submission successful');
                client.emit('formConfirm');
            }
        });
    });
});

io.listen(3333);