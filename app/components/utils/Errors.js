import React from "react";

export default function Errors({ type }) {
  if (type == "error")
    return (
      <div role="alert w-1/2">
        <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>Something not ideal might be happening.</p>
        </div>
      </div>
    );
}
