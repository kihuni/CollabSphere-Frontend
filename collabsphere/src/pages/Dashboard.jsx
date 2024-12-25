// Dashboard.jsx (continued)
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to CollabSphere
        </h1>
        <p className="text-xl text-gray-600">
          Real-time collaboration made simple
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Rooms */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Popular Rooms</h2>
          <div className="space-y-4">
            {isAuthenticated ? (
              <>
                <Link to="/chat/1" className="block hover:bg-gray-50 p-3 rounded">
                  <div className="font-medium">#general</div>
                  <div className="text-sm text-gray-500">Open discussions</div>
                </Link>
                <Link to="/chat/2" className="block hover:bg-gray-50 p-3 rounded">
                  <div className="font-medium">#development</div>
                  <div className="text-sm text-gray-500">Tech talks</div>
                </Link>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-600 mb-4">Sign in to join rooms</p>
                <Link
                  to="/auth"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Login / Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Community Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">1,234</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">56</div>
              <div className="text-gray-600">Active Rooms</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            {isAuthenticated ? (
              <>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Create New Room
                </button>
                <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Join Random Room
                </button>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-600">Login to access all features</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;