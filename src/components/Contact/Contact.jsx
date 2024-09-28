import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <>
        <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
        <div className=" flex items-center justify-center">
            
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-md shadow-xl w-full max-w-sm md:max-w-lg"
            >
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-gray-600">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                        placeholder="Message"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                    >
                        SEND MESSAGE
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default Contact;
