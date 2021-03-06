import React from 'react';
import { removeUser } from './Utils/Common';

function Dashboard(props) {
  
  // handle click event of logout button
  const handleLogout = () => {
    removeUser();
    props.history.push('/login');
  }

  return (
    <div>
      Welcome!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
