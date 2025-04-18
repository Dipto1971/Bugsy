import { Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
        {/* count={5} means similar skeleton for 5 times */}
      </Card>
    </div>
  );
};

export default LoadingIssueDetails;
