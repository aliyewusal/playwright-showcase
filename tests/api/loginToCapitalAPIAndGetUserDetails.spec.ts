import { test, expect } from '@playwright/test';
// import { request } from '@playwright/test';

test.describe('@api Login and User Details API Tests', () => {
  let token: string;

  test.beforeEach(async ({ page }, testInfo) => {
    const response = await fetch('http://164.92.199.221/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'pawel.kur',
        password: 'P!ms*4P,@7E&a',
      }),
    });

    expect(response.status).toBe(200);

    const responseData = await response.json();
    token = responseData['x-api-token'];

    testInfo.token = token;
    console.log("Here is Token  " + token);
  });

  test('Get user details with token', async ({}, testInfo) => {
    const token = testInfo.token;

    console.log("And one more time hereee   " + token);

    const response = await fetch('http://164.92.199.221/me', {
      method: 'GET',
      headers: {
        'x-api-token': token,
      },
    });

    expect(response.status).toBe(200);

    const responseData = await response.json();
    console.log(responseData);
  });
});