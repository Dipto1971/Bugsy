import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";

const LoadingIssueButton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton width={100} />
      <Skeleton count={3} width={200} />
    </Box>
  );
};

export default LoadingIssueButton;
