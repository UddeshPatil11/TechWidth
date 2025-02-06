import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Auth = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="fixed top-4 right-4 z-50">
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          Log In
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {user?.picture && (
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="text-gray-900 font-medium">{user?.name}</span>
          </div>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;