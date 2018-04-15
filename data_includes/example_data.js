var shuffleSequence = seq("intro", "practice", "init", rshuffle(anyOf(startsWith("critical"), "filler")));
var defaults = [
    "Question", {
        as: ["Yes", "No"]
    },
    "Message", {
        transfer: "keypress"
    }
];

// define_ibex_controller({
//     name: "TextQuestion",
//     jqueryWidget: {
//         _init: function () {
//             this.options.transfer = null;
//             this.element.VBox({
//                 options: this.options,
//                 triggers: [1],
//                 children: [
//                     "Message", this.options,
//                     "Form", this.options,
//                 ]
//             });
//         }
//     },
//     properties: { }
// });

var items = [
    ["intro",
        "Message", {html: "<p>You will be given several paragraphs of text and asked a question after each on your" + 
                          " comprehension. Try to answer as accurately as possible.</p>"+
                          "<p>There will be a practice question before we begin. The experiment should take around 10 minutes.</p>",
                    transfer: "click"}
    ],
    ["practice",
        "Form", {html: "<p style='width:500px'>Jess had a cup of coffee with her breakfast this morning. "+
                          "She knew it was going to be a long day, so she packed a little "+
                          "extra in her lunch. By 3:00, she had had another two cups of coffee. "+
                          "She was exhausted by the time she made it home.</p>"+
                          "<ol><li><p>How many cups of coffee did Jess have today? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["init",
        "Message", {html: "<p>Let's begin!</p>",
                    transfer: "click"}
    ],
    ["critical1",  // condition 1
        "Form", {html: "<p style='width:500px'>John met three coworkers yesterday. He later went to the park with his kids. Before heading home, "+
                          "he also met a good friend of his.</p>"+
                          "<ol><li><p>How many meetings did John have? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical2",
        "Form", {html: "<p style='width:500px'>Dave went for a walk in the park. He also ran into four friends of his. Later that day, he "+
                          "called them to schedule another time to catch up. He also ran into his teacher, Beth, on his way home.</p>"+
                          "<ol><li><p>How many times did Dave run into friends? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical3",
        "Form", {html: "<p style='width:500px'>Mary was going out for a jog when she heard an alarm go off. In all the chaos, she bumped into three kids who couldn’t "+
                "find their parents. As it turned out, someone had accidently set off the tornado alert. Mary was exhausted by the time she made it home. "+
                  "She bumped into her friend Alison on the way, but told her she couldn’t chat.</p>"+
                  "<ol><li><p>How many times did Mary bump into people? (Please enter a number)</p>"+
                  "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical4",
        "Form", {html: "<p style='width:500px'>Sally spent the entire day watching TV. She didn’t leave the house until late afternoon. While she was out, she came "+
                  "across two friends of hers, who both asked her why she looked like crap. She told them it was just one of those days. On her way back home, she "+
                  "came across her brother, who told her to get back to bed. </p>"+
                  "<ol><li><p>How many times did Sally come across people? (Please enter a number)</p>"+
                  "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical5",
        "Form", {html: ""}
    ],
    ["critical6",
        "Form", {html: ""}
    ],
    ["critical7",
        "Form", {html: ""}
    ],
    ["critical8",
        "Form", {html: ""}
    ],
    ["critical9",
        "Form", {html: ""}
    ],
    ["critical10",
        "Form", {html: ""}
    ],
    ["critical11",
        "Form", {html: ""}
    ],
    ["critical12",
        "Form", {html: ""}
    ],
    [ "filler",
        "Form", {html: "<p style='width:500px'>Jonathan ate three pizzas last week. He also drank a glass of OJ, "+
                          "and ate a piece of cake.</p>"+
                          "<ol><li><p>How many times did Jonathan eat? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["end",
        "Message", 
    ]
    
];