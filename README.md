# Demo1

S'assurer d'avoir le bon nom dans le dockerfile de l'agent qui va accompagner l'attestation pour que l'affiche fonctionne dans le portefeuille :
--label "Directeur de l'État Civil" \

Se créer un DID public sur la blockchain ou réutiliser celui fournie dans la démo sur votre chaîne de bloc.

Mettre la bonne clé privé pour se connecter à la chaîne de bloc dans le fichier dec-template.yml à l'attribut value de l'issuer seed:

- name: ISSUER_SEED
  value: 000000000000DirecteurEtatCivilQc

S'assure d'avoir les bons url dans les fichier .env et server.js dans DEC-Controller
Dans .env , l'attribut REACT_APP_ISSUER_HOST_URL + S'assurer d'avoir le bon schéma et le bon cred_def
Dans server.js , l'attribut HOST_URL

#Créer le projet openshift
oc new-project exp-att-del --display-name="Expérimentation Attestation Déléguée" --description="Expérimentation sur l'Attestation Déléguée en verifiable credential"
oc project exp-att-del

#Démarrer l'installation de l'application du Directeur de l'État Civil du Québec
oc process -f dec-template.yml | oc apply -f -

#Démarrer l'installation du Site Web de l'émetteur
oc process -f mfa-template.yml | oc apply -f -
