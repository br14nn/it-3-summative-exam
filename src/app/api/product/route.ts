import { NextResponse, NextRequest } from "next/server";
//utils
import prisma from "@/utils/prisma";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const prod_name = params.get("prod_name");
  const prod_id = params.get("prod_id");

  try {
    const res = await prisma.product.findMany({
      orderBy: {
        id: "desc",
      },
      where: {
        id: {
          equals: prod_id ? Number(prod_id) : undefined,
        },
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
    const postData = (await req.json()) as IProduct;
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

export async function PUT(req: NextRequest) {
  try {
    const updateData = (await req.json()) as IProduct;

    const res = await prisma.product.update({
      where: {
        id: Number(updateData.id),
      },
      data: {
        prod_name: updateData.prod_name ? updateData.prod_name : undefined,
        prod_price: updateData.prod_price
          ? Number(updateData.prod_price)
          : undefined,
        prod_quantity: updateData.prod_quantity
          ? Number(updateData.prod_quantity)
          : undefined,
      },
    });

    return NextResponse.json({ response: res, ok: true });
  } catch (error: any) {
    return NextResponse.json({ response: error.message, ok: false });
  }
}

export async function DELETE(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const prod_id = params.get("prod_id");

  try {
    if (!prod_id) {
      throw new Error("no id specified");
    }

    const res = await prisma.product.delete({
      where: {
        id: prod_id ? Number(prod_id) : undefined,
      },
    });

    return NextResponse.json({ response: res, ok: true });
  } catch (error: any) {
    return NextResponse.json({ response: error.message, ok: false });
  }
}
