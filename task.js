
String.prototype.isPalindrome = function () {
    let str = this.toLowerCase().split("");

    if (str === str.reverse()) {
        return true;
    }

    return false;
}


function getAverageMark(marks) {
    let totalMarks = 0;

    for (let mark in marks) {
        totalMarks += marks[mark];
    }

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