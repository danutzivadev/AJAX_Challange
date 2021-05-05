$(document).ready(function(){
    var url = "data/employees.json";
    $.getJSON(url, function(response){
        var statusHTML = '<ul class=bulleted>';
        $.each(response, function (index, employee) { 
        if (employee.inoffice === true) {
            statusHTML +='<li class="in">';
        } else {
            statusHTML +='<li class="out">';
        }
        statusHTML += employee.name + '</li>';  
        }); // $.each()
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    }); //end getJSON
}); // end ready

// rooms challange

    var urlr = "data/rooms.json";
    $.getJSON(urlr, function(response){
        var statusHTMLr = '<ul class=rooms>';
        $.each(response, function (index, rooms) { 
        if (rooms.availability === "empty") {
            statusHTMLr +='<li class="in">';
        } else {
            statusHTMLr +='<li class="out">';
        }
        statusHTMLr += rooms.number + '</li>';  
        }); // $.each()
        statusHTMLr += '</ul>';
        $('#roomList').html(statusHTMLr);
    }); //end getJSON
