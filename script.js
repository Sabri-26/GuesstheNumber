// Le jeu choisira un nombre aléatoire entre 1 et 10 (inclus)T
// 9T Tu as trois essais pour deviner ce nombre
// FT Utilise la fonction prompt() pour saisir ta proposition de 
// nombreT
// 3T Si ton nombre est égal au nombre mystère, tu gagnes !  
// Sinon tu dois retenter ta chance. Au bout de trois essais, tu 
// as perd u et le jeu recommen



let nombre = Math.floor(Math.random()*10)+1;
for (let index = 0; index <3; index++) {
    let bleu = prompt("choisi un npmbre entre 1 et 10");
    if (nombre === bleu) {
        alert("tu a gagné !")
        
    } else {
       alert("tu a perdue !")
    }
    if (index === 2) {
        alert("le nombre etai : "+nombre)
        
    }
    
}

