const nosazInput = document.getElementById('nosaz')
const nosazList = document.getElementById('nosazList')

nosazInput.addEventListener('click', () => {
	if (nosazInput.checked) {
	console.log('true');
	nosazList.style.height= '28px'
	} else {
		console.log('false');
		nosazList.style.height= '0px'
	}
})