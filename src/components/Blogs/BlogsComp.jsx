import React from "react";
import BlogCard from "./BlogCard";
// import Img1 from "../../assets/places/tajmahal.jpg";
import Img1 from "../../assets/places/ph.jpg";
import Img2 from "../../assets/places/maldives.jpg";
import Img3 from "../../assets/places/japan.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Philippines",
    description:
      "Mayon Volcano, located in Albay Province on Luzon Island in the Philippines, is renowned for its near-perfect conical shape and stands at 2,463 meters (8,081 feet) above sea level. It is part of the Pacific Ring of Fire and is considered one of the most iconic natural landmarks in the country. Mayon is an active stratovolcano, with over 50 recorded eruptions since 1616, making it both a stunning and volatile geological feature.",
    author: "Travel Bilis",
    date: "Oct 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Maldives",
    description:
      "The Maldives is a tropical paradise located in the Indian Ocean, southwest of Sri Lanka and India. It is an archipelago of 1,192 coral islands grouped into 26 atolls, known for their pristine white-sand beaches, crystal-clear turquoise waters, and abundant marine life. The Maldives is one of the world's most sought-after destinations for luxury tourism, offering overwater bungalows, world-class diving, and stunning coral reefs",
    author: "Travel Bilis",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Japan",
    description:
      "Japan is an island nation in East Asia, located in the northwest Pacific Ocean. Known for its rich history, advanced technology, and stunning natural landscapes, Japan seamlessly blends traditional culture with modern innovation. The country consists of four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—and thousands of smaller islands",
    author: "Travel Bilis",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Places Travel
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
