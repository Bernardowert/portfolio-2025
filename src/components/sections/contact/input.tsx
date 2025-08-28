import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormSchema } from "./form";


interface InputProps{
    type: string;
    placeholder:string;
    labelName:string;
    name:keyof FormSchema;
    error?:string;
    register: UseFormRegister<FormSchema>;
    rules?: RegisterOptions<FormSchema>;
}


export function Input({type, placeholder, labelName, register, rules, error, name}:InputProps){
    return(
        <div>
              <label htmlFor="" className="text-grey-90 text-lg">{labelName}</label>
              <input 
              type={type}
              placeholder={placeholder}
              {...register(name, rules)}
              className="placeholder:text-grey-80 placeholder:uppercase mt-1.5 w-full py-3.5 border-b border-dark-12"
              />

              {
                error && <span>{error}</span>
              }
        </div>
    )
}