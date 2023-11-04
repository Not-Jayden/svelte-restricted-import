import type { ESLint, Rule } from 'eslint';

import { rule as noExternalSvelteImportsRule } from 'src/rules/no-external-svelte-imports';
import { rule as noExternalSvelteExportsRule } from 'src/rules/no-external-svelte-exports';
import { rule as noExternalRuneCalls } from 'src/rules/no-external-rune-calls';
import { rule as noEffectOutsideComponents } from 'src/rules/no-effect-outside-components';
import { rule as noPropsOutsideComponents } from 'src/rules/no-props-outside-components';
import { rule as noDirectRuneAssign } from 'src/rules/no-direct-rune-assign';
import { rule as noInitializedRuneExports } from 'src/rules/no-initialized-rune-exports';

const rules = {
	'no-external-svelte-imports': noExternalSvelteImportsRule,
	'no-external-svelte-exports': noExternalSvelteExportsRule,
	'no-external-rune-calls': noExternalRuneCalls,
	'no-effect-outside-components': noEffectOutsideComponents,
	'no-props-outside-components': noPropsOutsideComponents,
	'no-direct-rune-assign': noDirectRuneAssign,
	'no-initialized-rune-exports': noInitializedRuneExports,
} as const satisfies Record<string, Rule.RuleModule>;

const plugin = {
	// TODO: generate meta from package.json
	meta: {
		name: 'eslint-plugin-svelte-runes',
		version: '0.0.1',
	},
	rules,

	configs: {
		recommended: {
			rules: {
				'svelte-runes/no-external-svelte-imports': 'error',
				'svelte-runes/no-external-svelte-exports': 'error',
			},
		},
	},
} satisfies ESLint.Plugin;

export = plugin;
