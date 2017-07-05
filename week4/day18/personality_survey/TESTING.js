

const PersonalityLookUp = {
  survey_info.q1: {
    survey_info.q2: {
      survey_info.q3: {
        'Result': 'Rational',
        'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKAYccsLENnqN-h91APAtYb1CkP0PRZ1GjeXTaPO-MP_bVr2h'
      },
      survey_info.q3: {
        'Result': 'Gaurdian',
        'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY8AAUfJp2REljUtT93BNDKuT_zjhfvAtZbpV98uYFHYb-Xis'
      }
    },
    survey_info.q2: {
      survey_info.q3: {
        'Result': 'Rational',
        'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKAYccsLENnqN-h91APAtYb1CkP0PRZ1GjeXTaPO-MP_bVr2h'
      },
      survey_info.q3: {
        'Result': 'Artisan',
        'imgSrc': 'http://images.bigcartel.com/product_images/195049966/artisan-helga-isager-birch.jpg?auto=format&fit=max&h=1000&w=1000'
      }
    }
  },
  survey_info.q1: {
    survey_info.q2: {
      survey_info.q3: {
        'Result': 'Idealist',
        'imgSrc': 'https://www.brainyquote.com/photos/h/henryford143357.jpg'
      },
      survey_info.q3: {
        'Result': 'Gaurdian',
        'imgSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY8AAUfJp2REljUtT93BNDKuT_zjhfvAtZbpV98uYFHYb-Xis'
      }
    },
    survey_info.q2: {
      survey_info.q3: {
        'Result': 'Idealist',
        'imgSrc': 'https://www.brainyquote.com/photos/h/henryford143357.jpg'
      },
      survey_info.q3: {
        'Result': 'Artisan',
        'imgSrc': 'http://images.bigcartel.com/product_images/195049966/artisan-helga-isager-birch.jpg?auto=format&fit=max&h=1000&w=1000'
      }
    }
  }
};



function personality(obj) {

  for (let argument of arguments) {
    console.log(argument);
    console.log(argument["With deadline"].Rational.Ideas.Result);
    console.log(argument["With deadline"].Rational.Ideas.imgSrc);
    console.log(argument["With deadline"].Rational.Facts.Result);
    console.log(argument["With deadline"].Rational.Facts.imgSrc);

    console.log(argument["With deadline"].Compassionate.Ideas.Result);
    console.log(argument["With deadline"].Compassionate.Ideas.imgSrc);
    console.log(argument["With deadline"].Compassionate.Facts.Result);
    console.log(argument["With deadline"].Compassionate.Facts.imgSrc);

    console.log(argument["Without deadline"].Rational.Ideas.Result);
    console.log(argument["Without deadline"].Rational.Ideas.imgSrc);
    console.log(argument["Without deadline"].Rational.Facts.Result);
    console.log(argument["Without deadline"].Rational.Facts.imgSrc);

    console.log(argument["Without deadline"].Compassionate.Ideas.Result);
    console.log(argument["Without deadline"].Compassionate.Ideas.imgSrc);
    console.log(argument["Without deadline"].Compassionate.Facts.Result);
    console.log(argument["Without deadline"].Compassionate.Facts.imgSrc);

  }

  return

}
