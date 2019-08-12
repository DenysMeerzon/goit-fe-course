const baseUrl = 'https://newsapi.org/v2/everything';

export default {
  page: 1,
  query: '',
  fetchArticles() {
    const options = {
      headers: {
        Authorization: '1c045f42095a416b8fedf3f545e9bfc3',
      },
    };
    const requestParams = `?q=${this.query}&page=${this.page}&pageSize=12`;
    return fetch(baseUrl + requestParams, options)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.articles;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
