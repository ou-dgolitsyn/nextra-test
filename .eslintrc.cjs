const configFiles = ['vite.config.*', 'vitest.setup.ts'];

const namingConventionRules = [
    {
        selector: 'default',
        format: ['camelCase'],
    },
    {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
    },
    {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase'],
    },
    {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
    },
    {
        selector: 'variable',
        modifiers: ['const'],
        types: ['function'],
        format: ['camelCase', 'PascalCase'],
    },
    {
        selector: 'variable',
        modifiers: ['exported'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    {
        selector: 'function',
        format: ['camelCase'],
    },
    {
        selector: 'enum',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
    },
    {
        selector: 'typeLike',
        format: ['PascalCase'],
    },
    {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
    },
    {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
            regex: '^I[A-Z]',
            match: false,
        },
    },
    {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'are', 'should', 'has', 'can', 'did', 'will'],
    },
    {
        selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
    },
];

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
        jest: {
            version: 29,
        },
    },
    extends: [
        'eslint:all', // Pairs well with plugin:react/all
        'plugin:react/all', // Pairs well with eslint:all
        'plugin:react-hooks/recommended',
        'airbnb-typescript',
        'airbnb-typescript-prettier',
        'plugin:@typescript-eslint/all', // Unstable
        'plugin:jest/all', // Unstable
        'plugin:import/recommended', // plugin:import/errors + plugin:import/warnings
        'plugin:import/typescript', // This line apaz does the trick - but which pony?
        'plugin:prettier/recommended', // Incompatible with eslint-plugin-yml
        'plugin:testing-library/react',
        'plugin:storybook/recommended',
        'plugin:@cspell/recommended',
    ],
    env: {
        'jest/globals': true,
        browser: true,
    },
    ignorePatterns: ['.eslintrc.js', '!/.storybook', '.storybook/storybook.requires.js'],
    plugins: [
        '@typescript-eslint',
        'deprecation',
        'simple-import-sort',
        'sort-keys-fix',
        'typescript-sort-keys',
        'jest',
        'testing-library',
    ],
    overrides: [
        {
            files: '*.mdx',
            parser: 'eslint-mdx',
        },
        {
            files: ['*.story.*', '*.stories.*'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
        {
            files: configFiles,
            rules: {
                'import/no-default-export': 'off',
                '@typescript-eslint/naming-convention': 'off',
                'no-inline-comments': 'off',
                'no-empty-pattern': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                'jest/require-top-level-describe': 'off',
                'jest/no-hooks': 'off',
            },
        },
        {
            files: ['*/mocks/Api/**/*'],
            rules: {
                'no-useless-computed-key': 'off',
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'memberLike',
                        format: ['camelCase', 'UPPER_CASE'],
                    },
                    ...namingConventionRules,
                ],
            },
        },
    ],
    rules: {
        // Misc
        'jsx-a11y/accessible-emoji': 'off', // RN TS requires raw text in <Text>, not <span>
        'deprecation/deprecation': 'error',
        'no-shadow': 'off',
        'react-native/no-color-literals': 'off',
        'react/jsx-props-no-spreading': 'off',
        'sort-vars': 'error',
        // @typescript-eslint
        '@typescript-eslint/explicit-function-return-type': 'off', // Prefer type inference
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Prefer type inference
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/consistent-type-definitions': 'off', // Prefer types to interfaces
        '@typescript-eslint/consistent-type-imports': 'off', // Prefer importing everything from modules
        'import/no-cycle': 'off',
        /**
         * Auto-fixing/removing unneeded type args is nice,
         * But not false-positive generic type args with React props
         * - class Atom extends Component<{ children: ReactNode, onPress: () => void }>
         * - const Atom = ({ children, onPress }: { children: ReactNode; onPress: () => void }) => <></> // Inferred JSX.Element
         * - const Atom: FC<{ onPress: () => void }>
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        // React
        'react/static-property-placement': ['error', 'static public field'], // https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#support-for-defaultprops-in-jsx
        'react/jsx-no-literals': 'off',
        'react/jsx-max-depth': 'off',
        // 'react-native/no-raw-text': ['error', { skip: 'Text.Text' }], // https://github.com/Intellicode/eslint-plugin-react-native/issues/271
        'react/react-in-jsx-scope': 'off',
        'react/no-multi-comp': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        // Jest
        'jest/require-hook': 'off',

        // Imports/Exports
        'simple-import-sort/exports': 'error',
        'import/prefer-default-export': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Packages `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Internal packages starting with '@' come next
                    ['^@'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.?(css)$'],
                ],
            },
        ],

        // FMS + Acquire ----------------------
        '@typescript-eslint/strict-boolean-expressions': 'off',
        camelcase: 'off',
        'consistent-return': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-call': 'warn',
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        'react/jsx-filename-extension': 'off',
        // Use function hoisting to improve code readability
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                typedefs: false,
                classes: true,
                variables: true,
            },
        ],

        // a11yRules ----------------------
        'jsx-a11y/aria-role': 'off',
        'jsx-a11y/click-events-have-key-events:': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/label-has-associated-control': 'warn',

        'import/no-default-export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': [
            'error',
            {
                caseSensitive: false,
            },
        ],
        'import/no-useless-path-segments': 'off',
        // It's not accurate in the monorepo style
        'import/no-extraneous-dependencies': 'off',
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-inline-comments': 'error',
        'no-void': 'off',
        'no-unused-vars': [
            'warn',
            {
                ignoreRestSiblings: true,
            },
        ],
        'no-use-before-define': 'off',
        'no-plusplus': 'off',
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        // Should be too restrictive for redux https://github.com/reduxjs/redux-toolkit/issues/521
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'jest/no-done-callback': 'off',
        'testing-library/no-node-access': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        // Really dangerous thing
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        'testing-library/no-unnecessary-act': ['warn'],
        'jest/no-disabled-tests': 'warn',
        'react-hooks/rules-of-hooks': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',

        // Adds lots of overhead
        'react-hooks/exhaustive-deps': 'warn',

        // Adds lots of overhead
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/naming-convention': ['error', ...namingConventionRules],
        'jest/prefer-expect-assertions': 'off',
        '@cspell/spellchecker': 'error',
    },
};
