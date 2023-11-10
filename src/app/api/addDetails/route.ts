import { NextResponse, type NextRequest } from "next/server";
import supabase from "@/app/supabase";

export async function GET(req: NextRequest){
    const text =req.nextUrl.searchParams.get("text");
    const {data,error} = await supabase.from("distinct_org").select().textSearch("org",`${text}`);
    // if(error) console.log(error)
    return NextResponse.json({ data }, {status: 201});
}
export async function POST(req: NextRequest){
    const {username, org, user_id} = await req.json();
    const {data} = await supabase.from("users").select("lc_username,id").eq("lc_username",username)
    if(data && data?.length > 0 && data[0].id !== user_id){
        return NextResponse.json({message: "user already exists"}, {status: 409})
    }
    const {error} = await supabase.from("users").update({"lc_username":username,"org":org}).eq("id", user_id)
    if(!error){
        return NextResponse.json({message : "Updated Successfully"},{status: 201});
    }
    return NextResponse.json({message: error})
}