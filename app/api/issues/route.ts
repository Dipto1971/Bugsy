import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(5).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  // request object of type NextRequest
  // This function handles the POST request to create a new issue
  const body = await request.json();
  // Parse the request body as JSON
  // The body should contain the title and description of the issue
  const validation = createIssueSchema.safeParse(body); // Validate the incoming data

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 }); //Client sent invalid data. Error: Bad Request,
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(newIssue, {
    status: 201, //Created
  });
}
