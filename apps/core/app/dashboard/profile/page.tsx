"use client";

import { IconCamera, IconSparkles } from "@tabler/icons-react";

import { useRef, useState } from "react";

import Link from "next/link";

import { Avatar, AvatarFallback } from "@repo/ui/components/atoms/avatar";
import { AvatarImage } from "@repo/ui/components/atoms/avatar";
import { Button } from "@repo/ui/components/atoms/button";
import { Switch } from "@repo/ui/components/atoms/switch";
import { Textarea } from "@repo/ui/components/atoms/textarea";
import { Typography } from "@repo/ui/components/atoms/typography";
import { Input } from "@repo/ui/components/molecules/input";

const ProfilePage = () => {
  const [avatarSrc, setAvatarSrc] = useState("https://github.com/shadcn.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setAvatarSrc(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Typography className="pb-4" variant="heading/md" weight="bold">
        Profile
      </Typography>
      <div className="bg-card rounded-lg gap-6 px-4 py-6">
        {/* Avatar Section  */}
        <Typography variant="heading/xs" weight="medium">
          Avatar
        </Typography>
        <div className="flex items-center w-1/2 gap-2 pt-4">
          <div className="relative group ">
            <Avatar className="size-24 items-center flex cursor-pointer ">
              <AvatarImage src={avatarSrc} alt="Profile avatar" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <IconCamera className="w-6 h-6 text-white" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/png,image/jpeg"
              className="hidden"
            />
          </div>

          <Typography variant="paragraph/sm" weight="light">
            Update your avatar by clicking the image. 288x288 px size
            recommended in PNG or JPG format only.
          </Typography>
        </div>
        {/* End Avatar Section  */}
        {/* Details Section */}
        <Typography className="pt-6" variant="heading/xs" weight="medium">
          Details
        </Typography>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <Input
            label="First Name"
            placeholder="Enter your first name"
            defaultValue="Ali"
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name"
            defaultValue="Ebrahimi Kashef"
          />
          <Input
            label="Job title"
            placeholder="Enter your job title"
            defaultValue="Product Design, Web Design"
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            defaultValue="Ali.kashef29@yahoo.com"
          />
          <div className="col-span-2">
            <Input
              label="Skills"
              placeholder="Add your skills"
              defaultValue="UIUX, Product, UX"
            />
          </div>
          <div className="col-span-2">
            <div className="space-y-2">
              <Typography variant="paragraph/sm" weight="medium">
                Label
              </Typography>
              <div className="relative">
                <Textarea
                  className="min-h-[100px] bg-transparent"
                  placeholder="Add a brief description about yourself"
                  defaultValue="A freelance graphic and UI/UX designer. I specialise in Web Design, logo and brand development, motion graphics, and offer design services to business of all sizes ...."
                />
                <button
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm text-white hover:bg-primary/90"
                  onClick={() => {
                    // Add enhance functionality here
                    console.log("Enhance with AI clicked");
                  }}
                >
                  <IconSparkles size={16} />
                  Enhance with AI
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Details Section */}
        {/* Privacy Hire me */}

        <div className="grid  gap-4 pt-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <Typography variant="heading/xs" className="py-2" weight="bold">
                Hire me
              </Typography>
              <Typography
                variant="paragraph/sm"
                weight="light"
                className="text-muted-foreground"
              >
                Enabling this feature will allow other users to contact you with
                work inquiries.
              </Typography>
            </div>
            <Switch defaultChecked={false} />
          </div>
        </div>
        {/* End Privacy Hire me */}
        <div className="flex justify-end pt-6">
          <Button variant="primary" size="md">
            Save changes
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
