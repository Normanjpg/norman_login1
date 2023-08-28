import React from 'react'

const Footer = () => {
    return (
        <div>
            <>
                {/* Copyright */}
                <div
                    className="bg-gray-800 pt-4 pb-4"
                >
                    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="col">
                            <div className='row'>
                                <div className="text-white">
                                    © Copyright{" "}
                                    <strong>
                                        <span>Norman</span>
                                    </strong>
                                    . All Rights Reserved
                                </div>
                                <div className="text-white">
                                    Designed by{" "}
                                    <a
                                        href="https://bootstrapmade.com/"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Flowbites
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Footer