import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let data = await fs.promises.readdir('contactdata')
    await fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body))
    res.status(200).send("Done");
  } else {
    res.status(200).send("all blogs");
  }
}
