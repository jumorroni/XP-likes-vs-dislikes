function like_or_dislike() {
    let [Nothing, Like, Dislike] = ['Nothing', 'Like', 'Dislike']

    // if (finalState == 'Nothing') {
    //     list_of_inputs = Like
    //     return "final state"
    // } else {
    //     return finalState;
    return 'Nothing';
}

// function like_or_dislike(buttons) {
//     let state = ['Nothing', 'Like', 'Dislike'];
//     let buttons = 0;

//     for (let i = 0; i < buttons.length; i++) {
//         if (buttons[i] === state) {
//             state = 'Nothing';
//         } else {
//             state = buttons[i];
//         }
//     }

//     return state;
// }

function getValue(input) {
    const button = ['Like', 'Dislike'];
    return button[1];
}

module.exports = { like_or_dislike, getValue };