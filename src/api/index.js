import * as tweets from './tweets';
import * as users from './users';
import * as profile from './getProfile';

const API = {
  ...tweets,
  ...users,
  ...profile,
};

export default API;
