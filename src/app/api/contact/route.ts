import { FormSchema } from "@/components/sections/contact/form";
import { NextResponse } from "next/server";
import { transport } from "./transporter";
export async function POST(req: Request){

    try{
         const {email, name, phoneNumber, message} = await req.json() as FormSchema;
         
         await transport.sendMail({
            from: email,
            to: process.env.EMAIL_OUTLOOK,
            subject: `Mensagem recebida de ${name} com o assunto ${message}`,
            text: `
             Olá bernardo, você acabou de receber uma mensagem de ${name}
             _________________________________________________________________

             telefone: ${phoneNumber}

             email do remetente: ${email}

             _________________________________________________________________

             mensagem recebida: ${message}
            
            
            `
         })

         await transport.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Sua mensagem foi enviada para bernardo",
            text: `Agradeço por enviar a mensagem, em breve irei entrar em contato com você.`
         })


         return NextResponse.json({success:true});
    }
    catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ success: false, error: "Erro ao enviar e-mail" });
  }
}