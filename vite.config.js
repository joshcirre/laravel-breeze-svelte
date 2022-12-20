import fs from 'fs';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from 'path';
const projectRootDir = resolve(__dirname);
import {homedir} from 'os';

let host = 'laravel-breeze-svelte.test'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        svelte({})
    ],
    optimizeDeps: {
        include: [
            '@inertiajs/inertia',
            '@inertiajs/inertia-svelte',
        ]
    },
    resolve: {
        alias: {
            '@': resolve(projectRootDir, 'resources/js'),
            '~': resolve(projectRootDir, 'resources'),
        },
        extensions: ['.js', '.svelte', '.json'],
    },
    server: detectServerConfig(host),
});


function detectServerConfig(host) {
    let keyPath = resolve(homedir(), `.config/valet/Certificates/${host}.key`)
    let certificatePath = resolve(homedir(), `.config/valet/Certificates/${host}.crt`)

    if (!fs.existsSync(keyPath)) {
        return {}
    }

    if (!fs.existsSync(certificatePath)) {
        return {}
    }

    return {
        hmr: {host},
        host,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certificatePath),
        },
    }
}
