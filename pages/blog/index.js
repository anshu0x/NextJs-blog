import Link from "next/link";
import React from "react";

const blog = ({ data }) => {
  return (
    <div className="container my-4 w-75  justify-content-between">
      {data.map((item, index) => {
        return (
          <Link href={`blog/${item.slug}`}>
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.content.slice(0, 80)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default blog;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blogs`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
