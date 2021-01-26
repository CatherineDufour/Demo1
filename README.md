# Demo1

S'assurer d'avoir le bon nom dans le dockerfile de l'agent qui va accompagner l'attestation pour que l'affiche fonctionne dans le portefeuille : --label "Directeur de l'État Civil" \

#Créer le projet
oc new-project dec-flihp --display-name="DEC flihp" --description="flihp - Directeur de l'État Civil"
oc project dec-flihp

#Démarrer l'installation de l'agent
oc process -f dec-agent-template.yml | oc apply -f -

S'assure d'avoir les bons url dans les fichier .env et server.js dans DEC-Controller
Dans .env , l'attribut REACT_APP_ISSUER_HOST_URL
Dans server.js , l'attribut HOST_URL

S'assurer d'avoir le bon schéma et le bon cred_def

#Démarrer l'installation du Site Web de l'émetteur
oc process -f dec-controller-template.yml | oc apply -f -
