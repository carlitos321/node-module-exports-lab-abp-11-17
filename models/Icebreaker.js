'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}

module.exports = Icebreaker;

const Question = require(.models/Question.js);
