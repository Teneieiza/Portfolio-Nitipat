import React from 'react';
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const Nav = ({ setCurrentComponent }) => {
    return (
        <Navbar className="w-full rounded-3xl py-2 bg-white shadow-md">
            <NavbarContent className="flex justify-between items-center w-full">

                <div className="flex gap-8 md:gap-16 lg:gap-40 ">
                    <NavbarItem>
                        <Link
                            onClick={() => setCurrentComponent('home')}
                            className="font-bold text-black text-[18px] transition-all duration-500 
                                hover:[text-shadow:_0_0_10px_#ff9900,_0_0_20px_#ff6600,_0_0_30px_#ff3300,_0_0_40px_#ff0000] 
                                hover:text-black cursor-pointer"
                        >
                            HOME
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            onClick={() => setCurrentComponent('about')}
                            className="font-bold text-black text-[18px] transition-all duration-500 
                                hover:[text-shadow:_0_0_10px_#ff9900,_0_0_20px_#ff6600,_0_0_30px_#ff3300,_0_0_40px_#ff0000] 
                                hover:text-black cursor-pointer"
                        >
                            ABOUT
                        </Link>
                    </NavbarItem>
                </div>
            </NavbarContent>
        </Navbar>
    );
};

export default Nav;
