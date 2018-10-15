let express = require('express');
let registration = require('../registration');

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const flash = require('express-flash');

let useSSL = false;

let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/registration';

const pool = new Pool({
    connectionString,
  });

//handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'));


const PORT = process.env.PORT || 3020;

app.listen(PORT, function() {
  console.log("app started at port:", PORT)
});
