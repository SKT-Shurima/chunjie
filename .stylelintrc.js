// @ts-nocheck
module.exports = {
  extends: ['stylelint-config-css-modules', 'stylelint-config-standard'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'local'] }
    ],
    'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
    'function-comma-space-after': null,
    'declaration-block-trailing-semicolon': 'always',
    'function-calc-no-invalid': null,
    'shorthand-property-no-redundant-values': null,
    'at-rule-empty-line-before': null,
    'at-rule-name-space-after': null,
    'comment-empty-line-before': null,
    'declaration-bang-space-before': null,
    'declaration-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'function-comma-newline-after': null,
    'function-name-case': null,
    'function-parentheses-newline-inside': null,
    'function-max-empty-lines': null,
    'function-whitespace-after': null,
    'number-leading-zero': null,
    'number-no-trailing-zeros': null,
    'rule-empty-line-before': null,
    'selector-combinator-space-after': null,
    'selector-list-comma-newline-after': null,
    'selector-pseudo-element-colon-notation': null,
    'unit-no-unknown': null,
    'no-descending-specificity': null,
    'value-list-max-empty-lines': null,
    'font-family-no-missing-generic-family-keyword': null,
    'block-no-empty': null,
    'no-empty-source': null
  }
};