module.exports = {
  "extends": "stylelint-config-recommended-vue",
  "rules": {
      "block-opening-brace-space-before": "always",
      "block-no-empty": true,
      "declaration-colon-space-after": "always",
      "max-empty-lines": 1,
      "color-no-invalid-hex": true,
      "font-family-no-duplicate-names": true,
      "function-calc-no-unspaced-operator": true,
      "string-no-newline": true,
      "unit-no-unknown": true,
      "property-no-unknown": true,
      "keyframe-declaration-no-important": true,
      "declaration-block-no-duplicate-properties": true,
      "declaration-colon-space-before": "never",
      "declaration-block-no-shorthand-property-overrides": true,
      "selector-pseudo-element-no-unknown": [true, {
          "ignorePseudoElements": ["deep"]
      }],
      "selector-type-no-unknown": true,
      "media-feature-name-no-unknown": true,
      "at-rule-no-unknown": [true, {
          "ignoreAtRules": [
              "/^use/",
              "/^include/",
              "/^extend/",
              "/^mixin/",
              "/^if/",
              "/^else/",
              "/^function/",
              "/^return/",
              "/^for/",
              "/^each/",
              "tailwind",
              "apply",
              "variants",
              "screen"
          ]
      }],
      "comment-no-empty": true,
      "no-duplicate-at-import-rules": true,
      "no-empty-source": true,
      "no-extra-semicolons": true,
      "no-invalid-double-slash-comments": true,
      "color-named": "always-where-possible",
      "shorthand-property-no-redundant-values": true,
      "declaration-block-no-redundant-longhand-properties": [true, {
          "ignoreShorthands": ["/flex-flow/"]
      }],
      "declaration-block-single-line-max-declarations": 1,
      "selector-max-empty-lines": 0,
      "color-hex-case": "upper",
      "font-family-name-quotes": "always-unless-keyword",
      "function-comma-space-after": "always",
      "function-max-empty-lines": 0,
      "function-whitespace-after": "always",
      "number-no-trailing-zeros": true,
      "string-quotes": "single",
      "length-zero-no-unit": true,
      "unit-case": "lower",
      "value-keyword-case": ["lower", {
          "ignoreKeywords": ["IranSans"],
          "ignoreProperties": ["font-family", "filter"]
      }],
      "value-list-comma-space-after": "always-single-line",
      "property-case": "lower",
      "declaration-bang-space-after": "never",
      "declaration-bang-space-before": "always",
      "declaration-empty-line-before": "never",
      "declaration-block-semicolon-newline-after": "always-multi-line",
      "declaration-block-semicolon-space-after": "always-single-line",
      "declaration-block-trailing-semicolon": "always",
      "block-closing-brace-empty-line-before": "never",
      "block-closing-brace-newline-after": ["always", {
          "ignoreAtRules": ["if", "else"]
      }],
      "block-closing-brace-newline-before": "always-multi-line",
      "block-closing-brace-space-before": "always-single-line",
      "block-opening-brace-space-after": "always-single-line",
      "selector-attribute-brackets-space-inside": "never",
      "selector-attribute-operator-space-after": "always",
      "selector-attribute-operator-space-before": "always",
      "selector-attribute-quotes": "always",
      "selector-combinator-space-after": "always",
      "selector-combinator-space-before": "always",
      "selector-descendant-combinator-no-non-space": true,
      "selector-pseudo-class-case": "lower",
      "selector-pseudo-class-parentheses-space-inside": "never",
      "selector-pseudo-element-case": "lower",
      "selector-pseudo-element-colon-notation": "double",
      "selector-type-case": "lower",
      "selector-list-comma-space-after": "always-single-line",
      "selector-list-comma-space-before": "never",
      "media-feature-colon-space-after": "always",
      "media-feature-colon-space-before": "never",
      "media-feature-name-case": "lower",
      "media-feature-parentheses-space-inside": "never",
      "media-feature-range-operator-space-after": "always",
      "media-feature-range-operator-space-before": "always",
      "media-query-list-comma-newline-after": "never-multi-line",
      "at-rule-name-case": "lower",
      "at-rule-name-space-after": "always",
      "at-rule-semicolon-newline-after": "always",
      "comment-whitespace-inside": "always",
      "indentation": 4,
      "no-eol-whitespace": true,
      "no-missing-end-of-source-newline": true,
      "no-empty-first-line": true,
      "comment-empty-line-before": "always",
      "number-leading-zero": "always"
  }
}
