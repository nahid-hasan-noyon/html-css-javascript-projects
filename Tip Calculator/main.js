const bill = document.querySelector('#Bill');
const amountOfPeople = document.querySelector('#AmountOfPeople');
let serviceQual = document.querySelector('#ServiceQual');
const result = document.querySelector('#Result');

// before adding input result will be hidden
result.style.display = 'none';

const calculator = document.querySelector('#Calculate');

calculator.addEventListener('click', calculateTip);

function calculateTip() {
	if (bill.value !== '') {
		if (amountOfPeople.value === '' || amountOfPeople.value <= 1) {
			amountOfPeople.value = 1;
		}
		if (serviceQual.value !== 0) {
			result.style.display = 'block';

			let totalTip = bill.value * serviceQual.value;
			console.log(totalTip);
			document.querySelector('#Tip').innerHTML = '$' + totalTip;

			let divideTip = totalTip / amountOfPeople.value;
			console.log(divideTip);
			document.getElementById('DivideTip').innerHTML =
				'$' + divideTip.toFixed(2);

			let totalBill = totalTip + parseInt(bill.value);
			console.log(totalBill);
			document.getElementById('TotalBillTip').innerHTML =
				'$' + totalBill.toFixed(2);

			let DivideTipPerson = totalBill / amountOfPeople.value;
			console.log(totalBill);
			document.getElementById('DivideTipPerson').innerHTML =
				'$' + DivideTipPerson.toFixed(2);
		} else {
			alert('Enter service quality!!');
			result.style.display = 'none';
		}
	} else {
		alert('Enter bill amount!!');
		result.style.display = 'none';
	}
}
