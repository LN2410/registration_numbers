let express = require('express');
let Registration = require('./registration');

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const flash = require('express-flash');

//instance
let registr = registrationF

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

app.get('/', async (req, res) => {
  try {
    res.render('index')
  } catch (err) {
    console.error("Does not open home",err);
  };
});
app.get('/added', async (req,res) => {
  let showReg = await registr.addRegNum();
  try {
    res.render('index', showReg)
  } catch (err) {
    console.log("Does not display reg number", err);
  }
});

const PORT = process.env.PORT || 3020;

app.listen(PORT, function() {
  console.log("app started at port:", PORT)
});
