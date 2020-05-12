import React from 'react';
import StartViewer from '../../components/start/StartViewer';
import { setUser } from '../../modules/user';
import { connect } from 'react-redux';

const StartContainer = ({ username, setUser }) => {
  return <StartViewer setUser={setUser} username={username} />;
};

export default connect(
  ({ user }) => ({
    username: user.username,
  }),
  {
    setUser,
  },
)(StartContainer);
