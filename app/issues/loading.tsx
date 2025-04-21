import { Table } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";
import "react-loading-skeleton/dist/skeleton.css";
import NewIssueButton from "./newIssueButton";
import prisma from "@/prisma/client";

const LoadingIssuesPage = async () => {
  const totalIssues = await prisma.issue.count();
  const issueSkeleton = Array.from({ length: totalIssues }, (_, i) => i);
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
          {issueSkeleton.map((issue: any) => (
            <Table.Row key={issue}>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {/* hidden md:table-cell means  */}
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default LoadingIssuesPage;
