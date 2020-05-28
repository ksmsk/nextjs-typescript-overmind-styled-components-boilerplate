import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useOvermind } from "../store";

const StyledHeader = styled.h1<{ color: String }>`
  color: ${(props) => props.color};
`;

export const Header = () => {
  const { state } = useOvermind();

  return (
    <div>
      <StyledHeader color="red">{state.page}</StyledHeader>
      <Link href={"/"}>
        <a>Home page</a>
      </Link>
      <Link href={"/about"}>
        <a>About Page</a>
      </Link>
    </div>
  );
};
