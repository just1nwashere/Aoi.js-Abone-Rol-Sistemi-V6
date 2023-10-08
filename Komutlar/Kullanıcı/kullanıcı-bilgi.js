module.exports = ({
          name: "kullanıcı-bilgi",
          code: `
          $title[$username[$mentioned[1]] Kullanıcı Bilgileri]
          $description[
          Kullanıcı Adı: $username[$mentioned[1]]

          Tag: $userTag[$mentioned[1]]

          Hesap Açılış: $creationDate[$mentioned[1]]

          Rozetleri: $userBadges[$mentioned[1]]
          ]
          $footer[Sorgulayan: $username[$authorID]]
          $color[2b2d31]
          $image[https://share.creavite.co/bRd5OUDNAu4J9RJd.gif]`
});