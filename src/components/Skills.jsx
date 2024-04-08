import React from 'react'

function SkillLevel({ name, percentage }) {
    return (
        <div className="mb-4">
            <p className="font-bold">{name}</p>
            <div className="bg-white h-2 w-full rounded-full">
                <div
                    className="bg-orange-500 h-full rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="text-xs">{percentage}%</p>
        </div>
    );
}

export default function Skills() {
    return (
        <div id='skills' className='bg-gray-600'>
            <div className=' flex flex-col justify-center items-center pt-10 text-white'>
                <h1 className='font-semibold text-orange-500 text-xl mt-10'>My Skills</h1>
                <h1 className='text-lg mt-2'>I Develop skills Regularly</h1>
            </div>

            <div className="flex justify-center mt-5">
                <div className="grid grid-cols-2 gap-8 p-4   w-2/3 text-white">
                    <div>
                        <SkillLevel name="React" percentage={85} />
                        <SkillLevel name="JavaScript" percentage={85} />
                        <SkillLevel name="HTML/CSS" percentage={90} />
                    </div>
                    <div>
                        <SkillLevel name="Tailwind" percentage={90} />
                        <SkillLevel name="ReactNative" percentage={80} />
                        <SkillLevel name="MongoDB" percentage={90} />
                    </div>
                </div>
            </div>


        </div>
    )

}






