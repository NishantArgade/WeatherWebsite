const searchBtn = document.querySelector('.searchBtn');

const display = async () => {

	console.log('called display');

	let cityName = document.querySelector('.searchText').value;
	if (cityName == "") {
		document.querySelector('.cardText').innerHTML = "Please enter city name before Search!";
		document.querySelector('.weatherIcon').innerHTML = "";
		document.querySelector('.city-country-name').innerHTML = "";
		setTimeout(() => {
			window.location.reload();
		}, 1800);
	} else {

		try {

			const response = await fetch(`http://api.weatherstack.com/current?access_key=d4488d2d5e339ea116888a92d264d3f5&query=${cityName}`);
			const result = await response.json();

			document.querySelector('.cardText').innerHTML = `<p class="outFont">${result.current.temperature}<span class="degSign">&deg;</span>C </p>`;
			document.querySelector('.cityName').innerHTML = `<p class="">${result.location.name}</p>`;
			document.querySelector('.countryName').innerHTML = `<p class="">, ${result.location.country}</p>`;
			document.querySelector('.date').innerHTML = result.location.localtime;
			
			
			let weather = result.current.weather_descriptions[0];
			if (weather == "Sunny")
			document.querySelector('.weatherIcon').innerHTML = `<i class="weatherIcon fas fa-sun fa-3x my-20" style="color:yellow;"></i>`;
			else if (weather == "Rainy")
				document.querySelector('.weatherIcon').innerHTML = `<i class="weatherIcon fas fa-cloud-rain fa-3x my-20" style="color:gray;"></i>`;
			else
				document.querySelector('.weatherIcon').innerHTML = `<i class="weatherIcon fas fa-cloud fa-3x my-20" style="color:white;"></i>`;

		} catch {
			document.querySelector('.cardText').innerHTML = "Please enter valid city name!";
			document.querySelector('.weatherIcon').innerHTML = "";
			document.querySelector('.city-country-name').innerHTML = "";
			setTimeout(() => {
				window.location.reload();
			}, 1800);
		}
	}
	document.querySelector('.searchText').value = "";
}
searchBtn.addEventListener("click", display);

//date and time 

function getMonth(currDate) {
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	return months[currDate.getMonth()];
}
function getDay(currDate) {
	let days = ['Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'];
		return days[currDate.getDay()];
}
const currDate = new Date();
console.log(currDate);

document.querySelector('.day').innerHTML = getDay(currDate);

let dateAndMonth = `${currDate.getDate()}, ${getMonth(currDate)}`;
document.querySelector('.date').innerHTML = dateAndMonth;
