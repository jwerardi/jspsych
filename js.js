/* define welcome message block */
var welcome_block = {
    type: "text",
    text: ["<p></p><p></p><p></p><div class='center-content'>If you are using Internet Explorer, Firefox, or Safari, please switch to Google Chrome.</div><p></p><p></p><div class='center-content'>Internet Explorer, Firefox, and Safari are not supported, and your data will not be recorded.</div><p align='center'>Start the task in a quiet environment, and remove sources of distractions, like other programs and background music.</p></div><p align='center'>It will take 20~25 minutes to complete this task.</p></div><p align='center'>Press any key to begin.</p></div>"]
};

/* define welcome id block */
var subject = ["Please enter your ID number"]
var id_block = {
    type: 'survey-text',
    questions: [subject]
};


var headphone_inst = {
    type: "text",
    text: ["<p></p><p></p><p></p><div class='center-content'>The following tasks require you to listen to spoken words.</div><p></p><p></p><div class='center-content'>Before continuing, make sure you are wearing a headphone or have your speakers turned on.</div><p align='center'>Press any key to begin.</p></div>"]
};

// create a block of instructions
var practice_instructions_emo = {
    type: 'text',
    text: "<p>For this task, you will see a series of photos.</p>" +
        "<p>For each picture, you should concentrate on the <strong>EMOTION</strong> in the photograph.</p>" +
        "<p>If the emotion is <strong>ANGRY</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the emotion is <strong>HAPPY</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE COLORS</strong> of the photographs.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of reminders
var practice_instructions_emo_rem = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the emotion is <strong>ANGRY</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the emotion is <strong>HAPPY</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"

}

/* define practice block for emotions*/

// number of practice trials
var n_trials = 20;

var happy = ['img/hap.gre.congr.01.jpg', 'img/hap.gre.congr.02.jpg', 'img/hap.gre.congr.03.jpg', 'img/hap.gre.congr.04.jpg',
    'img/hap.gre.congr.05.jpg', 'img/hap.gre.congr.06.jpg', 'img/hap.gre.congr.07.jpg', 'img/hap.gre.congr.08.jpg',
    'img/hap.gre.congr.09.jpg', 'img/hap.gre.congr.10.jpg', 'img/hap.gre.congr.11.jpg', 'img/hap.gre.congr.12.jpg',
    'img/hap.gre.congr.13.jpg', 'img/hap.gre.congr.14.jpg', 'img/hap.red.incon.01.jpg', 'img/hap.red.incon.02.jpg',
    'img/hap.red.incon.03.jpg', 'img/hap.red.incon.04.jpg', 'img/hap.red.incon.05.jpg', 'img/hap.red.incon.06.jpg',
    'img/hap.red.incon.07.jpg', 'img/hap.red.incon.08.jpg', 'img/hap.red.incon.09.jpg', 'img/hap.red.incon.10.jpg',
    'img/hap.red.incon.11.jpg', 'img/hap.red.incon.12.jpg', 'img/hap.red.incon.13.jpg', 'img/hap.red.incon.14.jpg'
];

var angry = ['img/ang.gre.incon.01.jpg', 'img/ang.gre.incon.02.jpg', 'img/ang.gre.incon.03.jpg', 'img/ang.gre.incon.04.jpg',
    'img/ang.gre.incon.05.jpg', 'img/ang.gre.incon.06.jpg', 'img/ang.gre.incon.07.jpg', 'img/ang.gre.incon.08.jpg',
    'img/ang.gre.incon.09.jpg', 'img/ang.gre.incon.10.jpg', 'img/ang.gre.incon.11.jpg', 'img/ang.gre.incon.12.jpg',
    'img/ang.gre.incon.13.jpg', 'img/ang.gre.incon.14.jpg', 'img/ang.red.congr.01.jpg', 'img/ang.red.congr.02.jpg',
    'img/ang.red.congr.03.jpg', 'img/ang.red.congr.04.jpg', 'img/ang.red.congr.05.jpg', 'img/ang.red.congr.06.jpg',
    'img/ang.red.congr.07.jpg', 'img/ang.red.congr.08.jpg', 'img/ang.red.congr.09.jpg', 'img/ang.red.congr.10.jpg',
    'img/ang.red.congr.11.jpg', 'img/ang.red.congr.12.jpg', 'img/ang.red.congr.13.jpg', 'img/ang.red.congr.14.jpg'
];

var stimuli = [];
var answers_emo = [];
var text_answers_emo = [];

// randomly choose stimuli
for (var i = 0; i < n_trials; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli.push(happy[Math.floor(Math.random() * happy.length)]);
        answers_emo.push(74);
        text_answers_emo.push("happy photo");
    } else {
        // pick a letter
        stimuli.push(angry[Math.floor(Math.random() * angry.length)]);
        answers_emo.push(70);
        text_answers_emo.push("angry photo");
    }
}

// create categorization block for jspsych
var practice_emo = {
    type: 'categorize',
    stimuli: stimuli,
    key_answer: answers_emo,
    text_answer: text_answers_emo,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    timing_feedback_duration: 400,
    //prompt: "<div style='color:LightGray'><p class='prompt' align='center'>Press 'f' for a happy face. Press 'j' for an angry face.</p></div>"
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION of the photo.</strong></p></div>"
};

/* define instructions block */
var instructions_block_emo = {
    type: "text",
    text: "<p>Your practice is complete. You will now do the task.</p>" +
        "<p></p>" +
        //          "<p>If the emotion is <strong>ANGRY</strong>, press the <strong>f</strong> key</p>" +
        //          "<p>If the emotion is <strong>HAPPY</strong>, press the <strong>j</strong> key</p>" +
        "<p></p>" +
        "<p>An X will not appear if you make a mistake.</p>" +
        "<p>Press any key to begin.</p>",
    timing_post_trial: 1000
};

/* define test block */

var test_stimuli = [{
        image: "img/ang.gre.incon.01.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.01.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.02.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.02.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.03.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.03.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.04.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.04.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.05.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.05.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.06.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.06.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.07.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.07.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.08.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.08.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.09.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.09.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.10.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.10.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.11.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.11.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.12.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.12.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.13.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.13.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/ang.gre.incon.14.jpg",
        data: {
            response: 'ang.gre'
        }
    },
    {
        image: "img/ang.red.congr.14.jpg",
        data: {
            response: 'ang.red'
        }
    },
    {
        image: "img/hap.gre.congr.01.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.01.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.02.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.02.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.03.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.03.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.04.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.04.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.05.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.05.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.06.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.06.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.07.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.07.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.08.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.08.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.09.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.09.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.10.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.10.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.11.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.11.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.12.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.12.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.13.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.13.jpg",
        data: {
            response: 'hap.red'
        }
    },
    {
        image: "img/hap.gre.congr.14.jpg",
        data: {
            response: 'hap.gre'
        }
    },
    {
        image: "img/hap.red.incon.14.jpg",
        data: {
            response: 'hap.red'
        }
    }
];

var all_trials = jsPsych.randomization.repeat(test_stimuli, 1, true);

var test_block_emo = {
    type: "single-stim",
    stimuli: all_trials.image,
    choices: ['f', 'j'],
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION in the photo.</strong></p></div>",
    data: all_trials.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true // if true, advance to next trial immediately after response
    //timing_post_trial: 50 // 50 ms to show a blank screen before the next trial.
};


var images = ['img/ang.gre.incon.01.jpg', 'img/ang.red.congr.01.jpg', 'img/ang.gre.incon.02.jpg', 'img/ang.red.congr.02.jpg',
    'img/ang.gre.incon.03.jpg', 'img/ang.red.congr.03.jpg', 'img/ang.gre.incon.04.jpg', 'img/ang.red.congr.04.jpg',
    'img/ang.gre.incon.05.jpg', 'img/ang.red.congr.05.jpg', 'img/ang.gre.incon.06.jpg', 'img/ang.red.congr.06.jpg',
    'img/ang.gre.incon.07.jpg', 'img/ang.red.congr.07.jpg', 'img/ang.gre.incon.08.jpg', 'img/ang.red.congr.08.jpg',
    'img/ang.gre.incon.09.jpg', 'img/ang.red.congr.09.jpg', 'img/ang.gre.incon.10.jpg', 'img/ang.red.congr.10.jpg',
    'img/ang.gre.incon.11.jpg', 'img/ang.red.congr.11.jpg', 'img/ang.gre.incon.12.jpg', 'img/ang.red.congr.12.jpg',
    'img/ang.gre.incon.13.jpg', 'img/ang.red.congr.13.jpg', 'img/ang.gre.incon.14.jpg', 'img/ang.red.congr.14.jpg',
    'img/hap.gre.congr.01.jpg', 'img/hap.red.incon.01.jpg', 'img/hap.gre.congr.02.jpg', 'img/hap.red.incon.02.jpg',
    'img/hap.gre.congr.03.jpg', 'img/hap.red.incon.03.jpg', 'img/hap.gre.congr.04.jpg', 'img/hap.red.incon.04.jpg',
    'img/hap.gre.congr.05.jpg', 'img/hap.red.incon.05.jpg', 'img/hap.gre.congr.06.jpg', 'img/hap.red.incon.06.jpg',
    'img/hap.gre.congr.07.jpg', 'img/hap.red.incon.07.jpg', 'img/hap.gre.congr.08.jpg', 'img/hap.red.incon.08.jpg',
    'img/hap.gre.congr.09.jpg', 'img/hap.red.incon.09.jpg', 'img/hap.gre.congr.10.jpg', 'img/hap.red.incon.10.jpg',
    'img/hap.gre.congr.11.jpg', 'img/hap.red.incon.11.jpg', 'img/hap.gre.congr.12.jpg', 'img/hap.red.incon.12.jpg',
    'img/hap.gre.congr.13.jpg', 'img/hap.red.incon.13.jpg', 'img/hap.gre.congr.14.jpg', 'img/hap.red.incon.14.jpg'
];
function updateLoadedCount(nLoaded) {
    var percentcomplete = nLoaded / images.length * 100;

    // could put something fancier here, like a progress bar
    // or updating text in the DOM.
    console.log('Loaded ' + percentcomplete + '% of images');
}

/* define debrief message block */
var change_inst = {
    type: "text",
    text: "<p></p><p align='center' style='font-size:48px'>NOW THE TASK HAS CHANGED</p>" +
        "<p align='center'>Press any key for more instructions.</p>"
};

var practice_instructions_col = {
    type: 'text',
    text: "<p>For this task, you will see a series of photos.</p>" +
        "<p>For each picture, you should concentrate on the <strong>COLOR</strong> of the photograph.</p>" +
        "<p>If the color is <strong>GREEN</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the color is <strong>RED</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE EMOTIONS</strong> in the photographs.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of reminders
var practice_instructions_col_rem = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the color is <strong>GREEN</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the color is <strong>RED</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"

}

/* define practice block for colors*/

var red = ['img/ang.red.congr.01.jpg', 'img/ang.red.congr.02.jpg', 'img/ang.red.congr.03.jpg', 'img/ang.red.congr.04.jpg',
    'img/ang.red.congr.05.jpg', 'img/ang.red.congr.06.jpg', 'img/ang.red.congr.07.jpg', 'img/ang.red.congr.08.jpg',
    'img/ang.red.congr.09.jpg', 'img/ang.red.congr.10.jpg', 'img/ang.red.congr.11.jpg', 'img/ang.red.congr.12.jpg',
    'img/ang.red.congr.13.jpg', 'img/ang.red.congr.14.jpg', 'img/hap.red.incon.01.jpg', 'img/hap.red.incon.02.jpg',
    'img/hap.red.incon.03.jpg', 'img/hap.red.incon.04.jpg', 'img/hap.red.incon.05.jpg', 'img/hap.red.incon.06.jpg',
    'img/hap.red.incon.07.jpg', 'img/hap.red.incon.08.jpg', 'img/hap.red.incon.09.jpg', 'img/hap.red.incon.10.jpg',
    'img/hap.red.incon.11.jpg', 'img/hap.red.incon.12.jpg', 'img/hap.red.incon.13.jpg', 'img/hap.red.incon.14.jpg'
];

var green = ['img/ang.gre.incon.01.jpg', 'img/ang.gre.incon.02.jpg', 'img/ang.gre.incon.03.jpg', 'img/ang.gre.incon.04.jpg',
    'img/ang.gre.incon.05.jpg', 'img/ang.gre.incon.06.jpg', 'img/ang.gre.incon.07.jpg', 'img/ang.gre.incon.08.jpg',
    'img/ang.gre.incon.09.jpg', 'img/ang.gre.incon.10.jpg', 'img/ang.gre.incon.11.jpg', 'img/ang.gre.incon.12.jpg',
    'img/ang.gre.incon.13.jpg', 'img/ang.gre.incon.14.jpg', 'img/hap.gre.congr.01.jpg', 'img/hap.gre.congr.02.jpg',
    'img/hap.gre.congr.03.jpg', 'img/hap.gre.congr.04.jpg', 'img/hap.gre.congr.05.jpg', 'img/hap.gre.congr.06.jpg',
    'img/hap.gre.congr.07.jpg', 'img/hap.gre.congr.08.jpg', 'img/hap.gre.congr.09.jpg', 'img/hap.gre.congr.10.jpg',
    'img/hap.gre.congr.11.jpg', 'img/hap.gre.congr.12.jpg', 'img/hap.gre.congr.13.jpg', 'img/hap.gre.congr.14.jpg'
];

var stimuli = [];
var answers_col = [];
var text_answers_col = [];

// randomly choose stimuli
for (var i = 0; i < n_trials; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli.push(green[Math.floor(Math.random() * green.length)]);
        answers_col.push(70);
        text_answers_col.push("green photo");
    } else {
        // pick a letter
        stimuli.push(red[Math.floor(Math.random() * red.length)]);
        answers_col.push(74);
        text_answers_col.push("red photo");
    }
}

// create categorization block for jspsych
var practice_col = {
    type: 'categorize',
    stimuli: stimuli,
    key_answer: answers_col,
    text_answer: text_answers_col,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    timing_feedback_duration: 400,
    //prompt: "<div style='color:LightGray'><p class='prompt' align='center'>Press 'f' for green. Press 'j' for red.</p></div>"
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the COLOR of the photo.</strong></p></div>"
};

/* define instructions block */
var instructions_block_col = {
    type: "text",
    text: "<p>Your practice is complete. You will now do the task.</p>" +
        "<p></p>" +
        //      "<p>If the color is <strong>GREEN</strong>, press the <strong>f</strong> key</p>" +
        //      "<p>If the color is <strong>RED</strong>, press the <strong>j</strong> key</p>" +
        "<p></p>" +
        "<p>An X will not appear if you make a mistake.</p>" +
        "<p>Press any key to begin.</p>",
    timing_post_trial: 1000
};

var test_block_col = {
    type: "single-stim",
    stimuli: all_trials.image,
    choices: ['f', 'j'],
    prompt: "<br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the COLOR of the photo.</strong></p></div>",
    data: all_trials.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true // if true, advance to next trial immediately after response
    //timing_post_trial: 50 // 50 ms to show a blank screen before the next trial.
};

// create a block of instructions
var practice_instructions_ton = {
    type: 'text',
    text: "<p>For this task, you will hear a series of words.</p>" +
        "<p>For each word, you should concentrate on the <strong>EMOTION (TONE OF VOICE)</strong>.</p>" +
        "<p>If the emotion is <strong>POSITIVE</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the emotion is <strong>NEGATIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE MEANING OF THE WORDS</strong> that the person is saying.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of instructions reminder
var practice_instructions_ton_rem = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the emotion is <strong>POSITIVE</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the emotion is <strong>NEGATIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"

}



// number of trials
var n_trials_ton = 20;

var happy = ['wav/hap.pos.congr.01.mp3', 'wav/hap.pos.congr.02.mp3', 'wav/hap.pos.congr.03.mp3', 'wav/hap.pos.congr.04.mp3',
    'wav/hap.pos.congr.05.mp3', 'wav/hap.pos.congr.06.mp3', 'wav/hap.pos.congr.07.mp3', 'wav/hap.pos.congr.08.mp3',
    'wav/hap.pos.congr.09.mp3', 'wav/hap.pos.congr.10.mp3', 'wav/hap.pos.congr.11.mp3', 'wav/hap.neg.incon.01.mp3',
    'wav/hap.neg.incon.02.mp3', 'wav/hap.neg.incon.03.mp3', 'wav/hap.neg.incon.04.mp3', 'wav/hap.neg.incon.05.mp3',
    'wav/hap.neg.incon.06.mp3', 'wav/hap.neg.incon.07.mp3', 'wav/hap.neg.incon.08.mp3', 'wav/hap.neg.incon.09.mp3',
    'wav/hap.neg.incon.10.mp3', 'wav/hap.neg.incon.11.mp3'
];

var sad = ['wav/sad.neg.congr.01.mp3', 'wav/sad.neg.congr.02.mp3', 'wav/sad.neg.congr.03.mp3', 'wav/sad.neg.congr.04.mp3',
    'wav/sad.neg.congr.05.mp3', 'wav/sad.neg.congr.06.mp3', 'wav/sad.neg.congr.07.mp3', 'wav/sad.neg.congr.08.mp3',
    'wav/sad.neg.congr.09.mp3', 'wav/sad.neg.congr.10.mp3', 'wav/sad.neg.congr.11.mp3', 'wav/sad.pos.incon.01.mp3',
    'wav/sad.pos.incon.02.mp3', 'wav/sad.pos.incon.03.mp3', 'wav/sad.pos.incon.04.mp3', 'wav/sad.pos.incon.05.mp3',
    'wav/sad.pos.incon.06.mp3', 'wav/sad.pos.incon.07.mp3', 'wav/sad.pos.incon.08.mp3', 'wav/sad.pos.incon.09.mp3',
    'wav/sad.pos.incon.10.mp3', 'wav/sad.pos.incon.11.mp3'
];

var stimuli = [];
var answers_ton = [];
var text_answers_ton = [];

// randomly choose stimuli
for (var i = 0; i < n_trials_ton; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli.push("<audio class='audio' autoplay><source src='" + happy[Math.floor(Math.random() * happy.length)] + "'> type='audio/wav'></audio>");
        answers_ton.push(70);
        text_answers_ton.push("happy tone");
    } else {
        // pick a letter
        stimuli.push("<audio class='audio' autoplay><source src='" + sad[Math.floor(Math.random() * sad.length)] + "'> type='audio/wav'></audio>");
        answers_ton.push(74);
        text_answers_ton.push("sad tone");
    }
}

// create categorization block for jspsych
var practice_ton = {
    type: 'categorize',
    stimuli: stimuli,
    key_answer: answers_ton,
    text_answer: text_answers_ton,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    is_html: true,
    show_stim_with_feedback: false,
    timing_feedback_duration: 400,
    //prompt: "<div style='color:LightGray'><p class='prompt' align='center'>Press 'f' for a happy tone. Press 'j' for a sad tone.</p></div>"
    prompt: "<br/><br/><br/><br/><br/><br/><br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION of the word.</strong></p></div>"
};
/* define instructions block */
var instructions_block_ton = {
    type: "text",
    text: "<p>Your practice is complete. You will now do the task.</p>" +
        "<p></p>" +
        //      "<p>If the emotion is <strong>POSITIVE</strong>, press the <strong>f</strong> key</p>" +
        //      "<p>If the emotion is <strong>NEGATIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p></p>" +
        "<p>An X will not appear if you make a mistake.</p>" +
        "<p>Press any key to begin.</p>",
    timing_post_trial: 1000
};
/* define test block */

var test_stimuli = [{
        audio: "wav/sad.neg.congr.01.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.01.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.02.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.02.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.03.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.03.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.04.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.04.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.05.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.06.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.05.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.07.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.06.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.07.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.08.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.08.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.09.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.09.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.10.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/sad.neg.congr.11.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.10.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.pos.congr.11.mp3",
        data: {
            response: 'emotion.congr'
        }
    },
    {
        audio: "wav/hap.neg.incon.01.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.01.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.02.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.02.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.03.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.03.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.04.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.04.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.05.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.06.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.05.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.07.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.06.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.07.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.08.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.08.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.09.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.09.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.10.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/hap.neg.incon.11.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.10.mp3",
        data: {
            response: 'emotion.incon'
        }
    },
    {
        audio: "wav/sad.pos.incon.11.mp3",
        data: {
            response: 'emotion.incon'
        }
    }
];

var all_trials = jsPsych.randomization.repeat(test_stimuli, 1, true);

var after_response = function(key_info) {
    jsPsych.finishTrial();
}

var test_block_ton = {
    type: "single-audio",
    stimuli: all_trials.audio,
    choices: ['f', 'j'],
    prompt: "<br/><br/><br/><br/><br/><br/><br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the EMOTION of the word.</strong></p></div>",
    data: all_trials.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true // if true, advance to next trial immediately after response
};

/* define debrief message block */
var change_inst = {
    type: "text",
    text: "<p></p><p align='center' style='font-size:48px'>NOW THE TASK HAS CHANGED</p>" +
        "<p align='center'>Press any key for more instructions.</p>"
};

// create a block of instructions
var practice_instructions_val = {
    type: 'text',
    text: "<p>For this task, you will hear a series of words.</p>" +
        "<p>For each word, you should concentrate on the <strong>MEANING OF THE WORD</strong>.</p>" +
        "<p>If the meaning is <strong>POSITIVE</strong>, press the <strong>f</strong> key</p>" +
        "<p>If the meaning is <strong>NEGATIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p><strong>You will first PRACTICE the task.</strong></p>" +
        "<p>If you make a mistake, you will see an 'X' on the screen.</p>" +
        "<p>You should respond as <strong>QUICKLY</strong> as you can without making mistakes.</p>" +
        "<p>Try your best to <strong>IGNORE THE EMOTIONS</strong> in the sound clips.</p>" +
        "<p>Press any key to begin.</p>"
}

// create a block of instructions reminder
var practice_instructions_val_rem = {
    type: 'text',
    text: "<p class='prompt' style='font-size:36px'><strong>REMINDER</strong></p></div>" +
        "<p class='prompt' style='font-size:36px'>If the meaning is <strong>POSITIVE</strong>, press the <strong>f</strong> key</p>" +
        "<pclass='prompt' style='font-size:36px'>If the meaning is <strong>NEGATIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p>Press any key to begin.</p>"
}

// number of trials
var n_trials_val = 20;
var positive = ['wav/hap.pos.congr.01.mp3', 'wav/hap.pos.congr.02.mp3', 'wav/hap.pos.congr.03.mp3', 'wav/hap.pos.congr.04.mp3',
    'wav/hap.pos.congr.05.mp3', 'wav/hap.pos.congr.06.mp3', 'wav/hap.pos.congr.07.mp3', 'wav/hap.pos.congr.08.mp3',
    'wav/hap.pos.congr.09.mp3', 'wav/hap.pos.congr.10.mp3', 'wav/hap.pos.congr.11.mp3', 'wav/sad.pos.incon.01.mp3',
    'wav/sad.pos.incon.02.mp3', 'wav/sad.pos.incon.03.mp3', 'wav/sad.pos.incon.04.mp3', 'wav/sad.pos.incon.05.mp3',
    'wav/sad.pos.incon.06.mp3', 'wav/sad.pos.incon.07.mp3', 'wav/sad.pos.incon.08.mp3', 'wav/sad.pos.incon.09.mp3',
    'wav/sad.pos.incon.10.mp3', 'wav/sad.pos.incon.11.mp3'
];

var negative = ['wav/hap.neg.incon.01.mp3', 'wav/hap.neg.incon.02.mp3', 'wav/hap.neg.incon.03.mp3', 'wav/hap.neg.incon.04.mp3',
    'wav/hap.neg.incon.05.mp3', 'wav/hap.neg.incon.06.mp3', 'wav/hap.neg.incon.07.mp3', 'wav/hap.neg.incon.08.mp3',
    'wav/hap.neg.incon.09.mp3', 'wav/hap.neg.incon.10.mp3', 'wav/hap.neg.incon.11.mp3', 'wav/sad.neg.congr.01.mp3',
    'wav/sad.neg.congr.02.mp3', 'wav/sad.neg.congr.03.mp3', 'wav/sad.neg.congr.04.mp3', 'wav/sad.neg.congr.05.mp3',
    'wav/sad.neg.congr.06.mp3', 'wav/sad.neg.congr.07.mp3', 'wav/sad.neg.congr.08.mp3', 'wav/sad.neg.congr.09.mp3',
    'wav/sad.neg.congr.10.mp3', 'wav/sad.neg.congr.11.mp3'
];

var stimuli = [];
var answers_val = [];
var text_answers_val = [];

// randomly choose stimuli
for (var i = 0; i < n_trials_val; i++) {
    if (Math.floor(Math.random() * 2) === 0) {
        // pick a number
        stimuli.push("<audio class='audio' autoplay><source src='" + positive[Math.floor(Math.random() * positive.length)] + "'> type='audio/wav'></audio>");
        answers_val.push(70);
        text_answers_val.push("positive valence");
    } else {
        // pick a letter
        stimuli.push("<audio class='audio' autoplay><source src='" + negative[Math.floor(Math.random() * negative.length)] + "'> type='audio/wav'></audio>");
        answers_val.push(74);
        text_answers_val.push("negative valence");
    }
}

// create categorization block for jspsych
var practice_val = {
    type: 'categorize',
    stimuli: stimuli,
    key_answer: answers_val,
    text_answer: text_answers_val,
    choices: [70, 74],
    correct_text: "<p class='prompt' align='center'>Correct</p>",
    incorrect_text: "<div style='color:red'><p class='prompt' align='center' style='font-size:72px'>X</p></div>",
    is_html: true,
    show_stim_with_feedback: false,
    timing_feedback_duration: 400,
    //prompt: "<div style='color:LightGray'><p class='prompt' align='center'>Press 'f' for a positive word. Press 'j' for a negative word.</p></div>"
    prompt: "<br/><br/><br/><br/><br/><br/><br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the MEANING of the word.</strong></p></div>"
};

/* define instructions block */
var instructions_block_val = {
    type: "text",
    text: "<p>Your practice is complete. You will now do the task.</p>" +
        "<p></p>" +
        //      "<p>If the meaning is <strong>POSITIVE</strong>, press the <strong>f</strong> key</p>" +
        //      "<p>If the meaning is <strong>NEGATIVE</strong>, press the <strong>j</strong> key</p>" +
        "<p></p>" +
        "<p>An X will not appear if you make a mistake.</p>" +
        "<p>Press any key to begin.</p>",
    timing_post_trial: 1000
};


var test_block_val = {
    type: "single-audio",
    stimuli: all_trials.audio,
    choices: ['f', 'j'],
    prompt: "<br/><br/><br/><br/><br/><br/><br/><br/><div style='color:LightGray'><p class='prompt' align='center' style='font-size:24px'><strong>Focus on the MEANING of the word.</strong></p></div>",
    data: all_trials.data,
    timing_response: -1, // if -1, then wait for response forever
    timing_stim: -1, // if -1, then show indefinitely
    continue_after_response: true // if true, advance to next trial immediately after response
};

var save_data_block = {
    type: 'call-function',
    func: function() {
        saveData("_tionce.csv", jsPsych.data.dataAsCSV())
    },
    timing_post_trial: 0
}

/* define debrief message block */
var debrief_block = {
    type: "text",
    text: "<div class='center-content'>Thank you. Your responses have been recorded, and you have completed this task.</div>",
    cont_key: ['q']
};

/* create experiment definition array */
var experiment = [];
experiment.push(welcome_block);
experiment.push(id_block);
experiment.push(practice_instructions_emo);
experiment.push(practice_instructions_emo_rem);
experiment.push(practice_emo);
experiment.push(instructions_block_emo);
experiment.push(test_block_emo);
experiment.push(change_inst);
experiment.push(practice_instructions_col);
experiment.push(practice_instructions_col_rem);
experiment.push(practice_col);
experiment.push(instructions_block_col);
experiment.push(test_block_col);
experiment.push(headphone_inst);
experiment.push(practice_instructions_ton);
experiment.push(practice_instructions_ton_rem);
experiment.push(practice_ton);
experiment.push(instructions_block_ton);
experiment.push(test_block_ton);
experiment.push(change_inst);
experiment.push(practice_instructions_val);
experiment.push(practice_instructions_val_rem);
experiment.push(practice_val);
experiment.push(instructions_block_val);
experiment.push(test_block_val);
experiment.push(save_data_block);
experiment.push(debrief_block);

function saveData(filename, filedata) {
    $.ajax({
        type: 'post',
        cache: false,
        url: 'save_data.php', // this is the path to the above PHP script
        data: {
            filename: filename,
            filedata: filedata
        }
    });
}

jsPsych.init({
    experiment_structure: experiment,
    on_finish: function(data) {
        saveData("_tionce.csv", jsPsych.data.dataAsCSV())
    }
});

function startExperiment() {
    console.log("rick XD")
    jsPsych.preloadImages(images, function() {
        
    }, function(nLoaded) {
        console.log("in here")
        updateLoadedCount(nLoaded);
    });
}


startExperiment();