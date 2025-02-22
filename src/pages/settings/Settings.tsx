
import { useState } from "react";
import { Moon, Sun, Bell, Lock, UserCircle, ChevronRight } from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

          {/* Account Settings */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Account Settings
              </h3>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-sm text-gray-900">
                      Email Notifications
                    </span>
                  </div>
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`${
                      emailNotifications ? "bg-gray-900" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                  >
                    <span
                      className={`${
                        emailNotifications ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {darkMode ? (
                      <Moon className="h-5 w-5 text-gray-400 mr-3" />
                    ) : (
                      <Sun className="h-5 w-5 text-gray-400 mr-3" />
                    )}
                    <span className="text-sm text-gray-900">Dark Mode</span>
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`${
                      darkMode ? "bg-gray-900" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
                  >
                    <span
                      className={`${
                        darkMode ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Security</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <Lock className="h-5 w-5 text-gray-400 mr-3" />
                    <span>Change Password</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <UserCircle className="h-5 w-5 text-gray-400 mr-3" />
                    <span>Two-Factor Authentication</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-red-600 mb-4">
                Danger Zone
              </h3>
              <button className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
