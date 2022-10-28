import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const blog = () => {
  let [blogdata, setBlogdata] = useState([]);
  const fetchPosts = async () => {
    let data = await fetch("http://localhost:3000/api/blogs");
    let result = await data.json();
    setBlogdata(result);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container my-4 w-75  justify-content-between">
      {blogdata.map((item, index) => {
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
