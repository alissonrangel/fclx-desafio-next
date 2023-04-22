import { prisma } from "@/prisma/prisma"
import { GetServerSideProps } from "next"

type Chat = {
  id: number,
  message: string,
}

type ListChatProps = {
  chats: Chat[],
}


export default function ListChats(props: ListChatProps){
  return (
    <>
      <h1>Listagem de chats</h1>
      <ul>
        {
          props.chats.map((chat) =>(
            <li key={chat.id}>
              <div style={{margin: "10px"}}>
              id: {chat.id}  
              mensagem: {chat.message}    
              </div>
            </li>
          ))
        }
      </ul>
      <a style={{display:  'block', margin: 10}}
            href="/chats/create"                                    
          >
           Criar Chat
          </a>
    </>
  )
}

//pagina dinÂmica, renderizada em tempo de execução
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const response = await fetch("http://localhost:3000/api/chats");

  const chats = await response.json();

  return {
    props: {
      chats,
    //   chats: [ 
    //   {
    //     id: 1,
    //     messsage: "Hello",
    //   }
    // ]
    }
  }

}