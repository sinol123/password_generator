let length = 12;

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