
function RegistryData({ result }) {

  let nameServers = <ul>{result.WhoisRecord.nameServers.hostNames.map(server => {
    return <li>{server}</li>
  })}</ul>
  return (
    <div className="entire-registry-info">
      <div className="registry-data">
        <h2>Registry Data</h2>
        <ul>
          <li>Domain Name: {result.WhoisRecord.registryData.domainName ? result.WhoisRecord.registryData.domainName : "no avail"}</li>
          <li>Created Date: {result.WhoisRecord.registryData.createdDate ? new Date(result.WhoisRecord.registryData.createdDate).toLocaleDateString('en-US') : "No info avail"}</li>
          <li>Expire Date: {result.WhoisRecord.registryData.expiresDate ? new Date(result.WhoisRecord.registryData.expiresDate).toLocaleDateString("en-US") : "no avail"}</li>
          <li>Updated Date: {result.WhoisRecord.registryData.updatedDate ? new Date(result.WhoisRecord.registryData.updatedDate).toLocaleDateString("en-US") : "no avail"}</li>
          <li>Country: {result.WhoisRecord.registryData.country ? result.WhoisRecord.registryData.country : "no avail"}</li>
          {/* <li>Country: {result.WhoisRecord.registryData.country ? result.WhoisRecord.registryData.country : "no avail"}</li> */}
          {result.WhoisRecord.registryData.telephone ? <li> Telephone Number: {result.WhoisRecord.registryData.telephone}</li> : ""}
          {result.WhoisRecord.registryData.postalCode ? <li> Postal Code: {result.WhoisRecord.registryData.postalCode}</li> : ""}
        </ul>
        <div>
          <h3>Names of Host Servers</h3>
          {nameServers}
        </div>
      </div>
      <div className="registrant-data">
        <h2>Registrant Data</h2>
        <ul>
          <li>City: {result.WhoisRecord.registrant.city ? result.WhoisRecord.registrant.city : "no avail"}</li>
          <li>State: {result.WhoisRecord.registrant.state ? result.WhoisRecord.registrant.state : "no avail"}</li>
          <li>Street: {result.WhoisRecord.registrant.street1 ? result.WhoisRecord.registrant.street1 : "no avail"}</li>
          <li>Postal Code: {result.WhoisRecord.registrant.postalCode ? result.WhoisRecord.registrant.postalCode : "no avail"}</li>
          <li>Country: {result.WhoisRecord.registrant.country ? result.WhoisRecord.registrant.country: "No info avail"}</li>
          <li>Country Code: {result.WhoisRecord.registrant.countryCode ? result.WhoisRecord.registrant.countryCode : "No info avail"}</li>
          <li> Email: {result.WhoisRecord.registrant.email ? result.WhoisRecord.registrant.email : "No info avail"}</li>
          <li> Name: {result.WhoisRecord.registrant.name ? result.WhoisRecord.registrant.name : "No info avail"}</li>
          <li> Organization: {result.WhoisRecord.registrant.organization ? result.WhoisRecord.registrant.organization : "No info avail"}</li>
          </ul>

      </div>
    </div>
  )
}

// const data = {
//   city: 'la',
//   country: 'us'
// }

// Object.keys(data).map((key)=>{

  
//   const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
//   const value = data[key]
//   return <li>{title}: {value}</li>
// })

export default RegistryData