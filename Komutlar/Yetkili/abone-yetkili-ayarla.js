module.exports = ({
          name: "abone-yetkili-ayarla",
          code: `
          <@$authorID> Abone Yetkili Rolü <@&$getGuildVar[aboneyetkilirol]> Olarak Ayarlandı!
          $setGuildVar[aboneyetkilirol;$mentionedRoles[1]]
          $onlyPerms[administrator;Bu Komutu Sadece **Administrator** Kullanabilir.]
          $onlyIf[$Message!=;a!abone-yetkili-ayarla @yetkili-rolü]
`
});