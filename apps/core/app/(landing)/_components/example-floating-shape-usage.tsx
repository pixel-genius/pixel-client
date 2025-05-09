"use client";

import { useMagicCursorStore } from "@repo/ui/components";

export default function FloatingShapeExample() {
  const { setTargetId, setTasks } = useMagicCursorStore();

  return (
    <div className="relative w-full p-6">
      <div className="flex flex-col space-y-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() =>
              setTasks([
                {
                  type: "move",
                  target: "signup-btn",
                  delay: 1000,
                },
                {
                  type: "click",
                  target: "search-product-btn",
                  // delay: 2000,
                },
                {
                  type: "move",
                  target: "search-product-btn",
                  delay: 1000,
                  offsetX: 100,
                  offsetY: 50,
                },
                {
                  type: "type",
                  target: "input-search-product",
                  text: "Search Product",
                  delay: 1000,
                },
              ])
            }
            className="px-4 py-2 bg-stone-500 text-white rounded hover:bg-blue-600"
          >
            Search Product
          </button>
          <button
            onClick={() =>
              setTasks([
                {
                  type: "move",
                  target: "search-product-btn",
                  delay: 1000,
                },
                {
                  type: "click",
                  target: "search-product-btn",
                  delay: 1000,
                },

                {
                  type: "type",
                  target: "input-search-product",
                  text: "design templates",
                  delay: 1500,
                },
              ])
            }
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Target 1
          </button>
          <button
            onClick={() => setTargetId("element2")}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Target 2
          </button>
          <button
            onClick={() => setTargetId("element3")}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Target 3
          </button>
          <button
            onClick={() => setTargetId("signup-btn")}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Target Far Down
          </button>
        </div>

        <div
          id="element1"
          className="p-6 bg-blue-100 text-blue-500 rounded-lg border-2 border-blue-500"
        >
          Element 1 - This is the first target element that the shape will
          follow.
        </div>

        <div
          id="element2"
          className="p-6 bg-green-100 text-green-500 rounded-lg border-2 border-green-500 ml-32"
        >
          Element 2 - This is the second target element that the shape will
          follow.
        </div>

        <div
          id="element3"
          className="p-6 bg-red-100 text-red-500 rounded-lg border-2 border-red-500 ml-64"
        >
          Element 3 - This is the third target element that the shape will
          follow.
        </div>

        {/* Spacer to create scrollable content */}
        <div className="h-[70vh]"></div>

        <div
          id="signup-btn"
          className="p-6 bg-purple-100 text-purple-500 rounded-lg border-2 border-purple-500"
        >
          <b>This is the signup button</b> - Element Far Down - This element is
          far down the page, clicking the button will scroll to it.
        </div>
      </div>
    </div>
  );
}
