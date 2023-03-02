import Image from 'next/image';
import React from 'react'
import ahmadBasit from '../assets/images/users/ahmadBasit.JPG';
import ahmadManzoor from '../assets/images/users/ahmadManzoor.JPG';
function Statics() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="font-bold text-black text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">Level up your desk</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burdown charts, or tangled flowcharts with our focus system. Just the undeniable urge to fill empty circles.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center justify-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Image src={ahmadManzoor} width={300} />
                        {/* <img src={ahmadManzoor} alt='ahmad basit' /> */}
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Image src={ahmadBasit} height={350} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Statics