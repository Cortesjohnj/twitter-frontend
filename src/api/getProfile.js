import http from './http';
import * as Auth from '../utils/auth';

export function getProfile(username) {
  return http
    .get(`/users/${username}`, {
      headers: {
        'x-access-token': Auth.getToken(),
      },
    })
    .then((response) => {
      const { data = {} } = response;

      const { items = [] } = data;
      const [item = {}] = items;
      const { name = '', username = '' } = item;
      const profile = { name, username };
      return profile;
    });
}
