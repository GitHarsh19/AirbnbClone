import { Controller } from "@hotwired/stimulus"

export default class extends Controller { 
 favourite() {
 	if(this.element.dataset.favourited === 'true'){
 		this.element.setAttribute('fill','none');
 		this.element.dataset.favourited = 'false';
 	} else {
 		this.element.dataset.favourited = 'true';
 		this.element.setAttribute('fill','red');
 	}
 }
}
