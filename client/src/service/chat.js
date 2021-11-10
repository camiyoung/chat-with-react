export default class ChatService {
  constructor(http) {
    this.http = http;
  }

  async runServer() {
    return this.http.fetch(`/server`, {
      method: 'GET',
    });
  }
  async signup(username) {
    return this.http.fetch(`/signup`, {
      method: 'POST',
      body: JSON.stringify({ username }),
    });
  }

  async getRoomList() {
    return this.http.fetch(`/chat`, {
      method: 'GET',
    });
  }

  async getMyRooms(username) {
    return this.http.fetch(`/user/${username}`, {
      method: 'GET',
    });
  }

  async postRoom(username, title) {
    return this.http.fetch('/chat', {
      method: 'POST',
      body: JSON.stringify({ username, title }),
    });
  }

  async joinRoom(username, title) {
    return this.http.fetch(`/user/${title}`, {
      method: 'POST',
      body: JSON.stringify({ username }),
    });
  }

  async getRoom(title) {
    return this.http.fetch(`/chat/${title}`, {
      method: 'GET',
    });
  }
}
