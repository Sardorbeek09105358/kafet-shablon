import React from 'react'
import img_1 from "../../assets/images/bosh_muharrir.jpg"
import img_2 from "../../assets/images/muharir.jpg"

const Statistic = () => {
  return (
      <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                  <div className="sm:w-1/2 mb-10 px-4">
                      <div className="rounded-lg h-64 overflow-hidden">
                          <img alt="content" className="object-cover object-center h-full w-full" src={img_1}/>
                      </div>
                      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">BOSH MUHARRIR</h2>
                      <h4 className="leading-relaxed text-blue-500 text-2xl">Botir Shukurillayevich Usmonov</h4>
                      <h4 className='text-blue-500 text-xl'>Pedagogika fanlari doktori, texnika fanlari nomzodi, professor</h4>
                  </div>
                  <div className="sm:w-1/2 mb-10 px-4">
                      <div className="rounded-lg h-64 overflow-hidden">
                          <img alt="content" className="object-cover object-center h-full w-full" src={img_1}/>
                      </div>
                      <h2 className='title-font text-2xl font-medium text-gray-900 mt-6 mb-3 uppercase'>muharrir</h2>
                      <h4 className="title-font mt-6 mb-3 capitalize text-blue-500 text-2xl">Sanayev Ermat shermatovich</h4>
                      <h4 className="leading-relaxed text-blue-500 text-xl capitalize">texnika fanlari bo'yicha falsafa doktori dotsent</h4>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Statistic
