export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  async fetch(url, options) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
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
    if (res.status > 299 || res.status < 200) {
      const message = 'http통신 문제 🤪';
      throw new Error(message);
    }

    return data;
  }
}
