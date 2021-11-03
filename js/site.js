//Get the string from the page
function getValue(){

    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;   
    
    let returnObj = checkForPalindrome(userString);
    
    displayMessage(returnObj);
}


function checkForPalindrome(userString){

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
               
    }
if (revString == userString) {
returnObj.msg = "Well done! You entered a palindrome!"

}
else{
    returnObj.msg = "Sorry! You did not enter a palindrome!"
}

returnObj.reversed = revString;

return returnObj;

}


function displayMessage(returnObj){

//write to the page
document.getElementById("alertHeader").innerHTML = returnObj.msg;
document.getElementById("msg").innerHTML = `Your phrase reversed is ${returnObj.reversed}`;
document.getElementById("alert").classList.remove("invisible");
}