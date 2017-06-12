/**
 * Created by chiyo on 6/12/2017.
 */

returnDate = function() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = ((''+month).length<2 ? '0' : '') + month + '/' + ((''+day).length<2 ? '0' : '') + day + '/' + d.getFullYear();

    return output;
};

returnChores = function() {
    // hopefully change this later down the line to using csv, or even calling a remote server
    $.getJSON('./assets/json/chores.json', function(data) {
        tableGen(data);
    });
};

tableGen = function(data) {
    keys = Object.keys(data);

    var heading = "<p class='center-margin' style='color:gray; '> Date: " + data[keys[0]] + "</p>";

    var myTable= "<table class=\"center-margin\"><tr><td style='width: 100px; color: #ffd42a; border-bottom:1px solid #ffd42a;'>Chore</td>";
    myTable+= "<td style='width: 100px; color: #ffd42a; text-align: right; border-bottom:1px solid #ffd42a;'>Assignee</td>";

    for (key in keys) {
        if (key > 0){
            if (key%2 == 0) {
                myTable+="<tr style='color: gray; border-bottom:1px solid gray;'><td style='width: 100px;'>" + keys[key] + ":</td>";
            }
            else {
                myTable+="<tr style='color: gray; border-bottom:1px solid gray; background-color: #ffeeaa;'><td style='width: 100px;'>" + keys[key] + ":</td>";
            }
            myTable+="<td style='width: 100px; text-align: right;'>" + data[keys[key]] + "</td></tr>";
        }
    }
    myTable+="</table>";

    document.getElementById("choreTable").innerHTML = heading+myTable;
};

returnChores();