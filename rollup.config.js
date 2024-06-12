import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import terser from '@rollup/plugin-terser';


export default{
    input:"src/index.js",
    output:{
            file:"dist/index.js",
            format: 'es',
            // exports: 'named',
    },
    plugins:[
        resolve(),
        commonjs({ include: /node_modules/ }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        
        postcss({
            extensions: ['.css']
        }),
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'],
            limit: 8192, // Inline files < 8k, copy files > 8k
            emitFiles: true, // Emit files to output dir
        }),
        terser()
    ],
    external: ['react', 'react-dom']
    
}