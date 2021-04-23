const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('newquote');
const loader= document.getElementById('loader');


let apiQuotes= [];

function loading(){
    loader.hidden = false;
    quoteContainer.hidden= true;

}

function complete(){

    quoteContainer.hidden = false;
    loader.hidden = true;
}
function newQuote() {
    loading();
const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

if(!quote.author){

authorText.textContent='Unknown';
}
else{
authorText.textContent= quote.author;
}
quoteText.textContent=quote.text;

//check the length to detemine size

if(quote.text.length>50){
    quoteText.classList.add('long-quote');

}else{
    quoteText.classList.remove('long-quote');
}

//set quote,hide loader
    quoteText.textContent=quote.text;
    complete();
}



//get quotes from API
async function getQuotes(){
    loading();
const apiUrl = 'https://type.fit/api/quotes';
try{
    const response= await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
   


}catch(error){



//catch error Here
     }   
    
}

//Tweet a quote
function tweetQuote() {
  
    document.cookie = 'cookie2=value2; SameSite=None; Secure';

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

    
    
}

    //onload
    getQuotes();
   