import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const p = document.createElement('p')
    const wrapper = document.querySelector('#emojis')
    this.clearData()
    const newEmojis = this.addBananas(this.emojis)
    p.textContent = newEmojis
    wrapper.appendChild(p)

  }

  addBananas() {
    let newArr = this.emojis.map(el =>  el + ' ' + this.banana);
    return newArr
  }

  clearData(){
    document.querySelector('#emojis').textContent = ''
  }
}


