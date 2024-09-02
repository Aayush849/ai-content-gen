"use client";
import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";

const OutputSection = ({aiOutput}) => {
  const editorRef = useRef();
  useEffect(() => {
     setTimeout(() => {
      if (editorRef.current) {
        const editorInstance = editorRef.current.getInstance();
        if (editorInstance) {
          editorInstance.setMarkdown(aiOutput);
        } else {
          console.error("Editor instance is not defined");
        }
      } else {
        console.error("editorRef.current is null");
      }
    }, 1000); 
  
    
  }, [aiOutput]);
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-3">
        <h2 className="text-lg font-bold">Your Result</h2>
        <Button className="flex gap-2">
          {" "}
          <Copy className="w-4 h-4" /> Copy{" "}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="400px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputSection;
