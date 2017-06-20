/**
 * Created by chiyo on 6/12/2017.
 */

returnDate = function() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    return ((''+month).length<2 ? '0' : '') + month + '/' + ((''+day).length<2 ? '0' : '') + day + '/' + d.getFullYear();
};

returnWeek = function() {
    var curr = new Date();
    var first = curr.getDate() - curr.getDay() + 1;

    var firstDay = new Date(curr.setDate(first));

    var month = firstDay.getMonth() + 1;
    var day = firstDay.getDate();
    return ((''+month).length<2 ? '0' : '') + month + '/' + ((''+day).length<2 ? '0' : '') + day + '/' + firstDay.getFullYear();
};

returnChores = function() {
    // hopefully change this later down the line to using csv, or even calling a remote server
    $.getJSON('./assets/json/chores.json', function(data) {
        tableGen(data);
    });
};

tableGen = function(data) {

    var currentData = {'  ':'Chores Not Found'};
    for (datum in data) {
        if (data[datum]['Date'] == returnWeek()) {
            currentData = data[datum];
            break;
        }
    }

    data = currentData;

    data['Date']=returnWeek();

    keys = Object.keys(data);

    var heading = "<p class='center-margin' style='color:gray; '> Date: " + returnDate() + "</p>" + "</br><p class='center-margin' style='color:gray; '>Week of: " + returnWeek() + "</p>";

    var myTable= "<table class=\"center-margin\"><tr><td style='width: 100px; color: #ffd42a; border-bottom:1px solid #ffd42a;'>Chore</td>";
    myTable+= "<td style='width: 100px; color: #ffd42a; text-align: right; border-bottom:1px solid #ffd42a;'>Assignee</td>";

    var index = keys.indexOf('Date');
    keys.splice(index,1);

    for (key in keys) {
        if (key%2 == 0) {
            myTable+="<tr style='color: gray; border-bottom:1px solid gray;'><td style='width: 100px;'>" + keys[key] + ":</td>";
        }
        else {
            myTable+="<tr style='color: gray; border-bottom:1px solid gray; background-color: #ffeeaa;'><td style='width: 100px;'>" + keys[key] + ":</td>";
        }
        myTable+="<td style='width: 100px; text-align: right;'>" + data[keys[key]] + "</td></tr>";
    }
    myTable+="</table>";

    document.getElementById("choreTable").innerHTML = heading+myTable;
};

returnChores();