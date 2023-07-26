import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        // fill space bg-color left and right
        <footer className=" text-white w-full">
            {/* background img movies  and make bottuns toucheble*/}
            <div className="absolute  bg-gradient-to-r from-black to-transparent z-0"></div>
            {/* <Image src="https://wallpaperaccess.com/full/5957978.jpg" alt="background" className="absolute w-full h-60 object-cover opacity-60 z-0"
              style={{ touchAction: 'none' }}
              width={1920}
              height={1080}
            /> */}
            <div className="container mx-auto py-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-1 mx-10 ">
                        <h6 className="font-bold hover:text-yellow-500">Get in touch</h6>
                        <ul className="mt-4">
                            <li>
                                <a className="hover:text-orange-600" href="#">FAQs</a>
                            </li>
                            <li>
                                <a className="hover:text-orange-600" href="#">Give us feedback</a>
                            </li>
                            <li>
                                <a className="hover:text-orange-600" href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1 mx-10">
                        <h6 className="font-bold hover:text-yellow-500">About movie star</h6>
                        <ul className="mt-4">
                            <li>
                                <a className="hover:text-orange-600" href="#">FAQs</a>
                            </li>
                            <li>
                                <a className="hover:text-orange-600" href="#">Give us feedback</a>
                            </li>
                            <li>
                                <a className="hover:text-orange-600" href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1  mx-10">
                        <h6 className="font-bold hover:text-yellow-500">Legal stuff</h6>
                        <ul className="mt-4">
                            <li>
                                <a className="hover:text-orange-600" href="#">FAQs</a>
                            </li>
                            <li>
                                <a className="hover:text-orange-600" href="#">Give us feedback</a>
                            </li>
                            <li>
                                <a className="hover:text-orange-600" href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1  mx-10">
                        <h6 className="font-bold hover:text-yellow-500">Connect with us</h6>
                        <ul className="mt-4 flex space-x-4">
                            <li>
                                <a href="#" title="Twitter" target="_blank">
                                    <span className="fa fa-twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="http://" title="Facebook" target="_blank">
                                    <span className="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Google +" target="_blank">
                                    <span className="fa fa-google-plus"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-4">
                <p>{new Date().getFullYear()} ADiouane TVmovies. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
