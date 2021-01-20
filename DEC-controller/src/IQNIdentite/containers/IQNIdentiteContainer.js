/*
* Copyright (c) 2020 Gouvernement du Québec
* Auteur: Julio Cesar Torres (torj01)
* SPDX-License-Identifier: LiLiQ-P-v.1.1
* License-Filename: LICENSES/LILIQ-P11ENunicode.txt
*/
import React              from 'react';
import { Container }      from 'reactstrap';
import IQNIdentiteForm    from '../components/IQNIdentiteForm'
import '../../assets/styles/LoginContainer.css'

function IQNIdentiteContainer() {

	return (
		<div className="Root" style={{ backgroundColor: '#FCF8F7', display: "flex" }}>
			<Container >
				<IQNIdentiteForm className="justify-content-center" />
			</Container>
		</div >
	);
}

export default IQNIdentiteContainer;