var calcBtn = document.getElementById("calc");
calcBtn.addEventListener("click", function () {
    document.getElementById("result").classList.add("d-none");
    document.getElementById("nic").classList.remove("is-invalid");
    document.getElementById("nic").classList.remove("is-valid");

    var nic = document.getElementById("nic").value;
    if (!(nic.length == 10 || nic.length == 12)) {
        document.getElementById("nic").classList.add("is-invalid");
        return;
    }
    else if (nic.length == 10) {
        if (nic[9] != "v" && nic[9] != "V") {
            document.getElementById("nic").classList.add("is-invalid");
            return;
        }
        else {
            let num = new Number(nic.substring(0, 9));
            if (isNaN(num)) {
                document.getElementById("nic").classList.add("is-invalid");
                return;
            }
            let year = new Number("19" + nic.substring(0, 2));
            let days = new Number(nic.substring(2, 5));
            calculate(year, days);
        }
    }
    else if (nic.length == 12) {
        let num = new Number(nic.substring(0, 12));
        if (isNaN(num)) {
            document.getElementById("nic").classList.add("is-invalid");
            return;
        }
        let year = nic.substring(0, 4);
        let days = nic.substring(4, 7);

        calculate(year, days);
    }
}
);

function isLeapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }

function calculate(year, days) {
    document.getElementById("nic").classList.remove("is-invalid");
    document.getElementById("nic").classList.add("is-valid");
    document.getElementById("gender").innerHTML = (days > 500) ? "Female" : "Male";

    days = (days > 500) ? days - 500 : days;

    var date = moment.utc().year(year).dayOfYear(days);
    isLeapYear(year) ? date.dayOfYear(days) : date.dayOfYear(days - 1);
    date = date.format("YYYY-MM-DD");

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    let month = months[date.split("-")[1] - 1];
    let day = date.split("-")[2];
    let sup = "";
    if (day == 1 || day == 21 || day == 31) {
        sup = "st";
    }
    else if (day == 2 || day == 22) {
        sup = "nd";
    }
    else if (day == 3 || day == 23) {
        sup = "rd";
    }
    else {
        sup = "th";
    }
    document.getElementById("dob").innerHTML = `${day}<sup>${sup}</sup> of ${month} ${year}`;
    document.getElementById("result").classList.remove("d-none");
}

var form = document.getElementById("nic-form");
form.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        e.preventDefault();
        document.getElementById("calc").click();
    }
});

var reset = document.getElementById("reset");
reset.addEventListener("click", function () {
    document.getElementById("nic").classList.remove("is-invalid");
    document.getElementById("nic").classList.remove("is-valid");
    document.getElementById("result").classList.add("d-none");
    document.getElementById("nic").value = "";
});
