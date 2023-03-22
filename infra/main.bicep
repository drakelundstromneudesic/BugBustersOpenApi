param location string = resourceGroup().location

resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: 'FrontEndAppSerivcePlan'
  location: location
  sku: {
    name: 'F1'
  }
  kind: 'linux'
}

resource appService 'Microsoft.Web/sites@2020-06-01' = {
  name: 'BugBustersFrontEnd'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
  }
}

resource backendAppServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: 'BackEndAppSerivcePlan'
  location: location
  sku: {
    name: 'F1'
  }
  kind: 'linux'
}

resource backendAppService 'Microsoft.Web/sites@2020-06-01' = {
  name: 'BugBustersBackEnd'
  location: location
  properties: {
    serverFarmId: backendAppServicePlan.id
  }
}
