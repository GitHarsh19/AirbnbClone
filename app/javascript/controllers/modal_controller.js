import { Controller } from "@hotwired/stimulus"
import {enter, leave,  toggle} from 'el-transition'

export default class extends Controller {
  static targets = ['closeButton'];
  connect() {
    this.closeButtonTarget.addEventListener('click',() => {
      leave(document.getElementById('modal-wrapper'));
      leave(document.getElementById('modal-bg'));
      leave(document.getElementById('modal-panel'));
    });
    document.getElementById('modal-wrapper').addEventListener('click',this.closeModal);
  }
  closeModal(event){
    const modalPanelClicked = document.getElementById('modal-panel').contains(event.target);
    
    if(!modalPanelClicked && event.target.id !== 'modal-trigger'){
      leave(document.getElementById('modal-wrapper'));
      leave(document.getElementById('modal-bg'));
      leave(document.getElementById('modal-panel'));
    }
  }
  showModal(){
    enter(document.getElementById('modal-wrapper'));
    enter(document.getElementById('modal-bg'));
    enter(document.getElementById('modal-panel'));
  }
}
