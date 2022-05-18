import styled from "styled-components";
import { colours, widths } from "./variables";

export const Link = styled.a`
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.25px;
	color: ${colours.linkEnabled};
	text-decoration: none;
	cursor: pointer;
`;

export const ActionBtn = styled.button`
	width: 76px;
	height: 43px;
	border: none;
	border-radius: 8px;
	background: ${colours.btnDisabled};
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: ${colours.frontBg};
`;

export const Input = styled.input`
	height: 54px;
	width: 100%;
	padding: 15px 16px;
	border: none;
	border-bottom: ${widths.inputUnfocused} solid ${colours.inputUnfocused};
	border-radius: 4px 4px 0px 0px;
	background: ${colours.frontBg};
	&::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0.44px;
		color: ${colours.fontLigth};
	}
`;
