const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordLength = 12
let b1 = document.getElementById("button-1")
let b2 = document.getElementById("button2")
function genPass() {
    let answer1 = randomPassword1()
let answer2 = randomPassword2()


function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function randomPassword1() {
    let password = ""
    for (i = 0; i < passwordLength; i++) {
        password += getRandomCharacter()
    }
    return password
}

function randomPassword2() {
    let password = ""
    for (i = 0; i < passwordLength; i++) {
        password += getRandomCharacter()
    }
    return password
}



b1.textContent = answer1
b2.textContent = answer2
}


//testEl.innerText = answer1
