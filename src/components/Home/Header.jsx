import React from 'react';
import "./Home.css";

const Header = () => {
  return (
    <div className='w-full pt-20 header'>
      <div className='w-full flex justify-center h-full'>
        <section className="text-gray-600 body-font w-full">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h3 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900 uppercase">
                o'zbekiston respublikasi oliy ta'lim fan va innovatsiyalar vazirligi toshkent <br /> kimyo-texnologiya instituti
              </h3>
              <p className="mb-8 leading-relaxed">
                OAK rayosatining 2023 yil 28-fevraldagi 333/5-son qarori bilan dissertatsiya ilmiy natijalarini chop etish tavsiya etilgan ilmiy jurnallar ro’yxatiga kiritilgan.
                Texnika, qishloq xoʻjaligi, kimyo, biologiya, veterinariya yoʻnalishlari boʻyicha yozilgan ilmiy maqolalar nashr etiladi.
              </p>             
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded" alt="hero" src="https://scientists.uz/images/certificate_2023.jpg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
