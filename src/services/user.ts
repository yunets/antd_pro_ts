import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

// export async function queryCurrent(): Promise<any> {
//   debugger;
//   return request('/api/currentUser');
//
// }

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}

export async function login(params) {
  return request('/api/login', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function queryCurrent(): Promise<any> {
  debugger;
  const params={
    username:'admin',
   // password:'admin'
  };
  const params1=JSON.stringify(params);
  console.log(params1);
  return request('/api/test', {
    method: 'POST',
    body: {
      params1,
      // username:'admin',
      // password:'admin',
      method: 'post',
    },
  });
}
