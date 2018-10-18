let express = require('express');
let registration = require('./registration');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const pg = require("pg");
const Pool = pg.Pool;
const flash = require('express-flash');

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/registration';


let useSSL = false;

let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
const pool = new Pool({
    connectionString,
  });

//handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'));

//routes
app.get('/', async (req, res)=>{
  try{
    res.render('index');
  }catch(err){
      console.error('unable to get home', err);
  }
});

const PORT = process.env.PORT || 3020;

app.listen(PORT, function(){ 
  console.log("the app started at port:", PORT);
});
