"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FormSection = ({ selectedTemplate, userFormInput, loading }) => {
  const [formData, setFormData] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    userFormInput(formData);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <Image src={selectedTemplate.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-violet-500">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item?.name}
                required={item?.required}
                onChange={handleOnChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item?.name}
                required={item?.required}
                onChange={handleOnChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
