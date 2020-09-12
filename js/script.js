/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// Create empty quotes array
let quotes = [];

// Add at least 5 objects to the quotes array.
// Each object must have at least two properties: quote & source.

quotes = [
  {
    quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
    source: "Kobe Bryant"
  },
  {
    quote: "The worst part about prison was the dementors.",
    source: "Michael 'Prison Mike' Scott"
  },
  {
    quote: "Thanks guys,you got a lof of... a lot of... well, whatever it is, you got a lof of it.",
    source: "Michael Jordan",
    citation: "SpaceJam"
  },
  {
    quote: "You don't know the power of the Dark side. ",
    source: "Darth Vader",
  },
  {
    quote: "Madness, as you know, is a lot like gravity, all it takes is a little push.",
    source: "Joker",
    year: 2008
  }
];

/***
 * `getRandomQuote` function
 * function used to get a random number from length of 'quotes' array,
 * create and return variable used to return random object from array. 
***/
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomObject = quotes[randomNumber];
  return randomObject;
}





/***
 * `printQuote` function
 * create variable to return getRandomQuote function.
 * create a variable named html to add <p> tags.
 * create conditional statements to verify properties on the quotes and add them to the html variable. 
***/
function printQuote(){
  let random = getRandomQuote();
  let html = `<p class="quote"> ${random.quote} </p>`;
    html += `<p class="source"> ${random.source}`;
    if(random.citation){
      html += `<span class="citation"> ${random.citation}</span>`;
    } else if (random.year){
      html += `<span class="year"> ${random.year.toString()}</span>`;
    }
  html += `</p>`;
  return document.getElementById('load-quote').innerHTML = html;
};






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);