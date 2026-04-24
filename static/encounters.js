// hour counter
    const maxHoursSun = 15;
    const maxHoursNight = 9;
    const maxPartystamina = 15;
    let currentSunlight = maxHoursSun;
    let partyStamina = 15;
    
    let hoursTilSunrise = maxHoursNight;

//start off with 15
document.getElementById("hourHolder").value = maxHoursSun
document.getElementById("nightHolder").value = maxHoursNight


//function

function advanceTime(){

    //advance time===========
    const sunlightElement = document.getElementById("hourHolder");
    currentSunlight = parseInt(sunlightElement.value); // Get the actual value


    var campMessage = document.getElementById("campMessage");

    if(currentSunlight > 0){

        //weather=================================================
        fetch('/api/weather')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length)
            const weather = String(data[randomIndex][1])
        document.getElementById('weather').innerHTML = 'Current Weather: ' + weather
        });
        //=========================================================

        
        // terrain =====================================================  
        fetch('/api/terrain')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length)
            const terrain = String(data[randomIndex][1])

            document.getElementById('terrain').innerHTML = 'Current Terrain: ' + terrain

            // party speed =====================================================
            let weatherBuff = 0;
            let terrainBuff = 0;
        
        // weather switch =====================================================
        switch(weather){
            case 'Rainy':
                weatherBuff = 1;
                break;
            case 'Foggy':
                weatherBuff = 1;
                break;
            
            case 'Thunderstorm':
                weatherBuff = 2;
                break;
            case 'Snowy':
                weatherBuff = 2;
                break;
            
            case 'Blizzard':
                weatherBuff = 3;
                break;
        }// =====================================================

        // terrain switch =====================================================
        switch(terrain){
            case 'Flat':
                terrainBuff = 0;
                break;
            case 'Rugged':
                terrainBuff = 2;
                break;
        };
        // =====================================================

        let partySpeed = 4 - (weatherBuff + terrainBuff);
        

        document.getElementById('partySpeed').innerHTML = 'Party Speed: ' + partySpeed;
        document.getElementById('partyStamina').innerHTML = 'Party Stamina: ' + partyStamina;
        });



    // encounter =======================================================
        fetch('/api/encounter')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const encounter = String(data[randomIndex][1]);
        document.getElementById('encounter').innerHTML = 'Encounter Type: ' + encounter

            switch (encounter){
                case 'Ancient Clue':
                    fetch('/api/ancientClue')
                    .then(response => response.json())
                    .then(data => {
                    const randomClue = Math.floor(Math.random() * data.length);
                    const clue = data[randomClue][1];
                    document.getElementById('encounterMsg').innerHTML = clue;
                    });
                break;
                
            case 'Natural Resource':
                fetch('/api/naturalResource')
                .then(response => response.json())
                .then(data => {
                const randomRes = Math.floor(Math.random() * data.length);
                const natRes = data[randomRes][1];
                document.getElementById('encounterMsg').innerHTML =  natRes;
                });
                break;
            
            case 'Combat':
                fetch('/api/combatant')
                .then(response => response.json())
                .then(data => {
                const randomCombat = Math.floor(Math.random() * data.length);
                const combatant = data[randomCombat][1];
                document.getElementById('encounterMsg').innerHTML =  combatant;
                });
                break;
            
            case 'Convoy':
                fetch('/api/Convoy')
                .then(response => response.json())
                .then(data => {
                const randomConvoy = Math.floor(Math.random() * data.length);
                const convoy = data[randomConvoy][1];
                document.getElementById('encounterMsg').innerHTML =  convoy;
                });
                break;
            //case 'Social':
                
        }; // end encounter switch
        


    // ======================================================
        currentSunlight--;  // Decrease the value
        sunlightElement.value = currentSunlight; // Set the new value
        partyStamina--;
    });
}else if (currentSunlight == 0){
    document.getElementById("nightCounter").hidden = false;
    document.getElementById("encounter").hidden = true;
    document.getElementById("encounterMsg").hidden = true;
    document.getElementById('partySpeed').innerHTML = "Camped for the night";
    
    hoursTilSunrise--;
    document.getElementById("nightHolder").value = hoursTilSunrise;

    if(hoursTilSunrise == 0){
    currentSunlight = maxHoursSun;
    hoursTilSunrise = maxHoursNight;
    partyStamina = maxPartystamina;  // set directly instead of incrementing
    document.getElementById("hourHolder").value = maxHoursSun;
    document.getElementById("nightHolder").value = maxHoursNight;
    document.getElementById("nightCounter").hidden = true;
    document.getElementById("encounter").hidden = false;
    document.getElementById("encounterMsg").hidden = false;
    document.getElementById("partyStamina").innerHTML = 'Party Stamina: ' + partyStamina;
}
}

}// end advance time

function restart(){
    partyStamina = 15;
    currentSunlight = 15;
    document.getElementById('weather').innerHTML = '';
    document.getElementById('terrain').innerHTML = '';
    document.getElementById('partySpeed').innerHTML = '';
    document.getElementById('encounter').innerHTML = '';
    document.getElementById('encounterMsg').innerHTML = '';
    document.getElementById("hourHolder").value = maxHoursSun;
    document.getElementById("campMessage").innerHTML = '';
    document.getElementById("partyStamina").innerHTML = '';
    document.getElementById("nightCounter").hidden = true;
    
}