class Mobile {
  constructor(name) {
    this.name = name;
    this.battery = 100;
    this.isOn = false;
    this.darft = "";
    this.inbox = [];
    this.sentContain = [];
  }

  checkStatus() {
    alert(
      `${this.name} is ${this.isOn ? "On" : "Off"}. The battery is ${
        this.battery
      }%`
    );
  }

  turnOn() {
    if (this.battery > 0) {
      this.isOn = true;
      alert(`${this.name} is now On!`);
    } else {
      alert(
        `${this.name} is runing out of battery. Please charging it to use!`
      );
    }
  }

  turnOf() {
    this.isOn = false;
    alert(`${this.name} is now off!`);
  }

  charge(amuont) {
    this.battery = Math.min(100, this.battery + 20);
    alert(`The battery now is ${this.battery}`);
  }

  composeMessage(text) {
    if (this.battery > 0 && this.isOn) {
      this.darft = text;
      alert(`${this.name}'s compose is ${this.darft}`);
    } else {
      alert(
        `${this.name} is out of battery or off. Please turn it on or if it's emty charging to do!`
      );
    }
  }

  sendMessage(otherMobile) {
    if (this.battery > 0 && this.isOn) {
      if (this.darft !== "") {
        let msg = this.darft;
        otherMobile.reciveMessage(this.name, msg);
        this.sentContain.push(msg);
        this.darft = "";
        alert(`${this.name} send message to ${otherMobile.name} `);
      } else {
        alert("No draft to send!");
      }
    } else {
      alert(`Make sure the device still turn on and have enough battery!`);
    }
  }
  reciveMessage(sender, msg) {
    if (this.isOn) {
      this.inbox.push(`from ${sender}: ${msg}`);
    } else {
      this.inbox.push(` While OFf form ${sender}: ${msg}`);
    }
  }
  viewMessage() {
    if (this.inbox.length === 0) {
      alert("inbox is empty!");
    } else {
      let content = this.inbox.join("\n");
      alert(`${this.name} inbox: \n${content}`);
    }
  }
  messageSent() {
    if (this.sentContain === 0) {
      alert("Send message is empty!");
    } else {
      let content = this.sentContain.join("\n");
      alert(`${this.name} sent: \n${content} `);
    }
  }
}
let iphone = new Mobile("Iphone");
let samsung = new Mobile("Samsung");
