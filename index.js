const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views','views');
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.get('/', function(request, response){
           
      response.render('home');
      
});


app.post('/process-results', urlEncodedParser, function(request, response) {

      let courses = {
            APT_2060: 'APT 2060: Data Structures',
            APT_2055: 'APT 2055: Hardware and Software',
            APT_3040: 'APT 3040: Object Oriented Programming',
            APT_3065: 'APT 3065: Mid-Term Project',
            APT_4900: 'APT 4900: APT Project',

            IST_4035: 'IST 4035: Advanced Web Design and Applications',
            IST_3015: 'IST 3015: Business Data Analytics',
            IST_4078: 'IST 4078: Innovation and Entrerprenurship',
            IST_1020: 'IST 1020: Introduction to Computers',
            IST_4900: 'IST 4900: IST Project'
      };
      
      response.render('results', courses);
      
}); 


app.listen(port);
console.log(`Node server started on port: ${port}`);