export class ApiClient {
  _fakeResponse?: {
    code: '201';
    message: 'Success!';
  };

  FETCH_USER_WITH_CREDENTIALS = (email: string, pass: string) => {
    // console.log('User has logged in: ', email, pass);
    return this;
  };
}
