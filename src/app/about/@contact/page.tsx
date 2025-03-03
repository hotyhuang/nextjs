import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <PhoneIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3">
        <EnvelopeIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">contact@example.com</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3">
        <MapPinIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium">Address</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            123 Tech Boulevard<br />
            San Francisco, CA 94107
          </p>
        </div>
      </div>
      
      <div className="pt-4 mt-4 border-t border-indigo-200 dark:border-indigo-800">
        <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-150 ease-in-out">
          Contact Us
        </button>
      </div>
    </div>
  );
} 