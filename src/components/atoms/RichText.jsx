"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // استيراد استايل المحرر

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function RichTextEditor({ label , place , cn }) {
  const [content, setContent] = useState("");

  return (
    <div className={`w-full flex flex-col gap-[15px]  ${cn} `}>
      <label className="text-[#3e4c5b] text-lg font-normal">
        {label}
      </label>

      <div className="rounded-lg overflow-hidden " style={{direction : "ltr"}} >
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder={place}
          className="  rounded-lg "
		  
        />
      </div>
    </div>
  );
}
