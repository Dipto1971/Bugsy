import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";

const LoadingIssueDetails = () => {
  return (
    <div>
      <Heading className="text-2xl font-bold">
        <Skeleton width={200} height={40} />
      </Heading>
      <Flex gap="3" align="center" my="2">
        <Skeleton width={100} height={20} />
        <Skeleton width={100} height={20} />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={5} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetails;
