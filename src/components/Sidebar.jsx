import React, { useState } from 'react';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import profile from '../../public/profile.jpg'

const Sidebar = ({ setCurrentComponent }) => {
    return (
        <div className="flex justify-start p-4 sm:p-8 bg-[#1E1E1F] flex-col items-center rounded-3xl text-white max-w-sm mx-auto">
            <div>
                <Avatar
                    isBordered
                    color="danger"
                    radius="sm"
                    src={profile}
                    className="w-40 h-40 sm:w-60 sm:h-60"
                />
            </div>

            <div className="flex justify-center items-center flex-col pt-4 gap-3 pb-6 border-b-2 border-black w-full">
                <h1 className="text-md sm:text-xl font-bold text-center">
                    NITIPAT WONGWAIKUNANANT
                </h1>
                <Button
                    isIconOnly
                    color="warning"
                    variant="shadow"
                    aria-label="text me"
                    className="w-full  py-5 bg-black drop-shadow-xl text-white px-8 hover:text-orange-500"
                >
                    <p className="text-lg sm:text-xl">Acting Frontend Developer</p>
                </Button>
            </div>

            <div className="py-10 w-full">
                <ul className="flex flex-col gap-5 px-2">
                    <li className="flex justify-start items-center">
                        <Button
                            isIconOnly
                            color="warning"
                            variant="shadow"
                            aria-label="mail"
                            className="bg-black drop-shadow-xl text-orange-500 hover:text-white"
                        >
                            <MailOutlineIcon />
                        </Button>
                        <div className="flex flex-col justify-between pl-5">
                            <p className="font-bold text-default-500">EMAIL</p>
                            <span className="break-words text-sm sm:text-base">
                                Tenmonster@hotmail.com
                            </span>
                        </div>
                    </li>

                    <li className="flex justify-start items-center">
                        <Button
                            isIconOnly
                            color="warning"
                            variant="shadow"
                            aria-label="phone"
                            className="bg-black drop-shadow-xl text-orange-500 hover:text-white"
                        >
                            <PhoneAndroidOutlinedIcon />
                        </Button>
                        <div className="flex flex-col justify-between pl-5">
                            <p className="font-bold text-default-500">PHONE</p>
                            <span className="text-sm sm:text-base">082-681-7189</span>
                        </div>
                    </li>

                    <li className="flex justify-start items-center">
                        <Button
                            isIconOnly
                            color="warning"
                            variant="shadow"
                            aria-label="Birthdate"
                            className="bg-black drop-shadow-xl text-orange-500 hover:text-white"
                        >
                            <CalendarMonthOutlinedIcon />
                        </Button>
                        <div className="flex flex-col justify-between pl-5">
                            <p className="font-bold text-default-500">BIRTH DATE</p>
                            <span className="text-sm sm:text-base">28 April 1999</span>
                        </div>
                    </li>

                    <li className="flex justify-start items-center">
                        <Button
                            isIconOnly
                            color="warning"
                            variant="shadow"
                            aria-label="Location"
                            className="bg-black drop-shadow-xl text-orange-500 hover:text-white"
                        >
                            <LocationOnOutlinedIcon />
                        </Button>
                        <div className="flex flex-col justify-between pl-5">
                            <p className="font-bold text-default-500">LOCATION</p>
                            <span className="text-sm sm:text-base">
                                45 M.4 Bang Krang, Muang Nontaburi, Nonthaburi, 11000
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="pb-10 w-full">
                <ul className="flex justify-center gap-5 sm:gap-8 px-4 sm:px-10">
                    <li>
                        <Button
                            isIconOnly
                            onClick={() => window.open('https://github.com/Teneieiza', '_blank')}
                            color="warning"
                            variant="shadow"
                            aria-label="Go to Github"
                            className="bg-black drop-shadow-xl text-orange-500 hover:text-white"
                        >
                            <GitHubIcon />
                        </Button>
                    </li>
                    <li>
                        <Button
                            isIconOnly
                            onClick={() =>
                                window.open('https://www.linkedin.com/in/nitipat-wongwaikunanant/', '_blank')
                            }
                            color="warning"
                            variant="shadow"
                            aria-label="Go to Linkedin"
                            className="bg-black drop-shadow-xl text-orange-500 hover:text-white"
                        >
                            <LinkedInIcon />
                        </Button>
                    </li>
                    <li>
                        <a href="../../public/Nitipat_CV.pdf" download="Nitipat_CV.pdf">
                            <Button
                                color="warning"
                                variant="shadow"
                                aria-label="Download file"
                                className="bg-black drop-shadow-xl text-orange-500 hover:text-white flex items-center"
                            >
                                <SimCardDownloadIcon />
                                <p className="font-bold text-sm sm:text-base pl-2">Resume</p>
                            </Button>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <Button
                    onClick={() => setCurrentComponent('home')}
                    color="warning"
                    variant="ghost"
                    className="w-full text-white mb-2 font-bold"
                >
                    Go to Home
                </Button>
                <Button
                    onClick={() => setCurrentComponent('about')}
                    color="warning"
                    variant="ghost"
                    className="w-full text-white font-bold"
                >
                    Go to About Me
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
