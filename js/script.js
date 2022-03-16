const gasStation = document.querySelectorAll('.img-station')
const priceInput = document.querySelectorAll('.price')
const litresInput = document.querySelector('.litres')



const petrolType = document.querySelector('.type')
const priceOneLiter = document.querySelector(".money")
const totalLitres = document.querySelector('.howMuch')
const vat = document.querySelector('.vat')
const totalCost = document.querySelector('.finish')

litresInput.addEventListener('input', ()=>{
	console.log(litresInput.value)
})




gasStation[0].addEventListener('click', ()=>{
	gasStation[0].style.background = '#30B3BB'
	petrolType.innerHTML = 'Petrol type: AI95'
	priceOneLiter.textContent = `Price for one liter: ${priceInput[0].value}$ `
	totalLitres.textContent = `Total litres: ${litresInput.value}`
	vat.textContent = 'VAT:5%'
	totalCost.textContent = `Total price: ${priceInput[0].value * litresInput.value * 0.05 + priceInput[0].value * litresInput.value }$`
})

priceInput[0].addEventListener('input', ()=>{
	console.log(priceInput[0].value)
})





gasStation[1].addEventListener('click', ()=>{
	gasStation[1].style.background = '#30B3BB'
	petrolType.textContent = 'Petrol type: AI98 '
    priceOneLiter.textContent = `Price for one liter: ${priceInput[1].value}$ `
	totalLitres.textContent = `Total litres: ${litresInput.value}`
    vat.textContent = 'VAT:5%'
	totalCost.textContent = `Total price: ${priceInput[1].value * litresInput.value * 0.05 + priceInput[1].value * litresInput.value }$`
})

priceInput[1].addEventListener('input', ()=>{
	console.log(priceInput[1].value)
})





gasStation[2].addEventListener('click', ()=>{
	gasStation[2].style.background = '#30B3BB'
	petrolType.textContent = 'Petrol type: AI100 '
	priceOneLiter.textContent = `Price for one liter: ${priceInput[2].value}$ `
	totalLitres.textContent = `Total litres: ${litresInput.value}`
	vat.textContent = 'VAT:5%'
	totalCost.textContent = `Total price: ${priceInput[2].value * litresInput.value * 0.05 + priceInput[2].value * litresInput.value }$`
})

priceInput[2].addEventListener('input', ()=>{
	console.log(priceInput[2].value)
})



