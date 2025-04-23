import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: 'http://localhost:8081/',
    realm: 'go-spa',
    clientId: 'frontend-client'
})

export default keycloak