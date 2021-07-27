export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseURL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }

    return data;
  }
}
