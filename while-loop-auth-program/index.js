let loggedIn = false;
let username;
let password;

while (!loggedIn) {

    username = window.prompt(`enter your username`);
    password = window.prompt(`enter your password`);

    if (username === "USERNAME" && password === "PASSWORD") {

        loggedIn = true;
        console.log("you are logged in ");
        
    }
    else{
        console.log("invalid credentials");
    }
    
}