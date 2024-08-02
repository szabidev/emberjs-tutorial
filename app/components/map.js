// map.js file is adds functionality to the MapComponent component to generate a static map image using the Mapbox Static Images API.
// get src() method returns the URL for the map image using the Mapbox Static Images API and the provided arguments.
// get token() method returns the encoded Mapbox access token from the environment configuration.

// MapComponent is a Glimmer component that generates a static map image using the Mapbox Static Images API.

// The component takes the following arguments:
// - lng: The longitude of the location to display.
// - lat: The latitude of the location to display.
// - width: The width of the map image in pixels.
// - height: The height of the map image in pixels.
// - zoom: The zoom level of the map image.

// The component calculates the URL for the map image using the Mapbox Static Images API and the provided arguments.
// The token property returns the encoded Mapbox access token from the environment configuration.

import Component from '@glimmer/component';
import ENV from 'super-rentals-emberjs-demo/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
