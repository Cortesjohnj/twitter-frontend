import React, { useEffect, useState, useContext } from 'react';
import InfoProfile from '../components/InfoProfile';
import API from '../api';
import UserContext from '../containers/UserContext';

export default function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const context = useContext(UserContext);
  const { user = null } = context;
  const { username } = user;
  async function loadProfile({ username }) {
    const data = await API.getProfile(username);
    setUserInfo(data);
  }

  useEffect(() => {
    loadProfile({ username });
  }, [username]);

  return <>{userInfo && <InfoProfile {...userInfo} />}</>;
}
