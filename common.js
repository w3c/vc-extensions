/* Build specification tables using JSON data */
async function buildSpecificationTables(config) {
  const {document} = window;
  const response = await fetch('specifications/index.json');
  if(response.status !== 200) {
    throw new Error('Failed retrieve specifications index.json file.');
  }
  const allSpecs = await response.json();

  // summarize each API endpoint
  for(const spec of allSpecs) {
    const tableRow = document.createElement('tr');
    const {name, summary, specification, category, maintainerEmail,
      maintainerName, maintainerWebsite, vocabulary} = spec;
    let maintainerInfo = maintainerName;
    if(maintainerEmail) {
      maintainerInfo += ` (<a href="mailto:${maintainerEmail}">email</a>)`;
    }
    if(maintainerWebsite) {
      maintainerInfo += ` (<a href="${maintainerWebsite}">website</a>)`;
    }
    tableRow.innerHTML =
      `<td style="vertical-align:top;"><a href="${specification}">${name}</a></td>` +
      `<td>${summary}<br/>Maintainer: ${maintainerInfo}</td>`;

    const tableBody = document.getElementById(category + '-table');
    tableBody.appendChild(tableRow);
  }
}

window.buildSpecificationTables = buildSpecificationTables;
