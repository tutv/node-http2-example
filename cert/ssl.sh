#!/usr/bin/env bash

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -config req.cnf -sha256