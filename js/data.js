var types = {
table: [
	{id_types: 1, libelle: "Alcool"},
	{id_types: 2, libelle: "Soft"},
	{id_types: 3, libelle: "Aliment"}
]
};

var unites = {
table: [
	{id_unites: 1, libelle: "Unité"},
	{id_unites: 2, libelle: "ml"},
	{id_unites: 3, libelle: "cl"},
	{id_unites: 4, libelle: "Gramme"},
        {id_unites: 5, libelle: "Cuillere à soupe"},
        {id_unites: 6, libelle: "Cuillere à cafe"},
        {id_unites: 7, libelle: "Pincée"},
        {id_unites: 8, libelle: "Goutte"},
        {id_unites: 9, libelle: "Tranche"},
        {id_unites: 10, libelle: "Litre"}
]
};

var couleurs = {
table: [
	{id_couleurs: 1, libelle: "Blanc"},
	{id_couleurs: 2, libelle: "Bleu"},
	{id_couleurs: 3, libelle: "Jaune"},
	{id_couleurs: 4, libelle: "Marron"},
        {id_couleurs: 5, libelle: "Noir"},
        {id_couleurs: 6, libelle: "Orange"},
        {id_couleurs: 7, libelle: "Rose"},
        {id_couleurs: 8, libelle: "Rouge"},
        {id_couleurs: 9, libelle: "Transparent"},
        {id_couleurs: 10, libelle: "Vert"},
        {id_couleurs: 11, libelle: "Violet"}
]
};

var gouts = {
table: [
	{id_gouts: 1, libelle: "Amer"},
	{id_gouts: 2, libelle: "Corsé"},
	{id_gouts: 3, libelle: "Fruité"},
	{id_gouts: 4, libelle: "Sucré"},
        {id_gouts: 5, libelle: "Acidulé"},
        {id_gouts: 6, libelle: "Insolite"}
]
};

var categories = {
table: [
	{id_categories: 1, libelle: "Alcool"},
	{id_categories: 2, libelle: "Chaud"},
	{id_categories: 3, libelle: "Classique"},
	{id_categories: 4, libelle: "Sans alcool"},
        {id_categories: 5, libelle: "Shooter"}
]
};

var ingredients = {
table: [
    {id_ingredients: 1, libelle: "Loukoum à la rose"},
    {id_ingredients: 2, libelle: "Lait"},
    {id_ingredients: 3, libelle: "Vodka vanille"},
    {id_ingredients: 4, libelle: "Colorant alimentaire rouge"},
//    {id_ingredients: 5, libelle: "Pétale de rose"},
//    {id_ingredients: 6, libelle: "Vodka"},
//    {id_ingredients: 7, libelle: "Citron vert"},
//    {id_ingredients: 8, libelle: "Eau gazeuse"},
//    {id_ingredients: 9, libelle: "Barbe a papa"},
//    {id_ingredients: 10, libelle: "Sirop de fraise"},
//    {id_ingredients: 11, libelle: "Sirop d'épice"},
//    {id_ingredients: 12, libelle: "Crème liquide"},
//    {id_ingredients: 13, libelle: "Jus d'orange"},
//    {id_ingredients: 14, libelle: "Sirop de grenadine"},
//    {id_ingredients: 15, libelle: "Curacao bleu"},
//    {id_ingredients: 16, libelle: "Poivron rouge"},
//    {id_ingredients: 17, libelle: "Mangalore"},
//    {id_ingredients: 18, libelle: "Sirop de kiwi"},
//    {id_ingredients: 19, libelle: "Gin"},
//    {id_ingredients: 20, libelle: "Tequila"},
//    {id_ingredients: 21, libelle: "Sirop de basilic"},
//    {id_ingredients: 22, libelle: "Wisky"},
//    {id_ingredients: 23, libelle: "Sirop de sucre de canne"},
//    {id_ingredients: 24, libelle: "Truffe noire"},
//    {id_ingredients: 25, libelle: "Citron"},
//    {id_ingredients: 26, libelle: "Sirop d'abricot"},
//    {id_ingredients: 27, libelle: "Sucette sucre pétillant style 'crazy dips'"},
//    {id_ingredients: 28, libelle: "Avocat"},
//    {id_ingredients: 29, libelle: "Café en poudre"},
//    {id_ingredients: 30, libelle: "Sucre"},
//    {id_ingredients: 31, libelle: "Sirop de bubble gum"},
//    {id_ingredients: 32, libelle: "Vermouth blanc"},
//    {id_ingredients: 33, libelle: "Confiserie en forme d'oeil"},
//    {id_ingredients: 34, libelle: "Jus d'ananas"},
//    {id_ingredients: 35, libelle: "Sirop d'orgeat"},
//    {id_ingredients: 36, libelle: "Fraise"},
//    {id_ingredients: 37, libelle: "Mangue"},
//    {id_ingredients: 38, libelle: "Ananas"},
//    {id_ingredients: 39, libelle: "Yaourt nature"},
//    {id_ingredients: 40, libelle: "Miel"},
//    {id_ingredients: 41, libelle: "Jus de mangue"},
//    {id_ingredients: 42, libelle: "Jaune d'oeuf"},
//    {id_ingredients: 43, libelle: "Armagnac"},
//    {id_ingredients: 44, libelle: "Canelle"},
//    {id_ingredients: 45, libelle: "Huile de tournesol"},
//    {id_ingredients: 46, libelle: "Jus de tomate"},
//    {id_ingredients: 47, libelle: "Sel"},
//    {id_ingredients: 48, libelle: "Poivre"},
//    {id_ingredients: 49, libelle: "Piment d'espelette"},
//    {id_ingredients: 50, libelle: "Cognac"},
//    {id_ingredients: 51, libelle: "Ail"},
//    {id_ingredients: 52, libelle: "Sirop de miel"},
//    {id_ingredients: 53, libelle: "Sirop de gingembre"},
//    {id_ingredients: 54, libelle: "The noir"},
//    {id_ingredients: 55, libelle: "Vin rouge"},
//    {id_ingredients: 56, libelle: "Kirsh"},
//    {id_ingredients: 57, libelle: "Clou de girofle"},
//    {id_ingredients: 58, libelle: "Sirop d'érable"},

]
};

var cocktails = {
tableCocktails: [
	{
		id_cocktails: 1,
		nom: "Potion d'amnésie",
		preparation: "Hacher les loukoums en petits morceaux et les mettre dans une casserole, avec le lait. Faire mijoter jusqu’à ce qu'ils commencent à fondre. Verser dans un récipient et mélanger jusqu’à consistance lisse. Laisser refroidir, puis réserver au réfrigérateur. Une fois le mélange refroidi, verser dans un mélangeur et ajouter la Vodka et de la glace. Secouer. Vous pouvez garnir le verre avec les pétales de rose.",
		conseil: "",
		favori: "",
		id_couleurs: 7,
		id_gouts: 4,
		id_categories: 1
	}, {
		id_cocktails: 2,
		nom: "Atlantis",
		preparation: "Frapper les ingrédients au shaker avec des glaçons (sauf l'eau gazeuse et la barbe à papa). Verser le contenu du shaker dans le verre en filtrant la glace, complétez avec l'eau gazeuse et déposer le contenu d'un petit pot de 40 grammes de barba à papa (sans le compresser) sur le cocktail. Le contenu du pot de barbe à papa va disparaître en 5 secondes en aromatisant, en équilibrant le mélange en laissant la surface pétiller longuement. Un délice, et l'effet visuel est garanti.",
		conseil: "Servir dans un verre de type 'verre à martini'. N'hésitez pas à éveiller la curiosité de vos convives en leur proposant de déposer eux-même la barbe à papa dans le verre. ",
		favori: "",
		id_couleurs: 7,
		id_gouts: 4,
		id_categories: 1
}, {
		id_cocktails: 3,
		nom: "Baiser de feu",
		preparation: "Réaliser la recette au shaker. Frapper tous les ingrédients au shaker avec des glaçons et verser en retenant la glace.",
		conseil: "Servir dans un verre de type 'verre à martini'. Comme un baiser de feu: doux et hot à la fois. Encore meilleur sur le corps de votre partenaire. Laissez-vous envahir par l'ambiance sensuelle inexplicable qu'il provoque. La soirée ne fait que commencer...",
		favori: "",
		id_couleurs: 7,
		id_gouts: 2,
		id_categories: 1
}, {
                id_cocktails: 4,
		nom: "Rainbow Shot the Sheriff",
		preparation: "Recette pour 10 verres. Réaliser la recette au shaker. Dans le shaker, verser la grenadine, remplir de glaçons aux 2/3, verser la vodka et le jus d'orange. Finir de remplir le shaker de glaçons. Verser délicatement le curaçao (ne pas mélanger). Verser en filtrant dans tous les verres alignés sans vous arrêter.",
		conseil: "Servir dans un verre de type 'shooter'. La couleur du contenu de chaque verre sera différente en créant un très bel effet visuel dégradé de type arc-en-ciel d'un verre à l'autre. Ce cocktail est appelé aussi Rainbow Shot ou Double Rainbow.",
		favori: "",
		id_couleurs: [3,6,8,2,10],
		id_gouts: 3,
		id_categories: 5
}, {
		id_cocktails: 5,
		nom: "Spicy 5",
		preparation: "Réaliser la recette au shaker. Passer le poivron rouge à la centrifugeuse. Récupérer 3 cl de ce jus et le frapper avec le reste des ingrédients et des glaçons. Servir en filtrant.",
		conseil: "Servir dans un verre de type 'verre à martini'. Vous pouvez décorer d'un petit piment entaillé sur le bord du verre. Le Cocktail préféré de Vin Diesel.",
		favori: "",
		id_couleurs: 8,
		id_gouts: 2,
		id_categories: 5
}, {
		id_cocktails: 6,
		nom: "Kiwizz",
		preparation: "Réaliser la recette au shaker. Placer une tranche de citron vert dans le verre et saupoudrer avec une cuillère à sucre de sucre. Déposer une fesse de citron vert délicatement avec la paille de façon à créer une séparation hermétique. Frapper les ingrédients au shaker avec des glaçons et verser en filtrant sur d'autres glaçons placés au préalable dans le verre.",
		conseil: "Servir dans un verre de type 'tumbler'.  Décorer d'une tranche de citron vert sur le bord du verre. Une tranche de citron à libérer à mi-cocktail pour une finalité plus acidulée.",
		favori: "",
		id_couleurs: 10,
		id_gouts: 5,
		id_categories: 1
}, {
		id_cocktails: 7,
		nom: "Sperm",
		preparation: "Réaliser la recette directement dans le verre. Verser la tequila, la vodka et finir par verser délicatement la crème liquide qui se déposera au fond du verre.",
		conseil: "Servir dans un verre de type 'shooter'.  Un nom trash pour un cocktail trash.",
		favori: "",
		id_couleurs: 1,
		id_gouts: 2,
		id_categories: 5
}, {
		id_cocktails: 8,
		nom: "Fraise et son basilic",
		preparation: "Réaliser la recette au shaker. Frapper les ingrédients rapidement au shaker avec des glaçons et verser en retenant les glaçons.",
		conseil: "Servir dans un verre de type 'verre à martini'. Givrer le bord du verre au sirop de fraises et sucre. Placer une gousse de vanille en guise de touilleur.",
		favori: "",
		id_couleurs: 8,
		id_gouts: 4,
		id_categories: 3
}, {
		id_cocktails: 9,
		nom: "Truff'n sky",
		preparation: "Réaliser la recette au shaker. Broyer le morceau de truffe avec le jus du demi citron à l'aide d'un pilon. Placer la mixture obtenue dans le shaker avec des glaçons, le whisky et le sucre. Frapper énergiquement et verser en filtrant les glaçons.",
		conseil: "Servir dans un verre de type 'verre à martini'. Utiliser de préférence de la truffe noire.",
		favori: "",
		id_couleurs: 6,
		id_gouts: 6,
		id_categories: 1
}, {
		id_cocktails: 10,
		nom: "Shoot up",
		preparation: "Réaliser la recette directement dans le verre. Verser les ingrédients dans le verre et terminer par l'eau gazeuse bien fraîche. Sortir la sucette d'un sachet de sucre pétillant type 'crazy dips' et placer la dans le verre. Ecraser le sucre pétillant et répartisser-le sous la forme de deux rails. Servir accompagné d'une paille. Le consommateur aspirera le sucre pétillant par la bouche à l'aide de la paille, et une fois qu'il crépitera en bouche il dégustera le cocktail. Sensations uniques garanties.",
		conseil: "Servir dans un verre de type 'tumbler'.",
		favori: "",
		id_couleurs: 4,
		id_gouts: 5,
		id_categories: 1
}, {
		id_cocktails: 11,
		nom: "Pita",
		preparation: "Réalisez la recette au mixer. (Pour 7 verres) Peler l'avocat, retirer le noyau et mixer la moitié de l'avocat avec le sirop et le jus des citrons. Verser dans le shaker avec des glaçons et la tequila. Frapper et verser dans les verres en filtrant.",
		conseil: "Servir dans un verre de type 'verre à martini'. Givrer le bord du verre au sirop d'agave et au sucre.",
		favori: "",
		id_couleurs: 10,
		id_gouts: 6,
		id_categories: 1
}, {
		id_cocktails: 12,
		nom: "Astronaut",
		preparation: "Réaliser la recette directement dans le verre. Enduir l'une des faces du quartier de citron de sucre et l'autre de café en poudre. Verser la vodka très froide ayant séjourné au congélateur dans le verre, mordre dans le citron et avaler la vodka d'un trait. .",
		conseil: "Servir dans un verre de type 'shooter'.  Après avoir avalé, dîtes : Nazdorovye ! (à votre santé en russe)",
		favori: "",
		id_couleurs: 9,
		id_gouts: 2,
		id_categories: 5
}, {
		id_cocktails: 13,
		nom: "Martineye",
		preparation: "Réaliser la recette au shaker. Frapper les ingrédients au shaker avec des glaçons, verser dans le verre en retenant les glaçons et placer la confiserie en forme d'oeil afin qu'elle flotte à la surface du cocktail.",
		conseil: "Servir dans un verre de type 'verre à martini'. Givrer le bord du verre au sirop de fraises et sucre. Placer une gousse de vanille en guise de touilleur.",
		favori: "",
		id_couleurs: 7,
		id_gouts: 4,
		id_categories: 1
}, {
		id_cocktails: 14,
		nom: "Vendetta",
		preparation: "Réaliser la recette au mixer. Laver et equeuter les fraises. Mixer tous les ingrédients avec des glaçons, passer dans le verre et server rapidement. ",
		conseil: "Servir dans un verre de type 'verre tulipe'. Un cocktail pour avoir la bonne santé !",
		favori: "",
		id_couleurs: 8,
		id_gouts: [3,4],
		id_categories: 4
}, {
		id_cocktails: 15,
		nom: "Manganana",
		preparation: "Réaliser la recette 'Manganana' au mixer. Peler les fruits et les couper en morceaux. Mettre tous les ingrédients dans le mixer avec des glaçons. Bien réduire le tout en purée liquide et servir frais dans un grand verre!",
		conseil: "Servir dans un verre de type 'tumbler'. Vous pouvez rajouter de la glace pilée",
		favori: "",
		id_couleurs: 6,
		id_gouts: [3,4],
		id_categories: 4
}, {
		id_cocktails: 16,
		nom: "Han-Cock-Tail",
		preparation: "Réaliser la recette 'Han-cock-tail' directement dans le verre. Verser dans un grand verre à cocktail ou un verre à whisky, les jus de fruits. Sucrer et remuer délicatement. Ajouter lentement la grenadine qui va se déposer au fond du verre. Mettre un ou deux glaçons.",
		conseil: "Servir dans un verre de type 'flûte'. Décorer d'une brochette de kiwis et de fraises.",
		favori: "",
		id_couleurs: [6,4,8],
		id_gouts: [3,4],
		id_categories: 4
}, {
		id_cocktails: 17,
		nom: "Lait de poule à l'ancienne",
		preparation: "Réaliser la recette 'Lait de poule à l'ancienne' à la casserole. Chauffer le lait avec la cannelle dans une casserole. Mélanger le jaune d'œuf et le sucre pendant 4 à 5 mn. Ajouter au lait chaud en battant sans arrêt avec le fouet. Ajouter l'eau-de-vie, verser dans un verre à vin et boire chaud.",
		conseil: "Servir dans un verre de type 'verre à vin'. Bon pour le mal de gorge. Autre alternative, remplacer l'armagnac par le Borden Egg Nog. Placer une gousse de vanille en guise de touilleur.",
		favori: "",
		id_couleurs: 1,
		id_gouts: 6,
		id_categories: 2
}, {
		id_cocktails: 18,
		nom: "Cocktail du lendemain",
		preparation: "Dans un grand verre, versez quelques gouttes d′huile de tournesol (le verre doit avoir une bonne couche d′huile) puis mélangez deux grandes cuillères de jus de tomate, un jaune d′œuf, un peu de piment d′Espelette, du poivre, du sel, du jus de citron et dix à quinze gouttes de cognac. Remuez, serrez les dents et buvez TOUT d’un coup.",
		conseil: "",
		favori: "",
		id_couleurs: 6,
		id_gouts: 5,
		id_categories: 1
}, {
		id_cocktails: 19,
		nom: "Flu shot",
		preparation: "Mixer tous les ingrédients.",
		conseil: "",
		favori: "",
		id_couleurs: 3,
		id_gouts: 6,
		id_categories: 5
}, {
		id_cocktails: 20,
		nom: "Jagertee",
		preparation: "Mélanger les liquides et les épices. Porter à ébulition. Ajouter le sucre et laisser frissonner 5 minutes en mélangeant doucement. Rectifier l'assaisonnement si nécessaire, et servez chaud.",
		conseil: "Servir dans une tasse à café.  Le Jägertee est encore meilleur préparé avec 3 ou 4 volumes d’eau chaude, 1 volume de concentré de Jagatee et affiné avec du jus de citron ou d’orange pressé selon le goût. Attention il ne doit jamais bouillir, sinon les précieux arômes et extraits de plantes seront gâtés !",
		favori: "",
		id_couleurs: 4,
		id_gouts: 2,
		id_categories: 2
}, {
		id_cocktails: 21,
		nom: "Caribou",
		preparation: "Réaliser la recette dans un shaker. Verser directement dans le verre avec des glaçons et agiter.",
		conseil: "Servir dans un verre de type 'old fashioned'. Il s’agit d’une boisson canadienne traditionnelle.",
		favori: "",
		id_couleurs: 11,
		id_gouts: [1,2],
		id_categories: 1
}
]};

var compositions = {
tableCompositions: [
	{
	id_composition: 1,
        quantite: 6,
        id_cocktails: 1,
        id_ingredients: 1,
        id_unites: 1
	}, {
		id_composition: 2,
        quantite: 280,
        id_cocktails: 1,
        id_ingredients: 2,
        id_unites: 2
	}, {
		id_composition: 3,
        quantite: 35,
        id_cocktails: 1,
        id_ingredients: 3,
        id_unites: 2
	}, {
		id_composition: 4,
        quantite: 1,
        id_cocktails: 1,
        id_ingredients: 4,
        id_unites: 1
	}, {
		id_composition: 5,
        quantite: 1,
        id_cocktails: 1,
        id_ingredients: 5,
        id_unites: 1
	}, {
		id_composition: 6,
        quantite: 4,
        id_cocktails: 2,
        id_ingredients: 6,
        id_unites: 3
	}, {
		id_composition: 7,
        quantite: 2,
        id_cocktails: 2,
        id_ingredients: 7,
        id_unites: 3
	}, {
		id_composition: 8,
        quantite: 1,
        id_cocktails: 2,
        id_ingredients: 8,
        id_unites: 1
	}, {
		id_composition: 9,
        quantite: 40,
        id_cocktails: 2,
        id_ingredients: 9,
        id_unites: 4
	}, {
		id_composition: 10,
        quantite: 6,
        id_cocktails: 3,
        id_ingredients: 6,
        id_unites: 3
	}, {
		id_composition: 11,
        quantite: 1,
        id_cocktails: 3,
        id_ingredients: 10,
        id_unites: 3
	}, {
		id_composition: 12,
        quantite: 3,
        id_cocktails: 3,
        id_ingredients: 11,
        id_unites: 3
	}, {
		id_composition: 13,
        quantite: 3,
        id_cocktails: 3,
        id_ingredients: 12,
        id_unites: 3
	}, {
		id_composition: 14,
        quantite: 10,
        id_cocktails: 4,
        id_ingredients: 13,
        id_unites: 3
	}, {
		id_composition: 15,
        quantite: 3,
        id_cocktails: 4,
        id_ingredients: 6,
        id_unites: 3
	}, {
		id_composition: 16,
        quantite: 3,
        id_cocktails: 4,
        id_ingredients: 14,
        id_unites: 3
	}, {
		id_composition: 17,
        quantite: 2,
        id_cocktails: 4,
        id_ingredients: 15,
        id_unites: 3
	}, {
		id_composition: 18,
        quantite: 2,
        id_cocktails: 5,
        id_ingredients: 16,
        id_unites: 3
	}, {
		id_composition: 19,
        quantite: 0.5,
        id_cocktails: 5,
        id_ingredients: 7,
        id_unites: 1
	}, {
		id_composition: 20,
        quantite: 4,
        id_cocktails: 5,
        id_ingredients: 17,
        id_unites: 3
	}, {
		id_composition: 21,
        quantite: 5,
        id_cocktails: 5,
        id_ingredients: 6,
        id_unites: 3
	},
]};