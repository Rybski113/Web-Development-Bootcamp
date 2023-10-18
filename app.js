function bmiCalculator(weight, height) {
   let bmi = weight / Math.pow(height, 2)

   console.log(Math.round(bmi))
}

bmiCalculator(94, 1.92)
