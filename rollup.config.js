import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

export default [
    {
        input: 'src/components/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            resolve(),
        ],
    },
    {
        input: 'src/animations/index.js',
        output: [
            {
                file: 'dist/animations/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/animations/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            resolve(),
        ],
    }
];