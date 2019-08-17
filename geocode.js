const mapboxKey =
	'pk.eyJ1IjoidG9ueW93bGFwaSIsImEiOiJjanQ3YnZ2OTIwcWZoNDNyMWEyZDE2ZXZjIn0.KSARRhm8kBXIyTovsqM7VA';

const geocode = async function(city, state) {
	const searchText = encodeURI(`${city},${state}`);
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${mapboxKey}&limit=1`;

	const mapboxResponse = await fetch(url);
	const response = await mapboxResponse.json();

	return {
		latitude: response.features[0].center[1],
		longitude: response.features[0].center[0]
	};
};
