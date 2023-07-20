const characterPool = [ 
    abc = ["a", "b", "c", "d", "e", "f", "g", "h", " i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ABC = ["A", "B", "C", "D", "E", "F", "G", "H", " I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    others = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

]

let passwordParameters = [abcStatus = true, ABCstatus = true, numbersStatus = true, otherStatus = false, length = 12];

function generatePassword(){
    let password = "";
    for(i = 0; i < passwordParameters[4]; i++){

    }

}

const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

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
            }
            break
        default:
            length = a;
            document.getElementById("lengthInfo").innerText = "długość hasła: " + length;


    }
        
    }