var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
        } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';

        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};

xhr.open('GET', 'data/employees.json');
xhr.send();


// var x = new XMLHttpRequest();
// x.onreadystatechange = function () {
//     if (x.readyState === 4) {
//         var rooms = JSON.parse(x.responseText);
//         var sHTML = '<ul class="rooms">';
//         for (var i=0; i<rooms.length; i += 1) {
//             if (rooms[i].availability === true) {
//                 sHTML += '<li class="in">';
//         } else {
//                 sHTML += '<li class="out">';
//             }
//             sHTML += rooms[i].number;
//             sHTML += '</li>';

//         }
//         sHTML += '</ul>';
//         document.getElementById('roomList').innerHTML = sHTML;
//     }
// };

// xhr.open('GET', 'data/rooms.json');
// xhr.send();



var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4) {
        var rooms = JSON.parse(xhr2.responseText);
        var statusHTML2 = '<ul class="rooms">';
        for (var i=0; i<rooms.length; i += 1) {
            if (rooms[i].availability === "empty") {
                statusHTML2 += '<li class="in">';
        } else {
                statusHTML2 += '<li class="out">';
            }
            statusHTML2 += rooms[i].number;
            statusHTML2 += '</li>';

        }
        statusHTML2 += '</ul>';
        document.getElementById('roomList').innerHTML = statusHTML2;
    }
};

xhr2.open('GET', 'data/rooms.json');
xhr2.send();


