import React from 'react'
import foto from "../../assets/images/foto.jpg"
const Gallery = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={foto} />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Shavkat Mirziyoyev <br /> O‘zbekiston Respublikasi Prezidenti</h1>
                    <p className="mb-8 leading-relaxed">Taraqqiyotning tamal toshi ham, mamlakatni qudratli, millatn buyuk qiladigan kuch ham bu – ilm-fan, ta’lim va tarbiyadir.  Jonkuyar olimlarimiz buyuk ajdodlarimizning ilmiy an’analarin  munosib davom ettirgan holda, ilm-fanni taraqqiyotimizning drayveriga aylantirib, mamlakat rivojiga xizmat qiladigan muhim  kashfiyotlar yaratishlariga ishonaman.</p>
                </div>
            </div>
        </section>
    )
}

export default Gallery
