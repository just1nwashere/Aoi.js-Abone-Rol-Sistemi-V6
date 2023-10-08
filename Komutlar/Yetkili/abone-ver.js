module.exports = ({
          name: "abone-ver",
          code: `
          <@$mentioned[1]> Adlı Kişiye Abone Verildi!
          $channelSendMessage[$getGuildVar[abonelog];<@$mentioned[1]> {newEmbed:{description:$username[$mentioned[1]] **Adlı Kullanıcıya Abone Verildi!**}{color:2b2d31}}]
          $giveRole[$guildID;$mentioned[1];$findRole[$getGuildVar[abonerol]]]
          $onlyPerms[administrator;Bu Komutu Sadece **Administrator** Kullanabilir.]
          $onlyIf[$Message!=;a!abone-ver @kullanıcı]
          `
});