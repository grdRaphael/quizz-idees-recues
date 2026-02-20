
let listeQuestions = [
    {
        question: "Sortir les cheveux mouillés quand il fait froid rend malade",
        reponse: false,
        explication: "T'es pas malade parce que t'as les cheveux trempés, t'es malade parce que t'as serré la main d'un gamin qui tousse comme un vieux diesel. Les virus s'en battent les couilles du froid. Source : revue The Lancet 2015 + meta-analyse Cochrane 2020 – zéro lien température/humidité et rhume. T'as juste un système immunitaire de merde, assume.",
        explicationMauvaiseReponse: "Non mais sérieux, tu crois vraiment que tes cheveux mouillés vont te filer la grippe ? T'es con ou t'as juste besoin d'une excuse pour pas sortir ?"
    },
    {
        question: "Craquer ses doigts provoque de l'arthrite",
        reponse: false,
        explication: "Ton oncle qui te gueule 'arrête tu vas te péter les articulations' depuis 30 ans ? Il ment. Une étude de 1998 (Donald Unger, le mec qui s'est craqué UNE SEULE main pendant 50 ans) + méta-analyse Arthritis & Rheumatology 2011 : zéro corrélation. T'as juste l'air d'un débile qui fait du bruit avec ses doigts pour impressionner les filles. Bravo, champion.",
        explicationMauvaiseReponse: "Ah ouais, t'as cru que c'était comme un sort vaudou ? Va plutôt craquer ton cerveau, ça te ferait du bien."
    },
    {
        question: "Il est possible d’attraper un coup de soleil par temps froid",
        reponse: true,
        explication: "Même si t'as la tronche bleue de froid, les UV te niquent la peau pareil. Réflexion sur la neige = +80% d'UV, étude Journal of Investigative Dermatology 2017 + NASA 2022 (oui, ils mesurent ça avec des satellites, pas avec une vieille loupe). T'as juste l'air d'un vampire qui prend des bains de soleil en slip de ski. Ridicule.",
        explicationMauvaiseReponse: "T'as jamais entendu parler des crèmes solaires en hiver ? T'es pas un ours polaire, t'es un humain qui va finir avec une tête de tomate surgelée."
    },
    {
        question: "La Terre est ronde",
        reponse: true,
        explication: "Depuis qu'Ératosthène a mesuré l'ombre d'un bâton en 240 av. J.-C. et calculé le rayon à 2% près, on sait. Photos satellites, GPS, gravité, tout confirme. Les platistes ? Juste des losers qui ont raté leurs cours de 5e et qui se branlent sur des vidéos YouTube filmées avec un Nokia 3310. Source : NASA, ESA, et tous les satellites qui te trackent pendant que tu pleures dans ton lit.",
        explicationMauvaiseReponse: "T'es vraiment du genre à croire que la Terre est plate parce que 'l'eau reste droite' ? Va voir un psy, ou au moins un globe terrestre, espèce de troglodyte."
    }
];


let zoneQuestion = document.querySelector('.zoneQuestion span')
let zoneExplication = document.querySelector('.zoneExplication')
let buttonTrue = document.getElementById('buttonTrue')
let buttonFalse = document.getElementById('buttonFalse')
let bouttonSuivant = document.querySelector('.bouttonSuivant')
let i = 0

// Affiche la question suivant apres chaque clique sur le boutton suivant
function afficherQuestion() {
    bouttonSuivant.addEventListener('click', () => {
        i++
        zoneQuestion.textContent = listeQuestions[i].question
        bouttonSuivant.classList.add('hidden')
        zoneExplication.classList.add('hidden')
        // Faire apparaitre les boutons vrai / faux
        buttonFalse.classList.remove('hidden')
        buttonTrue.classList.remove('hidden')
    })
}

zoneExplication.classList.add('hidden')
zoneQuestion.textContent = listeQuestions[i].question
afficherQuestion()
bouttonSuivant.classList.add('hidden')

let responseUser = null
function verifierReponse() {
    console.log(responseUser)
}

buttonFalse.addEventListener('click', () => {
    responseUser = false
    verifierReponse(responseUser)
    afficherExplication()
    bouttonSuivant.classList.remove('hidden')
    zoneExplication.classList.remove('hidden')
    //Cacher les boutons vrai et faux :
    buttonFalse.classList.add('hidden')
    buttonTrue.classList.add('hidden')

})

buttonTrue.addEventListener('click', () => {
    responseUser = true
    verifierReponse(responseUser)
    afficherExplication()
    bouttonSuivant.classList.remove('hidden')
    zoneExplication.classList.remove('hidden')
    //Cacher les boutons vrai et faux :
    buttonFalse.classList.add('hidden')
    buttonTrue.classList.add('hidden')

})

let explication = document.querySelector(".zoneExplication p")
function afficherExplication() {
    if (responseUser === listeQuestions[i].reponse) {
        explication.textContent = `Bonne réponse !
    ${listeQuestions[i].explication}`
    } else {
        explication.textContent = `Mauvaise réponse !
    ${listeQuestions[i].explication}`
    }
}