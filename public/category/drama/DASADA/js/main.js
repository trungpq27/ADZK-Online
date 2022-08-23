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

//change-link
document.getElementById('PreviewPicture').content = "/images/drama/Dasada.jpg";
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
    document.getElementById('DasadaFrame').src = LinkOK; 
}
if (eval('GD' + episodeNumber) != "null"){
    document.getElementById('LinkGDButton').style.display = "inline-block"; 
    document.getElementById('DasadaFrame').src = LinkGD; 
}
if (eval('DL' + episodeNumber) != "null"){
    document.getElementById('LinkDLButton').style.display = "inline-block"; 
    document.getElementById('DasadaFrame').src = LinkDL; 
}

