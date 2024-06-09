// Import moment


function calculate() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    let birthDate = [year, month, day].join("-");
    //birthDate = moment(birthDate, "YYYY-MM-DD");
    let today = moment();

    let time = moment.duration(today.diff(birthDate));

    year = time.years();
    month = time.months();
    day = time.days();

    document.getElementById("year_output").innerHTML = year;
    document.getElementById("month_output").innerHTML = month;
    document.getElementById("day_output").innerHTML = day;
}