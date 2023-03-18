module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        '@typescript-eslint/no-var-requires': 0,
        "lines-around-comment": [
            "warn",
            {
              "beforeBlockComment": true,
              "afterBlockComment": true,
              "beforeLineComment": true,
              "afterLineComment": true,
              "allowBlockStart": true,
              "allowBlockEnd": true,
              "allowObjectStart": true,
              "allowObjectEnd": true,
              "allowArrayStart": true,
              "allowArrayEnd": true
            }
          ],
          "no-console":1,
          "no-var":1,
          "no-multiple-empty-lines":[
            "error",{
                "max":1
            }
          ],
    },

}
