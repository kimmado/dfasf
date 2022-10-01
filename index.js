const dotenv = require("dotenv");
dotenv.config();

const { Client, Collection } = require("discord.js");
const client = (module.exports = new Client({ intents: [131071] }));
client.login(process.env.TOKEN);

client.once("ready", () => {
  console.log(`${client.user.tag} 로그인`);
});

client.on("messageCreate", (message) => {
    if (message.content == "안녕") {
      message.reply({ content: `**반갑습니다!**` });
    }
  if (message.content == "마도는 귀엽다") {
      message.reply({ content: `인정` });
    }
if (message.content == "마도야") {
message.reply({ content: `**저는 마도가 아니라 마도봇입니다 !**` });
}
if (message.content == "마도야 은찬") {
message.reply({ content: `**지말만하는 좆병신**` });
}
if (message.content == "시발") {
message.reply({ content: `**욕하지마 죽여버린다**` });
}
if (message.content == "마도야 조나영") {
message.reply({ content: `**조나영 좆병신(일한,은찬이시킴)**` });
}
if (message.content == "마도야 변일한") {
message.reply({ content: `**슈퍼아이돌**` });
}
if (message.content == "마도야 마도봇") {
message.reply({ content: `**슈퍼킹왕짱**` });
}
if (message.content == "마도야 마도") {
message.reply({ content: `**저를 탄생시켜주신분 그리고 귀여운분 **` });
}
if (message.content == "마도야 오레오") {
message.reply({ content: `**마도 따까리 **` });
}
if (message.content == "마도야 한니") {
message.reply({ content: `**08 최고~**` });
}
if (message.content == "마도야 앵무") {
message.reply({ content: `**애미 뒤진년**` });
}
if (message.content == "마도야 마두기") {
message.reply({ content: `**너무귀여워**` });
}
if (message.content == "마도야 롤할래") {
message.reply({ content: `**그래~**` });
}
if (message.content == "마도야 뿌잉뿌잉") {
message.reply({ content: `**뭐하시는거죠?!!?!?**` });
}
if (message.content == "마도야 치킨") {
message.reply({ content: `**치킨 ! 맛있죠 !**` });
}
if (message.content == "마도야 뭐해") {
message.reply({ content: `**저는 지금 자고있어요**` });
}
if (message.content == "마도야 한서연") {
message.reply({ content: `**뭐만해도 차단하는새끼**` });
}
if (message.content == "마도야 에디") {
message.reply({ content: `**바퀴벌레 무서워하는사람**` });
}})