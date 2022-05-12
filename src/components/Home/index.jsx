import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (loading) return <h3>loading...</h3>;
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
