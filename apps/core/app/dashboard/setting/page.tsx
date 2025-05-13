'use client';

import { Button, Input, Separator, Switch, Typography } from "@repo/ui/components";
import { AddWallet } from "../_compnents/add-wallet";
import { FormProvider, useForm } from "react-hook-form";

const SettingPage = () => {
  const methods = useForm({
    defaultValues: {
      highlights: []
    }
  });

  return (
    <div>
        <div>
            <Typography variant="heading/sm" className="" weight="bold">
              Settings
            </Typography>
        </div>
      <div>
      <div className="grid  gap-4 pt-4">
      <Typography variant="label/md" className="" weight="medium">
              Privacy
      </Typography>
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <Typography variant="heading/xs" className="py-2" weight="bold">
              Privacy
              </Typography>
              <Typography variant="paragraph/sm" weight="light" className="text-muted-foreground">
              Enabling privacy will hide your profile, only you will be able to see it. Not recommended if you’re an author.              </Typography>
            </div>
            <Switch defaultChecked={false} />
          </div>
        </div>
        <div>
        <Separator className="mt-4" />
       
            
            
        </div>
        <div>
        <Typography variant="label/md" className="py-4" weight="medium">
        PayPal Payment Config
      </Typography>
      <Input
            label="Email Paypal"
            placeholder="Please enter your paypal email"
            defaultValue="Ali"
          />

        </div>
        <Separator className="mt-4" />
   
        <div>
        <FormProvider {...methods}>
          <AddWallet />
        </FormProvider>
        </div>
      </div>
      <div className="flex justify-start py-8">
      <Button variant="primary" className=" px-8">Update</Button>
      </div>
    </div>
  );
};

export default SettingPage;
