import React from "react";
import { ActionBtn, Input, Link } from "../../../../styles/universalComponents";
import { ActionGroup, InputGroup } from "./styles";

export const FormComponent = () => {
	return (
		<form>
			<InputGroup>
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
			</InputGroup>
			<ActionGroup>
				<Link disabled>Reset password</Link>
				<ActionBtn type="submit" disabled>
					Log in
				</ActionBtn>
			</ActionGroup>
		</form>
	);
};
