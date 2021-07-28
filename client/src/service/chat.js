export default class ChatService {
  constructor(http) {
    this.http = http;
  }

  async getRoomList() {
    return this.http.fetch({
      method: 'GET',
    });
  }

  async postRoom(username, title) {
    return this.http.fetch({
      method: 'POST',
      body: JSON.stringify({ username, title }),
    });
  }
  hello() {
    console.log('hello');
  }
}
