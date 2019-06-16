const defaultText = 
    "# H1 header\n" +
    "## H2 header\n" +
    "a link: [GitHub](http://github.com)\n\n"+
    "`inline code` element\n\n" +
    "Code Block:\n" +
    "```javascript\n" +
    "function fancyAlert(arg) {\n" +
    "  if(arg) {\n" +
    "      $.facebox({div:'#foo'})\n" +
    "   }\n" +
    " }\n" +
    "```\n" +
    "A list:\n1. one\n1. two\n1.three\n\n" +
    "A block quote:\n" +
    "> We're living the future so\n"+
    "> the present is our past.\n" +
    "\n![cat pic](https://bit.ly/fcc-relaxing-cat)\n" +
    "\n**This text will be bold**\n" +
    "";

function getDefaultText() {
    return defaultText;
}
