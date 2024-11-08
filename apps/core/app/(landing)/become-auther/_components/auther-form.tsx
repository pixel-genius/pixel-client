"use client";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Textarea } from "@repo/ui/components/textarea";
import { useState } from "react";
import { AutherLayout } from "./auther-layout";
import AutherResult from "./auther-result";

const AutherForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <h2 className="text-lg font-medium pb-4">Apply to Open a Shop</h2>
            <div>
              <Input placeholder="exm@gmail.com" type="email" label="Email" />
            </div>
            <div className="flex gap-2 flex-col w-auto sm:flex-row">
              <Input placeholder="Pixel" label="First Name" />
              <Input placeholder="Genius" label="Last Name" />
            </div>
            <div>
              <Input
                placeholder="https://www.myportfolio.com"
                label="Portfolio Link"
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
                variant="outline"
                className="w-full bg-primary-600"
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
