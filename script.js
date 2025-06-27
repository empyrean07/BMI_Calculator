const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML=`Please give a vailid height ${height}`
  } else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML=`Please give a vailid weight ${weight}`
  } else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`
    
    // if(bmi<18.6){
    //     console.log("Need to gain muscels buddy, you are under weight");
    // }
    // if(bmi>18.6 && bmi<24.9){
    //     console.log("All good, you have a great BMI score, you are normal");
    // }
    // if(bmi<24.9){
    //     console.log("Need to lose some mass bro, you are over weight");
    // }
  }

  
})