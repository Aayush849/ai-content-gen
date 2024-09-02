"use client";
import Templates from "@/app/(data)/Templates";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "../../../../../utils/AiModal";
import { useState } from "react";

const CreateNewTemplate = (props) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");
  const selectedTemplate = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );
  const generateAIContent = async (data) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAIPrompt = JSON.stringify(data) + ", " + selectedPrompt;
    const result = await chatSession.sendMessage(finalAIPrompt);
    setAiOutput(result.response.text());
    setLoading(false);
  };
  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back{" "}
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v) => generateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewTemplate;
