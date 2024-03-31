let currentScene = 0;

const story = document.getElementById('story');
const optionsDiv = document.getElementById('options');
const optionButtons = document.querySelectorAll('#options button');

const scenes = [
    {
        text: "Você acorda em sua nave espacial, pronto para explorar o desconhecido. Qual será sua primeira decisão?",
        options: [
            { text: "Explorar o planeta próximo.", nextScene: 1 },
            { text: "Verificar os sistemas da nave.", nextScene: 2 },
            { text: "Conversar com a inteligência artificial da nave.", nextScene: 3 },
            { text: "Analisar os arredores da nave.", nextScene: 4 }
        ]
    },
    {
        text: "Você aterrissa no planeta próximo e encontra uma civilização amigável. Eles oferecem tecnologia avançada em troca de ajuda. O que você faz?",
        options: [
            { text: "Aceitar a oferta e ajudar a civilização.", nextScene: 5 },
            { text: "Recusar e continuar explorando.", nextScene: 6 }
        ]
    },
    {
        text: "Você verifica os sistemas e encontra um problema crítico no motor de dobra. O que você faz?",
        options: [
            { text: "Tentar consertar o motor.", nextScene: 7 },
            { text: "Buscar por peças de reposição.", nextScene: 8 }
        ]
    },
    {
        text: "A inteligência artificial informa que detectou um sinal desconhecido vindo de um planeta próximo. O que você faz?",
        options: [
            { text: "Investigar o sinal.", nextScene: 9 },
            { text: "Ignorar o sinal e continuar a exploração.", nextScene: 10 }
        ]
    },
    {
        text: "em quanto você explora a nave, um fio desencapado encosta em você, e você acaba morrendo",
        options: []
    },
    {
        text: "Você continua explorando e descobre um planeta cheio de recursos valiosos. Sua jornada continua!",
        options: []
    },
    {
        text: "Você tenta consertar o motor, mas acaba piorando a situação. Agora você está preso neste planeta desconhecido.",
        options: []
    },
    {
        text: "Você parte em busca de peças de reposição e encontra um comerciante disposto a ajudar. Com o motor consertado, você continua sua jornada pelo espaço.",
        options: []
    },
    {
        text: "Você encontra peças e concerta sua nave e vai embora.",
    },
    {
        text: "Você descobre um planeta habitado por seres hostis. Sua nave é atacada e danificada.",
        options: []
    },
    {
        text: "Você ignora o sinal, mas logo depois é atacado por seres furiosos",
        options: []
    },
    {
        text: "Você procura por tecnologia alienígena e encontra um dispositivo de teletransporte. Com essa nova tecnologia, você pode explorar o espaço de maneira mais eficiente.",
        options: []
    }
];

function startGame() {
    currentScene = 0;
    showScene();
}

function choosePath(option) {
    currentScene = scenes[currentScene].options[option - 1].nextScene;
    showScene();
}

function showScene() {
    const scene = scenes[currentScene];
    story.textContent = scene.text;
    if (scene.options.length > 0) {
        optionsDiv.style.display = 'block';
        scene.options.forEach((option, index) => {
            optionButtons[index].style.display = 'inline-block';
            optionButtons[index].textContent = option.text;
        });
        for (let i = scene.options.length; i < optionButtons.length; i++) {
            optionButtons[i].style.display = 'none';
        }
    } else {
        optionsDiv.style.display = 'none';
    }
}

startGame();
