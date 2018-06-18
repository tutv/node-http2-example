const Confidence = require('confidence');

const data = {
    port: {
        $filter: 'env',
        $default: 5200,
        staging: 5201,
        production: 5200
    },
    portHTTPS: {
        $filter: 'env',
        $default: 5443,
        staging: 5444,
        production: 5443
    },
    webClient: {
        $filter: "env",
        $default: 'https://localhost:4000',
        staging: 'https://dev-fb.spyamz.com',
        production: 'https://fb.spyamz.com',
    },
    host: {
        $filter: "env",
        $default: 'https://localhost:4000/api',
        staging: 'https://dev-fb-api-services.spyamz.com',
        production: 'https://fb-api-services.spyamz.com',
    },
    mongodb: {
        $filter: "env",
        $default: 'mongodb://localhost:27017/spyfb',
        staging: 'mongodb://spyfb:gNS75pZWjxGfXsyN@localhost:27017/spyfb_dev',
        _production: 'mongodb://spyfb:gNS75pZWjxGfXsyN@192.81.214.196:27017/spyfb',
        production: 'mongodb://spyfb:gNS75pZWjxGfXsyN@localhost:27017/spyfb',
    },
    elasticSearch: {
        $filter: "env",
        $default: {
            uri: process.env.ELASTICSEARCH_URI || 'http://localhost:9200',
            index: 'spyfb',
            type: 'post'
        },
        staging: {
            uri: "https://marketify:2BvSjaBgwEEJR7n2@elasticsearch.marketify.co",
            index: 'spyfb',
            type: 'post'
        },
        _production: {
            uri: "https://marketify:2BvSjaBgwEEJR7n2@elasticsearch.marketify.co",
            index: 'spyfb',
            type: 'post'
        },
        production: {
            uri: 'http://66.175.217.201:9200',
            index: 'spyfb',
            type: 'post'
        }
    },
    auth: {
        facebook: {
            $filter: "env",
            $default: {
                clientID: '466104957154735',
                clientSecret: 'ec2bfea88cb9d8acb6892c55243143b0',
                callbackURL: "https://localhost:5443/auth/facebook/callback",
                profileFields: ['id', 'displayName', 'name', 'email']
            },
            staging: {
                clientID: '466104957154735',
                clientSecret: 'ec2bfea88cb9d8acb6892c55243143b0',
                callbackURL: "https://dev-fb-app-services.spyamz.com/auth/facebook/callback",
                profileFields: ['id', 'displayName', 'name', 'email']
            },
            production: {
                clientID: '466104957154735',
                clientSecret: 'ec2bfea88cb9d8acb6892c55243143b0',
                callbackURL: "https://fb-app-services.spyamz.com/auth/facebook/callback",
                profileFields: ['id', 'displayName', 'name', 'email']
            }
        },
        google: {
            $filter: "env",
            $default: {
                clientID: '1014503596848-qmn1os3du6e30kn17l87fvqcbl341okf.apps.googleusercontent.com',
                clientSecret: 'ecDpO6kEz_yk27DQ8sHnJ2ZC',
                callbackURL: "https://localhost:5443/auth/google/callback"
            },
            staging: {
                clientID: '1014503596848-qmn1os3du6e30kn17l87fvqcbl341okf.apps.googleusercontent.com',
                clientSecret: 'ecDpO6kEz_yk27DQ8sHnJ2ZC',
                callbackURL: "https://dev-fb-app-services.spyamz.com/auth/google/callback"
            },
            production: {
                clientID: '1014503596848-qmn1os3du6e30kn17l87fvqcbl341okf.apps.googleusercontent.com',
                clientSecret: 'ecDpO6kEz_yk27DQ8sHnJ2ZC',
                callbackURL: "https://fb-app-services.spyamz.com/auth/google/callback"
            }
        }
    },
};

const store = new Confidence.Store(data);
const criteria = {
    env: process.env.NODE_ENV || 'development'
};

module.exports = (key, defaultValue = null) => {
    return store.get(key, criteria) || defaultValue;
};