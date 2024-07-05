import { NextResponse } from "next/server";
import config from "@/config";

type Params = {
  slug: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const slug = context.params.slug;
  if (!slug) return NextResponse.json({ message: "Missing slug" }, { status: 400 });

  const collection = config?.collections?.find((collection) => collection?.slug === slug);
  const contentDir = collection?.overridePath || `/collections/${slug}`;
}

export async function POST(request: Request, context: { params: Params }) {

}

export async function PUT(request: Request, context: { params: Params }) {

}

export async function DELETE(request: Request, context: { params: Params }) {

}