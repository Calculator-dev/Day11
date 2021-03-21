var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr) {
    var newMonitorList = [...arr];
    var monitorsList = [];

    for (var i = 0; i < newMonitorList.length; i++) {
        monitorsList.push([newMonitorList[i], i + 1]);
    }
    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;