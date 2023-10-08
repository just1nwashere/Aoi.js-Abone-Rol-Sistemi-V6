module.exports = ({
          name: "abone-log-ayarla",
          code: `
          <@$authorID> Abone Log'u <#$getGuildVar[abonelog]> Olarak Ayarlandı!
          $setGuildVar[abonelog;$mentionedChannels[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **Administrator** Kullanabilir.]
          $onlyIf[$Message!=;a!abone-log-ayarla #abone-log-kanalı]
          $onlyIf[$getGuildVar[aboneyetkilirol]!=;Abone Yetkili'sini Ayarlamadın!]
          `
});