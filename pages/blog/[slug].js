import React from "react";
const slug = ({ data }) => {
  function createMarkup() {
    return {__html: data.html};
  }
  
  return (
    <div className="container w-50 my-4">
      <p>Title : {data?.title}</p>
      <p>Content : {data?.content}</p>
      <p>Author : {data?.author}</p>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

export default slug;

export async function getServerSideProps(context) {
  // Fetch data from external API
  console.log(context);
  const res = await fetch(
    `http://localhost:3000/api/blog?slug=${context.query.slug}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
