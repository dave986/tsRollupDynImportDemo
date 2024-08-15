import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
export default {
    input: 'src/main.ts',
    output: [
        {
            dir: './dist',
            format: 'esm',

        },
        // {
        //     dir: './dist',
        //     format: 'esm',
        //     plugins: [terser()]  // minifies the output

        // }
    ],
    plugins: [
        resolve(),
        json(),
        typescript({  // https://github.com/rollup/plugins/tree/master/packages/typescript
            tsconfig: './tsconfig.json',
        }),
    ],
};
