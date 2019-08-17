class Weather {
	constructor(city, state) {
		this.apiKey = '04c2ce4cc05aa9b649f506584e584513';
		this.city = city;
		this.state = state;
	}

	// Fetch weather from API
	async getWeather() {
		const searchedLocation = await geocode(this.city, this.state);
		const darkskyResponse = await fetch(
			`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${
				this.apiKey
			}/${searchedLocation.latitude},${
				searchedLocation.longitude
			}?lang=en&units=si`
		);
		const responseData = await darkskyResponse.json();

		return {
			city: this.city,
			state: this.state,
			forecast: responseData.daily
		};
	}

	// Change weather location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}
