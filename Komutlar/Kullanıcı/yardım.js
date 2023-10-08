module.exports = [{
          name: "yardım",
          code: `
          $title[$username[$clientID] Yardım Menüsü]
          $description[
          **Botumuz, Ne İşe Yarar?**
          \`Youtube\`'dan Gelen SS'le, \`Kullanıcı\`'ya Abone Verebileceğiniz Bir \`Bot\`'tur.

          **Botumuz Nasıl Kullanılır?**
          Alttaki \`Buton\`'lara Basarak \`Komut\`'lara Ulaşabilirsiniz!

          **NOT**
          \`Her\` \`Hangi\` **Bi** \`Konu\`'da \`Yardım\`'a İhtiyaç Duyuyorsanız, \`Direk\`'t Destek \`Sunucu\`muza Gelebilirsiniz!

          **DİPNOT**
          Botun Rolünü En Üste Çekin! Yoksa \`Çalışmaz\`!

          💪🏻 **[Destek SW](https://discord.gg/X4qaqZR9)**
          🤖 **[Botu Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=1053684901020442624&permissions=569351612592&scope=bot%20applications.commands)**
          💖 **[Oy Ver!](https://top.gg/bot/1053684901020442624/vote)**
          ]
          $color[2b2d31]
          $image[https://share.creavite.co/bRd5OUDNAu4J9RJd.gif]
          $addButton[1;Yetkili Komutları;secondary;mod;false;<:moderator:1148414875064864788>]
          $addButton[1;Kullanıcı Komutları;secondary;user;false;<:user:1148414871629729853>]
          $addButton[1;Ana Menü;secondary;main;false;<:main:1148414872728633467>]
          `
},{
          name: "main",
          type: "interaction",
          prototype: "button",
          code: `
          $interactionReply[;{newEmbed:{title:Ana Menü}{description:
          **Botumuz, Ne İşe Yarar?**
          \`Youtube\`'dan Gelen SS'le, \`Kullanıcı\`'ya Abone Verebileceğiniz Bir \`Bot\`'tur.
          
          **Botumuz Nasıl Kullanılır?**
          Alttaki \`Buton\`'lara Basarak \`Komut\`'lara Ulaşabilirsiniz!
          
          **NOT**
          \`Her\` \`Hangi\` **Bi** \`Konu\`'da \`Yardım\`'a İhtiyaç Duyuyorsanız, \`Direk\`'t Destek \`Sunucu\`muza Gelebilirsiniz!
          
          💪🏻 **[Destek SW](https://discord.gg/X4qaqZR9)**
          🤖 **[Botu Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=1053684901020442624&permissions=569351612592&scope=bot%20applications.commands)**
          💖 **[Oy Ver!](https://top.gg/bot/1053684901020442624/vote)**
          }{color:2b2d31}{image:https://share.creavite.co/bRd5OUDNAu4J9RJd.gif}};;;everyone;true]`
},{
          name: "user",
          type: "interaction",
          prototype: "button",
          code: `
          $interactionReply[;{newEmbed:{title:Kullanıcı Menü}{description:
          **a!bot-bilgi** - Botun Bilgilerini Verir!
          
          **a!davet** - Bot Size Davet Sayfasını Atar!
          
          **a!kullanıcı-bilgi** - Her Hangi Veya Sizin Bilgilerinizi Verir!
          
          **a!ping** - Botun Pingini Görürsünüz!
          
          **a!yardım** - Botun Yardım Menüsünü Görebilirsiniz!}{color:2b2d31}{image:https://share.creavite.co/bRd5OUDNAu4J9RJd.gif}};;;everyone;true]`
},{
          name: "mod",
          type: "interaction",
          prototype: "button",
          code: `
          $interactionReply[;{newEmbed:{title:Yetkili Menü}{description:
          **a!abone-log-ayarla** - Abone Log Ayarlarsınız!

          **a!abone-rol-ayarla** - Abone Rol Ayarlarsınız!

          **a!abone-yetkili-ayarla** - Abone Yetkili Ayarlarsınız!

          **a!abone-ver** - Kullanıcıya Abone Rolü Verirsiniz!

          **a!abone-al** - Kullanıcı'dan Abone Rolünü Geri Alırsınız!}{color:2b2d31}{image:https://share.creavite.co/bRd5OUDNAu4J9RJd.gif}};;;everyone;true]`
}];