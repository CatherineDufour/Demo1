FROM bcgovimages/aries-cloudagent:py36-1.15-0_0.5.6

ARG ISSUER_SEED
ARG ISSUER_AGENT_ENDPOINT
ARG ISSUER_KMS_KEY
ARG ISSUER_ADMIN_API_KEY
ARG ISSUER_HOSTNAME
ARG GENESIS_URL
ARG INBOUND_PORT
ARG API_PORT
ARG ISSUER_POSTGRESQL_WALLET_HOST
ARG ISSUER_POSTGRESQL_WALLET_PORT

ENV SEED=$ISSUER_SEED
ENV AGENT_ENDPOINT=$ISSUER_AGENT_ENDPOINT
ENV WALLET_KEY=$ISSUER_KMS_KEY
ENV ADMIN_API_KEY=$ISSUER_ADMIN_API_KEY
ENV GENESIS=$GENESIS_URL
ENV AGENT_INBOUND_PORT=$INBOUND_PORT
ENV ADMIN_API_PORT=$API_PORT
ENV POSTGRESQL_WALLET_HOST=$ISSUER_POSTGRESQL_WALLET_HOST
ENV POSTGRESQL_WALLET_PORT=$ISSUER_POSTGRESQL_WALLET_PORT

RUN pip install aries-cloudagent

ENTRYPOINT ["/bin/bash", "-c", "aca-py start  --inbound-transport http 0.0.0.0 $AGENT_INBOUND_PORT \
    --outbound-transport http \
    --admin 0.0.0.0 $ADMIN_API_PORT \
    --seed $SEED \
    --log-level WARNING \
    --endpoint $AGENT_ENDPOINT \
    --wallet-key $WALLET_KEY \
    --wallet-name VaxCertIssuer \
    --wallet-type indy \
    --label 'Directeur État Civil' \
    --auto-accept-invites \
    --auto-accept-requests \
    --auto-respond-messages \
    --auto-respond-credential-proposal \
    --auto-respond-credential-offer \
    --auto-respond-credential-request \
    --auto-respond-presentation-proposal \
    --auto-respond-presentation-request \
    --auto-store-credential \
    --enable-undelivered-queue \
    --admin-insecure-mode \
    --wallet-storage-type 'postgres_storage' \
    --wallet-storage-config '{\"url\":\"'\"$POSTGRESQL_WALLET_HOST\"':'\"$POSTGRESQL_WALLET_PORT\"'\",\"max_connections\":5}' \
    --wallet-storage-creds '{\"account\":\"'\"$POSTGRESQL_WALLET_USER\"'\",\"password\":\"'\"$POSTGRESQL_WALLET_PASSWORD\"'\",\"admin_account\":\"'\"$POSTGRESQL_WALLET_ADMIN_USER\"'\",\"admin_password\":\"'\"$POSTGRESQL_WALLET_ADMIN_PASSWORD\"'\"}' \
    --genesis-url $GENESIS", "--"]
