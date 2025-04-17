import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const validIssueSchema = z.object({
  title: z
    .string()
    .min(5, "Title is required with minimum of 5 characters")
    .max(200),
  description: z
    .string()
    .min(10, "Description is required with minimum of 10 characters")
    .max(1000),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = validIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), {
      status: 400,
      statusText: "Bad Request",
    });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, {
    status: 201,
    statusText: "Created",
  });
}
