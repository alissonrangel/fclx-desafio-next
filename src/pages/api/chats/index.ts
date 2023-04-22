import { prisma } from "@/prisma/prisma";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
  if(req.method === "POST") {
    const {message} = req.body;
    const chat = await prisma.chat.create({
      data: {
        message,
      },
    });
    res.json(chat);
  } else
  if(req.method === "GET") {
    const chats = await prisma.chat.findMany();
    res.json(chats);
  } else {
    res.status(405).json({message: "Not Allowed"});
  }
}

export default handler;