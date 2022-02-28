var urlHbo = "";
var urlNetflix = "";
var season = 0;

function goToEpisode(type){
    var win;
    if(type === 1){//Se for o botão netflix
        win = window.open(urlNetflix, '_blank');
        win.focus();
    } else {//Botão HBO
        win = window.open(urlHbo, '_blank');
        win.focus();
    }
}

function randomEpisode(){
    var episodes = {
        "1": {
            "1":["Pilot", "https://www.netflix.com/watch/80098733?trackId=14170032", "https://play.hbomax.com/episode/urn:hbo:episode:GXkRkPgoDro7CZgEAABqh"],
            "2":["Lawnmower Dog", "https://www.netflix.com/watch/80098734?trackId=14170032", "https://play.hbomax.com/episode/urn:hbo:episode:GXl2aAgboTSLCHAEAAAm7"],
            "3":["Anatomy Park", "https://www.netflix.com/watch/80098735?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWp8QRaGr7DwgEAAAWC "],
            "4":["M. Night Shaym-Aliens!", "https://www.netflix.com/watch/80098736?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWp5wLB6I5awgEAAATx"],
            "5":["Meeseeks and Destroy", "https://www.netflix.com/watch/80098737?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWrJwmCoI5awgEAAAU-"],
            "6":["Rick Potion #9", "https://www.netflix.com/watch/80098738?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXl2aIAEq2yLCHAEAAAoZ"],
            "7":["Raising Gazorpazorp", "https://www.netflix.com/watch/80098739?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWvxQdjeTmqwwEAAAAJ"],
            "8":["Rixty Minutes", "https://www.netflix.com/watch/80098740?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWrMQijDoayhAEAAAXj"],
            "9":["Something Ricked This Way Comes", "https://www.netflix.com/watch/80098741?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWmEgLPmL7DwgEAAASv"],
            "10":["Close Rick-counters of the Rick Kind", "https://www.netflix.com/watch/80098742?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWmHAGNJ77DwgEAAAS3"],
            "11":["Ricksy Business", "https://www.netflix.com/watch/80098743?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWrHQlOVYayhAEAAAXQ"]
        },
        "2": {
            "1":["A Rickle in Time", "https://www.netflix.com/watch/80107403?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWoBgt9V77DwgEAAAUZ"],
            "2":["Mortynight Run", "https://www.netflix.com/watch/80107404?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWmJgIAjo5awgEAAARf"],
            "3":["Auto Erotic Assimilation", "https://www.netflix.com/watch/80107405?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWodQB1o77DwgEAAAUi"],
            "4":["Total Rickall", "https://www.netflix.com/watch/80107406?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWpbwBZUI5awgEAAATM"],
            "5":["Get Schwifty", "https://www.netflix.com/watch/80107407?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWxLQq1bDmqwwEAAABk"],
            "6":["The Ricks Must Be Crazy", "https://www.netflix.com/watch/80107408?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWn6AqvyIayhAEAAAT-"],
            "7":["Big Trouble in Little Sanchez", "https://www.netflix.com/watch/80107409?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWq4Qjk6L7DwgEAAAXD"],
            "8":["Interdimensional Cable 2: Tempting Fate", "https://www.netflix.com/watch/80107410?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWlaAMFsL7DwgEAAASM"],
            "9":["Look Who's Purging Now", "https://www.netflix.com/watch/80107411?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWqcwWqeL7DwgEAAAWm"],
            "10":["The Wedding Squanchers", "https://www.netflix.com/watch/80107412?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWqNwXyJIayhAEAAAWH"]
        },
        "3": {
            "1":["The Rickshank Rickdemption", "https://www.netflix.com/watch/80202665?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWioQKSk45awgEAAAQT"],
            "2":["Rickmancing the Stone", "https://www.netflix.com/watch/80202666?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWxVQ0mlTmqwwEAAACL"],
            "3":["Pickle Rick", "https://www.netflix.com/watch/80202667?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWxGQtSvzmqwwEAAABM"],
            "4":["Vindicators 3: The Return of Worldender", "https://www.netflix.com/watch/80202668?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWtxg1SSIayhAEAAAZF"],
            "5":["The Whirly Dirly Conspiracy", "https://www.netflix.com/watch/80202669?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWiqwUfhb7DwgEAAARd"],
            "6":["Rest and Ricklaxation", "https://www.netflix.com/watch/80202670?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWqhwXeIr7DwgEAAAWw"],
            "7":["Tales from the Citadel", "https://www.netflix.com/watch/80202671?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWrOwodjY5awgEAAAVL"],
            "8":["Morty's Mind Blowers", "https://www.netflix.com/watch/80202673?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWozgwUiY5awgEAAAS_"],
            "9":["The ABC's of Beth", "https://www.netflix.com/watch/80202672?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWijQMivL7DwgEAAARX"],
            "10":["The Rickchurian Mortydate", "https://www.netflix.com/watch/80202674?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GXrWqaQVsYoayhAEAAAWW"]
        },
        "4": {
            "1":["Edge of Tomorty: Rick Die Rickpeat", "https://www.netflix.com/watch/81214596?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_ugaAqcMDUgEAAAA4"],
            "2":["The Old Man and the Seat", "https://www.netflix.com/watch/81214597?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_ugniMsMDUgEAAABG"],
            "3":["One Crew over the Crewcoo's Morty", "https://www.netflix.com/watch/81214598?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_ugd96cMDUgEAAAA6"],
            "4":["Claw and Hoarder: Special Ricktim's Morty", "https://www.netflix.com/watch/81214599?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_ugI8_sMDUgEAAAAw"],
            "5":["Rattlestar Ricklactica", "https://www.netflix.com/watch/81214600?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_ugVyQMLDdgEAAAA7"],
            "6":["Never Ricking Morty", "https://www.netflix.com/watch/81214601?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_xAKReGIOVAEAAAA-"],
            "7":["Promortyus", "https://www.netflix.com/watch/81214602?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_xAOm1WIOVAEAAABB"],
            "8":["The Vat of Acid Episode", "https://www.netflix.com/watch/81214603?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_ugL2h2IOVAEAAAAi"],
            "9":["Childrick of Mort", "https://www.netflix.com/watch/81214604?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_ugoYW8LDdgEAAABK"],
            "10":["Star Mort Rickturn of the Jerri", "https://www.netflix.com/watch/81214605?trackId=200257858", "https://play.hbomax.com/episode/urn:hbo:episode:GX6G_xALJVcLDdgEAAABk"]
        },
        "5": {
            "1":["Mort Dinner Rick Andre", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYNdsAAMIomKSjQEAAAAV"],
            "2":["Mortyplicity", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYNXYtgWyi1SLqQEAAAAl"],
            "3":["A Rickconvenient Mort", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYdXbzAMorZC2hwEAAAAg"],
            "4":["Rickdependence Spray", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYdXbzADV65C2hwEAAAAf"],
            "5":["Amortycan Grickfitti", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYOb3LAT0hsPDwgEAAAVI"],
            "6":["Rick & Morty's Thanksploitation Spectacular", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYOceOQyet4MqsQEAAAUB"],
            "7":["Gotron Jerrysis Rickvangelion", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYPbd8ASzP5eJwgEAAAFQ"],
            "8":["Rickternal Friendshine of the Spotless Mort", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYPXnTA0ycbPCQAEAAAEG"],
            "9":["Forgetting Sarick Mortshall", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYdXbzARjgJKwoAEAAAAE"],
            "10":["Rickmurai Jack", "", "https://play.hbomax.com/episode/urn:hbo:episode:GYP7MfASUUqsVnwEAAAAL"]
        },
    }
    var episode = 0;
    var title = "";
    var lblSeason = document.getElementById('season');
    var lblEpisode = document.getElementById('episode');
    var lblTitle = document.getElementById('title');

    season = Math.floor((Math.random() * 5) + 1);

    if(season > 1){
        episode = Math.floor((Math.random() * 10) + 1);
    } else {
        episode = Math.floor((Math.random() * 11) + 1);
    }

    title = episodes[season][episode][0];
    urlNetflix = episodes[season][episode][1];
    urlHbo = episodes[season][episode][2];

    lblSeason.innerText = "Temporada: " + season;
    lblEpisode.innerText = "Episódio: " + episode;
    lblTitle.innerText = "Título: " + title;
}

function generate(){
    var divLoading = document.getElementById('loading');
    var divResult = document.getElementById('result');
    var btnProcessar = document.getElementById('btnProcessar');
    var btnReprocessar = document.getElementById('btnReprocessar');
    var btnNetflix = document.getElementById('btnNetflix');

    btnProcessar.disabled = true;
    btnProcessar.innerText = "Gerando...";

    divLoading.classList.remove('hide');

    setTimeout(function(){
        divLoading.classList.add('hide');
        divResult.classList.remove('hide');
        btnProcessar.style.display = "none";
        btnReprocessar.style.display = "block";
        randomEpisode();
        if(season > 4){
            btnNetflix.disabled = true;
        } else {
            btnNetflix.disabled = false;
        }
    }, 3000);
}

function generateAgain(){
    var divLoading = document.getElementById('loading');
    var divResult = document.getElementById('result');
    var btnReprocessar = document.getElementById('btnReprocessar');
    var btnNetflix = document.getElementById('btnNetflix');

    btnReprocessar.disabled = true;
    btnReprocessar.innerText = "Gerando...";

    divResult.classList.add('hide');

    setTimeout(function(){
        divLoading.classList.remove('hide');
    }, 600)

    setTimeout(function(){
        divLoading.classList.add('hide');
        divResult.classList.remove('hide');
        btnReprocessar.innerText = "Gerar Novamente";
        btnReprocessar.disabled = false;
        randomEpisode();
        if(season > 4){
            btnNetflix.disabled = true;
        } else {
            btnNetflix.disabled = false;
        }
    }, 3000);
}