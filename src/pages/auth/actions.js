const domain = process.env.REACT_APP_AUTH0_DOMAIN;

export async function generateTokenAuth(getAccessTokenSilently) {

    try {
        await getAccessTokenSilently({
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
        });
    } catch (error) {
        console.log(error)
    }

}