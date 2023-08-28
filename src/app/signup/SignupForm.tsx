"use client"
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function SignupForm() {
    // async function handleSubmit(event: any) {
    //     event.preventDefault()
    //     const data = {
    //         username: event.target.username.value,
    //         email: event.target.email.value,
    //         password: event.target.password.value,
    //     }
    //     console.log(data)
    // }

    const productSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, 'must be 3 character or more')
            .max(20, 'Must be 20 characters or less')
            .required('Username is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or more')
            .max(20, 'Password must be 20 characters or less')
            .required('Password is Required'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: productSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
            formik.resetForm();
        },
    });
    return (

        <section className="bg-white-300 w-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign Up for your account
                        </h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" onChange={formik.handleChange} value={formik.values.username} />
                                {formik.touched.username && !formik.errors.username ? (
                                    <div
                                        className="text-green-500"
                                        style={{ display: "inline-block" }}
                                    >
                                        Your Username is valid!
                                    </div>
                                ) : null}
                                {formik.errors.username && formik.touched.username ? (
                                    <div
                                        className="text-red-500"
                                        style={{ display: "inline-block" }}
                                    >
                                        {formik.errors.username}
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={formik.handleChange} value={formik.values.email} />
                                {formik.touched.email && !formik.errors.email ? (
                                    <div
                                        className="text-green-500"
                                        style={{ display: "inline-block" }}
                                    >
                                        Your Email is valid!
                                    </div>
                                ) : null}
                                {formik.errors.email && formik.touched.email ? (
                                    <div
                                        className="text-red-500"
                                        style={{ display: "inline-block" }}
                                    >
                                        {formik.errors.email}
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={formik.handleChange} value={formik.values.password} />
                                {formik.touched.password && !formik.errors.password ? (
                                    <div
                                        className="text-green-500"
                                        style={{ display: "inline-block" }}
                                    >
                                        Your password is valid!
                                    </div>
                                ) : null}
                                {formik.errors.password && formik.touched.password ? (
                                    <div
                                        className="text-red-500"
                                        style={{ display: "inline-block" }}
                                    >
                                        {formik.errors.password}
                                    </div>
                                ) : null}
                            </div>
                            <button type="submit" className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                        </form>

                    </div>
                </div>

            </div>
        </section>
    )
}