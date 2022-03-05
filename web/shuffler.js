window.onload = shuffle;
function shuffle(){
    var arr = [];
    while(arr.length < 12){
        var r = Math.floor(Math.random() * 380) + 100;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    var ancestor = document.getElementById('collage');
    var descendents = ancestor.getElementsByTagName('img');

    var i, e, d;
    for (i = 0; i < descendents.length; ++i) {
        d =  ("" + arr[i]).padStart(3);
        descendents[i].src = "../libraries/gogh_512_52i/generated/seed0" + d + ".png";
    }
}