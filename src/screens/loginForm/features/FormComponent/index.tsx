import React from "react";
import { ActionBtn, Input, Link } from "../../../../styles/universalComponents";
import { ActionGroup, InputGroup, Span } from "./styles";

export const FormComponent = () => {
	return (
		<form>
			<InputGroup>
				<Input
					type="text"
					name="email"
					id="email"
					placeholder="E-mail"
				/>
				<Input
					type="text"
					name="password"
					id="password"
					placeholder="Password"
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
