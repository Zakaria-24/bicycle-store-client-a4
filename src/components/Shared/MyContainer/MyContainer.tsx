import { ReactNode } from "react";

const MyContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-3 md:px-9 lg:px-28 xl:px-36 ">{children}</div>;
};

export default MyContainer;
