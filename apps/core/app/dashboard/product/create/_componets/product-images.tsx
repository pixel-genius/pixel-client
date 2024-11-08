import Infocircleicon from "@repo/icons/info-circle";

const ProductImages = () => {
  return (
    <div className="bg-gray-900 flex flex-col gap-4 p-4">
    <div>
      <div className="flex items-center justify-between pb-2 ">
        <div>
          <p className="text-xl font-bold">Thumbnail</p>
        </div>
        <div className="flex gap-1 text-gray-500">
          <Infocircleicon height={18} width={18} color="white" />
          <p className="text-sm font-light">Required</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className=" flex justify-center items-center border-dashed  border border-gray-500">
          <div className="flex items-center flex-col justify-center py-12">
            <div className="">gif upload</div>
            <div className="flex gap-1">
              <p className="text-sm font-normal">
                Drag & drop image to upload, or
              </p>
              <p className="text-sm font-bold text-primary-500">
                Browse
              </p>
            </div>
            <div>
              <p className="text-xs font-normal text-gray-500">
                Create image at 1800 × 1360 px. Keep images under
                3MB and JPEG if possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-between pb-2 ">
        <div>
          <p className="text-xl font-bold">
            ThumbnailDetail images (4-8 required for approval)
          </p>
        </div>
        <div className="flex gap-1 text-gray-500">
          <Infocircleicon height={18} width={18} color="white" />
          <p className="text-sm font-light">Required</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className=" flex justify-center items-center border-dashed  border border-gray-500">
          <div className="flex items-center flex-col justify-center py-12">
            <div className="">gif upload</div>
            <div className="flex gap-1">
              <p className="text-sm font-normal">
                Drag & drop image to upload, or
              </p>
              <p className="text-sm font-bold text-primary-500">
                Browse
              </p>
            </div>
            <div>
              <p className="text-xs font-normal text-gray-500">
                Create image at 1800 × 1360 px. Keep images under
                3MB and JPEG if possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex items-center justify-between pb-2 ">
        <div>
          <p className="text-xl font-bold">Full previews</p>
        </div>
        <div className="flex gap-1 text-gray-500">
          <Infocircleicon height={18} width={18} color="white" />
          <p className="text-sm font-light">Required</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className=" flex justify-center items-center border-dashed  border border-gray-500">
          <div className="flex items-center flex-col justify-center py-12">
            <div className="">gif upload</div>
            <div className="flex gap-1">
              <p className="text-sm font-normal">
                Drag & drop image to upload, or
              </p>
              <p className="text-sm font-bold text-primary-500">
                Browse
              </p>
            </div>
            <div>
              <p className="text-xs font-normal text-gray-500">
                Create image at 1800 × 1360 px. Keep images under
                3MB and JPEG if possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};  

export default ProductImages;