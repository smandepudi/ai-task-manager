function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            AI Task Manager
          </h1>
          <p className="text-gray-600 mb-6">
            Built with React, TypeScript & Tailwind CSS
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Tailwind CSS Working
            </span>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
          <p className="text-sm text-indigo-800 text-center">
            🎉 Frontend setup complete! Ready for Phase 2.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;