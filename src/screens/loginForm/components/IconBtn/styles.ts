import styled from "styled-components";
import { colours } from "../../../../styles/variables";

export const IconBtnCnt = styled.button`
	height: 72px;
	background: ${colours.frontBg};
	border: none;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12),
		0px 1px 8px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const Span = styled.span`
	margin-left: 16px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: ${colours.fontLigth};
`;
