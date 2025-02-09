import { Input } from "../../ui/Input/Input";
import line from "../../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import cloud from "../../assets/images/icon-upload.svg";
import file from "../../assets/images/icon-info.svg";

export const Form = () => {
  return (
    <form className="flex flex-col gap-5 p-4 relative pb-44 ">
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
        <div className="flex flex-col gap-2 relative bg-neutral-400/15 border-dashed border rounded-xl border-neutral-500">
          <input
            type="file"
            id="files"
            className=" absolute h-full w-full text-amber-600/0 "
          />
          <label
            htmlFor="files"
            className="  p-4  border-spacing flex flex-col gap-2 items-center"
          >
            <img
              src={cloud}
              className="border rounded-xl w-12 p-1.5 bg-neutral-400/15 border-neutral-500"
            />
            <p className=" text-neutral-400">
              Drag and drop or click to upload
            </p>
          </label>
        </div>
        <div className="flex gap-2">
          {" "}
          <img src={file} />
          <p className="text-neutral-400 text-sm">
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        </div>
      </div>
      {/* <Input label="Image" type="file"></Input> */}
      <Input label="Full Name" autoFocus></Input>
      <Input label="Email Address" placeholder="example@email.com"></Input>
      <Input label="GitHub Username" placeholder="@yourusername"></Input>
      <button
        type="submit"
        className="bg-button1 text-neutral-900 font-bold text-lg py-3 rounded-xl z-10 "
      >
        {" "}
        Generate My Ticket
      </button>
      <img src={line} className=" absolute bottom-0 left-0 " />
    </form>
  );
};
