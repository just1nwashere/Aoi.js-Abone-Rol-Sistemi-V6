module.exports = ({
          name: "abone-al",
          code: `
          <@$mentioned[1]> Adlı Kişiden Abone Alındı!
          $channelSendMessage[$getGuildVar[abonelog];<@$mentioned[1]> {newEmbed:{description:$username[$mentioned[1]] **Adlı Kullanıcıya Abone Verildi!**}{color:2b2d31}}]
          $removeRole[$guildID;$mentioned[1];$getGuildVar[abonerol];Sebep!]
          $onlyPerms[administrator;Bu Komutu Sadece **Administrator** Kullanabilir.]
          $onlyIf[$Message!=;a!abone-al @kullanıcı]
          `
});