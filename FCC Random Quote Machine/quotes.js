function newQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
        function(data) {
            var quoteText = data.quoteText;
            var quoteAuthor = data.quoteAuthor || "Anonymous";
            //update html document with the new quote and author
            $("#text").html(quoteText);
            $("#author").html("- " + quoteAuthor);
            $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteText + ' -- ' + quoteAuthor));
            // Add in some animations
            $("#text").hide().fadeIn(1000);
            $("#author").hide().fadeIn(1000);
        }
    );
}

// Get a new quote when the page loads
$(newQuote());