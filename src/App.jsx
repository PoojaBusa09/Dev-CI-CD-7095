import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">

        {/* Navbar */}
        <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow">
          <h1 className="text-xl font-bold">Facebook UI 🚀</h1>
          <button
            onClick={() => setDark(!dark)}
            className="bg-white text-black px-3 py-1 rounded"
          >
            Toggle 🌙
          </button>
        </div>

        {!loggedIn ? (
          <div className="flex items-center justify-center h-[80vh]">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow w-80">
              <h2 className="text-xl font-semibold mb-4">Login</h2>
              <input className="w-full mb-3 p-2 rounded border" placeholder="Username" />
              <input className="w-full mb-3 p-2 rounded border" placeholder="Password" type="password"/>
              <button
                onClick={() => setLoggedIn(true)}
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="flex p-4 gap-4">

            {/* Sidebar */}
            <div className="w-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <ul className="space-y-3">
                <li>🏠 Home</li>
                <li>👥 Friends</li>
                <li>💬 Messages</li>
                <li>🔔 Notifications</li>
              </ul>
            </div>

            {/* Dashboard */}
            <div className="flex-1 space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h2 className="font-semibold">Pooja</h2>
                <p>Hello DevOps World 🚀</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h2 className="font-semibold">DevOps Dashboard</h2>
                <p>Docker + Kubernetes + CI/CD 🔥</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
