"use client";
// This needs to Client side code
// -> We are using forms which requires user interaction

import React from "react";
import { TextField, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  // Defines the shape of the form data
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>(); // Specifying the shape of the form data in useForm
  // console.log(register("title"));
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {/* max-w-xl means maximum width of 1000px */}
      {error && (
        <Callout.Root color="red" className="mb-5">
          {/* mb-5 means margin-bottom-5 */}
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError(
              "There was an error creating the issue. Please try again."
            );
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register("title")}>
          <TextField.Slot />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
