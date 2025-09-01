'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Input } from "./input"
import { ArrowUpRight, Loader } from "lucide-react"
import { toast } from "sonner"


const schema = z.object({
    name: z.string().min(5, "O nome deve ter no mínimo 5 caracteres"),
    email: z.email("Email invalido"),
    phoneNumber: z.string().min(1, "O telefone deve ter no mínimo 11 caracteres").refine((value) => /^()\d{11,12}$/.test(value), "Telefone inválido"),
    message: z.string().min(5, "A mensagem deve ter no mínimo 5 caracteres")
})

export type FormSchema = z.infer<typeof schema>


export function FormContact(){
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<FormSchema>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    async function formSubmit(data:FormSchema){
        try{
             const res = await fetch("/api/contact", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(data),
             })

             const results = await res.json();

             if(results.success){
                reset();
                toast.success("Mensagem enviado com sucesso");
                console.log("foi enviado com sucesso");
             }
             else{
                toast.error(results.error);
             }
        }
        catch(err){
            console.log(err);
        }
    }


    return(
         <form onSubmit={handleSubmit(formSubmit)} className="w-full max-w-formContact grid gap-12 laptop:grid-cols-2">
            <Input labelName="Seu nome" type="text" placeholder="Nome" name="name" error={errors.name?.message} register={register}/>
            <Input labelName="Email" type="email" placeholder="Email Address" name="email" error={errors.email?.message} register={register}/>
            <Input labelName="Numero de telefone(opcional)" type="number" placeholder="telefone" name="phoneNumber" error={errors.phoneNumber?.message} register={register}/>
            <Input labelName="Sua mensagem" type="text" placeholder="mensagem" name="message" error={errors.message?.message} register={register}/>
            <button disabled={isSubmitting} className="disabled:opacity-50 disabled:cursor-not-allowed flex items-center max-w-96 gap-3 group">
                <span className="text-2xl transition-opacity ease-linear group-[&:hover,&:focus]:opacity-70">{isSubmitting ? "Enviando mensagem..." : "Enviar mensagem"}</span>

                {
                    isSubmitting ? <Loader className="animate-spin"/> : <ArrowUpRight size={32} className="group-[&:hover,&:focus]:translate-x-1.5 group-[&:hover,&:focus]:-translate-y-1 transition-transform ease-linear" />
                }
            </button>
        </form>
    )
}

