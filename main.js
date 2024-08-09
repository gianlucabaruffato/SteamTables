// var URL = 'https://api.npoint.io/719d2c276f0f411e853b';
var URL = 'https://api.jsonstorage.net/v1/json/e5512e35-5f39-4497-a9d4-46fdc4777b0d/a47a494f-79c8-41bf-ad29-e6d300624389'

const variablesTemp = ['Psat', 'hf', 'hfg', 'hg', 'sf', 'sfg', 'sg', 'uf', 'ufg', 'ug', 'vf', 'vg'];
const variablesPres = ['Tsat', 'hf', 'hfg', 'hg', 'sf', 'sfg', 'sg', 'uf', 'ufg', 'ug', 'vf', 'vg'];
const variablesOverP = ['v' ,'u', 'h', 's'];
const overheatedPresList = ['0.01', '0.05', '0.10', '0.20', '0.30', '0.40', '0.50', '0.60', '0.80', '1.00', '1.20', '1.40',
'1.60', '1.80', '2.00', '2.50', '3.00', '3.50', '4.0', '4.5', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '12.5', '15.0', '17.5', '20.0', '25', '30', '35', '40', '50', '60']

async function fetchJson(URL){
  let response = await fetch(URL);
  dataJson = await response.json();

  return dataJson;
}


async function displayJson(){
  console.log(await fetchJson(URL));
}

displayJson();

function inputTemp(){
  document.getElementById("input_type").innerHTML = `
  <div class="input-group mb-3" >
  <span class="input-group-text">Temperature</span>
  <input type="number" step="0.01" min="0" max="999999" class="form-control"  id="inputTemp" aria-label="Text input with dropdown button" >
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownTemp">°C</button>
  <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" onclick="changeTempUnit('C')">°C</a></li>
      <li><a class="dropdown-item" onclick="changeTempUnit('F')">°F</a></li>
  </ul>
  </div>
  <input class="btn btn-success" type="submit" value="Submit" onclick="submitTemp()">

  `;
  document.getElementById("results").innerHTML = 'Please, input values to show results.'
}

function inputPres(){
  document.getElementById("input_type").innerHTML = `


  <div class="input-group mb-3" >
    <span class="input-group-text">Pressure</span>
    <input type="number" step="0.01" min="0" max="999999" class="form-control"  id="inputPres" aria-label="Text input with dropdown button">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownPres">kPa</button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" onclick="changePresUnit('kpa')">kPa</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('kg')">kg/cm²</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('bar')">bar</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('PSI')">PSI</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('kpa G')">kPa G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('kg G')">kg/cm² G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('bar G')">bar G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('PSI G')">PSI G</a></li>
    </ul>
  </div>
  <input class="btn btn-success" type="submit" value="Submit" onclick="submitPres()">
  `;
  document.getElementById("results").innerHTML = 'Please, input values to show results.'
}

function inputOver(){
  document.getElementById("input_type").innerHTML = `

  <div class="input-group mb-3" >
    <span class="input-group-text">Temperature</span>
    <input type="number" step="0.01" min="0" max="999999" class="form-control"  id="inputTemp" aria-label="Text input with dropdown button" >
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownTemp">°C </button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" onclick="changeTempUnit('C')">°C</a></li>
        <li><a class="dropdown-item" onclick="changeTempUnit('F')">°F</a></li>
    </ul>
  </div>

  <div class="input-group mb-3" >
    <span class="input-group-text">Pressure</span>
    <input type="number" step="0.01" min="0" max="999999" class="form-control"  id="inputPres" aria-label="Text input with dropdown button">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownPres">MPa</button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" onclick="changePresUnit('MPa')">MPa</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('kg')">kg/cm²</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('bar')">bar</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('PSI')">PSI</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('MPa G')">MPa G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('kg G')">kg/cm² G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('bar G')">bar G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('PSI G')">PSI G</a></li>
    </ul>
  </div>
  <input class="btn btn-success" type="submit" value="Submit" onclick="submitOverheated()">
  `
  document.getElementById("results").innerHTML = 'Please, input values to show results.'
}

function inputEntropyTemp(){
  document.getElementById("input_type").innerHTML = `
  <div class="input-group mb-3" >
    <span class="input-group-text">Temperature</span>
    <input type="number" step="0.01" min="0" max="999999" class="form-control"  id="inputTemp" aria-label="Text input with dropdown button" >
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownTemp">°C </button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" onclick="changeTempUnit('C')">°C</a></li>
        <li><a class="dropdown-item" onclick="changeTempUnit('F')">°F</a></li>
    </ul>
    </div>
  </div>

  <div class="input-group mb-3" >
  <span class="input-group-text">Entropy</span>
  <input type="number" step="0.01" min="0" max="999999" class="form-control"  id="inputEntropy" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownEntropy">kJ/kg*K</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item">kJ/kg*K</a></li>
  </ul>
  </div>
  <input class="btn btn-success" type="submit" value="Submit" onclick="submitEntropyTemp()">
  </div>
  `
  document.getElementById("results").innerHTML = 'Please, input values to show results.'
}

function inputEntropyPres(){
  document.getElementById("input_type").innerHTML = `


  <div class="input-group mb-3" >
    <span class="input-group-text">Pressure</span>
    <input type="number" step="0.01" min="0" max="999999" class="form-control"  id="inputPres" aria-label="Text input with dropdown button">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownPres">kPa</button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" onclick="changePresUnit('kpa')">kPa</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('kg')">kg/cm²</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('bar')">bar</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('PSI')">PSI</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('kPa G')">kPa G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('kg G')">kg/cm² G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('bar G')">bar G</a></li>
      <li><a class="dropdown-item" onclick="changePresUnit('PSI G')">PSI G</a></li>
    </ul>
  </div>

  <div class="input-group mb-3" >
    <span class="input-group-text">Entropy</span>
    <input type="number" step="0.01" min="0" max="999999" class="form-control"  id="inputEntropy" aria-label="Text input with dropdown button">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownEntropy">kJ/kg*K</button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item">kJ/kg*K</a></li>
    </ul>
  </div>
  <input class="btn btn-success" type="submit" value="Submit" onclick="submitEntropyPres()">

  `
  document.getElementById("results").innerHTML = 'Please, input values to show results.'
}

function linealInterp(X1, Y1, X2, Y2, X) {
  const Y3 = Y1 + (X-X1)*(Y2-Y1)/(X2-X1);
  return parseFloat(Y3);
}

function submitTemp(){
  let input = document.getElementById("inputTemp").value;
  let tempUnit = document.getElementById('dropdownTemp').innerText
  
  if (tempUnit == '°F ') {
    input = (input - 32) * 5/9
  }

  // Checks if inputs are correct

  if (input <= 0 || input > 373.95 ) {
    alert(`ERROR: Temperature or pressure values out of range!`)
    return
  }

  if (isNaN(input)) {
    alert(`ERROR: Please complete the fields properly before submitting`)
    return
  }

  for (let i = 0; i < dataJson.Temp.length; i++){
    if (dataJson.Temp[i].T >= input){

      const nextTemp = dataJson.Temp[i].T;
      const prevTemp = dataJson.Temp[i-1].T; 

      let prevVariables = []
      let nextVariables = []
      interpolatedArray = []


      // Aca se podria reemplazar el key variable con un for item in array comun
      for (let [key, variable] of Object.entries(variablesTemp)){
        prevVariables.push(dataJson.Temp[i-1][variable]);
        nextVariables.push(dataJson.Temp[i][variable]);
      }

      console.log(prevVariables);
      console.log(nextVariables);

      // A FUTURO: Revisar aca que pasa si en prev o next falta algun dato
      for (let i = 0; i < prevVariables.length; i++) {
        let interpolatedValue = linealInterp(prevTemp, prevVariables[i], nextTemp, nextVariables[i], input);
        interpolatedArray.push(interpolatedValue);
      }

      // Redondeo de valores interpolados (-2 para no redondear vol specific):
      for (let i = 0; i < interpolatedArray.length-2; i++) {
        interpolatedArray[i] = interpolatedArray[i].toFixed(3);
      }

      for (let i = interpolatedArray.length - 2; i < interpolatedArray.length; i++) {
        interpolatedArray[i] = interpolatedArray[i].toFixed(6);
      }

      console.log(interpolatedArray)
      replaceTempResults()
      break
    }
  }
}

function submitPres(){
  let input = parseFloat(document.getElementById("inputPres").value);
  let presUnit = document.getElementById('dropdownPres').innerText

  // Checks if inputs are correct

  if (isNaN(input)) {
    alert(`ERROR: Please complete the fields properly before submitting`)
    return
  }



  switch (presUnit) {
    case 'kPa':
      break
    case 'kg/cm²':
      input = input*98.07
      break
    case 'bar':
      input = input*100
      break
    case 'PSI':
      input = input*6.895
      break
    case 'kPa G':
      input = input + 101.32
      break
    case 'kg/cm² G':
      input = (input+1.033)*98.07
      break
    case 'bar G':
      input = (input+1.013)*100
      break
    case 'PSI G':
      input = (input+14.69)*6.895
      break
  }

  if (input < 1 || input > 22064 ) {
    alert(`ERROR: Temperature or pressure values out of range!`)
    return
  }

  if (input == 1) {
    input = 1.001
  }

  for (let i = 0; i < dataJson.Pres.length; i++){
    if (dataJson.Pres[i].P >= input){

      const nextPres = dataJson.Pres[i].P;
      const prevPres = dataJson.Pres[i-1].P; 

      let prevVariables = []
      let nextVariables = []
      interpolatedArray = []


      // Aca se podria reemplazar el key variable con un for item in array comun
      for (let [key, variable] of Object.entries(variablesPres)){
        prevVariables.push(dataJson.Pres[i-1][variable]);
        nextVariables.push(dataJson.Pres[i][variable]);
      }

      console.log(prevVariables);
      console.log(nextVariables);

      // A FUTURO: Revisar aca que pasa si en prev o next falta algun dato
      for (let i = 0; i < prevVariables.length; i++) {
        let interpolatedValue = linealInterp(prevPres, prevVariables[i], nextPres, nextVariables[i], input);
        interpolatedArray.push(interpolatedValue);
      }

      // Redondeo de valores interpolados (-2 para no redondear vol specific):
      for (let i = 0; i < interpolatedArray.length-2; i++) {
        interpolatedArray[i] = interpolatedArray[i].toFixed(3);
      }

      for (let i = interpolatedArray.length - 2; i < interpolatedArray.length; i++) {
        interpolatedArray[i] = interpolatedArray[i].toFixed(6);
      }

      console.log(interpolatedArray)

      replacePresResults()
      break
    }
  }
}

function submitOverheated() { // 1 TEMp 2 PRES
  
  let input1 = parseFloat(document.getElementById("inputTemp").value)
  let input2 = parseFloat(document.getElementById("inputPres").value)

  // Input unit conversion
  let inputPresUnit = document.getElementById('dropdownPres').innerText
  let inputTempUnit = document.getElementById('dropdownTemp').innerText

  switch (inputPresUnit) {
    case 'MPa ':
      break
    case 'bar ':
      input2 = input2/10
      break
    case 'kg/cm² ':
      input2 = input2/10.197
      break
    case 'PSI ':
      input2 = input2/145
      break
    case 'MPa G ':
      input2 = input2 + 0.1013
      break
    case 'bar G ':
      input2 = input2 + 1.013
      input2 = input2/10
      break
    case 'kg/cm² G ':
      input2 = input2 + 1.033
      input2 = input2/10.197
      break
    case 'PSI G ':
      input2 = input2 + 14.69
      input2 = input2/145
      break
  }

  switch (inputTempUnit) {
    case '°C ':
      break
    case '°F ':
      input1 = (input1 - 32)*5/9
      break
  }


  // Checks if inputs are correct

  if (input2 > 60 || input2 < 0.01 || input1 > 1300) {
    alert(`ERROR: Temperature or pressure values out of range!`)
    return
  }

  if (isNaN(input1) || isNaN(input2)) {
    alert(`ERROR: Please complete the fields properly before submitting`)
    return
  }

  if (input2 == 0.01) {input2 = 0.010001} // To avoid errors with interpolation

  interpolatedArray = []

  outer_block1: for (let a = 0; a < dataJson.Sobrecal.length; a++) {
  
    for (let i = 1; i <= 3; i++) {
      
      joinedP = ['p', i].join('') 

      let interpolatedPresPrevTempValues = []
      let interpolatedPresNextTempValues = []
      
      if (dataJson.Sobrecal[a][joinedP] >= input2) {

        let nextPres = String(dataJson.Sobrecal[a][joinedP])
        let prevPres = overheatedPresList[overheatedPresList.indexOf(nextPres)-1]
      
        let joinedV = ['v', i].join('') 
        let joinedU = ['u', i].join('') 
        let joinedH = ['h', i].join('') 
        let joinedS = ['s', i].join('') 

        if (i == 1) {
          prevV ='v3'
          prevU ='u3'
          prevH ='h3'
          prevS ='s3'
        } else {
          prevV = ['v', i-1].join('') 
          prevU = ['u', i-1].join('') 
          prevH = ['h', i-1].join('') 
          prevS = ['s', i-1].join('') 
        }

        for (let b = a; b < dataJson.Sobrecal.length; b++) {
          
          let tempInJson = dataJson.Sobrecal[b]['T']

          if (tempInJson == 'Sat.') {
            let ts = ['ts', i-1].join('')
            let tsPlus1 = ['ts', i].join('')
            tempInJson = dataJson.Sobrecal[b][ts]

            // Needed to avoid bugs when interpolating unexisting prev values
            if (input2 < 0.05) {
              tempInJson = 45.81
            }

            let lastSatTemp = parseFloat(tempInJson).toFixed(2)

            console.log(i)

            if (i != 1) {

              let nextSatTemp = dataJson.Sobrecal[b][tsPlus1]
              let satTemp = linealInterp(parseFloat(prevPres), parseFloat(lastSatTemp), parseFloat(nextPres), parseFloat(nextSatTemp), input2)
              interpolatedArray.push(satTemp.toFixed(2))
              console.log(prevPres, lastSatTemp, nextPres, nextSatTemp, input2, satTemp)

            } else {
              
              tempInJson = dataJson.Sobrecal[b][tsPlus1]
              lastSatTemp = parseFloat(tempInJson).toFixed(2)

              for (let d = b-32; d < dataJson.Sobrecal.length; d++) {
                // following try catch necessary because going back 32 rows is not possible at the start of the table
                try {
                  if (dataJson.Sobrecal[d]['p3'] == prevPres) {
                    let prevSatTemp = dataJson.Sobrecal[d]['ts3']
                    console.log(dataJson.Sobrecal[d]['ts3'])
                    let satTemp = linealInterp(parseFloat(prevPres), parseFloat(prevSatTemp), parseFloat(nextPres), parseFloat(lastSatTemp), input2)
                    interpolatedArray.push(satTemp.toFixed(2))
                    console.log(prevPres, prevSatTemp, nextPres, lastSatTemp)
                    break
                  }
                } catch {
                  let prevSatTemp = 99.61
                  let satTemp = linealInterp(parseFloat(prevPres), parseFloat(prevSatTemp), parseFloat(nextPres), parseFloat(lastSatTemp), input2)
                  interpolatedArray.push(satTemp.toFixed(2))
                  console.log(prevPres, prevSatTemp, nextPres, lastSatTemp)
                  break
                }
              }
            }
            
            switch (inputTempUnit) {
              case '°C ':
                tempUnitForHTML = '°C'
                break
              case '°F ':
                let lastSatTempInF = (lastSatTemp*9/5)+32
                interpolatedArray.push(lastSatTempInF.toFixed(2))
                tempUnitForHTML = '°F'
                break
            }
            
            if (input1 < tempInJson) {
              alert(`Input temperature is lower than saturation point (${tempInJson} °C or ${((tempInJson*9/5)+32).toFixed(2)} °F)`)
              break outer_block1
            }
          }      

          if (tempInJson >= input1) {

            prevTemp = dataJson.Sobrecal[b-1]['T']
            nextTemp = dataJson.Sobrecal[b]['T']

            if (prevTemp == 'Sat.') {
              let ts = ['ts', i].join('')
              prevTemp = dataJson.Sobrecal[b][ts]
            }

            console.log(prevTemp, nextTemp)

            // Interpolacion de valores por presion:

            if (i != 1) {
              nextPresNextTempValues = [dataJson.Sobrecal[b][joinedV], dataJson.Sobrecal[b][joinedU], dataJson.Sobrecal[b][joinedH], dataJson.Sobrecal[b][joinedS]]
              nextPresPrevTempValues = [dataJson.Sobrecal[b-1][joinedV], dataJson.Sobrecal[b-1][joinedU], dataJson.Sobrecal[b-1][joinedH], dataJson.Sobrecal[b-1][joinedS]]
              prevPresNextTempValues = [dataJson.Sobrecal[b][prevV], dataJson.Sobrecal[b][prevU], dataJson.Sobrecal[b][prevH], dataJson.Sobrecal[b][prevS]]
              prevPresPrevTempValues = [dataJson.Sobrecal[b-1][prevV], dataJson.Sobrecal[b-1][prevU], dataJson.Sobrecal[b-1][prevH], dataJson.Sobrecal[b-1][prevS]]
            
              console.log(nextPresNextTempValues, nextPresPrevTempValues, prevPresNextTempValues, prevPresPrevTempValues)
            
            } else {
              
              // b-17 to iterate through less useless items
              for (let c = b-17; true; c++) {

                console.log(prevPres)

                let tempInJson2 = dataJson.Sobrecal[c]['T']

                if (tempInJson2 == 'Sat.') {
                  let ts = ['ts', i].join('')
                  tempInJson = dataJson.Sobrecal[c][ts]
                }

                if (tempInJson2 >= input1 && dataJson.Sobrecal[c]['p3'] == prevPres) {

                  nextPresNextTempValues = [dataJson.Sobrecal[b][joinedV], dataJson.Sobrecal[b][joinedU], dataJson.Sobrecal[b][joinedH], dataJson.Sobrecal[b][joinedS]]
                  nextPresPrevTempValues = [dataJson.Sobrecal[b-1][joinedV], dataJson.Sobrecal[b-1][joinedU], dataJson.Sobrecal[b-1][joinedH], dataJson.Sobrecal[b-1][joinedS]]
                  prevPresNextTempValues = [dataJson.Sobrecal[c]['v3'], dataJson.Sobrecal[c]['u3'], dataJson.Sobrecal[c]['h3'], dataJson.Sobrecal[c]['s3']]
                  prevPresPrevTempValues = [dataJson.Sobrecal[c-1]['v3'], dataJson.Sobrecal[c-1]['u3'], dataJson.Sobrecal[c-1]['h3'], dataJson.Sobrecal[c-1]['s3']]
                  
                  console.log(nextPresNextTempValues, nextPresPrevTempValues, prevPresNextTempValues, prevPresPrevTempValues)

                  break
                }
              }
            }

            console.log(b) 


            
            for (let i = 0; i <= 3; i++) {
              let interpolPrevTemp = linealInterp(prevPres, prevPresPrevTempValues[i], nextPres, nextPresPrevTempValues[i], input2).toFixed(5)
              let interpolNextTemp = linealInterp(prevPres, prevPresNextTempValues[i], nextPres, nextPresNextTempValues[i], input2).toFixed(5)

              interpolatedPresPrevTempValues.push(parseFloat(interpolPrevTemp))
              interpolatedPresNextTempValues.push(parseFloat(interpolNextTemp))

              let interpol = linealInterp(prevTemp, interpolatedPresPrevTempValues[i], nextTemp, interpolatedPresNextTempValues[i], input1).toFixed(5)
              interpolatedArray.push(interpol)
            }

            console.log(interpolatedPresPrevTempValues, interpolatedPresNextTempValues)
            break
          }
        }

        console.log(nextPres,prevPres)
        console.log(interpolatedArray)

        replaceOverheatedResults()

        break outer_block1
      }
    }
  }
}

function submitEntropyTemp() {
  let input1 = parseFloat(document.getElementById("inputTemp").value)
  let input2 = parseFloat(document.getElementById("inputEntropy").value)
  let tempUnit = document.getElementById('dropdownTemp').innerText

  if (tempUnit == '°F ') {
    input1 = (input1 - 32) * 5/9
  }

  // Checks if inputs are correct

  if (input1 <= 0 || input1 > 373.95 ) {
    alert(`ERROR: Temperature or pressure values out of range!`)
    return
  }

  if (isNaN(input1)) {
    alert(`ERROR: Please complete the fields properly before submitting`)
    return
  }

  for (let i = 0; i < dataJson.Temp.length; i++) {
    if (dataJson.Temp[i].T >= input1){

      const nextTemp = dataJson.Temp[i].T;
      const prevTemp = dataJson.Temp[i-1].T; 

      let prevVariables = []
      let nextVariables = []
      interpolatedArray = []

      for (let [key, variable] of Object.entries(variablesTemp)){
        prevVariables.push(dataJson.Temp[i-1][variable]);
        nextVariables.push(dataJson.Temp[i][variable]);
      }

      console.log(prevTemp);
      console.log(nextTemp);
      console.log(prevVariables);
      console.log(nextVariables);

      // A FUTURO: Revisar aca que pasa si en prev o next falta algun dato
      for (let i = 0; i < prevVariables.length; i++) {
        let interpolatedValue = linealInterp(prevTemp, prevVariables[i], nextTemp, nextVariables[i], input1);
        interpolatedArray.push(interpolatedValue);
      }

      // Redondeo de valores interpolados (-2 para no redondear vol specific):
      for (let i = 0; i < interpolatedArray.length-2; i++) {
        interpolatedArray[i] = interpolatedArray[i].toFixed(2);
      }

      for (let i = interpolatedArray.length - 2; i < interpolatedArray.length; i++) {
        interpolatedArray[i] = interpolatedArray[i].toFixed(6);
      }

      for (let i = 0; i < interpolatedArray.length; i++) {
        interpolatedArray[i] = parseFloat(interpolatedArray[i])
      }

      console.log(interpolatedArray)

      if (input2 < interpolatedArray[4] || input2 > interpolatedArray[6]) {
        alert('ERROR: Entropy values out of range for input temperature')
        return
      }

      let steamQuality = linealInterp(interpolatedArray[4], 0, interpolatedArray[6], 100, input2).toFixed(3)
      let interpolatedEnthalpy = linealInterp(interpolatedArray[4], interpolatedArray[1], interpolatedArray[6], interpolatedArray[3], input2).toFixed(3)

      // let resultsArray = []
      // resultsArray.push(interpolatedArray[0], interpolatedArray[1], interpolatedEnthalpy, interpolatedArray[3], steamQuality)

      interpolatedArray[2] = interpolatedEnthalpy
      interpolatedArray.push(steamQuality)
      

      console.log(interpolatedArray)
      
      replaceWetSteamTempResults()


      break
    }
  }
}

function submitEntropyPres() {
  let input1 = parseFloat(document.getElementById("inputPres").value)
  let input2 = parseFloat(document.getElementById("inputEntropy").value)
  let presUnit = document.getElementById('dropdownPres').innerText

  switch (presUnit) {
    case 'kPa ':
      break
    case 'kg/cm² ':
      input1 = input1*98.07
      break
    case 'bar ':
      input1 = input1*100
      break
    case 'PSI ':
      input1 = input1*6.895
      break
    case 'kPa G ':
      input1 = input1 + 101.32
      break
    case 'kg/cm² G ':
      input1 = (input1+1.033)*98.07
      break
    case 'bar G ':
      input1 = (input1+1.013)*100
      break
    case 'PSI G ':
      input1 = (input1+14.69)*6.895
      break
  }

  // Checks if inputs are correct

  if (input1 < 1 || input1 > 22064 ) {
    alert(`ERROR: Temperature or pressure values out of range!`)
    return
  }

  if (isNaN(input1)) {
    alert(`ERROR: Please complete the fields properly before submitting`)
    return
  }

  for (let i = 0; i < dataJson.Pres.length; i++){
    if (dataJson.Pres[i].P >= input1){

      const nextPres = dataJson.Pres[i].P;
      const prevPres = dataJson.Pres[i-1].P; 

      let prevVariables = []
      let nextVariables = []
      interpolatedArray = []

      for (let [key, variable] of Object.entries(variablesPres)){
        prevVariables.push(dataJson.Pres[i-1][variable]);
        nextVariables.push(dataJson.Pres[i][variable]);
      }

      console.log(prevPres);
      console.log(nextPres);
      console.log(prevVariables);
      console.log(nextVariables);

      // A FUTURO: Revisar aca que pasa si en prev o next falta algun dato
      for (let i = 0; i < prevVariables.length; i++) {
        let interpolatedValue = linealInterp(prevPres, prevVariables[i], nextPres, nextVariables[i], input1);
        interpolatedArray.push(interpolatedValue);
      }

      // Redondeo de valores interpolados (-2 para no redondear vol specific):
      for (let i = 0; i < interpolatedArray.length-2; i++) {
        interpolatedArray[i] = interpolatedArray[i].toFixed(3);
      }

      for (let i = interpolatedArray.length - 2; i < interpolatedArray.length; i++) {
        interpolatedArray[i] = interpolatedArray[i].toFixed(6);
      }

      for (let i = 0; i < interpolatedArray.length; i++) {
        interpolatedArray[i] = parseFloat(interpolatedArray[i])
      }

      console.log(interpolatedArray)

      if (input2 < interpolatedArray[4] || input2 > interpolatedArray[6]) {
        alert('ERROR: Entropy values out of range for input pressure')
        return
      }

      let steamQuality = linealInterp(interpolatedArray[4], 0, interpolatedArray[6], 100, input2).toFixed(3)
      let interpolatedEnthalpy = linealInterp(interpolatedArray[4], interpolatedArray[1], interpolatedArray[6], interpolatedArray[3], input2).toFixed(3)

      // let resultsArray = []
      // resultsArray.push(interpolatedArray[0], interpolatedArray[1], interpolatedEnthalpy, interpolatedArray[3], steamQuality)

      interpolatedArray[2] = interpolatedEnthalpy
      interpolatedArray.push(steamQuality)
      

      console.log(interpolatedArray)
      replaceWetSteamPresResults()
      break
    }
  }
}



function replaceTempResults(){
  document.getElementById('results').innerHTML = `

  <div class="d-flex flex-wrap justify-content-center">
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
        <span style="margin: 0px 10px;">Pressure Units</span>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownPres" data-bs-toggle="dropdown" aria-expanded="false">
                kPa
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownPres">
              <li><a class="dropdown-item" onclick="changePresUnit('kpa')">kPa</a></li>
              <li><a class="dropdown-item" onclick="changePresUnit('kg')">kg/cm²</a></li>
              <li><a class="dropdown-item" onclick="changePresUnit('bar')">bar</a></li>
              <li><a class="dropdown-item" onclick="changePresUnit('PSI')">PSI</a></li>
              <li><a class="dropdown-item" onclick="changePresUnit('kpa G')">kPa G</a></li>
              <li><a class="dropdown-item" onclick="changePresUnit('kg G')">kg/cm² G</a></li>
              <li><a class="dropdown-item" onclick="changePresUnit('bar G')">bar G</a></li>
              <li><a class="dropdown-item" onclick="changePresUnit('PSI G')">PSI G</a></li>
            </ul>
        </div>
    </span>
        
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
        <span style="margin: 0px 10px;">Energy Units</span>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownEnergy" data-bs-toggle="dropdown" aria-expanded="false">
            kJ/kg
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownEnergy">
                <li><a class="dropdown-item" onclick="changeEnergyUnit('kJ/kg')">kJ/kg</a></li>
                <li><a class="dropdown-item" onclick="changeEnergyUnit('kcal/kg')">kcal/kg</a></li>
                <li><a class="dropdown-item" onclick="changeEnergyUnit('BTU/lb')">BTU/lb</a></li>
            </ul>
        </div>
    </span>
        
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
        <span style="margin: 0px 10px;">Volume Units</span>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownSvol" data-bs-toggle="dropdown" aria-expanded="false">
            m³/kg
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownSvol">
                <li><a class="dropdown-item" onclick="changeSvolUnit('m3')">m³/kg</a></li>
                <li><a class="dropdown-item" onclick="changeSvolUnit('ft3')">ft³/lb</a></li>
            </ul>
        </div>
    </span>
  </div>
  

  <table class="table table-striped table-bordered table-sm align-middle" >
  <tbody> 
      <tr>
          <td id="SatCell" colspan="2">Sat. Pressure</td>
          <td id="presValue" class="value-result-row">${interpolatedArray[0]}</td>
          <td id="presUnit" class="unit-result-row">kPa</td>
      </tr>
      <tr>
          <td rowspan="3">Enthalpy</td>
          <td>Sat. Liq.</td>
          <td id="enValue1" class="value-result-row">${interpolatedArray[1]}</td>
          <td id="enUnit1" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td> Evap.</td>
          <td id="enValue2" class="value-result-row">${interpolatedArray[2]}</td>
          <td id="enUnit2" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="enValue3" class="value-result-row">${interpolatedArray[3]}</td>
          <td id="enUnit3" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td rowspan="3">Entropy</td>
          <td>Sat. Liq.</td>
          <td id="entrValue1" class="value-result-row">${interpolatedArray[4]}</td>
          <td id="entrUnit1" class="unit-result-row">kJ/(kg*K)</td>
      </tr>
      <tr>
          <td> Evap.</td>
          <td id="entrValue2" class="value-result-row">${interpolatedArray[5]}</td>
          <td id="entrUnit2" class="unit-result-row">kJ/(kg*K)</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="entrValue3" class="value-result-row">${interpolatedArray[6]}</td>
          <td id="entrUnit3" class="unit-result-row">kJ/(kg*K)</td>
      </tr>
      <tr>
          <td rowspan="3">Internal Energy</td>
          <td>Sat. Liq.</td>
          <td id="enValue7" class="value-result-row">${interpolatedArray[7]}</td>
          <td id="enUnit7" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td> Evap.</td>
          <td id="enValue8" class="value-result-row">${interpolatedArray[8]}</td>
          <td id="enUnit8" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="enValue9" class="value-result-row">${interpolatedArray[9]}</td>
          <td id="enUnit9" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td rowspan="2">Specific Volume</td>
          <td>Sat. Liq.</td>
          <td id="svolValue1" class="value-result-row">${interpolatedArray[10]}</td>
          <td id="svolUnit1" class="unit-result-row">m³/kg</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="svolValue2" class="value-result-row">${interpolatedArray[11]}</td>
          <td id="svolUnit2" class="unit-result-row">m³/kg</td>
      </tr>
  </tbody>
</table>
  `
}


// Functions to change pressure units

function changePresUnit(unit) {
  if (document.getElementById('overheated-toggle').checked == true || document.getElementById('entropy-pres-toggle').checked == true) {
    switch (unit) {
      case 'MPa':
        document.getElementById('dropdownPres').innerHTML = 'MPa '
        return
      case 'MPa G':
        document.getElementById('dropdownPres').innerHTML = 'MPa G '
        return
      case 'kPa':
        document.getElementById('dropdownPres').innerHTML = 'kPa '
        return
      case 'kPa G':
        document.getElementById('dropdownPres').innerHTML = 'kPa G '
        return
      case 'kg':
        document.getElementById('dropdownPres').innerHTML = 'kg/cm² '
        return
      case 'kg G':
        document.getElementById('dropdownPres').innerHTML = 'kg/cm² G '
        return
      case 'bar':
        document.getElementById('dropdownPres').innerHTML = 'bar '
        return
      case 'bar G':
        document.getElementById('dropdownPres').innerHTML = 'bar G '
        return
      case 'PSI':
        document.getElementById('dropdownPres').innerHTML = 'PSI '
        return
      case 'PSI G':
        document.getElementById('dropdownPres').innerHTML = 'PSI G '
        return
    }
  }

  switch (unit) {
    case 'kpa':
      document.getElementById('dropdownPres').innerHTML = 'kPa'
      document.getElementById('presUnit').innerHTML = 'kPa'
      document.getElementById('presValue').innerHTML = interpolatedArray[0]
      break
    case 'kg':
      document.getElementById('dropdownPres').innerHTML = 'kg/cm²'
      document.getElementById('presUnit').innerHTML = 'kg/cm²'
      document.getElementById('presValue').innerHTML = (interpolatedArray[0]/98.066).toFixed(3)
      break
    case 'bar':
      document.getElementById('dropdownPres').innerHTML = 'bar'
      document.getElementById('presUnit').innerHTML = 'bar'
      document.getElementById('presValue').innerHTML = (interpolatedArray[0]/100).toFixed(3)
      break
    case 'PSI':
      document.getElementById('dropdownPres').innerHTML = 'PSI'
      document.getElementById('presUnit').innerHTML = 'PSI'
      document.getElementById('presValue').innerHTML = (interpolatedArray[0]/6.895).toFixed(3)
      break
    case 'kpa G':
      document.getElementById('dropdownPres').innerHTML = 'kPa G'
      document.getElementById('presUnit').innerHTML = 'kPa G'
      document.getElementById('presValue').innerHTML = (interpolatedArray[0]-101.325).toFixed(3)
      break
    case 'kg G':
      document.getElementById('dropdownPres').innerHTML = 'kg/cm² G'
      document.getElementById('presUnit').innerHTML = 'kg/cm² G'
      document.getElementById('presValue').innerHTML = ((interpolatedArray[0]-101.325)/98.066).toFixed(3)
      break
    case 'bar G':
      document.getElementById('dropdownPres').innerHTML = 'bar G'
      document.getElementById('presUnit').innerHTML = 'bar G'
      document.getElementById('presValue').innerHTML = ((interpolatedArray[0]-101.325)/100).toFixed(3)
      break
    case 'PSI G':
      document.getElementById('dropdownPres').innerHTML = 'PSI G'
      document.getElementById('presUnit').innerHTML = 'PSI G'
      document.getElementById('presValue').innerHTML = ((interpolatedArray[0]-101.325)/6.895).toFixed(3)
      break
  }
}


// Function to change energy units:

function changeEnergyUnit(unit) {
  
  if (document.getElementById('overheated-toggle').checked == true) {   
      switch (unit) {
        case 'kJ/kg':
          document.getElementById('dropdownEnergy').innerHTML = 'kJ/kg '
          document.getElementById('enUnit1').innerHTML = 'kJ/kg'
          document.getElementById('enUnit3').innerHTML = 'kJ/kg'
          document.getElementById('enValue1').innerHTML = interpolatedArray[3]
          document.getElementById('enValue3').innerHTML = interpolatedArray[2]
          return
          
        case 'kcal/kg':
          document.getElementById('dropdownEnergy').innerHTML = 'kcal/kg '
          document.getElementById('enUnit1').innerHTML = 'kcal/kg'
          document.getElementById('enUnit3').innerHTML = 'kcal/kg'
          document.getElementById('enValue1').innerHTML = (interpolatedArray[3]/4.184).toFixed(5)
          document.getElementById('enValue3').innerHTML = (interpolatedArray[2]/4.184).toFixed(5)
          return
          
        case 'BTU/lb':
          document.getElementById('dropdownEnergy').innerHTML = 'BTU/lb '
          document.getElementById('enUnit1').innerHTML = 'BTU/lb'
          document.getElementById('enUnit3').innerHTML = 'BTU/lb'
          document.getElementById('enValue1').innerHTML = (interpolatedArray[3]/2.326).toFixed(5)
          document.getElementById('enValue3').innerHTML = (interpolatedArray[2]/2.326).toFixed(5)
          return
          
      }
    }
    
  for (let i = 1; i <= 9; i++) {
    try {
      let enUnitToJoin = ['enUnit']
      let enValueToJoin = ['enValue']
      enUnitToJoin.push(i)
      enValueToJoin.push(i)
      let enUnitJoined = enUnitToJoin.join('')
      let enValueJoined = enValueToJoin.join('')
      
      
      switch (unit) {
        case 'kJ/kg':
          document.getElementById('dropdownEnergy').innerHTML = 'kJ/kg '
          document.getElementById(enUnitJoined).innerHTML = 'kJ/kg'
          document.getElementById(enValueJoined).innerHTML = interpolatedArray[i]
          break
        case 'kcal/kg':
          document.getElementById('dropdownEnergy').innerHTML = 'kcal/kg '
          document.getElementById(enUnitJoined).innerHTML = 'kcal/kg'
          document.getElementById(enValueJoined).innerHTML = (interpolatedArray[i]/4.184).toFixed(3)
          break
        case 'BTU/lb':
          document.getElementById('dropdownEnergy').innerHTML = 'BTU/lb '
          document.getElementById(enUnitJoined).innerHTML = 'BTU/lb'
          document.getElementById(enValueJoined).innerHTML = (interpolatedArray[i]/2.326).toFixed(3)
          break
      } 
    } catch {}
  }

//   try {
//     for (let i = 1; i <= 9; i++) {
//       let enUnitToJoin = ['enUnit']
//       let enValueToJoin = ['enValue']
//       enUnitToJoin.push(i)
//       enValueToJoin.push(i)
//       let enUnitJoined = enUnitToJoin.join('')
//       let enValueJoined = enValueToJoin.join('')
      
      
//       switch (unit) {
//         case 'kJ/kg':
//           document.getElementById(enUnitJoined).innerHTML = 'kJ/kg'
//           document.getElementById(enValueJoined).innerHTML = interpolatedArray[i]
//           break
//         case 'kcal/kg':
//           document.getElementById(enUnitJoined).innerHTML = 'kcal/kg'
//           document.getElementById(enValueJoined).innerHTML = (interpolatedArray[i]/4.184).toFixed(3)
//           break
//         case 'BTU/lb':
//           document.getElementById(enUnitJoined).innerHTML = 'BTU/lb'
//           document.getElementById(enValueJoined).innerHTML = (interpolatedArray[i]/2.326).toFixed(3)
//           break
//       }
//     }
//   } catch {} // In case not all values are displayed, only the ones displayed will be changed
}

// Function to change temp units:

function changeTempUnit(unit) {

  if (document.getElementById('overheated-toggle').checked == true) {   
    switch (unit) {
      case 'C':
        document.getElementById('dropdownTemp').innerHTML = '°C '
        break
      case 'F':
        document.getElementById('dropdownTemp').innerHTML = '°F '
        break
    }
    return
  }

  switch (unit) {
    case 'C':
      document.getElementById('dropdownTemp').innerHTML = '°C '
      
      try {
        if (document.getElementById('SatCell').innerText == 'Sat. Temperature') {
          document.getElementById('TempUnit').innerHTML = '°C'
          document.getElementById('TempValue').innerHTML = interpolatedArray[0]
        }
      } catch {}

      break

    case 'F':
      document.getElementById('dropdownTemp').innerHTML = '°F '
      
      try {
        if (document.getElementById('SatCell').innerText == 'Sat. Temperature') {
          document.getElementById('TempUnit').innerHTML = '°F'
          document.getElementById('TempValue').innerHTML = ((interpolatedArray[0]*9/5)+32).toFixed(3)
        }
      } catch {}

      break
  }
}

// Function to change specific volume units:

function changeSvolUnit(unit) {

  if (document.getElementById('overheated-toggle').checked == true) {
    switch (unit) {
      case 'm3':
        document.getElementById('dropdownSvol').innerHTML = 'm³/kg '
        document.getElementById('svolValue1').innerHTML = interpolatedArray[1]
        document.getElementById('svolUnit1').innerHTML = 'm³/kg'
        break
      case 'ft3':
        document.getElementById('dropdownSvol').innerHTML = 'ft³/lb '
        document.getElementById('svolValue1').innerHTML = (interpolatedArray[1]*16.018).toFixed(6)
        document.getElementById('svolUnit1').innerHTML = 'ft³/lb'
        break
    }   
  } else {
    switch (unit) {
      case 'm3':
        document.getElementById('dropdownSvol').innerHTML = 'm³/kg '
        document.getElementById('svolValue1').innerHTML = interpolatedArray[10]
        document.getElementById('svolValue2').innerHTML = interpolatedArray[11]
        document.getElementById('svolUnit1').innerHTML = 'm³/kg'
        document.getElementById('svolUnit2').innerHTML = 'm³/kg'
        break
      case 'ft3':
        document.getElementById('dropdownSvol').innerHTML = 'ft³/lb '
        document.getElementById('svolValue1').innerHTML = (interpolatedArray[10]*16.018).toFixed(6)
        document.getElementById('svolValue2').innerHTML = (interpolatedArray[11]*16.018).toFixed(6)
        document.getElementById('svolUnit1').innerHTML = 'ft³/lb'
        document.getElementById('svolUnit2').innerHTML = 'ft³/lb'
        break
    }
  }
}



//////////////////////////////////////////////////////////////////
////////////////////// PRESSURE //////////////////////////////////
//////////////////////////////////////////////////////////////////

function replacePresResults() {
  document.getElementById('results').innerHTML = `

  <div class="d-flex flex-wrap justify-content-center">
  <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
      <span style="margin: 0px 10px;">Temperature Units</span>
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownTemp" data-bs-toggle="dropdown" aria-expanded="false">
              °C
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownTemp">
              <li><a class="dropdown-item" onclick="changeTempUnit('C')">°C</a></li>
              <li><a class="dropdown-item" onclick="changeTempUnit('F')">°F</a></li>
          </ul>
      </div>
  </span>
      
  <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
      <span style="margin: 0px 10px;">Energy Units</span>
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownEnergy" data-bs-toggle="dropdown" aria-expanded="false">
          kJ/kg
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownEnergy">
              <li><a class="dropdown-item" onclick="changeEnergyUnit('kJ/kg')">kJ/kg</a></li>
              <li><a class="dropdown-item" onclick="changeEnergyUnit('kcal/kg')">kcal/kg</a></li>
              <li><a class="dropdown-item" onclick="changeEnergyUnit('BTU/lb')">BTU/lb</a></li>
          </ul>
      </div>
  </span>
      
  <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
      <span style="margin: 0px 10px;">Volume Units</span>
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownSvol" data-bs-toggle="dropdown" aria-expanded="false">
          m³/kg
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownSvol">
              <li><a class="dropdown-item" onclick="changeSvolUnit('m3')">m³/kg</a></li>
              <li><a class="dropdown-item" onclick="changeSvolUnit('ft3')">ft³/lb</a></li>
          </ul>
      </div>
  </span>
</div>

  

  <table class="table table-striped table-bordered table-sm align-middle" >
  <tbody> 
      <tr>
          <td id="SatCell" colspan="2">Sat. Temperature</td>
          <td id="TempValue" class="value-result-row">${interpolatedArray[0]}</td>
          <td id="TempUnit" class="unit-result-row">°C</td>
      </tr>
      <tr>
          <td rowspan="3">Enthalpy</td>
          <td>Sat. Liq.</td>
          <td id="enValue1" class="value-result-row">${interpolatedArray[1]}</td>
          <td id="enUnit1" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td> Evap.</td>
          <td id="enValue2" class="value-result-row">${interpolatedArray[2]}</td>
          <td id="enUnit2" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="enValue3" class="value-result-row">${interpolatedArray[3]}</td>
          <td id="enUnit3" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td rowspan="3">Entropy</td>
          <td>Sat. Liq.</td>
          <td id="entrValue1" class="value-result-row">${interpolatedArray[4]}</td>
          <td id="entrUnit1" class="unit-result-row">kJ/(kg*K)</td>
      </tr>
      <tr>
          <td> Evap.</td>
          <td id="entrValue2" class="value-result-row">${interpolatedArray[5]}</td>
          <td id="entrUnit2" class="unit-result-row">kJ/(kg*K)</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="entrValue3" class="value-result-row">${interpolatedArray[6]}</td>
          <td id="entrUnit3" class="unit-result-row">kJ/(kg*K)</td>
      </tr>
      <tr>
          <td rowspan="3">Internal Energy</td>
          <td>Sat. Liq.</td>
          <td id="enValue7" class="value-result-row">${interpolatedArray[7]}</td>
          <td id="enUnit7" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td> Evap.</td>
          <td id="enValue8" class="value-result-row">${interpolatedArray[8]}</td>
          <td id="enUnit8" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="enValue9" class="value-result-row">${interpolatedArray[9]}</td>
          <td id="enUnit9" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td rowspan="2">Specific Volume</td>
          <td>Sat. Liq.</td>
          <td id="svolValue1" class="value-result-row">${interpolatedArray[10]}</td>
          <td id="svolUnit1" class="unit-result-row">m³/kg</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="svolValue2" class="value-result-row">${interpolatedArray[11]}</td>
          <td id="svolUnit2" class="unit-result-row">m³/kg</td>
      </tr>
  </tbody>
</table>
  `
}

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////// OVERHEATED //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

function replaceOverheatedResults() {

  document.getElementById('results').innerHTML = `
  <div class="d-flex flex-wrap justify-content-center">
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
      <span style="margin: 0px 10px;">Energy Units</span>
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownEnergy" data-bs-toggle="dropdown" aria-expanded="false">
          kJ/kg
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownEnergy">
              <li><a class="dropdown-item" onclick="changeEnergyUnit('kJ/kg')">kJ/kg</a></li>
              <li><a class="dropdown-item" onclick="changeEnergyUnit('kcal/kg')">kcal/kg</a></li>
              <li><a class="dropdown-item" onclick="changeEnergyUnit('BTU/lb')">BTU/lb</a></li>
          </ul>
      </div>
    </span>
    
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
      <span style="margin: 0px 10px;">Volume Units</span>
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownSvol" data-bs-toggle="dropdown" aria-expanded="false">
          m³/kg
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownSvol">
              <li><a class="dropdown-item" onclick="changeSvolUnit('m3')">m³/kg</a></li>
              <li><a class="dropdown-item" onclick="changeSvolUnit('ft3')">ft³/lb</a></li>
          </ul>
      </div>
    </span>
  </div>

  <table class="table table-striped table-bordered table-sm align-middle" >
  <tbody> 
      <tr>
          <td id="SatCell">Sat. Temperature</td>
          <td id="TempValue" class="value-result-row">${interpolatedArray[0]}</td>
          <td id="TempUnit" class="unit-result-row">${tempUnitForHTML}</td>
      </tr>
      <tr>
          <td>Enthalpy</td>
          <td id="enValue1" class="value-result-row">${interpolatedArray[3]}</td>
          <td id="enUnit1" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td>Entropy</td>
          <td id="entrValue1" class="value-result-row">${interpolatedArray[4]}</td>
          <td id="entrUnit1" class="unit-result-row">kJ/(kg*K)</td>
      </tr>
      <tr>
          <td>Internal Energy</td>
          <td id="enValue3" class="value-result-row">${interpolatedArray[2]}</td>
          <td id="enUnit3" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td rowspan="1">Specific Volume</td>
          <td id="svolValue1" class="value-result-row">${interpolatedArray[1]}</td>
          <td id="svolUnit1" class="unit-result-row">m³/kg</td>
      </tr>
  </tbody>
</table>
  `
}

function replaceWetSteamPresResults() {
  document.getElementById('results').innerHTML = `
 
  <div class="d-flex flex-wrap justify-content-center">
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
        <span style="margin: 0px 10px;">Temperature Units</span>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownTemp" data-bs-toggle="dropdown" aria-expanded="false">
                °C
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownTemp">
                <li><a class="dropdown-item" onclick="changeTempUnit('C')">°C</a></li>
                <li><a class="dropdown-item" onclick="changeTempUnit('F')">°F</a></li>
            </ul>
        </div>
    </span>
        
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
        <span style="margin: 0px 10px;">Energy Units</span>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownEnergy" data-bs-toggle="dropdown" aria-expanded="false">
            kJ/kg
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownEnergy">
                <li><a class="dropdown-item" onclick="changeEnergyUnit('kJ/kg')">kJ/kg</a></li>
                <li><a class="dropdown-item" onclick="changeEnergyUnit('kcal/kg')">kcal/kg</a></li>
                <li><a class="dropdown-item" onclick="changeEnergyUnit('BTU/lb')">BTU/lb</a></li>
            </ul>
        </div>
    </span>
  </div>

  <table class="table table-striped table-bordered table-sm align-middle" >
  <tbody> 
      <tr>
          <td id="SatCell" colspan="2">Sat. Temperature</td>
          <td id="TempValue" class="value-result-row">${interpolatedArray[0]}</td>
          <td id="TempUnit" class="unit-result-row">°C</td>
      </tr>
      <tr>
          <td id="steamQuality" colspan="2">Steam Quality</td>
          <td id="steamValue" class="value-result-row">${interpolatedArray[12]}</td>
          <td class="unit-result-row">%</td>
      </tr>
      <tr>
          <td rowspan="3">Enthalpy</td>
          <td>Sat. Liq.</td>
          <td id="enValue1" class="value-result-row">${interpolatedArray[1]}</td>
          <td id="enUnit1" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td> Wet Steam</td>
          <td id="enValue2" class="value-result-row">${interpolatedArray[2]}</td>
          <td id="enUnit2" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="enValue3" class="value-result-row">${interpolatedArray[3]}</td>
          <td id="enUnit3" class="unit-result-row">kJ/kg</td>
      </tr>
  </tbody>
</table>
  `
}

function replaceWetSteamTempResults() {
  document.getElementById('results').innerHTML = `
  <div class="d-flex flex-wrap justify-content-center">
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
        <span style="margin: 0px 10px;">Pressure Units</span>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownPres" data-bs-toggle="dropdown" aria-expanded="false">
                kPa
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownPres">
            <li><a class="dropdown-item" onclick="changePresUnit('kpa')">kPa</a></li>
            <li><a class="dropdown-item" onclick="changePresUnit('kg')">kg/cm²</a></li>
            <li><a class="dropdown-item" onclick="changePresUnit('bar')">bar</a></li>
            <li><a class="dropdown-item" onclick="changePresUnit('PSI')">PSI</a></li>
            <li><a class="dropdown-item" onclick="changePresUnit('kpa G')">kPa G</a></li>
            <li><a class="dropdown-item" onclick="changePresUnit('kg G')">kg/cm² G</a></li>
            <li><a class="dropdown-item" onclick="changePresUnit('bar G')">bar G</a></li>
            <li><a class="dropdown-item" onclick="changePresUnit('PSI G')">PSI G</a></li>
            </ul>
        </div>
    </span>
        
    <span class="d-flex flex-row justify-content-between align-items-center unit-selection">
        <span style="margin: 0px 10px;">Energy Units</span>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownEnergy" data-bs-toggle="dropdown" aria-expanded="false">
            kJ/kg
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownEnergy">
                <li><a class="dropdown-item" onclick="changeEnergyUnit('kJ/kg')">kJ/kg</a></li>
                <li><a class="dropdown-item" onclick="changeEnergyUnit('kcal/kg')">kcal/kg</a></li>
                <li><a class="dropdown-item" onclick="changeEnergyUnit('BTU/lb')">BTU/lb</a></li>
            </ul>
        </div>
    </span>
  </div>
  
  <table class="table table-striped table-bordered table-sm align-middle" >
  <tbody> 
      <tr>
          <td id="SatCell" colspan="2">Sat. Pressure</td>
          <td id="presValue" class="value-result-row">${interpolatedArray[0]}</td>
          <td id="presUnit" class="unit-result-row">kPa</td>
      </tr>
      <tr>
          <td id="steamQuality" colspan="2">Steam Quality</td>
          <td id="steamValue" class="value-result-row">${interpolatedArray[12]}</td>
          <td class="unit-result-row">%</td>
      </tr>
      <tr>
          <td rowspan="3">Enthalpy</td>
          <td>Sat. Liq.</td>
          <td id="enValue1" class="value-result-row">${interpolatedArray[1]}</td>
          <td id="enUnit1" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td> Wet Steam</td>
          <td id="enValue2" class="value-result-row">${interpolatedArray[2]}</td>
          <td id="enUnit2" class="unit-result-row">kJ/kg</td>
      </tr>
      <tr>
          <td>Sat. Steam</td>
          <td id="enValue3" class="value-result-row">${interpolatedArray[3]}</td>
          <td id="enUnit3" class="unit-result-row">kJ/kg</td>
      </tr>
  </tbody>
</table>
  `
}