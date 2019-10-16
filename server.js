const io = require('socket.io')();
const pg = require('pg');
const conString = "postgres://postgres:Jjrhmjbb97$$@milesaheadmusicdb.ctcjl8pyfn9w.us-east-2.rds.amazonaws.com:5432/postgres";

var dbclient = new pg.Client(conString);
dbclient.connect();

io.on('connection', client => {
    phone = '8888888888';
    console.log('Server connection successful: ' + client.id);
    dbclient.query(`SELECT firstname, lastname FROM contact_forms WHERE phone = '${phone}';`, (err, results) => {
        if (err){
            throw err;
        }
        else {
            console.log(results.rows[0].firstname + ' ' + results.rows[0].lastname);
        }
    });
});

io.listen(3333);