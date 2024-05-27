import React from "react";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/login" />
    </div>
  );
};

export default page;
