let selectedDate = document.querySelector('.date');
let selectedTime = document.querySelector('.time');
let dateField = document.querySelector('.date-field');
let submit = document.querySelector('.submit');

submit.addEventListener('click', () => {

    let [selectedYear, selectedMonth, selectedDay] = selectedDate.value.split('-').map(Number);
    let [selectedHours, selectedMinutes] = selectedTime.value.split(':').map(Number);
    let selectedSeconds = 0;

    const today = new Date();
    let thisDate = today.getDate();
    let thisMonth = today.getMonth()+1;
    let thisYear = today.getFullYear();

    let diffYear = thisYear - selectedYear;
    let diffMonth = thisMonth - selectedMonth;
    let diffDays = thisDate - selectedDay;

    if (diffDays < 0){
        diffMonth-- ;

        let prevMonth = thisMonth -1 < 1 ? 12 : thisMonth - 1;
        let daysInPrevMonth = new Date(thisYear, prevMonth, 0).getDate();
        diffDays += daysInPrevMonth;
    }

    if (diffMonth < 0){
        diffYear-- ;
        diffMonth += 12;
    }

    let selectedDateTime = new Date(selectedYear, selectedMonth-1, selectedDay, selectedHours, selectedMinutes, selectedSeconds);
    let timeDiffMs = today - selectedDateTime;

    let totalDays = Math.floor(timeDiffMs / (1000*60*60*24));
    let totalWeeks = Math.floor(totalDays/7);
    let totalHours = Math.floor(timeDiffMs / (1000*60*60));
    let totalMinutes = Math.floor(timeDiffMs / (1000*60));
    let totalSeconds =Math.floor(timeDiffMs / (1000));

    dateField.innerHTML = `
        <div class="result-box">
            <h3>Your Age: ${diffYear} years, ${diffMonth} months, ${diffDays} days</h3>
            <p>Total Days: ${totalDays}</p>
            <p>Total Weeks: ${totalWeeks}</p>
            <p>Total Hours: ${totalHours}</p>
            <p>Total Minutes: ${totalMinutes}</p>
            <p>Total Seconds: ${totalSeconds}</p>
        </div>
    `;

});



document.querySelector('.clear').addEventListener('click', () =>{
    location.reload();
})