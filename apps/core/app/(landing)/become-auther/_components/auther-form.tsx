"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { postBecomeAutherSchema } from "@repo/apis/core/accounts/request-author/post/post-become-auther.schema";
import { PostBecomeAutherRequest } from "@repo/apis/core/accounts/request-author/post/post-become-auther.types";
import { usePostBecomeAuther } from "@repo/apis/core/accounts/request-author/post/use-post-become-auther";
import { Button, Typography } from "@repo/ui/components";
import { Input } from "@repo/ui/components";
import { Label } from "@repo/ui/components";
import { Textarea } from "@repo/ui/components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AutherLayout } from "./auther-layout";
import AutherResult from "./auther-result";
import Image from "next/image";
import BecomeAnAuthorimage from "../../_assets/be.svg";
import Vector3d from "./vector3d";

const AutherForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<PostBecomeAutherRequest>({
    resolver: zodResolver(postBecomeAutherSchema.request),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  console.log("errors", errors);
  const mutation = usePostBecomeAuther({
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  const onSubmit = (data: PostBecomeAutherRequest) => {
    console.log("data", data);
    mutation.mutate(data);
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
          <div className="pt-40 px-30 gap-10 pb-20">
            <div>
              <div className="pb-6">
                <Typography className="pb-4" variant="heading/lg" weight="bold">
                  Become an Author
                </Typography>
                <Typography
                  variant="paragraph/md"
                  weight="light"
                  className="text-muted-foreground  pb-6"
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
                <div className="flex gap-2 flex-col w-auto sm:flex-row">
                  <Input
                    placeholder="First Name"
                    size="md"
                    {...register("first_name")}
                    error={errors.first_name?.message}
                  />
                  <Input
                    placeholder="Last Name"
                    size="md"
                    {...register("last_name")}
                    error={errors.last_name?.message}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Please enter your email"
                    type="email"
                    size="md"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>

                <div>
                  <Input
                    placeholder="Please enter your portfolio link"
                    size="md"
                    {...register("profile_link")}
                    error={errors.profile_link?.message}
                  />
                </div>
                <div>
           
                  <Textarea
                    placeholder="Write a short message about yourself"
                    className=" bg-card h-40 resize-none p-3"
                    {...register("info")}
                    // error={errors.profile_link?.message}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Upload Your CV and Portfolio"
                    size="md"
                    type="file"
                    label="Upload Your CV and Portfolio"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-20"
                    isLoading={mutation.isPending}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
            <div className="self-center"></div>
          </div>
        </AutherLayout>
      )}
    </div>
  );
};

export default AutherForm;
