
function getGithubInfo(username) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    // created xhttp request
    var xhttp = new XMLHttpRequest();
    const  url = "https://api.github.com/users/" + username;
    // making a Get request to github server//
    xhttp.open("GET", url, true);

    xhttp.onload = function () {
        var object = xhttp.responseText;
        var json = JSON.parse(object);

        if(xhttp.status == 200) {
            showUser(json)
        } else {
            noSuchUser(username);
        }

    }

    xhttp.send();
    return xhttp;
}
//2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
function showUser(user) {
    console.log(user);
// displaying users details,location,followers,user,avatar
    document.getElementById("profile").style.display = "block";
    document.getElementById("userId").innerHTML = user.login;
    document.getElementById("avatar_url").innerHTML = user.avatar_url;
    document.getElementById("location").innerHTML = user.location;
    document.getElementById("followers_url").innerHTML = user.followers_url;


}
//3. set the elements such that a suitable message is displayed
function noSuchUser(username) {

    document.getElementById("profile").style.display = "none";
    document.getElementById("error").style.display = "block";
    // when input is unkmown,display "username is not availaible
    document.getElementById("errorId").innerHTML = "The username given is not available in Github";

    }

$(document).ready(function () {
    document.getElementById("profile").style.display = "none";
    document.getElementById("error").style.display = "none";

    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            //$(this).val("");

            //get the user's information and store the response
             getGithubInfo(username);
        }
    })
});
