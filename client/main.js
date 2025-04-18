import { insertCoin, getState, setState, onPlayerJoin, getDiscordClient } from 'playroomkit'
import { DiscordSDK } from "@discord/embedded-app-sdk";

async function startPurchase() {
    
    console.log("$$$$ pre getDiscordClient");
    let discordClient = getDiscordClient();
    
    console.log("$$$$ pre purchase");
    await discordClient.commands.startPurchase({sku_id: "1358991165872930949"});
    
    console.log("$$$$ post purchase");
}

(async () => {
    console.log("$$$$ YAY yayayayayayayayayayayayayyaysdfojhagsldkjfhasldkjfhl;akj")
    await insertCoin({
      gameId: "1295516437112426586",
      discord: true
    });
    console.log("$$$$ coin inserted");
  
    setState("topScore", 42);
  
    onPlayerJoin((playerState) => {
      console.log(playerState.getProfile());
    });
  
    const topScore = getState("topScore");
  
    console.log("$$$$ top score: " + topScore);
    await startPurchase();
  })();