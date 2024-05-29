import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const FetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    FetchProducts();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(products);
  return (
    <div className="lg:container mx-auto px-5">
      {/* // <div className="slider-container"> */}
      <Slider {...settings}>
        {products.map((item) => (
          <div className="w-[300px] ">
            <div className="flex justify-center items-center">
              <img
                src={item.image}
                className="w-[300px] h-[200px] object-contain"
                alt="img"
              />
            </div>
            <div className="p-[20px]">
              <h2 className="text-[18px] font-semibold">
                {item.title.slice(0, 38)}...
              </h2>
              <h3 className="">{item.description.slice(0, 70)}...</h3>
              <div className="pt-3">
                <a href="#" className="hover:text-[red] pt-4">
                  Read more....
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    // </div>/
  );
};

export default Carousel;