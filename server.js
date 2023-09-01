const express = require("express");
const azureStorage = require("azure-storage");

const app = express();
const port = 3000;

// Initialize blob service with your storage account and key
const blobService = azureStorage.createBlobService(
  "devstorageapptestacct",
  "z8P2uHspJD5RwBmAclleQ0x7x8sgmBojAxf2qNRGqb5VkBFHN/9W3nUtr+FsbkPFZfpSE9QNhUAP+ASt+ISBCQ=="
);

app.get("/", async (req, res) => {
  // Reference to the container and blob
  const containerName = "testcontainer";
  const blobName = "supertest.txt";

  blobService.getBlobToText(
    containerName,
    blobName,
    function (error, blobContent, blob) {
      if (!error) {
        res.send(`Blob content: ${blobContent}`);
      } else {
        res.send(`An error occurred: ${error}`);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
