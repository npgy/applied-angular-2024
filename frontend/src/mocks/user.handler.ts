import { delay, http, HttpResponse } from 'msw';

const handlers = [
  http.get('/api/user-info', async () => {
    // await delay(2000);
    return new HttpResponse('Not Authorized', {
      status: 401,
    });
    return HttpResponse.json({ userName: 'Nicky P' });
  }),
];

export default handlers;
