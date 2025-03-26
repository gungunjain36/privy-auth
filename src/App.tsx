import { usePrivy } from '@privy-io/react-auth';
import './App.css';

function App() {
  const { login, authenticated, user, logout } = usePrivy();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">PayZoll Dashboard</h1>
            </div>
            <div className="flex items-center">
              {authenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">
                    {user?.email?.toString() || user?.wallet?.address}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={login}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {authenticated ? (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to PayZoll!</h2>
            <p className="text-gray-600">
              You are now connected with your wallet. Start managing your payments and transactions.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-blue-900">Balance</h3>
                <p className="mt-2 text-3xl font-bold text-blue-900">$0.00</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-green-900">Transactions</h3>
                <p className="mt-2 text-3xl font-bold text-green-900">0</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-purple-900">Connected Apps</h3>
                <p className="mt-2 text-3xl font-bold text-purple-900">1</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to PayZoll</h2>
            <p className="text-gray-600 mb-6">
              Connect your wallet to start managing your payments and transactions.
            </p>
            {/* <button
              onClick={login}
              className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors text-lg"
            >
              Connect Wallet
            </button> */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
