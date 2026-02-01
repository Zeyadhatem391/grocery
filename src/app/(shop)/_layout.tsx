import Container from "@/components/common/Container";
import React from "react";

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};
export default CartLayout;
