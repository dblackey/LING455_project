var shuffleSequence = seq("intro", "practice", "init", rshuffle(anyOf(startsWith("critical"), "filler")), "end");
var showProgressBar = false;
var defaults = [
    "Question", {
        as: ["Yes", "No"]
    },
    "Message", {
        transfer: "keypress"
    }
];

var items = [
    ["intro",
        "Message", {html: "<p>You will be given several paragraphs of text and asked a question after each on your" + 
                          " comprehension. Try to answer as accurately as possible.</p>"+
                          "<p>There will be a practice question before we begin. The experiment should take around 15 minutes.</p>",
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
        "Form", {html: "<p style='width:500px'>John had quite the day yesterday -- he met three coworkers. He later went to the park with his kids. Before heading home, "+
                          "he also met a good friend of his.</p>"+
                          "<ol><li><p>How many times did John meet people? (Please enter a number)</p>"+
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
        "Form", {html: "<p style='width:500px'>Elly spent most of today watching soap operas with her niece, Jocelyn. Before the end of the day, she stopped by the supermarket to pick up some food for dinner. While she was out, she happened upon two of her former roommates. She also happened upon an old friend of hers. When she made it back, she cooked up some pasta for Jocelyn.</p>"+
                       "<ol><li><p>How many times did Elly happen upon people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical6",
        "Form", {html: "<p style='width:500px'>Alex loves to spend sunny days outdoors. As soon as he saw the weather report this morning, he planned a day full of outdoor activities. While he was out for a walk, he stumbled upon three of his neighbors. He also sat by a pond for a while, and while he was there, he stumbled upon his friend, Jeff. Alex was sad to see the day come to an end.</p>"+
                       "<ol><li><p>How many times did Alex stumble across people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical7",  // condition 2
        "Form", {html: "<p style='width:500px'>Mary loves hanging out in coffee shops. Two of Mary’s closest friends met her in one of her favorites last Wednesday. That same day, Mary went to a garden near her neighborhood. She met her dad there to talk about their upcoming trip.</p>"+
                       "<ol><li><p>How many times did people meet Mary last Wednesday? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical8",
        "Form", {html: "<p style='width:500px'>Alison told her boss she was sick and took the entire day off. She missed an important meeting, but she didn’t care. Unfortunately, three of her coworkers ran into her. She knows now to come up with better excuses to give her boss. She ran into her sister back at home and told her what a mess the day was.</p>"+
                       "<ol><li><p>How many times did people run into Alison that day? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical9",
        "Form", {html: "<p style='width:500px'>Harry had a rough week. It all started off when his girlfriend sent him a text saying it was over. To make matters worse, his two aunts bumped into him. He had to relive the experience over and over. At the end of the week, he bumped into his best friend and went out to have a beer.</p>"+
                       "<ol><li><p>How many times did people bump into Harry last week? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical10",
        "Form", {html: "<p style='width:500px'>Austin spent last weekend in New York. While he was there, three of his high school friends came across him. He was happy to get to hear how they had been since they last time he had seen them. He also came across his high school teacher while exploring Central Park.</p>"+
                       "<ol><li><p>How many times did people come across Austin in New York? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical11",
        "Form", {html: "<p style='width:500px'>Sally went to the county fair last weekend with a couple friends of hers. While she was there, two other friends happened upon her - it was clearly a popular weekend at the fair. Sally had a great time – she ate three hot dogs. She also happened upon her old roommate, Beth.</p>"+
                       "<ol><li><p>How many times did people happen upon Sally at the fair? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["critical12",
        "Form", {html: "<p style='width:500px'>Derek works as a doctor at a hospital. Yesterday at work, two former patients of his stumbled upon him. Derek is always thrilled to hear how his former patients are doing. That same day, an old friend of his also stumbled upon him at work. Overall, it was a pretty good day.</p>"+
                       "<ol><li><p>How many times did people stumble upon Derek that day? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    [ "filler",  // fillers: non-symmetric
        "Form", {html: "<p style='width:500px'>Jonathan spends a lot of his time eating. He ate three pizzas yesterday. He also drank a glass of OJ, "+
                          "and ate a piece of cake. Other than that, Jonathan didn't do too much yesterday.</p>"+
                          "<ol><li><p>How many times did Jonathan eat? (Please enter a number)</p>"+
                          "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Phil went to the mall last weekend to shop for some new shoes. He ended up buying a nice pair of tennis shoes and a new shirt. He bought himself a milkshake too.</p>"+
                       "<ol><li><p>How many times did Phil buy something? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Andrew spent the entire weekend watching sports on TV. He watched a football game on Saturday afternoon, a basketball game Saturday night, and a baseball game on Sunday. He also watched an episode of his favorite TV show.</p>"+
                       "<ol><li><p>How many times did Andrew watch sports games? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Jessica is a huge moviegoer. Last week, she watched two movies on Tuesday with her friend Alice, and then watched another movie on Wednesday at the theater down the street from her house. She’s thinking about seeing a couple more movies next week.</p>"+
                       "<ol><li><p>How many times did Jessica watch a movie? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",  // fillers: singular
        "Form", {html: "<p style='width:500px'>John slept in late this morning, and later met his friend for lunch. He spent the rest of the day taking care of some errands. That night, he met his girlfriend for dinner.</p>"+
                       "<ol><li><p>How many times did John meet people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Andrea got a puppy for her birthday. She spent the entire week playing with it, and hardly let it leave her side. She took it for a walk every morning from Monday to Friday.</p>"+
                       "<ol><li><p>How many times did Andrea walk her puppy? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Jennifer started taking courses at her local community college. During her first day of class, she bumped into a middle school classmate of hers. She also bumped into her high school teacher, who had started teaching courses there.</p>"+
                       "<ol><li><p>How many times did Jennifer bump into people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Katie spent the past week in Europe with her family. While she was there, she stumbled came across her daughter’s swim instructor, who was also there for vacation. After chatting for a bit, he offered to give her a free lesson when they were all back home. Katie also came across an old friend of hers.</p>"+
                       "<ol><li><p>How many times did Katie come across people in Europe? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",  // fillers: plural
        "Form", {html: "<p style='width:500px'>Last month, John and his wife went on a road trip across the country. During the trip, they ran into three friends of theirs. They found it funny how so many of their friends from back home could also be scattered across the country.</p>"+
                       "<ol><li><p>How many times did John and his wife run into people during their trip? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Alison and Jess spent the afternoon having a picnic in the park. While they were in the park, they bumped into their two college roommates, Andrea and Katherine. Catching up with them made their picnic all the better. They also bumped into another friend of theirs, David. They left the park full and happy to have found their friends.</p>"+
                       "<ol><li><p>How many times did Alison and Jess bump into people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Jeff and his son went to the amusement park last weekend. They rode all the rides that had recently been opened up. During all their time in line, they stumbled upon two family friends, who were also there for the new rides. They also stumbled upon their neighbor.</p>"+
                       "<ol><li><p>How many times did Jeff and his son stumble upon people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["filler",
        "Form", {html: "<p style='width:500px'>Zach and his friend Erick spent the weekend by the pool, enjoying the nice weather. While they were there, they happened upon two of their classmates. They also happened upon the teacher of the course. Zach and Erick weren’t so happy to have seen so many people from school during their weekend away. </p>"+
                       "<ol><li><p>How many times did Zach and Erick happen upon people? (Please enter a number)</p>"+
                       "<input name='answer' type='text' class='obligatory'></li></ol>"}
    ],
    ["end",
        "Message", {html: "<p>This is the end of the experiment. Thanks for your participation! (Press any key to send results and exit)</p>",
                    transfer: "keypress"}
    ]
    
];