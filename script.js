let password = "";

const characterPool = [ 
    abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    others = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

]

let passwordParameters = [abcStatus = true, ABCstatus = true, numbersStatus = true, otherStatus = false, length = 12];

function generatePassword(){

    password = "";
    let choosenCharacterPool = [];

    for(i = 0; i < 4; i++){
        if(passwordParameters[i] == true){
            choosenCharacterPool = choosenCharacterPool.concat(characterPool[i]);
        }
    }

    for(i = 0; i < passwordParameters[4]; i++){
        let randomCharacter = choosenCharacterPool[Math.floor(Math.random() * choosenCharacterPool.length)];
        password += randomCharacter;
    }

    document.getElementById("result").value = password;

}

function changeStatus(a){
    if(passwordParameters[a] == true){
        passwordParameters[a] = false
    }
    else{
        passwordParameters[a] = true
    }
   }

function changeLength(a){
    switch(a){
        case "plus":
            if(length == 50){
                alert("maksymalna ilość znaków to 50");
            }
            else{
                length++;
                document.getElementById("lengthInfo").innerText = "długość hasła: " + length;
                document.getElementById("range").value = length;
                passwordParameters[4] = length;
                generatePassword()
            }
            break
        case "minus":
            if(length == 1){
                alert("minimalna ilość znaków to 1");
            }
            else{
                length--;
                document.getElementById("lengthInfo").innerText = "długość hasła: " + length;
                document.getElementById("range").value = length;
                passwordParameters[4] = length;
                generatePassword()
            }
            break
        default:
            length = a;
            document.getElementById("lengthInfo").innerText = "długość hasła: " + length;
            passwordParameters[4] = length;
            generatePassword()

        }
        
    }

    function copy(){
        navigator.clipboard.writeText(document.getElementById("result").value);
        alert("skopiowano hasło: " + document.getElementById("result").value);
    }

    function save(){

        document.getElementById("popup").style.zIndex = 1;
        document.getElementById("popup").style.opacity = 1;
        document.getElementById("hiddenInput").value = password;
    }

    generatePassword();