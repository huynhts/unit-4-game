$(document).ready(function(){
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var crystalRandom = [];
var cpuNum = 0;

var clickCrystal = true;
var totalsMatch = false;

//on first click of any crystal, this function will assign the cpu number and also a random number for each crystal
$('.crystal').on('click', function() {
    if (clickCrystal) {
        cpuNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $('#first-number').text(cpuNum);
        console.log(cpuNum);
        for (var i = 0; i < 4; i++) {
            var userRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

            crystalRandom.push(userRandom);
        }
        
        crystal1 = crystalRandom[0];
        crystal2 = crystalRandom[1];
        crystal3 = crystalRandom[2];
        crystal4 = crystalRandom[3];
        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);
        clickCrystal = false;
    }
})

































})