import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../list.json"
import Cards from './Cards';
const Freebook = () => {
  var filterdata = List.filter((data) => data.Catagory === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='ml-14 my-8'>
        <div className=''>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <div className='text-sm my-8'>The sun slowly dipped below the horizon, casting golden light on the quiet village, while birds chirped gently and a breeze whispered through the trees, carrying peace to the evening air.The sun slowly dipped below the horizon, casting golden light on the quiet village, while birds chirped gently and a breeze whispered through the trees, carrying peace to the evening air.</div>

        </div>
        <div className=''>
          <Slider {...settings}>
            {filterdata.map((item) => (
              <Cards item={item} key={item.id} />
            ))}

          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook
