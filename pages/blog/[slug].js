import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";

const slug = () => {
  const [data, setData] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const fetchPost = async () => {
    let data = await fetch(`http://localhost:3000/api/blog?slug=${slug}`);
    let result = await data.json();
    setData(result);
  };
  useEffect(() => {
    if (!router.isReady) return;
    fetchPost();
  }, [router.isReady]);
  return (
    <div className="container w-50 my-4">
      <p>Title : {data?.title}</p>
      <p>Content : {data?.content}</p>
      <p>Author : {data?.author}</p>
    </div>
  );
};

export default slug;
