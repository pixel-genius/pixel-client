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
import  BecomeAnAuthorimage from "../../_assets/become-auther.svg"
  


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
        <AutherLayout>

          <div className="pt-40  grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
          
            <div>
            <div className="pb-6">
            <Typography variant="heading/md" weight="bold">
              Become an Author
            </Typography>
            <Typography variant="paragraph/md" weight="normal" className="text-muted-foreground">
              Join the talented community of designers at PixelGenius by
              invitation or by submitting your application using the form below.
            </Typography>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
                className=" bg-card resize-none p-3"
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
            <div className="self-center">
              <Image
               className="w-[600px] h-[600px] object-cover"
                width={500}
                height={500}
                
                    
                src={ BecomeAnAuthorimage}
                alt="pixel-genius-logo"
              />
            

            </div>
          
        
       

          </div>
         
        </AutherLayout>
      )}
    </div>
  );
};

export default AutherForm;
