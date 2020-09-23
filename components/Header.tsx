import Link from "next/link";
import React, { FC } from "react";
import styled from "@emotion/styled";
import { useOvermind } from "../store";

type Props = {
  titleColor: string;
};

const StyledHeader = styled.h1<Props>`
  color: ${({ titleColor }) => titleColor};
`;

export const Header: FC<Props> = ({ titleColor }) => {
  const { state } = useOvermind();

  return (
    <div>
      <StyledHeader titleColor={titleColor}>{state.page}</StyledHeader>
      <Link href={"/"}>
        <a>Home page</a>
      </Link>
      <Link href={"/about"}>
        <a>About Page</a>
      </Link>
    </div>
  );
};
