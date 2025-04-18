import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold">{issue.title}</h1>
      <p>{issue.description}</p>
      <p>Status: {issue.status}</p>
      <p>Created at: {issue.createdAt.toDateString()}</p>
      <p>Updated at: {issue.updatedAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
