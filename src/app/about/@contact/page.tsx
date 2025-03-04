'use client'

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from './actions';

// Submit button component with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactSection() {
  // Initial state for the form
  const initialState = {
    success: false,
    message: '',
    submitted: false
  };
  
  // Use form state hook to handle the form submission
  const [state, formAction] = useFormState(submitContactForm, initialState);

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
        <h3 className="font-medium mb-3">Send us a message</h3>
        
        {state.submitted && (
          <div className={`p-3 mb-3 rounded-md text-sm ${
            state.success 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
          }`}>
            {state.message}
          </div>
        )}
        
        <form action={formAction} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white text-sm"
            ></textarea>
          </div>
          
          <SubmitButton />
        </form>
      </div>
    </div>
  );
} 