const para = document.getElementById('paragraph');
const input = document.getElementById('customDate');

const dayFunc = (dayNum) => {
    if(dayNum == 0){
        return 'Sunday';
    } else if (dayNum == 1) {
        return 'Monday';
    } else if (dayNum == 2) {
        return 'Tuesday'
    } else if (dayNum == 3) {
        return 'Wednesday'
    } else if (dayNum == 4) {
        return 'Thursday'
    } else if (dayNum == 5) {
        return 'Friday'
    }else if (dayNum == 6) {
        return 'Saturday'
    }
}

function dayOfTheWeek(custom) {
    if (custom) {
        const date = new Date(custom); 

        const dayName = dayFunc(date.getDay());

        para.innerHTML = dayName;
    } else if (!custom) {
        const date = new Date();

        const dayName = dayFunc(date.getDay());
    
        para.innerHTML = dayName;
    }

}

function customDate() {
    dayOfTheWeek(input.value);
}

