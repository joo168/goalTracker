import React from 'react';
import Header from '../../components/common/Header';
import { setUser } from '../../modules/user';
import { connect } from 'react-redux';

const HeaderContainer = ({ username, setUser }) => {
  const loadUser = () => {
    try {
      const currentUser = localStorage.getItem('username');
      if (currentUser === null) {
        return undefined;
      }
      const result = JSON.parse(currentUser);
      setUser(result);
    } catch (e) {
      return undefined;
    }
  };
  loadUser();
  return <Header username={username} />;
};

export default connect(
  ({ user }) => ({
    username: user.username,
  }),
  {
    setUser,
  },
)(HeaderContainer);