import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "../../lib/db";
import { meetupData } from "../../lib/modal/meetup";


export async function GET() {
  //const connectionSrt = `mongodb+srv://harikumarsaini778:MeetUp2024@cluster0.ynieqkf.mongodb.net/Meetupdatacollections?retryWrites=true&w=majority`
  await mongoose.connect(connectionSrt);
  const data = await meetupData.find();
  console.log("In the Route.js GET request has given this : ",data);
  return NextResponse.json(data);
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionSrt);
  const postData = new meetupData(payload);
  const result = await postData.save();
  console.log("In the Route.js POST request has given this : ",result);
  return NextResponse.json(result);
}