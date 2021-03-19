var monitorsListArray = ["Apple", "Peach", "Berry"];


function myMonitorFunction(arr) {
    var newMonitorList = [...arr];
    var monitorsList = [];

    for (var i = 0; i < newMonitorList.length; i++){
        monitorsList.push([newMonitorList[i], i + 1]);
    }
    return monitorsList;
}

console.log(myMonitorFunction(monitorsListArray));
module.exports = myMonitorFunction;