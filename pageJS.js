window.onload = function () {

    getRandomSpinnerGif();
    curTime();
    
}

function getRandomSpinnerGif() {
    
    let rndNum = Math.floor(Math.random() * 83);

    document.getElementsByClassName("spinner")[0].innerHTML = '<img class="spingif" src="https://slackertapegroup.com/img/gifs/' + rndNum + '.gif">';
    document.getElementsByClassName("spinner")[1].innerHTML = '<img class="spingif" src="https://slackertapegroup.com/img/gifs/' + rndNum + '.gif">';
}