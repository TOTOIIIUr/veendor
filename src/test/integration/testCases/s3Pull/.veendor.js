'use strict';

module.exports = {
    backends: [
        {
            alias: 's3',
            backend: 's3',
            options: {
                bucket: 'testbucket',
                s3Options: {
                    endpoint: 'localhost:14569',
                    sslEnabled: false,
                    s3ForcePathStyle: true,
                },
            }
        }
    ]
};
