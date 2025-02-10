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
        <label className="mb-1 text-neutral-50 " htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...rest}
          className={clsx({
            " border border-button2 bg-neutral-400/10 text-neutral-300 rounded-lg ring-red-300  hover:bg-neutral-400/40 ":
              error,
            "border-2 border-neutral-500 p-3 bg-neutral-400/15 text-neutral-300 rounded-lg placeholder:text-neutral-400 hover:bg-neutral-400/40":
              !error,
          })}
        ></input>
        {error && <p className="text-button2 text-sm"> {error?.message}</p>}
      </div>
    );
  }
);
