"use client"
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function LoginForm() {
    // async function handleSubmit(event: any) {
    //     event.preventDefault()
    //     const data = {
    //         email: event.target.email.value,
    //         password: event.target.password.value,
    //     }
    //     console.log(data)
    // }

    const productSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is Required'),
        password: Yup.string()
            .min(8, 'Password must be 8 characters or more')
            .max(20, 'Password must be 20 characters or less')
            .required('Password is Required'),
    });

    const formik = useFormik({
        initialValues: {
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
                {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="bg-gray-500 w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Flowbite
          </a> */}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={formik.values.email} onChange={formik.handleChange}/>
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
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formik.values.password} onChange={formik.handleChange}/>
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
                            {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div> */}
                            <button type="submit" className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
