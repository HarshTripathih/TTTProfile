// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getprofiles?slug=posts 

import { data } from 'autoprefixer';
import * as fs from 'fs';

export default function handler(req, res) {
  // console.log(res);
  fs.readFile(`usersdata/users.json`,'utf-8',(err, data)=>{
    
    if(err){
      res.status(500).json({error: `No Such data found`});
    }

    // console.log(data);
    res.status(200).json(JSON.parse(data));
  })
}
