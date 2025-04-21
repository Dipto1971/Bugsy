import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";
import NewIssueButton from "./newIssueButton";

const prisma = new PrismaClient();

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <NewIssueButton />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue: any) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>
                  {/* On hover */}
                  <Button
                    variant="ghost"
                    className="w-full text-left !cursor-pointer"
                  >
                    {issue.title}
                  </Button>
                </Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {/* hidden md:table-cell means  */}
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
