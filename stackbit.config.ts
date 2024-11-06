import { SanityContentSource } from '@stackbit/cms-sanity';
import path from 'path';

import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "nextjs",
    "contentSources": [
        new SanityContentSource({
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v24uokaw',
            token: process.env.SANITY_ACCESS_TOKEN!,
            dataset: process.env.SANITY_DATASET || 'production',
            rootPath: __dirname,
            studioPath: path.resolve(__dirname, 'studio'),
            studioUrl: process.env.SANITY_STUDIO_URL || '/studio'
        }),
    ],
    "postInstallCommand": "npm i --no-save @stackbit/types @stackbit/cms-sanity"
})