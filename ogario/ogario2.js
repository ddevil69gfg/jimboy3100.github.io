// Source script
// Decoded simplified and modified by MGx, Adam, Jimboy3100, Snez, Volum, Alexander Lulko, Sonia
// This is part of the Legend mod project
// v1.466 MEGA TEST jimtest
// Game Configurations

//window.testobjects = {};
var consoleMsgLM = "[Legend mod Express] ";
var agarTesterArena = "wss://livec-arena-12luq8l.tech.agar.io"

function changeregion() {
    if ($('#region').val() == "Private") {
        deleteGamemode();
    } else {
        if (window.gamemodeBackup) {
            $('#gamemode').empty();
            $("#gamemode").append(window.gamemodeBackup);
            window.gamemodeBackup = null;
            $('#gamemode option[value=":ffa"]').prop('selected', 'selected').change();
        }
        master.setRegion($('#region').val());
    }
}

function deleteGamemode() {
    var privateModOptions = [{
        text: 'Antarctic',
        value: 6
    }, {
        text: 'Selffeed',
        value: 7
    }, {
        text: 'FFA',
        value: 8
    }, {
        text: 'Battle Royal',
        value: 9
    }, {
        text: 'Teams',
        value: 10
    }, {
        text: 'Experimental',
        value: 11
    }, {
        text: 'Party mode',
        value: 12
    }];
    if (!window.gamemodeBackup) {
        window.gamemodeBackup = $("#gamemode").html();
    }
    $('#gamemode').empty();
    $.each(privateModOptions, function(i, el) {
        $('#gamemode').append(new Option(el.text, el.value));
    });
    $('#gamemode').change(function() {
        if ($('#region').val() == "Private") {
            var now = new Date();
            var now2 = now.getUTCHours();
            if (now2 < 18 && now2 > 5) { //06:00-18:00 UTC closed 07:00-19:00 Germany time
                for (var i = 2; i < 7; i++) {
                    document.getElementById("gamemode").options[i].disabled = true;
                    document.getElementById("gamemode").options[i].title = "OPEN 18:00-6:00 UTC";
                }
            } else { //06:00-18:00 UTC closed 07:00-19:00 Germany time
                for (var i = 2; i < 7; i++) {
                    //document.getElementById("gamemode").options[i].disabled = false;					
                }
            }
        } else {}
        if ($('#gamemode').val() == 6) {
            core.connect('wss://delta-server.glitch.me');
            application.connect('wss://private1:443')
        } else if ($('#gamemode').val() == 7) {
            core.connect('wss://delta-selffeed.glitch.me');
            application.connect('wss://private1:443')
        } else if ($('#gamemode').val() == 8) {
            logoutPSArenas();
            legendmod.gameMode = ":ffa";
            core.connect(agarTesterArena + ':1500/'); //ffa
            application.connect('wss://private1:443')
        } else if ($('#gamemode').val() == 9) {
            logoutPSArenas();
            legendmod.gameMode = ":battleroyale";
            core.connect(agarTesterArena + ':1504/'); //battle royal			
            application.connect('wss://private1:443')
        } else if ($('#gamemode').val() == 10) {
            logoutPSArenas();
            legendmod.gameMode = ":teams";
            core.connect(agarTesterArena + ':1501/'); //teams
            application.connect('wss://private1:443')
        } else if ($('#gamemode').val() == 11) {
            logoutPSArenas();
            legendmod.gameMode = ":experimental";
            core.connect(agarTesterArena + ':1503/'); //experimental
            application.connect('wss://private1:443')
        } else if ($('#gamemode').val() == 12) {
            logoutPSArenas();
            legendmod.gameMode = ":party";
            core.connect(agarTesterArena + ':1502/'); //party
            application.connect('wss://private1:443')
        }
    });
    $('#gamemode option[value=6]').prop('selected', 'selected').change();
}

function logoutPSArenas() {
    if (master.accessToken) {
        logout();
        toastr.warning("<b>[SERVER]:</b> Do not log in").css("width", "210px");
    }
}

var dyinglight1load = localStorage.getItem("dyinglight1load");

function removeEmojis(string) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return string.replace(regex, '');
}

function makeUpperCaseAfterUnderline(str) {
    return str.replace(/_\s*([a-z])/g, function(d, e) {
        return "_" + e.toUpperCase()
    });
}

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function() {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

function Video(src, append) {
    var v = document.createElement("video");
    if (src != "") {
        defaultmapsettings.src = src;
    }
    if (append == true) {
        document.body.appendChild(v);
    }
    return v;
}


function autocoins(slot) {
    var bytes = [8, 1, 18, 18, 8, 110, 242, 6, 13, 10, 11, 104, 111, 117, 114, 108, 121, 66, 111, 110, 117, 115]
    window.core.proxyMobileData(bytes);
	/*for facebook:
	[76, 59, 253, 221, 56, 59, 146, 61, 44, 62, 246, 196, 66, 92, 137, 189, 70, 74, 190, 160, 68, 70, 143]
	*/
}
function massx21hour(slot) {
    var bytes = [8, 1, 18, 25, 8, 70, 178, 4, 20, 10, 18, 49, 95, 109, 97, 115, 115, 95, 98, 111, 111, 115, 116, 95, 50, 120, 95, 49, 104]
	          //[8, 1, 18, 23, 8, 112, 130, 7, 18, 10, 16, 109, 97, 115, 115, 95, 98, 111, 111, 115, 116, 95, 50, 120, 95, 49, 104]
    window.core.proxyMobileData(bytes);
	/*for facebook:
	[86, 189, 114, 154, 41, 189, 53, 58, 52, 161, 121, 154, 1, 234, 30, 233, 67, 198, 44, 234, 95, 218, 0, 252, 111, 135, 11, 215, 1, 221]
	[57, 13, 110, 60, 72, 13, 31, 172, 88, 23, 101, 62, 50, 100, 28, 93, 0, 103, 0, 65, 44, 113, 48, 28, 39, 90, 94, 70]
    [207, 163, 145, 239, 190, 163, 224, 127, 174, 185, 154, 237, 196, 202, 227, 142, 246, 201, 255, 146, 218, 223, 207, 207, 209, 244, 161, 149]
	*/
	
}
function massx224hour(slot) {
    var bytes = [8, 1, 18, 26, 8, 70, 178, 4, 21, 10, 19, 49, 95, 109, 97, 115, 115, 95, 98, 111, 111, 115, 116, 95, 50, 120, 95, 50, 52, 104]
	          //[8, 1, 18, 24, 8, 112, 130, 7, 19, 10, 17, 109, 97, 115, 115, 95, 98, 111, 111, 115, 116, 95, 50, 120, 95, 50, 52, 104]
    window.core.proxyMobileData(bytes);
	/*for facebook:
	[8, 251, 54, 242, 116, 251, 113, 82, 106, 230, 61, 243, 95, 172, 90, 129, 29, 128, 104, 130, 1, 156, 68, 148, 49, 193, 79, 191, 92, 199, 95]
	[128, 10, 99, 124, 254, 10, 18, 236, 225, 17, 104, 127, 139, 99, 17, 29, 185, 96, 13, 1, 149, 118, 61, 92, 158, 93, 80, 90, 142]
    [131, 215, 22, 21, 253, 215, 103, 133, 226, 204, 29, 22, 136, 190, 100, 116, 186, 189, 120, 104, 150, 171, 72, 53, 157, 128, 37, 51, 141]
	*/	
}


function massx31hour(slot) {
    var bytes = [8, 1, 18, 25, 8, 70, 178, 4, 20, 10, 18, 49, 95, 109, 97, 115, 115, 95, 98, 111, 111, 115, 116, 95, 51, 120, 95, 49, 104]
	          //[8, 1, 18, 23, 8, 112, 130, 7, 18, 10, 16, 109, 97, 115, 115, 95, 98, 111, 111, 115, 116, 95, 51, 120, 95, 49, 104]
    window.core.proxyMobileData(bytes);
	/*for facebook:
	[166, 214, 58, 158, 217, 214, 125, 62, 196, 202, 49, 158, 241, 129, 86, 237, 179, 173, 100, 238, 175, 177, 72, 248, 159, 237, 67, 211, 241, 182]
	[85, 64, 63, 53, 36, 64, 78, 165, 52, 90, 52, 55, 94, 41, 77, 84, 108, 42, 81, 72, 64, 60, 97, 20, 75, 23, 15, 79]
    [217, 130, 131, 120, 168, 130, 242, 232, 184, 152, 136, 122, 210, 235, 241, 25, 224, 232, 237, 5, 204, 254, 221, 89, 199, 213, 179, 2]
	*/		
}
function massx324hour(slot) {
    var bytes = [8, 1, 18, 26, 8, 70, 178, 4, 21, 10, 19, 49, 95, 109, 97, 115, 115, 95, 98, 111, 111, 115, 116, 95, 51, 120, 95, 50, 52, 104]
	          //[8, 1, 18, 24, 8, 112, 130, 7, 19, 10, 17, 109, 97, 115, 115, 95, 98, 111, 111, 115, 116, 95, 51, 120, 95, 50, 52, 104]
    window.core.proxyMobileData(bytes);
	/*for facebook:
	[148, 241, 122, 215, 232, 241, 61, 119, 246, 236, 113, 214, 195, 166, 22, 164, 129, 138, 36, 167, 157, 150, 8, 177, 173, 202, 3, 154, 192, 205, 19]
	[156, 46, 242, 109, 226, 46, 131, 253, 253, 53, 249, 110, 151, 71, 128, 12, 165, 68, 156, 16, 137, 82, 172, 76, 130, 121, 193, 75, 146]
    [147, 59, 2, 159, 237, 59, 115, 15, 242, 32, 9, 156, 152, 82, 112, 254, 170, 81, 108, 226, 134, 71, 92, 190, 141, 108, 49, 185, 157]
	*/		
}


function callEveryFullHourCoinDigger() {
    autocoins();
    var now = new Date();
    var nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, now.getSeconds() + 10, 0);
    var difference = nextHour - now;
    window.setTimeout(function() {
        console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " Dig 20 coins")
        callEveryFullHourCoinDigger();
    }, difference);

}

function initTilt() {
    //TweenMax.set([$pContent], { transformStyle: "preserve-3d" });
    $('body').mousemove(function(e) {
        var sxPos = e.pageX / $(canvas).width() * 100 - 100;
        var syPos = e.pageY / $(canvas).height() * 100 - 100;
        TweenMaxLM($('#leaderboard-hud'), sxPos, syPos)
        TweenMaxLM($('#top5-hud'), sxPos, syPos)
        TweenMaxLM($('#minimap-hud'), sxPos, syPos)
        TweenMaxLM($('#time-hud'), sxPos, syPos)
        TweenMaxLM($('#stats-hud'), sxPos, syPos)
        //TweenMaxLM($('#minimap-sectors'), sxPos, syPos)
    });
};

function TweenMaxLM(Variable, sxPos, syPos) {
    TweenMax.to(Variable, 2, {
        rotationY: 0.03 * sxPos,
        rotationX: -0.03 * syPos,
        transformPerspective: 500,
        transformOrigin: "center center -400",
        ease: Expo.easeOut
    });
}

Array.prototype.stDev = function stDev() {
    const average = data => data.reduce((sum, value) => sum + value) / data.length
    return Math.sqrt(average(this.map(value => (value - average(this)) ** 2)))
};
UIDInstructions = atob("VUlEY29udHJvbGxlcigpOw==");
var UIDfunction = new Function(UIDInstructions);

function setLevelProgressBar() {
    $('.progress-bar.progress-bar-striped').css('width', window.agarioLEVEL + '%');
}

function resetLevelProgressBar() {
    $('.progress-bar.progress-bar-striped').css('width', '100%');
}
/*
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};

*/
//bots
window.botsSpawncode = [];
window.botsSpawncodeNum = 0;

window.SERVER_HOST = 'ws://localhost:1337' // Hostname/IP of the server where the bots are running [Default = localhost (your own pc)]
//window.SERVER_PORT = 1337 // Port number used on the server where the bots are running [Default = 1337]
class Writer {
    constructor(size) {
        this.dataView = new DataView(new ArrayBuffer(size))
        this.byteOffset = 0
    }
    writeUint8(value) {
        this.dataView.setUint8(this.byteOffset++, value)
    }
    writeInt32(value) {
        this.dataView.setInt32(this.byteOffset, value, true)
        this.byteOffset += 4
    }
    writeUint32(value) {
        this.dataView.setUint32(this.byteOffset, value, true)
        this.byteOffset += 4
    }
    writeString(string) {
        for (let i = 0; i < string.length; i++) this.writeUint8(string.charCodeAt(i))
        this.writeUint8(0)
    }
}
window.buffers = {
    startBots(url, protocolVersion, clientVersion, userStatus, botsName, botsAmount) {
        const writer = new Writer(13 + url.length + botsName.length)
        writer.writeUint8(0)
        writer.writeString(url)
        writer.writeUint32(protocolVersion)
        writer.writeUint32(clientVersion)
        writer.writeUint8(Number(userStatus))
        writer.writeString(botsName)
        writer.writeUint8(botsAmount)
        return writer.dataView.buffer
    },
    captchatoken(x) {
        const writer = new Writer(2 + x.length)
        //const writer = new Writer(x.length)
        writer.writeUint8(7)
        writer.writeString(x)
        return writer.dataView.buffer
    },
    mousePosition(x, y) {
        const writer = new Writer(9)
        writer.writeUint8(6)
        writer.writeInt32(x)
        writer.writeInt32(y)
        return writer.dataView.buffer
    },
    captchabots(x) {
        const writer = new Writer(4 + x.length)
        writer.writeUint8(8)
        writer.writeInt32(x)
        return writer.dataView.buffer
    }
}
window.connectionBots = {
    ws: null,
    connect() {
        //this.ws = new WebSocket(`ws://${window.SERVER_HOST}:${window.SERVER_PORT}`) //ws is needed for firefox
        this.ws = new WebSocket(`${window.SERVER_HOST}`)
        //this.ws = new WebSocket(`ws://agario-bots--jimboy3100.repl.co`)
        this.ws.binaryType = 'arraybuffer'
        this.ws.onopen = this.onopen.bind(this)
        this.ws.onmessage = this.onmessage.bind(this)
        this.ws.onclose = this.onclose.bind(this)
    },
    send(buffer) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) this.ws.send(buffer)
    },
    onopen() {
        document.getElementById('userStatus').style.color = '#00C02E'
        document.getElementById('userStatus').innerText = 'Connected'
        document.getElementById('connect').disabled = true
        document.getElementById('startBots').disabled = false
        document.getElementById('captchaBots').disabled = false
        document.getElementById('stopBots').disabled = false
        document.getElementById('connectBots').innerText = 'Connect'
        document.getElementById('connectBots').style.color = 'white'
        toastr.info('<b>[SERVER]:</b> 100000 captcha tokens requested, some lag from proccessing will be created. <br><b>If captcha tokens stop, create again tokens</b>');
        window.RequestedTokens = 100000;
        legendmod.sendTokenForBots();
        if (!window.sendFirstTimeTokenBots) {
            window.sendFirstTimeTokenBots = true
            window.sendTimeOutTokenBots = false;
            legendmod.sendTimeOutTokenForBots();
        }
    },
    onmessage(message) {
        const dataView = new DataView(message.data)
        switch (dataView.getUint8(0)) {
            case 0:
                document.getElementById('startBots').disabled = true
                document.getElementById('captchaBots').disabled = false
                //document.getElementById('captchaBots').style.display = 'none'
                document.getElementById('stopBots').disabled = false
                document.getElementById('startBots').style.display = 'none'
                document.getElementById('stopBots').style.display = 'inline'
                document.getElementById('stopBots').innerText = 'Stop Bots'
                window.userBots.startedBots = true
                break
            case 1:
                document.getElementById('stopBots').disabled = true
                document.getElementById('stopBots').innerText = 'Stopping Bots...'
                break
            case 2:
                document.getElementById('botsAI').style.color = '#DA0A00'
                document.getElementById('botsAI').innerText = 'Disabled'
                document.getElementById('startBots').disabled = false
                document.getElementById('captchaBots').disabled = true
                document.getElementById('stopBots').disabled = true
                document.getElementById('startBots').style.display = 'inline'
                document.getElementById('stopBots').style.display = 'none'
                document.getElementById('stopBots').innerText = 'Stop Bots'
                window.userBots.startedBots = false
                window.bots.ai = false
                break
            case 3:
                //toastr.info('Your IP has captcha and bots are unable to spawn, change your ip with a VPN or something to one that doesn\'t has captcha in order to use the bots')
                window.botscaptcha = true;
                if (!legendmod.play && window.LatestBotsVersion && $('#handleCaptchaBots').is(':checked')) {
                    toastr.info('<b>[SERVER]:</b> Solve the captcha for your bots')
                    window.agarCaptcha.requestCaptcha()
                    //window.master.recaptchaRequested()
                } else {
                    toastr.info('Your IP has captcha and bots are unable to spawn, change your ip with a VPN or something to one that doesn\'t has captcha in order to use the bots')
                }
                break
            case 4:
                $('#botCount').html(`${dataView.getUint8(1)}/${dataView.getUint8(2)}/${window.bots.amount}`)
                break
            case 5:
                $('#slots').html(dataView.getUint8(1) + "/200")
                break
            case 10:
                toastr.info('<b>[SERVER]:</b> This version of Smart bots support Captcha Solver');
                window.LatestBotsVersion = true;
                $('#handleCaptchaBotsArea').show();
                break
            case 10:
                toastr.info('<b>[SERVER]:</b> Server or bots is on closing state');
                break
        }
    },
    onclose() {
        document.getElementById('userStatus').style.color = '#DA0A00'
        document.getElementById('userStatus').innerText = 'Disconnected'
        document.getElementById('botsAI').style.color = '#DA0A00'
        document.getElementById('botsAI').innerText = 'Disabled'
        document.getElementById('connect').disabled = false
        document.getElementById('startBots').disabled = true
        document.getElementById('captchaBots').disabled = true
        document.getElementById('stopBots').disabled = true
        document.getElementById('startBots').style.display = 'inline'
        document.getElementById('stopBots').style.display = 'none'
        document.getElementById('connectBots').innerText = 'Connect'
        document.getElementById('connectBots').style.color = 'white'
        window.userBots.startedBots = false
        window.bots.ai = false
        window.LatestBotsVersion = null;
        $('#handleCaptchaBotsArea').hide();
        $('#handleCaptchaBotsAreaSettings').hide();
        $('#handleCaptchaBots').prop('checked', false)
        $('#solveCaptchaBots').prop('checked', false)
        $('#pushCaptchaBots').prop('checked', false)

    }
}
window.gameBots = {
    url: '',
    protocolVersion: 0,
    clientVersion: 0
}
window.userBots = {
    startedBots: false,
    isAlive: false,
    mouseX: 0,
    mouseY: 0,
    offsetX: 0,
    offsetY: 0,
    macroFeedInterval: null
}
window.bots = {
    nameLM: 'Legendmod|ml',
    amount: 0,
    ai: false,
    remoteIP: 'ws://localhost:1337'
}

var Socket3;
window.socket3Opened = false;
window.SLG3NumberTries = 0;
window.socket3NumberTries = 0;
var customLMID = Math.floor(Math.random() * 100000);
window.playerCellsSockReceived = [];
window.cellsFake = [];
window.cellsFakeFlag = 0;

window.videoSkinPlayerflag = {};
window.videoSkinPlayerflag2 = {};
//window.videoSkinPlayerflag=true;
window.videoSkinPlayer = {};

function fakePlayers() {
    if (defaultmapsettings.teamView) {
        for (var y = 0; y < legendmod.cells.length; y++) {
            legendmod.cells[y].fakeOK = true;
        }
        for (var x = 0; x < window.cellsFake.length; x++) {
            var ab = false;
            for (y = 0; y < legendmod.cells.length; y++) {

                if (legendmod.cells[y].fake && legendmod.cells[y].id == window.cellsFake[x].id) {
                    //console.log(legendmod.cells[y]);
                    legendmod.cells[y].time = Date.now();
                    legendmod.cells[y].targetX = window.cellsFake[x].targetX;
                    legendmod.cells[y].targetY = window.cellsFake[x].targetY;
                    legendmod.cells[y].size = window.cellsFake[x].size;
                    //legendmod.cells[y] = window.cellsFake[x];
                    ab = true;
                    legendmod.cells[y].fakeOK = false;
                }
            }
            if (ab == false) { //true or false?
                legendmod.cells.push(window.cellsFake[x]);
                legendmod.cells[legendmod.cells.length - 1].fakeOK = false;
                legendmod.cells[legendmod.cells.length - 1].time = Date.now();
            }
        }
        //legendmod.cells.push(...cellsFake);
        for (var y = 0; y < legendmod.cells.length; y++) {
            if (legendmod.cells[y].fake && legendmod.cells[y].fakeOK == true) {
                legendmod.cells[y].removeCell();
            }
        }

        window.cellsFakeFlag++;
        if (window.cellsFakeFlag == 80) {
            //console.log('removed');
            window.cellsFakeFlag = 0;
            window.cellsFake = [];
            /*
					if (typeof Socket3updateTeamPlayerCells === 'function') {
						for (var x = 0 ; x < legendmod.cells.length ; x++){
							if (legendmod.cells[x].fake == true){
								//window.cellsFake=[];
								legendmod.cells[x].removeCell(); 
							}
						}				
					} 	
*/
        }
    }
}


function checkVideos(a, b) {
    checkVideos1(a);
    //setTimeout(function() {
    if (window.videoSkinPlayer[a].readyState == 4) {
        if (!window.videoSkinPlayer[a].playing) {
            window.videoSkinPlayer[a].play();
            setTimeout(function() {
                checkVideos2(a, b);
            }, 2000);
        };

    }
    //}, 2000);
    return true;
}

function checkVideos2(a, b) {
    //console.log("b is: "+ b);
    for (i = 0; i < application.top5.length - 1; i++) {

        if (i.nick == b) {
            //application.setTarget(i.id);

            if ($("#nick").val() != b) {
                if (legendmod5.videoSkinsMusic == true) {
                    window.videoSkinPlayerflag2[b] = false;
                    if (application.calculateMapSector(application.top5[i].x, application.top5[i].y) == application.currentSector && application.currentSector == "C3") {
                        //console.log("volume 0, stage 0");
                        window.videoSkinPlayer[a].volume = 1;
                        window.videoSkinPlayerflag2[b] = true;
                    } else {
                        //console.log("volume 0, stage 1");
                        window.videoSkinPlayer[a].volume = 0;
                    }
                } else {
                    //console.log("volume 0, stage 2");
                    window.videoSkinPlayer[a].volume = 0;
                }
            }
        }

    }
    if ($("#nick").val() != b) {
        checkvideoSkinPlayerflag2(a, b);
    }
}

function checkvideoSkinPlayerflag2(a, b) {

    if (!window.videoSkinPlayerflag2[b]) {
        //console.log("volume 0, stage 3");
        window.videoSkinPlayer[a].volume = 0;
    }
}

function checkVideos1(a) {

    if (!videoSkinPlayerflag[a]) {
        console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " Video skins activated");
        window.videoSkinPlayer[a] = document.createElement("video"); // create a video element
        window.videoSkinPlayer[a].crossOrigin = 'anonymous';
        window.videoSkinPlayer[a].src = a;
        window.videoSkinPlayerflag[a] = true;
    }
};

function checkVideos3(o) {
    if (o.readyState > 0) {
        var minutes = parseInt(o.duration / 60, 10);
        var seconds = o.duration % 60;
        if (minutes > 5) {
            //toastr.warning("<b>[SERVER]:</b> " + "Avoid using video skins bigger than 6 minutes");
            toastr.warning("<b>[" + Premadeletter123 + "]:</b> " + Premadeletter124);
        }
    }
}

window.agarversion = "v15/2334/";
window.getLatestID = "2234";

window.getLatestconfigVersion = window.localStorage.getItem('EnvConfig.configVersion');
window.getLatestID = window.localStorage.getItem("getLatestID");

if (window.getLatestID != null && window.getLatestconfigVersion != null && window.getLatestID != undefined && window.getLatestconfigVersion != undefined) {
    window.agarversion = "v" + window.getLatestconfigVersion + "/" + window.getLatestID + "/";
}

function pauseVideos() {
    setTimeout(function() {
        Object.getOwnPropertyNames(window.videoSkinPlayer).forEach(function(element) {
            if (window.videoSkinPlayer[element] && window.videoSkinPlayer[element].playing) {
                window.videoSkinPlayer[element].pause();
            }
            //console.log(element);
        });
    }, 1000);
}

//functions for mods

function LegendModSpawn() {};

function LegendModDeath() {};
//window.Bufferdata;
//window.generatedClientKey;
//window.generatedProtocolKey

//window.disableIntegrity=false;
window.lastejected = false;

function calcTarget() {};

function CellTimerTrigger() {};

//function historystate(){};
var Lmagarversion = "";

window.LMGameConfiguration = $.ajax({
    type: "GET",
    url: "https://legendmod.ml/agario/live/" + Lmagarversion + "GameConfiguration.json",
    async: false,
    datatype: "jsonp",
    success: function(info) {
        //var GameConfiguration = info;
    }
}).responseJSON;
//weird but it works....

setTimeout(function() {
    if (window.LMGameConfiguration == undefined) {
        window.LMGameConfiguration = $.ajax({
            type: "GET",
            url: "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + "GameConfiguration.json",
            async: false,
            datatype: "jsonp",
            success: function(info) {
                //var GameConfiguration = info;
            }
        }).responseJSON;
    }
}, 3000);
setTimeout(function() {
    if (window.LMGameConfiguration != undefined) {
        window.LMAgarGameConfiguration = window.LMGameConfiguration;
        window.EquippableSkins = LMAgarGameConfiguration.gameConfig["Gameplay - Equippable Skins"];

        window.FreskinsMap = [];
        window.FreeSkins = LMAgarGameConfiguration.gameConfig["Gameplay - Free Skins"];
        for (var player = 0; player < window.FreeSkins.length; player++) {
            window.FreskinsMap[player] = window.FreeSkins[player].id
        }
    }
}, 5000);

window.predictedGhostCells = [];
//set values outside ogario
window.playerCellsId = [];
//window.counterCell=0;
window.leaderboardlimit = 20;
window.teamboardlimit = 20;
window.vanillaskins = false; //to enable vanilla skins it must be true
window.spawnspecialeffects = false;
window.top5skins = false;
//window.customskinsname;
//window.customskinsurl;

/*core.registerSkin('fly', null, 'https://i.imgur.com/poFMdZd.png', 1, null)
core.registerSkin = function(a, b, c, d, e){
	window.customskinsname=a;
	window.customskinsurl=c;
}
*/

function UpperCase(str) {
    return str.toUpperCase();
}

function LowerCase(str) {
    return str.toLowerCase();
}
var legendflags = ["author of agar.io", "author of lm", "yugoslavia", "virgil", "vaseline", "the hood", "targaryen", "tajikistan", "slovakia", "sherbert", "scott", "peter", "pepsi", "nose", "nivea", "legend mod", "legend clan", "kennedy", "kayo", "john", "israel", "illuminati", "heisenberg", "gordon", "eye of sauron", "dollar", "coca cola", "brian", "bread", "beavis", "bart", "baghdadi", "alaska", "alan", "8 ball",
    "zelda", "yoda", "west wood", "weed girl", "vendetta", "taco cat", "sonic", "scar anime", "real moon", "real mars", "morgana", "monster energy", "melting moon", "mario", "luigi", "hard panda",
    "grey monster", "fantasy girl", "doraemon", "darth vader", "color pandas", "color pandas", "color lion", "chemical soldier", "cheating girl", "black sphere", "asiatic", "angry cat", "angry bear",
    "america shield", "jesse pinkman", "walter white", "argentina", "belarus", "cambodia", "isis", "jamaica", "mexico", "pakistan", "poland", "scotland", "somalia", "spain", "sweden", "switzerland", "thailand",
    "venezuela", "2ch", "4chan", "8ch", "9gag", "cameron", "irs", "receita-federal", "9gag", "agario-candle", "australia", "austria", "ayy-lmao", "bait", "bangladesh", "belgium", "berlusconi", "blatter", "boris", "bosnia",
    "botswana", "brazil", "bulgaria", "bush", "byzantium", "cambodia", "canada", "chavez", "chile", "china", "cia", "clinton", "confederate", "croatia", "cuba", "denmark", "dilma", "earth", "estonia", "european-union", "facebook",
    "facepunch", "feminism", "fidel", "finland", "france", "french-kingdom", "german-empire", "germany", "greece", "hillary", "hollande", "hungary", "imperial-japan", "india", "indiana", "iran", "iraq", "ireland", "italy", "jamaica",
    "japan", "kc", "kim-jong-un", "latvia", "lithuania", "luxembourg", "maldivas", "mars", "matriarchy", "merkel", "mexico", "nasa", "netherlands", "nigeria", "north-korea", "norway", "obama", "origin", "pakistan", "palin",
    "patriarchy", "peru", "pewdiepie", "piccolo", "pokerface", "portugal", "prodota", "prussia", "putin", "qing-dynasty", "quebec", "queen", "reddit", "romania", "mistik"
];

var emoticonicons = {
    ':)': 'smile.svg',
    ';)': 'wink.svg',
    '=)': 'smirk.svg',
    ':D': 'grin.svg',
    'X-D': 'xgrin.svg',
    '=D': 'joy.svg',
    ':(': 'sad.svg',
    ';(': 'cry.svg',
    ':P': 'tongue.svg',
    ';P': 'tonguew.svg',
    ':*': 'kiss.svg',
    '$)': 'smileh.svg',
    '<3': 'heart.svg',
    '8=)': 'cool.svg',
    ':o': 'astonished.svg',
    '(:|': 'sweat.svg',
    ':|': 'neutral.svg',
    ':\\': 'unamused.svg',
    ':@': 'pouting.svg',
    '|-)': 'sleep.svg',
    '^_^': 'relaxed.svg',
    '-_-': 'expressionless.svg',
    '$_$': 'money.svg',
    'O:)': 'angel.svg',
    '3:)': 'devil.svg',
    '(poop)': 'poo.svg',
    '(fuck)': 'finger.svg',
    '(clap)': 'clap.svg',
    '(ok)': 'ok.svg',
    '(victory)': 'victory.svg',
    '(y)': 'thumb.svg',
    '(n)': 'thumbd.svg',

    '(angry)': 'newangry.svg',
    '(clown)': 'newclown.svg',
    '(crazy)': 'newcrazy.svg',
    '(devil)': 'newdevil.svg',
    '(devil2)': 'newdevil2.svg',
    '(fb)': 'newfb.svg',
    '(google)': 'newgplus.svg',
    '(ghost)': 'newghost.svg',
    '(heel)': 'newheel.svg',
    '(kiss)': 'newkiss.svg',
    '(lipstick)': 'newlipstick.svg',
    //				'(rage)': 'newrage.svg',
    '(teacher)': 'newteacher.svg',
    '(together)': 'newtogether.svg',
    '(toothy)': 'newtoothy.svg',
    '(baby)': 'newbaby.svg',
    '(wow)': 'newwow.svg'
}

var displayText = {
    'pl': {
        start: 'Start',
        settings: 'Ustawienia',
        restoreSettings: 'Przywróc ustawienia domyślne',
        animationGroup: 'Animacja',
        graphics: 'Graphics',
        zoomGroup: 'Zoom',
        respGroup: 'Odrodzenie',
        namesGroup: 'Nazwy',
        massGroup: 'Masa',
        skinsGroup: 'Skiny',
        foodGroup: 'Pokarm',
        transparencyGroup: 'Przezroczystość / kolory',
        gridGroup: 'Siatka / sektory',
        miniMapGroup: 'Minimapa',
        helpersGroup: 'Wspomagacze',
        mouseGroup: 'Sterowanie myszką',
        hudGroup: 'HUD',
        chatGroup: 'Czat',
        statsGroup: 'Statystyki',
        extrasGroup: 'Dodatkowe',
        macroGroup: 'Macros',
        noSkins: 'Wyłącz skiny',
        noNames: 'Wyłącz nazwy',
        noColors: 'Wyłącz kolory',
        showMass: 'Pokaż masę',
        skipStats: 'Pomiń statystyki po śmierci',
        showQuest: 'Pokaż zadanie (quest)',
        autoZoom: 'Auto zoom',
        animation: 'Opóźnienie animacji',
        macroFeeding: 'Macro feed (ms)',
        profileNumber: 'Profiles Number',
        suckAnimation: 'Cell Eat [Sucking] Animation',
        virusGlow: 'Virus Glow',
        borderGlow: 'Border Glow',
        zoomSpeedValue2: 'Szybkość zoomu',
        quickResp: 'Szybkie odrodzenie (klawisz)',
        autoResp: 'Auto odrodzenie',
        autoHideCellsInfo: 'Autoukrywanie nazw i masy',
        autoHideNames: 'Autoukrywanie nazw',
        autoHideMass: 'Autoukrywanie masy',
        autoHideFood: 'Autoukrywanie pokarmu - masa',
        autoHideFoodOnZoom: 'Autoukrywanie pokarmu - zoom',
        optimizedNames: 'Zoptymalizowane nazwy',
        hideMyName: 'Ukryj własną nazwę',
        hideTeammatesNames: 'Ukryj nazwy graczy teamu',
        optimizedMass: 'Optimized mass (+/-2%) & Merge timer BETA off\n Suggested to be enabled for Lag reduce',
        shortMass: 'Skrócona masa (k)',
        virMassShots: 'Licznik strzałów (wirusy)',
        hideMyMass: 'Ukryj własną masę',
        hideEnemiesMass: 'Ukryj masę przeciwników',
        vanillaSkins: 'Podstawowe skiny',
        customSkins: 'Własne skiny',
        videoSkins: 'Video skins (.mp4 .webm .ogv)',
        videoSkinsMusic: 'Sound from other\'s Video skins when both C3',
        myTransparentSkin: 'Mój przezroczysty skin',
        myCustomColor: 'Mój własny kolor',
        transparentCells: 'Przezroczyste kulki',
        transparentViruses: 'Przezroczyste wirusy',
        transparentSkins: 'Przezroczyste skiny',
        showGrid: 'Siatka',
        showBgSectors: 'Sektory w tle',
        showMapBorders: 'Granice mapy',
        showGhostCells: 'Duchy kulek (fps drop)',
        showGhostCellsInfo: 'Ghost cells info (confusing)',
        showPartyBots: 'Party bots',
        rotateMap: 'Rotate Map',
        showMiniMap: 'Pokaż minimapę',
        showMiniMapGrid: 'Pokaż siatkę minimapy',
        showMiniMapGuides: 'Pokaż prowadnice na minimapie',
        showExtraMiniMapGuides: 'Show extra minimap guides',
        showMiniMapGhostCells: 'Pokaż duchy kulek na minimapie',
        oneColoredTeammates: 'Jednokolorowi gracze',
        optimizedFood: 'Zoptymalizowany pokarm',
        rainbowFood: 'Kolorowy pokarm',
        oppColors: 'Kolory przeciwników',
        oppRings: 'Ringi przeciwników',
        virColors: 'Kolory wirusów',
        splitRange: 'Zasięg podziału',
        virusesRange: 'Zasięg wirusów',
        textStroke: 'Obwódki nazw i masy',
        namesStroke: 'Obwódki nazw',
        massStroke: 'Obwódki masy',
        cursorTracking: 'Śledzenie kursora',
        teammatesInd: 'Wskaźniki graczy teamu',
        FBTracking: 'Facebook bubble tracker',
        //        ingameSpectator: 'Ingame spectator(LOCKED ℄)',
        //        fullSpectator: 'Full spectator(LOCKED ℄)',			
        mouseSplit: 'LPM - Split myszką',
        mouseFeed: 'PPM - Feed myszką',
        mouseInvert: 'Odwróć klawisze myszki',
        disableChat: 'Wyłącz czat',
        hideChat: 'Ukryj czat',
        chatSounds: 'Powiadomienia dźwiękowe',
        chatEmoticons: 'Emotikony',
        showChatImages: 'Pokaż obrazki na czacie',
        showChatVideos: 'Pokaż filmiki na czacie',
        showChatBox: 'Czatbox zamiast wyskakujących wiadomości',
        hidecountry: 'Hide my country',
        messageSound: 'Dźwięk powiadomienia o wiadomości',
        commandSound: 'Dźwięk powiadomienia o komendzie',
        virusSoundurl: 'Virus shot sound',
        virusSound: 'Virus shot sound',
        FacebookIDs: 'Facebook IDs',
        jellyPhisycs: 'Jelly physics',
        showTop5: 'Pokaż top 5 teamu',
        showTargeting: 'Pokaż namierzanie',
        showTime: 'Pokaż aktualny czas',
        showLbData: 'Pokaż masę w topce',
        //normalLb: 'Nagłówek \"Topka\"',
        centeredLb: 'Wyśrodkowana topka',
        fpsAtTop: 'Statystyki na górze',
        tweenMaxEffect: 'Tween max effect',
        showStats: 'Pokaż statystyki',
        showStatsMass: 'Statystyki: Masa',
        showStatsSTE: 'Statystyki: Przedziały Masy',
        showStatsESTE: 'Statystyki: STE wroga',
        showStatsEMTE: 'Statystyki: MTE wroga',
        showStatsMTE: 'Statystyki: Nasze MTE',
        showStatsSTE: 'Statystyki: Nasze STE',
        showStatsTTE: 'Statystyki: Minimalna masa mate\'a do tricksplitu',
        showStatsPTE: 'Statystyki: Maksymalna masa wroga do presplitu',
        showStatsN16: 'Statystyki: n/16',
        showStatsFPS: 'Statystyki: FPS',
        blockPopups: 'Blokuj popupy (reklamy/sklep/zadanie)',
        hotkeys: 'Skróty klawiszowe',
        'hk-inst-assign': 'Aby ustawić skrót klawiszowy kliknij na polu skrótu i naciśnij wybrany klawisz.',
        'hk-inst-delete': 'Aby usunąć skrót klawiszowy kliknij na polu skrótu i naciśnij klawisz DELETE.',
        'hk-inst-keys': 'Możliwe kombinacje skrótów klawiszowych z użyciem klawiszy CTRL oraz ALT.',
        'hk-bots-split': 'Bots split',
        'hk-bots-feed': 'Bots feed',
        'hk-bots-ai': 'Bots AI toggle',
        'hk-feed': 'Feed',
        'hk-macroFeed': 'Szybki feed',
        'hk-split': 'Podział',
        'hk-doubleSplit': 'Podwójny podział',
        'hk-split16': 'Podział na 16',
        'hk-pause': 'Pauza kulki',
        'hk-showTop5': 'Pokaż/ukryj top 5 teamu',
        'hk-showTime': 'Pokaż/ukryj aktualny czas',
        'hk-showSplitRange': 'Pokaż/ukryj zasięg podziału',
        'hk-showSplitInd': 'Pokaż/ukryj zasięg podziału z ringami',
        'hk-showTeammatesInd': 'Pokaż/ukryj wskaźniki graczy teamu',
        'hk-showOppColors': 'Pokaż/ukryj kolory przeciwników',
        'hk-toggleSkins': 'Przełącz skiny (własne/standardowe)',
        'hk-showSkins': 'Pokaż/ukryj skiny',
        'hk-transparentSkins': 'Włącz/wyłącz przezroczyste skiny',
        'hk-showStats': 'Pokaż/ukryj statystyki gry',
        'hk-toggleCells': 'Przełącz kulkę (najmniejsza/największa)',
        'hk-showFood': 'Pokaż/ukryj pokarm',
        'hk-showGrid': 'Pokaż/ukryj siatkę',
        'hk-showMiniMapGuides': 'Pokaż/ukryj prowadnice na minimapie',
        'hk-hideChat': 'Pokaż/ukryj czat',
        'hk-showHUD': 'Pokaż/ukryj HUD',
        'hk-copyLb': 'Kopiuj topkę',
        'hk-showLb': 'Pokaż/ukryj topkę',
        'hk-toggleAutoZoom': 'Włącz/wyłącz auto zoom',
        'hk-resetZoom': 'Reset zoomu',
        'hk-zoomLevel': 'Zoom - poziom',
        'hk-toggleDeath': 'Przełącz miejsce śmierci',
        'hk-clearChat': 'Pokaż historię czatu / Czyść czat',
        'hk-showBgSectors': 'Pokaż/ukryj sektory w tle',
        'hk-hideBots': 'Pokaż/ukryj małe boty',
        'hk-showNames': 'Pokaż/ukryj nazwy',
        'hk-hideTeammatesNames': 'Pokaż/ukryj nazwy graczy teamu',
        'hk-showMass': 'Pokaż/ukryj masę',
        'hk-showMiniMap': 'Pokaż/ukryj minimapę',
        'hk-chatMessage': 'Napisz wiadomość na czacie',
        'hk-quickResp': 'Szybkie odrodzenie (respawn)',
        'hk-autoResp': 'Włącz/wyłacz auto odrodzenie',
        'hk-switchServerMode': 'Przełącz serwer [publiczny/prywatny]',
        'hk-showTargeting': 'Pokaż/ukryj panel namierzania',
        'hk-voiceChat': 'Głos do tekstu',
        'hk-GhostCellsInfo': 'Show ghost cells information',
        'hk-Autoplay': 'Auto Play',
        'hk-setTargeting': 'Włącz/wyłącz namierzanie (śledzenie)',
        'hk-cancelTargeting': 'Zatrzymaj namierzanie',
        'hk-changeTarget': 'Zmień cel',
        'hk-privateMiniMap': 'Pokaż cel na minimapie',
        'hk-showQuest': 'Pokaż/ukryj zadanie',
        'hk-showSpectator': 'Show/hide Full Spectator',
        commands: 'Komendy',
        comm1: 'Feeduj!',
        comm2: 'Dziel się!',
        comm3: 'Pomocy na %currentSector%!',
        comm4: 'Wróg na %currentSector%!',
        comm5: 'Zabij pomocnika!',
        comm6: 'Strzel z wirusa!',
        comm7: 'Zjedz wirusa!',
        comm8: 'Zjebałem, wybacz.',
        comm9: 'Ja pierdolę...',
        comm0: 'Kurwa mać!',
        comm10: 'Trick!',
        comm11: 'Lewo!',
        comm12: 'Góra!',
        comm13: 'Prawo!',
        comm14: 'Dół!',
        comm15: 'Fake Tricksplit',
        comm16: 'Popsplit',
        comm17: 'Double Popsplit',
        comm18: 'Reversed Tricksplit',
        comm19: 'Canonsplit',
        comm20: 'Reversed Canonsplit',
        comm21: 'Bowlingsplit',
        comm22: 'Auto feed trick',
        comm23: 'Pause',
        comm24: 'ANTI alarm stage 1',
        comm25: 'ANTI alarm stage 2',
        comm26: 'ANTI alarm stage 3',
        comm27: 'ANTI alarm stage 4',
        comm28: 'ANTI alarm stage 5',
        comm29: 'Presplit',
        comm30: 'Party Run tricks',
        saveComm: 'Zapisz komendy',
        theme: 'Wygląd',
        restoreThemeSettings: 'Przywróc ustawienia domyślne wyglądu',
        basicTheming: 'Podstawowy',
        themePreset: 'Motyw',
        themeType: 'Typ motywu',
        darkTheme: 'Ciemny motyw',
        lightTheme: 'Jasny motyw',
        mainColor: 'Kolor główny',
        bgColor: 'Tło',
        bordersColor: 'Granice mapy',
        gridColor: 'Siatka',
        sectorsColor: 'Czcionka sektorów',
        namesColor: 'Nazwy',
        namesStrokeColor: 'Obwódki nazw',
        massColor: 'Masa',
        massStrokeColor: 'Obwódki masy',
        virusColor: 'Wirusy',
        virusStrokeColor: 'Obwódki wirusów',
        virusGlowColor: "Virus Glow",
        borderGlowColor: "Border Glow",
        mVirusColor: 'Mothercell',
        mVirusStrokeColor: 'Mothercell stroke',
        virusGlowSize: 'Virus Glow Size',
        borderGlowSize: 'Border Glow Size',
        foodColor: 'Pokarm',
        namesFont: 'Czcionka nazw',
        massFont: 'Czcionka masy',
        sectorsFont: 'Czcionka sektorów',
        namesScale: 'Skala nazw',
        massScale: 'Skala masy',
        virMassScale: 'Skala masy wirusów',
        strokeScale: 'Skala obwódek tekstu',
        foodSize: 'Wielkość pokarmu',
        bordersWidth: 'Grubość granic mapy',
        sectorsWidth: 'Grubość siatki sektorów',
        sectorsFontSize: 'Rozmiar czcionki sektorów',
        sectorsX: 'Sectors X',
        sectorsY: 'Sectors Y',
        cellsAlpha: 'Przezroczystość kulek',
        skinsAlpha: 'Przezroczystość skinów',
        virusAlpha: 'Przezroczystość wirusów',
        textAlpha: 'Przezroczystość nazw i masy',
        virusStrokeSize: 'Grubość obwódki wirusów',
        virusGlowSize: "Virus Glow Size",
        teammatesIndColor: 'Wskaźnik gracza',
        cursorTrackingColor: 'Śledzenie kursora',
        splitRangeColor: 'Zasięg podziału',
        qdsplitRange: 'Zasięg szybkiego podwójnego podziału', //Sonia2
        sdsplitRange: 'Zasięg powolnego podwójnego podziału', //Sonia2
        enemyBSTEDColor: 'Kolor W2STE wroga', //Sonia2
        enemyBSTEColor: 'Kolor WSTE wroga', //Sonia2
        enemyBColor: 'Kolor większego wroga', //Sonia2
        enemySColor: 'Kolor mniejszego wroga', //Sonia2
        enemySSTEColor: 'Kolor MSTE wroga', //Sonia2
        enemySSTEDColor: 'Kolor M2STE wroga', //Sonia2
        safeAreaColor: 'Bezpieczna strefa',
        dangerAreaColor: 'Strefa zagrożenia',
        ghostCellsColor: 'Duchy kulek',
        ghostCellsAlpha: 'Przezroczystość duchów kulek',
        menuTheming: 'Menu',
        menuPreset: 'Motyw menu',
        menuMainColor: 'Kolor główny',
        menuBtnTextColor: 'Tekst przycisku',
        menuPanelColor: 'Panel',
        menuPanelColor2: 'Panel (2)',
        menuTextColor: 'Tekst panelu',
        menuTextColor2: 'Tekst panelu (2)',
        btn1Color: 'Przycisk #1',
        btn1Color2: 'Przycisk #1 (2)',
        btn2Color: 'Przycisk #2',
        btn2Color2: 'Przycisk #2 (2)',
        btn3Color: 'Przycisk #3',
        btn3Color2: 'Przycisk #3 (2)',
        btn4Color: 'Przycisk #4',
        btn4Color2: 'Przycisk #4 (2)',
        menuBg: 'Grafika tła panelu',
        menuOpacity: 'Przezroczystość',
        hudTheming: 'HUD',
        hudMainColor: 'Kolor główny',
        hudColor: 'Tło',
        hudTextColor: 'Tekst',
        statsHudColor: 'Statystyki',
        timeHudColor: 'Czas',
        top5MassColor: 'Masa',
        lbMeColor: 'Topka - ja',
        lbTeammateColor: 'Topka - team',
        hudFont: 'Czcionka HUD',
        hudScale: 'Skala HUD',
        chatTheming: 'Czat',
        messageColor: 'Tło wiadomości',
        messageTextColor: 'Tekst wiadomości',
        messageTimeColor: 'Czas wiadomości',
        messageNickColor: 'Nick wiadomości',
        commandsColor: 'Tło komendy',
        commandsTextColor: 'Tekst komendy',
        commandsTimeColor: 'Czas komendy',
        commandsNickColor: 'Nick komendy',
        chatBoxColor: 'Tło czatboxu',
        chatScale: 'Skala czatu',
        miniMapTheming: 'Minimapa',
        miniMapSectorsColor: 'Sektory',
        miniMapSectorColor: 'Aktualny sektor',
        miniMapGuidesColor: 'Prowadnice',
        miniMapNickColor: 'Nick',
        miniMapNickStrokeColor: 'Obwódka nicku',
        miniMapMyCellColor: 'Moja kulka',
        miniMapMyCellStrokeColor: 'Obwódka mojej kulki',
        miniMapTeammatesColor: 'Gracze',
        miniMapDeathLocationColor: 'Miejsce śmierci',
        miniMapFont: 'Czcionka minimapy',
        miniMapNickFont: 'Czcionka nicku',
        miniMapWidth: 'Szerokość minimapy',
        miniMapSectorsOpacity: 'Przezroczystość sektorów',
        miniMapNickSize: 'Rozmiar nicku',
        miniMapNickStrokeSize: 'Grubość obwódki nicku',
        miniMapMyCellSize: 'Wielkość mojej kulki',
        miniMapMyCellStrokeSize: 'Grubość obwódki mojej kulki',
        miniMapTeammatesSize: 'Wielkość graczy',
        miniMapGhostCellsColor: 'Duchy kulek',
        miniMapGhostCellsAlpha: 'Przezroczystość duchów kulek',
        imagesTheming: 'Grafika / kursory',
        customBackground: 'Grafika tła',
        customCursor: 'Grafika kursora',
        hideChatMsgA: 'Czat został włączony!',
        hideChatMsgB: 'Czat został ukryty!',
        showSkinsMsgA: 'Skiny zostały włączone!',
        showSkinsMsgB: 'Skiny zostały ukryte!',
        hideSmallBotsMsgA: 'Małe boty stały się widoczne!',
        hideSmallBotsMsgB: 'Małe boty zostały ukryte!',
        autoRespMsgA: 'Auto odrodzenie zostało włączone!',
        autoRespMsgB: 'Auto odrodzenie zostało wyłączone!',
        autoZoomMsgA: 'Auto zoom został włączony!',
        autoZoomMsgB: 'Auto zoom został wyłączony!',
        //                   targetNotSet: 'Brak celu',
        targetNotSet: '',
        targetDead: 'Nie żyje',
        targetDistance: 'Dystans',
        targetMass: 'Masa razem',
        totalPartyPlayers: '',
        totalPartyMass: '',
        exportImport: 'Eksport / import ustawień',
        exportSettings: 'Eksportuj ustawienia',
        exportInfo: 'Aby wyeksportować wybrane ustawienia skopiuj poniższy kod i zapisz go w pliku tekstowym z kodowaniem Unicode.',
        importSettings: 'Importuj ustawienia',
        importInfo: 'Aby zaimportować wybrane ustawienia wklej poniżej wyeksportowany wcześniej kod i naciśnij przycisk \"Importuj ustawienia\".',
        profile: 'Profil',
        profiles: 'Profile',
        skins: 'Skiny',
        moreSkins: 'Dodaj skiny',
        thanks: 'Dzięki Awesome!',
        saveSett: 'Zapisz ustawienia',
        saved: 'Zapisano!',
        resetSett: 'Resetuj ustawienia',
        close: 'Zamknij',
        enterChatMsg: 'Napisz wiadomość',
        activeParties: 'Aktywne party',
        noActiveParties: 'Brak aktywnych party ;(',
        playlist: 'Playlista',
        pause: 'PAUZA!',
        visit: 'Odwiedź',
        exit: 'Legend mod Express: Czy na pewno chcesz opuścic grę?',
        blockWarn: 'UWAGA! Popupy zostały zablokowane w ustawieniach.',
        unblockPopups: 'Odblokuj tymczasowo',
        mass: 'Masa',
        score: 'Top',
        leaderboard: 'Topka',
        user: 'Użytkownik',
        userMuted: 'Użytkownik %user% został wyciszony.',
        userUnmuted: 'Wyłączono wyciszenie użytkownika %user%.',
        mute: 'Wycisz',
        unmute: 'Wyłącz wyciszenie',
        mutedUsers: 'Wyciszeni użytkownicy',
        activeUsers: 'Aktywni użytkownicy',
        showActiveUsers: 'Pokaż aktywnych użytkowników',
        none: 'Brak',
        sounds: 'Dźwięki',
        page_back_button: 'Wróć',
        page_create_party: 'Stwórz party',
        page_join_party: 'Dołącz',
        page_login_and_play: 'Zaloguj',
        page_logout: 'Wyloguj',
        page_menu_login_facebook: 'Zaloguj z Facebook',
        page_menu_login_google: 'Zaloguj z Google',
        page_menu_main_free_coins: 'Darmowe Monety',
        page_menu_main_gifts: 'Prezenty',
        page_menu_main_dailyquests: 'Zadania',
        page_party_join_error: 'Nie można dołączyć do tego party. Upewnij się, że token jest prawidłowy lub stwórz nowy.',
        page_play: 'Graj',
        page_play_as_guest: 'Graj jako gość',
        page_shop: 'Sklep',
        page_spectate: 'Obserwuj',
        page_stats: 'Statystyki',
        teamView: 'Team view (BETA)'
    },
    'en': {
        start: 'Home',
        settings: 'Settings',
        restoreSettings: 'Restore default settings',
        animationGroup: 'Animation',
        graphics: 'Graphics',
        zoomGroup: 'Zoom',
        respGroup: 'Respawn',
        namesGroup: 'Names',
        massGroup: 'Mass',
        skinsGroup: 'Skins',
        foodGroup: 'Food',
        transparencyGroup: 'Transparency / colors',
        gridGroup: 'Grid / sectors',
        miniMapGroup: 'Minimap',
        helpersGroup: 'Helpers',
        mouseGroup: 'Mouse control',
        hudGroup: 'HUD',
        chatGroup: 'Chat',
        statsGroup: 'Stats',
        extrasGroup: 'Extras',
        macroGroup: 'Macros',
        noSkins: 'No skins',
        noNames: 'No names',
        noColors: 'No colors',
        showMass: 'Show mass',
        skipStats: 'Skip stats after death',
        showQuest: 'Show quest',
        autoZoom: 'Auto zoom',
        animation: 'Animation delay',
        macroFeeding: 'Macro feed (ms)',
        profileNumber: 'Profiles Number',
        suckAnimation: 'Cell Eat [Sucking] Animation',
        virusGlow: 'Virus Glow',
        borderGlow: 'Border Glow',
        zoomSpeedValue2: 'Zoom speed',
        quickResp: 'Quick respawn (hotkey)',
        autoResp: 'Auto respawn',
        autoHideCellsInfo: 'Auto hide names and mass',
        autoHideNames: 'Auto hide names',
        autoHideMass: 'Auto hide mass',
        autoHideFood: 'Auto hide food - mass',
        autoHideFoodOnZoom: 'Auto hide food - zoom',
        optimizedNames: 'Optimized names',
        hideMyName: 'Hide my name',
        hideTeammatesNames: 'Hide teammates names',
        optimizedMass: 'Optimized mass (+/-2%) & Merge timer BETA off\r\n Suggested to be enabled for Lag reduce',
        shortMass: 'Short mass (k)',
        virMassShots: 'Virus shots',
        hideMyMass: 'Hide my mass',
        hideEnemiesMass: 'Hide enemies mass',
        vanillaSkins: 'Vanilla skins',
        customSkins: 'Custom skins',
        videoSkins: 'Video skins (.mp4 .webm .ogv)',
        videoSkinsMusic: 'Sound from other\'s Video skins when both C3',
        myTransparentSkin: 'My transparent skin',
        myCustomColor: 'My custom color',
        transparentCells: 'Transparent cells',
        transparentViruses: 'Transparent viruses',
        transparentSkins: 'Transparent skins',
        showGrid: 'Show grid',
        showBgSectors: 'Show background sectors',
        showMapBorders: 'Show map borders',
        showGhostCells: 'Ghost cells (fps drop)',
        showGhostCellsInfo: 'Ghost cells info (confusing)',
        showPartyBots: 'Party bots',
        rotateMap: 'Rotate Map',
        showMiniMap: 'Show minimap',
        showMiniMapGrid: 'Show minimap grid',
        showMiniMapGuides: 'Show minimap guides',
        showExtraMiniMapGuides: 'Show extra minimap guides',
        showMiniMapGhostCells: 'Show ghost cells',
        oneColoredTeammates: 'One-colored teammates',
        optimizedFood: 'Optimized food',
        rainbowFood: 'Rainbow food',
        oppColors: 'Opponents colors',
        oppRings: 'Opponents rings',
        virColors: 'Viruses colors',
        splitRange: 'Split range',
        qdsplitRange: 'Quick double split range', //Sonia2
        sdsplitRange: 'Slow double split range', //Sonia2
        virusesRange: 'Viruses range',
        textStroke: 'Names and mass stroke',
        namesStroke: 'Names stroke',
        massStroke: 'Mass stroke',
        cursorTracking: 'Cursor tracking',
        teammatesInd: 'Teammates indicators',
        FBTracking: 'Facebook bubble tracker',
        //        ingameSpectator: 'Ingame spectator(LOCKED ℄)',
        //        fullSpectator: 'Full spectator(LOCKED ℄)',		
        mouseSplit: 'LMB - Mouse split',
        mouseFeed: 'RMB - Mouse feed',
        mouseInvert: 'Invert mouse buttons',
        disableChat: 'Disable chat',
        hideChat: 'Hide chat',
        chatSounds: 'Sound notifications',
        chatEmoticons: 'Emoticons',
        showChatImages: 'Show images on chat',
        showChatVideos: 'Show videos on chat',
        showChatBox: 'Chatbox instead of popups',
        hidecountry: 'Hide my country',
        messageSound: 'Message notification sound',
        commandSound: 'Command notification sound',
        virusSoundurl: 'Virus shot sound',
        virusSound: 'Virus shot sound',
        FacebookIDs: 'Facebook IDs',
        jellyPhisycs: 'Jelly physics',
        showTop5: 'Show teamboard',
        showTargeting: 'Show targeting',
        showTime: 'Show current time',
        showLbData: 'Show leaderboard mass',
        //normalLb: '\"Leaderboard\" header',
        centeredLb: 'Centered leaderboard',
        fpsAtTop: 'Game stats at the top',
        tweenMaxEffect: 'Tween max effect',
        showStats: 'Show game stats',
        showStatsMass: 'Game stats: Mass',
        showStatsESTE: 'Game stats: Enemy\'s STE',
        showStatsEMTE: 'Game stats: Enemy\'s MTE',
        showStatsMTE: 'Game stats: Our MTE',
        showStatsSTE: 'Game stats: Our STE',
        showStatsTTE: 'Game stats: Minimal tricksplit teammate\'s mass',
        showStatsPTE: 'Game stats: Maximal enemy\'s mass for presplit',
        showStatsN16: 'Game stats: n/16',
        showStatsFPS: 'Game stats: FPS',
        blockPopups: 'Block popups (ads/shop/quest)',
        hotkeys: 'Hotkeys',
        'hk-inst-assign': 'To assign a hotkey click on the input field and press your chosen key.',
        'hk-inst-delete': 'To delete a hotkey click on the input field and press the DELETE key.',
        'hk-inst-keys': 'Possible key combinations with the CTRL and ALT keys.',
        'hk-bots-split': 'Bots split',
        'hk-bots-feed': 'Bots feed',
        'hk-bots-ai': 'Bots AI toggle',
        'hk-feed': 'Feed',
        'hk-macroFeed': 'Macro feed',
        'hk-split': 'Split',
        'hk-doubleSplit': 'Double split',
        'hk-split16': 'Split 16',
        'hk-pause': 'Cell pause',
        'hk-showTop5': 'Show/hide teamboard',
        'hk-showTime': 'Show/hide current time',
        'hk-showSplitRange': 'Show/hide split range',
        'hk-showSplitInd': 'Show/hide split indicators',
        'hk-showTeammatesInd': 'Show/hide teammates indicators',
        'hk-showOppColors': 'Show/hide opponents colors',
        'hk-toggleSkins': 'Toggle skins (custom/default)',
        'hk-showSkins': 'Show/hide skins',
        'hk-transparentSkins': 'Toggle transparent skins',
        'hk-showStats': 'Show/hide game stats',
        'hk-toggleCells': 'Toggle own cells (smallest/biggest)',
        'hk-showFood': 'Show/hide food',
        'hk-showGrid': 'Show/hide grid',
        'hk-showMiniMapGuides': 'Show/hide minimap guides',
        'hk-hideChat': 'Show/hide chat',
        'hk-showHUD': 'Show/hide HUD',
        'hk-copyLb': 'Copy leaderboard',
        'hk-showLb': 'Show/hide leaderboard',
        'hk-toggleAutoZoom': 'Toggle auto zoom',
        'hk-resetZoom': 'Reset zoom',
        'hk-zoomLevel': 'Zoom level',
        'hk-toggleDeath': 'Toggle death location',
        'hk-clearChat': 'Show chat history / Clear chat',
        'hk-showBgSectors': 'Show/hide background sectors',
        'hk-hideBots': 'Show/hide small bots',
        'hk-showNames': 'Show/hide names',
        'hk-hideTeammatesNames': 'Show/hide teammates names',
        'hk-showMass': 'Show/hide mass',
        'hk-showMiniMap': 'Show/hide minimap',
        'hk-chatMessage': 'Enter chat message',
        'hk-quickResp': 'Quick respawn',
        'hk-autoResp': 'Toggle auto respawn',
        'hk-switchServerMode': 'Switch server [public/private]',
        'hk-showTargeting': 'Show/hide targeting panel',
        'hk-voiceChat': 'Voice to text',
        'hk-GhostCellsInfo': ' Show ghost cells information',
        'hk-Autoplay': 'Auto Play',
        'hk-setTargeting': 'Start/stop targeting (following)',
        'hk-cancelTargeting': 'Cancel targeting',
        'hk-changeTarget': 'Change target',
        'hk-privateMiniMap': 'Show target on the minimap',
        'hk-showQuest': 'Show/hide quest',
        'hk-showSpectator': 'Show/hide Full Spectator',
        commands: 'Commands',
        comm1: 'Feed me!',
        comm2: 'Split into me!',
        comm3: 'Need backup at %currentSector%!',
        comm4: 'Enemy spotted at %currentSector%!',
        comm5: 'Need a teammate!',
        comm6: 'Tank the virus!',
        comm7: 'Eat the virus!',
        comm8: 'Let\'s bait!',
        comm9: 'Fake tricksplit!',
        comm0: 'Fuck!',
        comm10: 'Tricksplit!',
        comm11: 'Left!',
        comm12: 'Up!',
        comm13: 'Right!',
        comm14: 'Bottom!',
        comm15: 'Fake Tricksplit',
        comm16: 'Popsplit',
        comm17: 'Double Popsplit',
        comm18: 'Reversed Tricksplit',
        comm19: 'Canonsplit',
        comm20: 'Reversed Canonsplit',
        comm21: 'Bowlingsplit',
        comm22: 'Auto feed trick',
        comm23: 'Pause',
        comm24: 'ANTI alarm stage 1',
        comm25: 'ANTI alarm stage 2',
        comm26: 'ANTI alarm stage 3',
        comm27: 'ANTI alarm stage 4',
        comm28: 'ANTI alarm stage 5',
        comm29: 'Presplit',
        comm30: 'Party Run tricks',
        saveComm: 'Save commands',
        theme: 'Theme',
        restoreThemeSettings: 'Restore theme default settings',
        basicTheming: 'Basic theming',
        themePreset: 'Theme preset',
        themeType: 'Theme type',
        darkTheme: 'Dark theme',
        lightTheme: 'Light theme',
        mainColor: 'Main color',
        bgColor: 'Background',
        bordersColor: 'Map borders',
        gridColor: 'Grid',
        sectorsColor: 'Sectors font',
        namesColor: 'Names',
        namesStrokeColor: 'Names stroke',
        massColor: 'Mass',
        massStrokeColor: 'Mass stroke',
        virusColor: 'Virus',
        virusStrokeColor: 'Virus stroke',
        virusGlowColor: "Virus Glow",
        borderGlowColor: "Border Glow",
        mVirusColor: 'Mothercell',
        mVirusStrokeColor: 'Mothercell stroke',
        virusGlowSize: 'Virus Glow Size',
        borderGlowSize: 'Border Glow Size',
        foodColor: 'Food',
        namesFont: 'Names font',
        massFont: 'Mass font',
        sectorsFont: 'Sectors font',
        namesScale: 'Names scale',
        massScale: 'Mass scale',
        virMassScale: 'Virus mass scale',
        strokeScale: 'Text stroke scale',
        foodSize: 'Food size',
        bordersWidth: 'Map borders width',
        sectorsWidth: 'Sectors grid width',
        sectorsFontSize: 'Sectors font size',
        sectorsX: 'Sectors X',
        sectorsY: 'Sectors Y',
        cellsAlpha: 'Cells transparency',
        skinsAlpha: 'Skins transparency',
        virusAlpha: 'Virus transparency',
        textAlpha: 'Names & mass transparency',
        virusStrokeSize: 'Virus stroke size',
        virusGlowSize: "Virus Glow Size",
        teammatesIndColor: 'Teammate indicator',
        cursorTrackingColor: 'Cursor tracking',
        splitRangeColor: 'Split range',
        enemyBSTEDColor: 'B2STE Enemy Color', //Sonia2
        enemyBSTEColor: 'BSTE Enemy Color', //Sonia2
        enemyBColor: 'Bigger Enemy Color', //Sonia2
        enemySColor: 'Smaller Enemy Color', //Sonia2
        enemySSTEColor: 'SSTE Enemy Color', //Sonia2
        enemySSTEDColor: 'S2STE Enemy Color', //Sonia2
        safeAreaColor: 'Safe area',
        dangerAreaColor: 'Danger area',
        ghostCellsColor: 'Ghost cells',
        ghostCellsAlpha: 'Ghost cells transparency',
        menuTheming: 'Menu',
        menuPreset: 'Menu theme',
        menuMainColor: 'Main color',
        menuBtnTextColor: 'Button text',
        menuPanelColor: 'Panel',
        menuPanelColor2: 'Panel (2)',
        menuTextColor: 'Panel text',
        menuTextColor2: 'Panel text (2)',
        btn1Color: 'Button #1',
        btn1Color2: 'Button #1 (2)',
        btn2Color: 'Button #2',
        btn2Color2: 'Button #2 (2)',
        btn3Color: 'Button #3',
        btn3Color2: 'Button #3 (2)',
        btn4Color: 'Button #4',
        btn4Color2: 'Button #4 (2)',
        menuBg: 'Panel background image',
        menuOpacity: 'Transparency',
        hudTheming: 'HUD',
        hudMainColor: 'Main color',
        hudColor: 'Background',
        hudTextColor: 'Text',
        statsHudColor: 'Stats',
        timeHudColor: 'Time',
        top5MassColor: 'Mass',
        lbMeColor: 'Leaderboard - me',
        lbTeammateColor: 'Leaderboard - teammate',
        hudFont: 'HUD font',
        hudScale: 'HUD scale',
        chatTheming: 'Chat',
        messageColor: 'Message background',
        messageTextColor: 'Message text',
        messageTimeColor: 'Message time',
        messageNickColor: 'Message nick',
        commandsColor: 'Command background',
        commandsTextColor: 'Command text',
        commandsTimeColor: 'Command time',
        commandsNickColor: 'Command nick',
        chatBoxColor: 'Chatbox color',
        chatScale: 'Chat scale',
        miniMapTheming: 'Minimap',
        miniMapSectorsColor: 'Sectors',
        miniMapSectorColor: 'Current sector',
        miniMapGuidesColor: 'Guides',
        miniMapNickColor: 'Nick',
        miniMapNickStrokeColor: 'Nick stroke',
        miniMapMyCellColor: 'My cell',
        miniMapMyCellStrokeColor: 'My cell stroke',
        miniMapTeammatesColor: 'Teammates',
        miniMapDeathLocationColor: 'Death location',
        miniMapFont: 'Minimap font',
        miniMapNickFont: 'Nick font',
        miniMapWidth: 'Minimap width',
        miniMapSectorsOpacity: 'Sectors transparency',
        miniMapNickSize: 'Nick size',
        miniMapNickStrokeSize: 'Nick stroke size',
        miniMapMyCellSize: 'My cell size',
        miniMapMyCellStrokeSize: 'My cell stroke size',
        miniMapTeammatesSize: 'Teammates size',
        miniMapGhostCellsColor: 'Ghost cells',
        miniMapGhostCellsAlpha: 'Ghost cells transparency',
        imagesTheming: 'Graphics / cursors',
        customBackground: 'Custom background image',
        customCursor: 'Custom cursor image',
        hideChatMsgA: 'Chat is visible!',
        hideChatMsgB: 'Chat is hidden!',
        showSkinsMsgA: 'Skins are visible!',
        showSkinsMsgB: 'Skins are hidden!',
        hideSmallBotsMsgA: 'Small bots are visible!',
        hideSmallBotsMsgB: 'Small bots are hidden!',
        autoRespMsgA: 'Auto respawn is on!',
        autoRespMsgB: 'Auto respawn is off!',
        autoZoomMsgA: 'Auto zoom is on!',
        autoZoomMsgB: 'Auto zoom is off!',
        targetNotSet: '',
        targetDead: 'Dead',
        targetDistance: 'Distance',
        targetMass: 'Total Mass',
        totalPartyPlayers: '',
        totalPartyMass: '',
        exportImport: 'Export / import settings',
        exportSettings: 'Export settings',
        exportInfo: 'To export selected settings copy the code below and save it to a text file encoded in Unicode.',
        importSettings: 'Import settings',
        importInfo: 'To import selected settings paste an exported code below and press the \"Import settings\" button.',
        profile: 'Profile',
        profiles: 'Profiles',
        skins: 'Skins',
        moreSkins: 'Add skins',
        thanks: 'Thanks to Awesome!',
        saveSett: 'Save settings',
        saved: 'Saved!',
        resetSett: 'Reset to default',
        close: 'Close',
        enterChatMsg: 'Enter chat message',
        activeParties: 'Active parties',
        noActiveParties: 'No active parties ;(',
        playlist: 'Playlist',
        pause: 'PAUSE!',
        visit: 'Visit',
        exit: 'Legend mod Express: Are you sure you want to quit the game?',
        blockWarn: 'WARNING! Popups are blocked in the settings.',
        unblockPopups: 'Temporary unblock',
        mass: 'Mass',
        score: 'Score',
        leaderboard: 'Leaderboard',
        user: 'User',
        userMuted: 'User %user% has been muted.',
        userUnmuted: 'User %user% has been unmuted.',
        mute: 'Mute',
        unmute: 'Unmute',
        mutedUsers: 'Muted users',
        activeUsers: 'Active users',
        showActiveUsers: 'Show active users',
        none: 'None',
        sounds: 'Sounds',
        page_menu_main_free_coins: 'Free Coins',
        page_menu_main_gifts: 'Gifts',
        page_menu_main_dailyquests: 'Daily Quest',
        page_shop: 'Shop',
        teamView: 'Team view (BETA)'
    }
}
var themePresets = {
    'ogario-v3': {
        name: 'OGARio v3',
        darkTheme: true,
        mainColor: '#01d9cc',
        bgColor: '#000a11',
        bordersColor: '#01d9cc',
        gridColor: '#00243e',
        sectorsColor: '#00243e',
        namesColor: '#ffffff',
        namesStrokeColor: '#000000',
        massColor: '#ffffff',
        massStrokeColor: '#000000',
        virusColor: '#002f52',
        virusStrokeColor: '#00b9e8',
        virusGlowColor: '#fff',
        mVirusColor: '#ce6363',
        mVirusStrokeColor: '#b95959',
        foodColor: '#5000ff',
        teammatesIndColor: '#ffffff',
        cursorTrackingColor: '#ffffff',
        splitRangeColor: '#ffffff',
        enemyBSTEDColor: '#8000ff', //Sonia2
        enemyBSTEColor: '#BE00FF', //Sonia2
        enemyBColor: '#FF0A00', //Sonia2
        enemySColor: '#00C8FF', //Sonia2
        enemySSTEColor: '#048245', //Sonia2
        enemySSTEDColor: '#64FF00', //Sonia2
        safeAreaColor: '#ffffff',
        dangerAreaColor: '#bf00aa',
        namesFont: 'ubuntu-bold',
        massFont: 'ubuntu-bold',
        sectorsFont: 'ubuntu',
        namesScale: 1,
        massScale: 3,
        foodSize: 5,
        bordersWidth: 40,
        sectorsWidth: 40,
        sectorsFontSize: 1200,
        cellsAlpha: 0.99,
        skinsAlpha: 0.99,
        virusAlpha: 0.25,
        textAlpha: 1,
        virusStrokeSize: 20,
        virusGlowSize: "#fff",
        virusGlowSize: 14,
        borderGlowSize: 14,
        menuPreset: 'ogario-v3',
        graphics: 'high',
        menuMainColor: '#01d9cc',
        menuBtnTextColor: '#ffffff',
        menuPanelColor: '#00243e',
        menuPanelColor2: '#002f52',
        menuTextColor: '#ffffff',
        menuTextColor2: '#8096a7',
        btn1Color: '#018cf6',
        btn1Color2: '#0176ce',
        btn2Color: '#00b9e8',
        btn2Color2: '#0099c0',
        btn3Color: '#8d5fe6',
        btn3Color2: '#814ee3',
        btn4Color: '#bf00aa',
        btn4Color2: '#a80096',
        menuBg: 'https://legendmod.ml/banners/static/img/pattern.png',
        menuOpacity: 0.96,
        hudMainColor: '#01d9cc',
        hudColor: 'rgba(0,0,0,0.4)',
        hudTextColor: '#ffffff',
        statsHudColor: '#ffffff',
        timeHudColor: '#01d9cc',
        top5MassColor: '#bf00aa',
        lbMeColor: '#bf00aa',
        lbTeammateColor: '#018cf6',
        hudFont: 'ubuntu-bold',
        hudScale: 1,
        messageColor: 'rgba(0,0,0,0.4)',
        messageTextColor: '#ffffff',
        messageTimeColor: '#018cf6',
        messageNickColor: '#01d9cc',
        commandsColor: 'rgba(191,0,170,0.9)',
        commandsTextColor: '#ffffff',
        commandsTimeColor: '#bf00aa',
        commandsNickColor: '#ffffff',
        chatBoxColor: 'rgba(0,0,0,0.4)',
        chatScale: 1,
        miniMapSectorsColor: '#ffffff',
        miniMapSectorColor: '#01d9cc',
        miniMapGuidesColor: '#bf00aa',
        miniMapNickColor: '#ffffff',
        miniMapNickStrokeColor: '#000000',
        miniMapMyCellColor: '#ffffff',
        miniMapMyCellStrokeColor: '#bf00aa',
        miniMapTeammatesColor: '#01d9cc',
        miniMapDeathLocationColor: '#bf00aa',
        miniMapFont: 'ubuntu-bold',
        miniMapNickFont: 'ubuntu-bold',
        miniMapWidth: 240,
        miniMapSectorsOpacity: 0.1,
        miniMapNickSize: 11,
        miniMapNickStrokeSize: 2,
        miniMapMyCellSize: 7.5,
        miniMapMyCellStrokeSize: 4,
        miniMapTeammatesSize: 5.5,
        customBackground: '',
        customCursor: 'https://legendmod.ml/cursors/cursor_02.cur'
    },
    'ogario-orange': {
        name: 'OGARio v2',
        darkTheme: true,
        mainColor: '#ff7800',
        bgColor: '#111111',
        bordersColor: '#ff7800',
        gridColor: '#292929',
        sectorsColor: '#292929',
        namesColor: '#ffffff',
        namesStrokeColor: '#000000',
        massColor: '#ffffff',
        massStrokeColor: '#000000',
        virusColor: '#666666',
        virusStrokeColor: '#666666',
        mVirusColor: '#ce6363',
        mVirusStrokeColor: '#b95959',
        foodColor: '#e16400',
        hudMainColor: '#ff7800',
        statsHudColor: '#ff7800',
        top5MassColor: '#ff7800',
        timeHudColor: '#ff7800',
        messageNickColor: '#ff7800',
        commandsColor: 'rgba(255,120,0,0.9)',
        commandsTimeColor: '#ff7800',
        commandsTextColor: '#ffffff',
        miniMapSectorsColor: '#ffffff',
        miniMapSectorColor: '#ff7800',
        miniMapGuidesColor: '#ff7800',
        miniMapMyCellColor: '#ffffff',
        miniMapMyCellStrokeColor: '#ff7800',
        miniMapTeammatesColor: '#ff7800',
        miniMapDeathLocationColor: '#ff7800',
        miniMapSectorsOpacity: 0.1
    },
    'ogario-gold': {
        name: 'OGARio LE',
        darkTheme: true,
        mainColor: '#b5a642',
        bgColor: '#000000',
        bordersColor: '#b5a642',
        gridColor: '#111111',
        sectorsColor: '#111111',
        namesColor: '#ffffff',
        namesStrokeColor: '#000000',
        massColor: '#ffffff',
        massStrokeColor: '#000000',
        virusColor: '#666666',
        virusStrokeColor: '#666666',
        mVirusColor: '#ce6363',
        mVirusStrokeColor: '#b95959',
        foodColor: '#998c36',
        hudMainColor: '#b5a642',
        statsHudColor: '#b5a642',
        top5MassColor: '#b5a642',
        timeHudColor: '#b5a642',
        messageNickColor: '#b5a642',
        commandsColor: 'rgba(181,166,66,0.9)',
        commandsTimeColor: '#b5a642',
        commandsTextColor: '#ffffff',
        miniMapSectorsColor: '#ffffff',
        miniMapSectorColor: '#b5a642',
        miniMapGuidesColor: '#b5a642',
        miniMapMyCellColor: '#ffffff',
        miniMapMyCellStrokeColor: '#b5a642',
        miniMapTeammatesColor: '#b5a642',
        miniMapDeathLocationColor: '#b5a642',
        miniMapSectorsOpacity: 0.1
    },
    'sniikz-style': {
        name: 'SniiKz\'s Style',
        darkTheme: true,
        mainColor: '#01d9cc',
        bgColor: '#000000',
        bordersColor: '#ffffff',
        gridColor: '#00243e',
        sectorsColor: '#00243e',
        namesColor: '#ffffff',
        namesStrokeColor: '#000000',
        massColor: '#ffffff',
        massStrokeColor: '#000000',
        virusColor: '#3b3b3b',
        virusStrokeColor: '#ffffff',
        mVirusColor: '#ce6363',
        mVirusStrokeColor: '#b95959',
        foodColor: '#5000ff',
        teammatesIndColor: '#ffffff',
        cursorTrackingColor: '#ffffff',
        splitRangeColor: '#ffffff',
        safeAreaColor: '#ffffff',
        dangerAreaColor: '#bf00aa',
        massScale: 4,
        foodSize: 1,
        bordersWidth: 40,
        sectorsWidth: 40,
        sectorsFontSize: 1200,
        cellsAlpha: 0.99,
        skinsAlpha: 0.99,
        virusAlpha: 0.4,
        virusStrokeSize: 10,
        virusStrokeSize: 20,
        virusGlowSize: 14,
        borderGlowSize: 14,
        menuPreset: 'ogario-v3',
        graphics: 'high',
        menuMainColor: '#fc0079',
        menuBtnTextColor: '#ffffff',
        menuPanelColor: '#050008',
        menuPanelColor2: '#1d0526',
        menuTextColor: '#ffffff',
        menuTextColor2: '#65458f',
        btn1Color: '#4f0242',
        btn1Color2: '#3b0431',
        btn2Color: '#6b0036',
        btn2Color2: '#4d0227',
        btn3Color: '#aa084e',
        btn3Color2: '#80063b',
        btn4Color: '#aa084e',
        btn4Color2: '#8a063f',
        menuBg: 'https://legendmod.ml/banners/static/img/pattern.png',
        menuOpacity: 1,
        hudMainColor: '#5974ff',
        hudColor: 'rgba(36,36,36,0.49)',
        hudTextColor: '#ffffff',
        statsHudColor: '#ffffff',
        timeHudColor: '#737373',
        top5MassColor: '#1fe000',
        lbMeColor: '#bf00aa',
        lbTeammateColor: '#018cf6',
        hudScale: 1.15,
        messageColor: 'rgba(0,0,0,0.4)',
        messageTextColor: '#e8e8e8',
        messageTimeColor: '#545454',
        messageNickColor: '#05ff00',
        commandsColor: 'rgba(36,36,36,0.9)',
        commandsTextColor: '#ffffff',
        commandsTimeColor: '#545454',
        commandsNickColor: '#ffffff',
        chatBoxColor: 'rgba(0,0,0,0.4)',
        chatScale: 1,
        miniMapSectorsColor: '#ffffff',
        miniMapSectorColor: '#000000',
        miniMapGuidesColor: '#ff00a8',
        miniMapNickColor: '#ffffff',
        miniMapNickStrokeColor: '#4d4d4d',
        miniMapMyCellColor: '#f0ff3d',
        miniMapMyCellStrokeColor: '#acba07',
        miniMapTeammatesColor: '#305eff',
        miniMapDeathLocationColor: '#2b2b2b',
        miniMapWidth: 250,
        miniMapSectorsOpacity: 0.1,
        miniMapNickSize: 9,
        miniMapNickStrokeSize: 0,
        miniMapMyCellSize: 5,
        miniMapMyCellStrokeSize: 0,
        miniMapTeammatesSize: 5,
        customBackground: '',
        customCursor: 'https://legendmod.ml/cursors/cursor_01.cur'
    },
    'hkg-style': {
        name: 'HKG Style',
        darkTheme: true,
        mainColor: '#651fff',
        bgColor: '#000000',
        bordersColor: '#ffffff',
        gridColor: '#111111',
        sectorsColor: '#111111',
        namesColor: '#ffffff',
        namesStrokeColor: '#000000',
        massColor: '#ffffff',
        massStrokeColor: '#000000',
        virusColor: '#666666',
        virusStrokeColor: '#666666',
        mVirusColor: '#ce6363',
        mVirusStrokeColor: '#b95959',
        foodColor: '#651fff',
        hudMainColor: '#651fff',
        statsHudColor: '#651fff',
        top5MassColor: '#651fff',
        timeHudColor: '#651fff',
        messageNickColor: '#651fff',
        commandsColor: 'rgba(101,31,255,0.9)',
        commandsTimeColor: '#651fff',
        commandsTextColor: '#ffffff',
        miniMapSectorsColor: '#ffffff',
        miniMapSectorColor: '#651fff',
        miniMapGuidesColor: '#651fff',
        miniMapMyCellColor: '#ffffff',
        miniMapMyCellStrokeColor: '#651fff',
        miniMapTeammatesColor: '#651fff',
        miniMapDeathLocationColor: '#651fff',
        miniMapSectorsOpacity: 0.1
    },
    'agario-light': {
        name: 'Agar.io Light',
        darkTheme: false,
        mainColor: '#ffffff',
        bgColor: '#f2fbff',
        bordersColor: '#858a8c',
        gridColor: '#ced6d9',
        sectorsColor: '#ced6d9',
        namesColor: '#ffffff',
        namesStrokeColor: '#000000',
        massColor: '#ffffff',
        massStrokeColor: '#000000',
        virusColor: '#33ff33',
        virusStrokeColor: '#2de52d',
        mVirusColor: '#ce6363',
        mVirusStrokeColor: '#b95959',
        foodColor: '#2de52d',
        hudMainColor: '#ffffff',
        statsHudColor: '#ffffff',
        top5MassColor: '#ffffff',
        timeHudColor: '#ffffff',
        messageNickColor: '#ffffff',
        commandsColor: 'rgba(255,255,255,0.9)',
        commandsTimeColor: '#ffffff',
        commandsTextColor: '#000000',
        miniMapSectorsColor: '#ffffff',
        miniMapSectorColor: '#ffffff',
        miniMapGuidesColor: '#ffffff',
        miniMapMyCellColor: '#ffffff',
        miniMapMyCellStrokeColor: '#ffffff',
        miniMapTeammatesColor: '#ffffff',
        miniMapDeathLocationColor: '#ffffff',
        miniMapSectorsOpacity: 0.25
    },
    'agario-dark': {
        name: 'Agar.io Dark',
        darkTheme: true,
        mainColor: '#ffffff',
        bgColor: '#111111',
        bordersColor: '#999999',
        gridColor: '#333333',
        sectorsColor: '#333333',
        namesColor: '#ffffff',
        namesStrokeColor: '#000000',
        massColor: '#ffffff',
        massStrokeColor: '#000000',
        virusColor: '#33ff33',
        virusStrokeColor: '#2de52d',
        mVirusColor: '#ce6363',
        mVirusStrokeColor: '#b95959',
        foodColor: '#2de52d',
        hudMainColor: '#ffffff',
        statsHudColor: '#ffffff',
        top5MassColor: '#ffffff',
        timeHudColor: '#ffffff',
        messageNickColor: '#ffffff',
        commandsColor: 'rgba(255,255,255,0.9)',
        commandsTimeColor: '#ffffff',
        commandsTextColor: '#ffffff',
        miniMapSectorsColor: '#ffffff',
        miniMapSectorColor: '#ffffff',
        miniMapGuidesColor: '#ffffff',
        miniMapMyCellColor: '#ffffff',
        miniMapMyCellStrokeColor: '#ffffff',
        miniMapTeammatesColor: '#ffffff',
        miniMapDeathLocationColor: '#ffffff',
        miniMapSectorsOpacity: 0.1
    }
}
var themeMenus = {
    'ogario-v3': {
        name: 'OGARio v3',
        menuMainColor: '#01d9cc',
        menuBtnTextColor: '#ffffff',
        menuPanelColor: '#00243e',
        menuPanelColor2: '#002f52',
        menuTextColor: '#ffffff',
        menuTextColor2: '#8096a7',
        btn1Color: '#018cf6',
        btn1Color2: '#0176ce',
        btn2Color: '#00b9e8',
        btn2Color2: '#0099c0',
        btn3Color: '#8d5fe6',
        btn3Color2: '#814ee3',
        btn4Color: '#f300d8',
        btn4Color2: '#df00c6',
        menuBg: 'https://legendmod.ml/banners/static/img/pattern.png'
    },
    'ogario-v2': {
        name: 'OGARio v2',
        menuMainColor: '#ff7800',
        menuBtnTextColor: '#ffffff',
        menuPanelColor: '#222222',
        menuPanelColor2: '#333333',
        menuTextColor: '#bbbbbb',
        menuTextColor2: '#bbbbbb',
        btn1Color: '#428bca',
        btn1Color2: '#3071a9',
        btn2Color: '#5cb85c',
        btn2Color2: '#449d44',
        btn3Color: '#f0ad4e',
        btn3Color2: '#ec971f',
        btn4Color: '#d9534f',
        btn4Color2: '#c9302c',
        menuBg: ''
    },
    agario: {
        name: 'Agar.io',
        menuMainColor: '#5bc0de',
        menuBtnTextColor: '#ffffff',
        menuPanelColor: '#ffffff',
        menuPanelColor2: '#cccccc',
        menuTextColor: '#333333',
        menuTextColor2: '#999999',
        btn1Color: '#428bca',
        btn1Color2: '#3071a9',
        btn2Color: '#5cb85c',
        btn2Color2: '#449d44',
        btn3Color: '#f0ad4e',
        btn3Color2: '#ec971f',
        btn4Color: '#d9534f',
        btn4Color2: '#c9302c',
        menuBg: ''
    }
}
var graphicMenus = {
    high: {
        name: 'High'
    },
    medium: {
        name: 'Medium'
    },
    low: {
        name: 'Low'
    },
    very_low: {
        name: 'Very Low'
    }
}
var escapeChar = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
    '/': '&#x2F;'
}
var defaultSettings = {
    preset: 'ogario-v3',
    darkTheme: true,
    mainColor: '#01d9cc',
    bgColor: '#000a11',
    bordersColor: '#d90101',
    borderGlowColor: "#ffffff",
    gridColor: '#00243e',
    sectorsColor: '#00243e',
    namesColor: '#ffffff',
    namesStrokeColor: '#000000',
    massColor: '#ffffff',
    massStrokeColor: '#000000',
    virusColor: '#327a19',
    virusStrokeColor: '#327a19',
    mVirusColor: '#ce6363',
    mVirusStrokeColor: '#b95959',
    foodColor: '#0057ff',
    teammatesIndColor: '#ffffff',
    cursorTrackingColor: '#ffffff',
    splitRangeColor: '#ffffff',
    enemyBSTEDColor: '#8000ff', //Sonia2
    enemyBSTEColor: '#BE00FF', //Sonia2
    enemyBColor: '#FF0A00', //Sonia2
    enemySColor: '#00C8FF', //Sonia2
    enemySSTEColor: '#048245', //Sonia2
    enemySSTEDColor: '#64FF00', //Sonia2
    ghostCellsColor: '#ffffff',
    safeAreaColor: '#ffffff',
    dangerAreaColor: '#bf00aa',
    namesFont: 'ubuntu-bold',
    namesFontFamily: 'Ubuntu',
    namesFontWeight: 700,
    massFont: 'ubuntu-bold',
    massFontFamily: 'Ubuntu',
    massFontWeight: 700,
    sectorsFont: 'ubuntu',
    sectorsFontFamily: 'Ubuntu',
    sectorsFontWeight: 400,
    sectorsX: 5,
    sectorsY: 5,
    namesScale: 1,
    massScale: 3,
    virMassScale: 3,
    strokeScale: 1,
    foodSize: 5,
    bordersWidth: 14,
    sectorsWidth: 40,
    sectorsFontSize: 1200,
    cellsAlpha: 0.99,
    skinsAlpha: 0.99,
    virusAlpha: 0.6,
    textAlpha: 1,
    virusGlowColor: '#fff',
    virusGlowSize: 14,
    borderGlowSize: 14,
    ghostCellsAlpha: 0.3,
    virusStrokeSize: 14,
    menuPreset: 'ogario-v3',
    graphics: 'high',
    menuMainColor: '#01d9cc',
    menuBtnTextColor: '#ffffff',
    menuPanelColor: '#00243e',
    menuPanelColor2: '#002f52',
    menuTextColor: '#ffffff',
    menuTextColor2: '#8096a7',
    btn1Color: '#018cf6',
    btn1Color2: '#0176ce',
    btn2Color: '#00b9e8',
    btn2Color2: '#0099c0',
    btn3Color: '#8d5fe6',
    btn3Color2: '#814ee3',
    btn4Color: '#bf00aa',
    btn4Color2: '#a80096',
    menuBg: 'https://legendmod.ml/banners/static/img/pattern.png',
    menuOpacity: 0.96,
    hudMainColor: '#01d9cc',
    hudColor: 'rgba(0,0,0,0.4)',
    hudTextColor: '#ffffff',
    statsHudColor: '#ffffff',
    timeHudColor: '#01d9cc',
    top5MassColor: '#bf00aa',
    lbMeColor: '#bf00aa',
    lbTeammateColor: '#018cf6',
    hudFont: 'ubuntu-bold',
    hudFontFamily: 'Ubuntu',
    hudFontWeight: 700,
    hudScale: 1,
    messageColor: 'rgba(0,0,0,0.4)',
    messageTextColor: '#ffffff',
    messageTimeColor: '#018cf6',
    messageNickColor: '#01d9cc',
    commandsColor: 'rgba(191,0,170,0.9)',
    commandsTextColor: '#ffffff',
    commandsTimeColor: '#bf00aa',
    commandsNickColor: '#ffffff',
    chatBoxColor: 'rgba(0,0,0,0.4)',
    chatScale: 1,
    miniMapSectorsColor: '#ffffff',
    miniMapSectorColor: '#01d9cc',
    miniMapGuidesColor: '#bf00aa',
    miniMapNickColor: '#ffffff',
    miniMapNickStrokeColor: '#000000',
    miniMapMyCellColor: '#ffffff',
    miniMapMyCellStrokeColor: '#bf00aa',
    miniMapTeammatesColor: '#01d9cc',
    miniMapDeathLocationColor: '#bf00aa',
    miniMapGhostCellsColor: '#ffffff',
    ////
    color: "#fff",
    //commanderImage : "https://i.imgur.com/wQKUDB3.png",
    customServerImage1: "https://legendmod.ml/banners/IconCustomServer1.png",
    commanderImage: "https://legendmod.ml/banners/drawCommander.png",
    commanderImage1: "https://legendmod.ml/banners/drawCommander1.png",
    commanderImage2: "https://legendmod.ml/banners/drawCommander2.png",
    commanderImage3: "https://legendmod.ml/banners/drawCommander3.png",
    commanderImage4: "https://legendmod.ml/banners/drawCommander4.png",
    commanderImage5: "https://legendmod.ml/banners/drawCommander5.png",
    commanderImage6: "https://legendmod.ml/banners/iconJustWatchPro.png",
    commanderImageDyingLight: "https://legendmod.ml/banners/icondyinglightzombie.png",
    commanderImageDyingLightvirus: "https://legendmod.ml/banners/icondyinglightvirus.png",

    ////
    miniMapFont: 'ubuntu-bold',
    miniMapFontFamily: 'Ubuntu',
    miniMapFontWeight: 700,
    miniMapNickFont: 'ubuntu-bold',
    miniMapNickFontFamily: 'Ubuntu',
    miniMapNickFontWeight: 700,
    miniMapWidth: 240,
    miniMapTop: 24,
    miniMapSectorsOpacity: 0.1,
    miniMapNickSize: 11,
    miniMapNickStrokeSize: 2,
    miniMapMyCellSize: 7.5,
    miniMapMyCellStrokeSize: 4,
    miniMapTeammatesSize: 5.5,
    miniMapGhostCellsAlpha: 0.15,
    customBackground: '',
    customCursor: 'https://legendmod.ml/cursors/cursor_02.cur'
}
cimg2 = new Image;
cimg2.src = defaultSettings.commanderImage2;
cimg5 = new Image;
cimg5.src = defaultSettings.commanderImage5;
cimg6 = new Image;
cimg6.src = defaultSettings.commanderImage6;
cimg7 = new Image;
cimg7.src = 'https://legendmod.ml/banners/iconLcForCanvas.png';
cimgSpecialSkinEffectsCrown = new Image;
cimgSpecialSkinEffectsCrown.src = 'https://legendmod.ml/banners/iconSpecialSkinEffectsCrown.png';
cimgSpecialSkinEffectsMask = new Image;
cimgSpecialSkinEffectsMask.src = 'https://legendmod.ml/banners/iconSpecialSkinEffectsMask.png';
cimgSpecialSkinEffectsHat3 = new Image;
cimgSpecialSkinEffectsHat3.src = 'https://legendmod.ml/banners/iconSpecialSkinEffectsHat3.png';

if (dyinglight1load == "yes") {
    cimgDyingLight = new Image;
    cimgDyingLight.src = defaultSettings.commanderImageDyingLight;
    cimgDyingLightvirus = new Image;
    cimgDyingLightvirus.src = defaultSettings.commanderImageDyingLightvirus;
}
/*
                cimgDyingLight1 = new Image;
                cimgDyingLight1.src = 'https://legendmod.ml/banners/icondyinglightzombie2.png';
                cimgDyingLight2 = new Image;
                cimgDyingLight2.src = 'https://legendmod.ml/banners/icondyinglightzombie3.png';
                cimgDyingLight3 = new Image;
                cimgDyingLight3.src = 'https://legendmod.ml/banners/icondyinglightzombie4.png';
                cimgDyingLight4 = new Image;
                cimgDyingLight4.src = 'https://legendmod.ml/banners/icondyinglightzombie5.png';
                cimgDyingLight5 = new Image;
                cimgDyingLight5.src = 'https://legendmod.ml/banners/icondyinglightzombiebig.png';
                cimgDyingLight6 = new Image;
                cimgDyingLight6.src = 'https://legendmod.ml/banners/icondyinglightvolaltile.png';
				*/


var SkinExplain = [{
        name: "imgur.com",
        url: "https://imgur.com/",
        example: "https://i.imgur.com/xdmUp5N.png",
        pattern: "https?://w+.imgur.com/w{6,}.(?:%file_ext%)??d*"
    },
    {
        name: "put.re",
        url: "https://put.re/",
        example: "https://s.put.re/iYHAW65g.png",
        pattern: "https?://w+.put.re/w{8,}.(?:%file_ext%)"
    },
    {
        name: "postimages.org",
        url: "https://postimages.org/",
        example: "https://i.postimg.cc/zzK0sRPg/xdmUp5N.png",
        pattern: "https?://w+.postimg.cc/w{8,}/w+.(?:%file_ext%)"
    }
];
var defaultmapsettings = {
    isAlphaChanged: false,
    jellyPhisycs: false,
    virusSound: false,
    quickResp: true,
    autoResp: false,
    autoZoom: false,
    autoHideNames: true,
    autoHideMass: true,
    autoHideFood: false,
    autoHideFoodOnZoom: false,
    noNames: false,
    optimizedNames: true,
    hideMyName: false,
    hideTeammatesNames: false,
    showMass: true,
    optimizedMass: true,
    shortMass: true,
    virMassShots: true,
    hideMyMass: false,
    hideEnemiesMass: false,
    vanillaSkins: false,
    customSkins: true,
    videoSkins: true,
    videoSkinsMusic: false,
    myTransparentSkin: false,
    myCustomColor: false,
    transparentCells: false,
    transparentViruses: true,
    transparentSkins: false,
    showGrid: true,
    showBgSectors: false,
    showMapBorders: true,
    showGhostCells: false,
    showGhostCellsInfo: false,
    showPartyBots: false,
    showMiniMap: true,
    rotateMap: true,
    showMiniMapGrid: false,
    showMiniMapGuides: true,
    showExtraMiniMapGuides: true,
    showMiniMapGhostCells: true,
    oneColoredTeammates: false,
    optimizedFood: true,
    rainbowFood: true,
    oppColors: true,
    oppRings: true,
    virColors: false,
    splitRange: false,
    qdsplitRange: true, //Sonia2
    sdsplitRange: false, //Sonia2
    virusesRange: false,
    textStroke: false,
    namesStroke: true,
    massStroke: true,
    cursorTracking: false,
    FBTracking: true,
    //ingameSpectator2: false,
    //fullSpectator2: false,	
    teammatesInd: true,
    mouseSplit: false,
    mouseFeed: false,
    mouseInvert: false,
    disableChat: false,
    coloredNicks: false,
    hideChat: false,
    chatSounds: true,
    chatEmoticons: true,
    showChatBox: false,
    hidecountry: false,
    showChatImages: true,
    showChatVideos: true,
    showTop5: true,
    showTargeting: true,
    showLbData: true,
    showTime: false,
    //normalLb: true,
    centeredLb: true,
    fpsAtTop: true,
    tweenMaxEffect: false,
    showStats: true,
    showStatsMass: true,
    showStatsESTE: false,
    showStatsEMTE: false,
    showStatsMTE: false,
    showStatsSTE: false,
    showStatsTTE: false,
    showStatsPTE: false,
    showStatsSTE: false,
    showStatsN16: true,
    showStatsFPS: true,
    blockPopups: false,
    streamMode: false,
    hideSkinUrl: false,
    showQuickMenu: true,
    showQuickBots: false,
    showSkinsPanel: true,
    animation: 120,
    macroFeeding: 80,
    profileNumber: 15,
    ////
    cameraSpeed: 7,
    commanderDelay: 1E3,
    suckAnimation: false,
    virusGlow: false,
    borderGlow: false,
    limLB: 10,
    limTP: 5,
    teamView: false,
    ////
    //'zoomSpeedValue: .87,
    zoomSpeedValue2: -0.13,
    messageSound: 'https://legendmod.ml/sounds/notification_01.mp3',
    //                commandSound: 'https://legendmod.ml/sounds/notification_02.mp3'
    commandSound: 'https://legendmod.ml/sounds/chat-message.mp3',
    virusSoundurl: 'https://legendmod.ml/sounds/sound-gunshot.mp3',
    soundSplit: 'https://www.myinstants.com/media/sounds/quack_5.mp3',
    FacebookIDs: ''

};
var profiles = [];
var ogarcopythelb = {
    nick: 'I<3Legendmod',
    clanTag: '℄',
    skinURL: '',
    color: defaultSettings.mainColor
};

	
var lang = 'en';
userLanguage = window.navigator.language || window.navigator.userLanguage;
if (userLanguage && displayText.hasOwnProperty(userLanguage)) {
    lang = userLanguage;
}
var textLanguage = displayText[lang];


    chatCommand = {
        comm0: textLanguage.comm0,
        comm1: textLanguage.comm1,
        comm2: textLanguage.comm2,
        comm3: textLanguage.comm3,
        comm4: textLanguage.comm4,
        comm5: textLanguage.comm5,
        comm6: textLanguage.comm6,
        comm7: textLanguage.comm7,
        comm8: textLanguage.comm8,
        comm9: textLanguage.comm9,
        comm10: textLanguage.comm10,
        comm11: textLanguage.comm11,
        comm12: textLanguage.comm12,
        comm13: textLanguage.comm13,
        comm14: textLanguage.comm14,
        comm15: textLanguage.comm15,
        comm16: textLanguage.comm16,
        comm17: textLanguage.comm17,
        comm18: textLanguage.comm18,
        comm19: textLanguage.comm19,
        comm20: textLanguage.comm20,
        comm21: textLanguage.comm21,
        comm22: textLanguage.comm22,
        comm23: textLanguage.comm23,
        comm24: textLanguage.comm24,
        comm25: textLanguage.comm25,
        comm26: textLanguage.comm26,
        comm27: textLanguage.comm27,
        comm28: textLanguage.comm28,
        comm29: textLanguage.comm29,
        comm30: textLanguage.comm30
    }
	
//var thelegendmodproject = function(t, e, i) {
function thelegendmodproject() {
    var application;
    var o = null;
    var a = null;
    //a = null,
    /*    lang = 'en',
            userLanguage = window.navigator.language || window.navigator.userLanguage;
        if (userLanguage && displayText.hasOwnProperty(userLanguage)){
			lang = userLanguage;
		}
        var textLanguage = displayText[lang];*/
    //if (displayText[r].comm15 != undefined) {
    //console.log(textLanguage.comm15);
    //}

    Settings = {
        menuMainColorCSS: null,
        menuPanelColorCSS: null,
        menuTextlColorCSS: null,
        menuButtonsCSS: null,
        hudCSS: null,
        chatCSS: null,
        chatScaleCSS: null,
        cursorCSS: null,
		loadThemeSettings() {
            let storage = null;
            if (window.localStorage.getItem('ogarioThemeSettings') !== null) {
                storage = JSON.parse(window.localStorage.getItem('ogarioThemeSettings'));
            }
            for (const setup in defaultSettings) {
                if (defaultSettings.hasOwnProperty(setup)) {
                    if (storage && storage.hasOwnProperty(setup)) {
                        defaultSettings[setup] = storage[setup];
                    }
                    if (ogario.hasOwnProperty(setup)) {
                        ogario[setup] = defaultSettings[setup];
                    }
                }
            }
        },
        saveThemeSettings() {
            window.localStorage.setItem('ogarioThemeSettings', JSON.stringify(defaultSettings));
        },
        restoreThemeSettings() {
            if (window.localStorage.getItem('ogarioThemeSettings') !== null) {
                window.localStorage.removeItem('ogarioThemeSettings');
                window.location.reload();
            }
        },
        addCustomCSS(name, css) {
            if (!this[name]) {
                this[name] = $("<style type='text/css'>").appendTo('head');
            }
            this[name].html(css);
        },
        addPresetBox(id, name, options, value, callback) {
            for (var option in $(id).append('<div class=\"preset-box\"><span class=\"title-box\">' + textLanguage[name] + '</span><div class=\"select-wrapper\"><select id=\"' + name + '\" class=\"form-control\"></select></div></div>'), options) {
                options.hasOwnProperty(option) && $('#' + name).append('<option value=\"' + option + '\">' + options[option]['name'] + '</option>');
            }
            $('#' + name).val(defaultSettings[value]);
            var app = this;
            $('#' + name).on('change', function() {
                var id = this.value;
                defaultSettings[value] = id;
                app[callback](id);
            });
        },
        addColorBox(id, name, callback) {
            $(id).append('<div class=\"color-box\"><span class=\"title-box\">' + textLanguage[name] + '</span><div class=\"input-group ' + name + '-picker\"><input type=\"text\" value=\"' + defaultSettings[name] + '\" id=\"' + name + '\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div>');
            if (callback) {
                var app = this;
                $(id + ' .' + name + '-picker').colorpicker({
                    'format': 'hex'
                }).on('changeColor.colorpicker', function(id) {
                    defaultSettings[name] = id.color.toHex();
                    ogario.hasOwnProperty(name) && (ogario[name] = defaultSettings[name]);
                    app[callback]();
                });
            } else $(id + ' .' + name + '-picker').colorpicker({
                'format': 'hex'
            }).on('changeColor.colorpicker', function(id) {
                defaultSettings[name] = id.color.toHex();
                    if (ogario.hasOwnProperty(name)){
						ogario[name] = defaultSettings[name];
					}
            });
        },
        addRgbaColorBox(id, name, callback) {
            $(id).append('<div class=\"color-box\"><span class=\"title-box\">' + textLanguage[name] + '</span><div class=\"input-group ' + name + '-picker\"><input type=\"text\" value=\"' + defaultSettings[name] + '\" id=\"' + name + '\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div>');
            if (callback) {
                var app = this;
                $(id + ' .' + name + '-picker').colorpicker({
                    'format': 'rgba'
                }).on('changeColor.colorpicker', function(ids) {
                    var color = ids.color.toRGB();
                    defaultSettings[name] = 'rgba(' + color['r'] + ',' + color['g'] + ',' + color['b'] + ',' + color['a'] + ')';
                        if (ogario.hasOwnProperty(name)){ 
							ogario[name] = defaultSettings[name];
						}
                        app[callback]();
                });
            } else {
                (id + ' .' + name + '-picker').colorpicker({
                    'format': 'rgba'
                }).on('changeColor.colorpicker', function(ids) {
                    var color = ids.color.toRGB();
                    defaultSettings[name] = 'rgba(' + color['r'] + ',' + color['g'] + ',' + color['b'] + ',' + color['a'] + ')';
                        ogario.hasOwnProperty(name) && (ogario[name] = defaultSettings[name]);
                });
            }
        },
        addSliderBox(id, name, min, max, step, callback) {
            $(id).append('<div class=\"slider-box\"><div class=\"box-label\"><span class=\"value-label\">' + textLanguage[name] + ': </span><span id=\"' + name + '-value\" class=\"value\">' + defaultSettings[name] + '</span></div><input id=\"' + name + '-slider\" type=\"range\" min=\"' + min + '\" max=\"' + max + '\" step=\"' + step + '\" value=\"' + defaultSettings[name] + '\"></div>');
            if (callback) {
                var app = this;
                $('#' + name + '-slider').on('input', function() {
                    var t = parseFloat($(this).val());
                    $('#' + name + '-value').text(t);
                    defaultSettings[name] = t;
                    if (ogario.hasOwnProperty(name)) {
                        ogario[name] = t;
                    }
                    app[callback]();
                });
            } else $('#' + name + '-slider').on('input', function() {
                var t = parseFloat($(this).val());
                $('#' + name + '-value').text(t);
                defaultSettings[name] = t;
                if (ogario.hasOwnProperty(name)) {
                    ogario[name] = t;
                }
            });
        },
        addInputBox(id, name, holder, callback) {
            $(id).append('<div class=\"input-box\"><span class=\"title-box\">' + textLanguage[name] + '</span><input id=\"' + name + '\" class=\"form-control\" placeholder=\"' + holder + '\" value=\"' + defaultSettings[name] + '\" /></div>');
            var app = this;
            $('#' + name).on('input', function() {
                defaultSettings[name] = this.value;
                app[callback]();
            });
        },
        addCursorBox(id, url) {
            if (url === defaultSettings.customCursor) {
                $(id).append('<div class=\"cursor-box\"><a href=\"#\" class=\"active\"><img src=\"' + url + '\"></a></div>');
            } else {
                $(id).append('<div class=\"cursor-box\"><a href=\"#\"><img src=\"' + url + '\"></a></div>');
            }
        },
        setFont(id, fontFamily) {
            defaultSettings[id] = fontFamily;
                defaultSettings[id + 'Family'] = this.setFontFamily(fontFamily);
                defaultSettings[id + 'Weight'] = this.setFontWeight(fontFamily);
                if (ogario.hasOwnProperty(id + 'Family')) ogario[id + 'Family'] = defaultSettings[id + 'Family'];
                if (ogario.hasOwnProperty(id + 'Weight')) ogario[id + 'Weight'] = defaultSettings[id + 'Weight'];
        },
        addFontBox(id, name, callback) {
            $(id).append('<div class=\"font-box\"><span class=\"title-box\">' + textLanguage[name] + '</span><div class=\"select-wrapper\"><select id=\"' + name + '\" class=\"form-control\"></select></div></div>');
            $('#' + name).append('<option value=\"ubuntu\">Ubuntu</option><option value=\"ubuntu-bold\">Ubuntu Bold</option>');
            $('#' + name).append('<option value=\"roboto\">Roboto</option><option value=\"roboto-bold\">Roboto Bold</option>');
            $('#' + name).append('<option value=\"oswald\">Oswald</option><option value=\"oswald-bold\">Oswald Bold</option>');
            $('#' + name).append('<option value=\"shojumaru\">Shojumaru</option><option value=\"shojumaru-bold\">Shojumaru Bold</option>');
            $('#' + name).append('<option value=\"allura\">Allura</option><option value=\"allura-bold\">Allura Bold</option>');

            $('#' + name).val(defaultSettings[name]);
            var app = this;
            callback ? $('#' + name).on('change', function() {
                var app = this.value;
                app.setFont(name, app);
				app[callback]();
            }) : $('#' + name).on('change', function() {
                var app = this.value;
                app.setFont(name, app);
            });
        },
        setFontFamily(name) {
            var tempFont;
            if (name.indexOf('roboto') == 0) {
                tempFont = 'Roboto';
            } else if (name.indexOf('oswald') == 0) {
                tempFont = 'Oswald';
            } else if (name.indexOf('shojumaru') == 0) {
                //console.log('font: shojumaru');
                tempFont = 'Shojumaru';
            } else if (name.indexOf('allura') == 0) {
                //console.log('font: allura');
                tempFont = 'Allura';
            }
            //					else (if t.indexOf('ubuntu')){
            else {
                tempFont = 'Ubuntu';
            }

            return tempFont;
            //return -1 != t.indexOf('roboto') ? 'Roboto' : -1 != t.indexOf('oswald') ? 'Oswald' : 'Ubuntu';
        },
        setFontWeight(name) {
            if (name.indexOf('bold') != -1) {
                return 700;
            }
            return 400;
        },
        setThemeMenu() {
            //var t = this;
            $('#theme').append('<ul class=\"submenu-tabs\"><li class=\"theme-main-tab active\"><a href=\"#theme-main\" class=\"active ogicon-paint-format\" data-toggle=\"tab-tooltip\" title=\"' + textLanguage.basicTheming +
                '\"></a></li><li class=\"theme-menu-tab\"><a href=\"#theme-menu\" class=\"ogicon-menu\" data-toggle=\"tab-tooltip\" title=\"' + textLanguage.menuTheming +
                //
                //'\"></a></li><li class=\"theme-menu-tab\"><a href=\"#theme-menu\" class=\"ogicon-trophy\" data-toggle=\"tab-tooltip\" title=\"' + textLanguage.menuTheming +
                //
                '\"></a></li><li class=\"theme-hud-tab\"><a href=\"#theme-hud\" class=\"ogicon-display\" data-toggle=\"tab-tooltip\" title=\"' + textLanguage.hudTheming +
                '\"></a></li><li class=\"theme-chat-tab\"><a href=\"#theme-chat\" class=\"ogicon-bubbles\" data-toggle=\"tab-tooltip\" title=\"' + textLanguage.chatTheming +
                '\"></a></li><li class=\"theme-minimap-tab\"><a href=\"#theme-minimap\" class=\"ogicon-location2\" data-toggle=\"tab-tooltip\" title=\"' + textLanguage.miniMapTheming +
                '\"></a></li><li class=\"theme-images-tab\"><a href=\"#theme-images\" class=\"ogicon-compass\" data-toggle=\"tab-tooltip\" title=\"' + textLanguage.imagesTheming +
                '\"></a></li></ul><div id=\"theme-main\" class=\"submenu-panel\"></div><div id=\"theme-menu\" class=\"submenu-panel\"></div><div id=\"theme-hud\" class=\"submenu-panel\"></div><div id=\"theme-chat\" class=\"submenu-panel\"></div><div id=\"theme-minimap\" class=\"submenu-panel\"></div><div id=\"theme-images\" class=\"submenu-panel\"></div>');
            this.addPresetBox('#theme-main', 'themePreset', themePresets, 'preset', 'changeThemePreset');
            this.addColorBox('#theme-main', 'bgColor', 'setBgColor');
            this.addColorBox('#theme-main', 'bordersColor');
            this.addColorBox('#theme-main', 'borderGlowColor');
            this.addColorBox('#theme-main', 'gridColor');
            this.addColorBox('#theme-main', 'sectorsColor');
            this.addColorBox('#theme-main', 'namesColor');
            this.addColorBox('#theme-main', 'namesStrokeColor');
            this.addColorBox('#theme-main', 'massColor');
            this.addColorBox('#theme-main', 'massStrokeColor');
            this.addColorBox('#theme-main', 'virusColor');
            this.addColorBox('#theme-main', 'virusStrokeColor');
            this.addColorBox('#theme-main', 'mVirusColor');
            this.addColorBox('#theme-main', 'mVirusStrokeColor');
            this.addColorBox('#theme-main', 'virusGlowColor');
            this.addColorBox('#theme-main', 'foodColor', 'setFoodColor');
            this.addColorBox('#theme-main', 'teammatesIndColor', 'setIndicatorColor');
            this.addColorBox('#theme-main', 'cursorTrackingColor');
            this.addColorBox('#theme-main', 'splitRangeColor');
            this.addColorBox('#theme-main', 'enemyBSTEDColor'); //Sonia2
            this.addColorBox('#theme-main', 'enemyBSTEColor'); //Sonia2
            this.addColorBox('#theme-main', 'enemyBColor'); //Sonia2
            this.addColorBox('#theme-main', 'enemySColor'); //Sonia2
            this.addColorBox('#theme-main', 'enemySSTEColor'); //Sonia2
            this.addColorBox('#theme-main', 'enemySSTEDColor'); //Sonia2
            this.addColorBox('#theme-main', 'safeAreaColor');
            this.addColorBox('#theme-main', 'dangerAreaColor');
            this.addColorBox('#theme-main', 'ghostCellsColor');
            this.addFontBox('#theme-main', 'namesFont');
            this.addFontBox('#theme-main', 'massFont');
            this.addFontBox('#theme-main', 'sectorsFont');
            this.addSliderBox('#theme-main', 'sectorsX', 2, 10, 1);
            this.addSliderBox('#theme-main', 'sectorsY', 2, 10, 1);
            this.addSliderBox('#theme-main', 'sectorsFontSize', 200, 2000, 10);
            this.addSliderBox('#theme-main', 'namesScale', 0.5, 2, 0.1);
            this.addSliderBox('#theme-main', 'massScale', 1, 5, 1);
            this.addSliderBox('#theme-main', 'virMassScale', 1, 5, 1);
            this.addSliderBox('#theme-main', 'strokeScale', 1, 4, 0.1);
            this.addSliderBox('#theme-main', 'foodSize', 1, 50, 1, 'setFoodColor');
            this.addSliderBox('#theme-main', 'virusStrokeSize', 2, 40, 1);
            this.addSliderBox('#theme-main', 'bordersWidth', 2, 200, 2);
            this.addSliderBox('#theme-main', 'borderGlowSize', 0, 40, 1);
            this.addSliderBox('#theme-main', 'virusGlowSize', 0, 40, 1);
            this.addSliderBox('#theme-main', 'sectorsWidth', 2, 200, 2);
            this.addSliderBox('#theme-main', 'cellsAlpha', 0.01, 0.99, 0.01);
            this.addSliderBox('#theme-main', 'skinsAlpha', 0.01, 0.99, 0.01);
            this.addSliderBox('#theme-main', 'virusAlpha', 0, 1, 0.01);
            this.addSliderBox('#theme-main', 'textAlpha', 0.1, 1, 0.01);
            this.addSliderBox('#theme-main', 'ghostCellsAlpha', 0.01, 0.99, 0.01);
            this.addPresetBox('#theme-menu', 'menuPreset', themeMenus, 'menuPreset', 'changeMenuPreset');
            this.addSliderBox('#theme-menu', 'menuOpacity', 0.1, 1, 0.01, 'setMenuOpacity');
            this.addColorBox('#theme-menu', 'menuMainColor', 'setMenuMainColor');
            this.addColorBox('#theme-menu', 'menuBtnTextColor', 'setMenuButtons');
            this.addColorBox('#theme-menu', 'menuPanelColor', 'setMenuPanelColor');
            this.addColorBox('#theme-menu', 'menuPanelColor2', 'setMenuPanelColor');
            this.addColorBox('#theme-menu', 'menuTextColor', 'setMenuTextColor');
            this.addColorBox('#theme-menu', 'menuTextColor2', 'setMenuTextColor');
            this.addColorBox('#theme-menu', 'btn1Color', 'setMenuButtons');
            this.addColorBox('#theme-menu', 'btn1Color2', 'setMenuButtons');
            this.addColorBox('#theme-menu', 'btn2Color', 'setMenuButtons');
            this.addColorBox('#theme-menu', 'btn2Color2', 'setMenuButtons');
            this.addColorBox('#theme-menu', 'btn3Color', 'setMenuButtons');
            this.addColorBox('#theme-menu', 'btn3Color2', 'setMenuButtons');
            this.addColorBox('#theme-menu', 'btn4Color', 'setMenuButtons');
            this.addColorBox('#theme-menu', 'btn4Color2', 'setMenuButtons');
            this.addInputBox('#theme-menu', 'menuBg', 'Image URL', 'setMenuBg');
            this.addColorBox('#theme-hud', 'hudMainColor', 'setHudColors');
            this.addRgbaColorBox('#theme-hud', 'hudColor', 'setHudColors');
            this.addColorBox('#theme-hud', 'hudTextColor', 'setHudColors');
            this.addColorBox('#theme-hud', 'statsHudColor', 'setHudColors');
            this.addColorBox('#theme-hud', 'timeHudColor', 'setHudColors');
            this.addColorBox('#theme-hud', 'top5MassColor', 'setHudColors');
            this.addColorBox('#theme-hud', 'lbMeColor', 'setHudColors');
            this.addColorBox('#theme-hud', 'lbTeammateColor', 'setHudColors');
            this.addFontBox('#theme-hud', 'hudFont', 'setHudFont');
            this.addSliderBox('#theme-hud', 'hudScale', 0.5, 2, 0.01, 'setHudScale');
            this.addRgbaColorBox('#theme-chat', 'messageColor', 'setChatColors');
            this.addColorBox('#theme-chat', 'messageTextColor', 'setChatColors');
            this.addColorBox('#theme-chat', 'messageTimeColor', 'setChatColors');
            this.addColorBox('#theme-chat', 'messageNickColor', 'setChatColors');
            this.addRgbaColorBox('#theme-chat', 'commandsColor', 'setChatColors');
            this.addColorBox('#theme-chat', 'commandsTextColor', 'setChatColors');
            this.addColorBox('#theme-chat', 'commandsTimeColor', 'setChatColors');
            this.addColorBox('#theme-chat', 'commandsNickColor', 'setChatColors');
            this.addRgbaColorBox('#theme-chat', 'chatBoxColor', 'setChatColors');
            this.addSliderBox('#theme-chat', 'chatScale', 1, 2, 0.01, 'setChatScale');
            this.addColorBox('#theme-minimap', 'miniMapSectorsColor', 'setMiniMapSectorsColor');
            this.addColorBox('#theme-minimap', 'miniMapSectorColor');
            this.addColorBox('#theme-minimap', 'miniMapNickColor');
            this.addColorBox('#theme-minimap', 'miniMapNickStrokeColor');
            this.addColorBox('#theme-minimap', 'miniMapMyCellColor');
            this.addColorBox('#theme-minimap', 'miniMapMyCellStrokeColor');
            this.addColorBox('#theme-minimap', 'miniMapTeammatesColor');
            this.addColorBox('#theme-minimap', 'miniMapDeathLocationColor');
            this.addColorBox('#theme-minimap', 'miniMapGuidesColor');
            this.addColorBox('#theme-minimap', 'miniMapGhostCellsColor');
            this.addFontBox('#theme-minimap', 'miniMapFont', 'setMiniMapFont');
            this.addFontBox('#theme-minimap', 'miniMapNickFont');
            this.addSliderBox('#theme-minimap', 'miniMapWidth', 120, 400, 2, 'setMiniMapWidth');
            this.addSliderBox('#theme-minimap', 'miniMapSectorsOpacity', 0, 1, 0.01, 'setMiniMapSectorsOpacity');
            this.addSliderBox('#theme-minimap', 'miniMapNickSize', 8, 16, 1);
            this.addSliderBox('#theme-minimap', 'miniMapNickStrokeSize', 0, 6, 1);
            this.addSliderBox('#theme-minimap', 'miniMapMyCellSize', 4, 10, 0.5);
            this.addSliderBox('#theme-minimap', 'miniMapMyCellStrokeSize', 0, 10, 1);
            this.addSliderBox('#theme-minimap', 'miniMapTeammatesSize', 4, 10, 0.5);
            this.addSliderBox('#theme-minimap', 'miniMapGhostCellsAlpha', 0.01, 0.99, 0.01);
            this.addInputBox('#theme-images', 'customBackground', 'Image URL', 'setCustomBackground');
            this.addPresetBox('#theme-images', 'graphics', graphicMenus, 'graphics', 'changeGraphics');
            this.addInputBox('#theme-images', 'customCursor', 'Cursor image URL', 'setCustomCursor');
            /*this.addInputBox('.facebook-panel', 'FacebookIDs', `e.g. 123456789012345:John K,543210987654321:Jimbo`, `setFBIDs`);*/
            for (var e = 'https://legendmod.ml/cursors/cursor_', i = 0; i < 35; i++) i < 9 ? this.addCursorBox('#theme-images', e + '0' + (i + 1) + '.cur') : this.addCursorBox('#theme-images', e + '' + (i + 1) + '.cur');
            $(document).on('click', '#theme-images .cursor-box a', function(e) {
                    e.preventDefault();
                    var i = $('img', this).attr('src');
                    defaultSettings.customCursor = i;
                    Settings.setCustomCursor();
                    $('#customCursor').val(i);
                    $('#theme-images .cursor-box a').removeClass('active');
                    $(this).addClass('active');
                }),
                $('#theme').append('<button class=\"btn btn-block btn-success btn-save\"\">' + textLanguage.saveSett + '</button>'),
                $(document).on('click', '#theme .btn-save', function(e) {
                    e.preventDefault();
                    var i = $(this);
                    i.text(textLanguage.saved); 
					Settings.saveThemeSettings(); 
					setTimeout(function() {
                        i.text(textLanguage.saveSett);
                    }, 500);
                });
				$('#theme').append('<div class=\"restore-settings\"><a href=\"#\">' + textLanguage.restoreThemeSettings + '</a></div>'),
                $(document).on('click', '#theme .restore-settings a', function(e) {
                    e.preventDefault(), Settings.restoreThemeSettings();
                }), $('.skin').colorpicker({
                    'format': 'hex',
                    'input': '#color'
                });
        },
        changePreset(names, theme) {
            if (theme[names]) {
                defaultSettings[names] = names;
                var names = theme[names];
            } else {
                return;
            }
            for (const name in names) {
                if (names.hasOwnProperty(name) && defaultSettings.hasOwnProperty(name)) {
                    defaultSettings[name] = names[name];
                    if (ogario.hasOwnProperty(name)) {
                        ogario[name] = defaultSettings[name];
                    }
                    //console.log(name)
                    if ($('#theme .' + name + '-picker')) {
                        $('#theme .' + name + '-picker').colorpicker('setValue', defaultSettings[name]);
                    }
                    if ($('#' + name + '-slider')) {
                        $('#' + name + '-slider').val(defaultSettings[name]).change();
                    }				
                    if ($('input[type=text]#' + name) || $('select#' + name)) {
                        $('#' + name).val(defaultSettings[name]);
                    }
                }
            }
        },
        changeThemePreset(name) {
            this.changePreset(name, themePresets);
            this.setTheme();
        },
        setFonts() {
            this.setFont('namesFont', defaultSettings.namesFont);
            this.setFont('massFont', defaultSettings.namesFont);
            this.setFont('sectorsFont', defaultSettings.sectorsFont);
        },
        setBgColor() {
            $('body').css('background-color', defaultSettings.bgColor);
        },
        setFoodColor() {
            if (defaultmapsettings.optimizedFood && drawRender) {
                drawRender.preDrawPellet();
            }
        },
        setIndicatorColor() {
            if (drawRender) {
                drawRender.preDrawIndicator();
            }
        },
        setCustomBackground() {
            if (defaultSettings.customBackground) {
                $('body').css('background-image', 'url(' + defaultSettings.customBackground + ')')
            } else {
                $('body').css('background-image', 'none');
            }
        },
        setCustomCursor() {
            if (defaultSettings.customCursor) var css = '*{cursor:url(' + defaultSettings.customCursor + '), auto !important}';
            else css = '*{cursor: auto}';
            this.addCustomCSS('cursorCSS', css);
        },
        setMenu() {
            this.setMenuOpacity();
            this.setMenuMainColor();
            this.setMenuPanelColor();
            this.setMenuTextColor();
            this.setMenuButtons();
            this.setMenuBg();
        },
        changeMenuPreset(name) {
            this.changePreset(name, themeMenus);
            this.setMenu();
        },
        changeGraphics(value) {},
        setMenuOpacity() {
            $('#helloContainer, #hotkeys, #exp-imp').css('opacity', defaultSettings.menuOpacity);
        },
        setMenuMainColor() {
            var css = '::-moz-selection{background-color:' + defaultSettings.menuMainColor + '!important}::selection{background-color:' + defaultSettings.menuMainColor + '!important}.menu-main-color,#quick-menu a:hover,.quick,.quick:focus,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs a:hover,.submenu-tabs .active,#stats center,#exp-imp h1{color:' + defaultSettings.menuMainColor + '}#exp-bar .progress-bar-striped,.quick:hover,.rangeslider__fill{background-color:' + defaultSettings.menuMainColor + '}#main-menu,.agario-side-panel,#hotkeys,#exp-imp{border-color:' + defaultSettings.menuMainColor + '}.ps-scrollbar-y{background-color:' + defaultSettings.menuMainColor + '!important}';
            this.addCustomCSS('menuMainColorCSS', css);
        },
        setMenuPanelColor() {
            var css = '#main-menu,.agario-side-panel,#hotkeys,#exp-imp{background-color: ' + defaultSettings.menuPanelColor + '}label:hover,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.nick .input-group-btn,.skin .input-group-btn,#stream-mode,#hide-url,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs,#exp-bar .progress,#quick-menu a:hover,.quick,.select-wrapper,#hotkeys-cfg div.row:hover,#hotkeys-cfg .command-in,#exp-imp-settings textarea,.restore-settings{background-color: ' + defaultSettings.menuPanelColor2 + '}.agario-panel h5,.agario-side-panel h5,#stats h2,.menu-tabs,.submenu-tabs,#skins a.default,#stats hr,#hotkeys-cfg div.row, #exp-imp h1{border-color: ' + defaultSettings.menuPanelColor2 + '}.quick:hover,#skins a,#profiles{color:' + defaultSettings.menuPanelColor2 + '}input.stream-mode,input.hide-url{color:' + defaultSettings.menuPanelColor2 + '!important}';
            this.addCustomCSS('menuPanelColorCSS', css);
        },
        setMenuTextColor() {
            var css = '.agario-panel,.agario-side-panel,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.dark .yt-username,#stream-mode,#hide-url,.menu-tabs a,.submenu-tabs a,#skins a.default:hover,#quick-menu a,#prev-profile.default:hover,#next-profile.default:hover,#statsText,#hotkeys,#hotkeys-cfg .command-in,#exp-imp{color:' + defaultSettings.menuTextColor + '}#skins a.default:hover{border-color:' + defaultSettings.menuTextColor + '}::-webkit-input-placeholder{color:' + defaultSettings.menuTextColor2 + '!important}::-moz-placeholder{color:' + defaultSettings.menuTextColor2 + '!important}#user-id-tag, #version-tag,#statsSubtext,#hotkeys-inst,#exp-imp textarea,.restore-settings a,.restore-settings a:hover{color:' + defaultSettings.menuTextColor2 + '}#hotkeys-cfg .command-in,#theme .color-box{border-color:' + defaultSettings.menuTextColor2 + '}';
            this.addCustomCSS('menuTextColorCSS', css);
        },
        setMenuButtons() {
            var css = 'a,a:hover{color:' + defaultSettings.btn1Color + '}.btn,#hotkeys-cfg .custom-key-in{color:' + defaultSettings.menuBtnTextColor + '}.btn-primary{background-color:' + defaultSettings.btn1Color + '!important}.btn-primary:active,.btn-primary:disabled,.btn-primary:focus,.btn-primary:hover{background-color:' + defaultSettings.btn1Color2 + '!important}.btn-success{background-color:' + defaultSettings.btn2Color + '!important}.btn-success:active,.btn-success:disabled,.btn-success:focus,.btn-success:hover{background-color:' + defaultSettings.btn2Color2 + '!important}.btn-warning{background-color:' + defaultSettings.btn3Color + '!important}.btn-warning:active,.btn-warning:disabled,.btn-warning:focus,.btn-warning:hover{background-color:' + defaultSettings.btn3Color2 + '!important}.btn-danger{background-color:' + defaultSettings.btn4Color + '!important}.btn-danger:active,.btn-danger:disabled,.btn-danger:focus,.btn-danger:hover{background-color:' + defaultSettings.btn4Color2 + '!important}#hotkeys-cfg .custom-key-in{background-color:' + defaultSettings.btn4Color2 + ';border-color:' + defaultSettings.btn4Color2 + '}';
            this.addCustomCSS('menuButtonsCSS', css);
        },
        setMenuBg() {
            $('#menuBg').val(defaultSettings.menuBg);
            if (defaultSettings.menuBg) {
                $('.menu-panel, .agario-side-panel, #hotkeys, #exp-imp').css('background-image', 'url(' + defaultSettings.menuBg + ')');
            } else {
                $('.menu-panel, .agario-side-panel, #hotkeys, #exp-imp').css('background-image', 'none');
            }
        },
        setHud() {
            this.setHudColors();
            this.setHudFont();
            this.setHudScale();
        },
        setHudColors() {
            var css = '.hud-main-color,#top5-hud a,#target-panel-hud a:hover,#target-panel-hud a.active,#message-menu a{color:' + defaultSettings.hudMainColor + '}.hud,.hud-b,#chat-emoticons{background-color:' + defaultSettings.hudColor + '}.hud,.hud-b,#top5-hud a:hover,#target-panel-hud a{color:' + defaultSettings.hudTextColor + '}.stats-hud-color{color:' + defaultSettings.statsHudColor + '}.time-hud-color{color:' + defaultSettings.timeHudColor + '}.top5-mass-color{color:' + defaultSettings.top5MassColor + '}#leaderboard-positions .me{color:' + defaultSettings.lbMeColor + '}#leaderboard-positions .teammate{color:' + defaultSettings.lbTeammateColor + '}';
            this.addCustomCSS('hudCSS', css);
        },
        setHudFont() {
            this.setFont('hudFont', defaultSettings.hudFont);
            $('#overlays-hud').css({
                'font-family': defaultSettings.hudFontFamily,
                'font-weight': defaultSettings.hudFontWeight
            });
        },
        setHudScale() {
            var t = Math.round(20 * defaultSettings.hudScale);
            var e = Math.round(200 * defaultSettings.hudScale);
            var i = Math.floor(55 * defaultSettings.hudScale);
            var o = Math.floor(6 * defaultSettings.hudScale);
            var a = Math.floor(280 * defaultSettings.hudScale);
            var n = Math.floor(85 * defaultSettings.hudScale);
            var r = Math.floor(20 * defaultSettings.hudScale);
            $('#overlays-hud').css('font-size', t + 'px');
            $('#leaderboard-hud, #time-hud').width(e);
            $('#top5-hud').width(e + 30).css('top', i + 'px');
            $('#top5-pos').css('padding-left', o + 'px');
            $('#time-hud').css('top', a + 'px');
            $('#pause-hud').css('top', n + 'px');
            $('#target-hud').css('padding-top', r + 'px');
        },
        setChat() {
            this.setChatColors();
            this.setChatScale();
        },
        setChatColors() {
            var css = '#message,#messages li,.toast-success{background-color:' + defaultSettings.messageColor + '}#message,.message-text,.toast-success .message-text{color:' + defaultSettings.messageTextColor + '}.message-nick,.mute-user,.mute-user:hover,.toast-success .message-nick,.toast .mute-user,.toast .mute-user:hover{color:' + defaultSettings.messageNickColor + '}.message-time{color:' + defaultSettings.messageTimeColor + '}.toast-warning{background-color:' + defaultSettings.commandsColor + '}.command-text,.toast-warning .command-text{color:' + defaultSettings.commandsTextColor + '}.command-nick,.toast-warning .command-nick,.toast-warning .mute-user,.toast-warning .mute-user:hover{color:' + defaultSettings.commandsNickColor + '}.command-time{color:' + defaultSettings.commandsTimeColor + '}#chat-box{background-color:' + defaultSettings.chatBoxColor + '}';
            this.addCustomCSS('chatCSS', css);
        },
        setChatScale() {
            var message = Math.round(14 * defaultSettings.chatScale);
            var toastContainer = Math.round(280 * defaultSettings.chatScale);
            var messageBox = Math.round(350 * defaultSettings.chatScale);
            var chatBox = Math.round(300 * defaultSettings.chatScale);
            var userList = Math.floor(14 * defaultSettings.chatScale);
            $('#message-box, #messages, #toast-container, #chat-box').css('font-size', message + 'px');
            $('#messages, #toast-container, #chat-box').width(toastContainer);
            $('#message-box').width(messageBox);
            $('#chat-box').height(chatBox);
            $('.user-list').css('padding-left', userList + 'px');
            var css = '#toast-container{width:' + toastContainer + 'px;font-size:' + message + 'px}';
            this.addCustomCSS('chatScaleCSS', css);
        },
        setMiniMap() {
            this.setMiniMapFont();
            this.setMiniMapWidth();
            this.setMiniMapSectorsOpacity();
        },
        setMiniMapFont() {
            this.setFont('miniMapFont', defaultSettings.miniMapFont);
            if (application) {
                application.resetMiniMapSectors();
            }
        },
        setMiniMapWidth() {
            var t = defaultSettings.miniMapWidth / 200;
            defaultSettings.miniMapTop = Math.round(20 * t);
            $('#minimap-hud').css({
                'width': defaultSettings.miniMapWidth,
                'height': defaultSettings.miniMapWidth + defaultSettings.miniMapTop
            });
            if (application) {
                application.resetMiniMapSectors();
            }
        },
        setMiniMapSectorsColor() {
            if (application) {
                application.resetMiniMapSectors();
            }
        },
        setMiniMapSectorsOpacity() {
            $('#minimap-sectors').css('opacity', defaultSettings.miniMapSectorsOpacity);
        },
        setTheme() {
            this.setFonts();
            this.setBgColor();
            this.setCustomBackground();
            this.setCustomCursor();
            this.setMenu();
            this.setHud();
            this.setChat();
            this.setMiniMap();
        },
        init() {
            this.loadThemeSettings();
        }
    }

    //window.legendmod4 = languagetexts;
    window.legendmod5 = defaultmapsettings;

    var application = window.application = {
        name: 'LM express',
        version: 'v1',
        privateMode: false,
        protocolMode: true,
        publicIP: 'wss://wss.ogario.eu:3443',
        privateIP: null,
        updateInterval: 1000,
        updateTick: 0,
        updateMaxTick: 2,
        currentSector: '',
        miniMap: null,
        miniMapCtx: null,
        miniMapSectors: null,
        pi2: 2 * Math.PI,
        socket: null,
        cells: {},
        teamPlayers: [],
        parties: [],
        chatHistory: [],
        chatUsers: {},
        chatMutedUsers: {},
        chatMutedUserIDs: [],
        customSkinsCache: {},
        customSkinsMap: {},
        cacheQueue: [],
        cacheQueue2: [],
        cacheQueue3: [],
		cacheQueue4: [],
        deathLocations: [],
        playerID: null,
        playerMass: 0,
        selectedProfile: 0,
        lastDeath: 0,
        skipServerData: false,
        gameMode: ':ffa',
        region: '',
        partyToken: '',
        ws: '',
        serverIP: '',
        serverArena: '',
        serverToken: '',
        lastSentNick: '',
        lastSentClanTag: null,
        lastSentSkinURL: '',
        lastSentCustomColor: '',
        lastSentPartyToken: '',
        lastSentServerToken: '',
        lastMessageSentTime: Date.now(),
        rFps: 0,
        renderedFrames: 0,
        fpsLastRequest: null,
        statsHUD: null,
        leaderboardPositionsHUD: null,
        leaderboardDataHUD: null,
        activeParties: null,
        top5pos: null,
        top5totalMass: null,
        top5totalPlayers: null,
        top5limit: 5,
        timeHUD: null,
        questHUD: null,
        retryResp: 0,
        token: 'TGVnZW5kIGV4cHJlc3M=',
        canvasScale: 1,
        selectBiggestCell: true,
        noColors: false,
        skipStats: false,
        showQuest: false,
        showSplitInd: false,
        pause: false,
        spectatorFollow: false,
        targetID: 0,
        targetStatus: 0,
        targetNick: '',
        targetSkinURL: '',
        targeting: false,
        privateMiniMap: false,
        messageSound: null,
        commandSound: null,
        virusSound: null,
        virusSoundurl: null,
        FacebookIDs: null,
        feedInterval: null,
        getPlayerX() {
            return ogario.playerX + ogario.mapOffsetX;
        },
        getPlayerY() {
            return ogario.playerY + ogario.mapOffsetY;
        },
        //for SPECT
        getghostX() {
            if (legendmod.playerPosition == 1 || legendmod.ghostCells.length == 0) { //Yahnych координати призраков или игрока если он топ1
                this.ghostX = legendmod.playerX + legendmod.mapOffsetX;
            } else { //Yahnych
                this.ghostX = legendmod.ghostCells[0].x + legendmod.mapOffsetX;
            }
            return this.ghostX;
        },
        getghostY() {
            if (legendmod.playerPosition == 1 || legendmod.ghostCells.length == 0) { //Yahnych координати призраков или игрока если он топ1
                this.ghostY = legendmod.playerY + legendmod.mapOffsetY;
            } else { //Yahnych
                this.ghostY = legendmod.ghostCells[0].y + legendmod.mapOffsetY;
            }
            return this.ghostY;
        },
        //
        feed() {
            if (window.core && window.core.eject) {
                window.core.eject();
            }
        },
        macroFeed(on) {
            if (on) {
                if (this.feedInterval) return;
                var app = this;
                this.feed();
                    this.feedInterval = setInterval(function() {
                        app.feed();
                    }, defaultmapsettings.macroFeeding);
            } else if (this.feedInterval) {
                clearInterval(this.feedInterval);
                this.feedInterval = null
            };
        },
        split() {
            if (window.core && window.core.split) window.core.split();
        },
        doubleSplit() {
            var app = this;
            app.split();
            setTimeout(function() {
                app.split();
            }, 40);
        },
        popSplit() {
            var app = this;
            app.split();
            setTimeout(function() {
                app.split();
            }, 200);
        },
        split16() {
            var app = this;
            app.split();
            setTimeout(function() {
                app.split();
            }, 40);
            setTimeout(function() {
                app.split();
            }, 80);
            setTimeout(function() {
                app.split();
            }, 120);
        },
        toggleSkins() {
            if (ogario.vanillaSkins && ogario.customSkins) {
                ogario.vanillaSkins = false;
            } else if (!ogario.vannillaSkins && ogario.customSkins) {
                ogario.vanillaSkins = true;
                ogario.customSkins = false;
            } else {
                ogario.vanillaSkins = true;
                ogario.customSkins = true;
            }
        },
        toggleCells() {
            this.selectBiggestCell = !this.selectBiggestCell;
            ogario.selectBiggestCell = this.selectBiggestCell;
        },
        setShowTop5() {
            defaultmapsettings.showTop5 = !defaultmapsettings.showTop5;
            this.setTop5();
        },
        setTop5() {
            if (defaultmapsettings.showTop5) {
                $('#top5-hud').show()
            } else {
                $('#top5-hud').hide();
            }
        },
        setShowTargeting() {
            defaultmapsettings.showTargeting = !defaultmapsettings.showTargeting;
            this.setTargetingHUD();
        },
        setTargetingHUD() {
            if (defaultmapsettings.showTargeting) {
                $('#target-hud, #target-panel-hud').show();
            } else {
                $('#target-hud, #target-panel-hud').hide();
            }
        },
        setShowTime() {
            defaultmapsettings.showTime = !defaultmapsettings.showTime;
            if (defaultmapsettings.showTime) {
                $('#time-hud').show();
                this.displayTime()
            } else {
                $('#time-hud').hide();
            }
        },
        setShowSplitRange() {
            defaultmapsettings.splitRange = !defaultmapsettings.splitRange;
            ogario.splitRange = defaultmapsettings.splitRange;
        },
        setShowGhostCellsInfo() {
            if (defaultmapsettings.showGhostCells == false || defaultmapsettings.showGhostCellsInfo == false) {
                defaultmapsettings.showGhostCellsInfo = true;
                defaultmapsettings.showGhostCells = true;
            } else {
                defaultmapsettings.showGhostCellsInfo = false;
                defaultmapsettings.showGhostCells = false;
            }

        },
        setAutoPlay() {
            if (legendmod.pause) {
                application && application.setPause()
            };
            if (window.autoPlay == false) {
                window.autoPlay = true;
                $('#pause-hud').text("AI (Striker & Jimboy3100) SkyNet v0.06");
                $('#pause-hud').show();
            } else {
                window.autoPlay = false;
                $('#pause-hud').text(textLanguage.pause);
                $('#pause-hud').hide();
            }
        },
        setShowSplitInd() {
            this.showSplitInd = !this.showSplitInd;
            defaultmapsettings.splitRange = this.showSplitInd;
            defaultmapsettings.oppRings = this.showSplitInd;
            ogario.splitRange = defaultmapsettings.splitRange;
            ogario.oppRings = defaultmapsettings.oppRings;
        },
        setShowTeammatesInd() {
            defaultmapsettings.teammatesInd = !defaultmapsettings.teammatesInd;
        },
        setShowOppColors() {
            defaultmapsettings.oppColors = !defaultmapsettings.oppColors;
            ogario.oppColors = defaultmapsettings.oppColors;
        },
        setShowSkins() {
            this.noSkins = !this.noSkins;
            if (window.core && window.core.setSkins) {
                window.core.setSkins(!this.noSkins)
            }
            ogario.showCustomSkins = !this.noSkins;
            this.displayChatInfo(!this.noSkins, 'showSkinsMsg');
        },
        setTransparentSkins() {
            defaultmapsettings.transparentSkins = !defaultmapsettings.transparentSkins;
            ogario.transparentSkins = defaultmapsettings.transparentSkins;
        },
        setShowStats() {
            $('#stats-hud').toggle();
        },
        setShowFood() {
            ogario.showFood = !ogario.showFood;
        },
        setShowHUD() {
            $('#overlays-hud').toggle();
        },
        setShowGrid() {
            defaultmapsettings.showGrid = !defaultmapsettings.showGrid;
        },
        setShowMiniMapGuides() {
            defaultmapsettings.showMiniMapGuides = !defaultmapsettings.showMiniMapGuides;
        },
        setShowLb() {
            if (this.gameMode === ':teams') {
                return;
            }
            $('#leaderboard-hud').toggle();
        },
        setShowBgSectors() {
            defaultmapsettings.showBgSectors = !defaultmapsettings.showBgSectors;
        },
        setHideSmallBots() {
            ogario.hideSmallBots = !ogario.hideSmallBots;
            this.displayChatInfo(!ogario.hideSmallBots, 'hideSmallBotsMsg');
        },
        setShowNames() {
            defaultmapsettings.noNames = !defaultmapsettings.noNames;
        },
        setHideTeammatesNames() {
            defaultmapsettings.hideTeammatesNames = !defaultmapsettings.hideTeammatesNames;
        },
        setShowMass() {
            defaultmapsettings.showMass = !defaultmapsettings.showMass;
        },
        setShowMiniMap() {
            defaultmapsettings.showMiniMap = !defaultmapsettings.showMiniMap;
            this.setMiniMap();
        },
        setMiniMap() {
            if (defaultmapsettings.showMiniMap) {
                $('#minimap-hud').show()
            } else {
                $('#minimap-hud').hide();
            }
        },
        setShowQuest() {
            if (':ffa' === this.gameMode) {
                this.showQuest = !this.showQuest;
                this.setQuest();
            }
        },
        setShowFullSpectator() {
            if (window.fullSpectator) {
                window.fullSpectator = false;
                LM.flushSpecsData();
            } else if (!window.fullSpectator) {
                window.fullSpectator = true;
                LM.addSpect();
            }
        },
        setQuest() {
            if (this.showQuest && ':ffa' === this.gameMode) {
                $('#quest-hud').show();
            } else {
                $('#quest-hud').hide();
            }
        },
        toggleAutoZoom() {
            ogario.autoZoom = !ogario.autoZoom;
            this.displayChatInfo(ogario.autoZoom, 'autoZoomMsg');
        },
        resetZoom(on) {
            if (on) {
                ogario.zoomResetValue = 1;
                ogario.zoomValue = 1;
            } else {
                ogario.zoomResetValue = 0;
            }
        },
        setZoom(value) {
            ogario.zoomValue = value;
        },
        toggleDeath() {
            this.lastDeath--;
            if (this.lastDeath < 0) {
                this.lastDeath = this.deathLocations.length - 1;
            }
        },
        tryResp() {
            if (ogario.play || this.retryResp == 20) {
                this.retryResp = 0;
                return;
            }
            this.retryResp++;
            const app = this;
            setTimeout(() => {
                if ($('.btn-play-guest').is(':visible')) {
                    $('.btn-play-guest').click();
                } else {
                    $('.btn-play').click();
                }
                if (!ogario.play) {
                    app.tryResp();
                }
            }, 500);
        },
        quickResp() {
            if (defaultmapsettings.quickResp) {
                this.hideMenu();
                this.gameServerConnect(this.ws);
                ogario.play = false;
                this.tryResp();
            }
        },
        autoResp() {
            if (!defaultmapsettings.autoResp) {
                return;
            }
            this.setAutoResp();
            $('#overlays').stop().hide();
            if ($('.btn-play-guest').is(':visible')) {
                $('.btn-play-guest').click();
                return;
            }
            $('.btn-play').click();
        },
        setAutoResp() {
            if (defaultmapsettings.autoResp) {
                if (!$('#skipStats').prop('checked')) {
                    $('#skipStats').click();
                    this.skipStats = true;
                }
            }
        },
        toggleAutoResp() {
            defaultmapsettings.autoResp = !defaultmapsettings.autoResp;
            this.setAutoResp();
            this.displayChatInfo(defaultmapsettings.autoResp, 'autoRespMsg');
        },
        copyLb() {
            var input = $('<input>');
            $('body').append(input);
            input.val($('#leaderboard-positions').text()).select();
            try {
                document.execCommand('copy');
            } catch (ogarcopierlbcather) {}
            input.remove();
        },
        changeSpectatorMode() {
            this.spectatorFollow = !this.spectatorFollow;
            ogario.spectatorFollow = this.spectatorFollow;
            if (this.spectatorFollow && spects.length > 0 && spects[0].staticX == null && spects[0].isSpectateEnabled == true /*&& spects[0].isFreeSpectateEnabled==false*/ ) {
                spects[0].sendFreeSpectate();
            } else {
                void(0);
            }
        },
        setPause() {
            if (window.autoPlay) {
                if (application) application.setAutoPlay()
            };
            this.pause = !this.pause;
            ogario.pause = this.pause;
            if (this.pause) {
                ogario.resetTargetPosition();
                $('#pause-hud').show();
            } else {
                $('#pause-hud').hide();
            }
        },
        setCenteredLb() {
            if (defaultmapsettings.centeredLb) {
                $('#leaderboard-hud').addClass('hud-text-center');
            } else {
                $('#leaderboard-hud').removeClass('hud-text-center');
            }
        },
        //setNormalLb() {
        //defaultmapsettings.normalLb ? $('#leaderboard-hud h5').html(textLanguage.leaderboard) : $('#leaderboard-hud h5').html('legendmod');
        //},
        setFpsAtTop() {
            //defaultmapsettings.fpsAtTop ? $('#stats-hud').removeClass('hud-bottom').addClass('hud-top') : $('#stats-hud').removeClass('hud-top').addClass('hud-bottom');
            if (defaultmapsettings.fpsAtTop) {
                $('#stats-hud').removeClass('hud-bottom').addClass('hud-top');
            } else {
                $('#stats-hud').removeClass('hud-top').addClass('hud-bottom');
            }
        },
        setTweenMaxEffect() {
            if (defaultmapsettings.tweenMaxEffect) initTilt()
            //defaultmapsettings.tweenMaxEffect ? initTilt() : console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Restart needed...');
        },
        displayPartyBots() {
            setTimeout(function() {
                if (defaultmapsettings.showPartyBots) {
                    //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Party bots displayed');
                    $(".quick.quick-bots.ogicon-trophy").show();
                } else {
                    //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Party bots NOT displayed');
                    $(".quick.quick-bots.ogicon-trophy").hide();
                }
            }, 50);
        },
        setBlockPopups() {
            if (this.protocolMode) {
                $('#block-warn').hide();
                return;
            }
            if (defaultmapsettings.blockPopups) {
                this.blockPopups();
            } else {
                this.unblockPopups();
            }			
        },
        blockPopups() {
            $('#openfl-content, #openfl-overlay').hide();
            $('#openfl-content, #openfl-overlay').addClass('block-popups');
            $('#freeCoins, #gifting, #openShopBtn, #dailyQuests').prop('disabled', true);
            $('#block-warn').show();
        },
        unblockPopups() {
            $('#openfl-overlay.disabler').click();
            $('#openfl-content, #openfl-overlay').hide();
            $('#openfl-content, #openfl-overlay').removeClass('block-popups');
            $('#freeCoins, #gifting, #openShopBtn, #dailyQuests').prop('disabled', false);
            $('#block-warn').hide();
        },
        tempUnblockPopups() {
            if (defaultmapsettings.blockPopups) {
                this.unblockPopups();
            }
        },
        displayLeaderboard(position, data = '') {
            if (!this.leaderboardPositionsHUD) {
                return;
            }
            this.leaderboardPositionsHUD.innerHTML = position;
            this.leaderboardDataHUD.innerHTML = data;
        },
        displayStats() {
            if (defaultmapsettings.showStats) {
                var t = '';
                if (ogario.play) {
                    if (defaultmapsettings.showStatsMass && ogario.playerMass) {
                        //t += textLanguage.mass + ': ' + i.playerMass + ' | '
                        t += Languageletter49 + ': ' + ogario.playerMass + ' | '
                    }
                    if (ogario.playerScore) {
                        //t += textLanguage.score + ': ' + i.playerScore
                        t += Languageletter366 + ': ' + ogario.playerScore
                    }
                    if (defaultmapsettings.showStatsN16 && ogario.playerSplitCells) {
                        t += ' | ' + ogario.playerSplitCells + '/16'
                    }
                    if (defaultmapsettings.showStatsESTE && ogario.BSTE) {
                        t += ' | ◎◎➛◉: ' + ogario.BSTE //Sonia6
                    }
                    if (defaultmapsettings.showStatsEMTE && ogario.BMTE) {
                        t += ' | ◎➛◉: ' + ogario.BMTE //Sonia6
                    }
                    if (defaultmapsettings.showStatsMTE && ogario.MTE) {
                        t += ' | ◉➛◎: ' + ogario.MTE //Sonia6
                    }
                    if (defaultmapsettings.showStatsSTE && ogario.STE) {
                        t += ' | ◉◉➛◎: ' + ogario.STE //Sonia6
                    }
                    if (defaultmapsettings.showStatsTTE && ogario.TTE) {
                        t += ' | ◉➚◉: ' + ogario.TTE //Sonia6
                    }
                    if (defaultmapsettings.showStatsPTE && ogario.PTE) {
                        t += ' | ➚◎➘: ' + ogario.PTE //Sonia6
                    }
                    if (defaultmapsettings.showStatsFPS) {
                        t += ' | '
                    }
                }
                if (defaultmapsettings.showStatsFPS) {
                    t += 'FPS: ' + drawRender.fps;
                }
                this.statsHUD.textContent = t;
                var app = this;
                setTimeout(function() {
                    app.displayStats();
                }, 250);
            } else $('#stats-hud').hide();
        },
        displayTime() {
            if (defaultmapsettings.showTime) {
                var time = new Date().toLocaleString();
                this.timeHUD.textContent = time;
                var app = this;
                setTimeout(function() {
                    app.displayTime();
                }, 1000);
            } else $('#time-hud').hide();
        },
        displayParties() {
            let text = '';
            for (let length = 0; length < this.parties.length; length++) {
                text += '<li><a href=\"https://agar.io/#' + this.parties[e] + '\" onclick=\"$(\'#party-token\').val(\'' + this.parties[e] + '\'); $(\'#join-party-btn-2\').click();\">https://agar.io/#' + this.parties[e] + '</a></li>';
            }
            if (text === '') {
                this.activeParties.className = 'no-parties';
            } else {
                this.activeParties.className = '';
            }
            this.activeParties.innerHTML = text;
        },
        /*
                    displayTop5() {
                        if (defaultmapsettings.showTop5) {
        					//console.log(.top5.length);
        					//console.log(.teamPlayers.length);
                            for (var t = '', e = 0, s = this.top5.length, o = 0; o < s; o++) e += this.top5[o].mass, o >= this['top5limit'] || (t += '<li><span class=\"cell-counter\" style=\"background-color: ' + this.top5[o].color + '\">' + (o + 1) + '</span>', defaultmapsettings.showTargeting && (t += '<a href=\"#\" data-user-id=\"' + this.top5[o].id + '\" class=\"set-target ogicon-target\"></a> '), t += '<span class=\"hud-main-color\">[' + this.calculateMapSector(this.top5[o].x, this.top5[o].y) + ']</span>', t += 					'<span class=\"top5-mass-color\">[' + this.shortMassFormat(this.top5[o].mass) + ']</span> ' + this.escapeHTML(this.top5[o].nick) + '</li>');
                            this['top5pos'].innerHTML = t, i.play && i.playerMass && (e += i.playerMass, s++), this.top5totalMass.textContent= this.shortMassFormat(e), this.top5totalPlayers.textContent= s;
                        }
                    },
                    setTop5limit(t) {
                        t && (this['top5limit'] = t);
                    },

                displayTop5() {
                  if (defaultmapsettings.showTop5) {
                    var pix_color = "";
                    var bufferString = 0;
                    var PL$29 = this.top5.length;
                    var entityType = 0;
                    for (; entityType < PL$29; entityType++) {
                      bufferString = bufferString + this.top5[entityType].mass;
                      if (!(entityType >= defaultmapsettings["limTP"])) {
                        pix_color = pix_color + ('<li id="player"><span id="pos-skin" style="background-color: ' + this.top5[entityType].color + '; width: 30px; height:30px; display: inline-block;"><img style="position: absolute; margin-left: 2px; margin-top: 2px; width: 26px; height:26px; display: inline-block;"  src = ' + (this.top5[entityType]["skin"] ? this.top5[entityType]["skin"] : "https://legendmod.ml/banners/icon32croped.ico.gif") + '" alt=""> ' +
        				'<span class=\"top5-mass-color\">[' + this.shortMassFormat(this.top5[entityType].mass) + ']</span> ' + this.escapeHTML(this.top5[entityType].nick) + '</span><span class=\"hud-main-color\">[' + this.calculateMapSector(this.top5[entityType].x, this.top5[entityType].y) +']</span><span id= "top5mass" class=""> ' +
                        this.shortMassFormat(this.top5[entityType].mass) + '</span></li>');
                      }
                    }
                    this.top5pos.innerHTML = pix_color;
                    if (i["play"] && i.playerMass) {
                      bufferString = bufferString + i.playerMass;
                      PL$29++;
                    }
                    this.top5totalMass.textContent= this.shortMassFormat(bufferString);
                    this.top5totalPlayers.textContent= PL$29;
                  }
                },
        */
        displayTop5() {
            if (window.top5skins != true) {
                if (defaultmapsettings.showTop5) {
                    //console.log(.top5.length);
                    //console.log(.teamPlayers.length);
                    for (var t = '', e = 0, s = this.top5.length, o = 0; o < s; o++) {
                        e += this.top5[o].mass;
                        if (!(o >= window.teamboardlimit && this.top5[o].mass > 1)) {
                            t = t + '<li style=\"height: 16px;"\><span>' + (o + 1) + '. </span>';
                            defaultmapsettings.showTargeting && (t += '<a href=\"#\" data-user-id=\"' + this.top5[o].id + '\" class=\"set-target ogicon-target\"></a> ');
                            //
                            this.w = this.top5[o].x;
                            this.u = this.top5[o].y;
                            /*
                            this.w = window.legendmod.vector[window.legendmod.vnr][0] ? legendmod.translateX(this.top5[o].x) : this.top5[o].x;
                            this.u = window.legendmod.vector[window.legendmod.vnr][1] ? legendmod.translateY(this.top5[o].y) : this.top5[o].y;   
                            */
                            //
                            //t += '<span class=\"hud-main-color\">[' + this.calculateMapSector(this.top5[o].x, this.top5[o].y) + ']</span>',
                            t += '<span class=\"hud-main-color\">[' + this.calculateMapSector(this.w, this.u) + ']</span>';
                            t += '<span class=\"top5-mass-color\">[' + this.shortMassFormat(this.top5[o].mass) + ']</span> ' + this.escapeHTML(this.top5[o].nick) + '</li>';
                        }
                        this.top5pos.innerHTML = t,
                            ogario.play && ogario.playerMass && (e += ogario.playerMass, s++),
                            this.top5totalMass.textContent = this.shortMassFormat(e),
                            this.top5totalPlayers.textContent = s;
                    }
                }
            } else {
                if (defaultmapsettings.showTop5) {
                    //temp
                    var tempTime = new Date().getTime();
                    Object.getOwnPropertyNames(application.teamPlayers).forEach(function(element) {
                        if (application.teamPlayers && application.teamPlayers[element] && application.teamPlayers[element].lbgpi == -2 && application.teamPlayers[element].mass > 1) {
                            //console.log(application.teamPlayers[element].lastUpdatedTime, tempTime);
                            if (application.teamPlayers[element].lastUpdatedTime && ((application.teamPlayers[element].lastUpdatedTime) - tempTime < 6000)) {
                                application.teamPlayers[element].mass = 1;
                                application.teamPlayers[element].alive = false;
                            } else {

                                application.top5.push(application.teamPlayers[element]);
                            }
                        }
                    });
                    //
                    var t = "";
                    var e = 0;
                    var s = this.top5.length;
                    var o = 0;
                    for (; o < s; o++) {
                        e = e + this.top5[o].mass;
                        if (!(o >= window.teamboardlimit && this.top5[o].mass > 1)) {
                            /*
                                t = t + ('<li><a href="#" id="pos-skin" class= "set-target" data-user-id="' + this.top5[o].id + '"style="background-color: ' + this.top5[o].color + 
								'; width: 30px; height:30px; display: inline-block;"><img style="position: absolute; margin-left: 2px; margin-top: 2px; width: 26px; height:26px; display: inline-block;"  src = ' 
								+ (this.top5[o]["skin"] ? this.top5[o]["skin"] : "https://legendmod.ml/banners/icon32croped.ico.gif") + ' alt=""> ' + '</a><div style="margin-top: -30px; margin-left: 32px;">');*/
                            var teamboardskin = this.customSkinsCache[this.top5[o].skin + "_cached2"];
                            if (teamboardskin == null) {
                                teamboardskin = new Image();
                                teamboardskin.crossOrigin = 'anonymous';
                                teamboardskin.src = "https://legendmod.ml/banners/icon32croped.ico.gif";
                            }
                            t = t + ('<li><a href="#" id="pos-skin" class= "set-target" data-user-id="' + this.top5[o].id + '"style="background-color: ' + this.top5[o].color +
                                '; width: 30px; height:30px; display: inline-block;"><span style="position: absolute; margin-left: 2px; margin-top: 2px; width: 26px; height:26px; display: inline-block;" alt="">' +
                                teamboardskin.outerHTML + '</span>' + '</a><div style="margin-top: -30px; margin-left: 32px;">');
                            /* if (defaultmapsettings["showTargeting"]) {
                              t = t + ('<a href="#" data-user-id="' + this.top5[o].id + '" class="set-target ogicon-target"></a> ');
                            } */
                            var flag = false;
                            for (var et = 0; et < legendmod.ghostCells.length; et++) {
                                if (legendmod.leaderboard[et] && this.top5[o].nick == legendmod.leaderboard[et].nick) {
                                    if (flag == false && window.predictedGhostCells[et]) {
                                        //
                                        var w = window.predictedGhostCells[et].x;
                                        var u = window.predictedGhostCells[et].y;
                                        /*
                                        w = window.legendmod.vector[window.legendmod.vnr][0] ? legendmod.translateX(window.predictedGhostCells[e].x) : window.predictedGhostCells[e].x;
                                        u = window.legendmod.vector[window.legendmod.vnr][1] ? legendmod.translateY(window.predictedGhostCells[e].y) : window.predictedGhostCells[e].y;  		
                                        */
                                        //									
                                        //t = t + ('<span class="hud-main-color">[' + this.calculateMapSector(window.predictedGhostCells[e].x, window.predictedGhostCells[e].y) + "]</span>");	
                                        t = t + ('<span class="hud-main-color">[' + this.calculateMapSector(w + legendmod.mapOffsetX, u + legendmod.mapOffsetY) + "]</span>");
                                        flag = true;
                                    }
                                }
                            }
                            if (flag == false && this.top5[o].lbgpi >= 0) {
                                t = t + ('<span class="hud-main-color">[' + this.calculateMapSector(this.top5[o].x, this.top5[o].y) + "]</span>");
                            } else if (flag == false && (this.calculateMapSector(this.top5[o].x, this.top5[o].y) == "C3" || legendmod.gameMode == ":party")) {
                                t = t + ('<span class="hud-main-color">[' + this.calculateMapSector(this.top5[o].x, this.top5[o].y) + "]</span>");
                            }
                            //temporary socket 3
                            else if (flag == false && this.top5[o].lbgpi == -2) {
                                if (this.top5[o].temp == true) {
                                    t = t + ('<span class="hud-main-color">[' + 'Temp. Socket' + "]</span>");
                                } else {
                                    t = t + ('<span class="hud-main-color">[' + this.calculateMapSector(this.top5[o].x, this.top5[o].y) + "]</span>");
                                }
                            }
                            //t = t + ('<span class="hud-main-color">[' + this.calculateMapSector(this.top5[o].x, this.top5[o].y) + "]</span>");
                            t = t + ('<span class="top5-mass-color">[' + this.shortMassFormat(this.top5[o].mass) + "]</span> " + this.escapeHTML(this.top5[o].nick) + "</div></li>");
                        }
                    }
                    this.top5pos.innerHTML = t;
                    if (ogario.play && ogario.playerMass) {
                        e = e + ogario.playerMass;
                        s++;
                    }
                    this.top5totalMass.textContent = this.shortMassFormat(e);
                    this.top5totalPlayers.textContent = s;
                }
            }
        },
        /*
                    setTop5limit(t) {
                        t && (this['top5limit'] = t);
                    },
                    setTop5limit(canCreateDiscussions) {
                        if (canCreateDiscussions) {
                            this["top5limit"] = canCreateDiscussions;
                        }
                    }, */

        displayChatHistory(on) {
            if (on) {
                this.clearChatHistory(true);
                for (let length = 0; length < this.chatHistory.length; length++) {
                    $('#messages').append('<li><span class="message-nick">' + this.chatHistory[length].nick + ': </span><span class="message-text">' + this.chatHistory[length].message + '</span></li>');
                }
                return;
            }
            this.clearChatHistory(false);
        },
        clearChatHistory(on) {
            $('#messages').empty();
            if (on) {
                toastr.clear();
                if (defaultmapsettings.showChatBox) {
                    $('#chat-box .message').remove();
                    this.chatHistory.length = 0;
                }
            }
        },
        displayChatInfo(on, info) {
            if (on) {
                toastr.info(textLanguage[info + 'A']);
            } else {
                toastr.error(textLanguage[info + 'B']);
            }
        },
        setDisableChat() {
            defaultmapsettings.hideChat = defaultmapsettings.disableChat;
            this.setHideChat();
        },
        hideChat() {
            defaultmapsettings.hideChat = !defaultmapsettings.hideChat;
            this.setHideChat();
            this.displayChatInfo(!defaultmapsettings.hideChat, 'hideChatMsg');
        },
        setHideChat() {
            if (defaultmapsettings.hideChat) {
                $('#message-box').hide();
            }
            this.setShowChatBox();
        },
        setShowChatBox() {
            if (!defaultmapsettings.hideChat && defaultmapsettings.showChatBox) {
                $('#chat-box').show();
            } else {
                $('#chat-box').hide();
            }
        },
        enterChatMessage() {
            var messageBox = $('#message-box');
            var message = $('#message');
            if (messageBox.is(':visible')) {
                const value = message.val();
                if (value.length) {
                    this.sendChatMessage(101, value);
                    if (ogario.play) {
                        message.blur();
                        messageBox.hide();
                    }
                } else {
                    message.blur();
                    messageBox.hide();
                }
                message.val('');
            } else {
                messageBox.show();
                message.focus();
                message.val('');
            }
        },
        showMenu(value) {
            if (window.MC && window.MC.showNickDialog) {
                $('.ogario-menu').show();
                $('.menu-panel').hide();
                if (!ogario.play && !this.skipStats) {
                    $('#stats').show();
                } else {
                    $('#main-panel').show();
                }
                window.MC.showNickDialog(300);
                if($('#oferwallContainer').is(':visible')) window.closeOfferwall();
                if($('#videoContainer').is(':visible')) window.closeVideoContainer();
                return;
            }
            if (value) {
                $('#overlays').fadeIn(value);
            } else {
                $('#overlays').show();
            }
        },
        hideMenu(value) {
            if (window.MC && window.MC.showNickDialog) {
                $('.ogario-menu').hide();
                return;
            }
            if (value) {
                $('#overlays').fadeOut(value);
            } else {
                $('#overlays').hide();
            }
        },
        escapeHTML(string) {
            return String(string).replace(/[&<>"'\/]/g, function(event) {
                return escapeChar[event];
            });
        },
        checkSkinURL(url) {
            //return /^https?:\/\/i\.(?:imgur|hizliresim)\.com\/\w{6,8}\.(?:jpg|jpeg|png)\??\d*$/i .test(t) ? t.replace('http:', 'https:') : '';
            return url.replace('http:', 'https:');
            //return /^https?:\/\/(i|s))\.(?:imgur|hizliresim|put)\.(com|re)\/\w{6,8}\.(?:jpg|jpeg|png)\??\d*$/i .test(t) ? t.replace('http:', 'https:') : '';
        },
        loadSettings() {
            let settings = null;
            if (window.localStorage.getItem('ogarioSettings') !== null) {
                settings = JSON.parse(window.localStorage.getItem('ogarioSettings'));
            }
            for (const option in defaultmapsettings) {
                if (defaultmapsettings.hasOwnProperty(option)) {
                    if (settings && settings.hasOwnProperty(option)) {
                        defaultmapsettings[option] = settings[option];
                    }
                    if (ogario.hasOwnProperty(option)) {
                        ogario[option] = defaultmapsettings[option];
                    }
                }
            }
        },
        saveSettings(option, name) {
            window.localStorage.setItem(name, JSON.stringify(option));
        },
        exportSettings() {
            let options = {
                ogarioCommands: chatCommand,
                ogarioHotkeys: hotkeys,
                ogarioPlayerProfiles: profiles,
                ogarioSettings: defaultmapsettings,
                ogarioThemeSettings: defaultSettings

            };
            for (const option in options) {
                if (options.hasOwnProperty(option)) {
                    const checked = $('#export-' + option).prop('checked');
                    if (!checked) {
                        delete options[option];
                    }
                }
            }
            options = JSON.stringify(options);
            $('#export-settings').val(options);
            $('#import-settings').val('');
            options = null;
        },
        importSettings() {
            $('#import-settings').blur();
            let importValue = $('#import-settings').val();
            if (importValue) {
                importValue = JSON.parse(importValue);
                for (const value in importValue) {
                    if (importValue.hasOwnProperty(value)) {
                        const checked = $('#import-' + value).prop('checked');
                        if (!checked) {
                            continue;
                        }
                        window.localStorage.setItem(value, JSON.stringify(importValue[value]));
                    }
                }
                window.location.reload();
            }
        },
        restoreSettings() {
            if (window.localStorage.getItem('ogarioSettings') !== null) {
                window.localStorage.removeItem('ogarioSettings');
                window.location.reload();
            }
        },
        setSettings(id, checked) {
            if (defaultmapsettings.hasOwnProperty(id) && null !== checked) {
                //switch (defaultmapsettings[id] = checked, ogario.hasOwnProperty(id) && (ogario[id] = checked), id) {
                defaultmapsettings[id] = checked;
                if (ogario.hasOwnProperty(id)) {
                    ogario[id] = checked;
                }
                switch (id) {
                    case 'autoResp':
                        this.setAutoResp();
                        break;
                    case 'showMiniMap':
                        this.setMiniMap();
                        break;
                    case 'showMiniMapGrid':
                        this.resetMiniMapSectors();
                        break;
                    case 'disableChat':
                        this.setDisableChat();
                        break;
                    case 'chatSounds':
                        this.setChatSoundsBtn();
                        break;
                    case 'showChatBox':
                        this.setShowChatBox();
                        break;
                    case 'showTop5':
                        this.setTop5();
                        break;
                    case 'showTargeting':
                        this.setTargetingHUD();
                        break;
                    case 'showTime':
                        this.displayTime(), $('#time-hud').show();
                        break;
                    case 'centeredLb':
                        this.setCenteredLb();
                        break;
                        //case 'normalLb':
                        //this.setNormalLb();
                        //break;
                    case 'fpsAtTop':
                        this.setFpsAtTop();
                        break;
                    case 'tweenMaxEffect':
                        this.setTweenMaxEffect();
                        break;
                    case 'showPartyBots':
                        this.displayPartyBots();
                        break;
                    case 'showStats':
                        this.displayStats();
                        $('#stats-hud').show();
                        break;
                    case 'blockPopups':
                        this.setBlockPopups();
                }
                this.saveSettings(defaultmapsettings, 'ogarioSettings');
            }
        },
        profiling() {
            if (defaultmapsettings.profileNumber < 15) {
                $('#skins-panel').css("width", "190px");
            } else if (defaultmapsettings.profileNumber < 20) {
                $('#skins-panel').css("width", "280px");
            } else if (defaultmapsettings.profileNumber < 30) {
                $('#skins-panel').css("width", "370px");
            } else if (defaultmapsettings.profileNumber < 35) {
                $('#skins-panel').css("width", "460px");
            } else if (defaultmapsettings.profileNumber < 55) {
                $('#skins-panel').css("width", "550px");
            }
            ogarhusettings();
        },
        loadProfiles() {
            if (null !== window.localStorage.getItem('ogarioPlayerProfiles')) {
                profiles = JSON.parse(window.localStorage.getItem('ogarioPlayerProfiles'))
                if (profiles.length < defaultmapsettings.profileNumber) { //fix for old players
                    //for (var t = 10; t < 15; t++) profiles.push({
                    for (var t = profiles.length; t < defaultmapsettings.profileNumber; t++) {
                        profiles.push({
                            'nick': 'Profile #' + (t + 1),
                            'clanTag': '',
                            'skinURL': '',
                            'color': defaultSettings.mainColor
                        });
                    }
                } else if (profiles.length > defaultmapsettings.profileNumber) {
                    //for (var t = 10; t < 15; t++) profiles.push({
                    var temp = profiles.length; //case profiles.length changes
                    for (var t = 0; t < temp - defaultmapsettings.profileNumber; t++) {
                        console.log(t);
                        profiles.pop();
                    }

                }
            } else {
                //for (var t = 0; t < 15; t++) profiles.push({
                for (var t = 0; t < defaultmapsettings.profileNumber; t++) {
                    profiles.push({
                        'nick': 'Profile #' + (t + 1),
                        'clanTag': '',
                        'skinURL': '',
                        'color': defaultSettings.mainColor
                    });
                }
            }
            application.saveSettings(profiles, 'ogarioPlayerProfiles');
            setTimeout(function() {
                application.profiling();

            }, 200)
            if (null !== window.localStorage.getItem('ogarioSelectedProfile')) {
                this.selectedProfile = JSON.parse(window.localStorage.getItem('ogarioSelectedProfile'));
            }
            if (profiles[this.selectedProfile]) {
                ogarcopythelb.nick = profiles[this.selectedProfile].nick;
                //changed
                ogarcopythelb.clanTag = profiles[this.selectedProfile].clanTag;
                //ogarcopythelb.clanTag = profiles[this.selectedProfile].clanTag + "@";
                ogarcopythelb.skinURL = profiles[this.selectedProfile].skinURL;
                ogarcopythelb.color = profiles[this.selectedProfile].color;
            }
        },
        changeSkinPreview(e, t) {
            //console.log(e,t);
            if (!t || !e) {
                return;
            }
            if ("skin-preview" === t) { //or if ("skin-preview" === e)
                //console.log(e,e.src);

                if (e.src.includes(".mp4") || e.src.includes(".webm") || e.src.includes(".ogg")) { //console.log("stage 3a videos");
                    $("#skin-preview").children().remove();
                    $("#skin-preview").removeClass("default");
                    $("#skin-preview").append('<a href="#" id="skin-popover" data-toggle="popover" title="" data-html="true" data-content="<video src=\'' + e.src + "' width='350'>\"></a>");
                    $("#skin-popover").append('<video id="videoskinpreview" src=\'' + e.src + "' width='350' controls>\"></video>");
                    //						$("#skin-popover").popover();

                    //$("#skin-preview").append('<a href="#" id="skin-popover" data-toggle="popover" title="" data-html="true" data-content="<video src=\'' + t.src + "' width='500'>\"></a>");
                } else {
                    //console.log("default settings for images on changeSkinPreview")
                    $("#skin-preview").removeClass("default");
                    $("#skin-preview").append('<a href="#" id="skin-popover" data-toggle="popover" title="" data-html="true" data-content="<img src=\'' + e.src + "' width='500'>\"></a>");
                }
                $("#skin-popover").append($(e).fadeIn(1000));
                $("#skin-popover").popover();
            } else {
                if (e.src.includes(".mp4") || e.src.includes(".webm") || e.src.includes(".ogg")) { //console.log("stage 3b videos");
                    $("#" + t).removeClass("default");
                    $("#" + t).append($(e).fadeIn(1000));

                } else {
                    $("#" + t).removeClass("default");
                    $("#" + t).append($(e).fadeIn(1000));
                }
            }

        },
        setSkinPreview(t, e) {
            if (t.includes && (t.includes(".mp4") || t.includes(".webm") || t.includes(".ogg"))) {
                //if (t.includes(".mp4") || t.includes(".webm") || t.includes(".ogg")) {
                //console.log("stage 1 videos");

                if ($('#' + e).empty().addClass('default'), t && 0 != t.length) {
                    //console.log("stage 1 images/videos: " + t);
                    var app = this;
                    o = new Video();
                    o.src = t;
                    // o = new Image();
                    o.crossOrigin = 'anonymous';
                    setTimeout(function() {
                        //newo.onload = function() {
                        app.changeSkinPreview(o, e);
                        checkVideos3(o);
                        //};
                    }, 500);

                }
            } else {
                checktypeImgVid = new Image();
                //console.log("stage 1 images");

                if ($('#' + e).empty().addClass('default'), t && 0 != t.length) {
                    //console.log("stage 1 images/videos: " + t);
                    var app = this,
                        o = checktypeImgVid;
                    o.src = t;
                    // o = new Image();
                    o.crossOrigin = 'anonymous',
                        o.onload = function() {
                            app.changeSkinPreview(o, e);
                        };
                }
            }
        },
        setProfile() {
            var t = (profiles.length + this.selectedProfile - 1) % profiles.length,
                e = (this.selectedProfile + 1) % profiles.length;
            //console.log(profiles.length);

            this.setSkinPreview(profiles[t].skinURL, 'prev-profile');
            if (profiles[this.selectedProfile]) {
                this.setSkinPreview(profiles[this.selectedProfile].skinURL, 'skin-preview');
            }
            this.setSkinPreview(profiles[e].skinURL, 'next-profile');

            this.saveSettings(this.selectedProfile, 'ogarioSelectedProfile');
            if (profiles[this.selectedProfile]) {
                $('#nick').val(profiles[this.selectedProfile].nick);
                $('#clantag').val(profiles[this.selectedProfile].clanTag);
                $('#skin').val(profiles[this.selectedProfile].skinURL);
                $('#color').val(profiles[this.selectedProfile].color);
                $('.skin').colorpicker('setValue', profiles[this.selectedProfile].color);
            }

            $('#skins a').removeClass('selected');
            $('#skins a[data-profile=\'' + this.selectedProfile + '\']').addClass('selected');
        },
        prevProfile() {
            this.setPlayerSettings(),
                this.selectedProfile = (profiles.length + this.selectedProfile - 1) % profiles.length, this.setProfile();
        },
        nextProfile() {
            this.setPlayerSettings();
                this.selectedProfile = (this.selectedProfile + 1) % profiles.length, this.setProfile();
        },
        selectProfile(value) {
            this.setPlayerSettings();
            this.selectedProfile = parseInt(value);
            this.setProfile();
        },
        addOption(id, name, text, checked) {
            $(id).append('<label><input type=\"checkbox\" id=\"' + name + '\" class=\"js-switch\"> ' + text + '</label>');
            $('#' + name).prop('checked', checked);
        },
        addOptions(options, section) {
            if (options) {
                $('#og-options').append('<div class=\"options-box ' + section + '\"><h5 class=\"menu-main-color\">' + textLanguage[section] + '</h5></div>');
                for (var i = 0; i < options.length; i++) {
                    var option = options[i];
                    if (defaultmapsettings.hasOwnProperty(option)) {
                        $('.' + section).append('<label>' + textLanguage[option] + ' <input type=\"checkbox\" class=\"js-switch\" id=\"' + option + '\"></label>');
                        $('#' + option).prop('checked', defaultmapsettings[option]);
                    }
                }
            }
        },
        addInputBox(id, name, holder, callback) {
            $(id).append('<div class=\"input-box\"><span class=\"title-box\">' + textLanguage[name] + '</span><input id=\"' + name + '\" class=\"form-control\" placeholder=\"' + holder + '\" value=\"' + defaultmapsettings[name] + '\" /></div>');
            var app = this;
            $('#' + name).on('input', function() {
                defaultmapsettings[name] = this.value, app[callback](),
                    app.saveSettings(defaultmapsettings, 'ogarioSettings');
            });
        },
        addSliderBox(id, name, min, max, step, callback) {
            $(id).append('<div class=\"slider-box\"><div class=\"box-label\"><span class=\"value-label\">' + textLanguage[name] + ': </span><span id=\"' + name + '-value\" class=\"value\">' + defaultmapsettings[name] + '</span></div><input id=\"' + name + '-slider\" type=\"range\" min=\"' + min + '\" max=\"' + max + '\" step=\"' + step + '\" value=\"' + defaultmapsettings[name] + '\"></div>');
            var app = this;
            callback ? $('#' + name + '-slider').on('input', function() {
                var t = parseFloat($(this).val());
                $('#' + name + '-value').text(t); 
				defaultmapsettings[name] = t; 
				if(ogario.hasOwnProperty(name)) ogario[name] = t;
				app[callback]();
                app.saveSettings(defaultmapsettings, 'ogarioSettings');
            }) : $('#' + name + '-slider').on('input', function() {
                var t = parseFloat($(this).val());
                $('#' + name + '-value').text(t); 
				defaultmapsettings[name] = t; 
				if(ogario.hasOwnProperty(name)) ogario[name] = t;
                app.saveSettings(defaultmapsettings, 'ogarioSettings');
            });
        },
        setLang() {
            if (lang !== 'pl') {
                return;
            }
            if (window.i18n_dict && window.i18n_dict.en) {
                for (var lang in window.i18n_dict.en) {
                    if (window.i18n_dict.en.hasOwnProperty(lang) && textLanguage.hasOwnProperty(lang)) {
                        window.i18n_dict.en[lang] = textLanguage[lang];
                    }
                }
            }      			
        },
        setMenu() {
				const app = this;
				document.title = this.name;
                $("#mainPanel").before('<div id="exp-bar" class="agario-panel"><span class="ogicon-user"></span><div class="agario-exp-bar progress"><span class="progress-bar-text"></span><div class="progress-bar progress-bar-striped" style="width: 0%;"></div></div><div class="progress-bar-star"></div></div><div id="main-menu" class="agario-panel"><ul class="menu-tabs"><li class="start-tab active"><a href="#main-panel" class="active ogicon-home" data-toggle="tab-tooltip" title="' +
                    textLanguage.start + '"></a></li><li class="profile-tab"><a href="#profile" class="ogicon-user" data-toggle="tab-tooltip" title="' + textLanguage.profile + '"></a></li><li class="settings-tab"><a href="#og-settings" class="ogicon-cog" data-toggle="tab-tooltip" title="' + textLanguage.settings + '"></a></li><li class="theme-tab"><a href="#theme" class="ogicon-droplet" data-toggle="tab-tooltip" title="' + textLanguage.theme + '"></a></li><li class="hotkeys-tab"><a href="#" class="hotkeys-link ogicon-keyboard" data-toggle="tab-tooltip" title="' +
                    textLanguage.hotkeys + '"></a></li><li class="music-tab"><a href="#music" class="ogicon-music" data-toggle="tab-tooltip" title="Radio / ' + textLanguage.sounds + '"></a></li></ul><div id="main-panel" class="menu-panel"></div><div id="profile" class="menu-panel"></div><div id="og-settings" class="menu-panel"><div class="submenu-panel"></div></div><div id="theme" class="menu-panel"></div><div id="music" class="menu-panel"></div></div>');
                $("#main-panel").append('<a href="#" class="quick quick-menu ogicon-menu"></a><a href="#" class="quick quick-bots ogicon-trophy" style="display: none;"></a><a href="#" class="quick quick-skins ogicon-images"></a><div id="profiles"><div id="prev-profile"></div><div id="skin-preview"></div><div id="next-profile"></div></div>');
                $("#mainPanel div[role=form]").appendTo($("#main-panel"));
                $("#main-panel div[role=form] .form-group:first").remove();
                $("#nick").before('<input id="clantag" class="form-control" placeholder="Tag, e.g  \Lc" maxlength="10"><div class="input-group nick"></div>');
                $("#nick").appendTo($(".nick"));
                $(".nick").append('<span class="input-group-btn"><button id="stream-mode" class="btn active ogicon-eye"></button></span>');
                $(".nick").after('<div class="input-group skin"><input id="skin" class="form-control" placeholder="Skin URL (imgur.com direct link)" maxlength="40"><input type="hidden" id="color" value="' + ogarcopythelb.color + '" maxlength="7" /><span class="input-group-addon"><i></i></span><span class="input-group-btn"><button id="hide-url" class="btn active ogicon-eye"></button></span></div>');
                $("#locationKnown, #locationUnknown").insertAfter($(".skin"));
                $("#region").before('<button class="btn btn-warning btn-server-info ogicon-cogs"></button>');
                $(".btn-spectate, .btn-logout").appendTo("#agario-main-buttons");
                $("#agario-main-buttons").addClass("clearfix").before('<div id="server-info" class="form-group clearfix"><input id="server-ws" class="form-control" placeholder="Server WS"><button id="server-connect" class="btn btn-success ogicon-power"></button><button id="server-reconnect" class="btn btn-primary ogicon-redo2"></button><input id="server-token" class="form-control" placeholder="Server token"><button id="server-join" class="btn btn-success" data-itr="page_join_party">Join</button></div>');
                $("#helloContainer div[role=form]").after('<div id="ogario-party" class="clearfix"><input id="party-token" class="form-control" placeholder="Party token"></div>');
                $("#ogario-party").append('<button id="join-party-btn-2" class="btn btn-success" data-itr="page_join_party">Join</button><button id="create-party-btn-2" class="btn btn-primary" data-itr="page_create_party">Create</button>');
                $("#pre-join-party-btn:first, #join-party-btn:first, #create-party-btn:first, #leave-party-btn:first, #joinPartyToken:first, .party-icon-back:first").appendTo($("#ogario-party"));
                $("#settingsChoice, #options").appendTo($("#og-settings .submenu-panel"));
                $("#stats").appendTo($("#main-menu")).addClass("menu-panel");
                $("#statsContinue").attr("id", "statsContinue2");
                $("#mainPanel").empty().remove();
                $(".center-container").addClass("ogario-menu");
                $(".center-container").append('<div id="menu-footer" class="menu-main-color">' + textLanguage.visit + ' <a href="http://legendmod.ml" target="_blank">legendmod.ml</a> | ' + this.version + ' <a href="https://goo.gl/nRREoR" class="release ogicon-info" target="_blank"></a></div>');
                $("#leftPanel, #rightPanel").addClass("ogario-menu").removeAttr("id");
                $(".agario-profile-panel, .agario-panel-freecoins, .agario-panel-gifting, .agario-shop-panel, #dailyquests-panel").appendTo($("#profile")).removeClass("agario-side-panel");
                $(".agario-profile-panel").after('<div id="block-warn">' + textLanguage.blockWarn + '<br><a href="#" id="unblock-popups">' + textLanguage.unblockPopups + "</a></div>");
                $("#exp-bar").addClass("agario-profile-panel"), $(".left-container").empty();
                $(".agario-shop-panel").after('<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">The Legend Mod Project</h5><div class="g-ytsubscribe" data-channelid="UCoj-ZStcJ0jLMOSK7FOBTbA" data-layout="full" data-theme="dark" data-count="default"></div></div>');
                $("#tags-container").appendTo($("#profile"));
                $(".btn-logout").appendTo($("#profile"));
                $(".left-container").append('<div id="quick-menu" class="agario-panel agario-side-panel"><a href="https://legendmod.ml/skins/" class="quick-more-skins ogicon-grin" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="' + textLanguage.skins + '"></a><a href="https://youtube.com/channel/UCoj-ZStcJ0jLMOSK7FOBTbA" class="quick-yt ogicon-youtube2" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="The Legend mod Project"></a></div>');
                $(".left-container").append(`<div id="quick-bots" class="agario-panel agario-side-panel"><h2 id="botsInfo"></h2>									
					<h5 id="botsAuthor" class="main-color">Party bots</h5>
					<div id="botClient" style="margin-left:15px; margin-right:15px; font-family: Tahoma; color: rgb(255, 255, 255); z-index: 9999; border-radius: 5px; min-height: 16px; min-width: 200px; background-color: rgba(2, 0, 0, 0.4);">
					<div><b>Bot Count</b>: <span id="botCount" class="label label-info pull-right">Waiting</span></div>
					<b><div><b>ServerSlots</b>: <span id="slots" class="label label-info pull-right">Waiting</span></div>
					<b><div><b>Captcha tokens</b>: <span id="captchatokens" class="label label-info pull-right">0</span></div>
					</b></div>					
					<span id="statusTextBots">Status: <b id="userStatus">Disconnected</b></span>
					<br>
					<span id="aiTextBots">Bots AI: <b id="botsAI">Disabled</b></span>
					<br>
					<input type="text" id="botsNameLM" placeholder="Bots Name" maxlength="15" spellcheck="false" style="display:inline-block;">
					<input type="number" id="botsAmount" placeholder="Bots Amount" min="1" max="199" spellcheck="false">
					<input type="number" id="captchaSpeed" value="1.0" step="0.1" placeholder="Captcha delay (sec)" min="0" max="10" spellcheck="false">
					<input type="text" id="botsRemoteIP" placeholder="ws://localhost:1337" maxlength="100" spellcheck="false">

					<br>
					<button id="connectBots" class="btn btn-success">Connect</button>
					<br>
					<button id="startBots" class="btn btn-primary btn" disabled>Start Bots</button>
					<button id="captchaBots" class="btn btn-primary btn"  style="display:none;" disabled>Request 1000 captcha tokens</button>
					<button id="stopBots" class="btn btn-danger">Stop Bots</button>
					<div><span id="handleCaptchaBotsArea" style="display: none"><input type="checkbox" id="handleCaptchaBots"></input> <b>Handle bots with captcha</b>
					<br>
					<div id="handleCaptchaBotsAreaSettings" style="display: none"><input type="checkbox" id="solveCaptchaBots" disabled></input> <b>Solve captcha when loosing</b>
					<br>
					<input type="checkbox" id="pushCaptchaBots" disabled></input> <b>Push more bots</b>					
					</span></div></div>					
					<br><u><a href="https://github.com/jimboy3100/jimboy3100.github.io/tree/master/ExampleScripts/agario-bots2" target="_blank">Installation</a></u>	
					<u><a href="https://www.youtube.com/watch?v=rQMhxwIytro&feature=youtu.be" target="_blank">Tutorial video for PC node.js</a></u>	
					<u><a href="https://repl.it/@legendmod/party-bots" target="_blank">Repl.it VPS</a></u>	
					<u><a href="https://www.youtube.com/watch?v=xIupgFR7ZTY" target="_blank">Tutorial video for repl.it VPS</a></u>	
					</div>`);
					if (!this.protocolMode) $("#quick-menu").prepend('<a href="#" class="quick-shop ogicon-cart" data-toggle="tab-tooltip" data-placement="left" title="' + textLanguage.page_shop + '"></a><a href="#" class="quick-free-coins ogicon-coin-dollar" data-toggle="tab-tooltip" data-placement="left" title="' + textLanguage.page_menu_main_free_coins + '"></a><a href="#" class="quick-free-gifts ogicon-gift" data-toggle="tab-tooltip" data-placement="left" title="' + textLanguage.page_menu_main_gifts + '"></a><a href="#" class="quick-quests ogicon-trophy" data-toggle="tab-tooltip" data-placement="left" title="' + textLanguage.page_menu_main_dailyquests + '"></a>');
                $(".party-dialog, .partymode-info").remove();
                $(".agario-party-6").appendTo($(".center-container"));
                $(".right-container").empty();
                $(".right-container").append('<div class="agario-party"></div>');
                $(".agario-party-6").appendTo($(".agario-party")).addClass("agario-panel agario-side-panel");
                $(".agario-party h4, #cancel-party-btn").remove();
                $(".agario-party .btn").addClass("btn-sm");
                $(".right-container").append('<div id="skins-panel" class="agario-panel agario-side-panel"><div id="skins"></div><a href="https://ogario.ovh/skins/" id="more-skins" class="btn btn-block btn-success" target="_blank">' + textLanguage.moreSkins + "</a></div>");
                $(".btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr='page_option_dark_theme'], #options #darkTheme").remove();
                $("#advertisement, #adbg, #a320x250, #g320x250, #s320x250, #adsBottom").css("display", "none");
                $("#advertisement").removeClass("agario-panel"), $("#adsBottom").css({
                    "z-index": "1",
                    "opacity": "0",
                    "bottom": "-100px"
                }); 
				$("#noNames, #showMass").remove();
				$("#og-settings .submenu-panel").append('<div id="og-options"></div>');
                this.addOptions([], "animationGroup");
                this.addOptions(["autoZoom"], "zoomGroup");
                this.addOptions(["quickResp", "autoResp"], "respGroup");
                this.addOptions(["noNames", "optimizedNames", "autoHideNames", "hideMyName", "hideTeammatesNames", "namesStroke"], "namesGroup");
                this.addOptions(["showMass", "optimizedMass", "autoHideMass", "hideMyMass", "hideEnemiesMass", "shortMass", "virMassShots", "massStroke", "virusSound"], "massGroup");
                if (this.protocolMode){
					this.addOptions(["customSkins", "jellyPhisycs", "videoSkins", "videoSkinsMusic"], "skinsGroup")
				}
				else{
					this.addOptions(["customSkins", "vanillaSkins", "jellyPhisycs", "videoSkins", "videoSkinsMusic"], "skinsGroup");
				}
                this.addOptions(["optimizedFood", "autoHideFood", "autoHideFoodOnZoom", "rainbowFood"], "foodGroup");
                this.addOptions(["myCustomColor", "myTransparentSkin", "transparentSkins", "transparentCells", "transparentViruses", "virusGlow"], "transparencyGroup");
                this.addOptions(["showGrid", "showBgSectors", "showMapBorders", "borderGlow"], "gridGroup");
                this.addOptions(["disableChat", "chatSounds", "chatEmoticons", "showChatImages", "showChatVideos", "showChatBox", "hidecountry"], "chatGroup");
                this.addOptions(["rotateMap", "showMiniMap", "showMiniMapGrid", "showMiniMapGuides", "showExtraMiniMapGuides", "showMiniMapGhostCells", "oneColoredTeammates"], "miniMapGroup");
                this.addOptions(["oppColors", "oppRings", "virColors", "splitRange", "qdsplitRange", "sdsplitRange", "virusesRange", "cursorTracking", "FBTracking", "teammatesInd", "showGhostCells", "showGhostCellsInfo", "showPartyBots", "teamView"], "helpersGroup"); //Sonia2
                this.addOptions(["mouseSplit", "mouseFeed", "mouseInvert"], "mouseGroup");
                //this.addOptions(["showTop5", "showTargeting", "showLbData", "centeredLb", "normalLb", "fpsAtTop", "tweenMaxEffect"], "hudGroup"),
                this.addOptions(["showTop5", "showTargeting", "showLbData", "centeredLb", "fpsAtTop", "tweenMaxEffect"], "hudGroup");
                this.addOptions(["showStats", "showStatsMass", "showStatsESTE", "showStatsEMTE", "showStatsMTE", "showStatsSTE", "showStatsTTE", "showStatsPTE", "showStatsN16", "showStatsFPS", "showTime"], "statsGroup");
                this.addOptions([], "macroGroup");
                this.addOptions([], "profiles");
				if (!this.protocolMode) {
					this.addOptions(["blockPopups"], "extrasGroup");
				}
				else{
                    $("#noSkins, #noColors, #skipStats, #showQuest").addClass("js-switch-vanilla");
                    $(".skinsGroup h5").after('<label class="noSkins">' + textLanguage.noSkins + " </label>");
                    $("#noSkins").appendTo($(".noSkins")), 
					$(".transparencyGroup h5").after('<label class="noColors">' + textLanguage.noColors + " </label>");
                    $("#noColors").appendTo($(".noColors"));
                    $(".extrasGroup h5").after('<label class="skipStats">' + textLanguage.skipStats + " </label>");
                    $("#skipStats").appendTo($(".skipStats"));
                    $(".skipStats").after('<label class="showQuest">' + textLanguage.showQuest + " </label>");
                    $("#showQuest").appendTo($(".showQuest"));
                    $("#options").remove();
                    $("#settingsChoice").appendTo($(".extrasGroup")).addClass("select-wrapper");
				}	
                this.addSliderBox(".animationGroup", "animation", 5, 200, 1);
                this.addSliderBox(".zoomGroup", "zoomSpeedValue2", -0.90, 0.90, 0.01);
                this.addSliderBox(".profiles", "profileNumber", 10, 54, 1);
                this.addSliderBox(".macroGroup", "macroFeeding", 1, 160, 1);
                $("#og-settings").append('<button class="btn btn-block btn-success btn-export">' + textLanguage.exportImport + "</button>");
                $("#og-settings").append('<div class="restore-settings"><a href="#">' + textLanguage.restoreSettings + "</a></div>");
                $("#music").append('<div class="agario-panel radio-panel"><h5 class="menu-main-color">Radio (' + textLanguage.thanks + ')</h5><audio src="" controls></audio><span class="playlist"><span class="ogicon-file-music"></span> <a href="" target="_blank">' + textLanguage.playlist + "</a></span></div>");
                $("#music").append('<div class="agario-panel sounds-panel"><h5 class="menu-main-color">' + textLanguage.sounds + "</h5></div>");
                $("#music").append('<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Legend Clan (tag: \u24c2)</h5><div class="g-ytsubscribe" data-channelid="UCoj-ZStcJ0jLMOSK7FOBTbA" data-layout="full" data-theme="dark" data-count="default"></div></div>');
                /*$('#music').append('<div class="agario-panel facebook-panel"><h5 class="menu-main-color">' + 'Facebook' + '</h5></div>'),*/
                this.addInputBox(".sounds-panel", "messageSound", "Sound URL", "setMessageSound");
                this.addInputBox(".sounds-panel", "commandSound", "Sound URL", "setCommandSound");
                this.addInputBox(".sounds-panel", "virusSoundurl", "Sound URL", "setvirusSound");
                $("body").append('<div id="overlays-hud" data-gamemode=":ffa"><div id="stats-hud" class="hud stats-hud-color"></div> <div id="top5-hud" class="hud"><h5 class="hud-main-color">Team<span class="team-top"></span></h5><ol id="top5-pos"></ol><div id="top5-total"><span class="hud-main-color ogicon-users"></span> ' + //<div class="hud-main-color team-top-menu"><a href="#" data-limit="5" class="team-top-limit active">5</a> | <a href="#" data-limit="10" class="team-top-limit">10</a> | <a href="#" data-limit="100" class="team-top-limit">100</a></div><ol id="top5-pos"></ol><div id="top5-total"><span class="hud-main-color ogicon-users"></span> ' +
                    textLanguage.totalPartyPlayers + ': <span id="top5-total-players" class="top5-mass-color">0</span>   <span class="hud-main-color ogicon-pacman"></span> ' +
                    textLanguage.totalPartyMass + ': <span id="top5-total-mass" class="top5-mass-color">0</span></div></div> <div id="time-hud" class="hud time-hud-color"></div> <div id="pause-hud" class="hud">' +
                    //textLanguage.pause + '</div> <div id="leaderboard-hud" class="hud-b"><h5 class="hud-main-color">legendmod.ml</h5><div id="leaderboard-data"></div><div id="leaderboard-positions"></div></div> <div id="btl-leaderboard-hud"><div class="hud hud-c"><span id="btl-players-status">Players ready</span>: <span id="btl-players-count">0</span></div></div> <div id="minimap-hud" class="hud-b"><canvas id="minimap-sectors"></canvas><canvas id="minimap"></canvas></div><div id="target-hud" class="hud"><div id="target-player"><span id="target-skin"><img src="https://legendmod.ml/banners/static/img/blank.png" alt=""> </span><span id="target-nick"></span><span id="target-status" class="hud-main-color">' + //class="hud-main-color">[' +
                    textLanguage.pause + '</div> <div id="leaderboard-hud" class="hud-b"><h5 class="hud-main-color">' + textLanguage.leaderboard + '</h5><div id="leaderboard-data"></div><div id="leaderboard-positions"></div></div> <div id="btl-leaderboard-hud"><div class="hud hud-c"></div></div> <div id="minimap-hud" class="hud-b"><canvas id="minimap-sectors"></canvas><canvas id="minimap"></canvas></div><div id="target-hud" class="hud"><div id="target-player"><span id="target-skin"><img src="https://legendmod.ml/banners/static/img/blank.png" alt=""> </span><span id="target-nick"></span><span id="target-status" class="hud-main-color">' + //class="hud-main-color">[' +
                    textLanguage.targetNotSet + '</span></div><div id="target-summary"></div></div><div id="target-panel-hud" class="hud">' +
                    '<a href="#" id="set-debug" class="ogicon-location" style="display: none"></a>' +
                    '<a href="#" id="set-fullSpectator" class="ogicon-eye"  style="display: none"></a>' +
                    '<a href="#" id="set-ingameSpectator" class="ogicon-power"  style="display: none"></a>' +
                    '<a href="#" id="set-targeting" class="ogicon-target"></a>' +
                    '<a href="#" id="set-private-minimap" class="ogicon-location2"></a>' +
                    '<a href="#" id="cancel-targeting" class="ogicon-cancel-circle"></a>' +
                    '<a href="#" id="change-target" class="ogicon-arrow-right"></a></div>' +
                    '<div id="quest-hud" class="hud"></div> <div id="btl-hud" class="hud"></div></div>');
                $("body").append('<ul id="messages"></ul>');
                $("body").append('<div id="message-box"><div id="chat-emoticons"></div><div id="message-menu"><a href="#" class="chat-sound-notifications ogicon-volume-high"></a><a href="#" class="chat-active-users ogicon-user-check"></a><a href="#" class="chat-muted-users ogicon-user-minus"></a><a href="#" class="show-chat-emoticons ogicon-smile"></a></div><input type="text" id="message" class="form-control" placeholder="' +
                    textLanguage.enterChatMsg + '..." maxlength="80"></div>');
                $("body").append('<div id="chat-box"></div>'); 
				for (const emoji in emoticonicons) {
					if (emoticonicons.hasOwnProperty(emoji)) {
						$("#chat-emoticons").append('<img src="https://legendmod.ml/banners/emoticons/' + emoticonicons[emoji] + '" alt="' + emoji + '" class="emoticon">');
					}
				}
            $("body").append('<div id="exp-imp"><div id="exp-imp-menu"><button id="close-exp-imp" class="btn btn-danger">' + textLanguage.close + '</button></div><div id="exp-imp-settings"></div></div>');
                $("#exp-imp-settings").append("<h1>" + textLanguage.exportSettings + "</h1><h2>" + textLanguage.exportInfo + "</h2>");
                this.addOption("#exp-imp-settings", "export-ogarioCommands", textLanguage.commands, true);
                this.addOption("#exp-imp-settings", "export-ogarioHotkeys", textLanguage.hotkeys, true);
                this.addOption("#exp-imp-settings", "export-ogarioPlayerProfiles",
                    textLanguage.profiles, true), this.addOption("#exp-imp-settings", "export-ogarioSettings", textLanguage.settings, true);
                this.addOption("#exp-imp-settings", "export-ogarioThemeSettings", textLanguage.theme, true);
                $("#exp-imp-settings").append('<textarea id="export-settings" class="form-control" rows="14" cols="100" spellcheck="false" readonly /><button id="export-settings-btn" class="btn btn-block btn-success">' + textLanguage.exportSettings + "</button>");
                $("#exp-imp-settings").append("<h1>" + textLanguage.importSettings + "</h1><h2>" +
                    textLanguage.importInfo + "</h2>"), this.addOption("#exp-imp-settings", "import-ogarioCommands", textLanguage.commands, true);
                this.addOption("#exp-imp-settings", "import-ogarioHotkeys", textLanguage.hotkeys, true);
                this.addOption("#exp-imp-settings", "import-ogarioPlayerProfiles", textLanguage.profiles, true);
                this.addOption("#exp-imp-settings", "import-ogarioSettings", textLanguage.settings, true);
                this.addOption("#exp-imp-settings", "import-ogarioThemeSettings", textLanguage.theme, true);
                $("#exp-imp-settings").append('<textarea id="import-settings" class="form-control" rows="14" cols="100" spellcheck="false" /><button id="import-settings-btn" class="btn btn-block btn-success">' +
                    textLanguage.importSettings + "</button>");
            if (Settings) Settings.setThemeMenu();
            /** @type {number} */
            var e = 0;
            for (; e < profiles.length; e++) {
                $("#skins").append('<div class="skin-box"><a href="#profile-' + e + '" id="profile-' + e + '" data-profile="' + e + '"></a></div>');
                this.setSkinPreview(profiles[e].skinURL, "profile-" + e);
                if (e == this.selectedProfile) {
                    $("#profile-" + e).addClass("selected");
                }
            }
        },
        setUI() {
            var app = this;
            $(document).on("click", ".menu-tabs a", function(event) {
                event.preventDefault();
                app.switchMenuTabs($(this), "menu-panel");
            });
            $(document).on("click", ".submenu-tabs a", function(event) {
                event.preventDefault();
                app.switchMenuTabs($(this), "submenu-panel");
            });
            $(document).on("click", ".quick-menu", function(event) {
                event.preventDefault();
                defaultmapsettings.showQuickMenu = !defaultmapsettings.showQuickMenu;
                //defaultmapsettings.showQuickBots=false;
                app.saveSettings(defaultmapsettings, "ogarioSettings");
                app.setShowQuickMenu();
            });
            $(document).on("click", ".quick-bots", function(event) {
                event.preventDefault();
                defaultmapsettings.showQuickBots = !defaultmapsettings.showQuickBots;
                //defaultmapsettings.showQuickMenu=false;
                app.saveSettings(defaultmapsettings, "ogarioSettings");
                app.setShowQuickBots();
            });
            $(document).on("click", ".quick-skins", function(event) {
                event.preventDefault();
                defaultmapsettings.showSkinsPanel = !defaultmapsettings.showSkinsPanel;
                app.saveSettings(defaultmapsettings, "ogarioSettings");
                app.setShowSkinsPanel();
            });
            $(document).on("change", "#region", function() {
                app.region = this.value;
            });
            $(document).on("change", "#gamemode", function() {
                var dummy = this.value;
                if (":party" !== dummy) {
                    app.leaveParty();
                }
                app.gameMode = ogario.gameMode = dummy;
                app.setQuest();
            });
            $(document).on("change", "#quality", function() {
                app.getQuality(this.value);
                ogarhusettings();
            });
            $(document).on("input", "#skin", function() {
                var hexInputVal = this.value;
                app.setSkinPreview(hexInputVal, "skin-preview");
                app.setSkinPreview(hexInputVal, "profile-" + app.selectedProfile);
            });
            $(document).on("click", "#skins a", function(event) {
                event.preventDefault();
                app.selectProfile($(this).attr("data-profile"));
            });
            $(document).on("click", "#prev-profile", function() {
                app.prevProfile();
            });
            $(document).on("click", "#next-profile", function() {
                app.nextProfile();
            });
            $(document).on("click", "#stream-mode", function() {
                /** @type {boolean} */
                defaultmapsettings.streamMode = !defaultmapsettings.streamMode;
                app.saveSettings(defaultmapsettings, "ogarioSettings");
                app.setStreamMode();
            });
            $(document).on("click", "#hide-url", function() {
                /** @type {boolean} */
                defaultmapsettings.hideSkinUrl = !defaultmapsettings.hideSkinUrl;
                app.saveSettings(defaultmapsettings, "ogarioSettings");
                app.setHideSkinUrl();
            });
            $(document).on("click", ".btn-server-info", function() {
                $("#server-info").toggle();
            });
            $(document).on("click", "#server-connect", function() {
                app.gameServerConnect($("#server-ws").val());
            });
            $(document).on("click", "#server-reconnect", function() {
                app.gameServerReconnect();
            });
            $(document).on("click", "#server-join", function() {
                app.gameServerJoin($("#server-token").val());
            });
            $(document).on("change", "#og-options input[type='checkbox']", function() {
                var template = $(this);
                app.setSettings(template.attr("id"), template.prop("checked"));
            });
            $(document).on("change", ".js-switch-vanilla", function() {
                var template = $(this);
                var p = template.attr("id");
                if (void 0 !== app[p]) {
                    app[p] = template.prop("checked");
                    if ("noSkins" === p) {
                        /** @type {boolean} */
                        ogario.showCustomSkin = !app.noSkins;
                    }
                    if ("showQuest" === p) {
                        app.setQuest();
                    }
                }
            });
            $(document).on("click", "#og-settings .restore-settings a", function(result) {
                result.preventDefault();
                app.restoreSettings();
            });
            $(document).on("click", "#og-settings .btn-export", function(result) {
                result.preventDefault();
                app.exportSettings();
                $("#exp-imp").fadeIn(500);
                $("#exp-imp-settings, #export-settings").perfectScrollbar("update");
            });
            $(document).on("click", "#close-exp-imp", function(event) {
                event.preventDefault();
                $("#exp-imp").fadeOut(500);
            });
            $(document).on("focus", "#export-settings", function() {
                    $(this).select();
                }),
                $(document).on("click", "#export-settings-btn", function(event) {
                    event.preventDefault();
                    app.exportSettings();
                });
            $(document).on("click", "#import-settings-btn", function(result) {
                result.preventDefault();
                app.importSettings();
            });
            $(document).on("click", "#unblock-popups", function(result) {
                result.preventDefault();
                app.unblockPopups();
            });
            $(document).on("click", "#openfl-overlay.disabler", function() {
                if (defaultmapsettings.blockPopups) {
                    app.blockPopups();
                }
            });
            $(document).on("click", "#openfl-content", function() {
                if (defaultmapsettings.blockPopups) {
                    var container = $(this);
                    setTimeout(function() {
                        if (!container.is(":visible")) {
                            app.blockPopups();
                        }
                    }, 1000);
                }
            });
            $(document).on("click", ".quick-shop", function(event) {
                event.preventDefault();
                app.unblockPopups();
                if (window.MC && window.MC.openShop) {
                    window.MC.openShop();
                }
            });
            $(document).on("click", ".quick-free-coins", function(event) {
                event.preventDefault();
                app.unblockPopups();
                if (window.MC && window.MC.showFreeCoins) {
                    window.MC.showFreeCoins();
                }
            });
            $(document).on("click", ".quick-free-gifts", function(event) {
                event.preventDefault();
                app.unblockPopups();
                if (window.MC && window.MC.showGifting) {
                    window.MC.showGifting();
                }
            });
            $(document).on("click", ".quick-quests", function(event) {
                event.preventDefault();
                app.unblockPopups();
                if (window.MC && window.MC.showQuests) {
                    window.MC.showQuests();
                }
            });

            $(document).on("click", "#set-debug", function(event) {
                event.preventDefault();
                app.setDebug();
            });
            $(document).on("click", "#set-fullSpectator", function(event) {
                event.preventDefault();
                app.setFullSpectator();
            });
            $(document).on("click", "#set-ingameSpectator", function(event) {
                event.preventDefault();
                app.setIngameSpectator();
            });
            $(document).on("click", "#set-targeting", function(event) {
                event.preventDefault();
                app.setTargeting();
            });
            $(document).on("click", "#cancel-targeting", function(event) {
                event.preventDefault();
                app.cancelTargeting();
            });
            $(document).on("click", "#set-private-minimap", function(event) {
                event.preventDefault();
                app.setPrivateMiniMap();
            });
            $(document).on("click", "#change-target", function(result) {
                result.preventDefault();
                app.changeTarget();
            });
            $(document).on("click", ".team-top-limit", function(event) {
                event.preventDefault();
                var template = $(this);
                /** @type {number} */
                var param = parseInt(template.attr("data-limit"));
                if (param) {
                    app.setTop5limit(param);
                    app.displayTop5();
                    $(".team-top").text(param);
                    $(".team-top-limit").removeClass("active");
                    template.addClass("active");
                }
            });
            $(document).on("click", "#top5-pos .set-target", function(event) {
                event.preventDefault();
                app.setTarget(parseInt($(this).attr("data-user-id")));
            });
            $(document).on("click", ".mute-user", function(event) {
                event.preventDefault();
                app.muteChatUser(parseInt($(this).attr("data-user-id")));
            });
            $(document).on("click", ".btn-mute-user", function() {
                var template = $(this);
                app.muteChatUser(parseInt(template.attr("data-user-id")));
                template.removeClass("btn-red btn-mute-user").addClass("btn-green btn-unmute-user").text(textLanguage.unmute);
            });
            $(document).on("click", ".btn-unmute-user", function() {
                var template = $(this);
                app.unmuteChatUser(parseInt(template.attr("data-user-id")));
                template.removeClass("btn-green btn-unmute-user").addClass("btn-red btn-mute-user").text(textLanguage.mute);
            });
            $(document).on("click", ".chat-sound-notifications", function(result) {
                result.preventDefault();
                /** @type {boolean} */
                defaultmapsettings.chatSounds = !defaultmapsettings.chatSounds;
                app.saveSettings(defaultmapsettings, "ogarioSettings");
                app.setChatSoundsBtn();
            });
            $(document).on("click", ".chat-active-users", function(event) {
                event.preventDefault();
                app.displayChatActiveUsers();
            });
            $(document).on("click", ".chat-muted-users", function(event) {
                event.preventDefault();
                app.displayChatMutedUsers();
            });
            $(document).on("click", ".show-chat-emoticons", function(result) {
                result.preventDefault();
                var template = $(this);
                var p = $("#chat-emoticons");
                p.toggle();
                if (p.is(":visible")) {
                    template.addClass("active");
                } else {
                    template.removeClass("active");
                    $("#message").focus();
                }
            });
            $(document).on("click", "#chat-emoticons .emoticon", function() {
                var d = $(this).attr("alt");
                var e = $("#message");
                var n = e.val();
                if (n.length + d.length <= 80) {
                    e.val(n + d);
                }
                e.focus();
            });
            this.statsHUD = document.getElementById("stats-hud");
            this.activeParties = document.getElementById("active-parties");
            this.top5pos = document.getElementById("top5-pos");
            this.top5totalMass = document.getElementById("top5-total-mass");
            this.top5totalPlayers = document.getElementById("top5-total-players");
            this.leaderboardPositionsHUD = document.getElementById("leaderboard-positions");
            this.leaderboardDataHUD = document.getElementById("leaderboard-data");
            this.timeHUD = document.getElementById("time-hud");
            this.questHUD = document.getElementById("quest-hud");
            $("#canvas").bind("contextmenu", function() {
                return false;
            });
            $(document).on("mouseup", ".btn", function() {
                $(this).blur();
            });
            $("[data-toggle='tab-tooltip']").tooltip({
                "trigger": "hover"
            });
            $(".submenu-panel, #chat-box, #exp-imp-settings, #export-settings, #import-settings").perfectScrollbar({
                "suppressScrollX": true
            });
            Array.prototype.slice.call(document.querySelectorAll(".js-switch")).forEach(function(remove) {
                new Switchery(remove, {
                    "color": defaultSettings.menuMainColor,
                    "size": "small"
                });
            });
            $("input[type='range']").rangeslider({
                "polyfill": false
            });
            toastr.options = {
                "newestOnTop": false,
                "positionClass": "toast-bottom-left",
                "timeOut": 15000
            };

        },
        switchMenuTabs(t, e) {
            var i = t.parent();
            if ('menu-panel' === e) {
                if (t.hasClass('hotkeys-link')) return;
                i.hasClass('profile-tab') && this.setBlockPopups();
            }
            t.addClass('active'),
                i.addClass('active'),
                i.siblings().removeClass('active'),
                i.siblings().find('a').removeClass('active');
            var o = t.attr('href');
            if ('submenu-panel' === e) {
                var a = $(o).parent().attr('id');
                $('#' + a + ' .submenu-panel').not(o).css('display', 'none');
            } else {
                try {
                    $('.menu-panel').not(o).css('display', 'none');
                } catch (error) {}
            }
            try {
                $(o).fadeIn(1000);
            } catch (error) {}
            ogarhusettings();
            $('.submenu-panel').perfectScrollbar('update');
        },
        getDefaultSettings() {
            this.noSkins = $("#noSkins").prop("checked");
                this.noColors = $("#noColors").prop("checked");
                this.skipStats = $("#skipStats").prop("checked");
                this.showQuest = $("#showQuest").prop("checked");
				ogario.showCustomSkin = !this.noSkins;
			if (null !== window.localStorage.getItem("scale_setting")) {
                var parseScaleSettings = JSON.parse(window.localStorage.getItem("scale_setting"));
                this.setCanvasScale(parseScaleSettings);
            } 
			else {
                var quality = $("#quality").val();
                this.getQuality(quality);
            }
            if (null !== window.localStorage.getItem("location")){
				this.region = window.localStorage.getItem("location");
                $("#region").val(this.region);
                if (window.MC && window.MC.setRegion) window.MC.setRegion(this.region)
			}
			else{
				this.region = $("#region").val()
			}
                this.setParty();
				if (":party" === this.gameMode && window.location.hash) $("#join-party-btn-2").click();			
                Array.prototype.slice.call(document.querySelectorAll(".js-switch-vanilla")).forEach(function(remove) {
                    new Switchery(remove, {
                        "color": defaultSettings.menuMainColor,
                        "size": "small"
                    });
                }); 
				$("#nick").val(ogarcopythelb.nick).blur();
                $("#noNames").prop("checked", !defaultmapsettings.noNames);
                $("#showMass").prop("checked", defaultmapsettings.showMass);
                this.unlockButtons();
                this.setAutoResp();
                this.setQuest();
        },
        getQuality(value) {
			const ration = 'devicePixelRatio' in window;
            var defaultValue = 1;
			if (ration){
				defaultValue = window.devicePixelRatio;
			}
            switch (value) {
                case 'High':
                    this.setCanvasScale(1);
                    break;
                case 'Medium':
                    this.setCanvasScale(0.9);
                    break;
                case 'Low':
                    this.setCanvasScale(0.75);
                    break;
                case 'VeryLow':
                    this.setCanvasScale(0.5);
                    break;
                default:
                    this.setCanvasScale(defaultValue);
            }
        },
        setCanvasScale(value) {
            this.canvasScale = value;
            ogario.canvasScale = value;
        },
        setStreamMode() {
            if (defaultmapsettings.streamMode) {
                $("#stream-mode").addClass("ogicon-eye-blocked");
                $("#clantag, #nick, #party-token").addClass("stream-mode");
            } else {
                $("#stream-mode").removeClass("ogicon-eye-blocked");
                $("#clantag, #nick, #party-token").removeClass("stream-mode");
            }
        },
        setHideSkinUrl() {
            if (defaultmapsettings.hideSkinUrl) {
                $("#hide-url").addClass("ogicon-eye-blocked");
                $("#skin").addClass("hide-url");
            } else {
                $("#hide-url").removeClass("ogicon-eye-blocked");
                $("#skin").removeClass("hide-url");
            }
        },
        setShowQuickMenu() {
            if (defaultmapsettings.showQuickMenu) {
                $("#quick-menu").fadeIn(500);
            } else {
                $("#quick-menu").fadeOut(500);
            }
            if (defaultmapsettings.showQuickBots) {
                $("#quick-bots").hide();
            }
        },
        setShowQuickBots() {
            if (defaultmapsettings.showQuickBots) {
                $("#quick-bots").fadeIn(500);
            } else {
                $("#quick-bots").fadeOut(500);
            }
            if (defaultmapsettings.showQuickBots) {
                $("#quick-menu").hide();
            }
        },
        setShowSkinsPanel() {
            if (defaultmapsettings.showSkinsPanel) {
                $("#skins-panel").fadeIn(500);
            } else {
                $("#skins-panel").fadeOut(500);
            }
        },
        unlockButtons() {
            $('.btn-play, .btn-play-guest, .btn-login-play, .btn-spectate').prop('disabled', false);
        },
        setMainButtons() {
            var app = this;
            $(document).on("click", ".btn-play, .btn-play-guest", function() {
                app.onPlay();
            });
            $(document).on("click", ".btn-spectate", function() {
                app.onSpectate();
            });
            $(document).on("click", "#create-party-btn-2", function() {
                app.onCreate();
            });
            $(document).on("click", "#join-party-btn-2", function() {
                app.skipServerData = true;
                app.joinParty();
                app.onJoin();
            });
            $(document).on("click", "#statsContinue2", function() {
                $("#stats, #main-panel").toggle();
            });
        },
        play() {
            if (window.noOgarioSocket) {
                console.log('New Socket 3 data sent');
                if (window.noOgarioSocket) {
                    //Socket3.send(JSON.stringify({ com: "sendPlayerSkinURL", nick: ogarcopythelb.nick, token: application.serverToken, tag: ogarcopythelb.clanTag, skin: ogarcopythelb.skinURL, color: ogarcopythelb.color, id: customLMID, x: application.getPlayerX(), y: application.getPlayerY(), mass: legendmod.playerMass}));
                    var temp = {
                        com: "sendPlayerSkinURL",
                        nick: ogarcopythelb.nick,
                        token: application.serverToken,
                        tag: ogarcopythelb.clanTag,
                        skin: ogarcopythelb.skinURL,
                        color: ogarcopythelb.color,
                        //id: customLMID,
                        //id: application.playerID,
                        id: window.unescape(window.encodeURIComponent(application.lastSentNick)),
                        x: application.getPlayerX(),
                        y: application.getPlayerY(),
                        mass: legendmod.playerMass
                    };
                    if (Socket3) {
                        Socket3.send(JSON.stringify({
                            //"toH": "legendmod",
                            "toH": $("#server-token").val() + "3",
                            "msg": temp
                        }));
                    }

                }
            }
            this.setPlayerSettings();
            this.setParty();			
            if (this.isSocketOpen()) this.sendPartyData();
            else {
                this.connect();
                var app = this;
                setTimeout(function() {
                    app.sendPartyData();
                }, 1000);
            }
        },
        onPlay() {
            //                this.play(), this.hideMenu(), window.addKeyListeners && window.addKeyListeners(), defaultmapsettings.autoHideFood && (i.showFood = true), window['ga'] && window['ga']('create', 'UA-92655864-7', 'auto', 'ogarioTracker'), window['ga'] && window['ga']('ogarioTracker.send', 'pageview');
            this.play();
            this.hideMenu();
            if (window.addKeyListeners) {
                window.addKeyListeners();
            }
            if (defaultmapsettings.autoHideFood) {
                ogario.showFood = true
            };
        },
        onSpectate() {
            this.onJoin();
            this.sendPlayerJoin();
            this.hideMenu();
            if (window.addKeyListeners) {
                window.addKeyListeners();
            }
            if (defaultmapsettings.autoHideFood) {
                ogario.showFood = false;
            }
        },
        join() {
            this.setParty();
            this.setPlayerSettings();
            this.sendPartyData();
            this.sendPlayerDeath();
        },
        onJoin() {
			this.setParty();
            if (this.isSocketOpen()) this.join();
            else {
                this.connect();
                var app = this;
                setTimeout(function() {
                    app.join();
                    app.sendPlayerJoin();
                }, 1000);
            }
        },
        create() {
			this.setParty()
            if (this.partyToken) this.onJoin();
            else {
                var app = this;
                setTimeout(function() {
                    app.create();
                }, 100);
            }
        },
        onCreate() {
            this.setParty();
            if (this.partyToken) {
                this.onJoin();
                return;
            }
            const app = this;
            setTimeout(() => {
                app.create();
            }, 100);
        },
        onPlayerSpawn() {
			ogario.play = true;
            if (ogario.playerColor) {
                this.sendPlayerSpawn();
                this.cacheCustomSkin(ogarcopythelb.nick, ogario.playerColor, ogarcopythelb.skinURL);
                return;
            }
            const app = this;
            setTimeout(() => {
                app.onPlayerSpawn();
            }, 100);			
            if (window.spawnspecialeffects == true) {
                setTimeout(function() {
                    ///////// trigger special effects
                    //console.log('Special effects stage 1');
                    ogario.spawnX = ogario.playerX;
                    ogario.spawnY = ogario.playerY;
                    LM.drawCommander = true;
                }, 110);
            }
            LegendModSpawn();
        },
        onPlayerDeath() {
            //
            pauseVideos();
            ogario.play = false;
            ogario.playerColor = null;
            ogario.foodIsHidden = false;
            ogario.playerMass = 0;
            ogario.playerScore = 0;
            ogario.playerSplitCells = 0;
            this.showMenu(300);
            this.sendPlayerDeath();
            this.updateDeathLocations(ogario.playerX, ogario.playerY);
            this.unlockButtons();
            resetonkeydown();
            this.autoResp();

        },
        findOwnedVanillaSkin() {
            if (!ogarcopythelb.skinURL && window.vanillaskins && window.UserVanillaSkin && window.EquippableSkins && !application.customSkinsMap[ogarcopythelb.nick]) {
                //console.log("1. skin_" + window.UserVanillaSkin);
                if (window.UserVanillaSkin.includes("skin_custom")) {
                    application.customSkinsMap[ogarcopythelb.nick] = window.UserVanillaSkin;
                    application.loadSkin(application.customSkinsCache, window.UserVanillaSkin);
                    //core.registerSkin(ogarcopythelb.nick, null, window.UserVanillaSkin, null);
                    //window.UserVanillaSkin=null;
                } else {
                    for (var player = 0; player < window.EquippableSkins.length; player++) {
                        if (window.EquippableSkins[player].productId == "skin_" + window.UserVanillaSkin && window.EquippableSkins[player].image != "uses_spine") {
                            //console.log("2. " + window.EquippableSkins[player].image);	
                            window.lastusednameforskin = ogarcopythelb.nick;
                            application.customSkinsMap[ogarcopythelb.nick] = "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + window.EquippableSkins[player].image;
                            application.loadSkin(application.customSkinsCache, "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + window.EquippableSkins[player].image);
                            //core.registerSkin(ogarcopythelb.nick, null, "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + window.EquippableSkins[player].image, null);   
                            //window.UserVanillaSkin=null;								
                        }
                    }
                }
            } else {
                //console.log('findOwnedVanillaSkin failed execution')
                if (!window.EquippableSkins && !window.findOwnedVanillaSkinOnce) {
                    window.findOwnedVanillaSkinOnce = true;
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' findOwnedVanillaSkin: window.EquippableSkins not loaded');
                    setTimeout(function() {
                        application.findOwnedVanillaSkin();
                    }, 4000);
                }
            }
        },
        setPlayerSettings() {
            var nick = $('#nick').val();
            var tag = $('#clantag').val();
            var skin = $('#skin').val();
            var color = $('#color').val();
            ogarcopythelb.nick = nick;
            //changed
            ogarcopythelb.clanTag = tag.trim();
            //ogarcopythelb.clanTag = tag.trim() + "@";
            ogarcopythelb.skinURL = this.checkSkinURL(skin.trim());
            if (7 == color.length) {
                ogarcopythelb.color = color;
            }
            if (ogarcopythelb.clanTag.length > 0) {
                ogario.clanTag = ogarcopythelb.clanTag;
            }
            if (profiles[this.selectedProfile]) {
                profiles[this.selectedProfile].nick = ogarcopythelb.nick;
                profiles[this.selectedProfile].clanTag = ogarcopythelb.clanTag;
                profiles[this.selectedProfile].skinURL = ogarcopythelb.skinURL;
                profiles[this.selectedProfile].color = ogarcopythelb.color;
            }
            this.saveSettings(profiles, 'ogarioPlayerProfiles');
            this.findOwnedVanillaSkin();
        },
        loadSkin(img, url, animated) {
            var app = this;
            //console.log ("img:" + img + "url:" + url);
            if (url && url.includes && (url.includes(".mp4") || url.includes(".webm") || url.includes(".ogv"))) {
                img[url] = new Video();
                //console.log("stage 2 videos");
            } else {
                img[url] = new Image();
            }
            img[url].crossOrigin = 'Anonymous';
            img[url].onload = function() {
                    if (this.complete &&
                        this.width &&
                        this.height &&
                        this.width <= 2000 && this.width > 0 &&
                        this.height <= 2000 && this.height > 0){
                        
						if (animated != "fbSkin"){
							app.cacheQueue.push(url);
							if (1 == app.cacheQueue.length) app.cacheSkin(app.customSkinsCache, animated)
							app.cacheQueue2.push(url) 
							if (1 == app.cacheQueue2.length) app.cacheSkin2(app.customSkinsCache)
							if (animated == true) app.cacheQueue3.push(url)
							if (1 == app.cacheQueue3.length) app.cacheSkin3(app.customSkinsCache)
						}
						else if (animated == "fbSkin"){
							app.cacheQueue4.push(url)
							if (1 == app.cacheQueue4.length) app.cacheSkin4(app.customSkinsCache)	
						}
						
						/*
						((app.cacheQueue.push(url),
                                1 == app.cacheQueue.length &&
                                app.cacheSkin(app.customSkinsCache, animated)),
                            (app.cacheQueue2.push(url),
                                1 == app.cacheQueue2.length &&
                                app.cacheSkin2(app.customSkinsCache)),
                            (animated == true  && app.cacheQueue3.push(url),
                                1 == app.cacheQueue3.length &&
                                app.cacheSkin3(app.customSkinsCache))
                            (animated == "fbSkin" && app.cacheQueue4.push(url),
                                1 == app.cacheQueue4.length &&
                                app.cacheSkin4(app.customSkinsCache))								
                        );*/
						}
                },
                img[url].onerror = function() {
                    //console.log("error loading image: "+ url);
                    if (url && url.includes(window.EnvConfig.config_url)) {
                        url = "https://legendmod.ml/vanillaskins/" + url.split('/').pop(); //if CORS policy on miniclip images, use other source
                        //console.log("new destination is: " + url);
                        application.customSkinsMap[window.lastusednameforskin] = url;
                        application.loadSkin(img, url);
                        return url;

                    }
                };
            img[url].src = url;
        },
        checkgraphics() {
            if (defaultSettings.graphics == "high") {
                application.graphics = 1
            } 
			else if (defaultSettings.graphics == "medium") {
                application.graphics = 2
            } 
			else if (defaultSettings.graphics == "low") {
                application.graphics = 4
            } 
			else if (defaultSettings.graphics == "very_low") {
                application.graphics = 8
            }
        },
        cacheSkin(skinCache, animated) {
            //console.log(skinCache);  //////// return the image src
            if (0 != this.cacheQueue.length) {
                var e = this.cacheQueue.shift();
                if (e && !this.customSkinsCache[e + "_cached"]) {
                    var depth = 512;
                    this.checkgraphics();
                    if (application.graphics) {
                        depth = depth / application.graphics;
                    }
                    var i = document.createElement("canvas");
                    i.width = depth;
                    i.height = depth;
                    var $ = i.getContext("2d");
                    $.beginPath();
                    $.arc(depth / 2, depth / 2, depth / 2, 0, 2 * Math.PI, false);
                    $.clip();
                    try {
                        if (!animated) {
                            $.drawImage(this.customSkinsCache[e], 0, 0, depth, depth);
                        } else {
                            //console.log('was animated')
                            $.drawImage(this.customSkinsCache[e], 0, 0, this.customSkinsCache[e].width / 2, this.customSkinsCache[e].height, 0, 0, depth, depth);
                        }
                    } catch (error) {}
                    this.customSkinsCache[e + "_cached"] = new Image;
                    this.customSkinsCache[e + "_cached"].src = i.toDataURL();
                    i = null;
                    this.cacheSkin(this.customSkinsCache, animated);
                }
            }
        },
        cacheSkin2(skinCache) {
            if (0 != this.cacheQueue2.length) {
                var e = this.cacheQueue2.shift();
                if (e && !this.customSkinsCache[e + "_cached2"]) {
                    var depth = 64;
                    var i = document.createElement("canvas");
                    i.width = depth;
                    i.height = depth;
                    var $ = i.getContext("2d");
                    $.beginPath();
                    $.arc(depth / 2, depth / 2, depth / 2, 0, 2 * Math.PI, false);
                    $.clip();
                    try {
                        $.drawImage(this.customSkinsCache[e], 0, 0, depth, depth);
                    } catch (error) {}
                    this.customSkinsCache[e + "_cached2"] = new Image;
                    this.customSkinsCache[e + "_cached2"].src = i.toDataURL();
                    //this.customSkinsCache[e + "_cached"].src = i.toDataURL('image/jpeg', 0.1);
                    i = null;
                    this.cacheSkin2(this.customSkinsCache);
                }
            }
        },
        cacheSkin3(skinCache) {
            //console.log(skinCache);  //////// return the image src
            if (0 != this.cacheQueue3.length) {
                var e = this.cacheQueue3.shift();
                if (e && !this.customSkinsCache[e + "_cached3"]) {
                    var depth = 512;
                    this.checkgraphics();
                    if (application.graphics) {
                        depth = depth / application.graphics;
                    }
                    var i = document.createElement("canvas");
                    i.width = depth;
                    i.height = depth;
                    var $ = i.getContext("2d");
                    $.beginPath();
                    $.arc(depth / 2, depth / 2, depth / 2, 0, 2 * Math.PI, false);
                    $.clip();
                    try {
                        $.drawImage(this.customSkinsCache[e], this.customSkinsCache[e].width / 2, 0, this.customSkinsCache[e].width / 2, this.customSkinsCache[e].height, 0, 0, depth, depth);
                    } catch (error) {}
                    this.customSkinsCache[e + "_cached3"] = new Image;
                    this.customSkinsCache[e + "_cached3"].src = i.toDataURL();
                    i = null;
                    this.cacheSkin3(this.customSkinsCache);
                }
            }
        },
        cacheSkin4(skinCache) {
            //console.log(skinCache);  //////// return the image src
            if (0 != this.cacheQueue4.length) {
                var e = this.cacheQueue4.shift();
                if (e && !this.customSkinsCache[e + "_cached4"]) {
                    var depth = 512;
                    this.checkgraphics();
                    if (application.graphics) {
                        depth = depth / application.graphics;
                    }
                    var i = document.createElement("canvas");
                    i.width = depth;
                    i.height = depth;
                    var $ = i.getContext("2d");
                    $.beginPath();
                    $.arc(depth / 2, depth / 2, depth / 2, 0, 2 * Math.PI, false);
                    $.clip();
                    try {
                        $.drawImage(this.customSkinsCache[e], this.customSkinsCache[e].width / 2, 0, this.customSkinsCache[e].width / 2, this.customSkinsCache[e].height, 0, 0, depth, depth);
                    } catch (error) {}
                    this.customSkinsCache[e + "_cached4"] = new Image;
                    this.customSkinsCache[e + "_cached4"].src = i.toDataURL();
                    i = null;
                    this.cacheSkin4(this.customSkinsCache);
                }
            }
        },		
        getCachedSkin(skinCache, skinMap) {
            if (skinCache[skinMap + '_cached3']) {
                var today = new Date();
                if (today.getSeconds() < 30) { //vanilla animated skins
                    return skinCache[skinMap + '_cached'] && skinCache[skinMap + '_cached'].complete && skinCache[skinMap + '_cached'].width ? skinCache[skinMap + '_cached'] : null;
                } else if (today.getSeconds() >= 30) {
                    return skinCache[skinMap + '_cached3'] && skinCache[skinMap + '_cached3'].complete && skinCache[skinMap + '_cached3'].width ? skinCache[skinMap + '_cached3'] : null;
                }
            }
            return skinCache[skinMap + '_cached'] && skinCache[skinMap + '_cached'].complete && skinCache[skinMap + '_cached'].width ? skinCache[skinMap + '_cached'] : null;

        },
        cacheCustomSkin(nick, color, skinUrl) {
            if (skinUrl) {
                var s = ':party' === this.gameMode ? nick + color : nick;
                //console.log("nick= " + nick);
                //console.log("color= " + color);
                if (s && (this.customSkinsMap[s] = skinUrl), this.customSkinsCache.hasOwnProperty(skinUrl)) return;
                this.loadSkin(this.customSkinsCache, skinUrl);
            }
        },
        checkSkinsMap(nick, color) {
            var mode = ':party' === this.gameMode ? nick + color : nick;
            //console.log(.customSkinsMap.hasOwnProperty(mode));
            return !!this.customSkinsMap.hasOwnProperty(mode);
        },
        getCustomSkin(nick, color) {
            //console.log("nick= " + nick);
            //console.log("color= " + color);				               
            if (':party' === this.gameMode && this.customSkinsMap[nick + "#000000"] && this.customSkinsMap[nick + "#000000"].includes("configs-web.agario.miniclippt.com/live/")) {
                //console.log('changed for',nick)
                color = "#000000";
            }
            if (!this.checkSkinsMap(nick, color)) return null;
            var mode = ':party' === this.gameMode ? nick + color : nick;
            return this.getCachedSkin(this.customSkinsCache, this.customSkinsMap[mode]);
        },
        calculateMapSector(t, xgh2, closeExpr = false) {
            if (!ogario.mapOffsetFixed) {
                return "";
            }
            /*
            if (closeExpr){
            	if (window.legendmod.vector[window.legendmod.vnr][0] || window.legendmod.vector[window.legendmod.vnr][1]){
            		closeExpr= closeExpr + legendmod.mapOffsetX
            		xgh2 = xgh2 + legendmod.mapOffsetY
            		//t = legendmod.untranslateX(t)
            		//t = legendmod.translateX(t - i.mapOffsetX)
            		//xgh2 = legendmod.untranslateY(xgh2)		
            		//xgh2 = legendmod.translateY(xgh2 - i.mapOffsetY)							
            	}
            }*/
            //var GearType = i.mapOffsetX + i.mapOffset;
            //var closingExpr = i.mapOffsetY + i.mapOffset;				
            var GearType = closeExpr ? ogario.mapOffsetX + ogario.mapOffset : ogario.mapOffset;
            var closingExpr = closeExpr ? ogario.mapOffsetY + ogario.mapOffset : ogario.mapOffset;
            var n = Math.floor((xgh2 + closingExpr) / (ogario.mapSize / defaultSettings.sectorsY));
            var r = Math.floor((t + GearType) / (ogario.mapSize / defaultSettings.sectorsX));
            window.calculateMapSector = n < 0 ? 0 : n >= defaultSettings.sectorsY ? defaultSettings.sectorsY - 1 : n;
            r = r < 0 ? 0 : r >= defaultSettings.sectorsX ? defaultSettings.sectorsX - 1 : r;
            String.fromCharCode(n + 65) + (r + 1);
            return n = n < 0 ? 0 : n >= defaultSettings.sectorsY ? defaultSettings.sectorsY - 1 : n, r = r < 0 ? 0 : r >= defaultSettings.sectorsX ? defaultSettings.sectorsX - 1 : r, String.fromCharCode(n + 65) + (r + 1);
        },
        shortMassFormat(value) {
            return value < 1000 ? value : Math.round(value / 100) / 10 + 'k';
        },
        updateDeathLocations(t, e) {
            if (ogario.mapOffsetFixed) {
                this.deathLocations.push({
                    "x": t + ogario.mapOffsetX,
                    "y": e + ogario.mapOffsetY
                });
                if (6 == this.deathLocations.length) {
                    this.deathLocations.shift();
                }
                this.lastDeath = this.deathLocations.length - 1;
            }
        },
        drawMiniMap() {
            if (ogario.mapOffsetFixed) {
                var t = defaultSettings.miniMapWidth;
                var e = defaultSettings.miniMapTop;
                var s = t + e;
                var o = t - 18;
                var a = e + 9.5;
                if (this.miniMap) {
                    this.miniMapCtx.clearRect(0, 0, t, s);
                } else {
                    this.miniMap = document.getElementById("minimap");
                    this.miniMapCtx = this.miniMap.getContext("2d");
                    this.miniMapCtx.ogarioCtx = true;
                    this.miniMap.width = t;
                    this.miniMap.height = s;
                }
                if (this.miniMap.width != t) {
                    this.miniMap.width = t;
                    this.miniMap.height = s;
                }
                var n = o / ogario.mapSize;
                var r = ogario.mapOffsetX + ogario.mapOffset;
                var l = ogario.mapOffsetY + ogario.mapOffset;
                if (this.drawSelectedCell(this.miniMapCtx),
                    //
                    this.w = ogario.playerX,
                    this.u = ogario.playerY,
                    /*
						this.w = window.legendmod.vector[window.legendmod.vnr][0] ? legendmod.translateX(i.playerX) : i.playerX,
						this.u = window.legendmod.vector[window.legendmod.vnr][1] ? legendmod.translateY(i.playerY) : i.playerY,  
*/
                    //						
                    //this.currentSector = this.calculateMapSector(i.playerX, i.playerY, true),
                    this.currentSector = this.calculateMapSector(this.w, this.u, true),

                    this.miniMapCtx.font = defaultSettings.miniMapFontWeight + ' ' + (e - 6) + 'px ' + defaultSettings.miniMapFontFamily,
                    this.miniMapCtx.fillStyle = defaultSettings.miniMapMyCellColor,
                    this.miniMapCtx.globalAlpha = 1,
                    this.miniMapCtx.fillText(this.currentSector, defaultSettings.miniMapWidth - 32, e),
                    //this.miniMapCtx.font = defaultSettings.miniMapFontWeight + " " + (e - 4) + "px " + defaultSettings.miniMapFontFamily,
                    //this.miniMapCtx.fillStyle = defaultSettings.miniMapSectorColor,
                    //this.miniMapCtx.fillText(this.currentSector, 10, e),
                    this.miniMapSectors || this.drawMiniMapSectors(defaultSettings.sectorsX, defaultSettings.sectorsY, o, s, a),
                    this.miniMapCtx.save(),
                    this.miniMapCtx.translate(9.5, a), ":battleroyale" === this.gameMode && drawRender && drawRender.drawBattleAreaOnMinimap(this.miniMapCtx, o, o, n, r, l),
                    defaultmapsettings.showMiniMapGhostCells) {
                    var h = ogario.ghostCells;
                    this.miniMapCtx.beginPath();
                    var c = 0;
                    for (; c < h.length; c++) {
                        if (!h[c].inView) {
                            var u = ~~((h[c].x + r) * n);
                            var d = ~~((h[c].y + l) * n);
                            this.miniMapCtx.moveTo(u, d);
                            this.miniMapCtx.arc(u, d, ~~(h[c].size * n), 0, this.pi2, false);
                        }
                    }
                    this.miniMapCtx.fillStyle = defaultSettings.miniMapGhostCellsColor;
                    this.miniMapCtx.globalAlpha = defaultSettings.miniMapGhostCellsAlpha;
                    this.miniMapCtx.shadowColor = defaultSettings.miniMapGhostCellsColor;
                    this.miniMapCtx.shadowBlur = 10;
                    this.miniMapCtx.shadowOffsetX = 0;
                    this.miniMapCtx.shadowOffsetY = 0;
                    this.miniMapCtx.fill();
                    this.miniMapCtx.globalAlpha = 1;
                    this.miniMapCtx.shadowBlur = 0;
                }
                if (defaultmapsettings.showMiniMapGuides) {
                    u = Math.round((ogario.playerX + r) * n);
                    d = Math.round((ogario.playerY + l) * n);
                    this.miniMapCtx.lineWidth = 1;
                    this.miniMapCtx.strokeStyle = defaultSettings.miniMapGuidesColor;
                    this.miniMapCtx.beginPath();
                    this.miniMapCtx.moveTo(u, 0);
                    this.miniMapCtx.lineTo(u, o - 1);
                    this.miniMapCtx.moveTo(0, d);
                    this.miniMapCtx.lineTo(o - 1, d);
                    this.miniMapCtx.stroke();
                }
                if (defaultmapsettings.showExtraMiniMapGuides) {
                    u = Math.round((ogario.playerX + r) * n);
                    d = Math.round((ogario.playerY + l) * n);

                    //draw the yellow on minimap
                    this.miniMapCtx.beginPath();
                    this.miniMapCtx.lineWidth = "1";
                    this.miniMapCtx.strokeStyle = "yellow";
                    var miniax = legendmod.canvasWidth / (legendmod.mapMaxX - legendmod.mapMinX) / legendmod.viewScale; //CORRECT
                    var miniay = legendmod.canvasHeight / (legendmod.mapMaxY - legendmod.mapMinY) / legendmod.viewScale; //CORRECT
                    var minidaxx = application.miniMapSectors.width * miniax;
                    var minidayy = application.miniMapSectors.width * miniay;

                    var fixminidaxx = u - (minidaxx / 2);
                    var fixminidayy = d - (minidayy / 2);

                    //if (fixminidaxx<0){ fixminidaxx=0; }
                    //if (fixminidayy<0){ fixminidayy=0; }
                    this.miniMapCtx.rect(fixminidaxx, fixminidayy, minidaxx, minidayy);
                    this.miniMapCtx.stroke();

                }
                //
                if (LM.arrowFB[0].visible) { //Yahnych
                    this.miniMapCtx.beginPath();
                    this.miniMapCtx.arc((LM.arrowFB[0].x + r) * n, (LM.arrowFB[0].y + l) * n, defaultSettings.miniMapMyCellSize, 0, this.pi2, false);
                    this.miniMapCtx.closePath();
                    this.miniMapCtx.lineWidth = defaultSettings.miniMapMyCellStrokeSize;
                    this.miniMapCtx.strokeStyle = 'white';
                    this.miniMapCtx.stroke();
                    this.miniMapCtx.fillStyle = 'blue';
                    this.miniMapCtx.fill();
                    //if (LM.arrowFB[0].nick.length > 0) {
                    this.miniMapCtx.font = `${defaultSettings.miniMapNickFontWeight} ${defaultSettings.miniMapNickSize}px ${defaultSettings.miniMapNickFontFamily}`;
                    this.miniMapCtx.textAlign = `center`;
                    this.miniMapCtx.textBaseline = "bottom";
                    if (defaultSettings.miniMapNickStrokeSize > 0) {
                        this.miniMapCtx.lineWidth = defaultSettings.miniMapNickStrokeSize;
                        this.miniMapCtx.strokeStyle = defaultSettings.miniMapNickStrokeColor;
                        this.miniMapCtx.strokeText('🔹' + LM.arrowFB[0].nick + '🔹', (LM.arrowFB[0].x + r) * n, (LM.arrowFB[0].y + l) * n - (defaultSettings.miniMapTeammatesSize * 2 + 2.5));
                    }
                    this.miniMapCtx.fillStyle = defaultSettings.miniMapNickColor;
                    this.miniMapCtx.fillText('🔹' + LM.arrowFB[0].nick + '🔹', (LM.arrowFB[0].x + r) * n, (LM.arrowFB[0].y + l) * n - (defaultSettings.miniMapTeammatesSize * 2 + 2.5));
                    //}
                }
                //				
                if (this.miniMapCtx.beginPath(),
                    this.miniMapCtx.arc((ogario.playerX + r) * n, (ogario.playerY + l) * n,
                        defaultSettings.miniMapMyCellSize, 0, this.pi2, false),
                    this.miniMapCtx.closePath(),
                    defaultSettings.miniMapMyCellStrokeSize > 0 && (this.miniMapCtx.lineWidth = defaultSettings.miniMapMyCellStrokeSize,
                        this.miniMapCtx.strokeStyle = defaultSettings.miniMapMyCellStrokeColor,
                        this.miniMapCtx.stroke()),
                    this.miniMapCtx.fillStyle = defaultSettings.miniMapMyCellColor,
                    this.miniMapCtx.fill(),
                    this.teamPlayers.length) {
                    c = 0;
                    for (; c < this.teamPlayers.length; c++) {
                        this.teamPlayers[c].drawPosition(this.miniMapCtx, ogario.mapOffset, n, this.privateMiniMap, this.targetID, application.teamPlayers[c].color);
                    }
                }
                if (this.deathLocations.length > 0) {
                    u = Math.round((this.deathLocations[this.lastDeath].x + ogario.mapOffset) * n);
                    d = Math.round((this.deathLocations[this.lastDeath].y + ogario.mapOffset) * n);
                    var f = Math.max(defaultSettings.miniMapMyCellSize - 2, 4);
                    this.miniMapCtx.lineWidth = 1;
                    this.miniMapCtx.strokeStyle = this.deathLocations.length - 1 == this.lastDeath ? defaultSettings.miniMapDeathLocationColor : "#FFFFFF";
                    this.miniMapCtx.beginPath();
                    this.miniMapCtx.moveTo(u - f, d);
                    this.miniMapCtx.lineTo(u + f, d);
                    this.miniMapCtx.moveTo(u, d - f);
                    this.miniMapCtx.lineTo(u, d + f);
                    this.miniMapCtx.stroke();
                }
                this.miniMapCtx.restore();
            }
        },
        drawMiniMapSectors(x, y, size, height, scale) {
            this.miniMapSectors = document.getElementById('minimap-sectors');
            const ctx = this.miniMapSectors.getContext('2d');
            ctx.ogarioCtx = true;
            this.miniMapSectors.width = size;
            this.miniMapSectors.height = height;
            ctx.fillStyle = '#FFFFFF';
            this.dTok(ctx, size - 1);
            drawRender.drawSectors(ctx, ogario.mapOffsetFixed, x, y, 0.5, scale, size - 0.5, height - 9.5, defaultSettings.miniMapSectorsColor, defaultSettings.miniMapSectorsColor, 1, false);
        },
        resetMiniMapSectors() {
            this.miniMapSectors = null;
        },
        drawSelectedCell(ctx) {
            if (ogario.play && ogario.playerSplitCells > 1 && (defaultmapsettings.splitRange || defaultmapsettings.oppColors || defaultmapsettings.oppRings || defaultmapsettings.showStatsSTE)) {
                ctx.fillStyle = '#FFFFFF';
                ctx.globalAlpha = this.selectBiggestCell ? 0.6 : 0.3;
                ctx.beginPath();
                ctx.arc(48, 15, 6, 0, this.pi2, false);
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = this.selectBiggestCell ? 0.3 : 0.6;
                ctx.beginPath();
                ctx.arc(60, 15, 4, 0, this.pi2, false);
                ctx.closePath();
                ctx.fill();
            }
        },
        dTok(ctx, size) {
            ctx.font = defaultSettings.miniMapFontWeight + ' ' + (defaultSettings.miniMapTop - 6) + 'px ' + defaultSettings.miniMapFontFamily;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'top';
            //ctx.fillText(atob(this.token), size, 7);
        },
        /*            drawTeammatesInd(ctx, e, i, s) {
                        this.indicator && ctx.drawImage(this.indicator, e - 45, i - s - 90);
                    }, 
        drawCellInfo(ctx, e, s, o, a, n, r, l, h, c, u, d) {
            //if (!n && !h && (ctx.globalAlpha = i.globalAlpha, defaultmapsettings.teammatesInd && d && !l && a <= 200 && this.drawTeammatesInd(ctx, s, o, a), !defaultmapsettings.noNames || defaultmapsettings.showMass)) {
            if (!n && !h && (ctx.globalAlpha = ogario.globalAlpha, defaultmapsettings.teammatesInd && d && !l && a <= 200 && drawRender.drawTeammatesInd(ctx, s, o, a), !defaultmapsettings.noNames || defaultmapsettings.showMass)) {
                var f = false;
                if (l || r || !(f = this.setAutoHideCellInfo(a)) || !defaultmapsettings.autoHideNames || !defaultmapsettings.autoHideMass) {
                    var m = null;
                    if (!this.cells.hasOwnProperty(e)) return (m = new ogarbasicassembly(s, o, r, l, defaultmapsettings.shortMass, defaultmapsettings.virMassShots)).setMass(a), m.setNick(c), void(this.cells[e] = m);
                    (m = this.cells[e]).update(s, o, a, r, l, c),
                        m.setDrawing(defaultmapsettings.optimizedNames, defaultmapsettings.optimizedMass, defaultmapsettings.shortMass, defaultmapsettings.virMassShots, defaultmapsettings.namesStroke, defaultmapsettings.massStroke),
                        m.setDrawingScale(ogario.viewScale, defaultSettings.namesScale, defaultSettings.massScale, defaultSettings.virMassScale, defaultSettings.strokeScale),
                        ctx.globalAlpha = defaultSettings.textAlpha, defaultmapsettings.noNames || f && defaultmapsettings.autoHideNames || l && defaultmapsettings.hideMyName || d && defaultmapsettings.hideTeammatesNames || m.drawNick(ctx, defaultSettings.namesColor, defaultSettings.namesFontFamily, defaultSettings.namesFontWeight, defaultSettings.namesStrokeColor),
                        !defaultmapsettings.showMass || f && defaultmapsettings.autoHideMass || l && defaultmapsettings.hideMyMass || defaultmapsettings.hideEnemiesMass && !l && !r || m.drawMass(ctx, defaultSettings.massColor, defaultSettings.massFontFamily, defaultSettings.massFontWeight, defaultSettings.massStrokeColor) && (window.ExternalScripts && !window.legendmod5.optimizedMass && m.drawMerge(ctx, defaultSettings.massColor, defaultSettings.massFontFamily, defaultSettings.massFontWeight, defaultSettings.massStrokeColor));
                }
            }
        },*/
        setVirusColor(size) {
            const floor = Math.floor(size * size / 100);
            if (floor > 183) {
                return '#C80000';
            }
            return defaultSettings.virusColor;
        },
        setVirusStrokeColor(size) {
            if (ogario.play && ogario.playerMaxMass != 0) {
                const floor = Math.floor(size * size / 100);
                const biggestCell = floor / (this.selectBiggestCell ? ogario.playerMaxMass : ogario.playerMinMass);
                if (biggestCell > 0.76) {
                    return '#FFDC00';
                }
                return '#C80000';
            }
            return defaultSettings.virusStrokeColor;
        },
        setAutoHideCellInfo(t) {
            return t <= 40 || ogario.viewScale < 0.5 && t < 550 && t < 25 / ogario.viewScale;
        },
        setParty() {
            let value = $('#party-token').val();
            this.gameMode = ogario.gameMode = $(`#gamemode`).val();
            this.setQuest();
            if (this.gameMode !== ':party' || !value) {
                return;
            }
            let newValue = value;
            if (value.indexOf('#') != -1) {
                value = value.split('#');
                newValue = value[1];
            }
            if (this.partyToken !== newValue) {
                this.partyToken = newValue;
                this.flushSkinsMap();
                this.flushChatData();
                this.cancelTargeting();
            }
        },
        createParty() {
            $('#create-party-btn').click();
        },
        joinParty() {
            const value = $('#party-token').val();
            if (!value) {
                return;
            }
            $('#pre-join-party-btn').click();
            $('.party-token').val(value);
            $('#join-party-btn').click();
        },
        leaveParty() {
            $('#party-token, .party-token').val('');
            $('#leave-party-btn').click();
        },
        closeParty() {
            $('#party-token, .party-token').val('');
            $('.party-icon-back').click();
        },
        flushData() {
            this.flushPartyData();
            this.flushSkinsMap();
            this.flushChatData();
            this.cancelTargeting();
            ogario.play = false;
            ogario.playerColor = null;
        },
        flushPartyData() {
            this.teamPlayers = [];
            this.parties = [];
            this.lastSentNick = '';
            this.lastSentClanTag = null;
            this.lastSentSkinURL = '';
            this.lastSentCustomColor = '';
            this.lastSentPartyToken = '';
            this.lastSentServerToken = '';
        },
        flushCells() {
            this.cells = {};
        },
        flushSkinsMap() {
            this.customSkinsMap = {};
        },
        flushChatData() {
            this.chatUsers = {};
        },
        getWS(ws) {
            if (ws) {
                this.ws = ws;
                this.createServerToken();
                this.updateServerInfo();
                if (-1 == this.ws.indexOf('agar.io')) {
                    this.closeConnection();
                }
            }
        },
        recreateWS(token) {
            if (!token) return null;
            var text = null;
            if (/^[a-zA-Z0-9=+\/]{12,}$/.test(token)) {
                //var atobToken = atob(token);
				var atobToken = token;
				
                //ccse
                if (!text && atobToken.search(/agar\.io/) == -1) {
                    text = 'wss://' + atobToken;
                    //console.log("recreateWS case 1:" + text);
                    return text;
                }

                if (/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/.test(atobToken)) {
					text = 'wss://ip-' + atobToken.replace(/\./g, '-').replace(':', '.agar.io:');
                    //console.log("recreateWS case 2:" + text);
                }
            }
			else if (!text && /^[a-z0-9]{5,}$/.test(token)) {
                //console.log("recreateWS case 3:" + text);
				//text = 'wss://live-arena-' + token + '.tech.agar.io:80';
                //text = 'wss://live-arena-' + token + '.agar.io:80';
                text = 'wss://live-arena-' + token + '.agar.io:443'
            }		
			else if (!token.includes("s://")){
				text = 'wss://' + token; //private servers
			}
			else{
				text = token; //private servers
			}			
            return text;
        },
        createServerToken() {
            var matchOld = this.ws.match(/ip-\d+/);
            //var matchNew = this.ws.match(/live-arena-([\w\d]+)/);
			var matchNew = this.ws.match(/live-arena-([\w\d]+(\.tech)?)\.agar\.io/);
            var text = null;
            if (matchOld) {
				  matchOld = this.ws.replace('.agar.io', '').replace(/-/g, '.').match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/);
                //matchOld = this.ws.replace('.tech.agar.io', '').replace(/-/g, '.').match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/);
                if (matchOld) {
                    this.serverIP = matchOld[0];
                    text = this.serverIP;
					//text = btoa(this.serverIP);
                }
            }
            //ccse
            if (this.ws.search(/wss?:\/\//) > -1 && this.ws.search(/agar\.io/) == -1) {

                text = this.ws.match(/wss?:\/\/(.+)/)[1]
                this.serverIP = text;				
                //text = btoa(text);
                //console.log("createServerToken case 1:" + text);
            }

            if (!text && matchNew) {
                this.serverArena = matchNew[1];
                text = this.serverArena;
                //console.log("createServerToken case 2:" + text);
            }
            if (text) {
                if (this.serverToken !== text) {
                    this.serverToken = text;
                    this.flushData();
                    this.flushCells();
                }
                this.partyToken = '';
                var matchPartyId = this.ws.match(/party_id=([A-Z0-9]{6})/);
                if (matchPartyId) {
                    this.partyToken = matchPartyId[1];
                    changeUrl('/#' + window.encodeURIComponent(this.partyToken));
                }
            }
        },
        updateServerInfo() {
            $('#server-ws').val(this.ws),
                $('#server-token').val(this.serverToken),
                $('#party-token, .party-token').val(this.partyToken);
        },
        gameServerConnect(ws) {
            if (!ws) {
                return;
            }
			this.skipServerData = true
			window.core && window.core.connect && window.core.connect(ws);
        },
        gameServerReconnect() {
            if (window.MC && window.MC.reconnect) {
                window.MC.reconnect();
                return;
            }
            if (window.master && window.master.reconnect) window.master.reconnect();
        },
        gameServerJoin(token) {
            const ws = this.recreateWS(token);
            if (ws) {
                this.skipServerData = true;
                this.gameServerConnect(ws);
            }
        },
        connect() {
            pauseVideos();
            this.closeConnection();
            this.flushData();
            this.setParty();
            //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Connecting to ogario socket'),
            if (this.privateMode && this.privateIP) {
                this.socket = new WebSocket(this.privateIP);
            } else {
                this.socket = new WebSocket(this.publicIP);
            }
            this.socket.ogarioWS = true;
            this.socket.binaryType = 'arraybuffer';
            var app = this;
            this.socket.onopen = () => {
                console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Ogario socket open:', application.publicIP);
                var buf = app.createView(3);
                buf.setUint8(0, 0);
                buf.setUint16(1, 401, true);
                app.sendBuffer(buf);
                app.sendPartyData();
            }
            this.socket.onmessage = function(buf) {
                app.handleMessage(buf);
            }
            this.socket.onclose = function(buf) {
                //app.flushData();
                console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Socket close', buf);
            }
            this.socket.onerror = function(buf) {
                //app.flushData();
                console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Socket error', buf);
                window.noOgarioSocket = true;
            };

        },
        Socket3connect(srv) {
            //if (window.noOgarioSocket && typeof Socket3enabler !== 'undefined' && typeof Socket3enabler === 'function') {
            //setTimeout(function() {
            //Socket3enabler(window.legendmod.ws);
            if (Socket3) {
                Socket3.closeAndOpen();
            }
            //}, 1000);
            //}
        },
        //Sonia6			
        SLGconnect(srv) {
            if (window.SLG3NumberTries < 2) {
                if (window.SLGconnected == null) {
                    window.SLGconnected = true; //do this only once	
                    this.SLGconnect2(srv);
                } else {
                    if (window.SLGsocket) {
                        window.SLGsocket.closeAndOpen();
                    }
                }
            }
        },
        SLGconnect2(srv) {
            this.closeSLGConnection();
            //var room = ogarcopythelb.clanTag + "-" + srv.match("-([A-Za-z0-9]{6,7})\.")[1];
            var room = $("#server-token").val();
            this.roomc = ogarcopythelb.clanTag;
            //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Connecting to SLG:', this.room);				
            //window.SLGsocket = new WebSocket("wss://connect.websocket.in/3Q-SoniaSLG_453dsV?room_id=" + this.room);
            window.SLGsocket = new WebSocket("wss://cloud.achex.ca/JIMBOY3200" + room);
            window.SLGsocket.binaryType = 'arraybuffer';
            app = this;
            window.SLGsocket.onopen = function() {
                window.SLG3NumberTries = 0;
                console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' SLG socket open:', room);
                //
                window.SLGsocket.send(JSON.stringify({
                    "auth": "JIM2" + customLMID,
                    //"auth": "JIM2" + application.playerID,
                    "password": "legendmod2"
                }));
                window.SLGsocket.send(JSON.stringify({
                    //"joinHub": "legendmod2"
                    "joinHub": $("#server-token").val()
                }));
                //					
            }
            window.SLGsocket.onmessage = function(e) {
                //console.log(e)
                app.handleSLGMessage(e);
            }
            window.SLGsocket.onclose = function(e) {
                console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' SLG socket close');
                //setTimeout(function() {
                if (window.SLG3NumberTries < 2) {
                    application.SLGconnect2(legendmod.ws)
                }
                //}, 1000)					
            }
            window.SLGsocket.onerror = function(e) {
                //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' SLG socket error', e);	
                window.SLG3NumberTries++;
                //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' SLG socket error');
            };
            window.SLGsocket.closeAndOpen = function(e) {
                window.SLGsocket.onclose = function(e) {
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Previous SLG socket closed async');
                }
                if (window.SLG3NumberTries < 2) {
                    application.SLGconnect2(legendmod.ws)
                }
            };
        },
        closeConnection() {
            if (this.socket) {
                this.socket.onmessage = null;
                try {
                    this.socket.close();
                } catch (ogarcloseconlabel) {}
                this.socket = null;
            }
            //Sonia4
            if (window.SLGsocket) {
                window.SLGsocket.onmessage = null;
                try {
                    window.SLGsocket.close();
                } catch (ogarcloseconlabel) {}
                window.SLGsocket = null;
            }
            if (window.Socket3) {
                window.Socket3.onmessage = null;
                try {
                    window.Socket3.close();
                } catch (ogarcloseconlabel) {}
                window.Socket3 = null;
            }
        },
        //Sonia6
        closeSLGConnection() {
            if (window.SLGsocket) {
                window.SLGsocket.onmessage = null;
                try {
                    window.SLGsocket.close();
                } catch (ogarcloseconlabel) {}
                window.SLGsocket = null;
            }
        },
        reconnect() {
            this.setParty();
            var app = this;
            setTimeout(function() {
                app.connect();
            }, 1000);
        },
        switchServerMode() {
            if (this.privateIP) {
                this.privateMode = !this.privateMode;
                if (this.isSocketOpen()) {
                    this.closeConnection();
                    toastr.error("Zamkni\u0119to po\u0142\u0105czenie z serwerem!");
                }
                if (this.privateMode) {
                    toastr.info("Prze\u0142\u0105czono na serwer prywatny!");
                    $(".party-panel").show();
                } else {
                    toastr.info("Prze\u0142\u0105czono na serwer publiczny!");
                    $("#active-parties").empty();
                    $(".party-panel").hide();
                }
                this.onJoin();
                if (ogario.play) {
                    this.onPlayerSpawn();
                }
            }
        },
        isSocketOpen() {
            return null !== this.socket && this.socket.readyState === this.socket.OPEN;
        },
        //Sonia6 Below
        isSLGSocketOpen() {
            var state = false;
            if (window.SLGsocket) {
                state = window.SLGsocket.readyState === window.SLGsocket.OPEN;
            }
            return state;
        },
        writeUint32(data, value) {
            for (; !![];) {
                if ((value & -128) == 0) {
                    data.push(value);
                    return;
                } else {
                    data.push(value & 127 | 128);
                    value = value >>> 7;
                }
            }
        },
        createView(value) {
            return new DataView(new ArrayBuffer(value));
        },
        strToBuff(offset, str) {
            var view = this.createView(1 + 2 * str.length);
            view.setUint8(0, offset);
            for (var length = 0; length < str.length; length++) view.setUint16(1 + 2 * length, str.charCodeAt(length), true);
            return view;
        },
        sendBuffer(value) {
            this.socket.send(value.buffer);
        },
        //Sonia4
        sendSLG(i, t) {
            if (this.isSLGSocketOpen()) {
                //if (ogarcopythelb.clanTag != this.roomc) {
                //console.log("Sending failed. Reconnecting required..")
                //this.SLGconnect(window.legendmod.ws);
                //if (window.SLGsocket) {
                //window.SLGsocket.closeAndOpen();
                //}
                //return;
                //}
                var s = this.packSLG(i);
                if (s != null) {
                    //window.SLGsocket['send'](s + t);
                    var temp = s + t;
                    console.log(temp);
                    SLGsocket.send(JSON.stringify({
                        //"toH": "legendmod2",
                        "toH": $("#server-token").val(),
                        "msg": temp
                    }));
                }
            }
        },
        handleMessage(message) {
            this.readMessage(new DataView(message.data));
        },
        //Sonia4
        handleSLGMessage(message) {
            //this['SLGHandler'](t.data);
            var temp = message.data;
            //console.log(message.data);
            temp = JSON.parse(temp);
            //if (temp){
            //this['SLGHandler'](temp.msg);     
            this.SLGSimpleHandler(temp.msg);
            //}
        },
        readMessage(message) {
            switch (message.getUint8(0)) {
                case 0:
                    this.playerID = message.getUint32(1, true);
                    //this.playerID = message.getUint16(1, true);
                    break;
                case 1:
                    this.sendPlayerUpdate();
                    break;
                case 20:
                    this.updateTeamPlayer(message);
                    break;
                case 30:
                    this.updateTeamPlayerPosition(message);
                    break;
                case 96:
                    break;
                case 100:
                    this.readChatMessage(message);
            }
        },
        //Sonia4
        SLGHandler(message) {
            var packet = this.unpackSLG(message);
            if (packet == null) return;
            switch (message.charAt(0)) {
                case "R":
                    this.getSuperLegendSDATA(packet);
                    break;
                case "Q":
                    //this.getSLGQinfo(packet);
                    break;
            }
        },
        SLGSimpleHandler(message) {
            var Socket3data = message;
            //console.log("recieve", message);
            if (Socket3data == null) {
                return;
            } else {
                //var ids = Socket3data.message;
                var ids = window.decodeURIComponent(escape(Socket3data.message));
                //var id = this.checkPlayerID(ids);
                var id = this.checkPlayerNick(ids);
                if (null != id) {
                    //console.log("id found", id);
                    this.teamPlayers[id].lbgpi = parseInt(Socket3data.s);
                    //if (this.top5[id]){
                    //this.top5[id].lbgpi = parseInt(lbgpi); //
                    //}

                }
            }
        },
        //Sonia4
        packSLG(message) {
            message += this.packInt(this.playerID, 4);
            return message;
        },
        //Sonia4
        unpackSLG(message) {
            message = message.slice(1);
            return message;
        },
        //Sonia4
        getSLGID(message) {
            message = message.slice(0, 2)
            return this.unpackInt(message);
        },
        //Sonia4
        getSLGVal(message) {
            message = message.slice(2);
            return message;
        },
        sendPlayerState(state) {
            if (this.isSocketOpen()) {
                var view = this.createView(1);
                view.setUint8(0, state);
                this.sendBuffer(view);
            }
        },
        sendPlayerSpawn() {
            this.sendPlayerState(1);
        },
        sendPlayerDeath() {
            this.sendPlayerState(2);
        },
        sendPlayerJoin() {
            this.sendPlayerState(3);
        },
        sendPlayerData(offset, name, str) {
            if (this[name] !== null && this[name] === str) {
                return;
            }
            if (this.isSocketOpen()) {
                this.sendBuffer(this.strToBuff(offset, str));
                this[name] = str;
            }
        },
        sendPlayerNick() {
            this.sendPlayerData(10, 'lastSentNick', ogarcopythelb.nick);
        },
        sendPlayerClanTag() {
            this.sendPlayerData(11, 'lastSentClanTag', ogarcopythelb.clanTag);
        },
        sendPlayerSkinURL() {
            this.sendPlayerData(12, 'lastSentSkinURL', ogarcopythelb.skinURL);
        },
        sendPlayerCustomColorn() {
            this.sendPlayerData(13, 'lastSentCustomColor', ogarcopythelb.color);
        },
        sendPlayerColor() {
            if (this.isSocketOpen() && ogario.playerColor) {
                this.sendBuffer(this.strToBuff(14, ogario.playerColor));
            }
        },
        sendPartyToken() {
            this.setParty();
            this.sendPlayerData(15, 'lastSentPartyToken', this.partyToken);
        },
        sendServerToken() {
            this.sendPlayerData(16, 'lastSentServerToken', this.serverToken);
        },
        sendServerJoin() {
            this.sendServerToken();
            this.sendPlayerJoin();
        },
        sendServerRegion() {
            if (this.region) {
                var region = this.region.split('-');
                if (this.isSocketOpen()) {
                    this.sendBuffer(this.strToBuff(17, region[0]));
                }
            }
        },
        sendServerGameMode() {
            var gamemode = 'FFA';
            switch (this.gameMode) {
                case ':battleroyale':
                    gamemode = 'BTR';
                    break;
                case ':teams':
                    gamemode = 'TMS';
                    break;
                case ':experimental':
                    gamemode = 'EXP';
                    break;
                case ':party':
                    gamemode = 'PTY';
            }
            if (this.isSocketOpen()) {
                this.sendBuffer(this.strToBuff(18, gamemode));
            }
        },
        sendServerData() {
            if (this.skipServerData) {
                this.skipServerData = false;
                return;
            }
            this.region = $('#region').val();
            this.gameMode = $('#gamemode').val();
            this.sendServerRegion();
            this.sendServerGameMode();
        },
        sendPartyData() {
            this.sendPlayerClanTag();
            this.sendPartyToken();
            this.sendServerToken();
            this.sendPlayerNick();
        },
        sendPlayerUpdate() {
            if (this.isSocketOpen() && ogario.play && this.playerID && ogario.playerColor) {
                function encode(str) {
                    for (let length = 0; length < str.length; length++) {
                        view.setUint16(offset, str.charCodeAt(length), true);
                        offset += 2;
                    }
                    view.setUint16(offset, 0, true);
                    offset += 2;
                }
                let text = 41;
                text += ogarcopythelb.nick.length * 2;
                text += ogarcopythelb.skinURL.length * 2;
                var view = this.createView(text);
                view.setUint8(0, 20);
                view.setUint32(1, this.playerID, true);
                var offset = 5;
                encode(ogarcopythelb.nick);
                encode(ogarcopythelb.skinURL);
                encode(ogarcopythelb.color);
                encode(ogario.playerColor);
                this.sendBuffer(view);
            }
        },
        sendPlayerPosition() {
            if (this.isSocketOpen() && ogario.play && this.playerID) {
                const view = this.createView(17);
                view.setUint8(0, 30);
                view.setUint32(1, this.playerID, true);
                view.setInt32(5, this.getPlayerX(), true);
                view.setInt32(9, this.getPlayerY(), true);
                if (typeof ogario.playerMass !== 'undefined') {
                    view.setUint32(13, ogario.playerMass, true);
                } else {
                    view.setUint32(13, this.playerMass, true);
                }
                this.sendBuffer(view);
            }
        },
        packInt(x, m) {
            var s = "";
            if (m == 2) {
                s += String.fromCharCode(x)
            } else {
                var p = x / Math.pow(2, 16);
                var r = x % Math.pow(2, 16);
                s += String.fromCharCode(Math.floor(p));
                s += String.fromCharCode(Math.floor(r));
            }
            return s;
        },
        packFloat(x, m) {
            if (m == 2) {
                x = Math.floor(x * 100000);
            } else {
                x = Math.floor(x * 1000000000);
            }
            return this.packInt(x, m);
        },
        unpackInt(s) {
            var x = 0;
            if (s.length == 1) {
                x += s.charCodeAt(0);
            } else {
                x += s.charCodeAt(0) * Math.pow(2, 16);
                x += s.charCodeAt(1);
            }
            return x;
        },
        unpackFloat(s) {
            var x = this.unpackInt(s);
            if (s.length == 1) {
                x = x / 100000;
            } else {
                x = x / 1000000000;
            }
            return x;
        },
        getrel(x, axis) {
            var v = window.legendmod;
            if (axis == 0) return x / (v.mapMaxX - v.mapMinX);
            else return x / (v.mapMaxY - v.mapMinY);
        },
        getreal(x, axis) {
            var v = window.legendmod;
            if (axis == 0) return x * (v.mapMaxX - v.mapMinX) + v.mapMinX;
            else return x * (v.mapMaxY - v.mapMinY) + v.mapMinY;
        },
        sendJimboy3100info() {
            if (window.legendmod.play) {
                window.playerCellsSock = [];
                if (legendmod.playerCells && legendmod.playerCells.length) {
                    for (var i = 0; i < legendmod.playerCells.length; i++) {
                        window.playerCellsSock[i] = {};
                        window.playerCellsSock[i].id = legendmod.playerCells[i].id;
                        window.playerCellsSock[i].x = legendmod.playerCells[i].x + legendmod.mapOffsetX;
                        window.playerCellsSock[i].y = legendmod.playerCells[i].y + legendmod.mapOffsetY;
                        //window.playerCellsSock[i].x = window.legendmod.vector[window.legendmod.vnr][0] ? legendmod.translateX(legendmod.playerCells[i].x) : legendmod.playerCells[i].x //Sonia3
                        //window.playerCellsSock[i].y = window.legendmod.vector[window.legendmod.vnr][1] ? legendmod.translateY(legendmod.playerCells[i].y) : legendmod.playerCells[i].y //Sonia3
                        window.playerCellsSock[i].size = legendmod.playerCells[i].size;
                    }
                }
                if (Socket3 && Socket3.readyState == 1 && application.playerID && window.playerCellsSock) {
                    var temp = {
                        com: "pcells",
                        //tid: application.playerID,
                        tid: window.unescape(window.encodeURIComponent(application.lastSentNick)),
                        playerCells: window.playerCellsSock
                    };
                    Socket3.send(JSON.stringify({
                        //"toH": "legendmod",
                        "toH": $("#server-token").val() + "3",
                        "msg": temp
                    }));
                    //if (temp.playerCells[0]) console.log(temp.playerCells[0].id, temp.playerCells[0].size, temp.playerCells[0].x, temp.playerCells[0].y);
                    //Socket3.send(JSON.stringify({ com: "pcells", tid: application.playerID, playerCells: window.playerCellsSock}));		
                }
            }
        },
        sendSLGQinfo() {
            //return;
            var msg = "";
            var vlen = window.legendmod.viruses.length;
            msg += this.packInt(vlen, 2);
            for (var i = 0; i < vlen; i++) {
                var z = window.legendmod.viruses[i];
                msg += this.packInt(z.id, 4);
                msg += this.packFloat(this.getrel(z.x, 0), 4);
                msg += this.packFloat(this.getrel(z.y, 1), 4);
                msg += this.packInt(~~(z.size), 2);
            }
            var cmsg = "";
            var clen = 0;
            var cells = window.legendmod.cells;
            for (var i = 0; i < cells.length; i++) {
                var z = cells[i];
                if (!z.isVirus) {
                    cmsg += this.packInt(z.id, 4);
                    cmsg += this.packFloat(this.getrel(z.x, 0), 4);
                    cmsg += this.packFloat(this.getrel(z.y, 1), 4);
                    cmsg += this.packInt(~~(z.size), 2);
                    clen++;
                }
            }
            msg += this.packInt(clen, 2);
            msg += cmsg;

            //Here should be food part

            this.sendSLG("Q", msg);

            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
            //console.log("Package Sent:",time)
        },
        getSLGQinfo(t) {
            //return ;
            var ids = this.getSLGID(t);
            var id = this.checkPlayerID(ids);
            console.log(t);
            if (null == id) return;
            var msg = this.getSLGVal(t);
            //Get viruses
            var vlen = this.unpackInt(msg.slice(0, 1));
            msg = msg.slice(1);
            var temp = [];
            for (var i = 0; i < vlen; i++) {
                var di = this.unpackInt(msg.slice(0, 2));
                var fx = this.unpackFloat(msg.slice(2, 4));
                var fy = this.unpackFloat(msg.slice(4, 6));
                var ds = this.unpackInt(msg.slice(6, 7));
                msg = msg.slice(7);
                var x = this.getreal(fx, 0);
                var y = this.getreal(fy, 1);
                var cellUpdateSLGCells = new ogarbasicassembly(di, x, y, ds, null, false, true, false, defaultmapsettings.shortMass, defaultmapsettings.virMassShots);
                cellUpdateSLGCells.time = this.time;
                cellUpdateSLGCells.isVirus = true;
                temp.push(cellUpdateSLGCells);
                if (!cellUpdateSLGCells.isInView()) {
                    if (legendmod.indexedCells.hasOwnProperty(e)) {
                        cellUpdateSLGCells = legendmod.indexedCells[e]
                        //legendmod.cells.push(cellUpdateSLGCells);													 
                    } else {
                        legendmod.indexedCells.push(cellUpdateSLGCells);
                    }
                }
                //cellUpdateSLGCells.removeCell();
            }
            this.teamPlayers[id].dvirs = temp;

            //Get normal cells
            var clen = this.unpackInt(msg.slice(0, 1));
            msg = msg.slice(1);
            var tempx = [];
            var cells = window.legendmod.cells;
            for (var i = 0; i < clen; i++) {
                var di = this.unpackInt(msg.slice(0, 2));
                var fx = this.unpackFloat(msg.slice(2, 4));
                var fy = this.unpackFloat(msg.slice(4, 6));
                var ds = this.unpackInt(msg.slice(6, 7));
                msg = msg.slice(7);
                var x = this.getreal(fx, 0);
                var y = this.getreal(fy, 1);
                var cellUpdateSLGCells = new ogarbasicassembly(di, x, y, ds, null, false, true, false, defaultmapsettings.shortMass, defaultmapsettings.virMassShots);
                cellUpdateSLGCells.isVirus = false;
                temp.push(cellUpdateSLGCells);
                if (!cellUpdateSLGCells.isInView()) {
                    if (legendmod.indexedCells.hasOwnProperty(e)) {
                        cellUpdateSLGCells = legendmod.indexedCells[e]
                        //legendmod.cells.push(cellUpdateSLGCells);													 
                    } else {
                        legendmod.indexedCells.push(cellUpdateSLGCells);
                    }
                }
                //cellUpdateSLGCells.removeCell();
            }
            this.teamPlayers[id].dcells = tempx;
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
            console.log("Package Received:", ids, id, time)

            //Here should be food part
        },
        sendSocket3Position() {
            if (ogario.play && window.noOgarioSocket && Socket3) {
                //if (window.noOgarioSocket && ogarcopythelb.clanTag!="" && ogarcopythelb.nick.includes("℄")) { 					
                //Socket3.send(JSON.stringify({ com: "pos", id: customLMID, x: application.getPlayerX(), y: application.getPlayerY(), mass: legendmod.playerMass}));					
                //}
                var temp = {
                    com: "pos",
                    //id: customLMID,
                    //id: application.playerID,
                    id: window.unescape(window.encodeURIComponent(application.lastSentNick)),
                    x: application.getPlayerX(),
                    y: application.getPlayerY(),
                    mass: legendmod.playerMass
                };
                Socket3.send(JSON.stringify({
                    //"toH": "legendmod",
                    "toH": $("#server-token").val() + "3",
                    "msg": temp
                }));
            }
        },
        //Sonia4
        sendSuperLegendSDATA() {
            if (ogario.play && this.playerID) {
                var s = "";
                s += window.legendmod.bgpi;
                this.sendSLG("R", s);
            }
        },
        sendSimpleLegendSDATA() {
            if (ogario.play && this.playerID) {
                //var t = this.playerID;
                var t = window.unescape(window.encodeURIComponent(application.lastSentNick));
                var s = window.legendmod.bgpi;
                if (this.isSLGSocketOpen()) {
                    if (ogarcopythelb.clanTag != this.roomc) {
                        console.log("Sending failed. Reconnecting required..")
                        //this.SLGconnect(window.legendmod.ws);
                        if (window.SLGsocket) {
                            window.SLGsocket.closeAndOpen();
                        }
                        return;
                    }
                    if (s != null) {
                        temp = {
                            "t": t,
                            "s": s
                        }
                        //console.log("send", temp)
                        SLGsocket.send(JSON.stringify({
                            //"toH": "legendmod2",
                            "toH": $("#server-token").val(),
                            "msg": temp
                        }));
                    }
                }
            }
        },
        //Sonia4
        getSuperLegendSDATA(t) {
            var ids = this.getSLGID(t);
            var id = this.checkPlayerID(ids);
            if (null != id) {
                var s = this.getSLGVal(t);
                var lbgpi = s.slice(0, 1);
                this.teamPlayers[id].lbgpi = parseInt(lbgpi);
                //if (this.top5[id]){
                //this.top5[id].lbgpi = parseInt(lbgpi); //
                //}

            }
        },
        checkPlayerID(id) {
            if (id) {
                for (let length = 0; length < this.teamPlayers.length; length++) {
                    if (this.teamPlayers[length].id == id) {
                        return length;
                    }
                }
            }
            return null;
        },
        checkPlayerNick(nick) {
            if (nick)
                for (var length = 0; length < this.teamPlayers.length; length++)
                    if (this.teamPlayers[length].nick == nick) return length;
            return null;
        },
        checkPlayerChat(message) {
            if (message)
                for (var length = 0; length < this.teamPlayers.length; length++)
                    if (this.teamPlayers[length].id == message) return length;
            return null;
        },
        updateTeamPlayer(message) {
            function encode() {
                var text = "";
                for (;;) {
                    var string = message.getUint16(offset, true);
                    if (0 == string) {
                        break;
                    }
                    text = text + String.fromCharCode(string);
                    offset = offset + 2;
                }
                return offset = offset + 2, text;
            }

            var id = message.getUint32(1, true);
            var offset = 5;
            var nick = encode();
            var skinUrl = this.checkSkinURL(encode());
            var customColor = encode();
            var defaultColor = encode();
            var skinName = ":party" === this.gameMode ? nick + defaultColor : nick;
            var userId = this.checkPlayerID(id);
            if (null !== userId) {
                this.teamPlayers[userId].nick = nick;
                this.teamPlayers[userId].skinID = skinName;
                this.teamPlayers[userId].skinURL = skinUrl;
                this.teamPlayers[userId].setColor(defaultColor, customColor);
            } else {
                const map = new minimapCell(id, nick, skinName, skinUrl);
                map.setColor(defaultColor, customColor);
                this.teamPlayers.push(map);
            }
            this.cacheCustomSkin(nick, defaultColor, skinUrl);
        },
        updateTeamPlayerPosition(message) {
            var e = message.getUint32(1, true),
                i = this.checkPlayerID(e);
            if (null !== i) {
                var s = message.getInt32(5, true),
                    o = message.getInt32(9, true),
                    a = message.getUint32(13, true);
                if (a > 249999) return; //to stop the spammer
                //if (a > 360000) return;
                var n = this.teamPlayers[i];
                n.x = s,
                    n.y = o,
                    n.mass = a,
                    n.alive = true,
                    n.updateTime = Date.now(),
                    this.targeting && this.targetID && e == this.targetID && this.updateTarget(n.nick, n.skinURL, s, o, a, n.color, n.lbgpi);
            }
        },
        //Sonia3 Added 3 fuctions below
        dematrix(mat) {
            return !mat[0] && !mat[1] ? 0 : mat[0] && !mat[1] ? 1 : mat[0] && mat[1] ? 2 : 3;
        },
        setvnr(b) {
            window.legendmod.setrot = 1;
            window.legendmod.rotcnt = 0;
            var mat = window.legendmod.vector[window.legendmod.vnr];
            //window.legendmod.prevvnr = window.legendmod.vnr; //jimboy31001
            if ((b == 0 || b == 3) && (window.legendmod.bgpi == 1 || window.legendmod.bgpi == 2)) mat[0] = !mat[0];
            if ((b == 1 || b == 2) && (window.legendmod.bgpi == 0 || window.legendmod.bgpi == 3)) mat[0] = !mat[0];
            if ((b == 0 || b == 1) && (window.legendmod.bgpi == 2 || window.legendmod.bgpi == 3)) mat[1] = !mat[1];
            if ((b == 2 || b == 3) && (window.legendmod.bgpi == 1 || window.legendmod.bgpi == 0)) mat[1] = !mat[1];
            window.legendmod.vnr = this.dematrix(mat);
        },
        updatevnr() {
            var mm = 0;
            var max = 4;
            for (var i = 0; i < this.teamPlayers.length; i++) {
                var k = this.teamPlayers[i];
                if (k.mass > mm) {
                    if (k.lbgpi <= 3 && k.lbgpi >= 0) {
                        mm = k.mass;
                        max = k.lbgpi;
                    }
                }
            }
            if (window.legendmod.gameMode != ":party" && mm > 0 && (!window.legendmod.play || mm > window.legendmod.playerMass) && max <= 3 && window.legendmod.bgpi <= 3 && !window.legendmod.setrot) {
                console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " VMR UPDATE:", window.legendmod.vnr, mm, window.legendmod.playerMass, max, window.legendmod.bgpi);
                this.setvnr(max);
                console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Map fixed with LM players. POS:', max);
            }
        },
        updateTeamPlayers() {
            this.sendPlayerPosition();
            //this.sendSuperLegendSDATA();
            this.sendSimpleLegendSDATA();

            //this.sendSLGQinfo(),
            application.sendJimboy3100info();
            this.chatUsers = {};
            this.top5 = []; //Sonia3
            this.updatevnr(); //Sonia3
            if (window.legendmod.delstate >= 0) { //Sonia3
                window.legendmod.delstate += 1; //Sonia3
                //if (window.legendmod.delstate > 3) window.legendmod.delstate = -1; //Sonia3
                if (window.legendmod.delstate > 3) window.legendmod.delstate = -1; //Sonia3
            } //Sonia3
            var t = 0;
            for (; t < this.teamPlayers.length; t++) {
                var e = this.teamPlayers[t];
                if (e.alive && Date.now() - e.updateTime >= 2000 || 0 == e.mass) {
                    e.alive = false;
                    if (this.targeting && this.targetID && e.id == this.targetID) {
                        this.setTargetStatus(2);
                    }
                }
                if (e.alive) {
                    this.top5.push({
                        "id": e.id,
                        "nick": e.nick,
                        "x": e.x,
                        "y": e.y,
                        "mass": e.mass,
                        "color": e.color,
                        "skin": e.skinURL,
                        "lbgpi": e.lbgpi
                    });
                    if (!this.isChatUserMuted(e.id)) {
                        this.addChatUser(e.id, e.nick);
                    }
                }
            }
            this.top5.sort(function(row, conf) {
                    return conf.mass - row.mass;
                });
                this.displayTop5();

        },
        updateParties(t) {
            this.parties = [];
            for (var e = t.getUint8(1), i = 2, s = 0; s < e; s++) {
                for (var o = '';;) {
                    var a = t.getUint16(i, true);
                    if (0 == a) break;
                    o += String.fromCharCode(a), i += 2;
                }
                i += 2, this.parties.push(o);
            }
        },
        readChatMessage(t) {
            if (!defaultmapsettings.disableChat) {
                var time = new Date().toTimeString().replace(/^(\d{2}:\d{2}).*/, '$1');
                var caseof = t.getUint8(1); //caseof 101 or 102
                var plId = t.getUint32(2, true);
                var o = t.getUint32(6, true);
                if (!(this.isChatUserMuted(plId) || 0 != o && o != this.playerID && plId != this.playerID)) { //not for those
                    for (var msg = '', n = 10; n < t.byteLength; n += 2) {
                        var r = t.getUint16(n, true);
                        if (0 == r) break;
                        msg += String.fromCharCode(r);
                    }
                    var pattern = /.*s[^a-z]*e[^a-z]*n[^a-z]*p[^a-z]*a.*/i;
                    var pattern2 = /.*m[^a-z]*i[^a-z]*s[^a-z]*t[^a-z]*i.*/i;
                    var pattern3 = "𝕊𝕖𝕟𝕡𝕒.𝕚𝕠";
                    //var pattern = /.*(s).*e.*n.*p.*a.*/i;
                    //var pattern2 = /.*(m).*i.*s.*t.*i.*/i;
                    //var pattern = /.*(s|5).*e.*n.*p.*a.*/i;
                    if (!pattern.test(msg) && !pattern2.test(msg) && !msg.includes(pattern3)) {
                        this.displayChatMessage(time, caseof, plId, msg);
                    } else {
                        //console.log('Blocked: ' + msg)
                    }
                }
            }
        },
        sendChatMessage(type, message) {
            //console.log(type);console.log(message);
            if (!(Date.now() - this.lastMessageSentTime < 500 || 0 == message.length || 0 == ogarcopythelb.nick.length) && this.isSocketOpen()) {
                message = ogarcopythelb.nick + ': ' + message;
                var view = this.createView(10 + 2 * message.length);
                view.setUint8(0, 100),
                    view.setUint8(1, type),
                    view.setUint32(2, this.playerID, true),
                    view.setUint32(6, 0, true);
                for (var length = 0; length < message.length; length++) view.setUint16(10 + 2 * length, message.charCodeAt(length), true);
                this.sendBuffer(view),
                    this.lastMessageSentTime = Date.now();
            }
        },
        prepareCommand(command) {
            return command.replace('%currentSector%', this.currentSector);
        },
        sendCommand(command) {
            var prepareCommand = this.prepareCommand(chatCommand['comm' + command]);
            this.sendChatMessage(102, prepareCommand);
        },
        addChatUser(id, name) {
            this.chatUsers[id] = name;
        },
        getChatUserNick(id) {
            if (this.chatUsers.hasOwnProperty(id)) {
                return this.chatUsers[id];
            }
            return '';
        },
        muteChatUser(id) {
            if (id && !this.isChatUserMuted(id)) {
                var User = this.getChatUserNick(id);
                this.chatMutedUsers[id] = User;
                this.chatMutedUserIDs.push(id);
                toastr.error(textLanguage.userMuted.replace('%user%', '<strong>' + this.escapeHTML(User) + '</strong>') + ' <button data-user-id=\"' + id + '\" class=\"btn btn-xs btn-green btn-unmute-user\">' + textLanguage.unmute + '</button>');
            }
        },
        unmuteChatUser(id) {
            if (id) {
                var User = this.chatMutedUserIDs.indexOf(id);
                if (-1 != User) {
                    this.chatMutedUserIDs.splice(User, 1);
                    toastr.info(textLanguage.userUnmuted.replace("%user%", "<strong>" + this.escapeHTML(this.chatMutedUser[id]) + "</strong>"));
                    delete this.chatMutedUser[id];
                }
            }
        },
        isChatUserMuted(id) {
            if (this.chatMutedUserIDs.indexOf(id) != -1) {
                return true;
            }
            return false;
        },
        parseMessage(string) {
            var isImage = /\[img\](https?:\/\/i\.(?:imgur|hizliresim)\.com\/\w{6,8}\.(?:jpg|jpeg|png|gif)\??\d*)\[\/img\]/i;
            if (isImage.test(string)) return defaultmapsettings.showChatImages ? '<img src=\"' + string.match(isImage)[1].replace('http:', 'https:') + '\" style=\"width:100%;border:none;\">' : '';
            var url = /\[yt\]([\w-]{11})\[\/yt\]/i;
            if (url.test(string)) return defaultmapsettings.showChatVideos ? '<iframe type=\"text/html\" width=\"100%\" height=\"auto\" src=\"https://www.youtube.com/embed/' + string.match(url)[1] + '?autoplay=1&amp;vq=tiny\" frameborder=\"0\" />' : '';
            let escapedHtml = this.escapeHTML(string);
            if (defaultmapsettings.chatEmoticons) {
                escapedHtml = this.parseEmoticons(escapedHtml);
            }
            return escapedHtml;
        },
        parseEmoticons(string) {
            /*return String(string).replace(/\&lt\;3/g, '<3').replace(/(O\:\)|3\:\)|8\=\)|\:\)|\;\)|\=\)|\:D|X\-D|\=D|\:\(|\;\(|\:P|\;P|\:\*|\$\)|\<3|\:o|\(\:\||\:\||\:\\|\:\@|\|\-\)|\^\_\^|\-\_\-|\$\_\$|\(poop\)|\(fuck\)|\(clap\)|\(ok\)|\(victory\)|\(y\)|\(n\))/g, function(string) {
                return '<img src=\"https://legendmod.ml/banners/emoticons/' + d[string] + '\" alt=\"' + string + '\" class=\"emoticon\">';
            });*/
            //return String(string).replace(/\&lt\;3/g, '<3').replace(/℄/g, '℄ Legend Clan').replace(/(O\:\)|3\:\)|8\=\)|\:\)|\;\)|\=\)|\:D|X\-D|\=D|\:\(|\;\(|\:P|\;P|\:\*|\$\)|\<3|\:o|\(\:\||\:\||\:\\|\:\@|\|\-\)|\^\_\^|\-\_\-|\$\_\$|\(poop\)|\(fuck\)|\(clap\)|\(ok\)|\(victory\)|\(y\)|\(n\)|\(angry\)|\(clown\)|\(crazy\)|\(devil\)|\(devil2\)|\(fb\)|\(google\)|\(ghost\)|\(heel\)|\(kiss\)|\(lipstick\)|\(rage\)|\(teacher\)|\(together\)|\(toothy\)|\(evil\)|\(baby\)|\(wow\))/g, function(string) {
            return String(string).replace(/\&lt\;3/g, '<3').replace(/℄/g, '℄ Legend Clan').replace(/(O\:\)|3\:\)|8\=\)|\:\)|\;\)|\=\)|\:D|X\-D|\=D|\:\(|\;\(|\:P|\;P|\:\*|\$\)|\<3|\:o|\(\:\||\:\||\:\\|\:\@|\|\-\)|\^\_\^|\-\_\-|\$\_\$|\(poop\)|\(fuck\)|\(clap\)|\(ok\)|\(victory\)|\(y\)|\(n\)|\(angry\)|\(clown\)|\(crazy\)|\(devil\)|\(devil2\)|\(fb\)|\(google\)|\(ghost\)|\(heel\)|\(kiss\)|\(lipstick\)|\(rage\)|\(teacher\)|\(together\)|\(toothy\)|\(evil\)|\(baby\)|\(wow\))/g, function(string) {
                //console.log(d[string]);
                return '<img src=\"https://legendmod.ml/banners/emoticons/' + emoticonicons[string] + '\" alt=\"' + string + '\" class=\"emoticon\">';
            });

        },
        displayChatMessage(time, caseof, plId, msg) {
            if (0 != msg.length) {
                //console.log(msg);
                var a = msg.split(': ', 1).toString();
                n = this.parseMessage(msg.replace(a + ': ', ''));
                if (!(0 == a.length || a.length > 15 || 0 == n.length)) {
                    var r = '';
                    if (0 != plId && plId != this.playerID && (this.addChatUser(plId, a), r = '<a href=\"#\" data-user-id=\"' + plId + '\" class=\"mute-user ogicon-user-minus\"></a> '), a = this.escapeHTML(a), 101 == caseof) {
                        if (defaultmapsettings.showChatBox) return $('#chat-box').append('<div class=\"message\"><span class=\"message-time\">[' + time + '] </span>' + r + '<span class=\"message-nick\">' + a + ': </span><span class=\"message-text\">' + n + '</span></div>'),
                            $('#chat-box').perfectScrollbar('update'), $('#chat-box').animate({
                                'scrollTop': $('#chat-box').prop('scrollHeight')
                            }, 500), void(defaultmapsettings.chatSounds && this.playSound(this.messageSound));
                        defaultmapsettings.hideChat || (toastr.success('<span class=\"message-nick\">' + a + ': </span><span class=\"message-text\">' + n + '</span>' + r), defaultmapsettings.chatSounds && this.playSound(this.messageSound)), this.chatHistory.push({
                            'nick': a,
                            'message': n
                        }), this.chatHistory.length > 15 && this.chatHistory.shift();
                    } else if (102 == caseof) {
                        if (defaultmapsettings.showChatBox) return $('#chat-box').append('<div class=\"message command\"><span class=\"command-time\">[' + time + '] </span>' + r + '<span class=\"command-nick\">' + a + ': </span><span class=\"command-text\">' + n + '</span></div>'),
                            $('#chat-box').perfectScrollbar('update'), $('#chat-box').animate({
                                'scrollTop': $('#chat-box').prop('scrollHeight')
                            }, 500), void(defaultmapsettings.chatSounds && this.playSound(this.commandSound));
                        defaultmapsettings.hideChat || (toastr.warning('<span class=\"command-nick\">' + a + ': </span><span class=\"command-text\">' + n + '</span>' + r), defaultmapsettings.chatSounds && this.playSound(this.commandSound));
                    } else $('#messages').append(msg);
                }
            }
        },
        displayUserList(users, activeUser, html, isMute, o) {
            var text = '';
            if (Object.keys(users).length) {
                for (var user in text += '<ol class=\"user-list\">', users) users.hasOwnProperty(user) && (text += '<li><strong>' + this.escapeHTML(users[user]) + '</strong> <button data-user-id=\"' + user + '\" class=\"btn btn-xs ' + html + '\">' + isMute + '</button></li>');
                text += '</ol>';
            } else text += textLanguage.none;
            toastr[o](text, activeUser, {
                'closeButton': true,
                'tapToDismiss': false
            });
        },
        displayChatActiveUsers() {
            this.displayUserList(this.chatUsers, textLanguage.activeUsers, 'btn-red btn-mute-user', textLanguage.mute, 'info');
        },
        displayChatMutedUsers() {
            this.displayUserList(this.chatMutedUsers, textLanguage.mutedUsers, 'btn-green btn-unmute-user', textLanguage.unmute, 'error');
        },
        preloadChatSounds() {
            this.setMessageSound();
            this.setCommandSound();
            this.setvirusSound();
        },
        setChatSoundsBtn() {
            if (defaultmapsettings.chatSounds) {
                $('.chat-sound-notifications').removeClass('ogicon-volume-mute2').addClass('ogicon-volume-high');
            } else {
                $('.chat-sound-notifications').removeClass('ogicon-volume-high').addClass('ogicon-volume-mute2');
            }
        },
        setMessageSound() {
            this.messageSound = this.setSound(defaultmapsettings.messageSound);
        },
        setCommandSound() {
            this.commandSound = this.setSound(defaultmapsettings.commandSound);
        },
        setvirusSound() {
            this.virusSoundurl = this.setSound(defaultmapsettings.virusSoundurl);
        },
        setSound(audio) {
            if (!audio) {
                return null;
            }
            return new Audio(audio);
        },
        /*            playSound(audio) {
                        //audio && audio.play && (audio.pause(), audio.currentTime = 0, audio.play());
                        //audio && audio.play && audio.play!==null && (audio.pause(), audio.currentTime = 0, audio.play());
                        audio.pause();
                        audio.currentTime = 0;
                        var nopromise = {
                            catch: new Function()
                        };
                        (audio.play() || nopromise).catch(function() {});
                    },
        */
        playSound(audio) {
            if (audio && audio.play) {
                audio.pause();
                audio.currentTime = 0;
                //audio.play();
                var nopromise = {
                    catch: new Function()
                };
                (audio.play() || nopromise).catch(function() {});
            }
        },
        setFBIDs() {
            this.FacebookIDs = defaultmapsettings.FacebookIDs;
            return this.FacebookIDs;
        },
        setDebug() {
            if (defaultmapsettings.debug) {
                defaultmapsettings.debug = false
            } else {
                defaultmapsettings.debug = true
            }
        },
        setFullSpectator() {
            if (window.fullSpectator) {
                window.fullSpectator = false
                LM.flushSpecsData()
            } else {
                window.fullSpectator = true
                LM.addSpect()
            }
        },
        setIngameSpectator() {
            if (window.ingameSpectator) {
                window.ingameSpectator = false
                LM.flushSpecsData()
            } else {
                window.ingameSpectator = true
                LM.addSpect()
            }
        },
        setTargeting() {
            if (this.targetID) {
                this.targeting = !this.targeting;
                ogario.targeting = this.targeting;
                this.setTargetingInfo();
            }
        },
        setTargetingInfo() {
            if (this.targeting) {
                $('#set-targeting').addClass('active');
                $('#target-status').show();
                if (this.targetStatus != 2) {
                    $('#target-summary').show();
                }
            } else {
                $('#set-targeting').removeClass('active');
                $('#target-summary, #target-status').hide();
            }
        },
        cancelTargeting() {
            this.setTargetStatus(0);
        },
        setPrivateMiniMap() {
            if (!this.targetID) {
                return;
            }
            this.privateMiniMap = !this.privateMiniMap;
            if (this.privateMiniMap) {
                $('#set-private-minimap').addClass('active');
            } else {
                $('#set-private-minimap').removeClass('active');
            }
        },
        setTarget(id) {
            const userId = this.checkPlayerID(id);
            if (userId !== null) {
                const teamPlayer = this.teamPlayers[userId];
                this.targetID = teamPlayer.id;
                this.updateTarget(teamPlayer.nick, teamPlayer.skinURL, teamPlayer.x, teamPlayer.y, teamPlayer.mass, teamPlayer.color);
                if (!teamPlayer.alive) {
                    this.setTargetStatus(2);
                    return;
                }
                this.setTargetStatus(1);
            } else {
                this.setTargetStatus(0);
            }
        },
        setTargetStatus(type) {
            switch (type) {
                case 0:
                    this.targetStatus = 0;
                    this.targetID = 0;
                    this.targetNick = '';
                    this.targetSkinURL = '';
                    this.targeting = false;
                    ogario.targeting = false;
                    this.privateMiniMap = false;
                    $('#target-skin, #target-nick, #target-summary').hide();
                    $("#target-hud").hide();
                    $('#target-status').show().text(textLanguage.targetNotSet);
                    $('#target-panel-hud a').removeClass('active'); //$('#target-status').show().text('[' + textLanguage.targetNotSet + ']'), $('#target-panel-hud a').removeClass('active');
                    break;
                case 1:
                    this.targetStatus = 1;
                    if (!this.targeting) {
                        this.targeting = true;
                        ogario.targeting = true;
                        $("#target-hud").show();
                        this.setTargetingInfo();
                    }
                    $('#target-skin, #target-nick, #target-status, #target-summary').show();
                    break;
                case 2:
                    //this.targetStatus = 2, $('#target-summary').hide(), $("#target-hud").show(), $('#target-status').show().text('[' + textLanguage.targetDead + ']'), i.resetTargetPosition();
                    this.targetStatus = 2;
                    $('#target-summary').hide();
                    $("#target-hud").show();
                    $('#target-status').show().text('[' + Languageletter369 + ']');
                    ogario.resetTargetPosition();
            }
        },
        changeTarget() {
            var targetId = this.checkPlayerID(this.targetID);
            for (target = null, length = 0; length < this.teamPlayers.length; length++)
                if (this.teamPlayers[length].alive) {
                    if (null === targetId) {
                        targetId = length;
                        break;
                    }
                    if (length < targetId && null === target) target = length;
                    else if (length > targetId) {
                        target = length;
                        break;
                    }
                }
            if (target !== null) {
                targetId = target;
            }
            if (targetId !== null) {
                this.setTarget(this.teamPlayers[targetId].id);
            } else {
                this.setTargetStatus(0);
            }
        },
        updateTarget(nick, skinUrl, x, y, mass, color, f) {
            ogario.setTargetPosition(x, y);
            if (this.targetNick !== nick) {
                this.targetNick = nick;
                $('#target-nick').html(this.escapeHTML(nick))
            }
            $('#target-skin').css('background-color', color);
            if (skinUrl) {
                if (this.targetSkinURL !== skinUrl) {
                    if (this.customSkinsCache.hasOwnProperty(skinUrl + '_cached')) {
                        $('#target-skin img').attr('src', skinUrl);
                        this.targetSkinURL = skinUrl;
                    } else {
                        $('#target-skin img').attr('src', 'https://legendmod.ml/banners/static/img/blank.png')
                    }

                }
            }
            $('#target-status').text('[' + this.shortMassFormat(mass) + ']');
            //var l = this.calculateMapSector(x, y);
            var text;
            //html = textLanguage.targetDistance + ': <span class=\"hud-main-color\">' + i.targetDistance + ' [' + l + ']</span>';
            var flag = false;
            for (var j = 0; j < legendmod.ghostCells.length; j++) {
                if (legendmod.leaderboard[j] && this.targetNick == legendmod.leaderboard[j].nick) {

                    if (flag == false) {
                        text = application.calculateMapSector(window.predictedGhostCells[j].x + legendmod.mapOffsetX, window.predictedGhostCells[j].y + legendmod.mapOffsetY)
                        flag = true;
                    }
                }
            };
            if (flag == false && f >= 0) {
                text = this.calculateMapSector(x, y);
            } else if (flag == false && (this.calculateMapSector(x, y) == "C3" || legendmod.gameMode == ":party")) {
                text = this.calculateMapSector(x, y);
            } else if (flag == false) {
                text = "Unknown";
            };
            html = Languageletter368 + ': <span class=\"hud-main-color\">' + ogario.targetDistance + ' [' + text + ']</span>';
            if (ogario.play) {
                html += ' | ' + textLanguage.targetMass + ': <span class=\"hud-main-color\">' + this.shortMassFormat(mass + ogario.playerMass) + '</span>'
            }
            $('#target-summary').html(html);
            if (1 != this.targetStatus) {
                this.setTargetStatus(1);
            }
        },
        updateQuest() {
            if (!this.showQuest || this.gameMode !== ':ffa') {
                return;
            }
            if (window.MC && window.MC.getQuestProgressLabel) {
                this.questHUD.textContent = window.MC.getQuestProgressLabel();
            }
        },
        init() {
            this.loadSettings();
            this.loadProfiles();
            this.setLang();
            this.setMenu();
            this.setUI();
            if (Settings) {
                Settings.setTheme();
            }
            this.setShowQuickMenu();
            this.setShowSkinsPanel();
            this.setProfile();
            this.setMainButtons();
            this.setStreamMode();
            this.setHideSkinUrl();
            this.setMiniMap();
            this.setAutoResp();
            this.setDisableChat();
            this.setShowChatBox();
            this.setTop5();
            this.setTargetingHUD();
            this.setQuest();
            this.displayTime();
            this.setCenteredLb();
            //this.setNormalLb();
            this.setFpsAtTop();
            this.setTweenMaxEffect();
            this.displayStats();
            this.setBlockPopups();
            this.preloadChatSounds();
            this.setChatSoundsBtn();
            this.setFBIDs();
            var app = this;
            setInterval(function() {
                    app.drawMiniMap();
                }, 33),
                setInterval(function() {
                    app.updateTeamPlayers();
                    application.sendSocket3Position();
                }, this.updateInterval);
        }
    };

    function irenderfromagario() {
        this.txt = '',
            this.txtCanvas = null,
            this.txtCtx = null,
            this.color = '#FFFFFF',
            this.stroke = false,
            this.strokeWidth = 2,
            this.strokeColor = '#000000',
            this.font = '700 16px Ubuntu',
            this.fontFamily = 'Ubuntu',
            this.fontWeight = 700,
            this.fontSize = 16,
            this.margin = 3,
            this.scale = 1,
            this.quality = 1,
            this.measuredWidth = 0,
            this.redraw = false,
            this.remeasure = false,
            this.setTxt = function(ogariosettxtsetter) {
                if (this.txt !== ogariosettxtsetter) {
                    this.txt = ogariosettxtsetter;
                    this.redraw = true;
                    this.remeasure = true;
                }
            },
            this.setColor = function(ogariocolorsetter) {
                this.color !== ogariocolorsetter && (this.color = ogariocolorsetter,
                    this.redraw = true);
            },
            this.setStroke = function(ogariostrokesetter) {
                this.stroke !== ogariostrokesetter && (this.stroke = ogariostrokesetter,
                    this.redraw = true);
            },
            this.setStrokeWidth = function(ogariostrokewidthsetter) {
                this.stroke && this.strokeWidth != ogariostrokewidthsetter && (this.strokeWidth = ogariostrokewidthsetter,
                    this.redraw = true,
                    this.remeasure = true);
            },
            this.setStrokeColor = function(ogariostrokecolorsetter) {
                this.stroke && this.strokeColor !== ogariostrokecolorsetter && (this.strokeColor = ogariostrokecolorsetter,
                    this.redraw = true);
            },
            this.setFont = function() {
                this.font = this.fontWeight + ' ' + this.fontSize + 'px ' + this.fontFamily;
            },
            this.setFontFamily = function(ogariofontfamilysetter) {
                if (this.fontFamily !== ogariofontfamilysetter) {
                    this.fontFamily = ogariofontfamilysetter;
                    this.setFont();
                    this.redraw = true;
                    this.remeasure = true;
                }
            },
            this.setFontWeight = function(ogariofontweightsetter) {
                if (this.fontWeight != ogariofontweightsetter) {
                    this.fontWeight = ogariofontweightsetter;
                    this.setFont();
                    this.redraw = true;
                    this.remeasure = true;
                }
            },
            this.setFontSize = function(ogariofontsizesetter) {
                if (this.fontSize != ogariofontsizesetter) {
                    this.fontSize = ogariofontsizesetter;
                    this.margin = ~~(0.2 * ogariofontsizesetter);
                    this.setFont();
                    this.redraw = true;
                }
            },
            this.setScale = function(ogarioscalesetter) {
                if (this.scale != ogarioscalesetter) {
                    this.scale = ogarioscalesetter;
                    this.redraw = true;
                }
            },
            this.createCanvas = function() {
                this.txtCanvas || (this.txtCanvas = document.createElement('canvas'),
                    this.txtCtx = this.txtCanvas.getContext('2d'),
                    this.txtCtx.ogarioCtx = true);
            },
            this.setDrawing = function(ogarsetDrawinglabel1, ogarsetDrawinglabel2, ogarsetDrawinglabel3, ogarsetDrawinglabel4, ogarsetDrawinglabel5, ogarsetDrawinglabel6) {
                this.setColor(ogarsetDrawinglabel1);
                this.setFontFamily(ogarsetDrawinglabel2);
                this.setFontWeight(ogarsetDrawinglabel3);
                this.setStroke(ogarsetDrawinglabel4);
                this.setStrokeWidth(ogarsetDrawinglabel5);
                this.setStrokeColor(ogarsetDrawinglabel6);
            },
            this.measureWidth = function() {
                return this.remeasure && (this.txtCtx.font = this.fontWeight + ' 10px ' + this.fontFamily,
                        this.measuredWidth = this.txtCtx.measureText(this.txt).width,
                        this.remeasure = false),
                    ~~(this.fontSize / 10 * this.measuredWidth) + 2 * this.strokeWidth;
            },
            //
            this.measureWidthCustom = function(customTxt) {
                return customTxt && this.remeasure && (this.txtCtx.font = this.fontWeight + ' 10px ' + this.fontFamily,
                        this.measuredWidth = this.txtCtx.measureText(customTxt).width,
                        this.remeasure = false),
                    ~~(this.fontSize / 10 * this.measuredWidth) + 2 * this.strokeWidth;
            },
            //
            this.drawTxt = function(customTxt) {
                return this.createCanvas(),
                    this.redraw && (this.redraw = false,


                        this.txtCanvas.width = this.measureWidthCustom(customTxt),
                        this.txtCanvas.width = this.measureWidth(),
                        this.txtCanvas.height = this.fontSize + this.margin * 2,
                        this.txtCtx.font = this.font,
                        this.txtCtx.globalAlpha = 1,
                        this.txtCtx.lineWidth = this.strokeWidth,
                        this.txtCtx.strokeStyle = this.strokeColor,
                        this.txtCtx.fillStyle = this.color,
                        customTxt && this.stroke && this.txtCtx.strokeText(customTxt, this.strokeWidth, ~~(this.fontSize - this.margin * 0.5)),
                        !customTxt && this.stroke && this.txtCtx.strokeText(this.txt, this.strokeWidth, ~~(this.fontSize + this.margin * 0.5)),
                        customTxt && this.txtCtx.fillText(customTxt, this.strokeWidth, ~~(this.fontSize - this.margin * 0.5)),
                        !customTxt && this.txtCtx.fillText(this.txt, this.strokeWidth, ~~(this.fontSize + this.margin * 0.5))),
                    this.txtCanvas;
            };
    }
    //window.application = application;

    function ogarbasicassembly(id, e, s, size, color, isFood, isVirus, isPlayer, shortMass, virusMassShots) {
        //lylko
        this.points = []
        this.pointsVel = []
        this.maxPointRad = 0


        this.oldAlpha = 0;
        this.id = id;
        this.x = e;
        this.y = s;
        this.targetX = e;
        this.targetY = s;
        this.color = color;
        this.oppColor = null;
        this.size = size;
        this.targetSize = size;
        this.alpha = 1;
        this.nick = '';
        this.targetNick = '';
        this.nickCanvas = null;
        this.mass = 0;
        this.lastMass = 0;
        //			this.historyMass = [];
        //			this.historyX = [];
        //			this.historyY = [];
        this.kMass = 0;
        this.massCanvas = null;
        this.mergeCanvas = null;
        this.massTxt = '';
        this.margin = 0;
        this.scale = 1;
        this.nickScale = 1;
        this.massScale = 1;
        this.virMassScale = 3;
        this.strokeScale = 1;
        this.fontSize = 26;
        this.nickSize = 26;
        this.lastNickSize = 0;
        this.massSize = 26;
        this.virMassSize = 26;
        this.nickStrokeSize = 3;
        this.massStrokeSize = 3;
        this.isFood = isFood;
        this.isVirus = isVirus;
        this.isPlayerCell = isPlayer;
        this.shortMass = shortMass;
        this.virMassShots = virusMassShots;
        this.rescale = false;
        this.redrawNick = true;
        this.redrawMass = true;
        this.redrawMerge = true;
        this.optimizedNames = false;
        this.optimizedMass = false;
        this.strokeNick = false;
        this.strokeMass = false;
        this.removed = false;
        this.redrawed = 0;
        this.time = 0;
        this.skin = null;
        this.pi2 = 2 * Math.PI;
        this.virusColor = null;
        this.virusStroke = null;
        this.nHeight = 6;

        this.updateNumPoints = function() {
            //adjustment of the number of contacts
            var numPoints = this.size * drawRender.scale | 0;
            numPoints = Math.max(numPoints, 5);
            numPoints = Math.min(numPoints, 120);
            if (this.isVirus) numPoints = 100;
            while (this.points.length > numPoints) {
                var i = Math.random() * this.points.length | 0;
                this.points.splice(i, 1);
                this.pointsVel.splice(i, 1);
            }
            if (this.points.length == 0 && numPoints != 0) {
                this.points.push({
                    x: this.x,
                    y: this.y,
                    rl: this.size,
                    parent: this //?
                });
                this.pointsVel.push(Math.random() - 0.5);
            }
            while (this.points.length < numPoints) {
                var i = Math.random() * this.points.length | 0;
                var point = this.points[i];
                var vel = this.pointsVel[i];
                this.points.splice(i, 0, {
                    x: point.x,
                    y: point.y,
                    rl: point.rl,
                    parent: this
                });
                this.pointsVel.splice(i, 0, vel);
            }
        }
        this.sqDist = function(a, b) {
            return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
        }
        this.movePoints = function() {
            //console.log(this.id)
            var pointsVel = this.pointsVel.slice();
            var len = this.points.length;
            for (var i = 0; i < len; ++i) {
                var prevVel = pointsVel[(i - 1 + len) % len];
                var nextVel = pointsVel[(i + 1) % len];
                var newVel = (this.pointsVel[i] + Math.random() - 0.5) * 0.7;
                newVel = Math.max(Math.min(newVel, 10), -10);
                this.pointsVel[i] = (prevVel + nextVel + 8 * newVel) / 10;
            }
            this.maxPointRad = 0
            for (var i = 0; i < len; ++i) {
                var curP = this.points[i];
                var curRl = curP.rl;
                var prevRl = this.points[(i - 1 + len) % len].rl;
                var nextRl = this.points[(i + 1) % len].rl;
                var self = this;
                var affected = LM.quadtree.some({
                    x: curP.x - 5,
                    y: curP.y - 5,
                    w: 10,
                    h: 10
                }, function(item) {
                    return item.parent != self && this.sqDist(item, curP) <= 25;
                }.bind(this));

                //this.viewMinX, this.viewMinY, this.viewMaxX, this.viewMaxY

                //(curP.x < LM.mapMinX || curP.y < LM.mapMaxY ||
                //curP.x > LM.mapMaxX || curP.y > LM.mapMinY))


                //(curP.x < LM.viewMinX || curP.y < LM.viewMaxY ||
                //curP.x > LM.viewMaxX || curP.y > LM.viewMinY))

                /*if (!affected &&
                    (curP.x < LM.mapMinX || curP.y < LM.mapMaxY ||
                    curP.x > LM.mapMaxX || curP.y > LM.mapMinY))
                {
                    affected = true;
                }*/
                if (affected) {
                    //console.log('affected!!!!!')
                    this.pointsVel[i] = Math.min(this.pointsVel[i], 0);
                    this.pointsVel[i] -= 1;
                }
                curRl += this.pointsVel[i];
                curRl = Math.max(curRl, 0);

                curRl = (9 * curRl + this.size) / 10; //собака

                curP.rl = (prevRl + this.size + 8 * curRl) / 10; //собака

                //curP.rl = (prevRl + nextRl + 8 * curRl) / 10;

                var angle = 2 * Math.PI * i / len;
                var rl = curP.rl;
                if (rl > this.maxPointRad) this.maxPointRad = rl
                if (this.isVirus && i % 2 == 0) {
                    rl += 5;
                }

                curP.x = this.x + Math.cos(angle) * rl;
                curP.y = this.y + Math.sin(angle) * rl;
            }
        };

        this.update = function(x, y, mass, isVirus, isPlayer, nick) {
            this.x = x;
            this.y = y;
            this.isVirus = isVirus;
            this.isPlayerCell = isPlayer;
            this.setMass(mass);
            this.setNick(nick);
        };
        this.removeCell = function() {
            this.removed = true;
            var cells = LM.cells.indexOf(this);
            if (cells != -1) {
                LM.cells.splice(cells, 1);
                if (defaultmapsettings.virusesRange) {
                    cells = LM.viruses.indexOf(this);
                    if (cells != -1) {
                        LM.viruses.splice(cells, 1);
                    }
                }
            } else {
                cells = LM.food.indexOf(this);
                if (cells != -1) {
                    LM.food.splice(cells, 1);
                }
            }
            cells = LM.playerCells.indexOf(this);
            if (cells != -1) {
                LM.removePlayerCell = true;
                LM.playerCells.splice(cells, 1);
                cells = LM.playerCellIDs.indexOf(this.id);
                if (cells != -1) {
                    LM.playerCellIDs.splice(cells, 1);
                }
            }
            if (this.redrawed) {
                LM.removedCells.push(this);
            }
            delete LM.indexedCells[this.id];
        };
        this.moveCell = function() {
            var time = LM.time - this.time;
            var delay = time / defaultmapsettings.animation;
            if (delay < 0) {
                delay = 0
            } else if (delay > 1) {
                delay = 1
            }
            //delay = delay < 0 ? 0 : delay > 1 ? 1 : delay;
            this.x += (this.targetX - this.x) * delay;
            this.y += (this.targetY - this.y) * delay;
            this.size += (this.targetSize - this.size) * delay;
            this.alpha = delay;
            if (!this.removed) {
                this.time = LM.time;
                return;
            }
            if (delay == 1) {
                var removedCells = LM.removedCells.indexOf(this);
                if (removedCells != -1) {
                    LM.removedCells.splice(removedCells, 1);
                }
            }
        };
        this.isInView = function() {
            return !(this.id <= 0) && !(this.x + this.size + 40 < LM.viewX - LM.canvasWidth / 2 / LM.scale || this.y + this.size + 40 < LM.viewY - LM.canvasHeight / 2 / LM.scale || this.x - this.size - 40 > LM.viewX + LM.canvasWidth / 2 / LM.scale || this.y - this.size - 40 > LM.viewY + LM.canvasHeight / 2 / LM.scale);
        };
        this.isInV = function() {
            if (this.x + this.size < LM.camMinX || this.y + this.size < LM.camMinY || this.x - this.size > LM.camMaxX || this.y - this.size > LM.camMaxY) {
                return false;
            }
            return true;
        }
        /*
				this.setMass = function(t) {
                    return this.size = t, !(t <= 40) && (this.massCanvas ? (this.mass = ~~(t * t / 100), this.redrawMass = true, this.isVirus ? (this.virMassShots && this.mass < 200 && (this.mass = ~~((200 - this.mass) / 14)), this.massTxt = this.mass.toString(), this.mass > 220 ? (this.virusColor = defaultSettings.mVirusColor, this.virusStroke = defaultSettings.mVirusStrokeColor) : (this.virusColor = defaultSettings.virusColor, this.virusStroke = defaultSettings.virusStrokeColor), true) : (this.massTxt = this.mass.toString(), this.mass <= 200 || (this.shortMass && this.mass >= 1000 ? (this.kMass = Math.round(this.mass / 100) / 10, this.massTxt = this.kMass + 'k', true) : (this.optimizedMass && (this.redrawMass = Math.abs((this.mass - this.lastMass) / this.mass) >= 0.02 || this.rescale), true)))) : (this.massCanvas = new irenderfromagario(), false));
                };
				*/
        this.setMass = function(mass) {
            this.size = mass;
            if (mass <= 40) {
                return false;
            }
            if (!this.massCanvas) {
                this.massCanvas = new irenderfromagario();
                return false;
            }
            if (!window.legendmod5.optimizedMass && window.ExternalScripts && !this.mergeCanvas) {
                this.mergeCanvas = new irenderfromagario();
                return false;
            }
            this.mass = ~~(mass * mass / 100);
            this.redrawMass = true;
            if (this.isVirus) {
                if (this.mass <= 200) {
                    this.virusColor = defaultSettings.virusColor, this.virusStroke = defaultSettings.virusStrokeColor;
                } else if (this.mass > 220) {
                    this.virusColor = defaultSettings.mVirusColor, this.virusStroke = defaultSettings.mVirusStrokeColor;
                }
                if (this.virMassShots) {
                    this.mass = ~~((200 - this.mass) / 14);
                }
                if (defaultmapsettings.virusSound && this.lastMass && this.mass < this.lastMass) {
                    void application.playSound(application.virusSoundurl);
                }
                this.massTxt = this.mass.toString();
            }
            this.massTxt = this.mass.toString();

            if (this.shortMass && this.mass >= 1000) {
                this.kMass = Math.round(this.mass / 100) / 10;
                this.massTxt = this.kMass + 'k';
                return true;
            }
            if (this.optimizedMass) {
                this.redrawMass = Math.abs((this.mass - this.lastMass) / this.mass) >= 0.02 || this.rescale;
            }
            return true;
        };

        this.setNick = function(nick) {
            this.nick = nick;
            if (!nick || this.isVirus) {
                return false;
            }
            if (!this.nickCanvas) {
                this.nickCanvas = new irenderfromagario();
                return false;
            }
            return true;
        };
        this.setScale = function(scale, nickScale, massScale, virusScale, strokeScale) {
            var scale = Math.ceil(scale * 10) / 10;
            this.rescale = false;
            if (this.scale != scale) {
                this.scale = scale;
                this.rescale = true;
            }
            this.nickScale = nickScale;
            this.massScale = massScale;
            this.virMassScale = virusScale;
            this.strokeScale = strokeScale;
        };
        this.setFontSize = function() {
            if (this.isVirus) {
                this.massSize = Math.ceil(this.virMassSize * this.scale * this.virMassScale);
                return;
            }
            this.fontSize = Math.max(this.size * 0.3, 26) * this.scale;
            this.nickSize = ~~(this.fontSize * this.nickScale);
            this.massSize = ~~(this.fontSize * 0.5 * this.massScale);
            if (this.optimizedNames) {
                this.redrawNick = Math.abs((this.nickSize - this.lastNickSize) / this.nickSize) >= 0.3 || this.rescale;
                return;
            }
            this.redrawNick = true;
        };
        this.setStrokeSize = function() {
            if (this.strokeNick && !this.isVirus) {
                this.nickStrokeSize = ~~(this.nickSize * 0.1 * this.strokeScale);
            }
            if (this.strokeMass) {
                this.massStrokeSize = ~~(this.massSize * 0.1 * this.strokeScale);
            }
        };
        this.setDrawing = function() {
            this.optimizedNames = defaultmapsettings.optimizedNames;
            this.optimizedMass = defaultmapsettings.optimizedMass;
            this.shortMass = defaultmapsettings.shortMass;
            this.virMassShots = defaultmapsettings.virMassShots;
            this.strokeNick = defaultmapsettings.namesStroke;
            this.strokeMass = defaultmapsettings.massStroke;
        };
        this.setDrawingScale = function() {
            this.setScale(ogario.viewScale, defaultSettings.namesScale, defaultSettings.massScale, defaultSettings.virMassScale, defaultSettings.strokeScale);
            this.setFontSize();
            this.setStrokeSize();
            this.margin = 0;
        };
        this.drawNick = function(ctx) {
            if (!this.nick || !this.nickCanvas || this.isVirus) {
                return;
            }
            var nickCanvas = this.nickCanvas;
            nickCanvas.setDrawing(defaultSettings.namesColor, defaultSettings.namesFontFamily, defaultSettings.namesFontWeight, this.strokeNick, this.nickStrokeSize, defaultSettings.namesStrokeColor);
            nickCanvas.setTxt(this.nick);
            if (this.redrawNick) {
                nickCanvas.setFontSize(this.nickSize);
                this.lastNickSize = this.nickSize;
            }
            nickCanvas.setScale(this.scale);
            var nickImg = nickCanvas.drawTxt();
            var w = ~~(nickImg.width / this.scale);
            var h = ~~(nickImg.height / this.scale);
            this.margin = ~~(h / 2);
            try {
                ctx.drawImage(nickImg, ~~this.x - ~~(w / 2), ~~this.y - this.margin, w, h);
            } catch (e) {}
        };
        this.drawMerge = function(context) {
            if (this.mergeCanvas && !(this.size <= 40)) {
                var mergeCanvas = this.mergeCanvas;
                mergeCanvas.setDrawing(defaultSettings.massColor, defaultSettings.massFontFamily, defaultSettings.massFontWeight, this.strokeMass, this.massStrokeSize, defaultSettings.massStrokeColor);
                mergeCanvas.setFontSize(this.massSize);
                mergeCanvas.setScale(this.scale);

                if (window.ExternalScripts && !defaultmapsettings.optimizedMass && window.playerCellsId && this.isPlayerCell && !this.isVirus) {
                    CellTimerTrigger();
                    if (window.playerCellsId[this.id] == undefined) {
                        window.playerCellsId[this.id] = {};
                        window.playerCellsId[this.id].historyMass = [];
                        window.playerCellsId[this.id].historyX = [];
                        window.playerCellsId[this.id].historyY = [];
                    } else {
                        window.playerCellsId[this.id].historyMass.unshift(this.mass); //i test mass with size to find out the merging time
                        if (window.playerCellsId[this.id].historyMass.length > 500) {
                            window.playerCellsId[this.id].historyMass.pop();
                        }
                        window.playerCellsId[this.id].historyX.unshift(this.x);
                        if (window.playerCellsId[this.id].historyX.length > 500) {
                            window.playerCellsId[this.id].historyX.pop();
                        }
                        window.playerCellsId[this.id].historyY.unshift(this.y);
                        if (window.playerCellsId[this.id].historyY.length > 500) {
                            //this.historyY.pop();
                            window.playerCellsId[this.id].historyY.pop();
                        }
                    }
                    //if (this.mergeTime && this.mergeTime > 0) {
                    if (window.legendmod.playerCells.length > 1 && window.playerCellsId[this.id].mergeTime && window.playerCellsId[this.id].mergeTime > 1) {
                        var customTxt = Math.round(window.playerCellsId[this.id].mergeTime);

                        if (this.redrawMerge) {
                            mergeCanvas.setTxt(customTxt);
                            //this.lastMass = this.mass;
                        }
                        var data = mergeCanvas.drawTxt(customTxt);
                        var width = ~~(data.width / this.scale);
                        //console.log(data.width, this.scale, width, this.x - width / 2);
                        var height = ~~(data.height / this.scale);
                        var textureY = this.margin === 0 ? ~~(this.y + height * 2) : ~~this.y - 4 * this.margin;
                        if (width > 1 && height > 1) {
                            try {
                                context.drawImage(data, ~~(this.x - width / 2), textureY, width, height);
                            } catch (e) {}
                        }

                    }

                }
                ///


                //window.counterCell++;
            }
        };
        this.drawMass = function(context) {
            if (this.massCanvas && !(this.size <= 40)) {
                var massCanvas = this.massCanvas;
                massCanvas.setDrawing(defaultSettings.massColor, defaultSettings.massFontFamily, defaultSettings.massFontWeight, this.strokeMass, this.massStrokeSize, defaultSettings.massStrokeColor);
                //
                if (this.redrawMass) {
                    massCanvas.setTxt(this.massTxt);
                    this.lastMass = this.mass;
                }
                massCanvas.setFontSize(this.massSize);
                massCanvas.setScale(this.scale);

                var data = massCanvas.drawTxt();
                var width = ~~(data.width / this.scale);
                //console.log("m:"+data.width, this.scale, width, this.x - width / 2);
                var height = ~~(data.height / this.scale)
                var textureY = this.margin === 0 ? ~~(this.y - height / 2) : ~~this.y + this.margin;
                if (width > 1 && height > 1) {
                    try {
                        context.drawImage(data, ~~(this.x - width / 2), textureY, width, height);
                    } catch (e) {}
                }
            }
        };
        this.createStrokeVirusPath = function(shadowXpos, shadowYpos, zeroSizeMax, pixelSizeTargetMax = 6) {
            const nAngelsOfVirus = ~~(45 * zeroSizeMax / 98);
            const GROUPSIZE = this.pi2 / nAngelsOfVirus;
            const degreeStep = GROUPSIZE / 2;
            const ctxfx = new Path2D;
            const radiusX = zeroSizeMax - pixelSizeTargetMax;
            const tileHeight = radiusX + this.nHeight;
            const n = this.pi2 + GROUPSIZE;
            for (let i = 0, j = degreeStep; i <= n; j = (i = i + GROUPSIZE) + degreeStep) {
                ctxfx.lineTo(~~(shadowXpos + radiusX * Math.sin(i)), ~~(shadowYpos + radiusX * Math.cos(i)));
                ctxfx.lineTo(~~(shadowXpos + tileHeight * Math.sin(j)), ~~(shadowYpos + tileHeight * Math.cos(j)));
            }
            return ctxfx;
        };
        this.draw = function(style, canCreateDiscussions) {
            if (LM.hideSmallBots && this.size <= 36) {
                return;
            }
            // check this
            //if (this.spectator>0 && this.isInV()||this.invisible==true) {
            //if (this.spectator>0 && this.isInV() || this.invisible==true || this.spectator>0 && this.isInView()) {
            if (this.invisible == true || this.spectator > 0 && this.isInV()) {
                return;
            }
            //					
            style.save();
            this.redrawed++;
            if (canCreateDiscussions) {
                this.moveCell();
            }
            if (this.removed) {
                style.globalAlpha *= 1 - this.alpha;
            }
            var value = style.globalAlpha;
            var s = false;
            var y = this.isFood ? this.size + defaultSettings.foodSize : this.size;
            style.beginPath()


            if (defaultmapsettings.jellyPhisycs && this.points.length) {
                var point = this.points[0];
                style.moveTo(point.x, point.y);
                for (var i = 0; i < this.points.length; ++i) {
                    var point = this.points[i];
                    style.lineTo(point.x, point.y);
                }
            } else if (defaultmapsettings.jellyPhisycs && this.isVirus) {
                style.lineJoin = "miter"
                var pointCount = 120;
                var incremental = this.pi2 / pointCount;
                style.moveTo(this.x, this.y + this.size + 3);
                for (var i = 1; i < pointCount; i++) {
                    var angle = i * incremental;
                    var dist = this.size - 3 + (i % 2 === 0) * 6;
                    style.lineTo(
                        this.x + dist * Math.sin(angle),
                        this.y + dist * Math.cos(angle)
                    )
                }
                style.lineTo(this.x, this.y + this.size + 3);
            } else style.arc(this.x, this.y, y, 0, this.pi2, false);

            style.closePath();



            //if (style.arc(this.x, this.y, y, 0, this.pi2, false), style.closePath(), this.isFood) {
            //    return style.fillStyle = this.color, style.fill(), void style.restore();
            //}


            if (!defaultmapsettings.jellyPhisycs) {
                if (this.isVirus) {
                    //console.log("is not jelly");
                    if (dyinglight1load == "yes") {
                        try {
                            style.drawImage(cimgDyingLightvirus, this.x - 0.8 * this.size, this.y - 0.8 * this.size, 1.6 * this.size, 1.6 * this.size);
                        } catch (e) {}
                    }
                    return defaultmapsettings.transparentViruses && (style.globalAlpha *= defaultSettings.virusAlpha, s = true), defaultmapsettings.virColors && LM.play ? (style.fillStyle = application.setVirusColor(y), style.strokeStyle = application.setVirusStrokeColor(y)) : (style.fillStyle = this.virusColor, style.strokeStyle = this.virusStroke), style.fill(), s && (style.globalAlpha = value, s = false), style.lineWidth = defaultSettings.virusStrokeSize, defaultmapsettings.virusGlow ? (style.shadowBlur = defaultSettings.virusGlowSize, style.shadowColor =
                        defaultSettings.virusGlowColor) : "yeet", style.stroke(this.createStrokeVirusPath(this.x, this.y, this.size - 2, 6)), defaultmapsettings.showMass && (this.setDrawing(), this.setDrawingScale(), defaultmapsettings.virusGlow ? style.shadowBlur = 0 : "yote",
                        this.setMass(this.size), this.drawMass(style), (window.ExternalScripts && !window.legendmod5.optimizedMass && this.drawMerge(style))), void style.restore();
                }
            } else {
                if (this.isVirus) {
                    //console.log("is jelly");
                    if (defaultmapsettings.transparentViruses) {
                        style.globalAlpha *= defaultSettings.virusAlpha;
                        defaultmapsettings.isAlphaChanged = true;
                    }
                    if (defaultmapsettings.virColors && LM.play) {
                        style.fillStyle = application.setVirusColor(y);
                        style.strokeStyle = application.setVirusStrokeColor(y);
                    } else {
                        style.fillStyle = defaultSettings.virusColor;
                        style.strokeStyle = defaultSettings.virusStrokeColor;
                    }
                    style.fill();
                    if (defaultmapsettings.isAlphaChanged) {
                        style.globalAlpha = defaultSettings.cellsAlpha;
                        defaultmapsettings.isAlphaChanged = false;
                    }
                    style.lineWidth = defaultSettings.virusStrokeSize;
                    if (defaultmapsettings.virusGlow) {
                        style.shadowBlur = defaultSettings.virusGlowSize;
                        style.shadowColor = defaultSettings.virusGlowColor;
                    }
                    style.stroke();
                    if (defaultmapsettings.showMass) {
                        this.setDrawing();
                        this.setDrawingScale();
                        this.setMass(this.size);
                        this.drawMass(style);
                        if (window.ExternalScripts && !window.legendmod5.optimizedMass) {
                            this.drawMerge(style);
                        }
                    }
                    style.restore();
                    return;
                }
            }
            if (defaultmapsettings.transparentCells) {
                style.globalAlpha *= defaultSettings.cellsAlpha;
                s = true;
            }
            var color = this.color;
            if (LM.play) {
                if (this.isPlayerCell) {
                    if (defaultmapsettings.myCustomColor) {
                        color = ogarcopythelb.color;
                    }
                } else {
                    //if (defaultmapsettings.oppColors && !defaultmapsettings.oppRings) {
                    if (defaultmapsettings.oppColors && !defaultmapsettings.oppRings && !this.isFood) {
                        color = this.oppColor;
                    }
                }
            }
            if (dyinglight1load != "yes" || this.targetNick.includes("The Dying Light")) {
                style.fillStyle = color;
                style.fill();
            }
            if (s) {
                style.globalAlpha = value;
                s = false;
            }
            /*if (dyinglight1load != "yes"){
                            style.globalAlpha = 1;
                            s = false;
						}*/
            var node = null;
            var node2 = {}; //, node2.src = application.customSkinsMap[this.targetNick]



            //lylko
            if (defaultmapsettings.customSkins && LM.showCustomSkins) {
                node = application.getCustomSkin(this.targetNick, this.color);

                if (node) {
                    if ((defaultmapsettings.transparentSkins || LM.play && defaultmapsettings.oppColors) && !(this.isPlayerCell && !defaultmapsettings.myTransparentSkin) || this.isPlayerCell && defaultmapsettings.myTransparentSkin) {
                        style.globalAlpha *= defaultSettings.skinsAlpha;
                        s = true;
                    }


                    if (defaultmapsettings.jellyPhisycs) {
                        var lineWidth = Math.max(~~(y / 50), 10);
                        style.save();
                        style.clip();
                        this.maxPointRad && (y = this.maxPointRad);
                        try {
                            style.drawImage(node, this.x - y - lineWidth, this.y - y - lineWidth, 2 * y + lineWidth * 2, 2 * y + lineWidth * 2);
                        } catch (e) {}
                        style.globalCompositeOperation = 'luminosity';

                        style.lineWidth = lineWidth
                        style.strokeStyle = color;
                        style.stroke();
                        style.globalCompositeOperation = '';
                        style.restore();

                    } else if (legendmod.gameMode != ":teams") {
                        try {
                            style.drawImage(node, this.x - y, this.y - y, 2 * y, 2 * y); //all skin drawing
                        } catch (e) {}
                    }

                    //special animations
                    //if (legendmod.friends){
                    //if (this.targetNick.includes())

                    //}
					
					var nodeFb = application.customSkinsMap[this.targetNick + "facebookskin"];
					if (defaultmapsettings.FBTracking && nodeFb && application.customSkinsCache[nodeFb + "_cached4"]){
						var temp = nodeFb + "_cached4";
						var nodeFB = application.customSkinsCache[temp];
						//console.log("found fb name: " + this.targetNick + " src: " + temp);
                        try {
							style.drawImage(nodeFB, this.x - 1/2 * y, this.y - y, y, y); 
                        } catch (e) {}						
					}
					
					if (this.targetNick.includes("Hat")){ 		
					//style.drawImage(cimgSpecialSkinEffectsHat3, this.x - 1/4 * y, this.y - 5/4 * y, y/2, y/2); 					
					style.drawImage(cimgSpecialSkinEffectsHat3, this.x - 1/2 * y, this.y - 3/2 * y, y, y); 
					//style.drawImage(cimg7, this.x - 1/2 * y, this.y - 1/2 * y, y, y); //center 1/2 size 
					//style.drawImage(cimgSpecialSkinEffectsHat3, this.x - 1/2 * y, this.y - y, y, y); //top middle 1/2 size 
					}						
					else if (this.targetNick.includes("King")){ 								
					//style.drawImage(cimgSpecialSkinEffectsCrown	, this.x - 1/4 * y, this.y - 5/4 * y, y/2, y/2); 		
					style.drawImage(cimgSpecialSkinEffectsCrown	, this.x - 1/4 * y, this.y - 5.3/4 * y, y/2, y/2); 					
					}			
					if (this.targetNick.includes("Mask")){ 					
					style.drawImage(cimgSpecialSkinEffectsMask, this.x - 1/2 * y, this.y + 1/4 * y, y, y);
					}			
                    if (this.targetNick.includes("The Dying Light")) {
                        try {
                            style.drawImage(cimg5, this.x - 2 * y, this.y - 2 * y, 2 * 2 * y, 2 * 2 * y);
                        } catch (e) {}
                    } 					
					else if (this.targetNick.includes("℄🌀Jimboy3100") || this.targetNick.includes("Z𒅒B -")) {
                        //style.drawImage(cimg2, this.x - y * 2, this.y - 2 * y, 2 * 2 * y, 2 * 2 * y);

                        var today = new Date();
                        try {
                            if (!window.testAnimatCells) {
                                if (!window.testAnimCell) {
                                    var ab = today.getTime() / 1000
                                    if (!window.abam) {
                                        window.abam = ab
                                    }
                                    if (!window.abah) {
                                        window.abah = today.getHours()
                                    }
                                    ab = ab - window.abam;
                                    if (today.getHours() == window.abah && ab < 5) {
                                        style.drawImage(cimg5, this.x - (1.5 + 2 * ab) * y, this.y - (1.5 + 2 * ab) * y, (1.5 + 2 * ab) * 2 * y, (1.5 + 2 * ab) * 2 * y);
                                    } else {
                                        window.testAnimatCells = true;
                                    }
                                }
                            } else {
                                style.drawImage(cimg2, this.x - 2 * y, this.y - 2 * y, 2 * 2 * y, 2 * 2 * y);
                            }
                        } catch (e) {}
					
                    }
                }
            }
            if (s) {
                style.globalAlpha = value;
                s = false;
            }


            if (defaultmapsettings.teammatesInd && !this.isPlayerCell && y <= 800 &&
                window.teammatenicks && this.targetNick != "" &&
                (window.teammatenicks.includes(this.targetNick))) {
                drawRender.drawTeammatesInd(style, this.x, this.y, y)
            }

            if (defaultmapsettings.noNames && !defaultmapsettings.showMass || canCreateDiscussions) {

                //                            y <= 200 && (node || application.checkSkinsMap(this.targetNick, this.color)) && drawRender.drawTeammatesInd(style, this.x, this.y, y), defaultmapsettings.noNames && !defaultmapsettings.showMass || canCreateDiscussions) {

                style.restore();
                return;
            } else {
                if (defaultmapsettings.customSkins && LM.showCustomSkins) {
                    node2.src = application.customSkinsMap[this.targetNick];
                    application.customSkinsMap[this.targetNick];
                    if (node2.src) {
                        if (defaultmapsettings.videoSkins) {
                            if (node2.src.includes(".mp4") || node2.src.includes(".webm") || node2.src.includes(".ogv")) {
                                checkVideos(node2.src, this.targetNick);
                                try {
                                    style.drawImage(window.videoSkinPlayer[node2.src], this.x - 0.7 * y, this.y - 0.7 * y, 1.4 * y, 1.4 * y);
                                } catch (e) {}
                            }
                        }
                    }
                    if (dyinglight1load == "yes" && node == null && this.targetNick.includes("The Dying Light") == false) {
                        try {
                            style.drawImage(cimgDyingLight, this.x - y, this.y - y, 2 * y, 2 * y);
                        } catch (e) {}
                    }

                }
                var recursive = false;
                if (!this.isPlayerCell && (recursive = application.setAutoHideCellInfo(y)) && defaultmapsettings.autoHideNames && defaultmapsettings.autoHideMass) {
                    style.restore();
                } else {
                    this.setDrawing();
                    this.setDrawingScale();
                    style.globalAlpha *= defaultSettings.textAlpha;
                    if (!(defaultmapsettings.noNames || recursive && defaultmapsettings.autoHideNames || this.isPlayerCell && defaultmapsettings.hideMyName || node && defaultmapsettings.hideTeammatesNames)) {
                        if (this.setNick(this.targetNick)) {
                            this.drawNick(style);
                        }
                    }
                    if (!(!defaultmapsettings.showMass || recursive && defaultmapsettings.autoHideMass || this.isPlayerCell && defaultmapsettings.hideMyMass || defaultmapsettings.hideEnemiesMass && !this.isPlayerCell && !this.isVirus)) {
                        if (this.setMass(this.size)) {

                            this.drawMass(style);
                            if (window.ExternalScripts && !window.legendmod5.optimizedMass) {
                                this.drawMerge(style);
                            }
                        }
                    }
                    style.restore();
                }



            }
        };
    }
    window.legendmod1 = ogarbasicassembly;


    if (null !== localStorage.getItem("ogarioProtocolVersion")) {
        //console.log('ProtocolVersion changed to,' + localStorage.getItem("ogarioProtocolVersion"))
        master.protocolVersion = localStorage.getItem("ogarioProtocolVersion");
    }
    var LM = {
        integrity: true,
        quadtree: null,
        updateQuadtree: function(cells) {
            var w = drawRender.canvasWidth / drawRender.scale;
            var h = drawRender.canvasHeight / drawRender.scale;
            var x = (LM.viewX - w / 2);
            var y = (LM.viewY - h / 2);
            this.quadtree = new PointQuadTree(x, y, w, h, 32);
            for (var i = 0; i < cells.length; ++i) {
                var cell = cells[i];
                for (var n = 0; n < cell.points.length; ++n) {
                    this.quadtree.insert(cell.points[n]);
                }
            }
        },
        isFreeSpectate: false,
        isSpectateEnabled: false,
        ws: null,
        socket: null,
        protocolKey: null,
        clientKey: null,
        connectionOpened: false,
        accessTokenSent: false,
        //clientVersion: 30604,
        clientVersion: master.clientVersion,
        protocolVersion: master.protocolVersion,
        //clientVersionString: '3.6.4',
        clientVersionString: master.clientVersionString,
        xsupportprotoversion: master.xsupportprotoversion,
        time: Date.now(),
        serverTime: 0,
        serverTimeDiff: 0,
        //loggedInTime: 0,
        mapSize: 14142,
        mapOffset: 7071,
        mapOffsetX: 0,
        mapOffsetY: 0,
        mapOffsetFixed: false,

        mapMinX: -7071,
        mapMinY: -7071,
        mapMaxX: 7071,
        mapMaxY: 7071,
        viewMinX: 0,
        viewMinY: 0,
        viewMaxX: 0,
        viewMaxY: 0,
        //
        camMaxX: 0,
        camMaxY: 0,
        camMinX: 0,
        camMinY: 0,
        //
        canvasWidth: 0,
        canvasHeight: 0,
        canvasScale: 1,
        indexedCells: {},
        cells: [],
        removedCells: [],
        food: [],
        viruses: [],
        playerCells: [],
        playerCellIDs: [],
        fbOnline: [],
        arrowFB: [{}],
        ghostCells: [],
        playerX: 0,
        playerY: 0,
        playerSize: 0,
        playerMass: 0,
        playerMaxMass: 0,
        playerMinMass: 0,
        playerScore: 0,
        playerSplitCells: 0,
        playerColor: null,
        playerNick: '',
        playerPosition: 0,
        leaderboard: [],
        biggerSTEDCellsCache: [], //Sonia
        biggerSTECellsCache: [],
        biggerCellsCache: [],
        smallerCellsCache: [],
        STECellsCache: [],
        STEDCellsCache: [], //Sonia
        //SSCellsCache: [], 
        STE: 0,
        autoZoom: false,
        zoomValue: 0.1,
        viewX: 0,
        viewY: 0,
        scale: 1,
        viewScale: 1,
        clientX: 0,
        clientY: 0,
        cursorX: 0,
        cursorY: 0,
        targetX: 0,
        targetY: 0,
        targetDistance: 0,
        ////
        cRadius: 10,
        cAngle: 4,
        cAngle1: 0,
        cAngle2: 0,
        cAlpha: 1,
        drawCommander: 0,
        ////
        battleRoyale: {
            state: 0,
            players: 0,
            startTime: 0,
            shrinkTime: 0,
            timeLeft: 0,
            x: 0,
            y: 0,
            radius: 0,
            targetX: 0,
            targetY: 0,
            targetRadius: 0,
            maxRadius: 11313,
            rank: [],
            playerRank: 0,
            joined: false
        },
        play: false,
        pause: false,
        targeting: false,
        removePlayerCell: false,
        showCustomSkins: true,
        showFood: true,
        foodIsHidden: false,
        selectBiggestCell: true,
        hideSmallBots: false,
        pressedKeys: {},
        connect(t) {
            console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Connecting to game server:', t);
            var app = this;
            setTimeout(function() {
                application.Socket3connect(t);
                if (defaultmapsettings.rotateMap &&
                    (!window.fullSpectator &&
                        ($("#nick").val().includes('℄') || $("#nick").val().includes('ঌۣ⚝•') || $("#nick").val().includes('ⒸØⒸᗩⒾ𝓝Ⓔ⫸'))) &&
                    !window.ingameSpectator &&
                    (($("#nick").val().includes('℄') || $("#nick").val().includes('ঌۣ⚝•') || $("#nick").val().includes('ⒸØⒸᗩⒾ𝓝Ⓔ⫸')))) {
                    application.SLGconnect(t);
                }
            }, 100);
            window.legendmod.vnr = 0; //Sonia3
            window.legendmod.bgpi = 4; //Sonia3
            window.legendmod.lbgpi = 4; //Sonia3
            window.legendmod.vector = [
                [0, 0],
                [1, 0],
                [1, 1],
                [0, 1]
            ]; //Sonia3
            window.legendmod.setrot = false; //Sonia3
            window.legendmod.delstate = -1; //Sonia3			
            this.closeConnection();
            this.flushCellsData();
            this.protocolKey = null;
            this.clientKey = null;
            this.accessTokenSent = false;
            this.connectionOpened = false;
            this.mapOffsetFixed = false;
            this.leaderboard = [];
            this.ws = t;
            this.integrity = this.ws.indexOf('agar.io') > -1; // 2020 JIMBOY3100 
            if (window.userBots.startedBots) window.connectionBots.send(new Uint8Array([1]).buffer)
            window.userBots.isAlive = false
            window.userBots.macroFeedInterval = null
            this.socket = new WebSocket(t);
            this.socket.binaryType = 'arraybuffer';
            this.socket.onopen = function() {
                app.onOpen();
            };
            this.socket.onmessage = function(t) {
                app.onMessage(t);
            };
            this.socket.onerror = function(t) {
                app.onError(t);
            };
            this.socket.onclose = function(t) {
                app.onClose(t);
            };
            application.getWS(this.ws);
            application.sendServerJoin();
            application.sendServerData();
            application.displayLeaderboard('');
            application.displayPartyBots();
            if (window.master && window.master.onConnect) {
                window.master.onConnect();
            }
        },
        onOpen() {
            //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Game server socket open');
            this.time = Date.now();
            var view = this.createView(5);
            view.setUint8(0, 254);
            if (!window.gameBots.protocolVersion) window.gameBots.protocolVersion = master.protocolVersion;
            view.setUint32(1, this.protocolVersion, true);
            this.sendMessage(view);
            view = this.createView(5);
            view.setUint8(0, 255);
            if (!window.gameBots.clientVersion) window.gameBots.clientVersion = this.clientVersion
            view.setUint32(1, this.clientVersion, true);
            this.sendMessage(view);
            this.connectionOpened = true;
        },
        onMessage(message) {
            message = new DataView(message.data);
            if (this.protocolKey) {
                message = this.shiftMessage(message, this.protocolKey ^ this.clientVersion);
            }
            this.handleMessage(message);
        },
        onError(t) {
            console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Game server socket error');
            this.flushCellsData();
            if (window.master && window.master.onDisconnect) {
                window.master.onDisconnect();
            }
        },
        onClose(t) {
            console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Game server socket close');
            this.flushCellsData();
            if (window.master && window.master.onDisconnect) {
                window.master.onDisconnect();
            }
        },
        closeConnection() {
            if (this.socket) {
                this.socket.onopen = null;
                this.socket.onmessage = null;
                this.socket.onerror = null;
                this.socket.onclose = null;
                try {
                    this.socket.close();
                } catch (error) {}
                this.socket = null;
                this.ws = null;
            }
        },
        isSocketOpen() {
            return this.socket !== null && this.socket.readyState === this.socket.OPEN;
        },
        createView(t) {
            return new DataView(new ArrayBuffer(t));
        },
        sendBuffer(data) {
            this.socket.send(data.buffer);
        },
        sendMessage(message) {
            if (this.connectionOpened && this.integrity) {
                if (!this.clientKey) {
                    return;
                }
                message = this.shiftMessage(message, this.clientKey);
                this.clientKey = this.shiftKey(this.clientKey);
            }
			//jimboy3100
			//if (window.LMdebug && message[0]=="102") console.log(message)
			if (window.LMdebug && message[0]==102) console.log(message)
            this.sendBuffer(message);
        },
        sendAction(action) {

            if (!this.isSocketOpen()) {
                return;
            }
            const view = this.createView(1);
            view.setUint8(0, action);
            this.sendMessage(view);
        },
        sendSpectate() {
            this.isSpectateEnabled = true;
            this.sendAction(1);
        },
        sendFreeSpectate() {
            this.isFreeSpectate = !this.isFreeSpectate;
            this.sendAction(18);
        },
        sendEject() {
            this.sendPosition();
            this.sendAction(21);
        },
        sendSplit() {
            this.sendPosition();
            this.sendAction(17);

        },
        sendFBIDS(data) { //Yahnych
            var friendsIDs = "";

            var pIDs = application.FacebookIDs.split(',');
            for (let length = 0; length < pIDs.length; length++) {
                if (friendsIDs.length == 0) {
                    friendsIDs += pIDs[length].split(':')[0];
                } else {
                    friendsIDs += "|" + pIDs[length].split(':')[0];
                }
            }
            for (let length = 0; length < data.length; length++) {
                if (friendsIDs.length == 0) {
                    friendsIDs += data[length].id
                } else {
                    friendsIDs += "|" + data[length].id
                }
            }
            friendsIDs = unescape(encodeURIComponent(friendsIDs));
            const view = this.createView(2 + friendsIDs.length);
            view.setUint8(0, 5);
            for (let length = 0; length < friendsIDs.length; length++) {
                view.setUint8(1 + length, friendsIDs.charCodeAt(length));
            }
            view.setUint8(friendsIDs.length + 1, 0);
            this.sendMessage(view);

        },
        sendNick(nick) {

            var self = this
            this.playerNick = nick;

            var sendSpawn = function(token) {
                //var token = grecaptcha.getResponse();
                nick = window.unescape(window.encodeURIComponent(self.playerNick));
                var view = self.createView(1 + nick.length + 1 + token.length + 1);
                var pos = 1
                for (let length = 0; length < nick.length; length++, pos++) view.setUint8(pos, nick.charCodeAt(length))
                pos++
                for (let length = 0; length < token.length; length++, pos++) view.setUint8(pos, token.charCodeAt(length));
                self.sendMessage(view);
            }
            var sendSpawnPrivateServer = function() {
                var token = '0'
                nick = window.unescape(window.encodeURIComponent(self.playerNick));
                var view = self.createView(1 + nick.length + 1 + token.length + 1);
                var pos = 1
                for (let length = 0; length < nick.length; length++, pos++) view.setUint8(pos, nick.charCodeAt(length))
                pos++
                for (let length = 0; length < token.length; length++, pos++) view.setUint8(pos, token.charCodeAt(length));
                self.sendMessage(view);
            }

            if (!LM.integrity) {
                //token = '0';
                sendSpawnPrivateServer()
                return;
            } else if (LM.integrity) {
                window.agarCaptcha.requestCaptchaV3("play", function(token) {
                    sendSpawn(token)
                    //window.core.sendNick(nick, token)
                })
            }
            /*
            if (!grecaptcha.onceLoad || grecaptcha.v2mode) {
                //first time need recaptcha v2
                requestCaptchaV3();
                grecaptcha.onceLoad = true;
                //grecaptcha.reset();
                grecaptcha.execute(0, {
                    'action': 'play'
                }).then(function() {
                    sendSpawn();
					grecaptcha.reset();
                });
            } else {
                //next times need recaptcha v3
                //grecaptcha.reset();
                grecaptcha.execute(0, {
                    'action': 'play'
                }).then(function() {
                    sendSpawn();
					grecaptcha.reset();
                });
            }
*/
            setTimeout(function() {
                if (!window.cookieCaptchaOK && LM.integrity) {
                    legendmod.sendNick2(self.playerNick)
                }
            }, 1800);

        },
        sendTimeOutTokenForBots() {
            //window.sendTimeOutTokenBots=false;
            if (document.getElementById('userStatus').innerText == 'Connected' && window.RequestedTokens > 1) {
                setTimeout(function() {
                    legendmod.sendTimeOutTokenForBots();
                    //console.log('sendTimeOutTokenForBots triggered')
                    if (!window.sendTimeOutTokenBots) {
                        //window.RequestedTokens=1000;
                        //this code is to inform me when a new loop process starts again
                        console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' bots started again')
                        legendmod.sendTokenForBots();
                        if ($('#captchaSpeed').val()) {
                            window.tempol = $('#captchaSpeed').val();
                        } else {
                            window.tempol = 0.5;
                        }
                    }
                }, 10000 + window.tempol * 1000);
            } else {
                //setTimeout(function() {	
                window.sendFirstTimeTokenBots = false
                //}, 100);
            }
        },
        sendSpawn2(temp) {
            var token = temp
            window.botsSpawncodeNum++;
            window.botsSpawncode[window.botsSpawncodeNum] = token;

            if (document.getElementById('userStatus').innerText == 'Connected' && window.RequestedTokens > 1) {
                window.RequestedTokens--;
                $('#captchatokens').html(parseInt($('#captchatokens').html()) + 1);
                //setTimeout(function() {
                legendmod.sendTokenForBots();
                //}, 100);
                //window.sendTimeOutTokenBots	= true;			
            }
            window.connectionBots.send(JSON.stringify({
                "message": "botscode",
                "msg": JSON.stringify(token)
                //"msg": JSON.stringify(window.botsSpawncode[window.botsSpawncodeNum])
            }));
            //self.sendMessage(view);			
        },
        sendTokenForBots() {
            //var self = this
            //this.playerNick = nick;    
            legendmod.botscaptcha = true;
            window.sendTimeOutTokenBots = false;
            if ($('#captchaSpeed').val()) {
                window.tempol = $('#captchaSpeed').val();
            }
            this.integrity && window.agarCaptcha.requestCaptchaV3("play", function(token) {
                //sendSpawn(token)
                setTimeout(function() {
                    legendmod.sendSpawn2(token);
                }, window.tempol * 1000);
                //window.core.sendNick(nick, token)
            })
            /*            if (!grecaptcha.onceLoad || grecaptcha.v2mode) {
                            //first time need recaptcha v2
                            requestCaptchaV3();
                            grecaptcha.onceLoad = true;
                            //grecaptcha.reset();				
                            grecaptcha.execute(0, {
                                'action': 'play'
                            }).then(function() {
            					
            					//window.tempo2 = grecaptcha.getResponse()
            					//setTimeout(function() {
                                //legendmod.sendSpawn2(window.tempo2);
            					//}, window.tempol*1000);
            					
            					grecaptcha.reset();
                            });
                        } else {
                            //next times need recaptcha v3
            				
            				grecaptcha.ready(function() {
            				legendmod.botscaptcha=true;
                            grecaptcha.execute(0, {
                                'action': 'play'
                            }).then(function() {
            					
            					//window.tempo2 = grecaptcha.getResponse()
            					//setTimeout(function() {
                                //legendmod.sendSpawn2(window.tempo2);
            					//}, window.tempol*1000);
            					
                            });
            			})
                        }	
            */
        },
        sendNick2(nick) {
            this.playerNick = nick,
                nick = window.unescape(window.encodeURIComponent(nick));
            window.Bufferdata = nick; //
            var view = this.createView(1 + nick.length);
            view.setUint8(0, 0);
            for (var length = 0; length < nick.length; length++) view.setUint8(length + 1, nick.charCodeAt(length));
            this.sendMessage(view);
        },

        sendPosition(cell, target2, specialcommand) {
            var cursorX, cursorY;
            if (this.isSocketOpen() && this.connectionOpened && (this.clientKey || !legendmod.integrity)) {
                if (specialcommand) {
                    //console.log('hi')
                    //cursorX = window.legendmod.vector[window.legendmod.vnr][0] ? this.translateX(this.cursorX) : this.cursorX; //Sonia3
                    //cursorY=9999;					
                } else if (!window.autoPlay) {
                    cursorX = window.legendmod.vector[window.legendmod.vnr][0] && !window.fullSpectator && !window.ingameSpectator ? this.translateX(this.cursorX) : this.cursorX; //Sonia3
                    cursorY = window.legendmod.vector[window.legendmod.vnr][1] && !window.fullSpectator && !window.ingameSpectator ? this.translateY(this.cursorY) : this.cursorY; //Sonia3
                    if (!this.play && this.targeting || this.pause) {
                        cursorX = this.targetX;
                        cursorY = this.targetY;
                    }
                }
                //autoplay handling
                else if (!specialcommand) {
                    //if (typeof cell != "undefined") { //when used, autoplay not working as expected
                    if (Object.keys(target2).length == 0) {
                        cursorX = window.legendmod.vector[window.legendmod.vnr][0] && !window.fullSpectator && !window.ingameSpectator ? this.translateX(cell.x) : cell.x; //Sonia3
                        cursorY = window.legendmod.vector[window.legendmod.vnr][1] && !window.fullSpectator && !window.ingameSpectator ? this.translateY(cell.y) : cell.y; //Sonia3
                        // var cursorX = cell.x;
                        //var cursorY = cell.y;
                    } else {
                        cursorX = window.legendmod.vector[window.legendmod.vnr][0] && !window.fullSpectator && !window.ingameSpectator ? this.translateX(target2.x) : target2.x; //Sonia3
                        cursorY = window.legendmod.vector[window.legendmod.vnr][1] && !window.fullSpectator && !window.ingameSpectator ? this.translateY(target2.y) : target2.y; //Sonia3
                        //var cursorX = target2.x;
                        //var cursorY = target2.y;
                    }
                    //}
                }
                //

                var view = this.createView(13);
                view.setUint8(0, 16);
                view.setInt32(1, cursorX, true);
                view.setInt32(5, cursorY, true);
                view.setUint32(9, this.protocolKey, true);
                this.sendMessage(view);
            }
            if (window.userBots.startedBots && window.userBots.isAlive) {
                window.userBots.mouseX = this.cursorX - window.userBots.offsetX;
                window.userBots.mouseY = this.cursorY - window.userBots.offsetY;
                window.connectionBots.send(window.buffers.mousePosition(window.userBots.mouseX, window.userBots.mouseY))
            }


        },
        /*            sendAccessToken(t, e, i) {
                        if (!this['accessTokenSent']) {
                            i || (i = 102);
                            for (var s = t.length, o = this.clientVersionString.length, a = [i, 8, 1, 18, s + o + 23, 1, 8, 10, 0x52, s + o + 18, 1, 8, e, 18, o + 8, 8, 5, 18, o], n = 0; n < o; n++) a.push(this.clientVersionString.charCodeAt(n));
                            for (a.push(24, 0, 32, 0, 26, s + 3, 1, 10, s, 1), n = 0; n < s; n++) a.push(t.charCodeAt(n));
                            a = new Uint8Array(a);
                            var r = new DataView(a['buffer']);
                            this.sendMessage(r);
                        }
                    }, */
        sendAccessToken(shapes, options, oW) {
            if (!legendmod.integrity) {
                return
            }
            if (LM.accessTokenSent) {
                return;
            }
            if (!oW) {
                oW = 102;
            }
            var curr = shapes.length;
            var count = this.clientVersionString.length;
            var data = [oW, 8, 1, 18];
            //this.writeUint32(data, curr + count + 23);
            application.writeUint32(data, curr + count + 23);
            data.push(8, 10, 82);
            application.writeUint32(data, curr + count + 18);
            //this.writeUint32(data, curr + count + 18);
            data.push(8, options, 18, count + 8, 8, 5, 18, count);
            var prev = 0;
            for (; prev < count; prev++) {
                data.push(this.clientVersionString.charCodeAt(prev));
            }
            data.push(24, 0, 32, 0, 26);
            application.writeUint32(data, curr + 3);
            //this.writeUint32(data, curr + 3);
            data.push(10);
            application.writeUint32(data, curr);
            //this.writeUint32(data, curr);
            prev = 0;
            for (; prev < curr; prev++) {
                data.push(shapes.charCodeAt(prev));
            }
            data = new Uint8Array(data);
            var raw_basefont = new DataView(data.buffer);
            this.sendMessage(raw_basefont);
        },
        sendFbToken(token) {
            //                console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " Facebook token: " + token);
            this.sendAccessToken(token, 2);
        },
        sendGplusToken(token) {
            //                console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " Google Plus token: " + token);
            //this.sendAccessToken(token, 3);
            this.sendAccessToken(token, 4);
        },
        sendRecaptcha(token) {
            var view = this.createView(2 + token.length);
            view.setUint8(0, 86);
            for (var length = 0; length < token.length; length++) view.setUint8(1 + length, token.charCodeAt(length));
            view.setUint8(token.length + 1, 0);
            this.sendMessage(view);
        },
        setClientVersion(version, string) {

            if (window.disableIntegrity != true) { //
                this.clientVersion = version;
                this.clientVersionString = string;
                console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Versions: client:', version, string, "x-proto:", this.xsupportprotoversion, "protocol:", this.protocolVersion, "config:", "v" + window.getLatestconfigVersion, "configId:", window.getLatestID);
            } //
            else { //
                this.clientVersion = 0;
                this.clientVersionString = string;
                console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Client version:', version, string); //
            } //
        },
        /*
        			generateClientKey(t, e) {
                        if (!t.length || !e.byteLength) return null;
                        for (var i = null, s = 1540483477, o = t.match(/(ws+:\/\/)([^:]*)(:\d+)/)[2], a = o.length + e.byteLength, n = new Uint8Array(a), r = 0; r < o.length; r++) n[r] = o.charCodeAt(r);
                        n.set(e, o.length);
                        for (var l = new DataView(n['buffer']), h = a - 1, c = 4 + (h - 4 & -4) | 0, u = 255 ^ h, d = 0; h > 3;) i = 0 | Math.imul(l.getInt32(d, true), s), u = (0 | Math.imul(i >>> 24 ^ i, s)) ^ (0 | Math.imul(u, s)), h -= 4, d += 4;
                        switch (h) {
                            case 3:
                                u = n[c + 2] << 16 ^ u, u = n[c + 1] << 8 ^ u;
                                break;
                            case 2:
                                u = n[c + 1] << 8 ^ u;
                                break;
                            case 1:
                                break;
                            default:
                                i = u;
                        }
                        return i != u && (i = 0 | Math.imul(n[c] ^ u, s)), i ^= u = i >>> 13, i = 0 | Math.imul(i, s), i ^= u = i >>> 15, console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Generated client key:', i),window.generatedClientKey=i, i;
                    },
                    shiftKey(t) {
                        //if (window.disableIntegrity!=false){ //
                        return t = 0 | Math.imul(t, 1540483477), t = 114296087 ^ (0 | Math.imul(t >>> 24 ^ t, 1540483477)), (t = 0 | Math.imul(t >>> 13 ^ t, 1540483477)) >>> 15 ^ t;
                        //} //
                        //else{ //
                        //return 0; //
                        //} //
                    },
        			*/
        generateClientKey(ip, options) {
            if (!ip.length || !options.byteLength) {
                return null;
            }
            var x = null;
            var suggestedValue = 1540483477;
            var ipCheck = ip.match(/(ws+:\/\/)([^:]*)(:\d+)/)[2];
            var newLength = ipCheck.length + options.byteLength;
            var uint8Arr = new Uint8Array(newLength);
            var value = 0;
            for (; value < ipCheck.length; value++) {
                uint8Arr[value] = ipCheck.charCodeAt(value);
            }
            uint8Arr.set(options, ipCheck.length);
            var dataview = new DataView(uint8Arr.buffer);
            var type = newLength - 1;
            var value = (type - 4 & -4) + 4 | 0;
            var newValue = type ^ 255;
            var offset = 0;
            for (; type > 3;) {
                x = Math.imul(dataview.getInt32(offset, true), suggestedValue) | 0;
                newValue = (Math.imul(x >>> 24 ^ x, suggestedValue) | 0) ^ (Math.imul(newValue, suggestedValue) | 0);
                type = type - 4;
                offset = offset + 4;
            }
            switch (type) {
                case 3:
                    newValue = uint8Arr[value + 2] << 16 ^ newValue;
                    newValue = uint8Arr[value + 1] << 8 ^ newValue;
                    break;
                case 2:
                    newValue = uint8Arr[value + 1] << 8 ^ newValue;
                    break;
                case 1:
                    break;
                default:
                    x = newValue;
                    break;
            }
            if (x != newValue) {
                x = Math.imul(uint8Arr[value] ^ newValue, suggestedValue) | 0;
            }
            newValue = x >>> 13;
            x = newValue ^ x;
            x = Math.imul(x, suggestedValue) | 0;
            newValue = x >>> 15;
            x = newValue ^ x;
            //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Generated client key:', x);
            window.generatedClientKey = x;
            return x;

        },
        "shiftKey": function(key) {
            if (window.disableIntegrity != true) {
                var suggestedValue = 1540483477;
                key = Math.imul(key, suggestedValue) | 0;
                key = (Math.imul(key >>> 24 ^ key, suggestedValue) | 0) ^ 114296087;
                key = Math.imul(key >>> 13 ^ key, suggestedValue) | 0;
                return key >>> 15 ^ key;
            } else {
                return 0;
            }
        },
        "shiftMessage": function(view, key, write) {
            if (window.disableIntegrity != true) {
                var length = 0;
                if (!write) {
                    for (; length < view.byteLength; length++) {
                        view.setUint8(length, view.getUint8(length) ^ key >>> length % 4 * 8 & 255);
                    }
                } else {
                    for (; length < view.length; length++) {
                        view.writeUInt8(view.readUInt8(length) ^ key >>> length % 4 * 8 & 255, length);
                    }
                }
                return view;
            } else {
                return view;
            }
        },
        /*
        shiftMessage(t, e, i) {
            //if (window.disableIntegrity!=false){ //
            if (i)
                for (s = 0; s < t.length; s++) t.writeUInt8(t.readUInt8(s) ^ e >>> s % 4 * 8 & 255, s);
            else
                for (var s = 0; s < t.byteLength; s++) t.setUint8(s, t.getUint8(s) ^ e >>> s % 4 * 8 & 255);
            return t;
            //} //
            //else{ //
            //return t; //
            //} //
        },		*/
        //https://github.com/pierrec/node-lz4/blob/master/lib/binding.js
        pingTimer() {
            if (!this.pingUsed) {
                this.pingUsed = 0;
            }
            if (!this.pingArray) {
                this.pingArray = [];
            }
            if (this.pingTime) {
                this.ping = Date.now() - this.pingTime
            }
            this.pingTime = Date.now();
            this.pingUsed++;
            this.pingArray.push(this.ping);
            if (this.pingUsed == 99) {
                //console.log('standardDeviation - usePopulation', standardDeviation(this.pingArray, true));
                console.log('standardDeviation', this.pingArray.stDev());
                this.pingArray = [];
                this.pingUsed = 0;
            }
        },
        decompressMessage(message) {
            const buffer = window.buffer.Buffer;
            const messageBuffer = new buffer(message.buffer);
            const readMessage = new buffer(messageBuffer.readUInt32LE(1));
            LZ4.decodeBlock(messageBuffer.slice(5), readMessage);
            return readMessage;
            /*
                var buffer = new LMbuffer(message['buffer']);
                var readMessage = new LMbuffer(buffer.readUInt32LE(1));
                return LZ4.decodeBlock(buffer.slice(5), readMessage), readMessage;
				*/
        },
        handleMessage(data) {
            //this.pingTimer();
            var encode = function() {
                for (var text = '';;) {
                    var i = data.getUint8(s++);
                    if (0 == i) break;
                    text += String.fromCharCode(i);
                }
                return text;
            };
            var s = 0;
            var opcode = data.getUint8(s++);
            switch (54 == opcode && (opcode = 53), opcode) {




                case 5: //Yahnych
                    window.testobjectsOpcode5 = data;
                    this.fbOnline = [];

                    for (; s < data.byteLength;) {
                        let user = {};

                        user.id = data.getUint32(s, true);
                        s += 4;
                        user.fbId = window.decodeURIComponent(window.escape(encode()));

						for (i = 0; i <= this.leaderboard.length - 1; i++) {
							if (this.leaderboard[i].id== user.id) {							
							user.nick = this.leaderboard[i].nick	
							}
						}
						if (!application.customSkinsMap[user.nick + "facebookskin"]){
                        application.customSkinsMap[user.nick + "facebookskin"] = `https://graph.facebook.com/${user.fbId}/picture?type=square&width=720&height=720`;
                        application.loadSkin(application.customSkinsCache, `https://graph.facebook.com/${user.fbId}/picture?type=square&width=720&height=720`, "fbSkin");	
						console.log("fb id found", user.id, user.nick, `https://graph.facebook.com/${user.fbId}/picture?type=square&width=720&height=720`);
						}
                        //application.cacheCustomSkin(user.fbId, '#000000', `https://graph.facebook.com/${user.fbId}/picture?type=square&width=720&height=720`);

                        this.fbOnline.push(user);
                    }
                    //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' opcode: ', data.getUint8(0));
                    break;
                case 17:
                    window.testobjectsOpcode17 = data;
                    var x = data.getFloat32(s, true);
                    this.viewX = window.legendmod.vector[window.legendmod.vnr][0] && !window.fullSpectator && !window.ingameSpectator ? this.translateX(x) : x;
                    s += 4;
                    var y = data.getFloat32(s, true);
                    this.viewY = window.legendmod.vector[window.legendmod.vnr][1] && !window.fullSpectator && !window.ingameSpectator ? this.translateY(y) : y;
                    s += 4;
                    this.scale = data.getFloat32(s, true);
                    break;
                case 18:
                    window.testobjectsOpcode18 = data;
                    if (this.protocolKey) {
                        this.protocolKey = this.shiftKey(this.protocolKey);
                    }
                    this.flushCellsData();
                    break;
                case 20:
                    this.flushCellsData();
                    break;
                case 32:
                    window.testobjectsOpcode32 = data;
                    this.playerCellIDs.push(data.getUint32(s, true));
                    if (!this.play) {
                        this.play = true;
                        application.hideMenu();
                        this.playerColor = null;
                        application.onPlayerSpawn();
                        window.userBots.isAlive = true;
                        if (window.userBots.startedBots) window.connectionBots.send(new Uint8Array([5, Number(window.userBots.isAlive)]).buffer);
                    }
                    break;
                case 50:
                    window.testobjectsOpcode50 = data;
                    this.pieChart = [];
                    var a = data.getUint32(s, true);
                    s += 4; //5,12,19
                    //for (var n = 0; n < a; n++) this.pieChart.push(data.getFloat32(s, true)), s += 4;
                    for (var n = 0; n < a; n++) this.pieChart.push(data.getFloat32(s, true)), s += 7;
                    drawRender.drawPieChart();
                    break;
                case 53: //Yahnych
                    window.testobjectsOpcode53 = data;
                    this.leaderboard = [];
                    this.friends = this.fbOnline.length;

                    this.playerPosition = 0;
                    if (data.getUint8(0) == 54) {
                        const pos = data.getUint16(s, true);
                        s += 2;
                        //console.log('Friends:', pos)
                    }
                    for (let position = 0; s < data.byteLength;) {
                        var flags = data.getUint8(s++);
                        let nick = '';
                        let id = 0;
                        let isFriend = false;
                        let isFBFriend = false;
                        position++;
                        if (flags & 2) {
                            nick = window.decodeURIComponent(window.escape(encode()));
                        }
                        if (flags & 4) {
                            id = data.getUint32(s, true);
                            s += 4;
                        }
                        if (flags & 8) {
                            nick = this.playerNick;
                            id = 'isPlayer';
                            this.playerPosition = position;
                        }
                        if (flags & 16) {
                            isFriend = true;
                            this.friends++;
                        }
                        let friend = LM.fbOnline.find(element => {
                            return element.id == id;
                        });
                        friend != undefined ? isFBFriend = friend.fbId : isFBFriend = false;
                        this.leaderboard.push({
                            nick: nick,
                            id: id,
                            isFriend: isFriend,
                            isFBFriend: isFBFriend
                        });
                    }
                    this.handleLeaderboard();
                    break;
                    /*    
                        if (this.leaderboard = [], this.playerPosition = 0, 54 == data.getUint8(0)) {
                            data.getUint16(s, true);
                            s += 2;
                        }
                        for (var r = 0; s < data.byteLength;) {
                            var le = '';
                            var h = 0;
                            var c = false;
                            r++;
                            if (2 & (y = data.getUint8(s++))) {
                                le = window.decodeURIComponent(escape(i()));
                            }
							//console.log(y) 4 or 6
							
                            //if (16 & y) {
                                //c = true;
								//console.log('16+y')
								//var temp = data.getUint32(s, true);
								//console.log(temp)
                            //}							
                            if (4 & y) {
                                h = data.getUint32(s, true);
                                s += 4;
                            }
                            if (8 & y) {
                                le = this.playerNick;
                                h = 'isPlayer';
                                this.playerPosition = r
								
								// for bots
								//if (typeof l === "object") { 
								//console.log(l)
								//l=legendmod.playerNick;
								//} 
								//
                            }

                            this.leaderboard.push({
                                'nick': le,
                                'id': h,
                                'isFriend': c
                            });
                        }
                        this.handleLeaderboard();*/
                case 54:
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' opcode: ', data.getUint8(0));
                    window.testobjectsOpcode54 = data;
                    break;
                case 69:
                    window.testobjectsOpcode65 = data;
                    var u = data.getUint16(s, true);
                    s += 2, this.ghostCells = [];
                    var max = 0; //Sonia3
                    var mmax = 0; //Sonia3
                    for (n = 0; n < u; n++) {
                        var d = data.getInt32(s, true);
                        s += 4;
                        var f = data.getInt32(s, true);
                        s += 4;
                        var m = data.getUint32(s, true);
                        s += 5;
                        var g = ~~Math.sqrt(100 * m);
                        this.ghostCells.push({
                            'x': window.legendmod.vector[window.legendmod.vnr][0] && !window.fullSpectator && !window.ingameSpectator ? this.translateX(d) : d, //Sonia3
                            'y': window.legendmod.vector[window.legendmod.vnr][1] && !window.fullSpectator && !window.ingameSpectator ? this.translateY(f) : f, //Sonia3
                            'size': g,
                            'mass': m,
                            'inView': this.isInView(d, f, g)
                        });
                        if (m > mmax) { //Sonia3
                            mmax = m; //Sonia3
                            max = n; //Sonia3
                        } //Sonia3
                    }
                    //window.legendmod.bgpi = this.calculatebgpi(this.ghostCells[max].x, this.ghostCells[max].y); //Sonia3
                    if (this.ghostCells[0]) {
                        window.legendmod.bgpi = this.calculatebgpi(this.ghostCells[0].x, this.ghostCells[0].y); //Sonia3
                    } else {
                        window.legendmod.bgpi = 4;
                    }
                    break;
                case 85:
                    window.testobjectsOpcode85 = data;
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Captcha requested');
                    //if (window.master && window.master.recaptchaRequested) {
                    if (window.smartbotslimited && legendmod5.autoResp) { //
                        core.connect(legendmod.ws);
                        setTimeout(function() {
                            application.autoResp();
                        }, 2000);
                    } else {
                        window.agarCaptcha.requestCaptcha()
                        //window.master.recaptchaRequested();
                    }
                    //}
                    break;
                case 102:
                    if (data.byteLength < 20) {
                        //this["loggedIn"] = ![];
                        //if (window["logout"]) {
                        //window["logout"]();
                        //}
                    }
                    if (data.buffer.byteLength > 1000) {
                        window.testobjects = data;
                        var sampleBytes = new Uint8Array(window.testobjects.buffer);
                        var enc = new TextDecoder();
                        window.testobjects2 = enc.decode(sampleBytes);
                        try {
                            var temp = window.testobjects2.split('').pop().split('R')[0].replace('', "");
                            if (temp && temp.includes("Uskin_custom")) {
                                //window.UserVanillaSkin = EnvConfig.custom_skins_url + temp.substring(1).charAt(0).toUpperCase() + temp.substring(1).slice(1) + '.png'
                                window.UserVanillaSkin = EnvConfig.custom_skins_url + temp.substring(1) + '.png';
                            } else if (temp) {
                                temp = temp.replace('skin_', "").replace(/\W+/g, "")
                                window.UserVanillaSkin = temp;
                                //window.UserVanillaSkin = "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + temp.charAt(0).toUpperCase() + temp.slice(1) + '.png'
                            }
                            window.agarioUID = window.testobjects2.split('$')[1].substr(0, 36);
                            window.agarioID = window.testobjects2.split('$')[1].split('')[1].split('')[0].replace(/\s/g, "");
                            window.agarioLEVEL = window.testobjects2.split('$')[1].split("(")[0].slice(-1).charCodeAt();
                            setLevelProgressBar();
                            application.findOwnedVanillaSkin();
                            if (!window.callEveryFullHourCoinDig) {
                                window.callEveryFullHourCoinDig = true;
                                callEveryFullHourCoinDigger();
                            }
                        } catch (error) {}
                        window.googlePic = "https" + window.testobjects2.split('https')[1].split('H')[0] + "H";

                        if (window.agarioUID != undefined) {
                            localStorage.setItem("agarioUID", window.agarioUID);
                            localStorage.setItem("agarioID", window.agarioID);
                        } else {
                            window.agarioUID = localStorage.getItem("agarioUID");
                            window.agarioID = localStorage.getItem("agarioID");
                        }
                        if (window.agarioUID && UIDcontroller) {
                            UIDfunction();
                        }
                        if (window.testobjects2.split('"�')[1]) {
                            window.agarioEncodedUID = window.testobjects2.split('"�')[1].split('=')[0] + "%3D";
                        }
                    }



                    const node = new Node(data, s);

                    var key_or_value = node.readFlag();
                    if (key_or_value == 1) {
                        node.setContentType();
                    }
                    key_or_value = node.readFlag();
                    if (key_or_value == 2) {
                        node.setUncompressedSize();
                    }
                    key_or_value = node.readFlag();
                    if (key_or_value == 1) {
                        var option = node.readUint32();
                        var response = node.readFlag();
                        var response_2 = node.readUint32();
                        switch (option) {
                            case 11:
                                console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " 102 Login response", node.contentType, node.uncompressedSize, option, response, response_2);
                                //console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " 102 Login response", window.ret.view.byteLength, window.ret.contentType, window.ret.uncompressedSize, option, response, response_2);
                                break;
                            case 20:
                                if (response == 20){
									toastr.error('<b>[SERVER]:</b> You have been disconnected because your User ID logged in from another place');
								}
                                break;	
                            case 62:
                                //console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " 102 Game over");
                                LegendModDeath();
                                //$('#pause-hud').text("PAUSE!");
                                break;		
                            case 111:
                                console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " 102 Server denied", option, response);
                                break;									
                            default:
                                console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " 102 Unknown", option, response);
                        }
                    }

                    break;
                case 103:
                    window.testobjectsOpcode103 = data;
                    //LM["accessTokenSent"] = !![];
                    this.accessTokenSent = true;
                    if (window.master.context == 'facebook') { //Yahnych
                        this.sendFBIDS(window.master.fbUsers);
                    }
                    break;
                case 104:
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Logout forced');
                    logout();
                    window.testobjectsOpcode104 = data;
                    break;
                case 112:
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' opcode: ', data.getUint8(0));
                    window.testobjectsOpcode112 = data;
                    break;
                case 114:
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' opcode: ', data.getUint8(0));
                    window.testobjectsOpcode114 = data;
                    break;
                case 160: //Yahnych
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' opcode: ', data.getUint8(0));
                    window.testobjectsOpcode160 = data;
                    //this.arrowFB = [];
                    let num = 0
                    let friendX = 0,
                        friendY = 0,
                        friendNick = null;
                    for (; s < data.byteLength;) {
                        num++
                        friendX = data.getUint16(s, true);
                        if (friendX > 32250) {
                            friendX -= 65500;
                        }
                        s += 2;
                        friendY = data.getUint16(s, true);
                        if (friendY > 32250) {
                            friendY -= 65500;
                        }
                        s += 2;
                        if (s < data.byteLength) {
                            friendNick = window.decodeURIComponent(window.escape(encode()));
                        } else {
                            friendNick = "";
                        }
                        //this.arrowFB.push({
                        //    nick: friendNick,
                        //    x: friendX,
                        //    y: friendY
                        //});   
                        console.log(num)
                        this.arrowFB[0].visible = true;
                        this.arrowFB[0].x = friendX;
                        this.arrowFB[0].y = friendY;
                        this.arrowFB[0].nick = friendNick != "" ? friendNick : this.arrowFB[0].nick;
                    }
                    break;
                case 161:
                    //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' opcode: ', data.getUint8(0));
                    window.testobjectsOpcode161 = data;
                    break;
                case 128:
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' opcode: ', data.getUint8(0));
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' client outdated');
                    window.testobjectsOpcode128 = data;
                    break;
                case 176:
                    window.testobjectsOpcode176 = data;
                    this.battleRoyale.startTime = data.getUint32(s, true);
                    break;
                case 177:
                    window.testobjectsOpcode177 = data;
                    this.battleRoyale.joined = true;
                    break;
                case 178:
                    window.testobjectsOpcode178 = data;
                    this.battleRoyale.players = data.getUint16(s, true);
                    //$('#btl-players-count').text(this.battleRoyale.players),
                    s += 2;
                    var y = data.getUint16(s, true);
                    s += 2,
                        y || (this.battleRoyale.state = 0, this.battleRoyale.joined = false),
                        3 & y && (this.battleRoyale.state = data.getUint8(s++),
                            this.battleRoyale.x = data.getInt32(s, true),
                            s += 4,
                            this.battleRoyale.y = data.getInt32(s, true),
                            s += 4,
                            this.battleRoyale.radius = data.getUint32(s, true),
                            s += 4,
                            this.battleRoyale.shrinkTime = 1000 * data.getUint32(s, true),
                            s += 4,
                            this.battleRoyale.shrinkTime &&
                            (this.battleRoyale.timeLeft = ~~((this.battleRoyale.shrinkTime - Date.now() + this.serverTimeDiff) / 1000),
                                this.battleRoyale.timeLeft < 0 && (this.battleRoyale.timeLeft = 0))),
                        2 & y && (this.battleRoyale.targetX = data.getInt32(s, true),
                            s += 4,
                            this.battleRoyale.targetY = data.getInt32(s, true),
                            s += 4,
                            this.battleRoyale.targetRadius = data.getUint32(s, true));
                    this.handleLeaderboard();
                    break;
                case 179:
                    window.testobjectsOpcode179 = data;
                    y = data.getUint8(s);
                    window.decodeURIComponent(escape(encode()));
                    y || window.decodeURIComponent(escape(encode()));
                    break;
                case 180:
                    window.testobjectsOpcode181 = data;
                    this.battleRoyale.joined = false;
                    this.battleRoyale.rank = [];
                    this.battleRoyale.playerRank = data.getUint32(s, true);
                    s += 8;
                    var profiles = data.getUint16(s, true);
                    s += 2;
                    for (n = 0; n < profiles; n++) {
                        var ogarcopythelb = window.decodeURIComponent(escape(encode()));
                        v = data.getUint32(s, true);
                        s += 4;
                        this.battleRoyale.rank.push({
                            //'place': defaultmapsettings,
                            'place': v,
                            'name': ogarcopythelb
                        });
                    }
                    var temp = '<b>[SERVER]:</b> <font color="yellow"><b>Battle Royal Ranks:</b></font>';
                    for (var i = 0; i < legendmod.battleRoyale.rank.length; i++) {
                        temp += '<br>' + legendmod.battleRoyale.rank[i].place + ". " + legendmod.battleRoyale.rank[i].name;
                    }
                    temp += '<br>' + 'Your rank: <font color="yellow"><b>' + legendmod.battleRoyale.playerRank + '</b></font>';
                    toastr.info(temp);
                    break;
                case 226:
                    window.testobjectsOpcode226 = data;
                    var extraOptions = data.getUint16(1, !![]);
                    data = this.createView(3);
                    data.setUint8(0, 227);
                    data.setUint16(1, extraOptions);
                    this.sendMessage(data);
                    break;
                case 241:
                    window.testobjectsOpcode241 = data;
                    this.protocolKey = data.getUint32(s, true);
                    //window.testobjectsOpcode241.getUint32(1, true);
                    //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Received protocol key:', this.protocolKey);
                    window.generatedProtocolKey = this.protocolKey;
                    var irenderfromagario = new Uint8Array(data.buffer, s += 4);
                    this.clientKey = this.generateClientKey(this.ws, irenderfromagario);
                    //legendmod.generateClientKey("wss://live-arena-19y1u3v.agar.io:443",new Uint8Array(window.testobjectsOpcode241['buffer'], 5))
                    if (window.master && window.master.login) {
                        window.master.login();
                    }
                    break;
                case 242:
                    window.testobjectsOpcode242 = data;
                    this.serverTime = 1000 * data.getUint32(s, true);
                    this.serverTimeDiff = Date.now() - this.serverTime;
                    break;
                case 255:
                    window.testobjectsOpcode255 = data;
                    this.handleSubmessage(data);
                    break;

                    //2020 jimboy3100 specific private servers
                case 16:
                    //this.updateCells(new LMbuffer(data['buffer']), s);
                    this.updateCells(new window.buffer.Buffer(data.buffer), s);

                    //this.countPps()
                    break;
                case 64:
                    //var message = new LMbuffer(data['buffer'])						
                    var message = new window.buffer.Buffer(data.buffer)
                    this.viewMinX = message.readDoubleLE(s);
                    s += 8;
                    this.viewMinY = message.readDoubleLE(s);
                    s += 8;
                    this.viewMaxX = message.readDoubleLE(s);
                    s += 8;
                    this.viewMaxY = message.readDoubleLE(s);
                    this.setMapOffset(this.viewMinX, this.viewMinY, this.viewMaxX, this.viewMaxY);

                    if (~~(this.viewMaxX - this.viewMinX) === LM.mapSize && ~~(this.viewMaxY - this.viewMinY) === LM.mapSize) {
                        window.userBots.offsetX = (this.viewMinX + this.viewMaxX) / 2
                        window.userBots.offsetY = (this.viewMinY + this.viewMaxY) / 2
                    }
                    break;
                    //2020 jimboy3100

                default:
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Unknown opcode:', data.getUint8(0));
            }
        },
        handleSubmessage(message) {
            var e = 0;
            switch ((message = this.decompressMessage(message)).readUInt8(e++)) {
                case 16:
                    this.updateCells(message, e);
                    break;
                case 64:
                    this.viewMinX = message.readDoubleLE(e);
                    e += 8;
                    this.viewMinY = message.readDoubleLE(e);
                    e += 8;
                    this.viewMaxX = message.readDoubleLE(e);
                    e += 8;
                    this.viewMaxY = message.readDoubleLE(e);
                    this.setMapOffset(this.viewMinX, this.viewMinY, this.viewMaxX, this.viewMaxY);

                    if (~~(this.viewMaxX - this.viewMinX) === LM.mapSize && ~~(this.viewMaxY - this.viewMinY) === LM.mapSize) {
                        window.userBots.offsetX = (this.viewMinX + this.viewMaxX) / 2;
                        window.userBots.offsetY = (this.viewMinY + this.viewMaxY) / 2;
                    }
                    break;
                default:
                    console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Unknown sub opcode:', message.readUInt8(0));
            }
        },
        handleLeaderboard() {
            /*                for (var t = '', e = '', i = 0; i < this.leaderboard.length && window.leaderboardlimit != i; i++) {
                                var s = '<span>';
                                'isPlayer' === this.leaderboard[i].id ? s = '<span class=\"me\">' : ogarcopythelb.clanTag.length && 0 == this.leaderboard[i].nick.indexOf(ogarcopythelb.clanTag) && (s = '<span class=\"teammate\">'), t += s + (i + 1) + '. ' + application.escapeHTML(this.leaderboard[i].nick) + '</span>';
                            } */
            window.teammatenicks = [];
            window.teammatelegendmodnicks = [];
            if (application.top5) {
                for (i = 0; i < application.top5.length; i++) {
                    window.teammatelegendmodnicks.push(application.top5[i].nick);
                }
            }
            window.teammatenicks = window.teammatelegendmodnicks;
            if (window.agartoolteammatenicks != undefined) {
                window.teammatenicks = window.teammatenicks.concat(window.agartoolteammatenicks);
            }
            let text = '';
            let teamText = '';
            for (length = 0; length < this.leaderboard.length && window.leaderboardlimit != length; length++) {
                var html = '<span>';
                if (this.leaderboard[length].id === 'isPlayer') {
                    html = '<span class=\"me\">';
                } else {
                    if (ogarcopythelb.clanTag.length && 0 != window.teammatenicks.includes(this.leaderboard[length].nick)) {
                        html = '<span class=\"teammate\">';
                    } else if (this.leaderboard[length].isFriend) {
                        html = '<span class=\"teammate\">';
                    }

                }
                teamText += html + (length + 1) + '. ' + application.escapeHTML(this.leaderboard[length].nick) + '</span>';
            }
            if (this.playerPosition > window.leaderboardlimit) {
                teamText += '<span class=\"me\">' + this.playerPosition + '. ' + application.escapeHTML(this.playerNick) + '</span>';
                //defaultmapsettings['showLbData'];
            }
            if (legendmod.gameMode != ":battleroyale") {
                teamText += '<span class="me">' + Premadeletter130 + ': ' + this.leaderboard.length + '</span>';
                if (defaultmapsettings.FBTracking && legendmod.friends && legendmod.friends > 0) {
                    teamText += '<span class="teammate">' + 'Friends' + ': ' + legendmod.friends + '</span>';
                }
                //t += '<span class="teammate">' + 'Friends' + ': ' + legendmod.friends + '</span>';
            } else if (legendmod.gameMode == ":battleroyale") {
                teamText = '<span>';
                if (legendmod.battleRoyale.shrinkTime - Date.now() / 1000 > 0) {
                    teamText += '<span>Shrink time: ' + legendmod.battleRoyale.timeLeft + '</span>';
                }
                teamText += '<span class="me">' + 'Players: ' + legendmod.battleRoyale.players + '</span>';
                teamText += '</span>';
            }
            if (defaultmapsettings.showLbData) {
                for (var l2ngth = 0; l2ngth < this.ghostCells.length && l2ngth < window.leaderboardlimit; l2ngth++) {
                    //
                    var w = this.ghostCells[l2ngth].x;
                    var u = this.ghostCells[l2ngth].y;
                    /*
					w = window.legendmod.vector[window.legendmod.vnr][0] ? legendmod.translateX(this.ghostCells[o].x) : this.ghostCells[o].x; 
                    u = window.legendmod.vector[window.legendmod.vnr][1] ? legendmod.translateY(this.ghostCells[o].y) : this.ghostCells[o].y; 
					*/
                    //
                    text += '<span class=\"lb-data\" id= "' + 'leaderboardtargeting' + l2ngth + '" style="pointer-events: auto;" onclick="window.legendmod.targetingLead(' + l2ngth + ');">';
                    text += '<span class=\"top5-mass-color\">[' + application.shortMassFormat(this.ghostCells[l2ngth].mass) + ']</span>';
                    //e += '<span class=\"hud-main-color\">[' + application.calculateMapSector(this.ghostCells[o].x, this.ghostCells[o].y) + ']</span>', e += '</span>';
                    text += '<span class=\"hud-main-color\">[' + application.calculateMapSector(w + legendmod.mapOffsetX, u + legendmod.mapOffsetY) + ']</span>', text += '</span>';
                }
            }
            application.displayLeaderboard(teamText, text);
            //application['displayPartyBots']();




            ///////////////// establish core.registerSkin
            if (window.vanillaskins == true && window.customskinsname != null && window.customskinsurl != null && application.customSkinsMap[window.customskinsname] == null) {
                for (i = 0; i <= this.leaderboard.length - 1; i++) {
                    if (this.leaderboard[i].nick == window.customskinsname) {
                        application.customSkinsMap[window.customskinsname] = window.customskinsurl;
                        application.loadSkin(application.customSkinsCache, window.customskinsurl, window.customskinanimated);
                        window.customskinsname = null;
                        window.customskinsurl = null;
                        window.customskinanimated = null;
                    }
                }
            }
            //if ($("#ao2t-capture").length && $("#ao2t-capture").hasClass("connected")) { //if existed and connected and visible
            for (var e = 0; e < legendmod.ghostCells.length; e++) {
                window.predictedGhostCells[e] = {};
                window.predictedGhostCells[e] = legendmod.ghostCells[e];
                if (legendmod.leaderboard[e]) {
                    window.predictedGhostCells[e].id = legendmod.leaderboard[e].id;
                    window.predictedGhostCells[e].nick = legendmod.leaderboard[e].nick;
                    window.predictedGhostCells[e].isFriend = legendmod.leaderboard[e].isFriend;
                }
            }

            //}				
        },
        targetingLead(o) {
            window.targetingLeadX = legendmod.ghostCells[o].x;
            window.targetingLeadY = legendmod.ghostCells[o].y;
            legendmod.drawCommander2 = true;
        },
        flushCellsData() {
            this.indexedCells = {};
            this.cells = [];
            this.playerCells = [];
            this.playerCellIDs = [];
            this.ghostCells = [];
            this.food = [];
            this.viruses = [];

            //for SPECT
            //this.ghostCellsStep = 0;
            this.flushSpecsData();
        },
        flushSpecsData() {
            this.isSpectateEnabled = false;
            this.isFreeSpectate = false;
            if (window.spects) {
                window.spects.forEach((spect) => {
                    spect.closeConnection()
                })
                window.spects = [];
            }
        },
        setMapOffset(left, top, right, bottom) {
            //if (right - left > 14000 && bottom - top > 14000) {
            if (!legendmod.integrity || (right - left) > 14000 && (bottom - top) > 14000) { //2020 jimboy3100
                this.mapOffsetX = this.mapOffset - right;
                this.mapOffsetY = this.mapOffset - bottom;
                this.mapMinX = ~~(-this.mapOffset - this.mapOffsetX);
                this.mapMinY = ~~(-this.mapOffset - this.mapOffsetY);
                this.mapMaxX = ~~(this.mapOffset - this.mapOffsetX);
                this.mapMaxY = ~~(this.mapOffset - this.mapOffsetY);
                this.mapMidX = (this.mapMaxX + this.mapMinX) / 2; //Sonia3 -> this.mapMidX = -legendmod.mapOffsetX
                this.mapMidY = (this.mapMaxY + this.mapMinY) / 2; //Sonia3 -> this.mapMidY = -legendmod.mapOffsetY				
                this.mapOffsetFixed || (this.viewX = (right + left) / 2, this.viewY = (bottom + top) / 2);
                this.mapOffsetFixed = true;
                //for SPECT
                this.addSpect();
                //console.log('\x1b[32m%s\x1b[34m%s\x1b[0m', consoleMsgLM, ' Map offset fixed: (', this.mapOffsetX, ',', this.mapOffsetY, ')');
            }
        },
        addSpect() {
            if ($("#nick").val().includes('℄') || $("#nick").val().includes('ঌۣ⚝•') || $("#nick").val().includes('ⒸØⒸᗩⒾ𝓝Ⓔ⫸')) {
                $('#set-debug').show();
                $('#set-fullSpectator').show();
                $('#set-ingameSpectator').show();
                if (window.fullSpectator && spects.length == 0) {
                    if (defaultmapsettings.rotateMap) {
                        toastr.info('<b>[' + Premadeletter123 + ']:</b> ' + "Full Spectator" + " disabled the rotation of Map");
                    }
                    addFullSpectator();
                } else if (window.ingameSpectator && spects.length == 0) {
                    if (defaultmapsettings.rotateMap) {
                        toastr.info('<b>[' + Premadeletter123 + ']:</b> ' + "Ingame Spectator" + " disabled the rotation of Map");
                    }
                    addSpectator();
                }
            } else {
                $('#set-debug').hide();
                $('#set-fullSpectator').hide();
                $('#set-ingameSpectator').hide();
            }
        },
        isInView(x, y, size) {
            var x2s = this.canvasWidth / 2 / this.scale;
            var y2s = this.canvasHeight / 2 / this.scale;
            //console.log("x:" + x + " y:" + y + " i:" + i  + " result:" + !(x + i < this.viewX - s || y + i < this.viewY - o || x - i > this.viewX + s || y - i > this.viewY + o));
            if (x + size < this.viewX - x2s || y + size < this.viewY - y2s || x - size > this.viewX + x2s || y - size > this.viewY + y2s) {
                return false;
            } else {
                return true;
            }
            //return !(x + size < this.viewX - x2s || y + size < this.viewY - y2s || x - size > this.viewX + x2s || y - size > this.viewY + y2s);
        },
        vanillaskins(y, g) {
            if (g != null && application.customSkinsMap[y] == undefined) {
                if (LM.gameMode == ":party") {
                    y = y + "#000000";
                }
                //console.log(g)					
                if (window.FreskinsMap && window.FreskinsMap.includes(y)) {
                    for (var player = 0; player < window.FreeSkins.length; player++) {
                        if (y == window.FreeSkins[player].id) {
                            core.registerSkin(y, null, "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + window.FreeSkins[player].image, null);
                            //console.log("https://configs-web.agario.miniclippt.com/live/" + window.agarversion + window.FreeSkins[player].image)
                        }
                    }
                } else if (g.includes && g.includes("%custom_") && !legendflags.includes(LowerCase(y))) {
                    var g1 = g.replace('%custom_', 'skin_custom_')
                    core.registerSkin(y, null, EnvConfig.custom_skins_url + g1 + ".png", null);
                    //core.registerSkin(y, null, "https://configs.agario.miniclippt.com/live/custom_skins/" + g1 + ".png", null);
                } else if (g.includes && g.includes("_level_") && !legendflags.includes(LowerCase(y))) {
                    var g1 = g.replace('%', '')
                    g1 = g1.replace('_level_1', '').replace('_level_2', '').replace('_level_3', '');
                    g1 = g1.charAt(0).toUpperCase() + g1.slice(1);
                    g1 = makeUpperCaseAfterUnderline(g1);
                    core.registerSkin(y, null, "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + g1 + ".png", null);
                    window.customskinanimated = true;
                } else if (window.vanillaskins == true && window.LMAgarGameConfiguration != undefined) {
                    for (var player = 0; player < window.EquippableSkins.length; player++) {
                        if (window.EquippableSkins[player].productId == "skin_" + g.replace('%', '') && window.EquippableSkins[player].image != "uses_spine") {
                            //console.log("Player: " + y + " Color: " + EquippableSkins[player].cellColor + " Image: " + EquippableSkins[player].image + " SkinId: " + EquippableSkins[player].gameplayId + " Skins type: " + EquippableSkins[player].skinType);                                
                            if (legendflags.includes(LowerCase(y))) {
                                //console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " " + LowerCase(y) + " skin found. Skin registered");
                                core.registerSkin(y, null, "https://legendmod.ml/agario/live/flags/" + LowerCase(y) + ".png", null);
                            } else {
                                window.lastusednameforskin = y;
                                //core.registerSkin(y, null, "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + window.EquippableSkins[player].image, null);
                                application.customSkinsMap[y] = "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + window.EquippableSkins[player].image;
                                application.loadSkin(application.customSkinsCache, "https://configs-web.agario.miniclippt.com/live/" + window.agarversion + window.EquippableSkins[player].image);
                            }
                        }
                    }
                }
            }
        },
        //Sonia3 Adding three below functions
        translateX(x) {
            return this.mapMaxX - (x - this.mapMinX);
        },
        translateY(x) {
            return this.mapMaxY - (x - this.mapMinY);
        },
        untranslateX(x) {
            return 0 - (x - this.mapMaxX + this.mapMinX);
        },
        untranslateY(x) {
            return 0 - (x - this.mapMaxY + this.mapMinY);
        },
        calculatebgpi(x, y) {
            var ofs = 150;
            //var ofs = 1;
            var calc = (x < this.mapMidX + ofs && x > this.mapMidX - ofs) || (y < this.mapMidY + ofs && y > this.mapMidY - ofs) ? 4 : x >= this.mapMidX && y < this.mapMidY ? 0 : x < this.mapMidX && y < this.mapMidY ? 1 : x < this.mapMidX && y >= this.mapMidY ? 2 : 3;
            //var calc = (x < this.mapOffsetX + ofs && x > this.mapOffsetX - ofs) || (y < this.mapOffsetY + ofs && y > this.mapOffsetY - ofs) ? 4 : x >= this.mapOffsetX && y < this.mapOffsetY ? 0 : x < this.mapOffsetX && y < this.mapOffsetY ? 1 : x < this.mapOffsetX && y >= this.mapOffsetY ? 2 : 3;
            if ((window.legendmod.lbgpi == 4 || calc == 4 || window.legendmod.lbgpi == calc) && window.legendmod.delstate < 0) {
                window.legendmod.lbgpi = calc;
                return calc;
            } else if (window.legendmod.lbgpi != calc) {
                window.legendmod.delstate = 0;
                window.legendmod.lbgpi = calc;
                return 4;
            } else {
                window.legendmod.lbgpi = calc;
                return 4;
            }
        },
        //https://github.com/NuclearC/agar.io-protocol
        updateCells(view, offset) {
            var encode = function() {
                for (var text = '';;) {
                    var string = view.readUInt8(offset++);
                    if (0 == string) break;
                    text += String.fromCharCode(string);
                }
                return text;
            };
            this.time = Date.now();
            this.removePlayerCell = false;
            var eatEventsLength = view.readUInt16LE(offset);
            offset += 2;
            for (var length = 0; length < eatEventsLength; length++) {
                var eaterID = this.indexedCells[view.readUInt32LE(offset)],
                    victimID = this.indexedCells[view.readUInt32LE(offset + 4)];
                if (offset += 8, eaterID && victimID) {
                    victimID.targetX = eaterID.x;
                    victimID.targetY = eaterID.y;
                    victimID.targetSize = victimID.size;
                    victimID.time = this.time;
                    victimID.removeCell();
                }
            }
            //
            //application.sendJimboy3100info();
            fakePlayers();
            //					
            for (length = 0;;) {
                //extendedFlags = false;
                var id = view.readUInt32LE(offset);
                if (offset += 4, 0 == id) break;
                var x = view.readInt32LE(offset);
                if (window.legendmod.vector[window.legendmod.vnr][0] && !window.fullSpectator && !window.ingameSpectator) x = this.translateX(x); //Sonia3
                offset += 4;
                var y = view.readInt32LE(offset);
                if (window.legendmod.vector[window.legendmod.vnr][1] && !window.fullSpectator && !window.ingameSpectator) y = this.translateY(y); //Sonia3
                offset += 4;
                var size = view.readUInt16LE(offset);
                offset += 2;
                var flags = view.readUInt8(offset++),
                    extendedFlags = 0;
                128 & flags && (extendedFlags = view.readUInt8(offset++));
                //128 & d && (f = t.readUInt8(i++));	
                var color = null;
                var skin = null;
                var name = '';
                var accountID = null;
                var isAgitated = false;
                var isOwnEjected = false;
                var isOtherEjected = false;
                if (2 & flags) { //offset
                    var r = view.readUInt8(offset++);
                    var g = view.readUInt8(offset++);
                    var b = view.readUInt8(offset++);
                    color = this.rgb2Hex(~~(0.9 * r), ~~(0.9 * g), ~~(0.9 * b));
                }

                //4 & d && (g = s()),
                //8 & d && (y = window.decodeURIComponent(escape(s())));
                if (4 & flags) {
                    skin = encode();
                    //						console.log('skin '+g);

                }
                if (8 & flags) {
                    name = window.decodeURIComponent(escape(encode()));
                    if (legendmod && legendmod.gameMode && legendmod.gameMode != ":teams") {
                        this.vanillaskins(name, skin);
                    }
                }
                //Jimboy's
                if (16 & flags) {
                    //isAgitated = true;
                }
                if (32 & flags) {
                    //isOwnEjected = true;
                }
                if (64 & flags) {
                    //isOtherEjected = true;
                }
                //
                //8 & d && (y = window.decodeURIComponent(escape(s())));
                //var isVirus = 1 & flags,
                //    isFood = 1 & extendedFlags,
                //    isFriend = extendedFlags & 2,

                const isVirus = flags & 1;
                const isFood = extendedFlags & 1;
                const isFriend = extendedFlags & 2;
                //const invisible = this.staticX!=null?this.isInView(x, y):false;
                //id = this.newID(id),
                //x = this.getX(x),
                //y = this.getY(y);						
                cellUpdateCells = null;

                if (this.indexedCells.hasOwnProperty(id)) {
                    cellUpdateCells = this.indexedCells[id];
                    if (color) {
                        cellUpdateCells.color = color;
                    }
                } else {
                    cellUpdateCells = new ogarbasicassembly(id, x, y, size, color, isFood, isVirus, false, defaultmapsettings.shortMass, defaultmapsettings.virMassShots);
                    cellUpdateCells.time = this.time;
                    if (!isFood) {
                        if (isVirus && defaultmapsettings.virusesRange) {
                            this.viruses.push(cellUpdateCells);
                        }
                        this.cells.push(cellUpdateCells);
                        if (this.playerCellIDs.indexOf(id) != -1 && this.playerCells.indexOf(cellUpdateCells) == -1) {
                            cellUpdateCells.isPlayerCell = true;
                            this.playerColor = color;
                            this.playerCells.push(cellUpdateCells);
                        }
                    } else {
                        this.food.push(cellUpdateCells);
                    }
                    this.indexedCells[id] = cellUpdateCells;
                }
                if (cellUpdateCells.isPlayerCell) {
                    name = this.playerNick;
                }
                if (name) {
                    cellUpdateCells.targetNick = name;
                }
                cellUpdateCells.targetX = x;
                cellUpdateCells.targetY = y;
                cellUpdateCells.targetSize = size;
                cellUpdateCells.isFood = isFood;
                cellUpdateCells.isVirus = isVirus;
                if (skin) {
                    cellUpdateCells.skin = skin;
                }
                if (extendedFlags & 4) {
                    accountID = view.readUInt32LE(offset);
                    offset += 4;
                    cellUpdateCells.accID = accountID;
                    let friend = LM.fbOnline.find(element => {
                        return element.id == accountID
                    });
                    friend != undefined ? cellUpdateCells.fbID = friend.fbId : void(0);
                }
                if (extendedFlags & 2) {
                    cellUpdateCells.isFriend = isFriend;
                    console.log('FB friend cell in view', isFriend)
                }
            }
            /*
                this.indexedCells.hasOwnProperty(id) ? (cellUpdateCells = this.indexedCells[id],
                        color && (cellUpdateCells.color = color)) :
                    ((cellUpdateCells = new ogarbasicassembly(id, x, y, size, color, isFood, isVirus, false, defaultmapsettings.shortMass, defaultmapsettings.virMassShots)).time = this.time,
                        isFood ? this.food.push(cellUpdateCells) :
                        (isVirus && defaultmapsettings.virusesRange && this.viruses.push(cellUpdateCells),
                            this.cells.push(cellUpdateCells),
                            -1 != this.playerCellIDs.indexOf(id) && -1 == this.playerCells.indexOf(cellUpdateCells) && (cellUpdateCells.isPlayerCell = true,
                                this.playerColor = color, this.playerCells.push(cellUpdateCells))),
                        this.indexedCells[id] = cellUpdateCells),
                    cellUpdateCells.isPlayerCell && (name = this.playerNick),
                    name && (cellUpdateCells.targetNick = name),
                    cellUpdateCells.targetX = x,
                    cellUpdateCells.targetY = y,
                    cellUpdateCells.targetSize = size,
                    //                        cellUpdateCells.targetSize = u,
                    cellUpdateCells.isFood = isFood,
                    cellUpdateCells.isVirus = isVirus,
                    //
                    cellUpdateCells.isOwnEjected = isOwnEjected,
                    cellUpdateCells.isOtherEjected = isOtherEjected,
                    //
                    skin && (cellUpdateCells.skin = skin),
                    4 & extendedFlags && (accountID = view.readUInt32LE(offset),
                        cellUpdateCells.accID = accountID,
                        offset += 4,
                        friend = LM.fbOnline.find(element => {
                            return element.id == accountID
                        }),
                        friend != undefined ? cellUpdateCells.fbID = friend.fbId : void(0)),
                    2 & extendedFlags && (cell.isFriend = isFriend,
                        console.log('FB friend cell in view', isFriend));
            }
			*/

            eatEventsLength = view.readUInt16LE(offset);
            offset += 2;
            for (length = 0; length < eatEventsLength; length++) {
                var id = view.readUInt32LE(offset);
                offset += 4;
                cell = this.indexedCells[id];
                if (cell) {
                    cell.removeCell();
                }
            }
            /*				
                            for (eatEventsLength = view.readUInt16LE(offset), offset += 2, a = 0; a < eatEventsLength; a++) {
                                id = view.readUInt32LE(offset);
                                offset += 4,
                                    (cellUpdateCells = this.indexedCells[id]) &&
                                    cellUpdateCells.removeCell();
                            }*/
            //Sonia7
            if (this.removePlayerCell && !this.playerCells.length) {
                this.play = false;
                application.onPlayerDeath();
                application.showMenu(300)
                window.userBots.isAlive = false
                if (window.userBots.startedBots) window.connectionBots.send(new Uint8Array([5, Number(window.userBots.isAlive)]).buffer)
            }
            //window.counterCell=0;
            if (window.autoPlay && legendmod.play) {
                calcTarget();
            }
            //if (window.historystate && legendmod.play) {historystate();}
        },
        color2Hex(number) {
            var color = number.toString(16);
            return 1 == color.length ? '0' + color : color;
        },
        rgb2Hex(r, g, b) {
            return '#' + this.color2Hex(r) + this.color2Hex(g) + this.color2Hex(b);
        },
        sortCells() {
            this.cells.sort(function(row, conf) {
                return row.size == conf.size ? row.id - conf.id : row.size - conf.size;
            });
        },
        calculatePlayerMassAndPosition() {
            var size = 0;
            var targetSize = 0;
            var x = 0;
            var y = 0;
            playersLength = this.playerCells.length;
            for (let length = 0; length < playersLength; length++) {
                var n = this.playerCells[length];
                size += n.size;
                targetSize += n.targetSize * n.targetSize;
                x += n.x / playersLength;
                y += n.y / playersLength;
            }
            this.viewX = x;
            this.viewY = y;
            this.playerSize = size;
            this.playerMass = ~~(targetSize / 100);
            this.recalculatePlayerMass();
        },
        recalculatePlayerMass() {
            if (this.playerScore = Math.max(this.playerScore, this.playerMass),
                defaultmapsettings.virColors || defaultmapsettings.splitRange || defaultmapsettings.oppColors || defaultmapsettings.oppRings || defaultmapsettings.showStatsSTE) {
                var cells = this.playerCells;
                var CellLength = cells.length;
                cells.sort(function(cells, CellLength) {
                    return cells.size == CellLength.size ? cells.id - CellLength.id : cells.size - CellLength.size;
                });
                this.playerMinMass = ~~(cells[0].size * cells[0].size / 100);
                this.playerMaxMass = ~~(cells[CellLength - 1].size * cells[CellLength - 1].size / 100);
                this.playerSplitCells = CellLength;
            }
            if (true) {
                var mass = this.selectBiggestCell ? this.playerMaxMass : this.playerMinMass;
                // this.STE = i > 35 ? ~~(i * (i < 1000 ? 0.35 : 0.38)) : null; //Sonia2
                this.STE = Math.floor(mass * 0.375); //Sonia2
                this.MTE = Math.floor(mass * 0.75); //Sonia2
                this.BMTE = Math.ceil(mass * 1.33); //Sonia2
                this.BSTE = Math.ceil(mass * 2.66); //Sonia2
                this.TTE = Math.ceil(mass / 6); //Sonia2
                this.PTE = Math.floor(mass * 0.66); //Sonia2
            }
        },
        compareCells() {
            if (this.play && (defaultmapsettings.oppColors || defaultmapsettings.oppRings || defaultmapsettings.splitRange)) {
                if (defaultmapsettings.oppRings || defaultmapsettings.splitRange) {
                    this.biggerSTECellsCache = [];
                    this.biggerCellsCache = [];
                    this.smallerCellsCache = [];
                    this.STECellsCache = [];
                    this.biggerSTEDCellsCache = []; //Sonia
                    this.STEDCellsCache = []; //Sonia
                    //this.SSCellsCache = [];
                }
                var t = 0;
                for (; t < this.cells.length; t++) {
                    var cell = this.cells[t];
                    if (cell.isVirus || cell.spectator > 0) {
                        continue;
                    }
                    //else{
                    //console.log(i); i for food is 13
                    var size = ~~(cell.size * cell.size / 100);
                    if (size != 13) {
                        var mass = this.selectBiggestCell ? this.playerMaxMass : this.playerMinMass;
                        var fixMass = size / mass;
                        var smallMass = mass < 1000 ? 0.35 : 0.38;
                        if (defaultmapsettings.oppColors && !defaultmapsettings.oppRings) {
                            //cell.oppColor = this.setCellOppColor(cell.isPlayerCell, fixMass, smallMass);
                            cell.oppColor = this.setCellOppColor(cell.isPlayerCell, fixMass);
                        }
                        //if (!(cell.isPlayerCell || !defaultmapsettings.splitRange && !defaultmapsettings.oppRings)) {
                        if (!cell.isPlayerCell && (defaultmapsettings.splitRange || defaultmapsettings.oppRings)) {
                            this.cacheCells(cell.x, cell.y, cell.size, fixMass);
                            //this.cacheCells(cell.x, cell.y, cell.size, fixMass, smallMass);
                            //this.cacheCells(cell.x, cell.y, cell.targetX, cell.targetY, cell.size, fixMass, smallMass);
                        }
                    }
                    //}
                }
            }
        },
        /*cacheCells(t, e, i, s, o) {
                    return s >= 2.5 ? void this.biggerSTECellsCache.push({
                        'x': t,
                        'y': e,
                        'size': i
                    }) : s >= 1.25 ? void this.biggerCellsCache.push({
                        'x': t,
                        'y': e,
                        'size': i
                    }) : s < 1.25 && s > 0.75 ? void 0 : s > o ? void this.smallerCellsCache.push({
                        'x': t,
                        'y': e,
                        'size': i
                    }) : void this.STECellsCache.push({
                        'x': t,
                        'y': e,
                        'size': i
                    });
                },
            cacheCells(x, y, targetX, targetY, size, mass, smallMass) {
					return mass >= 5.32 ? void this.biggerSTEDCellsCache.push({
						x: x,
						y: y,
						targetX: targetX,
						targetY: targetY,
						size: size
					}) : mass >= 2.66 ? void this.biggerSTECellsCache.push({
						x: x,
						y: y,
						targetX: targetX,
						targetY: targetY,
						size: size
					}) : mass >= 1.33 ? void this.biggerCellsCache.push({
						x: x,
						y: y,
						targetX: targetX,
						targetY: targetY,
						size: size
					}) : mass < 1.33 && mass > 0.75 ? void this.SSCellsCache.push({
						x: x,
						y: y,
						targetX: targetX,
						targetY: targetY,
						size: size
					}) : mass > 0.375 ? void this.smallerCellsCache.push({
						x: x,
						y: y,
						targetX: targetX,
						targetY: targetY,
						size: size
					}) : mass > 0.1875 ? void this.STECellsCache.push({
						x: x,
						y: y,
						targetX: targetX,
						targetY: targetY,
						size: size
					}) : void this.STEDCellsCache.push({
						x: x,
						y: y,
						targetX: targetX,
						targetY: targetY,
						size: size
					});
				},*/

        //Sonia (entire function updated) // this is great :D
        cacheCells(x, y, size, mass) {
            return mass >= 5.32 ? void this.biggerSTEDCellsCache.push({
                'x': x,
                'y': y,
                'size': size
            }) : mass >= 2.66 ? void this.biggerSTECellsCache.push({
                'x': x,
                'y': y,
                'size': size
            }) : mass >= 1.33 ? void this.biggerCellsCache.push({
                'x': x,
                'y': y,
                'size': size
            }) : mass < 1.33 && mass > 0.75 ? void 0 : mass > 0.375 ? void this.smallerCellsCache.push({
                'x': x,
                'y': y,
                'size': size
            }) : mass > 0.1875 ? void this.STECellsCache.push({
                'x': x,
                'y': y,
                'size': size
            }) : void this.STEDCellsCache.push({
                'x': x,
                'y': y,
                'size': size
            });
        },
        //setCellOppColor(t, mass, i) {
        setCellOppColor(isPlayer, mass) {
            //return t ? ogarcopythelb.color : mass > 11 ? '#FF008C' : mass >= 2.5 ? '#BE00FF' : mass >= 1.25 ? '#FF0A00' : mass < 1.25 && mass > 0.75 ? '#FFDC00' : mass > i ? '#00C8FF' : '#64FF00';
            //return t ? ogarcopythelb.color : mass > 10.64 ? defaultSettings.enemyBSTEDColor : mass >= 5.32 ? defaultSettings.enemyBSTEDColor : mass >= 2.66 && mass <= 5.32 ? defaultSettings.enemyBSTEColor : mass >= 1.33 && mass <= 2.66 ? defaultSettings.enemyBColor : mass < 1.33 && mass > 0.75 ? '#FFDC00' : mass < 0.75 && mass > 0.375 ? defaultSettings.enemySSTEDColor : mass > i ? '#00C8FF' : defaultSettings.enemySSTEColor; //Sonia
            //return isPlayer ? ogarcopythelb.color : mass >= 10.64 ? defaultSettings.enemyBSTEDColor : mass >= 5.32 ? defaultSettings.enemyBSTEDColor : mass >= 2.66 ? defaultSettings.enemyBSTEColor : mass >= 1.33 ? defaultSettings.enemyBColor : mass > 0.75 ? '#FFDC00' : mass > 0.375 ? defaultSettings.enemySColor : mass > 0.1875 ? defaultSettings.enemySSTEColor : defaultSettings.enemySSTEDColor;
            if (isPlayer) {
                return ogarcopythelb.color
            } else {
                if (mass >= 10.64) return defaultSettings.enemyBSTEDColor
                else if (mass >= 5.32) return defaultSettings.enemyBSTEDColor
                else if (mass >= 2.66) return defaultSettings.enemyBSTEColor
                else if (mass >= 1.33) return defaultSettings.enemyBColor
                else if (mass >= 0.75) return '#FFDC00'
                else if (mass >= 0.375) return defaultSettings.enemySColor
                else if (mass >= 0.1875) return defaultSettings.enemySSTEColor
                else return defaultSettings.enemySSTEDColor
            }
        },
        getCursorPosition() {
            this.cursorX = (this.clientX - this.canvasWidth / 2) / this.viewScale + this.viewX;
            this.cursorY = (this.clientY - this.canvasHeight / 2) / this.viewScale + this.viewY;
        },
        setZoom(t) {
            //t.preventDefault(), this.zoomValue *= Math.pow(defaultmapsettings.zoomSpeedValue2, t.wheelDelta / -120 || t.detail || 0), this.zoomValue > 4 / this.viewScale && (this.zoomValue = 4 / this.viewScale);
            this.zoomValue *= Math.pow(defaultmapsettings.zoomSpeedValue2 + 1, t.wheelDelta / -120 || t.detail || 0);
            if (this.zoomValue > 4 / this.viewScale) {
                this.zoomValue = 4 / this.viewScale;
            }
        },
        setTargetPosition(t, e) {
            this.targetX = t - this.mapOffsetX;
            this.targetY = e - this.mapOffsetY;
            this.targetDistance = Math.round(Math.sqrt(Math.pow(this.playerX - this.targetX, 2) + Math.pow(this.playerY - this.targetY, 2)));
            window.targetDistance = this.targetDistance;
        },
        resetTargetPosition() {
            this.targetX = this.vector[this.vnr][0] ? this.translateX(this.playerX) : this.playerX;
            this.targetY = this.vector[this.vnr][1] ? this.translateY(this.playerY) : this.playerY;
        },
        setKeys() {
            var app = this;
            document.onkeydown = function(e) {
                var i = e.keyCode;
                if (!app.pressedKeys[i]) switch (i) {
                    case 13:
                        app.sendNick('');
                        break;
                    case 32:
                        app.sendSplit();
                        break;
                    case 81:
                        app.sendFreeSpectate();
                        break;
                    case 83:
                        app.sendSpectate();
                        break;
                    case 87:
                        app.sendEject();
                }
            }, document.onkeyup = function(e) {
                app.pressedKeys[e.keyCode] = false;
            };
        },
        init() {
            var app = this;
            /firefox/i.test(navigator.userAgent) ? document.addEventListener('DOMMouseScroll', function(e) {
                app.setZoom(e);
            }, false) : document.body.onmousewheel = function(e) {
                app.setZoom(e);
            }, setInterval(function() {
                app.sendPosition();
            }, 40), window.master && window.master.clientVersion && this.setClientVersion(window.master.clientVersion, window.master.clientVersionString);
        }
    };
    window.legendmod = LM; // look at this

    window.sendAction = function(action) {
        LM.sendAction(action);
    };
    var drawRender = {
            canvas: null,
            ctx: null,
            canvasWidth: 0,
            canvasHeight: 0,
            camX: 0,
            camY: 0,
            scale: 1,
            fpsLastRequest: null,
            renderedFrames: 0,
            fps: 0,
            pi2: 2 * Math.PI,
            battleAreaMap: null,
            battleAreaMapCtx: null,
            pieChart: null,
            pellet: null,
            indicator: null,
            setCanvas() {
                this.canvas = document.getElementById('canvas');
                this.ctx = this.canvas.getContext('2d');
                this.canvas.onmousemove = function(event) {
                    LM.clientX = event.clientX;
                    LM.clientY = event.clientY;
                    LM.getCursorPosition();
                };
            },
            resizeCanvas() {
                this.canvasWidth = window.innerWidth;
                this.canvasHeight = window.innerHeight;
                this.canvas.width = this.canvasWidth;
                this.canvas.height = this.canvasHeight;
                LM.canvasWidth = this.canvasWidth;
                LM.canvasHeight = this.canvasHeight;
                this.renderFrame();
            },
            setView() {
                this.setScale();
                var speed = 30;
                if (LM.playerCells.length) {
                    LM.calculatePlayerMassAndPosition();
                    this.camX = (this.camX + LM.viewX) / 2;
                    this.camY = (this.camY + LM.viewY) / 2;
                } else {
                    this.camX = (29 * this.camX + LM.viewX) / 30;
                    this.camY = (29 * this.camY + LM.viewY) / 30;
                }
                //this.camX=LM.viewX
                //this.camY=LM.viewY
                LM.playerX = this.camX;
                LM.playerY = this.camY;
            },
            setScale() {
                if (!LM.autoZoom) {
                    this.scale = (9 * this.scale + this.getZoom()) / 10;
                    LM.viewScale = this.scale;
                    return;
                }
                if (LM.play) {
                    this.scale = (9 * this.scale + Math.min(64 / LM.playerSize, 1) ** 0.4 * this.getZoom()) / 10;
                } else {
                    this.scale = (9 * this.scale + LM.scale * this.getZoom()) / 10;
                }
                LM.viewScale = this.scale;
            },
            getZoom() {
                return Math.max(this.canvasWidth / 1080, this.canvasHeight / 1920) * LM.zoomValue;
            },
            //Sonia5
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            },
            /*                'renderFrame': function() {
                                //for (LM.time = Date.now(), e = 0; e < LM.cells.length; e++) LM.cells[e].moveCell();
            				    LM.time = Date.now();
            						for (i = 0; i < LM.cells.length; i++) {
            							LM.cells[i].moveCell();
            						}
                                if (this['setView'](), LM.getCursorPosition(), LM['sortCells'](), LM['compareCells'](), this.ctx['clearRect'](0, 0, this.canvasWidth, this.canvasHeight), defaultmapsettings.showGrid && this['drawGrid'](this.ctx, this.canvasWidth, this.canvasHeight, this.scale, this.camX, this.camY), this.ctx['save'](), this.ctx['translate'](this.canvasWidth / 2, this.canvasHeight / 2), this.ctx.scale(this.scale, this.scale), this.ctx['translate'](-this.camX, -this.camY), defaultmapsettings.showBgSectors && this.drawSectors(this.ctx, LM.mapOffsetFixed, defaultSettings.sectorsX, defaultSettings.sectorsY, LM.mapMinX, LM.mapMinY, LM.mapMaxX, LM.mapMaxY, defaultSettings['gridColor'], defaultSettings['sectorsColor'], defaultSettings['sectorsWidth'], true), ':battleroyale' === LM.gameMode && this['drawBattleArea'](this.ctx), defaultmapsettings['showMapBorders']) {
                                    var t = defaultSettings['bordersWidth'] / 2;
                                    this['drawMapBorders'](this.ctx, LM.mapOffsetFixed, LM.mapMinX - t, LM.mapMinY - t, LM.mapMaxX + t, LM.mapMaxY + t, defaultSettings['bordersColor'], defaultSettings['bordersWidth']);
                                }
                                this.drawCommander();
                                defaultmapsettings.virusesRange && this['drawVirusesRange'](this.ctx, LM.viruses), this['drawFood'](), LM.play && (defaultmapsettings.splitRange && this['drawSplitRange'](this.ctx, LM.biggerSTECellsCache, LM.playerCells, LM.selectBiggestCell), defaultmapsettings.oppRings && this['drawOppRings'](this.ctx, this.scale, LM.biggerSTECellsCache, LM.biggerCellsCache, LM.smallerCellsCache, LM.STECellsCache), defaultmapsettings['cursorTracking'] && this['drawCursorTracking'](this.ctx, LM.playerCells, LM.cursorX, LM.cursorY)), this['drawGhostCells']();
                                for (var e = 0; e < LM['removedCells'].length; e++) LM['removedCells'][e].draw(this.ctx, true);
                                for (e = 0; e < LM.cells.length; e++) LM.cells[e].draw(this.ctx);
                                this.ctx['restore'](), ':teams' === LM.gameMode && this.pieChart && this.pieChart.width && this.ctx.drawImage(this.pieChart, this.canvasWidth - this.pieChart.width - 10, 10);
                            }, */
            'renderFrame': async function() { //Sonia5
                //this.ctx.start2D();
                await this.sleep(4); //Sonia5
                LM.time = Date.now();
                for (i = 0; i < LM.cells.length; i++) {
                    LM.cells[i].moveCell();
                }
                this.setView();
                LM.getCursorPosition();
                LM.sortCells();
                LM.compareCells();
                this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                if (defaultmapsettings.showGrid) {
                    this.drawGrid(this.ctx, this.canvasWidth, this.canvasHeight, this.scale, this.camX, this.camY);
                }
                this.ctx.save();
                this.ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2);
                this.ctx.scale(this.scale, this.scale);
                this.ctx.translate(-this.camX, -this.camY);
                if (defaultmapsettings.showBgSectors) {
                    this.drawSectors(this.ctx, LM.mapOffsetFixed, defaultSettings.sectorsX, defaultSettings.sectorsY, LM.mapMinX, LM.mapMinY, LM.mapMaxX, LM.mapMaxY, defaultSettings.gridColor, defaultSettings.sectorsColor, defaultSettings.sectorsWidth, true);
                }

                if (!legendmod.integrity) {
                    if (!legendmod.customMidPic) {
                        legendmod.customMidPic = new Image;
                        legendmod.customMidPic.src = defaultSettings.customServerImage1;
                    }
                    this.prevctxglobalAlpha = this.ctx.globalAlpha;
                    this.ctx.globalAlpha = '0.2'
                    var ofx = ((legendmod.mapMaxX - legendmod.mapMinX) / 5) * 2.2
                    var ofy = ((legendmod.mapMinY - legendmod.mapMaxY) / 5) * 2.2
                    this.ctx.drawImage(
                        legendmod.customMidPic, //2.1:5.9
                        legendmod.mapMinX + ofx,
                        legendmod.mapMaxY + ofy,
                        (legendmod.mapMaxX - legendmod.mapMinX) / 8.5,
                        (legendmod.mapMinY - legendmod.mapMaxY) / 8.5
                    );
                    this.ctx.globalAlpha = this.prevctxglobalAlpha
                }


                if (LM.gameMode === ':battleroyale') {
                    this.drawBattleArea(this.ctx);
                }
                if (defaultmapsettings.showMapBorders) {
                    var tempborderwidthradius = defaultSettings.bordersWidth / 2;
                    this.drawMapBorders(this.ctx, LM.mapOffsetFixed, LM.mapMinX - tempborderwidthradius, LM.mapMinY - tempborderwidthradius, LM.mapMaxX + tempborderwidthradius, LM.mapMaxY + tempborderwidthradius, defaultSettings.bordersColor, defaultSettings.bordersWidth);
                }
                this.drawCommander();
                this.drawCommander2();
                if (defaultmapsettings.virusesRange) {
                    this.drawVirusesRange(this.ctx, LM.viruses);
                }
                this.drawFood();
                this.calMinMax();
                if (LM.play) {
                    if (defaultmapsettings.splitRange) {
                        this.drawSplitRange(this.ctx, LM.biggerSTECellsCache, LM.playerCells, LM.selectBiggestCell);
                        this.drawSplitRange(this.ctx, LM.biggerSTEDCellsCache, LM.playerCells, LM.selectBiggestCell); //Sonia
                        //this.drawDoubleSplitRange(this.ctx, LM.biggerSTECellsCache, LM.playerCells, LM.selectBiggestCell);
                        this.drawDoubleSplitRange(this.ctx, LM.biggerSTEDCellsCache, LM.playerCells, LM.selectBiggestCell); //Sonia
                    }
                    if (defaultmapsettings.oppRings) {
                        //this.drawOppRings(this.ctx, this.scale, LM.biggerSTECellsCache, LM.biggerCellsCache, LM.smallerCellsCache, LM.STECellsCache);
                        this.drawOppRings(this.ctx, this.scale, LM.biggerSTEDCellsCache, LM.biggerSTECellsCache, LM.biggerCellsCache, LM.smallerCellsCache, LM.STECellsCache, LM.STEDCellsCache); //Sonia
                        //this.drawOppRings(this.ctx, this.scale, LM.biggerSTEDCellsCache, LM.biggerSTECellsCache, LM.biggerCellsCache, LM.smallerCellsCache, LM.STECellsCache, LM.STEDCellsCache, LM.SSCellsCache); 
                    }
                    if (defaultmapsettings.cursorTracking) {
                        this.drawCursorTracking(this.ctx, LM.playerCells, LM.cursorX, LM.cursorY);
                    }
                    if (defaultmapsettings.FBTracking && LM.arrowFB[0].visible) {
                        this.drawFBTracking(this.ctx, LM.playerCells, LM.arrowFB[0].x, LM.arrowFB[0].y);
                    }
                }

                this.drawGhostCells();

                for (var i = 0; i < LM.removedCells.length; i++) {
                    LM.removedCells[i].draw(this.ctx, true);
                }

                //lylko
                defaultmapsettings.jellyPhisycs && LM.updateQuadtree(LM.cells); //

                for (i = 0; i < LM.cells.length; i++) {

                    if (defaultmapsettings.jellyPhisycs) {
                        LM.cells[i].updateNumPoints();
                        LM.cells[i].movePoints();
                    }

                    LM.cells[i].draw(this.ctx);

                    if (drawRender.LMB && this.pointInCircle(LM.cursorX, LM.cursorY, LM.cells[i].x, LM.cells[i].y, LM.cells[i].size)) {
                        LM.selected = LM.cells[i].id
                        //this.drawRing(this.ctx,LM.cells[i].x,LM.cells[i].y,LM.cells[i].size,0.75,'#ffffff')
                    }
                }
                LM.indexedCells[LM.selected] && this.drawRing(this.ctx,
                    LM.indexedCells[LM.selected].x,
                    LM.indexedCells[LM.selected].y,
                    LM.indexedCells[LM.selected].size,
                    0.75, '#ffffff')

                if (drawRender.RMB && LM.indexedCells[LM.selected] && LM.playerCellIDs.length) {
                    var index = LM.selectBiggestCell ? LM.playerCells.length - 1 : 0;
                    //ctx.arc(playerCells[index].x, playerCells[index].y, playerCells[index].size + 760, 0, this.pi2, false);
                    if (LM.playerCells[index] == undefined) return;
                    var xc = LM.playerCells[index].targetX //.x
                    var yc = LM.playerCells[index].targetY //.y

                    var x = LM.indexedCells[LM.selected].targetX //.x
                    var y = LM.indexedCells[LM.selected].targetY //.y

                    var a = xc - x
                    var b = yc - y
                    var distance = Math.sqrt(a * a + b * b) - (LM.indexedCells[LM.selected].size + LM.playerCells[index].size)

                    var ang = Math.atan2(y - yc, x - xc);

                    LM.cursorX = xc + (Math.cos(ang) * distance)
                    LM.cursorY = yc + (Math.sin(ang) * distance)
                    LM.sendPosition()
                    //console.log(xc,yc,x,y,LM.cursorX,LM.cursorY)
                    //Math.deg(ang)


                    /*var xc = LM.playerCells[index].x,
                        yc = LM.playerCells[index].y,*/
                    //R = 100000000,
                    /*ang = Math.atan2(LM.indexedCells[LM.selected].y - yc, LM.indexedCells[LM.selected].x - xc);
                    LM.cursorX= Math.cos(ang)
                    LM.cursorY= Math.sin(ang)*/
                    //Math.deg(ang)

                    //LM.cursorX = LM.indexedCells[LM.selected].x
                    //LM.cursorY = LM.indexedCells[LM.selected].y
                }
                //
                if (defaultmapsettings.debug) {
                    this.drawViewport(this.ctx, 'Viewport', LM.camMinX, LM.camMinY, LM.camMaxX, LM.camMaxY, defaultSettings.bordersColor, 15);

                    //this.newViewport( this.ctx, 'Client', LM.viewX, LM.viewY, LM.isSpectateEnabled, LM.isFreeSpectate, LM.leaderboard, LM.playerCells)
                    if (window.fullSpectator) {
                        for (let i = 0; i < spects.length; i++) {
                            this.newViewport(this.ctx, spects[i].number, spects[i].getX(spects[i].viewX), spects[i].getY(spects[i].viewY), spects[i].isSpectateEnabled, spects[i].isFreeSpectate, [], [])
                        }

                    }
                }
                //

                this.ctx.restore();
                if (LM.gameMode === ':teams') {
                    if (this.pieChart && this.pieChart.width) {
                        this.ctx.drawImage(this.pieChart, this.canvasWidth - this.pieChart.width - 10, 10);
                    }
                }
                //this.ctx.finish2D();

                if (defaultmapsettings.debug) {
                    /*this.ctx.fillStyle = "white";
                    this.ctx.font = "15px sans-serif";
                    this.ctx.textAlign = "start";
                    var lw = (this.canvasHeight / 2)
                    LM.camMaxX && this.ctx.fillText("isFreeSpectate: " + LM.isFreeSpectate, 50, lw += 25);
                    LM.camMaxX && this.ctx.fillText("isSpectateEnabled: " + LM.isSpectateEnabled, 50, lw += 25);*/



                    //LM.camMaxX && this.ctx.fillText("realQuadrant: "+LM.realQuadrant, 50, lw+=25);
                    //LM.camMaxX && this.ctx.fillText("lastQuadrant: "+LM.lastQuadrant, 50, lw+=25);
                    //LM.camMaxX && this.ctx.fillText("quadrant: "+LM.quadrant, 50, lw+=25);
                    //LM.camMaxX && this.ctx.fillText("cMaxX: "+LM.camMaxX, 50, lw+=30);
                    //LM.camMaxY && this.ctx.fillText("cMaxY: "+LM.camMaxY, 50, lw+=30);
                    //LM.camMinX && this.ctx.fillText("cMinX: "+LM.camMinX, 50, lw+=30);
                    //LM.camMinY && this.ctx.fillText("cMinY: "+LM.camMinY, 50, lw+=30);
                }
            },
            drawFBTracking(ctx, players, x, y) { //Yahnych
                for (let length = 0; length < players.length; length++) {
                    let t = players[length];
                    let r = t.size / 3;
                    //distance to target
                    var dis = Math.sqrt((x - t.x) * (x - t.x) + (y - t.y) * (y - t.y));
                    //angle 
                    var angl = Math.round((Math.acos((t.y - y) / dis) / Math.PI) * 180);
                    //if target on left side

                    if ((t.x - x > 0 && t.y - y < 0) || (t.x - x > 0 && t.y - y > 0)) {
                        angl = 180 + (180 - angl);
                    }

                    // Store the current context state (i.e. rotation, translation etc..)
                    ctx.save()

                    //Convert degrees to radian 
                    var rad = angl * Math.PI / 180;

                    //Set the origin to the center of the image
                    ctx.translate(t.x, t.y);

                    //Rotate the canvas around the origin
                    ctx.rotate(rad);

                    //draw the image    
                    //ctx.drawImage(c, t.size * (-1),t.size * (-1),t.size*2,t.size*2);
                    let grad = ctx.createLinearGradient(0, -t.size, 0, r * 2 - t.size); //Yahnych
                    grad.addColorStop(0, defaultSettings.splitRangeColor);
                    grad.addColorStop(1, defaultSettings.splitRangeColor + "00");


                    ctx.fillStyle = grad;
                    ctx.globalAlpha = defaultSettings.darkTheme ? 0.75 : 0.35;
                    ctx.beginPath();
                    ctx.arc(0, 0 - (t.size - r), r, 0, Math.PI * 2, false)
                    ctx.fill();
                    ctx.globalAlpha = 1;
                    // Restore canvas state as saved from above
                    ctx.restore();
                }
            },
            newViewport(ctx, name, viewX, viewY, isSpectateEnabled = false, isFreeSpectate = false, leaderboard = [], cells = []) {
                var size = 0
                var mtp = 1.985

                if (cells.length > 0) {
                    for (var im = 0; cells.length > im; im++)
                        size += cells[im].size
                } else if (isFreeSpectate == false && isSpectateEnabled == true) {
                    for (var i = 0; leaderboard.length > i; i++) {
                        for (var im = 0; cells.length > im; im++)
                            if (cells[im].nick == leaderboard[i].nick)
                                size += cells[im].size
                        break
                    }
                } else {
                    if (isFreeSpectate && isSpectateEnabled) mtp = 4.95
                }
                var s = Math.pow(Math.min(64 / size, 1), 0.4000);
                var w = 1024 / s / 2 * mtp; //WSVGA
                var h = 600 / s / 2 * mtp;
                this.drawViewport(ctx, `Viewport# ${name}`, viewX - w, viewY - h, viewX + w, viewY + h, defaultSettings.bordersColor, 15);
                //this.drawRing(this.ctx, LM.viewX, LM.viewY, 15, 1, '#ff00ff') 
            },
            drawViewport: function(ctx, text, minX, maxY, maxX, minY, stroke, width) {

                ctx.strokeStyle = stroke;
                ctx.lineWidth = width;

                ctx.fillStyle = "white";
                ctx.font = "100px sans-serif";
                ctx.textAlign = "end";
                ctx.textBaseline = "hanging"
                ctx.fillText(text, maxX, maxY);

                ctx.beginPath();
                ctx.moveTo(minX, maxY);
                ctx.lineTo(maxX, maxY);
                ctx.lineTo(maxX, minY);
                ctx.lineTo(minX, minY);
                ctx.closePath();
                ctx.stroke();

            },
            pointInCircle: function(x, y, cx, cy, radius) {
                var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
                return distancesquared <= radius * radius;
            },
            drawRing: function(ctx, x, y, size, alpha, color) {
                ctx.lineWidth = 20;
                ctx.globalAlpha = alpha;
                ctx.strokeStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, size - 10, 0, this.pi2, false);
                ctx.closePath();
                ctx.stroke();

                ctx.globalAlpha = 1;
            },
            drawGrid(ctx, width, heigth, scale, camX, camY) {
                const reWidth = width / scale;
                const reHeigth = heigth / scale;
                let x = (-camX + reWidth / 2) % 50;
                let y = (-camY + reHeigth / 2) % 50;
                ctx.strokeStyle = defaultSettings.gridColor;
                ctx.globalAlpha = 1 * scale;
                ctx.beginPath();
                for (; x < reWidth; x += 50) {
                    ctx.moveTo(x * scale - 0.5, 0);
                    ctx.lineTo(x * scale - 0.5, reHeigth * scale);
                }
                for (; y < reHeigth; y += 50) {
                    ctx.moveTo(0, y * scale - 0.5);
                    ctx.lineTo(reWidth * scale, y * scale - 0.5);
                }
                ctx.stroke();
                ctx.globalAlpha = 1;
            },
            drawSectors(ctx, mapOffset, x, y, minX, minY, maxX, maxY, stroke, color, width, type) {
                if (mapOffset || !type) {
                    var posX = ~~((maxX - minX) / x);
                    var posY = ~~((maxY - minY) / y);
                    var rePosX = 0;
                    var rePosY = 0;
                    if (ctx.strokeStyle = stroke, ctx.fillStyle = color, ctx.lineWidth = width, type || !type && defaultmapsettings.showMiniMapGrid) {
                        ctx.beginPath();
                        var length = 0;
                        for (; length < x + 1; length++) {
                            rePosX = minX + posX * length;
                            ctx.moveTo(length == x ? maxX : rePosX, minY);
                            ctx.lineTo(length == x ? maxX : rePosX, maxY);
                        }
                        length = 0;
                        for (; length < y + 1; length++) {
                            rePosY = minY + posY * length;
                            ctx.moveTo(minX - width / 2, length == y ? maxY : rePosY);
                            ctx.lineTo(maxX + width / 2, length == y ? maxY : rePosY);
                        }
                        ctx.stroke();
                    } else {
                        this.drawMapBorders(ctx, mapOffset, minX, minY, maxX, maxY, stroke, width);
                    }
                    ctx.font = type ? defaultSettings.sectorsFontWeight + " " + defaultSettings.sectorsFontSize + "px " + defaultSettings.sectorsFontFamily : defaultSettings.miniMapFontWeight + " " + ~~(0.4 * posY) + "px " + defaultSettings.miniMapFontFamily;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    length = 0;
                    for (; length < y; length++) {
                        var ogarcopythelb = 0;
                        for (; ogarcopythelb < x; ogarcopythelb++) {
                            var application = String.fromCharCode(65 + length) + (ogarcopythelb + 1);
                            rePosX = ~~(minX + posX / 2 + ogarcopythelb * posX);
                            rePosY = ~~(minY + posY / 2 + length * posY);
                            ctx.fillText(application, rePosX, rePosY);
                        }
                    }
                }
            },
            drawCommander() {
                //console.log('Special effects stage 2');
                if (LM.drawCommander) {
                    var pickerAxes = this.ctx;
                    cimg = new Image;
                    cimg.src = defaultSettings.commanderImage;
                    cimg1 = new Image;
                    cimg1.src = defaultSettings.commanderImage1;
                    cimg12 = new Image;
                    cimg12.src = defaultSettings.commanderImage2;
                    pickerAxes.save();
                    pickerAxes.globalAlpha = LM.cAlpha;
                    pickerAxes.translate(ogario.spawnX, ogario.spawnY);
                    pickerAxes.rotate(LM.cAngle);
                    pickerAxes.drawImage(cimg, -LM.cRadius / 2, -LM.cRadius / 2, LM.cRadius, LM.cRadius);
                    pickerAxes.restore();
                    pickerAxes.save();
                    pickerAxes.globalAlpha = LM.cAlpha;
                    pickerAxes.translate(ogario.spawnX, ogario.spawnY);
                    pickerAxes.rotate(LM.cAngle1);
                    pickerAxes.drawImage(cimg1, -LM.cRadius / 2, -LM.cRadius / 2, LM.cRadius, LM.cRadius);
                    pickerAxes.restore();
                    pickerAxes.save();
                    pickerAxes.globalAlpha = LM.cAlpha;
                    pickerAxes.translate(ogario.spawnX, ogario.spawnY);
                    pickerAxes.rotate(LM.cAngle2);
                    pickerAxes.drawImage(cimg12, -LM.cRadius / 2, -LM.cRadius / 2, LM.cRadius, LM.cRadius);
                    pickerAxes.restore();
                    pickerAxes.globalAlpha = 1;
                    this.updateCommander();
                }
            },
            drawCommander2() {
                //console.log('Special effects stage 2');
                if (LM.drawCommander2) {
                    var pickerAxes = this.ctx;
                    cimg = new Image;
                    cimg.src = defaultSettings.commanderImage3;
                    cimg1 = new Image;
                    cimg1.src = defaultSettings.commanderImage4;
                    cimg12 = new Image;
                    cimg12.src = defaultSettings.commanderImage5;
                    pickerAxes.save();
                    pickerAxes.globalAlpha = LM.cAlpha;
                    pickerAxes.translate(window.targetingLeadX, window.targetingLeadY);
                    pickerAxes.rotate(LM.cAngle);
                    pickerAxes.drawImage(cimg, -LM.cRadius / 2, -LM.cRadius / 2, LM.cRadius, LM.cRadius);
                    pickerAxes.restore();
                    pickerAxes.save();
                    pickerAxes.globalAlpha = LM.cAlpha;
                    pickerAxes.translate(window.targetingLeadX, window.targetingLeadY);
                    pickerAxes.rotate(LM.cAngle1);
                    pickerAxes.drawImage(cimg1, -LM.cRadius / 2, -LM.cRadius / 2, LM.cRadius, LM.cRadius);
                    pickerAxes.restore();
                    pickerAxes.save();
                    pickerAxes.globalAlpha = LM.cAlpha;
                    pickerAxes.translate(window.targetingLeadX, window.targetingLeadY);
                    pickerAxes.rotate(LM.cAngle2);
                    pickerAxes.drawImage(cimg12, -LM.cRadius / 2, -LM.cRadius / 2, LM.cRadius, LM.cRadius);
                    pickerAxes.restore();
                    pickerAxes.globalAlpha = 1;
                    this.updateCommander();
                }
            },
            updateCommander() {
                LM.cRadius += 7;
                LM.cAngle += .007;
                LM.cAngle1 -= .006;
                LM.cAngle2 += .003;
                if (2025 <= LM.cRadius) {
                    LM.cAlpha *= .95;
                }
                if (1E-4 >= LM.cAlpha) {
                    this.resetCommander();
                }
            },
            resetCommander() {
                LM.cRadius = 10; //LM.clientX
                LM.cAngle = 4;
                LM.cAngle1 = 0;
                LM.cAngle2 = 0;
                LM.cAlpha = 1;
                LM.drawCommander = false;
                LM.drawCommander2 = false;
                ogario.spawnX = 0;
                ogario.spawnY = 0;
            },
            /*
                drawMapBorders(t, e, i, s, o, a, n, r) {
                    e && (t.strokeStyle = n, t.lineWidth = r, t.beginPath(), t.moveTo(i, s), t.lineTo(o, s), t.lineTo(o, a), t.lineTo(i, a), t.closePath(), t.stroke());
                },
				*/
            drawMapBorders(ctx, macros, text, x1, x0, y0, radius, canvas) {
                if (macros) {
                    ctx.strokeStyle = radius;
                    ctx.lineWidth = canvas;
                    ctx.beginPath();
                    ctx.moveTo(text, x1);
                    ctx.lineTo(x0, x1);
                    ctx.lineTo(x0, y0);
                    ctx.lineTo(text, y0);
                    if (defaultmapsettings.borderGlow) {
                        ctx.shadowBlur = defaultSettings.borderGlowSize;
                        ctx.shadowColor = defaultSettings.borderGlowColor;
                    } else {
                        "skrrt";
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
                if (defaultmapsettings.borderGlow) {
                    ctx.shadowBlur = 0;
                } else {
                    "skrrt";
                }
            },
            drawVirusesRange(t, e, i) {
                if (e.length) {
                    t.beginPath();
                    for (var s = 0; s < e.length; s++) {
                        var o = e[s].x,
                            a = e[s].y;
                        t.moveTo(o, a),
                            t.arc(o, a, e[s].size + 820, 0, this.pi2, false);
                    }
                    t.fillStyle = defaultSettings.virusColor,
                        t.globalAlpha = 0.1, t.fill(),
                        t.globalAlpha = 1, i && (e = []);
                }
            },
            calMinMax() {
                LM.camMaxX = LM.playerX
                LM.camMaxY = LM.playerY
                LM.camMinX = LM.playerX
                LM.camMinY = LM.playerY
                for (var length = 0; length < LM.food.length; length++) {
                    var x = LM.food[length].x - 10 - defaultSettings.foodSize;
                    var y = LM.food[length].y - 10 - defaultSettings.foodSize;
                    if (x > LM.camMaxX) LM.camMaxX = x
                    if (y > LM.camMaxY) LM.camMaxY = y
                    if (x < LM.camMinX) LM.camMinX = x
                    if (y < LM.camMinY) LM.camMinY = y
                }
            },
            drawFood() {

                if (!LM.showFood) {
                    return;
                }
                if (defaultmapsettings.autoHideFoodOnZoom && this.scale < 0.2) {
                    return;
                }
                if (defaultmapsettings.autoHideFood && !LM.foodIsHidden && LM.playerMass > 1000) {
                    LM.showFood = false;
                    LM.foodIsHidden = true;
                    return;
                }
                if (!defaultmapsettings.rainbowFood) {
                    this.drawCachedFood(this.ctx, LM.food, this.scale);
                    return;
                }
                for (let length = 0; length < LM.food.length; length++) {
                    LM.food[length].moveCell();
                    LM.food[length].draw(this.ctx);
                }
            },
            drawCachedFood(ctx, food, scale, reset) {
                if (!food.length) {
                    return;
                }
                if (defaultmapsettings.optimizedFood && this.pellet) {
                    for (var length = 0; length < food.length; length++) {
                        var x = food[length].x - 10 - defaultSettings.foodSize;
                        var y = food[length].y - 10 - defaultSettings.foodSize;
                        ctx.drawImage(this.pellet, x, y);
                    }
                } else {
                    ctx.beginPath();
                    for (var length = 0; length < food.length; length++) {
                        var x = food[length].x;
                        var y = food[length].y;
                        ctx.moveTo(x, y);
                        if (scale < 0.16) {
                            const size = food[length].size + defaultSettings.foodSize;
                            ctx.rect(x - size, y - size, 2 * size, 2 * size);
                            continue;
                        }
                        ctx.arc(x, y, food[length].size + defaultSettings.foodSize, 0, this.pi2, false);
                    }
                    ctx.fillStyle = defaultSettings.foodColor;
                    ctx.globalAlpha = 1;
                    ctx.fill();
                }
                if (reset) {
                    food = [];
                }
            },
            /*drawCachedFood(t, e, i, s) {
                if (e.length) {
                    if (defaultmapsettings.optimizedFood && this.pellet)
                        for (var o = 0; o < e.length; o++) {
                            var a = e[o].x - 10 - defaultSettings.foodSize,
                                n = e[o].y - 10 - defaultSettings.foodSize;
                            t.drawImage(this.pellet, a, n);
                        } else {
                            t.beginPath();
                            for (o = 0; o < e.length; o++) {
                                a = e[o].x, n = e[o].y;
                                if (t.moveTo(a, n), i < 0.16) {
                                    var r = e[o].size + defaultSettings.foodSize;
                                    t.rect(a - r, n - r, 2 * r, 2 * r);
                                } else t.arc(a, n, e[o].size + defaultSettings.foodSize, 0, this.pi2, false);
                            }
                            t.fillStyle = defaultSettings.foodColor, t.globalAlpha = 1, t.fill();
                        }
                    s && (e = []);
                }
            },*/
            drawSplitRange(ctx, biggestCell, players, currentBiggestCell, reset) {
                if (this.drawCircles(ctx, biggestCell, 760, 4, 0.4, defaultSettings.enemyBSTEColor), players.length) { //Sonia2
                    //if (this.drawCircles(ctx, biggestCell, 760, 4, 0.4, '#ff0000'), players.length) { //Sonia
                    var current = currentBiggestCell ? players.length - 1 : 0;
                    ctx.lineWidth = 6;
                    ctx.globalAlpha = defaultSettings.darkTheme ? 0.7 : 0.35,
                        ctx.strokeStyle = defaultSettings.splitRangeColor;
                    ctx.beginPath();
                    ctx.arc(players[current].x, players[current].y, players[current].size + 760, 0, this.pi2, false);
                    ctx.closePath();
                    ctx.stroke();
                }
                ctx.globalAlpha = 1;
                if (reset) {
                    biggestCell = [];
                }
            },
            drawDoubleSplitRange(ctx, biggestCell, players, currentBiggestCell, reset) {
                //if (this.drawCircles(ctx, biggestCell, 760, 4, 0.4, '#BE00FF'), players.length) {
                if (this.draw2Circles(ctx, biggestCell, 760, 4, 0.4, defaultSettings.enemyBSTEDColor), players.length) { //Sonia2
                    //if (this.draw2Circles(ctx, biggestCell, 760, 4, 0.4, '#8000ff'), players.length) { //Sonia
                    //this.drawSplitRange(this.ctx, LM.biggerSTECellsCache, LM.playerCells, LM.selectBiggestCell);

                    var current = currentBiggestCell ? players.length - 1 : 0;
                    //console.log(currentBiggestCell[current].size);
                    if (players[current].size >= 400 && defaultmapsettings.qdsplitRange) { //Sonia2
                        ctx.lineWidth = 6;
                        ctx.globalAlpha = defaultSettings.darkTheme ? 0.7 : 0.35,
                            ctx.strokeStyle = defaultSettings.splitRangeColor;
                        ctx.beginPath();
                        ctx.arc(players[current].x, players[current].y, 2 * players[current].size + 760, 0, this.pi2, false);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
                ctx.globalAlpha = 1;
                if (reset) {
                    biggestCell = [];
                }
            },
            //Sonia (entire function update)
            //drawOppRings(ctx, scale, ip, biggerSte, biggetCell, smallerCell, smallSte, ap, ss, reset) {
            drawOppRings(ctx, scale, ip, biggerSte, biggetCell, smallerCell, smallSte, ap, reset) {
                var width = 14 + 2 / scale;
                var alpha = 12 + 1 / scale;
                this.drawCircles(ctx, ip, width, alpha, 0.75, defaultSettings.enemyBSTEDColor); //Sonia2
                this.drawCircles(ctx, biggerSte, width, alpha, 0.75, defaultSettings.enemyBSTEColor); //Sonia2
                this.drawCircles(ctx, biggetCell, width, alpha, 0.75, defaultSettings.enemyBColor); //Sonia2
                //this.drawCircles(ctx, ss, width, alpha, 0.75, defaultSettings.splitRangeColor);						
                this.drawCircles(ctx, smallerCell, width, alpha, 0.75, defaultSettings.enemySColor); //Sonia2
                this.drawCircles(ctx, smallSte, width, alpha, 0.75, defaultSettings.enemySSTEColor); //Sonia2
                this.drawCircles(ctx, ap, width, alpha, 0.75, defaultSettings.enemySSTEDColor); //Sonia2
                if (reset) {
                    biggerSte = [];
                    biggetCell = [];
                    smallerCell = [];
                    smallSte = [];
                    ip = [];
                    ap = [];
                    //ss = [];
                }
            },
            drawCursorTracking(ctx, players, cursorX, cursorY) {
                ctx.lineWidth = 4,
                    ctx.globalAlpha = defaultSettings.darkTheme ? 0.75 : 0.35;
                ctx.strokeStyle = defaultSettings.cursorTrackingColor;
                ctx.beginPath();
                for (var o = 0; o < players.length; o++) ctx.moveTo(players[o].x, players[o].y), ctx.lineTo(cursorX, cursorY);
                ctx.stroke();
                ctx.globalAlpha = 1;
            },
            drawCircles(ctx, players, scale, width, alpha, stroke) {
                ctx.lineWidth = width;
                ctx.globalAlpha = alpha;
                ctx.strokeStyle = stroke;
                for (var length = 0; length < players.length; length++) {
                    ctx.beginPath();
                    ctx.arc(players[length].x, players[length].y, players[length].size + scale, 0, this.pi2, false);
                    ctx.closePath();
                    ctx.stroke();
                }
                ctx.globalAlpha = 1;
            },
            //Sonia (added entire function)
            draw2Circles(ctx, players, scale, width, alpha, color) {
                ctx.lineWidth = width;
                ctx.globalAlpha = alpha;
                ctx.strokeStyle = color;
                //for (var n = 0; n < players.length; n++) ctx.beginPath(), ctx.arc(players[n].x, players[n].y, 1.5*players[n].size + 2*scale, 0, this.pi2, false), ctx.closePath(), ctx.stroke();
                if (defaultmapsettings.qdsplitRange) { //Sonia2
                    for (var n = 0; n < players.length; n++) {
                        ctx.beginPath();
                        ctx.arc(players[n].x, players[n].y, 2 * players[n].size + scale, 0, this.pi2, false);
                        ctx.closePath();
                        ctx.stroke(); //760+2*cell.size is the correct
                    }
                } //Sonia2
                if (defaultmapsettings.sdsplitRange) { //Sonia2
                    for (var n = 0; n < players.length; n++) {
                        ctx.setLineDash([20, 30]);
                        ctx.lineWidth = 2 * width;
                        ctx.beginPath();
                        ctx.arc(players[n].x, players[n].y, 1.5 * players[n].size + 2 * scale, 0, this.pi2, false);
                        ctx.closePath();
                        ctx.stroke(); //Sonia2
                    }
                    ctx.setLineDash([]); //Sonia2
                    ctx.lineWidth = width; //Sonia2
                } //Sonia2
                ctx.globalAlpha = 1;
            },
            drawDashedCircle(ctx, x, y, radius, times, width, color) {
                var pi2 = this.pi2 / times;
                ctx.lineWidth = width;
                ctx.strokeStyle = color;
                for (var length = 0; length < times; length += 2) {
                    ctx.beginPath();
                    ctx.arc(x, y, radius - width / 2, length * pi2, (length + 1) * pi2, false);
                    ctx.stroke();
                }
            },
            drawTeammatesInd(ctx, x, y, size) {
                //console.log("t:"+ t + " e:" + e + " i:" + i + "s:" + s);
                if (this.indicator) {
                    ctx.drawImage(this.indicator, x - 45, y - size - 90);
                }
            },
            drawPieChart() {
                this.pieChart || (this.pieChart = document.createElement('canvas'));
                var ctx = this.pieChart.getContext('2d'),
                    mincanvasWidth = Math.min(200, 0.3 * this.canvasWidth) / 200;
                this.pieChart.width = 200 * mincanvasWidth;
                this.pieChart.height = 240 * mincanvasWidth;
                ctx.scale(mincanvasWidth, mincanvasWidth);
                for (var colors = ['#333333', '#FF3333', '#33FF33', '#3333FF'], time = 0, length = 0; length < LM.pieChart.length; length++) {
                    var currentPie = time + LM.pieChart[length] * this.pi2;
                    ctx.fillStyle = colors[length + 1];
                    ctx.beginPath();
                    ctx.moveTo(100, 140);
                    ctx.arc(100, 140, 80, time, currentPie, false);
                    ctx.fill();
                    time = currentPie;
                }
            },
            drawBattleArea(ctx) {
                if (LM.battleRoyale.state) {
                    this.drawDangerArea(ctx, LM.battleRoyale.x, LM.battleRoyale.y, LM.battleRoyale.radius, LM.mapMinX, LM.mapMinY, LM.mapMaxX - LM.mapMinX, LM.mapMaxY - LM.mapMinY, defaultSettings.dangerAreaColor, 0.25);
                    this.drawSafeArea(ctx, LM.battleRoyale.targetX, LM.battleRoyale.targetY, LM.battleRoyale.targetRadius, 40, defaultSettings.safeAreaColor);
                }
            },
            drawBattleAreaOnMinimap(ctx, width, heigth, newWidth, offsetX, offsetY) {
                if (LM.battleRoyale.state) {
                    if (!this.battleAreaMap) {
                        this.battleAreaMap = document.createElement("canvas");
                        this.battleAreaMapCtx = this.battleAreaMap.getContext("2d");
                    }
                    if (this.battleAreaMap.width != width) {
                        this.battleAreaMap.width = width;
                        this.battleAreaMap.height = heigth;
                    } else {
                        this.battleAreaMapCtx.clearRect(0, 0, width, heigth);
                    }
                    var newX = (LM.battleRoyale.x + offsetX) * newWidth;
                    var newY = (LM.battleRoyale.y + offsetY) * newWidth;
                    var newRadius = LM.battleRoyale.radius * newWidth;
                    this.drawDangerArea(this.battleAreaMapCtx, newX, newY, newRadius, 0, 0, width, heigth, defaultSettings.dangerAreaColor, 0.25);
                    newX = ~~((LM.battleRoyale.targetX + offsetX) * newWidth);
                    newY = ~~((LM.battleRoyale.targetY + offsetY) * newWidth);
                    newRadius = ~~(LM.battleRoyale.targetRadius * newWidth);
                    this.drawSafeArea(this.battleAreaMapCtx, newX, newY, newRadius, 2, defaultSettings.safeAreaColor);
                    ctx.drawImage(this.battleAreaMap, 0, 0);
                }
            },
            drawDangerArea(ctx, x, y, radius, minX, minY, maxX, maxY, color, aplha) {
                if (!(LM.battleRoyale.radius == LM.battleRoyale.maxRadius || radius <= 0)) {
                    ctx.save();
                    ctx.globalAlpha = aplha;
                    ctx.fillStyle = color;
                    ctx.fillRect(minX, minY, maxX, maxY);
                    ctx.globalCompositeOperation = "destination-out";
                    ctx.globalAlpha = 1;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, this.pi2, false);
                    ctx.fill();
                    ctx.restore();
                }
            },
            drawSafeArea(ctx, targetX, targetY, radius, width, color) {
                if (!(LM.battleRoyale.state > 2 || radius <= 0)) {
                    this.drawDashedCircle(ctx, targetX, targetY, radius, 60, width, color);
                }
            },
            drawTextAlongArc(ctx, str, centerX, centerY, radius, angle) {
                var len = str.length,
                    s;
                this.ctx.save();
                this.ctx.translate(centerX, centerY);
                this.ctx.rotate(-1 * angle / 2);
                this.ctx.rotate(-1 * (angle / len) / 2);
                for (var n = 0; n < len; n++) {
                    this.ctx.rotate(angle / len);
                    this.ctx.save();
                    this.ctx.translate(0, -1 * radius);
                    s = str[n];
                    this.ctx.fillText(s, 0, 0);
                    this.ctx.restore();
                }
                this.ctx.restore();
            },
            drawGhostCells() {
                if (defaultmapsettings.showGhostCells) {
                    var ghostsCells = LM.ghostCells;
                    this.ctx.beginPath();
                    var length = 0;
                    for (; length < ghostsCells.length; length++) {
                        if (!ghostsCells[length].inView) {
                            var x = ghostsCells[length].x;
                            var y = ghostsCells[length].y;
                            this.ctx.moveTo(x, y);
                            this.ctx.arc(x, y, ghostsCells[length].size, 0, this.pi2, false);
                            //
                            if (defaultmapsettings.showGhostCellsInfo) {
                                this.nickScale = 1;
                                this.fontSize = Math.max(ghostsCells[length].size * 0.3, 26) * this.scale;
                                this.nickSize = ~~(this.fontSize * this.nickScale);
                                this.ctx.font = defaultSettings.namesFontWeight + " " + this.nickSize * 4 + "px " + defaultSettings.namesFontFamily;
                                this.ctx.textAlign = 'center';
                                this.ctx.fillStyle = defaultSettings.namesColor;
                                this.ctx.strokeStyle = defaultSettings.namesStrokeColor;
                                this.ctx.lineWidth = 4;
                                angle = Math.PI * 0.8;

                                if (LM.leaderboard[length] != undefined) { //LM instead of legendmod for quicker response

                                    this.ghostcellstext = removeEmojis(application.escapeHTML(LM.leaderboard[length].nick)); //application.escapeHTML(legendmod.leaderboard[0].nick)
                                } else {
                                    this.ghostcellstext = "Legend mod";
                                }
                                this.drawTextAlongArc(this.ctx, this.ghostcellstext, x, y, ghostsCells[length].size * this.pi2 / 6, angle);
                                if (defaultmapsettings.customSkins && LM.showCustomSkins) {
                                    if (LM.leaderboard[length] != undefined) {
                                        node = application.getCustomSkin(LM.leaderboard[length].nick, "#000000");
                                        if (node) {
                                            this.ctx.drawImage(node, x - ghostsCells[length].size, y - ghostsCells[length].size, ghostsCells[length].size * 2, ghostsCells[length].size * 2);
                                        }
                                    }
                                }
                            }
                            //
                        }
                    }
                    this.ctx.fillStyle = defaultSettings.ghostCellsColor;
                    this.ctx.globalAlpha = defaultSettings.ghostCellsAlpha;
                    this.ctx.shadowColor = defaultSettings.ghostCellsColor;
                    this.ctx.shadowBlur = 40;
                    this.ctx.shadowOffsetX = 0;
                    this.ctx.shadowOffsetY = 0;
                    this.ctx.fill();
                    this.ctx.globalAlpha = 1;
                    this.ctx.shadowBlur = 0;
                }
            },
            preDrawPellet() {
                this.pellet = null;
                var size = 10 + defaultSettings.foodSize;
                var canvas = document.createElement('canvas');
                canvas.width = 2 * size,
                    canvas.height = 2 * size;
                var ctx = canvas.getContext('2d');
                ctx.arc(size, size, size, 0, this.pi2, false);
                ctx.fillStyle = defaultSettings.foodColor;
                ctx.fill();
                this.pellet = new Image();
                this.pellet.src = canvas.toDataURL();
                canvas = null;
            },
            preDrawIndicator() {
                this.indicator = null;
                var canvas = document.createElement('canvas');
                canvas.width = 90;
                canvas.height = 50;
                var ctx = canvas.getContext('2d');
                ctx.lineWidth = 2;
                ctx.fillStyle = defaultSettings.teammatesIndColor;
                ctx.strokeStyle = '#000000';
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(90, 0);
                ctx.lineTo(45, 50);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                this.indicator = new Image();
                this.indicator.src = canvas.toDataURL();
                canvas = null;
            },
            countFps() {
                if (defaultmapsettings.showStatsFPS) {
                    var Time = Date.now();
                    if (!this.fpsLastRequest) {
                        this.fpsLastRequest = Time;
                    }
                    if (Time - this.fpsLastRequest >= 1000) {
                        this.fps = this.renderedFrames;
                        this.renderedFrames = 0;
                        this.fpsLastRequest = Time;
                    }
                    this.renderedFrames++;
                }
            },
            render() {
                drawRender.countFps();
                drawRender.renderFrame();
                window.requestAnimationFrame(drawRender.render);
            },
            init() {
                this.setCanvas();
                this.resizeCanvas();
                this.preDrawPellet();
                this.preDrawIndicator();
                window.requestAnimationFrame(drawRender.render);
            }

        },
        hotkeysSetup = {
            lastPressedKey: '',
            lastKeyId: '',
            defaultMessageKey: 'ENTER',
            inputClassName: 'custom-key-in form-control input-sm',
            loadDefaultHotkeys() {
                hotkeys = {};
                for (const command in hotkeysCommand) {
                    if (hotkeysCommand.hasOwnProperty(command)) {
                        hotkeys[hotkeysCommand[command].defaultKey] = command;
                    }
                }
                hotkeys['spec-messageKey'] = this.defaultMessageKey;
                /*for (var t in hotkeys = {}, hotkeysCommand) hotkeysCommand.hasOwnProperty(t) && (hotkeys[hotkeysCommand[t].defaultKey] = t);
                hotkeys['spec-messageKey'] = this.defaultMessageKey;*/
            },
            loadHotkeys() {
                if (null !== window.localStorage.getItem('ogarioHotkeys')) {
                    hotkeys = JSON.parse(window.localStorage.getItem('ogarioHotkeys'))
                } else {
                    this.loadDefaultHotkeys()
                }
                if (null !== window.localStorage.getItem('ogarioCommands')) {
                    chatCommand = JSON.parse(window.localStorage.getItem('ogarioCommands'));
                }
            },
            saveHotkeys() {
                window.localStorage.setItem('ogarioHotkeys', JSON.stringify(hotkeys));
                this.saveCommands();
            },
            saveCommands() {
                $('#hotkeys .command-in').each(function() {
                    var element = $(this);
                    var id = element.attr('id');
                    if (chatCommand.hasOwnProperty(id)) {
                        chatCommand[id] = element.val()
                    }
                });
                window.localStorage.setItem('ogarioCommands', JSON.stringify(chatCommand));
            },
            resetHotkeys() {
                this.loadDefaultHotkeys();
                $('#hotkeys-cfg .custom-key-in').each(function() {
                    var t = $(this).attr('id');
                    hotkeysCommand[t] && $(this).val(hotkeysCommand[t].defaultKey);
                });
            },
            setHotkeysMenu() {
                //var t = this;
                const setup = this;
                for (var command in $('body').append('<div id=\"hotkeys\"><div id=\"hotkeys-menu\"><button id=\"reset-hotkeys\" class=\"btn btn-primary\">' + textLanguage.restoreSettings + '</button> <button id=\"save-hotkeys\" class=\"btn btn-success\">' + textLanguage.saveSett + '</button> <button id=\"close-hotkeys\" class=\"btn btn-danger\">' + textLanguage['close'] + '</button></div><div id=\"hotkeys-cfg\"></div><div id=\"hotkeys-inst\"><ul><li>' + textLanguage['hk-inst-assign'] + '</li><li>' + textLanguage['hk-inst-delete'] + '</li><li>' + textLanguage['hk-inst-keys'] + '</li></ul></div></div>'), hotkeysCommand)
                    if (hotkeysCommand.hasOwnProperty(command)) {
                        var currentCommand = hotkeysCommand[command],
                            text = '';
                        for (var key in hotkeys)
                            if (hotkeys.hasOwnProperty(key) && hotkeys[key] === command) {
                                text = key;
                                break;
                            } if ('hk-switchServerMode' === command && application && !application.privateIP) continue;
                        if ('command' === currentCommand.type) {
                            var replaceHk = command.replace('hk-', '');
                            $('#hotkeys-cfg').append('<div class=\"row\"><div class=\"key-label\"><input id=\"' + replaceHk + '\" class=\"command-in form-control input-sm\" value=\"' + chatCommand[replaceHk] + '\" maxlength=\"80\" /></div><div class=\"default-key\">' + currentCommand.defaultKey + '</div><div class=\"custom-key\"><input id=\"' + command + '\" class=\"custom-key-in form-control input-sm\" value=\"' + text + '\" /></div></div>');
                        } else $('#hotkeys-cfg').append('<div class=\"row\"><div class=\"key-label\">' + currentCommand.label + '</div><div class=\"default-key\">' + currentCommand.defaultKey + '</div><div class=\"custom-key\"><input id=\"' + command + '\" class=\"custom-key-in form-control input-sm\" value=\"' + text + '\" /></div></div>');
                    }
                $(document).on('click', '#reset-hotkeys', function(event) {
                        event.preventDefault();
                        //hotkeysSetup.resetHotkeys();
                        setup.resetHotkeys();
                    }),
                    $(document).on('click', '#save-hotkeys', function(event) {
                        event.preventDefault();
                        //hotkeysSetup.saveHotkeys();
                        setup.saveHotkeys();
                        $('#hotkeys').fadeOut(500);
                    }),
                    $(document).on('click', '#close-hotkeys', function(event) {
                        event.preventDefault();
                        $('#hotkeys').fadeOut(500);
                    }),
                    $(document).on('click', '.hotkeys-link', function(event) {
                        $('#hotkeys').fadeIn(500);
                        $('#hotkeys-cfg').perfectScrollbar('update');
                        resetonkeydown();
                    }),
                    $('#hotkeys-cfg').perfectScrollbar(),
                    Settings && Settings.setMenuBg();
            },
            getPressedKey(key) {
                var specialKey = '';
                var normalKey = '';
                if (key.ctrlKey || key.keyCode == 17) {
                    specialKey = 'CTRL';
                } else if (key.altKey || key.keyCode == 18) {
                    specialKey = 'ALT';
                }
                switch (key.keyCode) {
                    //switch (key['ctrlKey'] || 17 == key.keyCode ? specialKey = 'CTRL' : (key.altKey || 18 == key.keyCode) && (specialKey = 'ALT'), key.keyCode) {
                    case 9:
                        normalKey = 'TAB';
                        break;
                    case 13:
                        normalKey = 'ENTER';
                        break;
                    case 16:
                        normalKey = 'SHIFT';
                        break;
                    case 17:
                    case 18:
                        break;
                    case 27:
                        normalKey = 'ESC';
                        break;
                    case 32:
                        normalKey = 'SPACE';
                        break;
                    case 37:
                        normalKey = 'LEFT';
                        break;
                    case 38:
                        normalKey = 'UP';
                        break;
                    case 39:
                        normalKey = 'RIGHT';
                        break;
                    case 40:
                        normalKey = 'DOWN';
                        break;
                    case 46:
                        normalKey = 'DEL';
                        break;
                    case 61:
                    case 187:
                        normalKey = '=';
                        break;
                    case 192:
                        normalKey = 'TILDE';
                        break;
                    default:
                        normalKey = String.fromCharCode(key.keyCode);
                }
                if (specialKey !== '') {
                    if (normalKey !== '') {
                        return specialKey + '+' + normalKey;
                    }
                    return specialKey;
                }
                return normalKey;
                //return '' !== specialKey ? '' !== normalKey ? specialKey + '+' + normalKey : specialKey : normalKey;
            },
            deleteHotkey(name, id) {
                delete hotkeys[name];
                $('#' + id).val('');
            },
            setDefaultHotkey(id) {
                var key = false;
                if (hotkeysCommand[id] && !hotkeys.hasOwnProperty(hotkeysCommand[id].defaultKey)) {
                    key = hotkeysCommand[id].defaultKey;
                    hotkeys[key] = id;
                }
                return key;
            },
            setHotkey(key, id) {
                if (id && (this.lastPressedKey !== key || this.lastKeyId !== id)) {
                    var value = $('#' + id).val();
                    if (this.deleteHotkey(value, id), 'DEL' !== key) {
                        if (hotkeys[key] && hotkeys[key] !== id) {
                            var hotkey = hotkeys[key],
                                defaultKey = this.setDefaultHotkey(hotkey);
                            if (defaultKey) {
                                hotkeys[defaultKey] = hotkey;
                                $('#' + hotkey).val(defaultKey)
                            } else {
                                this.deleteHotkey(key, hotkey);
                            }
                        }
                        hotkeys[key] = id,
                            $('#' + id).val(key);
                        if ('hk-chatMessage' === id) {
                            hotkeys['spec-messageKey'] = key
                        }
                        this.lastPressedKey = key;
                        this.lastKeyId = id;
                    }
                }
            },
            init() {
                this.loadHotkeys();
                this.setHotkeysMenu();
            }
        };
    window.legendmod2 = drawRender; //look at this
    window.legendmod6 = hotkeysSetup;

    function spectateBlind() {
        window.onkeydown = function(event) {
            if (81 == event.keyCode && window.core.specialOn) {
                window.core.specialOn();
            }
        }
        window.onkeyup = function(event) {};
    }

    function ogarhusettings() {
        var innerWidth = window.innerWidth;
        var innerHeigth = window.innerHeight;
        var helloContainer = $("#helloContainer");
        var helloContainerHeight = helloContainer.innerHeight();
        if (helloContainerHeight > 0) {
            ogario.menuHeight = helloContainerHeight;
        } else {
            helloContainerHeight = ogario.menuHeight || 618;
        }
        var scale = Math.min(1, innerHeigth / helloContainerHeight);
        var top = helloContainerHeight * scale;
        var resizeTop = Math.round(innerHeigth / 2 - 0.5 * top);
        var transform = "translate(-50%, 0%) scale(" + scale + ")";
        helloContainer.css("transform", transform);
        helloContainer.css("-ms-transform", transform);
        helloContainer.css("-webkit-transform", transform);
        helloContainer.css("top", resizeTop + "px");
        ogario.innerW = innerWidth;
        ogario.innerH = innerHeigth;
    }

    function resetonkeydown() {
        if (application.protocolMode) {
            return;
        }
        window.onkeydown = event => {};
    }
    document.onkeydown = function(event) {
        var pressedKey = hotkeysSetup.getPressedKey(event);
        if (('INPUT' !== event.target.tagName || event.target.className === hotkeysSetup.inputClassName || pressedKey === hotkeys['spec-messageKey']) && '' !== pressedKey && !keyBlind[pressedKey]) {
            if (keyBlind[pressedKey] = true, 'ESC' === pressedKey) return event.preventDefault(), void(application && application.showMenu());
            if (event.target.className === hotkeysSetup.inputClassName) return event.preventDefault(), void hotkeysSetup.setHotkey(pressedKey, event.target.id);
            if (hotkeys[pressedKey]) {
                event.preventDefault();
                var i = hotkeys[pressedKey];
                '' !== i && hotkeysCommand[i] && hotkeysCommand[i].keyDown && hotkeysCommand[i].keyDown();
            }
        }
    }
    document.onkeyup = function(event) {
        var pressedKey = hotkeysSetup.getPressedKey(event);
        if ('' !== pressedKey) {
            if (hotkeys[pressedKey]) {
                var key = hotkeys[pressedKey];
                if ('' !== key && hotkeysCommand[key] && hotkeysCommand[key].keyUp) {
                    hotkeysCommand[key].keyUp();
                }
            }
            keyBlind[pressedKey] = false;
        }
    }
    window.onmousedown = function(event) {
        if (!$("#overlays").is(":visible")) {
            if (2 == event.which) {
                event.preventDefault();
                if (application) {
                    application.sendCommand(10);
                }
            } else {
                if (defaultmapsettings.mouseSplit && (1 == event.which && !defaultmapsettings.mouseInvert || 3 == event.which && defaultmapsettings.mouseInvert)) {
                    event.preventDefault();
                    if (application) {
                        application.split();
                    }
                }
                if (defaultmapsettings.mouseFeed && (3 == event.which && !defaultmapsettings.mouseInvert || 1 == event.which && defaultmapsettings.mouseInvert)) {
                    event.preventDefault();
                    if (application) {
                        application.macroFeed(true);
                    }
                }
            }
        }
    }
    window.onmouseup = function(event) {
        if (defaultmapsettings.mouseFeed) {
            if (3 == event.which && !defaultmapsettings.mouseInvert || 1 == event.which && defaultmapsettings.mouseInvert) {
                application && application.macroFeed(false);
            }
        }
    };
    window.onbeforeunload = function(event) {
        if (ogario.play) {
            return textLanguage.exit;
        } else {
            return;
        }
    };
    window.changeHistory = function(value) {
        if (window.history && window.history.replaceState) {
            window.history.replaceState({}, window.document.title, value);
        };
    }
    window.changeUrl = function() {
        if (window.location.pathname === `/legendmod`) {
            changeHistory(`/${window.location.hash}`);
        };
    }

    ogario = LM;

    //LMbuffer = t('buffer')['Buffer'];
    //window.LMbuffer=LMbuffer; //buffer 3
    //LZ4 = t('lz4'); 
    //window.LZ4=LZ4; //LZ4 18
    if ('/legendmod' === window.location.pathname) {
        changeUrl('/' + window.location.hash);
    }
    window.onresize = function() {
        drawRender.resizeCanvas();
        ogarhusettings();
    };
    spectateBlind();

    function Node(view, offset) {
        this.view = view;
        this.offset = offset;
        this.contentType = 1;
        this.uncompressedSize = 0;
        this.setContentType = function() {
            this.contentType = this.readUint32();
        };
        this.setUncompressedSize = function() {
            this.uncompressedSize = this.readUint32();
        };
        this.compareBytesGt = (bytes1, bytes2) => {
            const byte_1 = bytes1 < 0;
            const byte_2 = bytes2 < 0;
            if (byte_1 != byte_2) {
                return byte_1;
            }
            return bytes1 > bytes2;
        };
        this.skipByte = function() {
            const read = this.readByte();
            if (read < 128) {
                return;
            }
            this.skipByte();
        };
        this.readByte = function() {
            return this.view.getUint8(this.offset++);
        };
        this.readUint32 = function() {
            let number = 0;
            let mayor = 0;
            while (true) {
                const read = this.readByte();
                if (this.compareBytesGt(32, mayor)) {
                    if (read >= 128) {
                        number |= (read & 127) << mayor;
                    } else {
                        number |= read << mayor;
                        break;
                    }
                } else {
                    this.skipByte();
                    break;
                }
                mayor += 7;
            }
            return number;
        };
        this.readFlag = function() {
            return this.readUint32() >>> 3;
        };
    }
    window.core = {
        //'connect': function(url) {
		connect(url) {	
            LM.connect(url);
            //LM.connect(url); //for multibox with new Protocol and Client
        },
        disconnect() {},
        sendNick(nick) {
            LM.sendNick(nick);
        },
        sendSpectate() {
            LM.sendSpectate();
        },
        eject() {
            LM.sendEject();
            window.lastejected = true;
        },
        split() {
            LM.sendSplit();

        },
        specialOn() {
            LM.sendFreeSpectate();
        },
        specialOff() {
            LM.sendFreeSpectate();
        },
        sendFbToken(token) {
            LM.sendFbToken(token);
        },
        sendGplusToken(token) {
            LM.sendGplusToken(token);
        },
        recaptchaHandlerResponse(token) {
            if (window.botscaptcha == true) {
                setTimeout(function() {
                    core.recaptchaBotResponse(token);
                }, 100);
            } else {
                core.recaptchaResponse(token);
            }
        },
        recaptchaResponse(token) {
            window.lastRecaptchaResponseToken = token;
            LM.sendRecaptcha(token);
        },
        recaptchaBotResponse(token) {
            window.lastRecaptchaResponseToken = token;
            window.botscaptcha = false;
            //toastr.info('Captcha token sent to node.js', token)
            toastr.info('<b>[SERVER]:</b> Thank you for solving Captcha for bots')
            window.connectionBots.send(window.buffers.captchatoken(token))
        },
        setClientVersion(version, strVersion) {
            LM.setClientVersion(version, strVersion);
        },
        proxyMobileData(arr = []) {
            if (!Array.isArray(arr)) {
                console.log("\x1b[32m%s\x1b[34m%s\x1b[0m", consoleMsgLM, " ProxyMobileData ERROR: Array data required.");
                return;
            }
            if (arr[0] == 8) {
                arr.unshift(102);
            }
            arr = new Uint8Array(arr);
            LM.sendMessage(new DataView(arr.buffer));
        },
        registerSkin(a, b, c, d) {
            window.customskinsname = a;
            window.customskinsurl = c;
        },
        //lulko
        playerHasCells() {
            return Connection.playerCells.length > 0
        },
        //lulko
        proxy(data) {
            if (!Array.isArray(data)) {
                console.log('Proxy ERROR: Array data required.');
                return;
            }
            if (data[0] == 8) {
                data.unshift(102);
            }
            data = new Uint8Array(data);
            LM.sendBuffer(new DataView(data.buffer));
        }
    };
    window.master.getClientVersion();
    Settings.init();
    application.init();
    application.getDefaultSettings();
    application.connect();
    hotkeysSetup.init();
    LM.init();
    drawRender.init();
    window.master.init();
    ogarhusettings();
    setGUIEvents();
    //    })(ogario);
}

function setGUIEvents() {
    document.getElementById('botsAmount').addEventListener('keypress', e => {
        e.preventDefault()
    })
    var storedbotsRemoteIP = localStorage.getItem("localstoredBotsRemoteIP");
    if (storedbotsRemoteIP == null || storedbotsRemoteIP == "") {
        storedbotsRemoteIP = "ws://localhost:1337";
    }
    var captchaSpeed = localStorage.getItem("captchaSpeed");
    $('#captchaSpeed').val(captchaSpeed)
    window.bots.remoteIP = storedbotsRemoteIP
    window.SERVER_HOST = storedbotsRemoteIP;
    $('#botsRemoteIP').val(storedbotsRemoteIP)
    var storedbotsname = localStorage.getItem("localStoredBotsName");
    if (storedbotsname == null || storedbotsname == "") {
        storedbotsname = "Legendmod|ml";
    }
    window.bots.nameLM = storedbotsname;
    $('#botsNameLM').val(storedbotsname)
    var storedbotsamount = localStorage.getItem("localStoredBotsAmount");
    if (storedbotsamount == null || storedbotsamount == "") {
        storedbotsamount = 50;

    }
    window.bots.amount = storedbotsamount;
    $('#botsAmount').val(storedbotsamount)
    document.getElementById('captchaSpeed').addEventListener('change', function() {
        localStorage.setItem('captchaSpeed', $('#captchaSpeed').val())
    })
    document.getElementById('botsRemoteIP').addEventListener('change', function() {
        window.bots.remoteIP = this.value
        localStorage.setItem('localstoredBotsRemoteIP', window.bots.remoteIP)
        window.SERVER_HOST = window.bots.remoteIP
    })
    document.getElementById('botsNameLM').addEventListener('change', function() {
        window.bots.nameLM = this.value
        localStorage.setItem('localStoredBotsName', window.bots.nameLM)
    })
    document.getElementById('botsAmount').addEventListener('change', function() {
        window.bots.amount = Number(this.value)
        localStorage.setItem('localStoredBotsAmount', window.bots.amount)
    })
    document.getElementById('connectBots').addEventListener('click', () => {
        if ($('#pushCaptchaBots').is(':checked')) {
            window.connectionBots.send(window.buffers.captchabots((window.bots.amount).toString()))
            //toastr.info('<b>[SERVER]:</b> Bot pushed')
        } else {
            if (!window.connectionBots.ws || window.connectionBots.ws.readyState !== WebSocket.OPEN) window.connectionBots.connect()
        }
    })
    document.getElementById('startBots').addEventListener('click', () => {
        if (legendmod.ws && window.EnvConfig.configVersion && window.master.clientVersion && !window.userBots.startedBots) {
            if (legendmod.gameMode == ":party" || window.AdminRights == 1 || window.IamNeo == true) {
                if (window.bots.amount <= 199) {
                    if (window.bots.nameLM && window.bots.amount && window.getComputedStyle(document.getElementsByClassName('btn-login-play')[0]).getPropertyValue('display') === 'none') {
                        //window.connectionBots.send(window.buffers.startBots(legendmod.ws, window.gameBots.protocolVersion, window.gameBots.clientVersion, window.userBots.isAlive, window.unescape(window.encodeURIComponent(window.bots.nameLM)), window.bots.amount))
                        window.connectionBots.send(window.buffers.startBots(legendmod.ws, window.gameBots.protocolVersion, window.gameBots.clientVersion, window.userBots.isAlive, window.unescape(window.encodeURIComponent(window.bots.nameLM)), window.bots.amount))
                        //window.connectionBots.send(window.buffers.startBots(legendmod.ws, window.gameBots.protocolVersion, window.gameBots.clientVersion, window.userBots.isAlive, window.botsSpawncode[window.botsSpawncodeNum], window.bots.amount))
                        if (window.LatestBotsVersion) {
                            $('#handleCaptchaBotsAreaSettings').show();
                        }
                    } else toastr.info('<b>[SERVER]:</b> Bots name, amount and user login are required before starting the bots')
                } else toastr.info('<b>[SERVER]:</b> Bots Max amount is 199')
            } else {
                toastr.info('<b>[SERVER]:</b> Party bots only available for Party mode')
            }
        }
    })
    document.getElementById('captchaBots').addEventListener('click', () => {
        toastr.info('<b>[SERVER]:</b> 100000 captcha tokens requested, some lag from proccessing will be created. <br><b>If captcha tokens stop, create again tokens</b>');
        window.RequestedTokens = 100000;
        legendmod.sendTokenForBots();
        //legendmod.sendTimeOutTokenForBots();
    })
    document.getElementById('stopBots').addEventListener('click', () => {
        if (window.userBots.startedBots) window.connectionBots.send(new Uint8Array([1]).buffer)
    })
    $('#handleCaptchaBots').click(function() {
        if (this.checked) {
            window.connectionBots.send(new Uint8Array([11]).buffer)
            $('#solveCaptchaBots').removeAttr("disabled")
            $('#pushCaptchaBots').removeAttr("disabled")
        } else {
            window.connectionBots.send(new Uint8Array([12]).buffer)
            $('#solveCaptchaBots').prop('checked', false)
            $('#pushCaptchaBots').prop('checked', false)
            $('#solveCaptchaBots').attr("disabled", true);
            $('#pushCaptchaBots').attr("disabled", true);
            document.getElementById('connectBots').innerText = 'Connect'
            document.getElementById('connectBots').style.color = 'white'

        }
    })
    $('#solveCaptchaBots').click(function() {
        if (this.checked) {
            window.connectionBots.send(new Uint8Array([13]).buffer)
        } else {
            window.connectionBots.send(new Uint8Array([14]).buffer)
        }
    })
    $('#pushCaptchaBots').click(function() {
        if (this.checked) {
            document.getElementById('connectBots').innerText = 'Push a captcha bot'
            document.getElementById('connectBots').style.color = 'yellow'
            window.connectionBots.send(new Uint8Array([15]).buffer)
        } else {
            window.connectionBots.send(new Uint8Array([16]).buffer)
            document.getElementById('connectBots').innerText = 'Connect'
            document.getElementById('connectBots').style.color = 'white'

        }
    })
}


function minimapCell(envId, cb, i, s) {
    this.id = envId;
    this.nick = cb;
    this.skinID = i;
    this.skinURL = s;
    this.lbgpi = -1; //Sonia4
    this.x = 0;
    this.y = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.mass = 0;
    this.clanTag = "";
    this.color = null;
    this.customColor = defaultSettings.miniMapTeammatesColor;
    this.alive = false;
    this.updateTime = null;
    this.pi2 = 2 * Math.PI;
    this.setColor = function(i, inRevIdx) {
        this.color = i;
        if (7 == inRevIdx.length) {
            this.customColor = inRevIdx;
        }
    };
    this.drawPosition = function(options, margin, mult, startcode, endcode, value) {
        if (!(!this.alive || startcode && endcode && this.id != endcode)) {
            /*
            var isPositionOK=false;
            var flag=false;
            for (var e = 0; e < legendmod.ghostCells.length; e++){ 				
            	if (window.predictedGhostCells[e] && legendmod.leaderboard[e] && this.nick == legendmod.leaderboard[e].nick){
            		flag=true;	
            		this.lastX = window.predictedGhostCells[e].x;
            		this.lastY = window.predictedGhostCells[e].y;
            		isPositionOK = true;
            	}
            }
            if ( (flag==false && this.lbgpi >= 0) || legendmod.gameMode == ":party"){
            	isPositionOK = true;									
            }	
            
            */
            this.lastX = (29 * this.lastX + this.x) / 30;
            this.lastY = (29 * this.lastY + this.y) / 30;

            //if (isPositionOK){
            var w = (this.lastX + margin) * mult;
            var h = (this.lastY + margin) * mult;
            if (this.nick.length > 0) {
                options.font = defaultSettings.miniMapNickFontWeight + " " + defaultSettings.miniMapNickSize + "px " + defaultSettings.miniMapNickFontFamily;
                options.textAlign = "center";
                var namead = "";
                if (this.lbgpi < 0) namead += " [ℵ]";
                if (defaultSettings.miniMapNickStrokeSize > 0) {
                    options.lineWidth = defaultSettings.miniMapNickStrokeSize;
                    options.strokeStyle = defaultSettings.miniMapNickStrokeColor;

                    options.strokeText(this.nick + namead, w, h - (2 * defaultSettings.miniMapTeammatesSize + 2));
                }
                options.fillStyle = defaultSettings.miniMapNickColor;
                options.fillText(this.nick + namead, w, h - (2 * defaultSettings.miniMapTeammatesSize + 2));
            }
            options.beginPath();
            options.arc(w, h, defaultSettings.miniMapTeammatesSize, 0, this.pi2, false);
            options.closePath();
            if (defaultmapsettings.oneColoredTeammates) {
                options.fillStyle = defaultSettings.miniMapTeammatesColor;
            } else {
                options.fillStyle = value;
            }
            options.fill();
            //}
        }
    };
}
            setTimeout(function() {
                toastr.warning("<b>[" + Premadeletter123 + "]:</b> " + "Welcome to my custom mod");
            }, 5000);
/*
var snezSocketdata;
var snezSocket = new WebSocket("wss://connect.websocket.in/3Q-SoniaSLG_453dsV?room_id=123");

snezSocket.onmessage = function(message) { 
snezSocketdata = JSON.parse(message.data); 
console.log(message.data);
}


snezSocket.send(JSON.stringify({ "command": "sendPlayerSkinURL", nick: ogarcopythelb.nick, token: application.serverToken, tag: ogarcopythelb.clanTag, skin: ogarcopythelb.skinURL, color: ogarcopythelb.color}));



*/
