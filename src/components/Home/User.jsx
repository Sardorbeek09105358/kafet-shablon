import React from 'react'
import image from "../../assets/images/Jurnal usti-MAY.png"
const User = () => {
  return (
    <div>
          <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                  <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={image}/>
                      <div className="text-center lg:w-2/3 w-full">
                            <h3  className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">OʻZBEKISTON RESPUBLIKASI OLIY TA’LIM, FAN VA INNOVATSIYALAR VAZIRLIGITOSHKENT KIMYO-TEXNOLOGIYA INSTITUTI</h3>
            <p className="mb-8 leading-relaxed">O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi tomonidan 2022 yi 8-avgustda №1692 raqam bilan roʻyxatga olingan</p>
                      </div>
              </div>
          </section>
    </div>
  )
}

export default User
