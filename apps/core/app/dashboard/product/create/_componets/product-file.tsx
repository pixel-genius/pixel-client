import Infocircleicon from "@repo/icons/infocircle";

const ProductFile = () => {
  return (
    <div className="bg-gray-900 flex flex-col gap-4 p-4">
                <div>
                  <div className="flex items-center justify-between pb-2">
                    <div>
                      <p className="text-xl font-bold">Files</p>
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
                            Files must be in a ZIP format, with a maximum size
                            of 2 GB.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
};  

export default ProductFile;