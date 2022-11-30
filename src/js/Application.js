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
    this.clearData()
    const newEmojis = this.addBananas(this.emojis)
    const p = document.createElement('p')
    const wrapper = document.querySelector('#emojis')
    p.textContent = newEmojis
    wrapper.appendChild(p)

  }

  addBananas(emojis) {
    const allEmojis = emojis.map(el => {
      return this.banana
    })
    return allEmojis
  }

  clearData(){
    document.querySelector('#emojis').textContent = ''
  }
}


