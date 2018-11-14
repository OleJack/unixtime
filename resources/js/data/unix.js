window.onload = function () {
    document.getElementById("unixtime").value = moment().unix();
    fillDayMonYear();
};

function getTimeFromUnix() {
    document.getElementById("unix-to-date-one").innerHTML = moment.unix(parseInt(document.getElementById('unixtime').value)).format();
}

function fillDayMonYear() {
    let date = new Date();
    console.log(date);
    document.getElementById('du1-dy').value = date.getUTCDate();
    if (date.getMonth().toString().length < 2) {
        document.getElementById('du1-mn').value = '0' + date.getUTCMonth();
    } else {
        document.getElementById('du1-mn').value = date.getUTCMonth();
    }
    document.getElementById('du1-yr').value = date.getUTCFullYear();
}

function getStartEndUnix(ms) {

    dt = new Date();
    dt.setFullYear(document.getElementById('du1-yr').value);
    dt.setMonth(document.getElementById('du1-mn').value);
    dt.setDate(document.getElementById('du1-dy').value);
    let startUnix = getStartTime(dt);
    let endUnix = getEndTime(dt);
    document.getElementById('du1-res-start').innerHTML = 'start of day: ' + startUnix;
    document.getElementById('du1-res-end').innerHTML = 'end of day: ' + endUnix;
}

function getUnixFromDate() {
    console.log(document.getElementById('parsedate').value);
    date = new Date(document.getElementById('parsedate').value);
    document.getElementById('date-to-unix-one').innerHTML = date.getTime()/1000;
}

function getStartTime(date) {
    date.setUTCHours('00');
    date.setUTCMinutes('00');
    date.setUTCSeconds('00');
    date.setUTCMilliseconds('00');

    return Math.round(date / 1000);
}

function getEndTime(date) {
    date.setUTCHours('23');
    date.setUTCMinutes('59');
    date.setUTCSeconds('59');
    date.setUTCMilliseconds('00');

    return Math.round(date / 1000);
}

function runScript(e,i) {
    if (e.keyCode === 13) {


        switch(i) {
            case 'unixtime':
                getTimeFromUnix()
                break;

            case 'startend':
                getStartEndUnix();
                break;

            case 'parsedate':
                getUnixFromDate();
                break;

            default:
                break;
        }
        return false;
    }
}