// code your solution here
const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

console.log(wrapAdjective('*')('a dedicated programmer'))