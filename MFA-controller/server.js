/*
* Copyright (c) 2020 Gouvernement du Québec
* Auteur: Julio Cesar Torres (torj01)
* SPDX-License-Identifier: LiLiQ-P-v.1.1
* License-Filename: LICENSES/LILIQ-P11ENunicode.txt
*/
const express = require('express');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const PORT = process.env.PORT || 15000;
const HOST_URL = process.env.REACT_APP_ISSUER_HOST_URL || 'http://mfa-agent-admin.apps.exp.lab.pocquebec.org';

console.log("Application started on port " + PORT);
app.use(express.static(path.join(__dirname, 'build')));

app.use(
    '/connections',
    createProxyMiddleware({
        target: HOST_URL,
        changeOrigin: true,
    })
);

app.use(
    '/issue-credential',
    createProxyMiddleware({
        target: HOST_URL,
        changeOrigin: true,
    })
);

app.use(
    '/credential-definitions',
    createProxyMiddleware({
        target: HOST_URL,
        changeOrigin: true,
    })
);

app.use(
    '/present-proof',
    createProxyMiddleware({
        target: HOST_URL,
        changeOrigin: true,
    })
);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);