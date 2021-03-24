#!/bin/bash
if [ ! -z ${REACT_APP_SCHEMA_NAME_IDENTITE} ]; then
 cat <<END
 window.REACT_APP_SCHEMA_NAME_IDENTITE=’${REACT_APP_SCHEMA_NAME_IDENTITE}’;
END
if [ ! -z ${REACT_APP_SCHEMA_VERSION_IDENTITE} ]; then
 cat <<END
 window.REACT_APP_SCHEMA_VERSION_IDENTITE=’${REACT_APP_SCHEMA_VERSION_IDENTITE}’;
END
if [ ! -z ${REACT_APP_SCHEMA_ISSUER_DID_IDENTITE} ]; then
 cat <<END
 window.REACT_APP_SCHEMA_ISSUER_DID_IDENTITE=’${REACT_APP_SCHEMA_ISSUER_DID_IDENTITE}’;
END
if [ ! -z ${REACT_APP_CRED_DEF_IDENTITE} ]; then
 cat <<END
 window.REACT_APP_CRED_DEF_IDENTITE=’${REACT_APP_CRED_DEF_IDENTITE}’;
END
fi