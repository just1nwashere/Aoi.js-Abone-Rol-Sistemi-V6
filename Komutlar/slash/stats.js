module.exports = [{
          name: "stats",
          type: "interaction",
          prototype: "slash",
          code: `
          $interactionReply[{newEmbed:{title:$username[$clientID] İstistikleri}{description:
          - Geliştirici: <@$clientOwnerIDs>
           - CPU: $cpu[os]
            - Ram: $maxRam
             - Kütüphane: Aoi.js & Node.js
              - Aoi.js Versiyonu: V6.4.0
               - Node.js Versiyonu: $nodeVersion
                - Sunucu Sayısı: $guildCount
                 - Kullanıcı Sayısı: $allMembersCount
                  - Uptime: $uptime[Full]
                   - Bot Piyasaya Sürülme Tarihi: 17 Aralık 2022
                    - Komut Sayısı: $commandsCount

          💪🏻 **[Destek SW](https://discord.gg/X4qaqZR9)**
          🤖 **[Botu Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=1053684901020442624&permissions=569351612592&scope=bot%20applications.commands)**
          }{color:2b2d31}{image:https://share.creavite.co/bRd5OUDNAu4J9RJd.gif}}]
          $onlyIf[$message==no;Komut Kullanılamıyor]`
}];