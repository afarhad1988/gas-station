const gasStation = document.querySelectorAll('.img-station')
const priceInput = document.querySelectorAll('.price')
const litresInput = document.querySelector('.litres')


const petrolType = document.querySelector('.type')
const priceOneLiter = document.querySelector(".money")
const totalLitres = document.querySelector('.howMuch')
const vat = document.querySelector('.vat')
const totalCost = document.querySelector('.finish')
const count = document.querySelector('.litres_button')


gasStation.forEach((itm) => {
		itm.addEventListener('click', () => {
			gasStation.forEach((itm) =>{
				itm.classList.remove('img-background')
			})
			itm.classList.add('img-background')
			clean()
		})
})

count.addEventListener('click', () => {
	if(priceInput[0].value ) {
		petrolType.innerHTML = 'Petrol type: AI95'
		priceOneLiter.textContent = `Price for one liter: ${priceInput[0].value}$ `
		totalLitres.textContent = `Total litres: ${litresInput.value}`
		vat.textContent = 'VAT:5%'
		totalCost.textContent = `Total price: ${priceInput[0].value * litresInput.value * 0.05 + priceInput[0].value *
		litresInput.value }$`
	}else if(priceInput[1].value) {
		petrolType.textContent = 'Petrol type: AI98 '
		priceOneLiter.textContent = `Price for one liter: ${priceInput[1].value}$ `
		totalLitres.textContent = `Total litres: ${litresInput.value}`
		vat.textContent = 'VAT:5%'
		totalCost.textContent = `Total price: ${priceInput[1].value * litresInput.value * 0.05 + priceInput[1].value *
		litresInput.value }$`
	}else if(priceInput[2].value) {
		petrolType.textContent = 'Petrol type: AI100 '
		priceOneLiter.textContent = `Price for one liter: ${priceInput[2].value}$ `
		totalLitres.textContent = `Total litres: ${litresInput.value}`
		vat.textContent = 'VAT:5%'
		totalCost.textContent = `Total price: ${priceInput[2].value * litresInput.value * 0.05 + priceInput[2].value *
		litresInput.value }$`
	}
	checkInput()
})
function checkInput() {
	if( litresInput.value === '') {
		alert('enter how many liters')
	}else if(priceInput[0].value ===  '' || priceInput[1].value === '' || priceInput[2].value === '') {
        alert('enter Price for one liter')
    }else if(litresInput.value === '' && priceInput.value === '') {
        alert('fill in the empty fields')
    }
}

function clean() {
	if(priceInput[0].value !== 'string') {
		priceInput[0].value = ""
		priceInput[1].value = ""
		priceInput[2].value = ""
		litresInput.value = ""
	} else if(priceInput[1].value !== 'string') {
		priceInput[2].value = ""
		litresInput.value = ""
	}else if(priceInput[2].value !== 'string') {
		priceInput[1].value = ""
		priceInput[0].value = ""
		litresInput.value = ""
	}
}
litresInput.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode !== 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});


priceInput.forEach((item)=>{
	item.addEventListener('keydown', function(event) {
		// Разрешаем: backspace, delete, tab и escape
		if ( event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 ||
			// Разрешаем: Ctrl+A
			(event.keyCode === 65 && event.ctrlKey === true) ||
			// Разрешаем: home, end, влево, вправо
			(event.keyCode >= 35 && event.keyCode <= 39)) {
			return;
		} else {
			// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault();
			}
		}
	});
})


