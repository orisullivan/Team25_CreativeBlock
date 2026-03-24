//import { NextRequest, NextResponse } from "next/server";

//export async function GET(request: NextRequest) {
//    return NextResponse.json({message: "Getting"});
//}

//export async function POST(request: NextRequest) {
//    const data = await request.json();
//    return NextResponse.json({message: "Received Data"});
//}
import NextAuth from "next-auth";

export const authOptions = {
  trustHost: true,
};


import { handlers } from "@/src/lib/auth/authConfig";
export const {GET, POST} = handlers;