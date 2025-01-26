import Typography from "../atoms/typography";

export const FoundationColor = () => {
  return (
    <div>
      <Typography variant="heading/xs">Foundation Color</Typography>
      <div className="flex  gap-2  bg-card p-5 rounded">
        <div className="flex flex-col gap-2 light p-4">
          {/* light */}
          Ligth
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-background"></div>
            <p className="text-sm font-medium ">background</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-foreground"></div>
            <p className="text-sm font-medium text-black">foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-muted"></div>
            <p className="text-sm font-medium text-black">muted</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-muted-foreground"></div>
            <p className="text-sm font-medium text-black">muted-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-card"></div>
            <p className="text-sm font-medium text-black">card</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-card-foreground"></div>
            <p className="text-sm font-medium text-black">card-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-popover"></div>
            <p className="text-sm font-medium text-black">popover</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-popover-foreground"></div>
            <p className="text-sm font-medium text-black">popover-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-border"></div>
            <p className="text-sm font-medium text-black">border</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-input"></div>
            <p className="text-sm font-medium text-black">input</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-primary"></div>
            <p className="text-sm font-medium text-black">primary</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-primary-foreground"></div>
            <p className="text-sm font-medium text-black">primary-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-secondary"></div>
            <p className="text-sm font-medium text-black">secondary</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-secondary-foreground"></div>
            <p className="text-sm font-medium text-black">
              secondary-foreground
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-accent"></div>
            <p className="text-sm font-medium text-black">accent</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-accent-foreground"></div>
            <p className="text-sm font-medium text-black">accent-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-destructive"></div>
            <p className="text-sm font-medium text-black">destructive</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-destructive-foreground"></div>
            <p className="text-sm font-medium text-black">
              destructive-foreground
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-warning"></div>
            <p className="text-sm font-medium text-black">warning</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-warning-foreground"></div>
            <p className="text-sm font-medium text-black">warning-foreground</p>
          </div>
          {/* check list  */}
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-warning-border"></div>
            <p className="text-sm font-medium text-black">warning-border</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-success"></div>
            <p className="text-sm font-medium text-black">success</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-success-foreground"></div>
            <p className="text-sm font-medium text-black">success-foreground</p>
          </div>
          {/* check list  */}
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-success-border"></div>
            <p className="text-sm font-medium text-black">
              success-success-border
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-information"></div>
            <p className="text-sm font-medium text-black">information</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-information-foreground"></div>
            <p className="text-sm font-medium text-black">
              information-foreground
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-information-border"></div>
            <p className="text-sm font-medium text-black">information-border</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-error"></div>
            <p className="text-sm font-medium text-black">error</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-error-foreground"></div>
            <p className="text-sm font-medium text-black">error-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-error-border"></div>
            <p className="text-sm font-medium text-black">error-border</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-ring"></div>
            <p className="text-sm font-medium text-black">ring</p>
          </div>
        </div>

        {/* dark */}
        <div className="flex flex-col gap-2 dark bg-white text-gray-900 p-4">
          dark
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-background"></div>
            <p className="text-sm font-medium text-black">background</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-foreground"></div>
            <p className="text-sm font-medium text-black">foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-muted"></div>
            <p className="text-sm font-medium text-black">muted</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-muted-foreground"></div>
            <p className="text-sm font-medium text-black">muted-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-card"></div>
            <p className="text-sm font-medium text-black">card</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-card-foreground"></div>
            <p className="text-sm font-medium text-black">card-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-popover"></div>
            <p className="text-sm font-medium text-black">popover</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-popover-foreground"></div>
            <p className="text-sm font-medium text-black">popover-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-border"></div>
            <p className="text-sm font-medium text-black">border</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-input"></div>
            <p className="text-sm font-medium text-black">input</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-primary"></div>
            <p className="text-sm font-medium text-black">primary</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-primary-foreground"></div>
            <p className="text-sm font-medium text-black">primary-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-secondary"></div>
            <p className="text-sm font-medium text-black">secondary</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-secondary-foreground"></div>
            <p className="text-sm font-medium text-black">
              secondary-foreground
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-accent"></div>
            <p className="text-sm font-medium text-black">accent</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-accent-foreground"></div>
            <p className="text-sm font-medium text-black">accent-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-destructive"></div>
            <p className="text-sm font-medium text-black">destructive</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-destructive-foreground"></div>
            <p className="text-sm font-medium text-black">
              destructive-foreground
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-warning"></div>
            <p className="text-sm font-medium text-black">warning</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-warning-foreground"></div>
            <p className="text-sm font-medium text-black">warning-foreground</p>
          </div>
          {/* check list  */}
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-warning-border"></div>
            <p className="text-sm font-medium text-black">warning-border</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-success"></div>
            <p className="text-sm font-medium text-black">success</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-success-foreground"></div>
            <p className="text-sm font-medium text-black">success-foreground</p>
          </div>
          {/* check list  */}
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-success-border"></div>
            <p className="text-sm font-medium text-black">
              success-success-border
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-information"></div>
            <p className="text-sm font-medium text-black">information</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-information-foreground"></div>
            <p className="text-sm font-medium text-black">
              information-foreground
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-information-border"></div>
            <p className="text-sm font-medium text-black">information-border</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-error"></div>
            <p className="text-sm font-medium text-black">error</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-error-foreground"></div>
            <p className="text-sm font-medium text-black">error-foreground</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-error-border"></div>
            <p className="text-sm font-medium text-black">error-border</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full  shadow-lg border bg-ring"></div>
            <p className="text-sm font-medium text-black">ring</p>
          </div>
        </div>
      </div>
    </div>
  );
};
