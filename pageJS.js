window.onload = function () {

    getRandomSpinnerGif();
    
}

function getRandomSpinnerGif() {
    
    let rndNum = Math.floor(Math.random() * 71);

    document.getElementsByClassName("spinner")[0].innerHTML = '<img class="spingif" src="https://slackertapegroup.com/img/gifs/' + rndNum + '.gif">';
    document.getElementsByClassName("spinner")[1].innerHTML = '<img class="spingif" src="https://slackertapegroup.com/img/gifs/' + rndNum + '.gif">';
}