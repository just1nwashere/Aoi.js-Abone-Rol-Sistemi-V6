//Modüller                                                                                                                                                                                                          
const { AoiClient, LoadCommands, AoiInviteSystem } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

//Main.js
const bot = new AoiClient({
    token: process.env['token'],
    prefix: "a!",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans"],
    events: ["onMessage", "onInteractionCreate", "onMessageDelete", "onJoin", "onLeave", "onBanAdd", "onBanRemove"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
            }
        },
    fetchInvites: {
    cacheInviters: true,
    enabled: true,
    }
});
//SoundCloud & Youtube
const voice = new AoiVoice(bot, {
    searchOptions: {
        youtubeClient: "",
        youtubegl: "TR",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
// Memory & Disk
voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voice.bindExecutor(bot.functionManager.interpreter);

//Komutlar Dosyası
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Abone-Rol-Sistemi/Komutlar/");

//Botun Durumu (Status)
bot.status({
    text: "$guildCount Sunucu $allMembersCount Kullanıcı", // Buraya Dokunmayınız, İsterseniz Dokunursunuz Ama Bilmiyorsanız Dokunmanızı Tavsiye Etmeyiz.
    type: "PLAYİNG",//Burayada Dokunmayın, İsterseniz Dokunursunuz Ama Bilmiyorsanız Dokunmanızı Tavsiye Etmeyiz.
    time: 1 //Durum Değişme Hızıdır, İsterseniz Dokunursunuz Ama Bilmiyorsanız Dokunmanızı Tavsiye Etmeyiz.
});
bot.status({
    text: "/yardım & a!yardım",
    type: "PLAYİNG",
    time: 1
});

//değişkenler
bot.variables({
    aboneyetkilirol: "$mentionedRoles[1]",
    abonelog: "$mentionedChannels[1]",
    abonerol: "$mentionedRoles[1]"
});

//Not: Komutlar Dosyasının, Slash Bölümündeki Komut Çalışmamaktadır.