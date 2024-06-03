import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import logo from "./assets/logo.png"; // Adjust the path to your logo

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDRqNDHIjSZ_5CY2cLThkSo76PXVVY8EKg",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <nav className="bg-green-800 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Cyber Chatter</div>
        <ul className="flex justify-center space-x-4">
          <li><button className="text-white">Home</button></li>
          <li><button className="text-white">About</button></li>
          <li><button className="text-white">Logout</button></li>
        </ul>
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
      </nav>

      <div className="bg-white h-screen p-3">
        <form
          onSubmit={generateAnswer}
          className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 py-2"
        >
          <a href="https://github.com/Vishesh-Pandey/chat-ai" target="_blank" rel="noopener noreferrer">
            <h1 className="text-3xl text-center">Paragraph Generator</h1>
          </a>
          <textarea
            required
            className="border rounded w-11/12 my-2 min-h-fit p-3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
            disabled={generatingAnswer}
          >
            Generate Paragraph
          </button>
        </form>
        <div className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 my-1">
          <ReactMarkdown className="p-3">{answer}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
