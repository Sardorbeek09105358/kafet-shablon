import React from 'react'
import guvohnoma from "../../assets/images/guvohnoma.jpg";

const DataBlog = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-8 border-2 rounded-md p-6 md:p-10 bg-white shadow-lg">
                        <h2 className="text-[17px] text-indigo-500 tracking-widest font-medium title-font mb-1 capitalize">ommaviy axborot vositasi davlat ro'yxatidan o'tganligi to'g'risida</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase">guvohnoma</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-6">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        {/* <div className='w-[60%] flex justify-center mx-auto'>
                            <img src={guvohnoma} alt="" className='w-full' />
                        </div> */}
                        <div className='mt-10 mb-4 text-left'>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>№: <span className='font-normal text-[18px]'>1692</span></h1>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>Nomi: <span className='font-normal text-[18px]'>Central Asian Food engineering and technology</span></h1>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>tarqatish shakli: <span className='font-normal text-[18px]'>jurnal</span></h1>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>til(lari): <span className='font-normal text-[18px]'>o'zbek, rus va ingliz tili</span></h1>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>muassis(lar)i: <span className='font-normal text-[18px]'>Toshkent kimyo-texnologiya instituti</span></h1>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>Ixtisoslashuvi: <span className='font-normal text-[18px]'>Texnologiya va muhandislik</span></h1>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>Tahririyat manzili: <span className='font-normal text-[18px]'>Toshkent shahri, Shayxontohur tumani, A.Navoiy ko'chasi, 32- uy</span></h1>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>Tarqatish hududi: <span className='font-normal text-[18px]'>O'zbekiston Respublikasi</span></h1>
                            <h1 className='text-black font-bold text-[18px] capitalize mb-2'>Ro‘yxatdan o‘tkazuvchi organ rahbari: <span className='font-normal text-[18px]'>Xodjayev Asadjon Azadbekovich</span></h1>
                        </div>

                        <div className='mt-6'>
                            <h3 className="text-xs leading-relaxed md:text-sm text-justify">Mazkur hujjat Vazirlar Mahkamasining 2017 yil 15 sentyabrdagi 728-son qaroriga muvofiq Yagona interaktiv davlat xizmatlari portalida shakllantirilgan elektron hujjatning nusxasi bo‘lib, davlat organlari tomonidan ushbu hujjatni qabul qilishni rad etishlari qat’iyan taqiqlanadi. Hujjat haqiqiyligini repo.gov.uz veb-saytida hujjatning noyob raqamini kiritib yoki mobil telefon yordamida QR-kodni skaner qilish orqali tekshirish mumkin.</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DataBlog
