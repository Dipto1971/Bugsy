import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

const LoadingIssueButton = () => {
  return <IssueFormSkeleton />;
};

export default LoadingIssueButton;
