## Tooling

This directory contains command line tooling and support scripts for the
Verifiable Credential Specification Directory.

### Setup Tooling

```
npm i
```

### Validate

```
npm run validate
```

### Generate Directory Index

This command is run in CI, the index file produced is git ignored.

This file is used by the Respec build plugin to build the directory
in client side javascript at page load time.

```
npm run generate-index
```
