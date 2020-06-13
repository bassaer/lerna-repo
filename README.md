# lerna-repo

```
❯ lerna bootstrap
lerna notice cli v3.22.1
lerna info Bootstrapping 3 packages
lerna info Symlinking packages and binaries
lerna success Bootstrapped 3 packages
```

```
❯ lerna run dev --scope lerna-repo-first
lerna notice cli v3.22.1
lerna notice filter including "lerna-repo-first"
lerna info filter [ 'lerna-repo-first' ]
lerna info Executing command in 1 package: "npm run dev"
lerna info run Ran npm script 'dev' in 'lerna-repo-first' in 0.3s:

> lerna-repo-first@0.0.0 dev /Users/nakayama/lerna-repo/packages/lerna-repo-first
> node ./lib/lerna-repo-first.js

this is the first repo
this is the second repo
this is the thrid repo
undefined
lerna success run Ran npm script 'dev' in 1 package in 0.3s:
lerna success - lerna-repo-first
```
