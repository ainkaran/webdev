// Assignment: [Lab] Personality Survey
/*
Implement this three questions survey here: https://www.blogthings.com/threequestionpersonalitytest/
Here are all possible results:

With deadline | Rational | Ideas > Rational
With deadline | Rational | Facts > Guardian
Without deadline | Rational | Ideas > Rational
Without deadline | Rational | Facts > Artisan
With deadline | Compassionate | Ideas > Idealist
With deadline | Compassionate | Facts > Guardian
Without deadline | Compassionate | Ideas > Idealist
Without deadline | Compassionate | Facts > Artisan

Stretches:
1. Make a nice results page with a photo similar to what they have
2. Improve the solution by storing all possible results in a js Object and fetching the results
   from that hash (no if / else statements).
3. SUPER STRETCH: Add a name and email field to it and make it email you when someone takes the survey.
*/

/*
GitHub commit comment:
Add install yarn, .gitignore, create project: yarn init, add packages, create app.js,
install nodemon & add start script, partials header & footer, install bodyParser,
create Personality Survey form and functionalities
*/


// Step 1: Create project with `yarn init`
// Step 2: Add Express package with `yarn add express body-parser ejs faker morgan`
// yarn add express body-parser ejs faker morgan
// yarn add -D nodemon
// Stem 3: config .gitignore with node_modules and .DS_Store
// Step 3: Create `app.js` file
// Step 4: Require Express in `app.js`
// Step 5: Create a route to serve `/hello/:name`
// Step 6: Have server, app, listen on PORT
// Step 7: Install nodemon & add start script

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (request, response) {
  response.render('index');
});

app.get('/survey', function (request, response) {
  response.render('personality-survey', {vPersonalitySurvey: undefined, vimgSrc: undefined, vContact: {}});
  // { q1: 'With deadline', q2: 'Compassionate', q3: 'Ideas' }
  // console.log(response.body);
});

/*

function personality(obj) {
  let imgSrc = '';

  let str = obj.q1 + ' | ' + obj.q2 + ' | ' + obj.q3;

  if(str === 'With deadline | Rational | Ideas') {
    result = 'Rational';
    imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKAYccsLENnqN-h91APAtYb1CkP0PRZ1GjeXTaPO-MP_bVr2h';
  }
  else if(str === 'With deadline | Rational | Facts') {
    result = 'Guardian';
    imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY8AAUfJp2REljUtT93BNDKuT_zjhfvAtZbpV98uYFHYb-Xis';
  }
  else if(str === 'Without deadline | Rational | Ideas') {
    result = 'Rational';
    imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKAYccsLENnqN-h91APAtYb1CkP0PRZ1GjeXTaPO-MP_bVr2h';
  }
  else if(str === 'Without deadline | Rational | Facts') {
    result = 'Artisan';
    imgSrc = 'http://images.bigcartel.com/product_images/195049966/artisan-helga-isager-birch.jpg?auto=format&fit=max&h=1000&w=1000';
  }
  else if(str === 'With deadline | Compassionate | Ideas') {
    result = 'Idealist';
    imgSrc = 'https://www.brainyquote.com/photos/h/henryford143357.jpg';
  }
  else if(str === 'With deadline | Compassionate | Facts') {
    result = 'Guardian';
    imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY8AAUfJp2REljUtT93BNDKuT_zjhfvAtZbpV98uYFHYb-Xis';
  }
  else if(str === 'Without deadline | Compassionate | Ideas') {
    result = 'Idealist';
    imgSrc = 'https://www.brainyquote.com/photos/h/henryford143357.jpg';
  }
  else if(str === 'Without deadline | Compassionate | Facts') {
    result = 'Artisan';
    imgSrc = 'http://images.bigcartel.com/product_images/195049966/artisan-helga-isager-birch.jpg?auto=format&fit=max&h=1000&w=1000';
  }
  else {
    result = '';
    imgSrc = '';
  }
  return [result, imgSrc];
}

*/

const PersonalityLookUp = {
  'With deadline': {
    'Rational': {
      'Ideas': {
        'Result': 'Rational',
        'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKAYccsLENnqN-h91APAtYb1CkP0PRZ1GjeXTaPO-MP_bVr2h'
      },
      'Facts': {
        'Result': 'Gaurdian',
        'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY8AAUfJp2REljUtT93BNDKuT_zjhfvAtZbpV98uYFHYb-Xis'
      }
    },
    'Compassionate': {
      'Ideas': {
        'Result': 'Idealist',
        'imgSrc': 'https://www.brainyquote.com/photos/h/henryford143357.jpg'
      },
      'Facts': {
        'Result': 'Gaurdian',
        'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY8AAUfJp2REljUtT93BNDKuT_zjhfvAtZbpV98uYFHYb-Xis'
      }
    }
  },
  'Without deadline': {
    'Rational': {
      'Ideas': {
        'Result': 'Rational',
        'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKAYccsLENnqN-h91APAtYb1CkP0PRZ1GjeXTaPO-MP_bVr2h'
      },
      'Facts': {
        'Result': 'Artisan',
        'imgSrc': 'http://images.bigcartel.com/product_images/195049966/artisan-helga-isager-birch.jpg?auto=format&fit=max&h=1000&w=1000'
      }
    },
    'Compassionate': {
      'Ideas': {
        'Result': 'Idealist',
        'imgSrc': 'https://www.brainyquote.com/photos/h/henryford143357.jpg'
      },
      'Facts': {
        'Result': 'Artisan',
        'imgSrc': 'http://images.bigcartel.com/product_images/195049966/artisan-helga-isager-birch.jpg?auto=format&fit=max&h=1000&w=1000'
      }
    }
  }
};


app.post('/survey', function (request, response) {

  // { q1: 'With deadline', q2: 'Compassionate', q3: 'Ideas' }
  const survey_info = request.body;
  console.log(survey_info);
  // survey_info = { q1: 'With deadline', q2: 'Compassionate', q3: 'Ideas' }

  const Personality = PersonalityLookUp[survey_info.q1][survey_info.q2][survey_info.q3].Result;
  const Image = PersonalityLookUp[survey_info.q1][survey_info.q2][survey_info.q3].imgSrc;

  response.render('personality-survey', {vPersonalitySurvey: Personality, vimgSrc: Image, vContact: survey_info});

});

/*
app.post('/survey', function (request, response) {

  // { q1: 'With deadline', q2: 'Compassionate', q3: 'Ideas' }
  const survey_info = request.body
  console.log(survey_info)

  // survey_info = { q1: 'With deadline', q2: 'Compassionate', q3: 'Ideas' }

  let pTypeArray = personality(survey_info);
  let pType = pTypeArray[0];
  let imgSrc = pTypeArray[1];
  response.render('personality-survey', {vPersonalitySurvey: pType, vimgSrc: imgSrc});

});
*/

const PORT = 4545;
app.listen(PORT, () => {
  console.log(`🔥  Server listening on http://localhost:${PORT}`);
});
