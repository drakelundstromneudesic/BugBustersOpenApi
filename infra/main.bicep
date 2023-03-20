param location string = resourceGroup().location


resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: 'hackAppPlan'
  location: location
  sku: {
    name: 'F1'
  }
  kind: 'linux'
}

resource appService 'Microsoft.Web/sites@2020-06-01' = {
  name: 'hackAppFrontend-eastus-A01' 
  location: location
  properties: {
    serverFarmId: appServicePlan.id
  }
}

resource backendAppServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: 'hackAppBackendPlan'
  location: location
  sku: {
    name: 'F1'
  }
  kind: 'linux'
}

resource backendAppService 'Microsoft.Web/sites@2020-06-01' = {
  name: 'hackAppBackend-eastus-A01'
  location: location
  properties: {
    serverFarmId: backendAppServicePlan.id
  }
}
