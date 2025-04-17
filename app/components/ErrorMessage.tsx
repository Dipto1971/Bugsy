import { Text } from "@radix-ui/themes/dist/cjs/index.js";
import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <div>
      <Text color="red">{children}</Text>
    </div>
  );
};

export default ErrorMessage;

// Here children is basically the error message, which comes from the zod resolver
