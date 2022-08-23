//get-episode-number
var episodeNumber = "01";
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
if(urlParams.get('episode')) episodeNumber = urlParams.get('episode');

var button_ep_now = "ButtonEp" + episodeNumber;
console.log(button_ep_now);
document.getElementById(button_ep_now).className += " numEp-bold";

//change-episode
function changeEpisodeNumber(number){
    let numberPath = window.location.pathname + '?episode=' + number;
    window.location.href = numberPath;
}

//change-list
function getListNow(number_next){
    for(let i = 1; i < 100000; i+=50){
        let j = i + 50 - 1;
        if (i <= number_next && j >= number_next)
            return i.toString() + '-' + j.toString();
    }

}
let number_now = parseInt(episodeNumber);
let list_now = getListNow(number_now);
document.getElementById(list_now).style.display = "block";
function nex50() {
    if (number_now >= 151) return;
    document.getElementById(list_now).style.display = "none";
    list_now = getListNow(number_now+=50);
    document.getElementById(list_now).style.display = "block";
}

function bef50() {
    if (number_now <= 50) return;
    document.getElementById(list_now).style.display = "none";
    list_now = getListNow(number_now -= 50);
    document.getElementById(list_now).style.display = "block";
}


//change-link
document.getElementById('PreviewPicture').content = "/images/show/HinaAi-preview/HinaAi" + episodeNumber + ".png";
document.getElementById('EpisodeTitle').innerHTML = eval('TI' + episodeNumber);
document.getElementById('EpisodeName').innerHTML = eval('TI' + episodeNumber);

let LinkDL_raw = eval('DL' + episodeNumber).split('/');
let LinkGD_raw = eval('GD' + episodeNumber).split('/');
let LinkOK_raw = eval('OK' + episodeNumber).split('/');

let LinkDL = "https://www.dailymotion.com/embed/video/" + LinkDL_raw[4];
let LinkGD = "https://drive.google.com/file/d/" + LinkGD_raw[5] + "/preview";
let LinkOK = "//ok.ru/videoembed/" + LinkOK_raw[4];

let DownGD = "https://drive.google.com/uc?export=download&id=" + LinkGD_raw[5];
let DownTB = eval('TB' + episodeNumber);

if (eval('OK' + episodeNumber) != "null"){
    document.getElementById('LinkOKButton').style.display = "inline-block"; 
    document.getElementById('HinaAiFrame').src = LinkOK; 
}
if (eval('GD' + episodeNumber) != "null"){
    document.getElementById('LinkGDButton').style.display = "inline-block"; 
    document.getElementById('HinaAiFrame').src = LinkGD; 
}
if (eval('DL' + episodeNumber) != "null"){
    document.getElementById('LinkDLButton').style.display = "inline-block"; 
    document.getElementById('HinaAiFrame').src = LinkDL; 
}



