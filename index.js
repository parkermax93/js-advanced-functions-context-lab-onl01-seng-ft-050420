/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = info => {
    const record = {
        firstName: info[0],
        familyName: info[1],
        title: info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record;
};

const createEmployeeRecords = array => {
    return array.map(e => createEmployeeRecord(e))
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
      type: "TimeIn",
      date: dateStamp.split(' ')[0],
      hour: parseInt(dateStamp.split(' ')[1])
    })
    return this;
  };

  function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
      type: "TimeOut",
      date: dateStamp.split(' ')[0],
      hour: parseInt(dateStamp.split(' ')[1])
    })
    return this;
  };

  function hoursWorkedOnDate(date){
      let timeIn = this.timeInEvents.find( e => e.date === date);
      let timeOut = this.timeOutEvents.find( e => e.date === date);
      let hours = (timeOut.hour - timeIn.hour)/100;
      return hours;
  };

  function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  };

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
};

function findEmployeeByFirstName(array, firstNameString){
    return array.find( e => e.firstName === firstNameString);
};

function calculatePayroll(array){
    let wages = array.map( e => allWagesFor.call(e));
    return wages.reduce( (acc, i) => {
        acc += i;
        return acc;
    }, 0)
}