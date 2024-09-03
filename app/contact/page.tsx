import { FC } from 'react';
import Head from 'next/head';

const ContactPage: FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Hotel Booking</title>
        <meta
          name="description"
          content="Contact us for any inquiries, reservations, or support regarding your stay at our hotel."
        />
      </Head>
      <div className="min-h-screen bg-black p-6 pt-[100px]">
        <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
            Contact Us
          </h1>
          <p className="text-center text-lg mb-6 text-black">
            For any inquiries, reservations, or support, please fill out the form below or contact us directly.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@example.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message here..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
