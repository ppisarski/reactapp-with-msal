# react-msal

Settings for the Azure App should be added to `myapp/src/config.json`.
The file content should be

    {
        "msal": {
            "clientId": "clientid",
            "authority": "https://login.microsoftonline.com/tenantid",
            "redirectUri": "http://localhost:3000/auth.html",
            "tokenRefreshUri": "http://localhost:3000/auth.html",
            "postLogoutRedirectUri": "http://localhost:3000",
            "validateAuthority": true,
            "navigateToLoginRequestUrl": false
        },
        "graph": {
            "endpoint": "https://graph.microsoft.com/v1.0"
        },
        "storage": {
            "connectionString": ""
        }
    }