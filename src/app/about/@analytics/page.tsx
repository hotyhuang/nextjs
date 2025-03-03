export default function AnalyticsSection() {
  // Dummy data for analytics
  const stats = [
    { label: 'Team Members', value: '42' },
    { label: 'Projects Completed', value: '150+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years in Business', value: '5' },
  ];
  
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Monthly Growth</h3>
        <div className="h-16 flex items-end space-x-1">
          {[35, 45, 30, 65, 50, 75, 40, 60, 70, 80, 65, 75].map((height, i) => (
            <div 
              key={i} 
              className="bg-emerald-500 dark:bg-emerald-400 rounded-t w-full" 
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
          <span>Jan</span>
          <span>Dec</span>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Last updated: June 15, 2024</p>
      </div>
    </div>
  );
} 