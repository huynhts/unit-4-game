$(document).ready(function(){
var wins = 0;
var losses = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var collectedCrystals = 0;
var crystalRandom = [];
var cpuNum = 0;

var clickCrystal = true;

//initiates game
cpuCollection();

//this function compares the users collected crystals to the target cpuNumber. It will refresh the game if the collected Crystal value matches or is greater than the cpuNum
function evaluateCrystals() {
    if (collectedCrystals === cpuNum) {
        wins++;
        resetVals();
        cpuCollection();
        $('#second-number').text('0');
        $('#wins').text('Wins: ' + wins);
    } else if (collectedCrystals > cpuNum) {
        losses ++;
        resetVals();
        cpuCollection();
        $('#second-number').text('0');
        $('#losses').text('Losses: ' + losses);
    }
}

//this function resets the game each time player wins/losses
function resetVals() {
     crystal1 = 0;
     crystal2 = 0;
     crystal3 = 0;
     crystal4 = 0;
     collectedCrystals = 0;
     crystalRandom = [];
     cpuNum = 0; 
     clickCrystal = true;
}

//on first click of any crystal, this function will assign the cpu number and also a random number for each crystal
function cpuCollection(){
    $('.crystal').on('click', function() {
        if (clickCrystal) {
            cpuNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $('#first-number').text(cpuNum);
            for (var i = 0; i < 4; i++) {
                var userRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

                crystalRandom.push(userRandom);
            }
            
            crystal1 = crystalRandom[0];
            crystal2 = crystalRandom[1];
            crystal3 = crystalRandom[2];
            crystal4 = crystalRandom[3];
            clickCrystal = false;

        }
    })
}

    //this on click adds crystals to user collection and compares collection against the CPU crystal value
    $('#crystal-1').on('click', function() {
        collectedCrystals += crystal1;
        $('#second-number').text(collectedCrystals);
        evaluateCrystals();
    });

    $('#crystal-2').on('click', function() {
        collectedCrystals += crystal2;
        $('#second-number').text(collectedCrystals);
        evaluateCrystals();
    });

    $('#crystal-3').on('click', function() {
        collectedCrystals += crystal3;
        $('#second-number').text(collectedCrystals);
        evaluateCrystals();
    });

    $('#crystal-4').on('click', function() {
        collectedCrystals += crystal4;
        $('#second-number').text(collectedCrystals);
        evaluateCrystals();
    });
    


































})