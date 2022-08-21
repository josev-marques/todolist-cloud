const prod = process.env.NODE_ENV === 'production';

export const URLS = {
  frontUrl: prod ? 'https://todo-list-9.herokuapp.com' : 'http://localhost:3000',
  backUrl: prod ? 'https://todolist-backend-9.herokuapp.com' : 'http://localhost:5000',
}
export const PORT = process.env.PORT || 5000;
