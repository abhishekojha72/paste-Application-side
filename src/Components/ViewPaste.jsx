
import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewPaste = () => {
  const { id } = useParams();
  console.log(id);

  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on ID
  const paste = pastes.filter((paste) => paste._id === id)[0];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative">
      <div className="flex flex-col gap-y-5 items-start">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={paste.title}
          disabled
          className="w-full text-xl font-semibold text-gray-800 bg-white border border-gray-600 rounded-md p-2"
        />
        
        <div className="w-full flex flex-col items-start relative rounded bg-opacity-15 border border-gray-700 backdrop-blur-xl mt-6">
          <div className="w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-gray-700">
            {/* Traffic Lights */}
            <div className="w-full flex gap-x-2 items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full bg-red-500" />
              <div className="w-[13px] h-[13px] rounded-full bg-yellow-500" />
              <div className="w-[13px] h-[13px] rounded-full bg-green-500" />
            </div>
            
            {/* Copy Button */}
            <div className="flex justify-center items-center gap-x-4">
              <button
                className="flex justify-center items-center p-2 bg-transparent rounded-md transition-all duration-300 ease-in-out group hover:bg-gray-700"
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to Clipboard");
                }}
                style={{
                  left: `${cursorPosition.x}px`,
                  top: `${cursorPosition.y}px`,
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Copy className="group-hover:text-green-500" size={20} />
              </button>
            </div>
          </div>

          {/* Content TextArea */}
          <textarea
            value={paste.content}
            disabled
            placeholder="Write Your Content Here...."
            className="w-full p-4 text-lg bg-transparent text-white focus-visible:ring-0 border-none"
            rows={20}
            style={{
              caretColor: "#fff",
              fontFamily: "'Courier New', Courier, monospace",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;


