import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import ReactMarkdown from "react-markdown"; 
import 'tailwindcss/tailwind.css';

const CodePage = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  const generateCode = async (prompt: string) => {
    try {
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: prompt };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", { messages: newMessages });
      console.log(response);

      setMessages((current) => [...current, userMessage, response.data]);

      reset();
    } catch (error: any) {
      console.error("Error generating code:", error);
    }
  };

  const onSubmit = (values: { prompt: string }) => {
    generateCode(values.prompt);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold">Nexus AI</h1>
            <p className="text-gray-500 mt-1">Your 24/7 Conversation Catalyst</p>
          </div>
          <div className="flex flex-col border rounded-lg p-4 bg-gray-50">
            <textarea
              className="flex-grow outline-none p-2 focus:ring-0 focus:border-blue-500 border border-gray-300 rounded-md"
              disabled={isSubmitting}
              placeholder="Simple toggle button using react hooks."
              {...register("prompt")}
            />
            <button
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit(onSubmit)}
            >
              Generate
            </button>
          </div>
        </form>
        {isSubmitting && <div className="text-center p-4">Loading...</div>}
        {messages.length === 0 && !isSubmitting && <div className="text-center p-4">No conversation started.</div>}
        <div className="flex flex-col space-y-2 mt-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                message.role === "user" ? "bg-gray-100 border border-gray-300" : "bg-blue-50 border border-blue-300"
              }`}
            >
              <ReactMarkdown className="text-sm">
                {message.content}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodePage;
