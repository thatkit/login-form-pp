import styled from "styled-components";
import { colours } from "../../../../styles/variables";

export const FormContainer = styled.div`
	width: 449px;
	height: 657px;
	padding: 52px 41px 18px 39px;
	background: ${colours.frontBg};
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12),
		0px 6px 12px rgba(0, 0, 0, 0.12), 0px 1px 16px rgba(0, 0, 0, 0.12);
	border-radius: 8px;
`;

export const IconBtnContainer = styled.div`
	margin-bottom: 32px;
	display: flex;
	flex-flow: column nowrap;
	gap: 8px;
`;

export const Span = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.25px;
	color: ${colours.fontDark};
`;

export const Footer = styled.footer`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	gap: 16px;
`;
