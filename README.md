# CryptoKitties API client
A unofficial API client in NodeJS for [CryptoKitties](https://cryptokitties.co/)
## Usage
When module is imported, returns a CryptokittiesClient, all the others are functions of that object.
### CryptoKittiesClient (opts)
Takes as a argument a object with the options, whith a structure of:
```
{  
  url: String, // The URL of the API, defaults to https://api.cryptokitties.co/
  credentials: {
    jwt: String // The JWT for accessing some APIs
  }
}
```
### listAuctions (type = "sale", status="open", limit, offset=0)
Makes a list of the ongoing auctions.
### getKitten (id)
Gets information about a specific cat.
### getMyProfile ()
Gets your proffile.
### getUserKitties (address, limit, offset=0)
Gets the kitties of a ethereum address.
