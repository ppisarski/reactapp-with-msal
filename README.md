# react-msal

Settings for the Azure App should be added to `myapp/src/config.json`.
The file content should be as follows

    {
        "msal": {
            "clientId": "clientid",
            "authority": "https://login.microsoftonline.com/tenantid",
            "redirectUri": "http://localhost:3000",
            "tokenRefreshUri": "http://localhost:3000/auth.html",
            "postLogoutRedirectUri": "http://localhost:3000"
        },
        "graph": {
            "endpoint": "https://graph.microsoft.com/v1.0"
        }
    }

Note, react-aad-msal@2.3.5 was written for msal@1.2.1 therefore this version should be used.
Using newer version of msal library causes variety of errors.
