const Discord = require("discord.js");
const client = new Discord.Client();

function presence(){
  client.user.setPresence({
    status: "online",
    game: {
      name: (`|>Help En ${client.guilds.size} servidores`),
      type: "PLAYING"
    }
  });
}

client.on("ready", () => {
    console.log("BOT litening");
    presence();
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("pong")) {
     message.channel.send("ping!");
   }
 
});
client.on("message", (message) => {
   if(message.content.startsWith("loadkey")) {
     message.channel.send("key loading...");
   }
 
});

 client.on("message", (message) => {
    if(message.content.startsWith("!suport")) {
		message.channel.send("@検証済み#3465 help");
    }
  
  });
  
  client.on("message", (message) => {
   if(message.content.startsWith("pong")) {
     message.channel.send("ping!");
   }
});

  client.on("message", (message) => {
    if(message.content.startsWith("Ping")) {
      message.channel.send("pong!");
    }
  
  });
  client.on("message", (message) => {
    if(message.content.startsWith("!keys")) {
      message.channel.send("want any keys go to this link link not up at the moment");
    }
  
});

  client.on("message", (message) => {
    if(message.content.startsWith("!bots")) {
      message.channel.send("custom made bots :b");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!YT")) {
      message.channel.send("https://www.youtube.com/channel/UCIaZd29MggR6wnVo0mNd7Dg");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!scripts")) {
      message.channel.send("not up at the moment");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!download")) {
      message.channel.send("#website");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!wrd")) {
      message.channel.send("virus/malware dont download from https://wearedevs.net/home");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!KRNL")) {
      message.channel.send("https://krnl.ca/");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!fun")) {
      message.channel.send("https://cookie-clicker.co");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!learn")) {
      message.channel.send("video out soon");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!electron")) {
      message.channel.send("don't know if virus ||https://ryos.best/#download||");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!EOwner")) {
      message.channel.send("@検証済み#3465 test if virus https://ryos.best/#download");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!tgn")) {
      message.channel.send("not a virus i know of but still can be a virus https://tgnscripts.xyz/2021/08/14/tgn-exploit-x-v4-4-0-the-best-free-roblox-exploit-level-7/");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!script-ware")) {
      message.channel.send("https://script-ware.com");
    }
  
  });
  client.on("message", (message) => {
    if(message.content.startsWith("!synapse")) {
      message.channel.send("https://x.synapse.to");
    }
  
});

  client.on("message", (message) => {
    if(message.content.startsWith("!tools")) {
      message.channel.send("maybe virus idk tho ||https://direct-link.net/201604/RobloxTools||");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!virus")) {
      message.channel.send("this will be so you can test if your pc has a virus");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!mediafire")) {
      message.channel.send("coming soon");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!exploits")) {
	message.author.sendMessage("don't know if any of these are viruses")
      message.author.sendMessage("`Electron: https://ryos.best/`, `Zeus: https://omgexploits.com/`, `Tgn: https://tgnscripts.xyz/2021/08/14/tgn-exploit-x-v4-4-0-the-best-free-roblox-exploit-level-7/`, `TGX https://tgxgang.xyz/`, `Skisploit https://wearedevs.net/d/Skisploit`, `Oxygen U https://oxygenu.xyz/`, `JJSploit https://wearedevs.net/d/JJSploit`, `Fluxus: https://fluxteam.xyz/`, `Kiwi X: https://www.kiwiexploits.com/kiwi-x-download.html`, `Dansploit: https://wearedevs.net/d/Dansploit`, `Coco Z: https://wearedevs.net/d/Coco%20Z`, `Nihon: https://wearedevs.net/d/nihon`, `Comet: https://linkvertise.com/342076/comet?o=sharing`, `Panda: https://matshortener.xyz/panda-exploit/`, `Magnius: https://filedm.com/vdPpj`, `Yoink: Executor https://immortal-donkey.weebly.com/free-script-executor.html`, `Dove: (No tiene link Actualmente)`, `Proxo https://proxoexploits.com/`, `ScreamSploit: https://cheat.gg/cheat/5fc7a947da30f/ScreamSploit`, `Spero https://natevanghacks.com/hacks/spero.php`, `Orthodox: https://robloxexploitz.com/orthodox/`, El mejor: krnl: https://krnl.ca/");
    }
  
  });
  
  client.on("message", (message) => {
    if(message.content.startsWith("!DaggerSploit")) {
      message.channel.send("pretty sure a virus ||https://prohacks.net/daggersploit/|| so don't download we will test sooner or later just do !DSowner it will send a message to the owner :) and we will try looking in to it :)");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!drugs")) {
      message.channel.send("don't do drugs"{});
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("!help")) {
      message.channel.send("'commands !help to get commands or !commands !DSowner !DaggerSploit !meth !SocailMedia !drugs !exploits");
    }
  
  });

client.on('message', message => {
    if (message.content === 'die') {
        message.channel.send('I can never die. but you can');
    }
});
 
 client.login("Token");
