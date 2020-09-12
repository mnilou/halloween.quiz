// ### Instructions

// * Then create code that will ask the user questions, one by one. The user must answer by hitting OK (for true) or Cancel (for false).

// * Check the user's answer against the correct answer, and provide them with an alert telling them if they are right or wrong.

// * **BONUS:** Keep track of the user's score.

// each object in array has a q and a property with strings in the q object
// and a value of "True" or "False" for the correct answer.
var questions = [
  {
    q: "Was the 2012 theme 'House of Horrors', True or False?",
    a: "True",
  },
  {
    q: "Was the 2012 theme 'House of Horrors', True or False?",
    a: "True",
  },
  {
    q: "Lunging Pumpkin Carver first came out in 2015, True or False.",
    a: "False",
  },
  {
    q: "Jumping Spider has come back every year since 2013, True or False.",
    a: "True",
  },
  {
    q: "Was the 2013 theme 'Carnival of Horrors', True or False?",
    a:
      "False, it was the theme in 2010-2011. The theme for 2013 was Spirit Asylum.",
  },
  {
    q: "Spirit Halloween used to have a Zombie Flamingo, True or False.",
    a: "True",
  },
  {
    q: "Cerberus was an animatronic since 2015, True or False.",
    a: "True",
  },
  {
    q: "Was the 2014 theme 'The Attic', True or False?",
    a: "True",
  },
  {
    q:
      "Twitching Banshee is one of mama's favorite animatronics, True or False.",
    a: "False",
  },
  {
    q: "Caspian has a crush on Abandoned Annie, True or False",
    a: "True",
  },
  {
    q: "Zephyr has a crush on the Hauntress, True or False",
    a: "True",
  },
];

var score = 0;

// for each question in the question array
for (var i = 0; i < questions.length; i++) {
  var answer = confirm(questions[i].q);

  // if user answer is correct
  var isCorrect =
    (answer === true && questions[i].a === "True") ||
    (answer === false && questions[i].a === "False");

  if (isCorrect) {
    score = score + 1;
    alert("Correct!👽");
  } else {
    alert("Incorrect! 🤡");
  }

  // alert "You answered 3 out of 5 questions correctly."
}

var resultText =
  "👻You answered " +
  score +
  " out of " +
  questions.length +
  " questions correctly!👻";
  
alert(resultText);
