{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 AppleColorEmoji;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
 
\f0\fs24 \cf0 \
let Discord = require("discord.js")\
let client = new Discord.Client()\
\
client.on("ready", () => \{\
  client.user.setPresence(\{ activity: \{ name: "Ping Pong" \}, status: "idle" \})\
\})\
\
client.on("message", message => \{\
  if(message.content === "Who are you?") \{\
    let embed = new Discord.MessageEmbed()\
    .setTitle("**I AM THE PONG MASTER**")\
    .setDescription("You have no chance of beating me")\
    .setColor("PURPLE")\
    .setFooter("~ PM");\
    message.channel.send(embed);\
  \}\
  if(message.content === "ping") \{\
    message.channel.send("Pong 
\f1 \uc0\u55356 \u57299 
\f0 ")\
  \}\
  else if(message.content === "pong") \{\
    message.channel.send("Ping 
\f1 \uc0\u55356 \u57299 
\f0 ")\
  \}\
\})\
\
client.login("OTAyNzM0MjYxNzg0ODA1NDA2.YXiuzA.jAi2V1HT8fWSAMla9h2DK6iLH2s")}
