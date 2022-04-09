class YoutubeFetch {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('video', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    if (query === null || query === '') {
      return;
    }
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 25,
      },
    });
    return response.data.items;
  }
}

export default YoutubeFetch;
