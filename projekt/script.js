function openPop() { //Skapar en funktion, namn vid openPopup
    const popDialog = //Gör en variabel som heter const, det betyder att ingen information ändras i variabeln
        document.getElementById(
            "popupDialog" //Hämta ID "popupDialog", för att kunna göra ändringar
        );
    popDialog.style.visibility = //Går in i CSS och ändrar på "visibility", Varje gång man trycker så blir det antingen 
    //positivt eller negativt. Det börjar negativt eftersom det är startpunkten i CSS och då syns det ej.
        popDialog.style.visibility ===
        "visible"
            ? "hidden"
            : "visible";
} //https://www.geeksforgeeks.org/how-to-open-a-popup-on-click-using-javascript/ Hittade scriptet där och modiferar det. Mest med CSS kod.