
export default function CreateChatPage(){

  async function onSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem("message") as HTMLInputElement;
    const response = await fetch ("/api/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: input.value,
      }),
    });

    const data = await response.json();
    console.log(data);
    input.value = ""
  }
  return (
    <div>
      <h1>Create Chat</h1>
      <form onSubmit={onSubmit}>
        <div>
        <label htmlFor="message">Mensagem</label>
        </div>
        <div>
        <input type="text" name="message"></input>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <a style={{display:  'block', margin: 10}}
            href="/chats"                                    
          >Listar chats</a>
    </div>
  )
}