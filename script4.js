function retourDe() {
    $("#resultat").html("");
    $("#legende button").prop("disabled", true);
    $("#instructions").text("La quantité que vous souhaitez de convertir est en quelle unité?");
    $("#paveGauche button").prop("disabled", false);
    $("#paveNum button").prop("disabled", true);
    $("#paveDroite button").prop("disabled", true);
    $("#memoire").html("");
    $("#uniteChoisie").html("");
    $("#memoire2").html("");
}

function retourUnite() {
    $("#resultat").html("");
    $("#legende button:nth-child(2)").prop("disabled", true)
    $("#paveNum button").prop("disabled", false);
    $("#paveDroite button").prop("disabled", true);
    $("#memoire2").html("");
}

function entree(multiple, unite, unites) {
    $("#paveNum button").prop("disabled", false);
    $("#paveGauche button").prop("disabled", true);
    $("#instructions").text("Sélectionnez la quantité à convertir et choisissez votre unité décimale de choix.");
    $("#memoire").html(multiple);
    $("#uniteChoisie").html(unites);
    $("#legende button:first-child").prop("disabled", false)
}

function num(chiffre) {
    $("#resultat").text($("#resultat").text() + chiffre);
    $("#paveDroite button").prop("disabled", false);
    if ($("#resultat").html().length > 11) {
        $("#resultat").css("font-size", "18px")
    } else {
        $("#resultat").css("font-size", "30px")
    }
};

function numZero() {
    if ($("#resultat").text() != "") {
        $("#resultat").text($("#resultat").text() + 0);
    }
    if ($("#resultat").html().length > 11) {
        $("#resultat").css("font-size", "18px")
    }
}

function numDec() {
    if ($("#resultat").text() == "") {
        $("#resultat").text("0.");
    } else {
        $("#resultat").text($("#resultat").text() + ".")
    }
    $("#virgule").prop("disabled", true)
}

function numC() {
    $("#resultat").text("");
    $("#resultat").css("font-size", "30px")
    $("#virgule").prop("disabled", false);
    $("#paveDroite button").prop("disabled", true)
}

function sortieML() {
    if ($("#memoire2").html() == "") {
        $("#memoire2").html($("#resultat").text());
    }
    $("#resultat").html($("#memoire").html() * $("#memoire2").html() + " mL");
    if ($("#resultat").html().length > 11) {
        $("#resultat").css("font-size", "18px")
    } else {
        $("#resultat").css("font-size", "30px")
    }
    $("#paveNum button").prop("disabled", true);
    $("#legende button:nth-child(2)").prop("disabled", false);
    $("#paveDroite button:first-child").prop("disabled", true);
    $("#paveDroite button:last-child").prop("disabled", false);
}

function sortieL() {
    if ($("#memoire2").html() == "") {
        $("#memoire2").html($("#resultat").text());
    }
    $("#resultat").html($("#memoire").html() * $("#memoire2").html() / 1000 + " L");
    if ($("#resultat").html().length > 11) {
        $("#resultat").css("font-size", "18px")
    } else {
        $("#resultat").css("font-size", "30px")
    }
    $("#paveNum button").prop("disabled", true);
    $("#legende button:nth-child(2)").prop("disabled", false);
    $("#paveDroite button:last-child").prop("disabled", true);
    $("#paveDroite button:first-child").prop("disabled", false);
}