
function newQuote(){
$(document).ready(function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(randomQuote){
        // document.write(randomQuote.quote)
        let quote = document.getElementById("text")
        let author = document.getElementById("author")
        quote.innerHTML = "&quot;" + (randomQuote.quoteText) + "&quot;"
        author.textContent = (randomQuote.quoteAuthor)

        $('#tweet-quote').attr(
            'href',
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +  
             encodeURIComponent( quote.innerHTML  + author.innerHTML )
            );
        
    });
});

}

