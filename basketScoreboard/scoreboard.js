let scoreLoc = 0,
    scoreVisit = 0;
let foulLoc = 0,
    foulVisit = 0;
let possession = 0;

let inMatch = false;
let beforeMatch = true;
let timeoutLoc = 0,
    timeoutVisit = 0;

//timer elements
let [seconds, minutes] = [0, 10];
let timerScreen = document.querySelector('.screen');
let timerVariable = null;
let timerInput = document.getElementById("new_time_value")
const changePossessionButton = document.getElementById("change_possession");
const [scoreLocDiv, scoreVisitDiv] = document.querySelectorAll(".score");
const [foulCounterLocDiv, foulCounterVisitDiv] = document.querySelectorAll(".foul_counter");
let [locList, visitList] = document.querySelectorAll(".player_list");
const playersLists = document.querySelectorAll(".players-list");

const [locTimeout, visitTimeout] = document.querySelectorAll(".timeout");
const submitPlayerVisit = document.getElementById("set_player_visit");
const submitPlayerLoc = document.getElementById("set_player_loc");
const setTimer = document.getElementById("set-time");
const possessionTeam = document.querySelectorAll("possessionTeam");
const switchButton = document.getElementById("switch");
const [nbPlayerLoc, nbPlayerVisit] = document.querySelectorAll(".nb_player");
const [namePlayerLoc, namePlayerVisit] = document.querySelectorAll(".name_player");
const boutonResetScoreboard = document.querySelector(".reset-all-button");
const numbersToReset = document.querySelectorAll(".to-reset");
const variables = [scoreLoc, scoreVisit, scoreLocDiv, scoreVisitDiv, foulLoc, foulVisit, possession, inMatch];
const textToClr = document.querySelectorAll(".to-clr");
const timeoutButtons = document.querySelectorAll("timeout-value");
const [locTeamName, visitTeamName] = document.querySelectorAll(".team-name");




timerScreen.innerHTML = timerInput.value;


switchButton.addEventListener("click", () => {
    if (!inMatch && beforeMatch) {
        inMatch = !inMatch;
        beforeMatch = !beforeMatch;
        document.querySelector(".in-match").classList.remove("hidden");
        document.querySelector(".before-match").classList.add("hidden");
    } else if (inMatch && !beforeMatch) {
        inMatch = !inMatch;
        beforeMatch = !beforeMatch;
        document.querySelector(".in-match").classList.add("hidden");
        document.querySelector(".before-match").classList.remove("hidden");
    }
    playersLists.classList.add(".in-match");

});




document.querySelectorAll(".logo").forEach(logo => {
    if (logo.classList.contains("loc")) {
        console.log(logo)
    }
})

document.getElementById("set_time").addEventListener("submit", e => {
    e.preventDefault();
    console.log(document.getElementById("new_time_value").value)
});

document.getElementById("set_name_loc").addEventListener("submit", e => {
    e.preventDefault();
    const value = document.getElementById("name_loc").value ? document.getElementById("name_loc").value : "Locaux"
    locTeamName.innerHTML = value;
    console.log(value)
    console.log("Locaux: " + value);
});


document.getElementById("set_name_visit").addEventListener("submit", e => {
    e.preventDefault();
    const value = document.getElementById("name_visit").value ? document.getElementById("name_visit").value : "visiteurs"
    visitTeamName.innerHTML = value;
    console.log(value)
    console.log("visiteurs: " + value);
});

function add(side, amount) {
    if (side === 'loc') {
        scoreLoc += amount;
        if (scoreLoc < 0) {
            scoreLoc = 0;
        } else { scoreLocDiv.innerHTML = scoreLoc; }


    } else if (side === 'visit') {
        if (scoreVisit < 0) {
            scoreVisit = 0;
        } else { scoreVisitDiv.innerHTML = scoreVisit; }
    }

    console.log(side, amount)

}

function foulCounter(side, amount) {
    if (side === "loc") {
        foulLoc += amount;
        if (foulLoc < 6) {
            foulCounterLocDiv.innerHTML = foulLoc;
        }
        //console.log(foulLoc);

    }
    if (side === "visit") {
        foulVisit += amount;
        if (foulVisit < 6) {
            foulCounterVisitDiv.innerHTML = foulVisit;
        }
        //console.log(foulVisit);

    }
}

submitPlayerLoc.addEventListener("submit", e => {
    e.preventDefault();
    let number = nbPlayerLoc.value;
    let name = namePlayerLoc.value;
    let li = document.createElement("li");
    li.innerHTML = name + ' ' + number;
    if (number) { locList.appendChild(li); }
    nbPlayerLoc.value = "";
    namePlayerLoc.value = "";



});

nbPlayerLoc.addEventListener('invalid', e => {
    e.preventDefault();
})
submitPlayerVisit.addEventListener("submit", e => {
    e.preventDefault();
    let number = nbPlayerVisit.value;
    let name = namePlayerVisit.value;
    let li = document.createElement("li");
    li.innerHTML = name + ' ' + number;
    if (number) { visitList.appendChild(li); }
    nbPlayerVisit.value = "";
    namePlayerVisit.value = "";
});
//probleme ici
changePossessionButton.addEventListener("click", () => {
    possession = !possession;
    console.log(possession);
    console.log(document.querySelectorAll("possessionTeam").innerHTML);
    if (possession) { document.querySelectorAll("possessionTeam").innerHTML = "LOCAUX" } else { document.querySelectorAll("possessionTeam").innerHTML = "VISITEURS" };
});

boutonResetScoreboard.addEventListener("click", () => {
    console.log("RESET");
    numbersToReset.forEach((field) => {
        field.innerHTML = "0";
    });
    textToClr.forEach((text) => {
        text.innerHTML = "";
    });
    variables.forEach((variable) => {
        variable = 0;
    });
    beforeMatch = 0;
});




function timeoutValue(count, team) {
    if (team === "loc" && timeoutLoc < 3 && count == +1) {
        timeoutLoc += count;
        locTimeout.innerHTML = timeoutLoc;
    } else if (team === "loc" && timeoutLoc > 0 && count == -1) {
        timeoutLoc += count;
        locTimeout.innerHTML = timeoutLoc;
    } else if (team === "visit" && timeoutVisit < 3 && count == +1) {
        timeoutVisit += count;
        console.log(timeoutVisit);
        visitTimeout.innerHTML = timeoutVisit;
    } else if (team === "visit" && timeoutVisit > 0 && count == -1) {
        timeoutVisit += count;
        visitTimeout.innerHTML = timeoutVisit;
    }
}


//partie timer 
function displayTimer() {
    seconds -= 1;
    if (seconds < 0) {
        seconds = 0;
    }
    if (seconds == 0) {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (minutes == 0) {
            clearInterval(timerVariable);
        }
    }



    console.log(seconds, minutes);
    let displayMinutes = minutes;
    let displaySeconds = seconds;
    if (minutes < 10) {
        displayMinutes = '0' + minutes;
    }
    if (seconds < 10) {
        displaySeconds = '0' + seconds;
    }
    timerScreen.innerHTML = displayMinutes + ':' + displaySeconds;

}

document.querySelector('.start-timer').addEventListener('click', () => {
    console.log(setTimer);
    if (timerVariable !== null) {
        clearInterval(timerVariable);
    }
    timerVariable = setInterval(displayTimer, 1000);
});

document.querySelector('.stop-timer').addEventListener('click', () => {
    clearInterval(timerVariable);
});


document.querySelector('.reset-timer').addEventListener('click', () => {
    clearInterval(timerVariable);
    [seconds, minutes] = [0, 10];
    timerScreen.innerHTML = '10:00';
});

setTimer.addEventListener('submit', () => {
    console.log('set');
    timerInput.value = '';
    let displayMinutes = minutes;
    let displaySeconds = seconds;
    if (minutes < 10) {
        displayMinutes = '0' + minutes;
    }
    if (seconds < 10) {
        displaySeconds = '0' + seconds;
    }

    timerScreen.innerHTML = displayMinutes + ':' + displaySeconds + ':' + displayMilliseconds;
});