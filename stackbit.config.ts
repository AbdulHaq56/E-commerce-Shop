import { SanityContentSource } from '@stackbit/cms-sanity';
import path from 'path';

import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    "contentSources": [
        new SanityContentSource({
            projectId: 'v24uokaw',
            token: process.env.SANITY_ACCESS_TOKEN!,
            dataset: 'production',
            rootPath: __dirname,
            studioPath: path.resolve(__dirname, 'studio'),
            studioUrl: '/studio'
        }),
    ],
    "postInstallCommand": "npm i --no-save @stackbit/types @stackbit/cms-sanity"
})