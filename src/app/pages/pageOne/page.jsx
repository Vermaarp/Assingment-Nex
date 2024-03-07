"use client";
import React from "react";
import CardPosts from "@/components/cardsPosts/page";

function page() {
  return (
    <main className="h-dvh p-12 bg-[#fdfff9] ">
      
    <div className="flex justify-center h-[32em] ">
      <div className="max-w-6xl w-full items-center justify-center shadow-lg shadow-red-200 p-3 border border-red-200 rounded-lg overflow-y-auto text-sm">
        <CardPosts />
      </div>
    </div>
  </main>
  );
}

export default page;
