import styled, { css } from "styled-components";
import { colours, widths } from "./variables";

export const Link = styled.button`
	border: none;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	background: none;
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.25px;
	color: ${colours.linkEnabled};
	text-decoration: none;
	cursor: pointer;

	${(props) =>
		props.disabled &&
		css`
			color: ${colours.linkDisabled};
			pointer-events: none;
			font-weight: 400;
		`}
`;

export const ActionBtn = styled.button`
	width: 76px;
	height: 43px;
	border: none;
	border-radius: 8px;
	background: ${colours.btnEnabled};
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: ${colours.frontBg};
	cursor: pointer;

	${(props) =>
		props.disabled &&
		css`
			background: ${colours.btnDisabled};
			color: ${colours.frontBg};
			pointer-events: none;
			font-weight: 400;
		`}
`;

export const Input = styled.input`
	height: 54px;
	width: 100%;
	padding: 15px 16px 16px;
	border: none;
	border-bottom: ${widths.inputUnfocused} solid ${colours.inputUnfocused};
	border-radius: 4px 4px 0px 0px;
	margin-bottom: 1px;
	background: ${colours.frontBg};
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: ${colours.fontDark};

	&:focus {
		outline: none;
		border-bottom-width: ${widths.inputFocused};
		border-bottom-color: ${colours.inputFocused};
	}

	&::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0.44px;
		color: ${colours.fontLigth};
	}

	${(props) =>
		props.alt === "false" &&
		css`
			border-bottom-color: ${colours.invalid};

			&:focus {
				border-bottom-color: ${colours.invalid};
			}
		`}
`;
