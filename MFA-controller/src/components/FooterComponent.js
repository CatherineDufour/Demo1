/*
* Copyright (c) 2020 Gouvernement du Québec
* Auteur: Julio Cesar Torres (torj01)
* SPDX-License-Identifier: LiLiQ-P-v.1.1
* License-Filename: LICENSES/LILIQ-P11ENunicode.txt
*/
import React from 'react'
import { Container } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import LangueComponent  from './LangueComponent'

function FooterComponent() {

	const { t } = useTranslation();

	return (
		<Container fluid className="fixed-bottom text-center p-3 border-top" style={{ backgroundColor: '#fff' }}>
			{t('translation:copyright')}
			<LangueComponent />
		</Container>
	)
}

export default FooterComponent;
