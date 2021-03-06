/*
* Copyright (c) 2020 Gouvernement du Québec
* Auteur: Julio Cesar Torres (torj01)
* SPDX-License-Identifier: LiLiQ-P-v.1.1
* License-Filename: LICENSES/LILIQ-P11ENunicode.txt
*/
import React from 'react'
import { useTranslation } from 'react-i18next'
import enflag              from '../assets/images/icon/UK.png'
import brFlag              from '../assets/images/icon/BR.png'
import frFlag              from '../assets/images/icon/FR.png'
import '../assets/styles/Social.css'
import '../assets/styles/ProofContainer.css'

function LangueComponent(){
    
    const { i18n } = useTranslation(); 

    const changeLanguage = code => {
	  	i18n.changeLanguage(code);
    };
    
    return(
        <div className="lang">
            
                <img src={enflag} onClick={() => changeLanguage('en')} alt="en" width="40" height="40" />  
           
                { /* <img src={brFlag} onClick={() => changeLanguage('pt')} alt="pt" width="40" height="40" /> */}
           
                <img src={frFlag} onClick={() => changeLanguage('fr')} alt="fr" width="40" height="40" /> 
           
        </div>
    ); 
        
} export default LangueComponent;