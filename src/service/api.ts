import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Accept-Version': 'v1',
    'Authorization': 'Client-ID 6oQlzP7xupwgs5QnjAjRgZfVIUxQyyyJRaeLAQp3cLE'
  }
})