import Watcher from "../../Watcher";

class AppWatcher extends Watcher {
  #query = "";
  #info = "";

  constructor(parent) {
    super(parent);
    // this.callFunction = Meteor.call;
    // this.callSubscribe = Meteor.subscribe;
  }

  get Query() {
    return this.#query;
  }
  get Info() {
    return this.#info;
  }

  setQuery(query) {
    this.#query = query;
    // this.activateWatcher();
  }
  setInfo(info) {
    this.#info = info;
    this.activateWatcher();
  }
}

export default new AppWatcher();
