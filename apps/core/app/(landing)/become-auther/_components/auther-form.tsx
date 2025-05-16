"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { postRequestAuthorSchema } from "@repo/apis/core/api/request-author/post/post-request-author.schema";
import { PostRequestAuthorRequest } from "@repo/apis/core/api/request-author/post/post-request-author.types";
import { UsePostRequestAuthor } from "@repo/apis/core/api/request-author/post/use-post-request-author";
import { Button } from "@repo/ui/components";
import { Input } from "@repo/ui/components";
import { Label } from "@repo/ui/components";
import { Textarea } from "@repo/ui/components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AutherLayout } from "./auther-layout";
import AutherResult from "./auther-result";

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

  const onSubmit = (data: PostRequestAuthorRequest) => {

    mutation.mutate(data);
  };

  return (
    <div>
      {isSubmitted ? (
        <AutherResult /> // Show result form after submission
      ) : (
        <AutherLayout bgSrc="/images/pikaso_edit_Candid_image_photography_natural_textures_highly_r.webp">
          <div className="pb-7">
            <h1 className="text-2xl font-bold pb-3">Become an Author</h1>
            <p className="text-xl font-medium text-gray-500">
              Join the talented community of designers at PixelGenius by
              invitation or by submitting your application using the form below.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
          >
            <h2 className="text-lg font-medium pb-4">Apply to Open a Shop</h2>
            <div>
              <Input
                placeholder="exm@gmail.com"
                type="email"
                label="Email"
                {...register("email")}
                error={errors.email?.message}
              />
            </div>
            <div className="flex gap-2 flex-col w-auto sm:flex-row">
              <Input
                placeholder="Pixel"
                label="First Name"
                {...register("firstName")}
                error={errors.firstName?.message}
              />
              <Input
                placeholder="Genius"
                label="Last Name"
                {...register("lastName")}
                error={errors.lastName?.message}
              />
            </div>
            <div>
              <Input
                placeholder="https://www.myportfolio.com"
                label="Portfolio Link"
                {...register("portfolioLink")}
                error={errors.portfolioLink?.message}
              />
            </div>
            <div>
              <Input
                placeholder="Choose your file"
                type="file"
                label="Upload Your CV and Portfolio"
              />
            </div>
            <div>
              <Label className="font-normal text-gray-400">
                Additional Information
              </Label>
              <Textarea
                placeholder="write a short message about yourself"
                className="resize-none p-3"
              />
            </div>
            <div>
              <Button
                type="submit"
                // variant="outline"
                className="w-full bg-primary-600"
                isLoading={mutation.isPending}
              >
                Submit
              </Button>
            </div>
          </form>
        </AutherLayout>
      )}
    </div>
  );
};

export default AutherForm;
