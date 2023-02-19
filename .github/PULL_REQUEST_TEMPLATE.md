## Instructions for Pull Requests

Please read these instructions thoroughly in order to ensure that your pull request is processed in a timely manner. This document contains detailed instructions for adding your specification to the directory. If your pull request concerns some other change to the repository, you may delete all of the text in this text box and write up a more relevant description.

Once you submit your request, your pull request will be reviewed by the directory maintainers. Changes regarding the required criteria may be requested. If there are no objections or changes requested, your entry will be merged after a minimum of 7 days and a maximum of 30 days.

## Adding Your Specification

In order to add your specification to this directory, you must add a JSON file to the [./specifications](./specifications) directory.

Here is an example specification entry:

```jsonc
{
  // These fields are required
  "name": "Example VC",
  "summary": "Used to demonstrate examples for Verifiable Credentials.",
  "specification": "https://example.github.io/example-spec/",
  // categories include: vc, credentialStatus, credentialSchema,
  //                     refreshService, termsOfUse, evidence, and proof
  "category": "vc",
  "maintainerEmail": "maintainer@org.example",
  // These fields are optional
  "maintainerName": "Example Community Group",
  "maintainerWebsite": "https://example.github.io/",
  // RDF vocabularies in yml2vocab format
  "vocabulary": ["https://example.github.io/vocabularies/example.yml"]
}
```

Your Pull Request will be automatically validated, please ensure that all of the automated tests pass (no errors reported) or your submission will not be reviewed. Common reasons for failed validation includes invalidly formatted JSON files and missing mandatory fields.
