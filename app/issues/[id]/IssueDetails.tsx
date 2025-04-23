import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      {/* Fragment because here is multiple children */}
      <Heading className="text-2xl font-bold">{issue.title}</Heading>
      <Flex gap="3" align="center" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>Created at: {issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full mt-4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;

// Single Responsibility Principle: This means that a component should have one reason to change.
// In this case, the IssueDetails component is responsible for displaying the issue details,
// and it does not handle any other logic or functionality. This makes the component easier to understand and maintain.
// On the other hand [id]/page.tsx is responsible for fetching the issue data and passing it to the IssueDetails component.
// This separation of concerns makes the code more modular and easier to test.
