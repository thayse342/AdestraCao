import styled from "styled-components"

export const HeaderStyle = styled.header`
	max-width: 100vw;
	height: 110px;
	padding: 30px 0;
	background-color: #19DEFF;

	a {
		color: black;
	}

	.container-header {
		display: grid;
		justify-content: center;
    margin: 0 auto;
	}

	.lista-links{
		display: flex;
		gap: 105px;
	}

 	.link{
		padding: 32px;
		font-family: Poppins;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
`