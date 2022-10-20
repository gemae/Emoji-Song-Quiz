import './counter';
import './players';
import './timer';
import './winner'

import getItems from './game'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
class BasePage {
    constructor() {
        this.init();    
    }
    init(){
        this.onReady();
        Alpine.start();
    }
    onReady(){
        getItems.init();
    }
}

new BasePage;
