import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

const Registration = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        contact: Yup.string().matches(/^[0-9]+$/, 'Contact must be a number').required('Contact is required'),
    });

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async(data) => {
        console.log(data); // Handle form submission logic here
    
            try {
              const response = await axios.post('http://localhost:8080/api/users/SignUp', data); // Replace '/api/register' with your actual API endpoint
              console.log(response.data); // Handle successful response
            } catch (error) {
                if (error.response) {
                    console.log('Registration failed:', error.response);}
            }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an Account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                            <div className="mt-2">
                                <Controller
                                    name="firstName"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="firstName"
                                            type="text"
                                            autoComplete="given-name"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.firstName ? 'ring-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.firstName && <div className="text-sm text-red-500">{errors.firstName.message}</div>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                            <div className="mt-2">
                                <Controller
                                    name="lastName"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="lastName"
                                            type="text"
                                            autoComplete="family-name"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.lastName ? 'ring-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.lastName && <div className="text-sm text-red-500">{errors.lastName.message}</div>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <Controller
                                    name="username"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="username"
                                            type="text"
                                            autoComplete="username"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.username ? 'ring-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.username && <div className="text-sm text-red-500">{errors.username.message}</div>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                            <div className="mt-2">
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="email"
                                            type="email"
                                            autoComplete="email"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? 'ring-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.email && <div className="text-sm text-red-500">{errors.email.message}</div>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="password"
                                            type="password"
                                            autoComplete="new-password"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.password ? 'ring-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.password && <div className="text-sm text-red-500">{errors.password.message}</div>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Contact</label>
                            <div className="mt-2">
                                <Controller
                                    name="contact"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            id="contact"
                                            type="text"
                                            autoComplete="tel"
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.contact ? 'ring-red-500' : ''}`}
                                        />
                                    )}
                                />
                                {errors.contact && <div className="text-sm text-red-500">{errors.contact.message}</div>}
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in here</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Registration