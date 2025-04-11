
function calcCoutTVA() {let prixHT = +prompt("Quel est le prix HT ?")
let tauxTVA = +prompt("Quel est le taux de TVA ?")

//Calcul de la TVA en fonction du taux
function calculTVA(prixHT, tauxTVA) {
    let prixTVA = (prixHT*tauxTVA/100)
    return prixTVA
}

let coutTVA = calculTVA(prixHT,tauxTVA)
let prixTTC = coutTVA + prixHT

//Affichage final
let message = ("Pour un prix HT de " + prixHT + "€ et avec une TVA de " + tauxTVA +"% :\nLa TVA coûte : " + coutTVA.toFixed(2) + "€\nLe prix TTC sera de " + prixTTC.toFixed(2) + "€")
document.getElementById("result").innerText = message}