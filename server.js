const { DefaultAzureCredential } = require("@azure/identity");
const { KeyClient } = require("@azure/keyvault-keys");

async function getKey() {
  const credential = new DefaultAzureCredential();
  const vaultUrl = "supertestkeyvault.vault.azure.net";
  const client = new KeyClient(vaultUrl, credential);

  try {
    const key = await client.getKey("testKey");
    console.log(`Your key is: ${key.key}`);
  } catch (error) {
    console.error(error);
  }
}

getKey();
