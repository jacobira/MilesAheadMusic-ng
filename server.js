var app = require('https').createServer(handler);

const fs = require('fs');  

function handler(req, res) {
    res.writeHead(200);
    res.end("welcome sir!");
};   

const io = require('socket.io').listen(app);  
const nodemailer = require('nodemailer');
const {Client} = require('pg');
// const conString = "postgres://postgres:Jjrhmjbb97$$@milesaheadmusicdb.ctcjl8pyfn9w.us-east-2.rds.amazonaws.com:5432/postgres";

var dbclient = new Client({
    user: 'postgres',
    host: 'milesaheadmusicdb.ctcjl8pyfn9w.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: 'Jjrhmjbb97$$',
    port: 5432
});
dbclient.connect();

var transporter = nodemailer.createTransport({
    service: 'yahoo',
    host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true,
    auth: {
        user: 'butler.milesaheadmusic@yahoo.com',
        pass: 'xnjmdlifyevlxfor'
    },
    debug: false,
    logger: true
});

io.on('connection', client => {
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
        console.log('new form submit request received');
        var currentdate = new Date().toLocaleString('en-US', {timeZone: 'America/Denver'});
        // var dateTime = "" + (currentdate.getMonth()+1) + "/" + currentdate.getDate() + "/" +
        // currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + 
        // ":" + currentdate.getSeconds() + "";

        sendEmail(currentdate, formData);
        hubSpotSubmit(formData);

// **Old code for database submission of email data:

        // let cleanData = JSON.parse(formData);
        // dbclient.query(`INSERT INTO contact_forms (timestamp,firstname,lastname,phone,email,studentfirst,studentlast,instrument) 
        // VALUES ((SELECT NOW()), '${cleanData.firstname}', '${cleanData.lastname}', '${cleanData.phone}', 
        // '${cleanData.email}', '${cleanData.studentfirst}', '${cleanData.studentlast}', '${cleanData.instrument}');`, (err, results) => {
        //     if (err) {
        //         console.log("Could not connect to the database");
        //         throw err;
                
        //     } else {
        //         console.log('Database submission successful');
        //         // client.emit('formConfirm');
        //     }
        // });
    });

    function sendEmail(time, data) {
        var form = JSON.parse(data);
        var mailOptions = {
        from: 'butler.milesaheadmusic@yahoo.com',
        to: 'milesaheadmusicutah@gmail.com',
        subject: 'New Contact Form Received!',
        html: 
            `<div>
                Delivery from the Miles Ahead Music Butler System<br><br>
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
                client.emit('emailError');
            } else {
                console.log('Email sent: ' + info.response);
                client.emit('formConfirm');
            }
        });
    }

    function hubSpotSubmit(data){
        var info = JSON.parse(data);

        var request = require("request");

        var options = {method: 'POST',
            url: 'https://api.hubapi.com/contacts/v1/contact/',
            qs: {hapikey: '16bcedb2-4193-44f6-bf52-55f9c5a0202f'},
            headers:
                {'Content-Type': 'application/json'},
                body: 
                { properties: 
                   [ { property: 'email', value: `${info.email}` },
                     { property: 'firstname', value: `${info.firstname}` },
                     { property: 'lastname', value: `${info.lastname}` },
                     { property: 'website', value: '' },
                     { property: 'company', value: '' },
                     { property: 'phone', value: `${info.phone}` },
                     { property: 'address', value: '' },
                     { property: 'city', value: '' },
                     { property: 'state', value: '' },
                     { property: 'zip', value: '' } ] },
               json: true };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
        });

    }

// Old code for query of teachers list from database. Determined it was much easier
// to just edit teachers directly in site code than through database at this time.

    // client.on('getTeachers', () => {
    //     console.log("query to get teachers list started");
    //     dbclient.query('SELECT * FROM teachers', (err, results) => {
    //         if (err){
    //             console.log("Could not connect to database");
    //             throw err;
                
    //         } else {
    //             console.log('Teacher list retrieved');
    //             client.emit('teacherListSend', JSON.stringify(results));
    //         }
    //     });
    // });
});

io.listen(3333);
console.log("started server");