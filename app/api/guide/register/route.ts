import Guide from "@/models/Guide";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password } = await request.json();

  await connect();

  const existingGuide = await Guide.findOne({ email });

  if (existingGuide) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newGuide = new Guide({
    email,
    password: hashedPassword,
  });

  try {
    await newGuide.save();
    return new NextResponse("Guide is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};