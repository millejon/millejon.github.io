document.addEventListener('DOMContentLoaded', bindSubmit);

// This function will be used to submit an asynchronous POST request. It will 
// display a success message upon submitting the membership form.
function bindSubmit () {
    document.getElementById('submit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var member = {name: null, email: null, birthday: null, streetAddress: null, 
            city: null, state: null, zipCode: null};

        // Retrieve the info submitted by the user.
        member.name = document.getElementById('name').value;
        member.email = document.getElementById('email').value;
        member.birthday = document.getElementById('birthday').value;
        member.streetAddress = document.getElementById('streetAddress').value;
        member.city = document.getElementById('city').value;
        member.state = document.getElementById('state').value;
        member.zipCode = document.getElementById('zipCode').value;

        // Reset the form
        document.getElementById('membershipForm').reset();

        req.open("POST", "http://httpbin.org/post", true);
        req.setRequestHeader('Content-Type', 'application/json');

        // This will make the request asynchronous.
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400) {
                // Convert the response back into a string.
                var response = JSON.parse(req.responseText);

                document.getElementById('welcomeMessage').textContent = "Welcome to the Platinum Club, " + response.json.name + "!";
            } else {
                console.log("Error in network request: " + req.statusText);
            }
        });

        // Convert the string into a JSON object to be sent.
        req.send(JSON.stringify(member));
        event.preventDefault();
    })
}

// This will get today's date, set it back to 1995, and display it in the header.
var currentDate = new Date();

var todayDate = currentDate.toLocaleString('default', {month: 'long'}) + ' ' + currentDate.getDate() + ', ' + (currentDate.getFullYear() - 26);

document.getElementById('todaysDate').textContent = "Today is " + todayDate + ".";