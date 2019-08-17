class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.visibility = document.getElementById('w-visibility');
		this.dewPoint = document.getElementById('w-dewpoint');
		this.wind = document.getElementById('w-wind');
	}

	paint(weather) {
		this.location.textContent = `${weather.city.toUpperCase()}, ${weather.state.toUpperCase()}`;
		this.desc.textContent = weather.forecast.data[0].summary;
		this.string.textContent = weather.forecast.summary;
		this.icon.setAttribute(
			'src',
			`https://icon-library.net//images/weather-icon-png/weather-icon-png-6.jpg`
		);
		this.icon.setAttribute('width', `50px`);
		this.humidity.textContent = `Humidity: ${
			weather.forecast.data[0].humidity
		}`;
		this.visibility.textContent = `Visibility: ${
			weather.forecast.data[0].visibility
		}`;
		this.dewPoint.textContent = `Dew Point: ${
			weather.forecast.data[0].dewPoint
		}`;
		this.wind.textContent = `Wind Speed: ${weather.forecast.data[0].windSpeed}`;
	}
}
