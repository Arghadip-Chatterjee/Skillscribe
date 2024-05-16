import axios from "axios";
import { useState } from "react";
import 'tailwindcss/tailwind.css';

const PhotoPage = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [amount, setAmount] = useState("1");
  const [resolution, setResolution] = useState("512x512");

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      setPhotos([]);

      const response = await axios.post('/api/image', { prompt, amount, resolution });

      const urls = response.data.map((image: { url: string }) => image.url);

      setPhotos(urls);
    } catch (error: any) {
      console.error("Something went wrong:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return ( 
    <div className="px-4 lg:px-8">
      <form 
        onSubmit={(e) => { e.preventDefault(); onSubmit(); }} 
        className="
          rounded-lg 
          border 
          w-full 
          p-4 
          px-3 
          md:px-6 
          focus-within:shadow-sm
          grid
          grid-cols-12
          gap-2
        "
      >
        <textarea
          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent col-span-12 lg:col-span-6"
          disabled={isLoading} 
          placeholder="A picture of a horse in Swiss alps" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <select
          className="col-span-12 lg:col-span-2"
          disabled={isLoading} 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          {/* Add more options if needed */}
        </select>
        <select
          className="col-span-12 lg:col-span-2"
          disabled={isLoading} 
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        >
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
          <option value="2048x2048">2048x2048</option>
          {/* Add more options if needed */}
        </select>
        <button className="col-span-12 lg:col-span-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50" type="submit" disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </form>
      {photos.length === 0 && !isLoading && (
        <div className="text-center p-4">No images generated.</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {photos.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <img src={src} alt="Generated" className="w-full h-auto" />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg block mt-2 w-full" onClick={() => window.open(src)}>
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default PhotoPage;
