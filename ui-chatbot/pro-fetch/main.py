
# from langchain_ollama import ChatOllama
# from langchain_core.prompts import ChatPromptTemplate


# template = [
#     (
#         "system",
#         "Answer the question below. Keep your answers short and concise. Here is the Context: {context}"
#     ),
#     (
#         "human",
#         "{question}"
#     )
# ]

# model = ChatOllama(model = "llama3.1", temperature = 0)
# prompt = ChatPromptTemplate.from_messages(template)
# chain = prompt | model

# def handle_text():
#     context = ""
#     print("Welcome to Pro-Fetch. Enter 'exit' to exit from the chatbot.")

#     while True:
#         user_input = input("You : ")
#         if user_input.lower() == "exit":
#             break

#         result = chain.invoke(
#             {
#             "context" : context,
#             "question" : user_input
#             }
#         )

#         print("Bot :", result.content)
#         context += f"\nUser : {user_input}\nAI : {result}\n"
        

# if __name__ == "__main__":
#     handle_text()

from fastapi import FastAPI
from pydantic import BaseModel
from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate


app = FastAPI()

template = [
    (
        "system",
        "Answer the question below. Keep your answers short and concise. Here is the Context: {context}"
    ),
    (
        "human",
        "{question}"
    )
]

model = ChatOllama(model="llama3.1", temperature=0)
prompt = ChatPromptTemplate.from_messages(template)
chain = prompt | model


class Query(BaseModel):
    question: str
    context: str = ""

@app.post("/chatbot")
async def chat(query: Query):
    result = chain.invoke({
        "context": query.context,
        "question": query.question
    })
    

    return {"response": result.content}


if __name__ == "__main__":
   import uvicorn
   uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

