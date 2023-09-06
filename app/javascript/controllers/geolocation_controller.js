import { Controller } from "@hotwired/stimulus"
import { getDistance, convertDistance } from 'geolib';
import { isEmpty } from 'lodash-es';

export default class extends Controller {
  static targets = ['property'];
  connect() {
    console.log(this.element.dataset.latitude);

    if(isEmpty(this.element.dataset.latitude) && isEmpty(this.element.dataset.longitude)){
        window.navigator.geolocation.getCurrentPosition((pos) => { 
        this.element.dataset.latitude = pos.coords.latitude;
        this.element.dataset.longitude = pos.coords.longitude;

        this.propertyTargets.forEach((propertyTarget) => {
          let distanceFrom = getDistance({
            latitude: this.element.dataset.latitude,
            longitude: this.element.dataset.longitude        
          }, 
          {
            latitude: propertyTarget.dataset.latitude,
            longitude: propertyTarget.dataset.longitude
          });
          propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom, 'km'))} Kms Away`;
        });
      });
    } else {
        this.propertyTargets.forEach((propertyTarget) => {
          let distanceFrom = getDistance({
            latitude: this.element.dataset.latitude,
            longitude: this.element.dataset.longitude        
          }, 
          {
            latitude: propertyTarget.dataset.latitude,
            longitude: propertyTarget.dataset.longitude
          });
          propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom, 'km'))} Kms Away`;
        });
    }
  }
}
