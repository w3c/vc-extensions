![W3C Logo](https://www.w3.org/Icons/w3c_home)

[![Echidna Auto-publish](https://github.com/w3c/vc-specs-dir/actions/workflows/auto-publish.yml/badge.svg)](https://github.com/w3c/vc-specs-dir/actions/workflows/auto-publish.yml)

# Verifiable Credential Extensions

This repository contains a list created by the
[W3C Verifiable Credentials Working Group](https://www.w3.org/groups/wg/vc)
(VC WG) for the purpose of discovering specifications known to exist in the
Verifiable Credentials Ecosystem.

An Editor's Draft of this repository is available at
https://w3c.github.io/vc-extensions/.

## Adding New Entries to the List

In order to add a new specification to this list, you must add a JSON file
to the [./specifications](./specifications) directory and
[open a pull request](https://github.com/w3c/vc-extensions/pulls)
to add the file to this repository.

Here is an [example specification entry](https://w3c.github.io/vc-extensions/specifications/example.json):

```jsonc
{
  // These fields are required
  "name": "Example VC",
  "summary": "Used to demonstrate examples for Verifiable Credentials.",
  "specification": "https://example.github.io/example-spec/",
  // categories include: vc, credentialStatus, credentialSchema,
  //                     refreshService, termsOfUse, evidence, and proof
  "category": "vc",
  "maintainerEmail": "maintainer@community.example",
  // These fields are optional
  "maintainerName": "Example Community Group",
  "maintainerWebsite": "https://example.github.io/",
  // RDF vocabularies in yml2vocab format
  "vocabulary": ["https://example.github.io/vocabularies/example.yml"]
}
```

Your Pull Request will be automatically validated, please ensure
that all of the automated tests pass (no errors reported) or
your submission will not be reviewed. Common reasons for failed
validation includes invalidly formatted JSON files and missing
mandatory fields. There will be a checklist that you are expected
to complete and attest to its accuracy. Once you submit your request,
your pull request will be reviewed by the directory maintainers. Changes
regarding the required criteria may be requested. If there are no
objections or changes requested, your specification will be
added after a minimum of 7 days and a maximum of 30 days.

## Adding Anything Else to this List

Use the standard fork, branch, and pull request workflow to propose changes to
the directory. Please make branch names informative—by including the issue or
bug number for example.

Editorial changes that improve the readability of the directory or correct
spelling or grammatical mistakes are welcome.

Non-editorial changes MUST go through a review and approval process that is
[detailed in the directory](https://w3c.github.io/vc-extensions/#the-management-process).

Please read [CONTRIBUTING.md](CONTRIBUTING.md), about licensing contributions.

## Code of Conduct

W3C functions under a [code of conduct](https://www.w3.org/Consortium/cepc/).

## VC Working Group Repositories

- [W3C VC Working Group](https://www.w3.org/groups/wg/vc)
- [W3C VC Use Cases](https://github.com/w3c/vc-use-cases)
- [W3C VC Data Model](https://github.com/w3c/vc-data-model)
