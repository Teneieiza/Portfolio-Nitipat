import React from 'react'

const Aboutme = () => {
    return (
    <div className='bg-[#1E1E1F] rounded-3xl relative'>
        <header className='absolute top-10 left-14 border-b-4 border-orange-700'>
            <h2 className='text-2xl font-bold text-white'>ABOUT ME</h2>
        </header>

        <section className='pl-14 pr-14 pt-20 pb-10 flex flex-col gap-5'>
            <div className='pt-5 p-8 text-white'>
                <h2 className='text-xl font-bold pb-4'>PROFESSIONAL SUMMARY</h2>
                <p>Highly motivated and detail-oriented Junior Software Developer with a background in nanomaterials engineering and hands-on experience as a Design Engineer. Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. Strong team player with excellent communication skills, eager to contribute to dynamic development teams and deliver high-quality frontend solutions.</p>
            </div>

            <div className='pt-5 p-8 bg-default-200 rounded-lg border-4 border-orange-700 transition-all duration-300 hover:bg-opacity-90 transform hover:scale-105 hover:[box-shadow:_0_0_10px_orange,_0_0_20px_orange]'>
                <h2 className='text-xl font-bold pb-2 border-b-4 border-orange-400 w-[50%]'>Certification</h2>
                    <ul className='list-disc pl-5 pt-2'>
                        <div className='flex'>
                            <h3 className='text-md font-bold pb-2'>Solfware Developer BootCamp By Generation Thailand GenKX - </h3><p className='pl-2'>Junier Solfware Developer JSD8</p>
                        </div>
                        <div className='flex pl-5'><h3 className='text-md font-bold pb-2'>PROJECT - </h3><p className='text-orange-500 pl-1 font-bold'> GAME ECOMMERCE</p></div>
                        <li className='pb-2'>
                            <div>
                                <p className='pl-5'>Led the development of a platform using Scrum and Agile methodologies, overseeing the frontend and backend design and integration with the database.</p>
                            </div>
                        </li>
                        <li className='pb-2'>
                            <div>
                                <p className='pl-5'>Managed tasks and planning for a team of 4 developers, conducting weekly performance reviews and feedback sessions. </p>
                            </div>
                        </li>
                        <li className='pb-4'>
                            <div>
                                <p className='pl-5'>Learned valuable skills in collaboration, planning, and scalability, enhancing my future development capabilities.</p>
                            </div>
                        </li>
                    </ul>
            </div>

            <div className='pt-5 p-8 bg-default-200 rounded-lg border-4 border-orange-700 transition-all duration-300 hover:bg-opacity-90 transform hover:scale-105 hover:[box-shadow:_0_0_10px_orange,_0_0_20px_orange]'>
                <h2 className='text-xl font-bold pb-2 border-b-4 border-orange-400 w-[30%]'>Work Experience</h2>
                <div className='pb-2 pt-2'>
                    <h3>Design Engineer</h3>
                    <p className='font-bold text-sm'>
                        [<span className='text-orange-500'>STANLEY ELECTRIC CO.,LTD.</span>]
                    </p>
                </div>
                <ul className='list-disc pl-10'>
                    <li><p className='pl-5'>Duration: 1 year</p></li>
                    <li><p className='pl-5'>Developed and designed products according to customer requirements</p></li>
                    <li><p className='pl-5'>Utilized design software such as AutoCAD to create 3D models</p></li>
                    <li><p className='pl-5'>Collaborated with engineering and production teams to improve designs</p></li>
                </ul>
            </div>

            <div className='flex justify-between gap-5'>
                <div className='pt-5 p-8 bg-default-200 rounded-lg w-[30%] border-4 border-orange-700 transition-all duration-300 hover:bg-opacity-90 transform hover:scale-105 hover:[box-shadow:_0_0_10px_orange,_0_0_20px_orange]'>
                <h2 className='text-xl font-bold pb-4'>Technical Skills</h2>
                    <ul className='list-disc pl-5'>
                        <li>
                            <p>HTML</p>
                        </li>
                        <li>
                            <p>CSS</p>
                        </li>
                        <li>
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <p>React</p>
                        </li>
                        <li>
                            <p>Tailwind CSS</p>
                        </li>
                    </ul>
                </div>
                <div className='pt-5 p-8 bg-default-200 rounded-lg w-[30%] border-4 border-orange-700 transition-all duration-300 hover:bg-opacity-90 transform hover:scale-105 hover:[box-shadow:_0_0_10px_orange,_0_0_20px_orange]'>
                <h2 className='text-xl font-bold pb-4'>Soft Skills</h2>
                    <ul className='list-disc pl-5'>
                        <li>
                            <p>Communication</p>
                        </li>
                        <li>
                            <p>Time Management</p>
                        </li>
                        <li>
                            <p>Problem-Solving</p>
                        </li>
                        <li>
                            <p>Teamwork</p>
                        </li>
                    </ul>
                </div>
                <div className='pt-5 p-8 bg-default-200 rounded-lg w-[50%] border-4 border-orange-700 transition-all duration-300 hover:bg-opacity-90 transform hover:scale-105 hover:[box-shadow:_0_0_10px_orange,_0_0_20px_orange]'>
                <h2 className='text-xl font-bold pb-4'>Education</h2>
                <h3 className='pb-2'>King Mongkut's Institute of Technology Ladkrabang</h3>
                    <ul className='list-disc pl-5'>
                        <li>
                            <p>Bachelor of Engineering in Nanomaterials, 2022</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
)
}

export default Aboutme
