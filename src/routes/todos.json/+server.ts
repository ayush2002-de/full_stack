 import type { RequestHandler } from "@sveltejs/kit";

 import { json } from '@sveltejs/kit';

export const GET : RequestHandler=()=>{
    const result={
        status:200,
        
    }
    return new Response("hello_world",result);
}

export const POST: RequestHandler =async({request})=>{
    const body= await request.json();
    console.log(body);
    const result={
        status:200,
        body:body
        
    }
    return json(result);
    
}

