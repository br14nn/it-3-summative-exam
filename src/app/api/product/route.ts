import { NextResponse, NextRequest } from "next/server";

import prisma from "@/utils/prisma";

import IProdForm from "@/types/IProdForm";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const prod_name = params.get("prod_name") as string;

  try {
    const res = await prisma.product.findMany({
      orderBy: {
        id: "desc",
      },
      where: {
        prod_name: {
          contains: prod_name ? prod_name : "",
        },
      },
    });

    return NextResponse.json({ response: res, ok: true });
  } catch (error: any) {
    return NextResponse.json({ response: error.message, ok: false });
  }
}

export async function POST(req: NextRequest) {
  try {
    const postData = (await req.json()) as IProdForm;
    const { prod_name, prod_price, prod_quantity } = postData;

    if (!prod_name || !prod_price || !prod_quantity) {
      throw new Error("all fields should not be empty");
    }

    const res = await prisma.product.create({
      data: {
        prod_name: prod_name,
        prod_price: Number(prod_price),
        prod_quantity: Number(prod_quantity),
      },
    });

    return NextResponse.json({ response: res, ok: true });
  } catch (error: any) {
    return NextResponse.json({ response: error.message, ok: false });
  }
}
