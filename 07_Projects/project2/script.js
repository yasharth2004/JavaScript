const form =document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height === '' || height < 0 || isNaN(height) )
    {
        results.innerHTML="Please give valid height";
    }else if(weight === '' || weight < 0 || isNaN(weight) )
    {
            results.innerHTML="Please give valid weight";
    }
    else{
        const bmi =  (weight/ ((height * height)/10000)).toFixed(2)
        let uno;
        if(bmi < 18.6)
        {
            uno = "You weight is below healthy range"
        }
        else if(bmi >= 18.6 && bmi <=24.9)
        {
            uno ="You weight is within healthy range"
        }
        else{
            uno = "You weight exceeds healthy range"
        }

        results.innerHTML = `<span>BMI : ${bmi} <br> ${uno}</span>`
    }
})