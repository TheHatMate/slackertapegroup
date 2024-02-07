window.onload = function () {

    getRandomSpinnerGif();
    
}

function getRandomSpinnerGif() {
    
    let rndNum = Math.floor(Math.random() * 66);

    document.getElementsByClassName("spinner")[0].innerHTML = '<img src="https://slackertapegroup.com/img/gifs/' + rndNum + '.gif" height="125"/>';
    document.getElementsByClassName("spinner")[1].innerHTML = '<img src="https://slackertapegroup.com/img/gifs/' + rndNum + '.gif" height="125"/>';
}