import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hometext = () => {
    return (
        <div className="bg-[#1E1E1F] rounded-3xl relative overflow-visible">
            <div className="flex flex-col justify-center items-start py-20 px-2 sm:py-32 sm:px-10 md:px-25 w-[600px] m marker:WQ,RETDC V]">
                <div className="w-full text-center sm:text-left">
                    <div className="mb-6 sm:mb-8 w-full">
                        <h2 className="bg-gradient-to-r from-orange-600 to-white text-transparent bg-clip-text text-2xl sm:text-4xl md:text-[50px] block w-full max-w-full whitespace-nowrap leading-tight">
                            Hello I'm
                        </h2>
                    </div>

                    <div className="mb-6 sm:mb-8 w-full">
                        <TypeAnimation
                            className="text-white text-2xl sm:text-4xl md:text-[45px] tracking-wider w-full"
                            sequence={[
                                1000,
                                'NITIPAT',
                                2000,
                                'NICKNAME TEN',
                                2000,
                                'NEWBIE DEVELOPER',
                                2000,
                                'EXTROVERT',
                            ]}
                            wrapper="span"
                            cursor={true}
                            style={{ display: 'inline-block', whiteSpace: 'normal' }}
                            repeat={Infinity}
                        />
                    </div>

                    <div className="mt-6 border-t-2 border-orange-500 pt-4 w-full">
                        <h2 className="text-sm sm:text-lg md:text-[18px] text-default-400">
                            MY DREAM IS TO BECOME A GREAT FRONT END.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hometext;
