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

#Install
oc new-build --image-stream nodejs --strategy source --binary=true --name=dec-controller

tar -zcvf deploy.tar.gz --exclude 'node_modules' --exclude 'build' --exclude 'deploy.tar.gz' .

oc start-build dec-controller --from-archive=deploy.tar.gz

echo "Avant de dormir 240 sec."
sleep 240

oc logs dec-controller-1-build -f

oc new-app dec-controller --allow-missing-imagestream-tags

oc expose svc dec-controller --name=dec-controller

oc patch svc dec-controller --patch '{"spec":{"ports":[{"name": "8080-tcp", "port": 8080, "targetPort": 10000 }]}}'

oc get route

rm deploy.tar.gz
