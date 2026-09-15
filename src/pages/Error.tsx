import { Link } from 'react-router-dom'

interface ErrorPageProps {
  error?: Error | null
}

function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-8">
          {error?.message || 'An unexpected error occurred. Please try again later.'}
        </p>
        {error && (
          <pre className="bg-gray-100 p-4 rounded-lg text-left text-sm text-gray-700 mb-8 overflow-auto max-h-40">
            {error.stack}
          </pre>
        )}
        <Link
          to="/"
          className="inline-block bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage