import React, { useEffect, useState } from 'react';
import InfoProfile from '../components/InfoProfile';
import API from '../api';
import { connect } from 'react-redux';

function Profile({ user }) {
  const [userInfo, setUserInfo] = useState(null);
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
