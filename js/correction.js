'use strict';

/* TODO :
 * 1. Dans le champ select d'id concerts, créer les différentes options
 * basées sur le tableau des concerts ci-dessus
 * Utiliser document.createElement, document.createTextNode, appendChild etc.
 * 2. A chaque fois que l'on change la valeur du select (on sélectionne une autre option)
 * on met à jour le prix unitaire (celui dans les span) du tarif normal et du tarif réduit
 * 3. A chaque fois que je change la valeur du nombre de billets au tarif normal et tarif réduit (les 2 input)
 * on met à jour le prix total de la commande
 */

const concerts = [
    {
        title: 'Hans Zimmer',
        tickets: {
            normal: 119.9,
            reduced: 80
        }
    },
    {
        title: 'Disney',
        tickets: {
            normal: 60,
            reduced: 45
        }
    },
    {
        title: '2pac',
        tickets: {
            normal: 200,
            reduced: 150
        }
    },
    {
        title: 'Beyonce',
        tickets: {
            normal: 150,
            reduced: 100
        }
    }
];

// Constante contenant les éléments
const elements = {
    concerts: document.querySelector('#concerts'),
    normalPrice: document.querySelector('label[for="normal-price"] span'),
    reducedPrice: document.querySelector('label[for="reduced-price"] span'),
    normalQuantity: document.querySelector('#normal-price'),
    reducedQuantity: document.querySelector('#reduced-price'),
    totalPrice: document.querySelector('#totalHT')
};

/**
 * Création d'un élément html option
 * 
 * @param string text Le texte de l'option
 * @param HTMLElement select Le champ select auquel on veut rattacher l'option
 * @param int value La valeur de l'option
 */
 
 
function createOption(text, select, value)
{
    // Création d'un élément html option
    let option = document.createElement('option');
    
    // Création d'un texte pour un élément html
    let content = document.createTextNode(text);
    
    // Ajout du texte à l'option
    option.appendChild(content);
    
    // Ajouter le numéro du concert dans l'attribut value de l'option (option.value c'est l'attribut value de notre option html)
    option.value = value;
     // option.setAttribute('value', value); pareille que sa 
     
    // Ajout de l'option dans le select
    select.appendChild(option);
}

// Fonction qui met à jour le contenu textuel des spans
function updateUnitPrice()
{
    // Modification du span : on récupère la valeur du select (numéro du concert) 
    // et avec ça on récupère l'objet concert et les informations sur les tarifs
    elements.normalPrice.textContent = concerts[elements.concerts.value].tickets.normal.toFixed(2);
    elements.reducedPrice.textContent = concerts[elements.concerts.value].tickets.reduced.toFixed(2);
}

// Fonction qui est appelée lorsque l'on change la valeur du select (concerts)
function onSelectConcert()
{
    // Mise à jour du prix unitaire (span)
    updateUnitPrice();
    
    // Mise à jour du prix total 
    onChangeTicket();
}

// Code principal, appelé dès le chargement de la page
elements.concerts.addEventListener('change', onSelectConcert); 

elements.normalQuantity.addEventListener('change', onChangeTicket);
elements.reducedQuantity.addEventListener('change', onChangeTicket);

function onChangeTicket() 
{
    // 1. Récupérer la valeur des champs input
    let normalQuantity = Number(elements.normalQuantity.value);
    let reducedQuantity = Number(elements.reducedQuantity.value);
    
    // 2. Récupérer les tarifs unitaires
    let normalPrice = concerts[elements.concerts.value].tickets.normal;
    let reducedPrice = concerts[elements.concerts.value].tickets.reduced;
    
    // 3. Modifier le contenu textuel de l'élément total
    
    let totalPrice = (normalQuantity*normalPrice) +(reducedQuantity * reducedPrice);
    elements.totalPrice.textContent = totalPrice.toFixed(2);// ici toFixed(2) = deux chiffre après la virgule
    console.log(totalPrice);
    
}

// Parcourir la liste des concerts et créer autant d'options qu'il n'y a de concerts
for (let i = 0; i < concerts.length; i++) {
    // Création d'une option pour le concert parcouru
    // La valeur de l'option sera le numéro du concert
    createOption(concerts[i].title, elements.concerts, i);
}

// Au chargement de la page on récupère la valeur du concert sélectionné
updateUnitPrice();

// Mise à jour du prix au chargement de la page
onChangeTicket();