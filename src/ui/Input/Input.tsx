import clsx from "clsx";
import { ComponentPropsWithRef, forwardRef, Ref, useId } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className="flex flex-col gap-2">
        <label className="mb-1 text-neutral-50 lg:text-2xl" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...rest}
          className={clsx({
            " border-2 border-red-500 bg-neutral-500/10 text-white pl-2 rounded-lg ring-red-300 placeholder:text-red-300 focus:ring-red-500 max-w-60 lg:text-2xl  lg:max-w-80 ":
              error,
            "border-2 border-zinc-500 bg-neutral-500/20 text-white pl-2 rounded-lg autofill:bg-zinc-600 lg:text-2xl lg:max-w-80":
              !error,
          })}
        ></input>
        {error && <p className="text-red-500"> {error?.message}</p>}
      </div>
    );
  }
);
