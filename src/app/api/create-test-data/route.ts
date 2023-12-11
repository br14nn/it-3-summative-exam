import { NextResponse, NextRequest } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(req: NextRequest) {
  try {
    const postData = (await req.json()) as {
      prod_name: string;
      prod_price: number;
      prod_quantity: number;
    };

    if (
      !postData.prod_name ||
      !postData.prod_price ||
      !postData.prod_quantity
    ) {
      throw new Error("no values on some field");
    }

    const res = await prisma.product.create({
      data: {
        prod_name: postData.prod_name,
        prod_price: postData.prod_price,
        prod_quantity: postData.prod_quantity,
      },
    });

    return NextResponse.json({ response: res, ok: true });
  } catch (error: any) {
    return NextResponse.json({ response: error.message, ok: false });
  }
}
