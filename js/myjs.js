fxActivePageShake = function() {
    // On cache tout puis on affiche la page index
    $('.screen').css("display", "none");
    $("#screen_one").css("display", "inherit");    
}; 

fxListeCocktails = function() {
    
// Liste des ingrédients par cocktail
    var tList = $('#templateListes').html();
    var tListHtml = Mustache.render(tList, compositions);
    $('#listeCompositions').append(tListHtml);

// Nom du cocktail
    var tNoms = $('#templateNom').html();
    var tNomsHtml = Mustache.render(tNoms, cocktails);
    $('#nomCocktail').append(tNomsHtml);
};

fxListeIngredients = function() {
    // Liste des ingrédients
    var tI = $('#templateIngredients').html();
    var tIHtml = Mustache.render(tI, ingredients);
    $('#listeIngredients').append(tIHtml);    
};

// Gestion du click sur ingrédients
fxClickZoneDrag = function() {
    $(document).on("click", "#style-drag", function() {

        // Déclarations
        var isInDropZone = $(this).parent().hasClass("slide-drop");
        var nbDropMax = 3;
        var nbDrop = $('#dropzone').find('li').length;
        var temp;

        // Si 3 ingrédients cliqués: exit
        if ((nbDrop >= nbDropMax) && (!isInDropZone)) {
            return;
        }

        if (isInDropZone) {
            // Si click dans la zone Drop alors coupe dans la zone ingredients
            temp = $(this).detach();
            temp.appendTo( "#listeIngredients" );
        } else {
            // Si click dans la zone ingrédients alors coupe dans la zone drop
            temp = $(this).detach();
            temp.appendTo( "#dropzone" );
        }
    });
};

// Gestion du click sur reload
fxClickReload = function() {
$(document).on("click", "#reload", function() {
    $('#dropzone').find('li').detach().appendTo( "#listeIngredients" );

});
};

// Gestion du menu
fxClickMenu = function() {
$(document).on("click", ".menu-bouton", function() {
    var screen = $(this).attr("id");

    // On cache toutes les pages
    $('.screen').css("display", "none");
    
    // On cache les classes active puis on ré-affiche la classe active sur le bouton selectionné
    $('.menu-bouton').removeClass('active');
    $(this).addClass('active');
    
    // On affiche la page qui correspond au click dans le menu
    switch (screen) {
      case "menu-shake":
        $("#screen_one").css("display", "inherit");
        break;
      case "menu-liste":
        $("#screen_two").css("display", "inherit");
        break;
      case "menu-fiche":
        $("#screen_three").css("display", "inherit");
        break;
}
});
};

//fxChargerIngredients = function() {
////     // On charge la liste des ingredients
//    $('#listeIngredients').html('<ul>');
//    var template = $('#templateIngredients').html();
//        for (var j = 0; j < ingredients.length; j++) {
//        // Attention, le id_categories n'est pas l'indice du tableau...
//        for (var cat = 0; cat < categories.length; cat++) {
//            if (ingredients[j].id_ingredients === categories[cat].id_ingredients) {
//                ingredients[j].ingredient = categories[cat].libelle;
//            }
//        }
//        // On adapte pour que la catégorie active soit prise en compte
//        // Sauf si categorieActive est à zéro => toutes
//        if ((categorieActive === 0) || (categorieActive === ingredients[j].id_categories)) {
//            // ne reste plus qu'à mustacher...
//            var output = Mustache.render(template, ingredients[j]);
//            $('#listeIngredients ul').append(output);
//        }
//    }
//};


// START APPLICATION, TOUJOURS LAISSER EN BAS
// START APPLICATION, TOUJOURS LAISSER EN BAS

$(function() {

    fxListeIngredients();
    fxClickZoneDrag();
    fxListeCocktails();
    fxActivePageShake();
    fxClickReload();
    fxClickMenu();
    //fxChargerIngredients();
});

