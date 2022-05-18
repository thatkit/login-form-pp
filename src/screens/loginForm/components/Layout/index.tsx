import React from "react";
import { IconBtn } from "../IconBtn";
import {
	Container,
	IconBtnContainer,
	Span,
	Footer,
	Header,
	H4,
} from "./styles";
import googleIcon from "../../../../assets/icons/google-icon.svg";
import facebookIcon from "../../../../assets/icons/facebook-icon.svg";
import githubIcon from "../../../../assets/icons/github-icon.svg";
import { Link } from "../../../../styles/universalComponents";
import { FormComponent } from "../../features/FormComponent";

export const Layout = () => {
	return (
		<Container>
			<Header>
				<H4>Log in</H4>
				<H4 disabled>Sign up</H4>
			</Header>
			<FormComponent />
			<IconBtnContainer>
				<IconBtn icon={googleIcon}>Log in with Google</IconBtn>
				<IconBtn icon={facebookIcon}>Log in with Facebook</IconBtn>
				<IconBtn icon={githubIcon}>Log in with GitHub</IconBtn>
			</IconBtnContainer>
			<Footer>
				<Span>No account?</Span>
				<Link>Create one</Link>
			</Footer>
		</Container>
	);
};
