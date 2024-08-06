String.prototype.isPalindrome = function () {
    const str = this.toLowerCase();
    return (str === str.split("").reverse().join(""));
}


function getAverageMark(marks) {
    let totalMarks = marks.reduce(function (currSum,currValue) {
        return currSum + currValue;
    },0);

    let average = totalMarks / marks.length,
        roundedAverage = Math.round(average);

    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = new Date().getTime(),
    birthdayInput = new Date(birthday).getTime(),
    diff = now - birthdayInput,

    nowYear = new Date().getFullYear(),
    birthdayInputYear = new Date(birthday).getFullYear(),
    leapDays = Math.ceil((nowYear - birthdayInputYear)/4),

    age = diff / (1000 * 60 * 60 * 24 * 365) - (1/365)*leapDays;
    console.log(age, leapDays)
    if (age > 18) {
        return age; 
    }
}