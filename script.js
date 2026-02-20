
let listeQuestions = [
    {
        question: "Sortir les cheveux mouillés quand il fait froid rend malade",
        reponse: false,
        explication: "Ah oui, parce que tes cheveux en mode serpillière glacée vont magiquement invoquer un virus du rhume ? Pathétique. Le rhume vient de virus (rhinovirus et compagnie), pas d'une petite baisse de température locale. Des décennies d'études, dont des revues par Mayo Clinic, CDC et revues systématiques, montrent zéro lien causal entre sortir mouillé et tomber malade – c'est juste une excuse pour ta flemme hivernale. Assume que ton nez qui coule vient de tes contacts avec des pestiférés, pas de ta coiffure ratée.",
        explicationMauvaiseReponse: "Tu crois vraiment que Mère Nature punit les cheveux humides ? C'est adorablement médiéval. Va te sécher la tête… et les neurones."
    },
    {
        question: "Craquer ses doigts provoque de l'arthrite",
        reponse: false,
        explication: "Ton oncle qui te menace depuis l'école primaire avec cette ânerie mérite une médaille pour persévérance dans la bêtise. L'expérience la plus célèbre ? Donald Unger qui s'est craqué une main pendant 50 ans et l'autre jamais : zéro arthrite en plus (Arthritis & Rheumatology, 1998). Des revues et études ultérieures confirment : aucun lien prouvé. Le seul dégât, c'est le bruit agaçant et ta réputation de gamin qui cherche l'attention. Bravo pour cette contribution zéro à la science.",
        explicationMauvaiseReponse: "C'est ça, continue de croire que tes articulations vont se venger comme dans un film de kung-fu. Craque plutôt tes certitudes moisies."
    },
    {
        question: "Il est possible d’attraper un coup de soleil par temps froid",
        reponse: true,
        explication: "Oui, même avec des glaçons dans la barbe et un bonnet ridicule, les UV te grillent la peau sans pitié. La neige réfléchit jusqu'à 80 % des rayons UV (Skin Cancer Foundation, études NIH et NASA), doublant presque l'exposition – et en altitude c'est pire. Les UVB baissent un peu, mais les UVA restent costauds toute l'année. Croire que le froid annule le soleil, c'est comme penser que ton pull protège des microbes. Mets de la crème, clown des neiges, ou prépare-toi à ressembler à une langouste ébouillantée en juillet.",
        explicationMauvaiseReponse: "T'as oublié la crème solaire parce que 'il fait -5°C' ? Brillant. Profite bien de ton futur cancer de la peau vintage hiver 2026."
    },
    {
        question: "La Terre est ronde",
        reponse: true,
        explication: "Depuis 240 av. J.-C., Ératosthène a mesuré la circonférence avec un bâton et des ombres, précision bluffante à ~2 %. Ajoute les photos satellites, le GPS, la gravité, les éclipses lunaires et les orbites : tout hurle 'sphère'. Les platistes d'aujourd'hui ? Des victimes collatérales de YouTube et d'un QI en chute libre. NASA, ESA et des siècles de physique observationnelle confirment : la Terre est ronde, point barre. Continuer à nier, c'est juste pathétique à l'ère des smartphones.",
        explicationMauvaiseReponse: "Ah ouais, 'l'eau est plate donc la Terre aussi' ? Va acheter un globe et arrête de te ridiculiser, dinosaure intellectuel."
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