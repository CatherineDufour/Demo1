/*
* Copyright (c) 2020 Gouvernement du Québec
* Auteur: Julio Cesar Torres (torj01)
* SPDX-License-Identifier: LiLiQ-P-v.1.1
* License-Filename: LICENSES/LILIQ-P11ENunicode.txt
*/
import React                   from 'react';
import ProofInscriptionForm    from '../components/ProofInscriptionForm';
import                              '../../assets/styles/ProofContainer.css';

const ProofInscriptionContainer = (props) => {
    
    return (
        <ProofInscriptionForm data={props.location.state}/>
    );
};

export default ProofInscriptionContainer;