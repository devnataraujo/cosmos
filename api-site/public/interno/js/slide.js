var content = 1;
    function voltar(){
        content = content - 1;
        var cont = document.getElementById('teste');
        var go = document.getElementById("go");
        var back = document.getElementById("back");
        // condicionais
        if(content == 1){
            result.innerHTML = "1";
            back.disabled = true;
            netuno.style.display = "block";
            urano.style.display = "none";
        }
        else if(content == 2){
            result.innerHTML = "2";
            go.disabled = false;
            netuno.style.display = "none";
            urano.style.display = "block";
            saturno.style.display = "none";
        }
        else if(content == 3){
            result.innerHTML = "3";
            go.disabled = false;
            urano.style.display = "none";
            saturno.style.display = "block";
            jupiter.style.display = "none";
        }
        else if(content == 4){
            result.innerHTML = "4";
            go.disabled = false;
            saturno.style.display = "none";
            jupiter.style.display = "block";
            marte.style.display = "none";
        }
        else if(content == 5){
            result.innerHTML = "5";
            go.disabled = false;
            jupiter.style.display = "none";
            marte.style.display = "block";
            terra.style.display = "none";
        }
        else if(content == 6){
            result.innerHTML = "6";
            go.disabled = false;
            marte.style.display = "none";
            terra.style.display = "block";
            venus.style.display = "none";
        }
        else if(content == 7){
            result.innerHTML = "7";
            go.disabled = false;
            venus.style.display = "block";
            mercurio.style.display = "none";
        }
        else if(content == 8){
            result.innerHTML = "8";
            go.disabled = false;
            venus.style.display = "none";
            mercurio.style.display = "block";
            sol.style.display = "none";
        }
        else if(content == 9){
            result.innerHTML = "9";
            go.disabled = false;
            mercurio.style.display = "none";
            sun.style.display = "block";
        }
        else{
            result.innerHTML = "1"
        }

        if(content == 9){
            cont.style.backgroundImage = 'url("./assets/backSol.png")';
        }else{
            cont.style.backgroundImage = 'url("./assets/background.png")';
        }

    }
    function ir(){
        content = content + 1;
        var cont = document.getElementById('teste');
        var back = document.getElementById("back");
        var go = document.getElementById("go");
        

        if(content == 1){
            result.innerHTML = "1";
            back.disabled = false;
            netuno.style.display = "block";
            urano.style.display = "none"
        }
        else if(content == 2){
            result.innerHTML = "2";
            back.disabled = false;
            netuno.style.display = "none";
            urano.style.display = "block";
            saturno.style.display = "none";
        }
        else if(content == 3){
            result.innerHTML = "3"
            back.disabled = false;
            urano.style.display = "none";
            saturno.style.display = "block";
            jupiter.style.display = "none";
        }
        else if(content == 4){
            result.innerHTML = "4";
            back.disabled = false;  
            saturno.style.display = "none";
            jupiter.style.display = "block";
            marte.style.display = "none";
        }
        else if(content == 5){
            result.innerHTML = "5";
            back.disabled = false;
            jupiter.style.display = "none";
            marte.style.display = "block";
            terra.style.display = "none";
        }
        else if(content == 6){
            result.innerHTML = "6";
            back.disabled = false;
            marte.style.display = "none";
            terra.style.display = "block";
            venus.style.display = "none";
        }
        else if(content == 7){
            result.innerHTML = "7";
            back.disabled = false;
            terra.style.display = "none";
            venus.style.display = "block";
            mercurio.style.display = "none";

        }
        else if(content == 8){
            result.innerHTML = "8";
            back.disabled = false;
            venus.style.display = "none";
            mercurio.style.display = "block";
            sun.style.display = "none";
            
        }
        else if(content == 9){
            result.innerHTML = "9";
            go.disabled = true;
            mercurio.style.display = "none";
            sol.style.display = "block";
        }
        else{
            result.innerHTML = "1";
            urano.style.display = "none";
        }

        if(content == 9){
            cont.style.backgroundImage = 'url("./assets/backSol.png")';
        }else{
            cont.style.backgroundImage = 'url("./assets/background.png")';
        } 

    }