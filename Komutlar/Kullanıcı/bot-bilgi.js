module.exports = ({
          name: "bot-bilgi",
          code: `
          $title[$username[$clientID] Bot Bilgileri]
          $description[
          - Geliştirici: <@$clientOwnerIDs>
          - CPU: $cpu[os]
          - Ram: $maxRam
          - Kütüphane: Aoi.js & Node.js
          - Aoi.js Versiyonu: V6.2.6
          - Node.js Versiyonu: $nodeVersion
          - Sunucu Sayısı: $guildCount
          - Kullanıcı Sayısı: $allMembersCount
          - uptime: $uptime[full]
          - Bot Piyasaya Sürülme Tarihi: 17 Aralık 2022
          - Komut Sayısı: $commandsCount]
          $color[2b2d31]
          $image[https://share.creavite.co/bRd5OUDNAu4J9RJd.gif]`
});