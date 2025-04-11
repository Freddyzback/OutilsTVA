function calcTauxTVA() {let prixHT = +prompt('Quel est le prix HT ?')
let prixTTC = +prompt('Quel est le prix TTC ?')
while (prixTTC < prixHT) {
    prixTTC = +prompt('Quel est le prix TTC ?')
}

function calcultauxTVA(prixHT,prixTTC) {
let resultatTauxTVA = ((prixTTC-prixHT)/(prixHT)*100)
return resultatTauxTVA }
let resultatTauxTVA1 = calcultauxTVA(prixHT,prixTTC)
let message = ("Si le prix HT est de " + prixHT + "€ et le prix TTC est de " + prixTTC + "€, alors le taux de TVA est de : " + resultatTauxTVA1.toFixed(2) + "% ")
document.getElementById("result").innerText = message
}
