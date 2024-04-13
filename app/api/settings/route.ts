import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const body = await req.json();
    const { name, image } = body;
    const updatedUser = await prisma.user.update({
      where: { id: currentUser.id },
      data: {
        name,
        image,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error, "ERROR_CONVERSATION_POST");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
