{
   "name": "template",
   "permissions": "NONE",
   "restriction": "1",
   "actions": [
      {
         "member": "1",
         "varName": "",
         "dataName": "cooldown_ekek",
         "defaultVal": "0",
         "storage": "1",
         "varName2": "membercooldown",
         "name": "Store Member Data"
      },
      {
         "storage": "1",
         "varName": "membercooldown",
         "comparison": "4",
         "value": "Date.now()",
         "iftrue": "0",
         "iftrueVal": "",
         "iffalse": "2",
         "iffalseVal": "7",
         "name": "Check Variable"
      },
      {
         "FirstNumber": "${tempVars(\"membercooldown\")}",
         "info": "1",
         "SecondNumber": "${Date.now()}",
         "storage": "1",
         "varName": "subtract",
         "name": "Basic Math Operation"
      },
      {
         "time": "${Math.round(tempVars(\"subtract\") / 1000)}",
         "storage": "1",
         "varName": "remaining",
         "name": "Convert Seconds To D/H/M/S"
      },
      {
         "channel": "0",
         "varName": "",
         "message": "Remaining: ${tempVars(\"remaining\")}, try to reset your bot.\n**FluffyMallow is cute~**",
         "storage": "0",
         "varName2": "",
         "iffalse": "0",
         "iffalseVal": "",
         "name": "Send Message"
      },
      {
         "name": "End Action Sequence"
      },
      {
         "comment": "The second number is the cooldown, change it if u want but convert it to millisecond",
         "color": "#ffbfff",
         "name": "Comment"
      },
      {
         "FirstNumber": "${Date.now()}",
         "info": "0",
         "SecondNumber": "21600000",
         "storage": "1",
         "varName": "cooldown",
         "name": "Basic Math Operation"
      },
      {
         "member": "1",
         "varName": "",
         "dataName": "cooldown_ekek",
         "changeType": "0",
         "value": "tempVars(\"cooldown\")",
         "name": "Control Member Data"
      },
      {
         "channel": "0",
         "varName": "",
         "message": "FluffyMallow is cute~ ",
         "storage": "0",
         "varName2": "",
         "iffalse": "0",
         "iffalseVal": "",
         "name": "Send Message"
      }
   ]
}
