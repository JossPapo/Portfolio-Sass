
// LE CARRE D'UN NOMBRE

document.getElementById("nb").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        calculateCarre();
    }
})

document.getElementById("submit").addEventListener('click', () => {
    //console.log("envoyé");
    calculateCarre();
});

function calculateCarre() {
    const nombre = document.getElementById("nb").value;
    let double = (nombre * nombre);
    if (!isNaN(nombre) && nombre != "") {
        let result = document.querySelector(".answer");
        result.innerHTML = `le carré de ce nombre est ${double}`;
    } else {
        alert("veuillez entrer un nombre");
    }
}


// LA SOMME DE DEUX NOMBRES

document.getElementById("submitSum").addEventListener('click', () => {
    console.log("envoyé");
    calculateSum();
});

function calculateSum() {
    const one = parseFloat(document.getElementById("nb1").value);   // parseFloat Sinon concatenation de chaine de caractères
    const two = parseFloat(document.getElementById("nb2").value);

    let somme = (one + two);

    if (!isNaN(somme) && somme != "") {
        let result = document.getElementById("sum");
        result.innerHTML = `la somme de ces deux nombres est ${somme}`;
    } else {
        alert("veuillez entrer des nombres");
    }
}



// LES NOMBRES PAIRES

document.getElementById("nbP").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        calculatePaires();
    }
})

document.getElementById("submitP").addEventListener('click', () => {
    //console.log("submitP cliqué");
    calculatePaires();
});

function calculatePaires() {
    let nombrePaire = parseInt(document.getElementById("nbP").value);
    let result = document.getElementById("resultP")
    //console.log("resultP")
    let paires = "";
    if (!isNaN(nombrePaire) && nombrePaire != "") {
        for (i = 1; i < nombrePaire; i++)
            if (i % 2 === 0) {
                paires += i + " , ";
                //console.log(i);
                result.innerHTML = `les nombres paires entre 1 et ${nombrePaire} sont ${paires}`;
            }
    } else {
        alert("veuillez entrer un nombre");
    }
}



// Tables de multiplication

document.getElementById("numberX").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        multiplication();
    }
})

document.getElementById("submitTx").addEventListener('click', () => {
    //console.log("cliqué");
    multiplication();
})

function multiplication() {
    resultTable.innerHTML = ""; //Permet d'éviter les doublons à chaque click 
    let nbrX = parseInt(document.getElementById("numberX").value);
    if (!isNaN(nbrX) && nbrX != "") {
        for (i = 1; i <= 10; i++) {
            let table = nbrX * i;
            resultTable.innerHTML += `${nbrX} x ${i} = ${table}<br> `;
        }
    } else {
        alert("veuillez entrer un nombre");
    }
}