function demarreCalc() {let choixuser = prompt("Voulez-vous :\n1 : Calculer le coût de la TVA ou Prix TTC\n2 : Calculer le prix hors taxes\n3 : Calculer le taux de la TVA")

    if (choixuser === null) {
        return;
    }
    else {
        choixuser=+choixuser
    }

    while (choixuser !== 1 && choixuser !== 2 && choixuser !== 3) {
    choixuser = +prompt("On recommence :\n1 : Calculer le coût de la TVA ou Prix TTC\n2 : Calculer le prix hors taxes\n3 : Calculer le taux de la TVA")
}
if (choixuser === 1) {
    calcCoutTVA()
}
if (choixuser === 2) {
    CalcprixHT()
}
if (choixuser === 3) {
    calcTauxTVA()
    
}
if (choixuser === null) {
    return;
}

}
