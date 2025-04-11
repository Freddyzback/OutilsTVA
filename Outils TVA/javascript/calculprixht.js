function CalcprixHT() { let prixTTC2 = +prompt("Quel est le prix TTC ?")
console.log(prixTTC2)
let tauxTVA2 = +prompt("Quel est le taux de TVA ?")
console.log(tauxTVA2)

function calculprixHT(prixTTC2,tauxTVA2) {
     let prixHT2 = (prixTTC2*100)/(100 + tauxTVA2);
    return prixHT2;
}
let prixHT1 = calculprixHT(prixTTC2, tauxTVA2)

    let message = ("Pour un prix TTC de " + prixTTC2 + "€ et avec une TVA de " + tauxTVA2 + "%,\nle prix HT est de " + prixHT1.toFixed(2) + " €")
    document.getElementById("result").innerText = message }