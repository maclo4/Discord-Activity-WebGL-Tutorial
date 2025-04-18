import { insertCoin, getState, setState, onPlayerJoin, getDiscordClient } from 'playroomkit'
import * as playroomkit from 'playroomkit';
//next thing try the other import method
window.StartDiscordPurchase = async function () {
  try {
    console.log("$$$$ starting!!")
    await playroomkit.insertCoin({
      gameId: "GcXyi8oDay3SnbSJvtHM",
      discord: true
    });
    console.log("$$$$ coin inserted")
    playroomkit.setState("topScore", 42);

    playroomkit.onPlayerJoin((playerState) => {
      console.log(playerState.getProfile());
    });

    const topScore = playroomkit.getState("topScore");
    console.log("$$$$ Top Score: " + topScore);

    const discordClient = playroomkit.getDiscordClient();
    
    console.log("$$$$ Purchase started!");
    await discordClient.commands.startPurchase({ sku_id: "1358991165872930949" });
    console.log("$$$$ Purchase ended!");
  } catch (e) {
    console.error("$$$$ Error in Discord purchase flow:", e);
  }
};


// (async () => {
//     // Show popup and ask user permissions for their discord information
//     await insertCoin({
//     gameId: "GcXyi8oDay3SnbSJvtHM",
//     discord: true
//     });
    
//     // Print current player's server name and avatar url
//     //console.log(me().getProfile())
    
//     // Players of this activity session are now in same room now! Set shared state
//     setState("topScore", 42)
    
//     // Called for each player joining the same activity session
//     onPlayerJoin((playerState)=>{
//     // Print player's Discord name and avatar url
//     console.log(playerState.getProfile()) // {name: "username", photo: "https://cdn.discord...."}
//     })
    
//     // On some other player
//     const topScore = getState("topScore")
//     console.log("$$$$ top score: " + topScore)

//     console.log("$$$$ pre client!!!!: ");
    
//     const discordClient = getDiscordClient();
//     console.log("$$$$ post client!!!!: ");
//     await discordClient.commands.startPurchase({sku_id: "1358991165872930949"});

//     console.log("$$$$ purchase!!!!: ")
// })();

// import { insertCoin, getState, setState, onPlayerJoin, getDiscordClient } from 'playroomkit'
// import { DiscordSDK } from "@discord/embedded-app-sdk";

// async function startPurchase() {
    
//     console.log("$$$$ pre getDiscordClient");
//     let discordClient = getDiscordClient();
    
//     console.log("$$$$ pre purchase");
//     await discordClient.commands.startPurchase({sku_id: "1358991165872930949"});
    
//     console.log("$$$$ post purchase");
// }

// (async () => {
//     console.log("$$$$ YAY yayayayayayayayayayayayayyaysdfojhagsldkjfhasldkjfhl;akj")
//     await insertCoin({
//       gameId: "1295516437112426586",
//       discord: true
//     });
//     console.log("$$$$ coin inserted");
  
//     setState("topScore", 42);
  
//     onPlayerJoin((playerState) => {
//       console.log(playerState.getProfile());
//     });
  
//     const topScore = getState("topScore");
  
//     console.log("$$$$ top score: " + topScore);
//     await startPurchase();
//   })();
