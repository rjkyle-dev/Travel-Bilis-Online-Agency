import React from "react";
import PlaceCard from "./PlaceCard";

// import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img7 from "../../assets/places/ph.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img7,
    title: "Mayon Volcano",
    location: "Philippines",
    description: "",
    price: 6700,
    type: "",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "",
    price: 6700,
    type: "",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "",
    price: 6200,
    type: "",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "",
    price: 6700,
    type: "",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "",
    price: 6700,
    type: "",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "",
    price: 6200,
    type: "",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
