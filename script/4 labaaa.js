function capitalizeInput(element) {
	element.value = element.value.toUpperCase()
}

function submitForm() {
	const surname = document.getElementById('surname').value
	const name = document.getElementById('name').value
	const age = parseInt(document.getElementById('age').value)
    const number = document.getElementById('number').value

	if (age < 18) {
		alert('Карта выдается только после 18 лет')
	} else {
		const cardNumber = generateCardNumber()
		alert(`Номер карты: ${cardNumber}\nФамилия: ${surname}\nИмя: ${name}\n Телефон: ${number}`)
		resetForm()
	}
}

function generateCardNumber() {
	// Генерация случайного числа для номера карты
	return Math.floor(Math.random() * 1000000) + 1
}

function resetForm() {
	document.getElementById('customerForm').reset()
}
