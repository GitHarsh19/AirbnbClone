import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  connect() {
    window.navigator.geolocation.getCurrentPosition((pos) => { 
    
    this.element.dataset.latitude = pos.coords.latitude;
    this.element.dataset.longitude = pos.coords.longitude;
    });
  }
}
