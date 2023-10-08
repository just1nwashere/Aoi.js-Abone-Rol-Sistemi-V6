module.exports = ({
          name: "abone-rol-ayarla",
          code: `
          <@$authorID> Abone Rolü <@$getGuildVar[abonerol]> Olarak Ayarlandı!
          $setGuildVar[abonerol;$mentionedRoles[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **Administrator** Kullanabilir.]
          $onlyIf[$Message!=;a!abone-rol-ayarla @abone-rolü]
          $onlyIf[$getGuildVar[abonelog]!=;Abone Log'u Ayarlamadın!]
          `
});