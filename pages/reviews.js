// import React, { useState, useEffect } from "react";
import Head from "next/head";

const Reviews = ({ reviews }) => {
  //   const [reviews, setReviews] = useState("");

  //   const getData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     const data = await response.json();
  //     setReviews(data);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  console.log(reviews);

  return (
    <>
      <Head>
        <title>Жирные бургеры | Главная</title>
        <meta name="title" content="Жирные бургеры" />
      </Head>
      <div>
        <h1> Отзывы клиентов </h1>
        <div className="reviews">
          {reviews?.map((item) => (
            <div key={item.id} className="review">
              {item.id} {`${item.body.slice(0, 90)}...`}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 30),
    },
  };
}

export default Reviews;
