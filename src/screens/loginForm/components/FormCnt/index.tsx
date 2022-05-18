import React from "react";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { IconBtn } from "../IconBtn";
import { FormContainer, IconBtnContainer, Span, Footer } from "./styles";
import googleIcon from "../../../../assets/icons/google-icon.svg";
import facebookIcon from "../../../../assets/icons/facebook-icon.svg";
import githubIcon from "../../../../assets/icons/github-icon.svg";
import { ActionBtn, Input, Link } from "../../../../styles/universalComponents";

export const FormCnt = () => {
	return (
		<FormContainer>
			<Header>
				<Heading />
			</Header>
			<form>
				<Input
					type="text"
					name="email"
					id="email"
					placeholder="Password"
				/>
				<Input
					type="text"
					name="password"
					id="password"
					placeholder="E-mail"
				/>
				<Link href="">Reset password</Link>
				<ActionBtn type="submit">Log in</ActionBtn>
			</form>
			<IconBtnContainer>
				<IconBtn icon={googleIcon}>Log in with Google</IconBtn>
				<IconBtn icon={facebookIcon}>Log in with Facebook</IconBtn>
				<IconBtn icon={githubIcon}>Log in with GitHub</IconBtn>
			</IconBtnContainer>
			<Footer>
				<Span>No account?</Span>
				<Link href="">Create one</Link>
			</Footer>
		</FormContainer>
	);
};
