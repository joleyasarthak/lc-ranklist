import { NextRequest, NextResponse } from "next/server";
import supabase from "@/app/supabase";

export async function GET(req : NextRequest){
    const user_id = req.nextUrl.searchParams.get("user_id") || "";
    const {data,error} =  await supabase
    .from("users")
    .select("lc_username,org")
    .eq("id",user_id);
    if(error) console.log(error)
    if (data && data[0].lc_username !== null) {
    return NextResponse.json({data},{status: 409})
  }
    return NextResponse.json({},{status: 201})
}