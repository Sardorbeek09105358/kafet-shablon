import muharrir_2 from "../../assets/images/prorektor.jpg"
import img_2 from "../../assets/images/muharir-2.jpg"
import img_3 from "../../assets/images/rektor-2.jpg"
import image from "../../assets/images/rasm.jpg"

const AboutContent = () => {
  return (
    <div>
          <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col">
                      <div className="h-1 bg-gray-200 rounded overflow-hidden">
                          <div className="w-24 h-full bg-indigo-500"></div>
                      </div>
                      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                      </div>
                  </div>
                  <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                          <div className="rounded-lg h-64 overflow-hidden">
                              <img alt="content" className="object-cover object-center h-full w-full" src={img_3}/>
                          </div>
                          <h2 className="text-xl font-medium title-font text-gray-900 mt-5 capitalize">Botir Shukurillayevich Usmonov</h2>
                          <p className="text-base leading-relaxed mt-2"> bosh muharrir</p>
                      </div>
                      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                          <div className="rounded-lg h-64 overflow-hidden">
                              <img alt="content" className="object-cover object-center h-full w-full" src={image}/>
                          </div>
                          <h2 className="text-xl font-medium title-font text-gray-900 mt-5 capitalize">pulatov xayrulla lutpullayevich</h2>
                          <p className="text-base leading-relaxed mt-2 capitalize">ilmiy ishlar va innovatsiyalar bo'yicha prorektor.</p>
                      </div>
                      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                          <div className="rounded-lg h-64 overflow-hidden">
                              <img alt="content" className="object-cover object-center h-full w-full" src={img_2}/>
                          </div>
                          <h2 className="text-xl font-medium title-font text-gray-900 mt-5 capitalize">Sanayev ermat shermatovich</h2>
                          <p className="text-base leading-relaxed mt-2 capitalize">muhrarir</p>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default AboutContent
