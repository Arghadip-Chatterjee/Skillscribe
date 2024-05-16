import axios from "axios";
import { useState } from "react";
import 'tailwindcss/tailwind.css';

const MusicPage = () => {
  const [music, setMusic] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      setMusic(undefined);

      const response = await axios.post('/api/music', { prompt });
      setMusic(response.data.audio);
      setPrompt("");
    } catch (error: any) {
      if (error?.response?.status === 403) {
        // Handle pro access prompt
      } else {
        console.error("Something went wrong:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return ( 
    <div className="px-4 lg:px-8">
      <form 
        onSubmit={(e) => { e.preventDefault(); onSubmit(); }} 
        className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
      >
        <textarea
          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent col-span-12 lg:col-span-10 p-3 rounded-lg bg-gray-100"
          disabled={isLoading} 
          placeholder="Piano solo" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="col-span-12 lg:col-span-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 py-3">
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </form>
      {isLoading && (
        <div className="p-8 text-center">Loading...</div>
      )}
      {!music && !isLoading && (
        <div className="text-center p-4">No music generated.</div>
      )}
      {music && (
        <audio controls className="w-full mt-8">
          <source src={music} />
        </audio>
      )}
    </div>
  );
}
 
export default MusicPage;
