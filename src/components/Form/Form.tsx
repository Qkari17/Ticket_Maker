import { Input } from "../../ui/Input/Input";
import line from "../../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import cloud from "../../assets/images/icon-upload.svg";
import file from "../../assets/images/icon-info.svg";
import sample from "../../assets/images/sample.jpg"
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegistrationFormData, validationSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

export const Form = () => {
  const navigate = useNavigate();

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
   
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (data) => {
    console.log(data);
    navigate("/ticket", { state: data }); 
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
     
      setValue("file", file); // Ustaw wartość pola `file` w formularzu
      trigger("file"); // Wyzwól walidację dla pola `file`
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
    
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <form
      onSubmit={handleSubmit(handleRegistrationForm)}
      className="flex flex-col gap-5 p-4 relative pb-44 "
    >
      <div className=" flex flex-col gap-2 ">
        <h1 className="font-bold text-2xl text-center">
          Your Journey to Coding <br />
          Conf 2025 Starts Here!
        </h1>
        <section className="text-neutral-400 text-center text-lg">
          Secure your spot at next year's <br />
          biggest coding conference.
        </section>
      </div>

      <div className="flex flex-col gap-2">
        <h2>Upload Avatar</h2>
        <div className="flex flex-col gap-2 relative bg-neutral-400/15 border-dashed border rounded-xl border-neutral-500 hover:bg-neutral-400/40">
          <input
            type="file"
            id="files"
            className=" absolute h-full w-full text-amber-600/0 "
            onChange={handleFileChange}
          />
          <label
            htmlFor="files"
            className="  p-4  border-spacing flex flex-col gap-2 items-center"
          >
             {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="border rounded-xl w-12 h-12 object-cover"
              />
            ) : (
              <img
                src={cloud}
                alt="cloud"
                className="border rounded-xl w-12 p-1.5 bg-neutral-400/15 border-neutral-500"
              />
            )}
            <p className=" text-neutral-400">
              Drag and drop or click to upload
            </p>
          </label>
        </div>
        <div className="flex gap-2">
          {" "}
          <img src={file} alt="file" />
          <p className="text-neutral-400 text-xs">
            Upload your photo (JPG or PNG, max size: 500KB). <a className="text-blue-400 hover:text-blue-500" href={sample} download>Sample</a>
          </p>
        </div>
       
        {errors.file && ( 
          <p className="text-button2 text-sm">{errors.file.message}</p>)}
      </div>
      {/* <Input label="Image" type="file"></Input> */}
      <Input
        label="Full Name"
        {...register("fullname")}
        error={errors.fullname}
        autoFocus
      ></Input>
      <Input
        label="Email Address"
        {...register("email")}
        error={errors.email}
        placeholder="example@email.com"
      ></Input>
      <Input
        label="GitHub Username"
        {...register("username")}
        error={errors.username}
        placeholder="@yourusername"
      ></Input>
      <button
        type="submit"
        className="bg-button1 text-neutral-900 font-bold text-lg py-3 rounded-xl z-10 hover:bg-button2"
      >
        {" "}
        Generate My Ticket
      </button>
      <img src={line} className=" absolute bottom-0 left-0 " />
    </form>
  );
};
