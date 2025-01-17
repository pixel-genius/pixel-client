import { Button } from "@repo/ui/components/button";

// isLogin
const CommentSection = () => {
  return (
    <div className="bg-gray-700 rounded-lg mb-44">
      <div className="p-3 flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold">Comments</h2>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              src="https://avatar.iran.liara.run/public/1"
              height={46}
              width={50}
              className="rounded-full mr-2"
            />
          </div>
          <div>
            <p className="text-2xl font-bold">Youssef Refaat</p>
            <p className="text-sm font-medium">
              Great work. I wonder what plugin/tool do you use to generate the
              colors palettes?I want to add my brand color and need it's shades
              and tints to be like them
            </p>
            <p className="">a month ago</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 flex justify-between">
          <div className="">
            <p className="font-light text-xs text-gray-600">
              Leave a comment, be nice.
            </p>
          </div>
          <div className="">
            <Button
              // variant="default"
              className="bg-primary-600 text-foreground w-40 text text-lg font-medium"
            >
              login{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
