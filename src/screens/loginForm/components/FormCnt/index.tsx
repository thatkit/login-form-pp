import React from "react";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { FormContainer } from "./styles";

export const FormCnt = () => {
	return (
		<FormContainer>
			<Header>
				<Heading />
			</Header>
			<div>
				<input type="text" name="email" id="email" />
				<label htmlFor="email">E-mail</label>
				<input type="text" name="password" id="password" />
				<label htmlFor="password">Password</label>
				<a href="">Reset password</a>
				<button>Log in</button>
			</div>
			<div>
				<button>Log in with Google</button>
				<button>Log in with Facebook</button>
				<button>Log in with GitHub</button>
			</div>
			<footer>
				<span>No account?</span>
				<a href="">Create one</a>
			</footer>
		</FormContainer>
	);
};
