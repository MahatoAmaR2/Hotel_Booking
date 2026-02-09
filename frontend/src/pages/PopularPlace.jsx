import "../App.css";
import PopularPlaceCard from "../components/PopularPlaceCard";
// import hotelImg1 from "../assets/hotel-1.jpg";
// import hotelImg2 from "../assets/hotel-2.jpg";
// import hotelImg3 from "../assets/hotel-3.jpg";
// import hotelImg4 from "../assets/hotel-4.jpg";
// import hotelImg5 from "../assets/hotel-5.jpg";
// import hotelImg6 from "../assets/hotel-6.jpg";

const hotels = [
  // {
  //   id: 1,
  //   image: hotelImg1,
  //   title: "The Plaza Hotel",
  //   price: "$499",
  //   location: "New York City, USA",
  // },
  // {
  //   id: 2,
  //   image: hotelImg2,
  //   title: "Ritz Paris",
  //   price: "$549",
  //   location: "Paris, France",
  // },
  // {
  //   id: 3,
  //   image: hotelImg3,
  //   title: "The Peninsula",
  //   price: "$599",
  //   location: "Hong Kong",
  // },
  // {
  //   id: 4,
  //   image: hotelImg4,
  //   title: "Atlantis The Palm",
  //   price: "$499",
  //   location: "Dubai, United Arab Emirates",
  // },
  // {
  //   id: 5,
  //   image: hotelImg5,
  //   title: "The Ritz-Carlton",
  //   price: "$649",
  //   location: "Tokyo, Japan",
  // },
  // {
  //   id: 6,
  //   image: hotelImg6,
  //   title: "Marina Bay Sands",
  //   price: "$549",
  //   location: "Singapore",
  // },
];

const Popular = () => {
  return (
    <section className="section__container popular__container">
      <h2 className="section__header">Popular Hotels</h2>
      <div className="popular__grid">
        {hotels.map((hotel) => (
          <PopularPlaceCard key={hotel.id} {...hotel} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
