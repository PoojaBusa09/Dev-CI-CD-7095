import { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ username: "", password: "" });

  // keep login after refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = () => {
    if (form.username === "admin" && form.password === "admin") {
      const u = { name: form.username };
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
    } else {
      alert("Invalid credentials ❌ (use admin/admin)");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">

        {/* Navbar */}
        <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow">
          <h1 className="text-xl font-bold">Facebook UI 🚀</h1>

          <div className="flex gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="bg-white text-black px-3 py-1 rounded"
            >
              Toggle 🌙
            </button>

            {user && (
              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {!user ? (
          // LOGIN PAGE
          <div className="flex items-center justify-center h-[80vh]">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow w-80">
              <h2 className="text-xl font-semibold mb-4">Login</h2>

              <input
                className="w-full mb-3 p-2 rounded border"
                placeholder="Username"
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
              />

              <input
                className="w-full mb-3 p-2 rounded border"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />

              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Login
              </button>

              <p className="text-sm mt-2 text-gray-500">
                Hint: admin / admin
              </p>
            </div>
          </div>
        ) : (
          // DASHBOARD
          <div className="p-4 space-y-4">

            <h2 className="text-2xl font-bold">
              Welcome {user.name} 👋
            </h2>

            <div className="grid grid-cols-3 gap-4">

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                📊 Posts<br />
                <b>120</b>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                👥 Friends<br />
                <b>540</b>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                🔔 Notifications<br />
                <b>12</b>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}
