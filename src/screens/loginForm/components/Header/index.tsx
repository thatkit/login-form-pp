import React from "react";
import { HeaderComp } from "./styles";

interface Props {
	children: React.ReactNode;
}

export const Header = (props: Props): JSX.Element => {
	return <HeaderComp>{props.children}</HeaderComp>;
};
