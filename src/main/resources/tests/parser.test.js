const parse = require('./../static/js/parser');
const HEADING = [
    {
        input: "# Title"
        ,output: "<h1>Title</h1>"
    }
    ,{
        input: "# Heading 1\n## Heading 2"
        ,output: "<h1>Heading 1</h1><h2>Heading 2</h2>"
    }
    ,{
        input: "### Heading 3  \n  # Heading 1"
        ,output: "<h3>Heading 3</h3><h1>Heading 1</h1>"
    }
    ,{
        input: "\t###Heading 3  \n  # Heading 1"
        ,output: "<p>Heading 3</p><h1>Heading 1</h1>"
    }
];

const PARAGRAPH = [
    {
        input: "\nParagraph"
        ,output: "<p></p><p>Paragraph</p>"
    }
    ,{
        input: "\nControl is not atomic in paradise, the pyramid, or over there, but everywhere. \t"
        ,output: "<p></p><p>Control is not atomic in paradise, the pyramid, or over there, but everywhere. \t</p>"
    }
    ,{
        input: "\n\nParagraph\n"
        ,output: "<p></pr><p></pr><p>Paragraph</p><p></pr>"
    }
    ,{
        input: "\nParagraph\nAnother paragraph"
        ,output: "<p>Paragraph</p><p>Another paragraph</p>"
    }
];

const FORMATING = [
    {
        input: "*Hello World!*"
        ,output: "<p><i>Hello World!</i></p>"
    }
    ,{
        input: "**Hello World!**"
        ,output: "<p><b>Hello World!</b></p>"
    }
    ,{
        input: "***Hello World!***"
        ,output: "<p><b><i>Hello World!</i></b></p>"
    }
    ,{
        input: "*Hello World!\nBe yourself; everyone else is already taken."
        ,output: "<p><i>*Hello World!</i></p>"
        + "<p><i>Be yourself; everyone else is already taken.</i></p>"
    }
    ,{
        input: "*Hello World!*\nBe yourself; everyone else is already taken."
        ,output: "<p><i>*Hello World!</i></p><p>Be yourself; everyone else is already taken.</p>"
        + "<p><i>Be yourself; everyone else is already taken.</i></p>"
    }
    ,{
        input: "***Hello World!\nBe yourself; everyone else is already taken."
        ,output: "<p><b><i>Hello World!</b></i></p>"
            + "<p><b><i>Be yourself; everyone else is already taken.</i></b></p>"
    }
    ,{
        input: "***Hello World!\nBe ***yourself; everyone else is already taken."
        ,output: "<p><b><i>Hello World!</b></i></p>"
            + "<p><b><i>Be </i></b>yourself; everyone else is already taken.</p>"
    }
    ,{
        input: "***Hello World!\nBe *yourself; everyone else is already taken."
        ,output: "<p><b><i>Hello World!</b></i></p>"
            + "<p><b><i>Be </i>yourself; everyone else is already taken.</b></p>"
    }
]

const BLOCK_QUOTE = [
    {
        input: "> Hello World!"
        ,output: "<blockquote><p>Hello World!</p></blockquote>"
    }
    ,{
        input: ">  Hello World!\n>\n  > Hi Mom! I'm on TV!"
        ,output: "<blockquote>Hello World!<br><br>Hi Mom! I'm on TV</p></blockquote>"
    }
    ,{
        input: ">  Hello World   \n  >Hi Mom! I'm on TV!"
        ,output: "<blockquote><p>Hello World! >Hi Mom! I'm on TV</p></blockquote>"
    }
    ,{
        input: ">  Hello World   \n  >Hi Mom! I'm on TV!"
        ,output: "<blockquote><p>Hello World! >Hi Mom! I'm on TV</p></blockquote>"
    }
    ,{
        input: ">  Hello World   \n \n  >Hi Mom! I'm on TV!"
        ,output: "<blockquote><p>Hello World!</p><p>Hi Mom! I'm on TV</p></blockquote>"
    }
];

describe.each(HEADING)('Parsing heading', ({input, output}) => {
    test(input, () => {
        expect(parse(input)).toBe(output);
    })
} );
