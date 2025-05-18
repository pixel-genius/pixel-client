"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { postRequestAuthorSchema } from "@repo/apis/core/api/request-author/post/post-request-author.schema";
import { PostRequestAuthorRequest } from "@repo/apis/core/api/request-author/post/post-request-author.types";
import { UsePostRequestAuthor } from "@repo/apis/core/api/request-author/post/use-post-request-author";
import { Button, Typography } from "@repo/ui/components";
import { Input } from "@repo/ui/components";
import { Label } from "@repo/ui/components";
import { Textarea } from "@repo/ui/components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AutherLayout } from "./auther-layout";
import AutherResult from "./auther-result";
import Image from "next/image";


const AutherForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<PostRequestAuthorRequest>({
    resolver: zodResolver(postRequestAuthorSchema.request),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  console.log("errors", errors);
    const mutation = UsePostRequestAuthor({
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  const onSubmit = (data: PostRequestAuthorRequest) => {
    const formData = {
      ...data,
      file: data.file?.[0] ? 1 : 0, // Check if file exists in the FileList
      link: data.portfolioLink
    };
    mutation.mutate(formData);
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="pt-36 h-full px-30 gap-10 pb-20 flex items-center justify-center">
          <div className="self-center">
            <AutherResult />
          </div>
        </div>
      ) : (
        <AutherLayout>
          <div className=" pb-20 pt-40 ">
            <div className="self-center">
              <div className="pb-6 ">
                <Typography variant="heading/lg" className="pb-4" weight="bold">
                  Become an Author
                </Typography>
                <Typography
                  variant="paragraph/md"
                  weight="normal"
                  className="text-muted-foreground"
                >
                  Join the talented community of designers at PixelGenius by
                  invitation or by submitting your application using the form
                  below.
                </Typography>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div>
                  <Input
                    placeholder=" Please enter your email"
                    type="email"
                   
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>
                <div className="flex gap-2 flex-col w-auto sm:flex-row">
                  <Input
                    placeholder="Please enter your first name"
                   
                    {...register("firstName")}
                    error={errors.firstName?.message}
                  />
                  <Input
                    placeholder="Please enter your last name"
                   
                    {...register("lastName")}
                    error={errors.lastName?.message}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Please enter your portfolio link"
                    {...register("portfolioLink")}
                    error={errors.portfolioLink?.message}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Please enter your additional information"
                    className=" bg-card resize-none h-40 p-3"
                    {...register("information")}
                    error={!!errors.information?.message}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Choose your file"
                    type="file"
                    label="Upload Your CV and Portfolio"
                    {...register("file")}
                    error={errors.file?.message?.toString()}
                  />
                </div>
            
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    isLoading={mutation.isPending}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          
          </div>
        </AutherLayout>
      )}
    </div>
  );
};

export default AutherForm;
