let listeQuestions = [
    {
        question: "Sortir les cheveux mouillés quand il fait froid rend malade",
        reponse: false,
        explication: "On tombe malade à cause des virus, pas du froid.",
        explicationMauvaiseReponse: 'On tombe malade à cause des virus, pas du froid.'
    },
    {
        question: "Craquer ses doigts provoque de l'arthrite",
        reponse: false,
        explication: "Aucune étude ne montre de lien avec l'arthrite."
    },
    {
        question: "Il est possible d’attraper un coup de soleil par temps froid",
        reponse: true,
        explication: "Les UV sont présents même en hiver."
    },
    {
        question: "La Terre est ronde",
        reponse: true,
        explication: "C'est démontré scientifiquement depuis l’Antiquité."
    }
]


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