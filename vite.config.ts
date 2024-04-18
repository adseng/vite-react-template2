import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import terser from '@rollup/plugin-terser'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            svgr(),
            react({
                jsxImportSource: '@emotion/react',
                babel: {
                    plugins: ['@emotion/babel-plugin']
                }
            })
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        base: '/',
        build: {
            rollupOptions: {
                plugins: [
                    terser({
                        format: {
                            comments: false
                        }
                    })
                ],
                output: {
                    manualChunks: id => {
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                    }
                }
            }
        },
        css: {
            preprocessorOptions: {
                postcss: {
                    plugins: [
                        tailwindcss('./tailwind.config.js'),
                        autoprefixer()
                    ]
                }
            }
        }
    }
})
