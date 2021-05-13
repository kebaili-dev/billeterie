'use strict';


/* TODO :
 * Dans le champ select d'id concerts, créer les différentes options
 * basées sur le tableau des concerts ci-dessus
 * Utiliser document.createElement, document.createTextNode, appendChild etc.
 */
const concerts = [
    {
        title: 'Hans Zimmer',
        tickets: {
            normal: 120,
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

const htmlSelect = document.querySelector("#concerts");

let newsConcerts;

for (let i = 0; i < concerts.length; i++)
{
    newsConcerts = concerts[i].title;
    console.log(newsConcerts);
    
    const htmlOption = document.createElement("option");
    const content = document.createTextNode(newsConcerts);
    
    htmlSelect.appendChild(htmlOption);
    htmlOption.appendChild(content);
}








