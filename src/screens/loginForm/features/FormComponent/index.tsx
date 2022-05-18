import React from "react";
import { ActionBtn, Input, Link } from "../../../../styles/universalComponents";
import { ActionGroup, InputGroup, Span } from "./styles";

export const FormComponent = () => {
	return (
		<form>
			<InputGroup>
				<Input
					type="email"
					name="email"
					id="email"
					placeholder="E-mail"
					autoComplete="email"
				/>
				<Input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					autoComplete="current-password"
				/>
			</InputGroup>
			<ActionGroup>
				<Link disabled><Span>Reset password</Span></Link>
				<ActionBtn type="submit" disabled>
					Log in
				</ActionBtn>
			</ActionGroup>
		</form>
	);
};
