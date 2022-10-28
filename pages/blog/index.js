import Link from "next/link";
import React from "react";

const blog = ({ data }) => {
  return (
    <div className="container my-4 w-75  justify-content-between">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Link href={`blog/${item.slug}`}>
              <h2>{item.title}</h2>
            </Link>
            <p>{item.content.slice(0, 80)}</p>
          </div>
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
