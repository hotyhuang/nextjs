'use server'

type FormState = {
  success: boolean;
  message: string;
  submitted: boolean;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extract form data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // Validate form data
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please fill out all fields',
      submitted: true
    };
  }
  
  // Log the data (as requested)
  console.log('Contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real application, you would send an email or store in a database here
  
  // Return success response
  return {
    success: true,
    message: 'Thank you for your message. We will get back to you soon!',
    submitted: true
  };
} 