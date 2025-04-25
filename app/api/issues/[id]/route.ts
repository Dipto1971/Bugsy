import authOptions from "@/app/auth/authOptions";
import { issueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: { id: string };
};

export async function PATCH(request: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
        statusText: "Unauthorized",
      }
    );
  }
  // Parse and validate the request body
  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  // Check if the issue exists
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });

  // Update the issue
  const updatedIssue = await prisma.issue.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  // return the updated issue
  return NextResponse.json(
    { message: "Issue updated successfully", issue: updatedIssue },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
        statusText: "Unauthorized",
      }
    );
  }
  const issue = prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });

  await prisma.issue.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json(
    { message: "Issue deleted successfully" },
    { status: 200 }
  );
}
