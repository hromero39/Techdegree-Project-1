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
    quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do. ",
    source: "Kobe Bryant "
  },
  {
    quote: "The worst part about prison was the dementors. ",
    source: "Michael 'Prison Mike' Scott ",
    tags: "Comedy"
  },
  {
    quote: "Thanks guys,you got a lof of... a lot of... well, whatever it is, you got a lof of it. ",
    source: "Michael Jordan ",
    citation: "SpaceJam "
  },
  {
    quote: "You don't know the power of the Dark side. ",
    source: "Darth Vader ",
    tags: "Fiction"
  },
  {
    quote: "Madness, as you know, is a lot like gravity, all it takes is a little push. ",
    source: "Joker ",
    year: 2008
  }
];

/***
 * `getRandomQuote` function
 * function used to get a random number from length of 'quotes' array.
 * create variable that will return random number from length of array.
 * create second variable to access object inside array with random number variable created.
 * return variable with random objects of the array. 
***/
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * (quotes.length + 1) );
  let randomObject = quotes[randomNumber];
  return randomObject;
};

/*** create function to return random background color,
 *  Initial function was taken from w3resource.com
 */

function randomBackgroundColor() {
  let x,y,z;
   x = Math.floor(Math.random() * 256);
   y = Math.floor(Math.random() * 256);
   z = Math.floor(Math.random() * 256);
  let backgroundColor = `rgb( ${x}, ${y}, ${z})`;
  return document.body.style.background = backgroundColor;
};

/***
 * function to set interval timer. 
 * function activate variable that sets an interval for "printquote function" every 5 seconds. 
 */
function IntervalFunction(){
  let myInterval = setInterval(printQuote,5000);
  return myInterval;
};



/***
 * `printQuote` function
 * create variable to return getRandomQuote function.
 * create a variable named html to build a string that will show in HTML document.
 * html string should be included in <p></p> tags.
 * create conditional statements to verify properties(citation,year,tags) on the quotes' object 
 * Add values of properties to the html variable. 
 * Return and insert html variable into 'quote-box' id & call RandomBackgroundColor function. 
***/
function printQuote(){
  let random = getRandomQuote();
  let html = `<p class="quote"> ${random.quote} </p>`;
    html += `<p class="source"> ${random.source}`;
    if(random.citation){
      html += `<span class="citation"> ${random.citation}</span>`;
    } else if (random.year){
      html += `<span class="year"> ${random.year.toString()}</span>`;
    } else if (random.tags){
      html += `<span class="tags"> , #${random.tags}</span>`;
    }
    html += `</p>`;
  randomBackgroundColor();
  IntervalFunction();
  return document.getElementById('quote-box').innerHTML = html;
  
};







/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);