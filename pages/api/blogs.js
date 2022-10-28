// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default async function handler(req, res) {
  let allBlogs = [];
  let post;
  let data = await fs.promises.readdir(`blogdata`);
  for (let i = 0; i < data.length; i++) {
    post = data[i];
    let singlpost = await fs.promises.readFile(`blogdata/${post}`, "utf-8");
    allBlogs.push(JSON.parse(singlpost))
  }
  res.send(allBlogs)
}
