
function newQuote(){
$(document).ready(function(){
    $.getJSON("https://free-quotes-api.herokuapp.com/", function(randomQuote){
        // document.write(randomQuote.quote)
        let quote = document.getElementById("text")
        let author = document.getElementById("author")
        quote.innerHTML = "&quot;" + (randomQuote.quote) + "&quot;"
        author.textContent = (randomQuote.author)

        $('#tweet-quote').attr(
            'href',
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +  
             encodeURIComponent( quote.innerHTML  + author.innerHTML )
            );
        
    });
});

}

