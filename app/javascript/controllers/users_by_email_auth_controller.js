import { Controller } from "@hotwired/stimulus"
import axios from 'axios';

export default class extends Controller {
  static targets = ['email','submit','emailWrapper'];
  connect () {
      
      this.submitTarget.addEventListener('click', (e) => {
        e.preventDefault();
        if(this.emailTarget.value.length === 0 ) {
          //this.emailWrapperTarget.classList.add('invalid-inset-input-text-field');
          //this.emailWrapperTarget.classList.remove('text-gray-800 dark:text-gray-100');
          //this.emailWrapperTarget.classList.remove('text-red-900 placeholder-red-300 dark:text-gray-400 border-black-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red dark:focus:border-red');

        } else {
          axios.get('/api/users_by_emails', {
            params: {
              email: this.emailTarget.value
            },
            headers: {
               'ACCEPT': 'application/json'
            }
          }).then((response)=> {
            Turbo.visit('/users/sign_in')
          }).catch((response) => {
            Turbo.visit('/users/sign_up')
          })
        }
      });
  }
}
