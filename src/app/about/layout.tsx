import { Suspense } from 'react';

export default function AboutLayout({
  children,
  contact,
  analytics,
}: {
  children: React.ReactNode;
  contact: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Main content */}
            <div className="col-span-1 lg:col-span-2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                About Our Company
              </h1>
              {children}
            </div>
            
            {/* Sidebar with parallel routes */}
            <div className="col-span-1 flex flex-col">
              {/* Contact section */}
              <div className="p-6 bg-indigo-50 dark:bg-indigo-900/30">
                <h2 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">
                  Contact Us
                </h2>
                <Suspense fallback={<div className="animate-pulse h-40 bg-gray-200 dark:bg-gray-700 rounded"></div>}>
                  {contact}
                </Suspense>
              </div>
              
              {/* Analytics section */}
              <div className="p-6 bg-emerald-50 dark:bg-emerald-900/30 flex-grow">
                <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
                  Company Analytics
                </h2>
                <Suspense fallback={<div className="animate-pulse h-40 bg-gray-200 dark:bg-gray-700 rounded"></div>}>
                  {analytics}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 