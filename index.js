class Mobile {
  constructor(name) {
    this.name = name;
    this.battery = 100;
    this.isOn = false;
    this.draft = "";
    this.inbox = [];
    this.sent = [];
  }

  checkStatus() {
    alert(
      `${this.name} is ${this.isOn ? "ON" : "OFF"}. Battery: ${this.battery}%`
    );
  }

  turnOn() {
    if (this.battery > 0) {
      this.isOn = true;
      alert(`${this.name} is now ON.`);
    } else {
      alert(`${this.name} battery empty, please charge.`);
    }
  }

  turnOff() {
    this.isOn = false;
    alert(`${this.name} is now OFF.`);
  }

  charge(amount) {
    this.battery = Math.min(100, this.battery + amount);
    alert(`${this.name} charged, battery = ${this.battery}%.`);
  }

  composeMessage(text) {
    if (this.isOn && this.battery > 0) {
      this.draft = text;
      this.useBattery();
      alert(`${this.name} composed a draft: ${text}`);
    } else {
      alert(`${this.name} is off or battery empty.`);
    }
  }

  sendMessage(otherMobile) {
    if (this.isOn && this.battery > 0) {
      if (this.draft !== "") {
        let msg = this.draft;
        otherMobile.receiveMessage(this.name, msg);
        this.sent.push(msg);
        this.draft = "";
        this.useBattery();
        alert(`${this.name} sent message to ${otherMobile.name}.`);
      } else {
        alert("No draft to send.");
      }
    } else {
      alert(`${this.name} is off or battery empty.`);
    }
  }

  receiveMessage(sender, msg) {
    if (this.isOn) {
      this.inbox.push(`From ${sender}: ${msg}`);
    } else {
      this.inbox.push(`(While OFF) From ${sender}: ${msg}`);
    }
  }

  viewInbox() {
    let content =
      this.inbox.length === 0 ? "Inbox empty." : this.inbox.join("\n");
    alert(`${this.name} Inbox:\n${content}`);
  }

  viewSent() {
    let content =
      this.sent.length === 0 ? "No sent messages." : this.sent.join("\n");
    alert(`${this.name} Sent:\n${content}`);
  }

  useBattery() {
    this.battery -= 1;
    if (this.battery <= 0) {
      this.battery = 0;
      this.isOn = false;
      alert(`${this.name} ran out of battery and turned OFF.`);
    }
  }
}

// Khởi tạo 2 điện thoại
let iphone = new Mobile("iPhone");
let samsung = new Mobile("Samsung");
