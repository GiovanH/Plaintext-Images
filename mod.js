function replaceContent(story, key, pat, repl){
  console.log(key, pat)
  story[key].content = story[key].content.replace(pat, repl);
  if (story[key].content != story[key].content.replace(pat, repl)) {
    console.warn("Did not match all occurances of pat in", pat, key)
  }
}

function hide(text){
  return "<span class=\"hidden\">" + text + "</span>";
}

module.exports = {
  title: "Plaintext Images",
  summary: "Renders images in plain text.",
  author: "Squornshellous Beta",
  modVersion: 1.1,

  edit(archive) {
    for (const i in replacedContent) {
      let repl_list = replacedContent[i];
      repl_list = Array.isArray(repl_list) ? repl_list : [repl_list];

      repl_list.forEach(contentReplacer => {
        replaceContent(archive.mspa.story, i, contentReplacer.pat, contentReplacer.repl);
      });
    }
    for (const i in prependContent) {
      archive.mspa.story[i].content = hide(appendContent[i]) + archive.mspa.story[i].content;
    }
    for (const i in appendContent) {
      archive.mspa.story[i].content += hide(appendContent[i]);
    }
    for (const i of arquiuspritePages) {
      arquiuspriteReplacers.forEach(contentReplacer => {
        replaceContent(archive.mspa.story, i, contentReplacer.pat, contentReplacer.repl);
      });
    }
  },

  styles: [
    {
      source: "./plaintextImages.css"
    }
  ],
};

const arquiuspritePages = ['007556', '007557', '007657', '007658', '007659', '008276', '008277', '008278', '008279', '008280', '008503', '008504', '008505', '009358', '009359', '009410', '009412', '009418', '009435', '009483', '009823', '009824', '009825', '009826', '009827']
const arquiuspriteReplacers = [{
  pat:  new RegExp('ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" />', 'g'),
  repl: 'ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> '
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_ass.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_ass">ass</span>'
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_bitch.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_bitch">bitch</span>'
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_cocksucking.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_cocksucking">cocksucking</span>'
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_damned.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_damned">damned</span>'
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fuckers.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_fuckers">fuckers</span>'
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_fucking">fucking</span>'
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_hell.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_hell">hell</span>'
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_shit">shit</span>'
}, {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shitting.gif" border="0" />', 'g'),
  repl: '<span class="text_image arquius_shitting">shitting</span>'
}]

const replacedContent = {
"002540": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/sweetcatch.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/sweetcatch.gif); width:79px; height:35px; font-size: 16px;">SWEET<br />CATCH!</span>'},
"002563": [{
  pat:  'class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wheredoingitman.gif" border="0" /></a>',
  repl: 'class="postlink forceplainlink"><span style="color: red; font-family: Comic Sans MS; font-size: 18px; font-weight: normal;">where doing it man</span></a>'
}, {
  pat:  'class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/whereMAKINGTHISHAPEN.gif" border="0" /></a>',
  repl: 'class="postlink forceplainlink"><span style="color: red; font-family: Comic Sans MS; font-size: 18px; font-weight: normal;">where MAKING THIS HAPEN</span></a>'
}],
// "002659": {
//   pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/00759_4under.gif" border="0" />',
//   repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/00759_4under.gif); width:500px; height:240px;">With love,'},
"002815": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=006.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/andtherehegoes.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=006.jpg" target="_blank" class="postlink forceplainlink"><span style="color: red; font-family: Comic Sans MS; font-size: 22px; font-weight: normal;">and there he goes<br /><br />the old man....<br />HASS the flame</span></a>'},
"003023": {
  pat:  'class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/distaction.gif" border="0" /></a>',
  repl: 'class="postlink forceplainlink"><span style="color: cyan; font-family: Comic Sans MS; font-size: 32px; font-weight: normal;">THE CAN RUSE<br />WAS A...........<br /><br /><b>DISTRACTION</b></span></a>'},
"003024": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/HAVEthecargo.gif" border="0" />',
  repl: '<span class="text_image" style="color: black;font-family: Comic Sans MS;font-size: 14px;font-weight: bold;">you HAVE<br />the cargo</span>'},
"003028": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/mail.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/mail.gif); width:300px; height:120px; font-size: 120px;">MAIL</span>'},
"003232": { // skipped
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=011.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/pricesandvaules.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=011.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/pricesandvaules.gif); width:235px; height:105px;">the selection has too many ....... PRICES and VAULES'},
"003249": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=010.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/turnways.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=010.jpg" target="_blank" class="postlink forceplainlink"><span style="color: #4efe00; font-family: Comic Sans MS; font-size: 19px; font-weight: normal;">you got to<br />FLIP it.<br /><b>TURN-WAYS</b></span></a>'},
"003404": { // skipped
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/EGG!.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/EGG!.gif); width:188px; height:122px; font-size: 84px;">EGG!</span>'},
"003702": { // skipped
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=016.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/shitletsbesanta.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=016.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/shitletsbesanta.gif); width:300px; height:150px;">shit.'},
"003727": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/comeon.gif" border="0" />',
  repl: '<span style="color: #f00;font-family: Comic Sans MS;font-size: 26px;font-weight: normal;">come <span style="color: #ba00ff; font-size: 48px;">ON</span></span>'},
"004153": {
  pat:  '<span style="color: #2ed73a">L</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/o.gif" border="0" /><span style="color: #2ed73a">rd English</span>.',
  repl: '<span style="color: #2ed73a">L</span><span class="text_image english_o">o</span><span style="color: #2ed73a">rd English</span>.'
},
"004163": { // skipped
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/shehaswhat.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/shehaswhat.gif); width:400px; height:60px; font-size: 42px;">SHE HAS WHAT?</span>'
},
"004355": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/psi.gif" border="0" />DON\'S',
  repl: "&Psi;DON'S"},
"004477": { // skipped
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/puase.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/puase.gif); width:273px; height:64px;">PUASE.. ... ,</span>'},
"004493": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/ultimatereward.gif" border="0" />',
  repl: '<span class="ultimate_reward">the ultimate reward</span>'},
"004510": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/universeblue.gif" border="0" />',
  repl: '<span class="universe_blue">universe</span> we left behind</span>'},
"004517": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/ultimatereward.gif" border="0" />',
  repl: '<span class="ultimate_reward">the ultimate reward</span>'},
"004524": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/universered.gif" border="0" />',
  repl: '<span class="universe_red">universe</span>'},
"004555": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/yeah!!!!!!!!.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/yeah!!!!!!!!.gif); width:132px; height:48px; font-size: 32px; font-family: cursive;">Yeah!!!!!!!!</span>'},
"004631": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/greensun.gif" border="0" />',
  repl: '<span class="green_sun">Green Sun</span>'},
/*"004688": {
  pat:  '<span style="color: #626262">CG: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif" border="0" /></span>',
  repl: '<span style="color: #626262">CG: <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif); width:450px; height:200px;">FRUITY RUMPUS ASSHOLE FACTORY</span></span>'},*/
// "004689": {
//   pat:  '<span style="color: #626262">CG: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif" border="0" /></span>',
//   repl: '<span style="color: #626262">CG: <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif); width:450px; height:200px;">FRUITY RUMPUS ASSHOLE FACTORY</span></span>'},
"004697": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/sweetcatchblue.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/sweetcatchblue.gif); width:79px; height:35px; font-size: 16px;">SWEET<br />CATCH!</span>'},
"004722": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/BlAsPhEmY.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/BlAsPhEmY.gif); width:523px; height:119px; font-size: 90px; line-height: 119px;">BlAsPhEmY</span>'},
"004750": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/psifef.gif" border="0" />',
  repl: '&Psi;'},
// "004751": {
//   pat:  '<span style="color: #626262">CG: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif" border="0" /></span>',
//   repl: '<span style="color: #626262">CG: <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif); width:450px; height:200px;">FRUITY RUMPUS ASSHOLE FACTORY</span></span>'},
"004941": {
  pat:  /<img src="http:\/\/www\.mspaintadventures\.com\/storyfiles\/hs2\/scraps\/greensun\.gif" border="0" \/>/g,
  repl: '<span class="green_sun">Green Sun</span>'},
"004943": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/greenmotherfuckingsun.gif" border="0" />',
  repl: '<span class="green_mother_fucking_sun">GREEN MOTHER FUCKING SUN</span>'},
"005043": { // skipped
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=016.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/andthenightbeforechristmas.jpg" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=016.jpg" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/andthenightbeforechristmas.jpg); height:151px;">and the night before christmas........'},
"005117": { // skipped
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/whatdidyoudo.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/whatdidyoudo.gif); width:400px; height:60px;">WHAT DID YOU DO?</span>'},
"005127": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/o.gif" border="0" />',
  repl: '<span class="text_image english_o">O</span>'},
"005247": { // skipped
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=023.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/areyounext.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=023.jpg" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/areyounext.gif); height:300px;">are you next?</span></a>'},
"005284": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/corpsesmooch.gif" border="0" />',
  repl: '<span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/corpsesmooch.gif); height:175px; font-size: 64px;">2x CORPSESMOOCH<br>COMBO!!!</span>'},
"005289": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/THIS.gif" border="0" />',
  repl: '<span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/THIS.gif); height:210px;">THIS</span>'},
"005290": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/IS.gif" border="0" />',
  repl: '<span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/IS.gif); height:407px;">IS</span>'},
"005291": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/STUPID.gif" border="0" />',
  repl: '<span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/STUPID.gif); height:4597px;">STUPID</span>'},
"005314": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=025.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/LIFDOFF.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=025.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/LIFDOFF.gif); width:387px; height:97px;">LIFDOFF</span></a>'},
"005528": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/greensun.gif" border="0" />',
  repl: '<span class="green_sun">Green Sun</span>'},
"005530": {
  pat:  '<span style="color: #2ed73a">L</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/o.gif" border="0" /><span style="color: #2ed73a">rd English</span><span style="color: #ffffff">',
  repl: '<span style="color: #2ed73a">L</span><span class="text_image english_o">o</span><span style="color: #2ed73a">rd English</span><span style="color: #ffffff">'},
"005609": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/TH3GR33NSUN.gif" border="0" />',
  repl: '<span class="th3_gr33n_sun">TH3 GR33N SUN</span>'},
"005627": {
  pat:  '<a href="/archive/external/midnightcrew.mp4" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/WHOSTHISDOUCHEBAG.gif" border="0" /></a>',
  repl: '<a href="/archive/external/midnightcrew.mp4" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/WHOSTHISDOUCHEBAG.gif); height:10250px;">WHO\'S THIS DOUCHE BAG</span></a>'},
"005720": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/exclamation.gif" border="0" />',
  repl: '<span class="exclamation">!</span>'},
"005958": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/psiwhite.gif" border="0" />',
  repl: '&Psi;'},
"005959": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/psiwhite.gif" border="0" />',
  repl: '&Psi;'},
"005982": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=027.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/SNAPINGWRONG.jpg" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=027.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/SNAPINGWRONG.jpg); width:543px; height:500px;">FUCK<br />No you dumb homo tool, your SNAPING WRONG</span></a>'},
"006224": {
  pat:  '<a href="/decode/morse" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/HELPHIM.gif" border="0" /></a>',
  repl: '<span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/HELPHIM.gif);height:150px;letter-spacing: -5px;font-size: 62px;">.... . .-.. .--.<br>.... .. --!!!</span>'},
"006637": {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/musicnote.png" border="0" />', 'g'),
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/musicnote.png); width:11px; height:13px;">&#9835;</span>'},
"006740": {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />', 'g'),
  repl: '<span class="text_image scorpio">&#9807;</span>'},
"007284": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/vriska_smallshout1.png" border="0" />',
  repl: '<span class="vriska" style="font-size:6px;">VRISKA: Taaaaaaaavros!</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/vriska_smallshout2.png" border="0" />',
  repl: '<span class="vriska" style="font-size:8px;">VRISKA: Taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaavros!!!!!!!!</span>'
}],
"007309": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/gamzee_tinyhonk1.png" border="0" />',
  repl: '<span class="gamzee small4">GAMZEE: honk</span>'},
"007310": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/gamzee_tinyhonk2.png" border="0" />',
  repl: '<span class="gamzee small4">GAMZEE: HONK</span>'},
"007477": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext1.png" border="0" />',
  repl: '<span class="wizard">the three serpenook scoundrells flew threw the woods on there magic flying wooden hornses, they were chasig poor russet. russet held onto the fort crowsnest flag for deer life, he was a little scared, but mostly brave, not afraid of those serpenook cowards! they caught up with him and then they knocked him down. his wand flew away out of reach "hey clove not so tought are you with out your fancy wand!" he was one of the serpenook boys and he sounded quiite brash. another one said.... "you think your so hot with all your charm and good looks, well lets do something about that pretty face, ha ,ha ha" then they started beating him up.</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext2.png" border="0" />',
  repl: '<span class="wizard">a mystrerious and alluring voice came out of no where... "go easy on him fellas, leave THIS one to me!" it was so brash and arragant, just the SOUND of him made you mad. the boys stepped a side, the leader of sperenook came forfward, russet was bruised and soar. russet opened his eyes and saw someone so handsome, he had never seen a boy so intriguing and beautiful before. he had black hair and glasses and about a hundred merit badges.........</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext3.png" border="0" />',
  repl: '<span class="wizard">the boy stuped down and gave russet his hand to take. he said "im afraid i have to take your flag from you, you see it belongs to me and fort serpenook, HOWVEVER." russet was very intregued "i will decide not to take your flag if you promise me a favor later on from now."</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext4.png" border="0" />',
  repl: '<span class="wizard">"you have to promise me that when the time cones, you will betray youre friends and help me!!!!!" he said arrogantly. russet was out raged by this! and yet he couldnt help but feel strongley drawn toward this mangnificent handsome boy. russet said defiently...</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext5.png" border="0" />',
  repl: '<span class="wizard">"HE HE HE i should have known!!! you are trutely loyal to your freinds as i expected as much. what is your name?"</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext6.png" border="0" />',
  repl: '<span class="wizard">"please to meet you russet even if you ARE the enemey. allow me to introduce myself."</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext7.png" border="0" />',
  repl: '<span class="wizard">"my name is slinus. slinus marlevort."</span>'
}],
"007478": {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttextSPORTS.png" border="0" />', 'g'),
  repl: '<span class="wizard_sports">SPORTS</span>'},
// MARK
"007616": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_1.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> JAKE!'},
"007617": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_2.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> JAAAAAAAAAAAKE!'},
"007618": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_3.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> JAKE JAKE JAKE JAKE JAKE JAKE JAKE JAKE JAKE JAKE JAKE!'
}, {
  pat:  new RegExp('<span style="color: #1f9400">', 'g'),
  repl: '<span style="color: #1f9400" class="jake">'
}],
"007619": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_4.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> HI JAKE!'
}, {
  pat:  '<span style="color: #1f9400">JAKE: Jane uh...</span>',
  repl: '<span class="jane">JANE:</span> WHEEEEEEEEEEE!'
}, {
  pat:  '<span style="color: #1f9400">JAKE: What the hell happened to you?</span>',
  repl: '<span class="jane">JANE:</span> JAKE IT\'S ME JANE HA HA!'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_5.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> HEY JAKE YOU KNOW WHAT!'
}, {
  pat:  '<span style="color: #1f9400">JAKE: What?</span>',
  repl: '<span class="jane">JANE:</span> I LOVE YOU!'
}, {
  pat:  '<span style="color: #1f9400">JAKE: Really??</span>',
  repl: '<span class="jane">JANE:</span> ISN\'T THAT GREAT???'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_6.gif" border="0" />',
  repl: '<span class="jake">JAKE: Jane uh...</span>'
}, {
  pat:  '<span style="color: #1f9400">JAKE: Jane</span>',
  repl: '<span class="jake">JAKE: What the hell happened to you?</span>'
}, {
  pat:  '<span style="color: #1f9400">JAKE: I...</span>',
  repl: '<span class="jane">JANE:</span> I ALWAYS DID LOVE YOU!'
}, {
  pat:  '<span style="color: #1f9400">JAKE: um</span>',
  repl: '<span class="jane">JANE:</span> BUT I WAS TOO AFRAID TO SAY SO!'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_7.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> BUT NOW I\'M NOT!'
}, {
  pat:  '<span style="color: #1f9400">JAKE: Jane youre frightening me!</span>',
  repl: '<span class="jane">JANE:</span> YIPPEEEEEEEEEEE!'
}],
"007620": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_8.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> WHAT! AHAHAHA!'
}, {
  pat:  '<span style="color: #1f9400">JAKE: No jane you are seriously scaring the shit out of me!</span>',
  repl: '<span class="jane">JANE:</span> THERE\'S NO NEED TO BE SCARED YOU SILLY GOOSE!'
}, {
  pat:  '<span style="color: #1f9400">JAKE: You seem unwell...</span>',
  repl: '<span class="jane">JANE:</span> BECAUSE I\'M HAPPY AND IN LOVE WITH YOU! CAN\'T YOU SEE???'
}, {
  pat:  '<span style="color: #1f9400">JAKE: Are you sure youre alright?</span>',
  repl: '<span class="jake">JAKE: No jane you are seriously scaring the shit out of me!</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_9.gif" border="0" />',
  repl: '<span class="jake">JAKE: You seem unwell...</span>'
}],
"007621": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_10.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> I FEEL SO ALIVE!'},
"007622": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjanetxt_11.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> I FEEL SO...'},
"007627": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_1b.gif" border="0" />',
  repl: '<span class="jake">JAKE:</span> WHEEEEEEEEEEE!'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: fuck no.</span>',
  repl: '<span class="jane">JANE:</span> YAAAAAAAAAAAY!'
}],
"007628": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_2.gif" border="0" />',
  repl: '<span class="jake">JAKE:</span> OH YES YOU ARE! HOP IN BUDDY!'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: fuck you, fuck my liife, fuck liiterally evverything, fuck fuck fuck.</span>',
  repl: '<span class="erisol">ERISOLSPRITE: fuck you, fuck my liife, fuck liiterally evverything, fuck fuck fuck.</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_3.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> HAHAHAHAHAHAHAHAHAHAHA!'
}],
"007630": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_4.gif" border="0" />',
  repl: '<span class="jake">JAKE:</span> ROXY!'},
"007631": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_5.gif" border="0" />',
  repl: '<span class="jake">JAKE:</span> JANE I THINK ROXY IS PLAYING HIDE AND SEEK WITH US!'},
"007632": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_6.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> JAKE I THINK I KNOW WHAT THE TROUBLE MIGHT BE!'
}, {
  pat:  '<span style="color: #fbbaff">tipsyGnostalgic [TG]</span> <span style="color: #000000">began pestering</span> <span style="color: #77003c">)(er Imperious Condescension</span>',
  repl: '<span class="jake">JAKE:</span> WHATS THAT JANE!'
}, {
  pat:  '<span style="color: #fbbaff">TG: batterwitch pls help</span>',
  repl: '<span class="jane">JANE:</span> ROXY IS STILL EMBARRASSED ABOUT THAT ONE TIME SHE COULDN\'T KISS ME!'
}, {
  pat:  '<span style="color: #fbbaff">TG: my friends are completely insane</span>',
  repl: '<span class="jake">JAKE:</span> SHE IS???????????'
}, {
  pat:  '<span style="color: #fbbaff">TG: can you throw me back in jail :(</span>',
  repl: '<span class="jane">JANE:</span> ROXY DID YOU HEAR ME?'
}, {
  pat:  '<span style="color: #77003c">)(IC: gurl u made your cocoon</span>',
  repl: '<span class="jane">JANE:</span> YOU THINK I DIDN\'T KNOW ABOUT THAT, BUT I ACTUALLY DID KNOW ABOUT IT!'
}, {
  pat:  '<span style="color: #77003c">)(IC: DWI</span>',
  repl: '<span class="jane">JANE:</span> DIRK TOLD ME ONCE. IT WAS A SECRET!'
}, {
  pat:  '<span style="color: #77003c">)(er Imperious Condescension</span> <span style="color: #000000">logged the fuck out.</span>',
  repl: '<span class="jane">JANE:</span> BUT IT\'S PERFECTLY FINE! THERE\'S NO NEED TO BE UNHAPPY AT ALL!'
}],
"007633": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_7.gif" border="0" />',
  repl: '<span class="jake">JAKE:</span> SHES AROUND HERE SOMEWHERE JANE. I CAN FEEL IT!'},
"007635": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_8.gif" border="0" />',
  repl: '<span class="jake">JAKE:</span> MAAAAAAAAAAARCO!'},
"007636": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickjaketxt_9.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> POOOOOOOOOOOLO!'},
"007643": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_1.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> JAKE THX 4 BOMPIN ME WITH THAT PUMPKIN I WAS BEING SUCH A SQUARE!'},
"007648": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_2.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> DIRK!'},
"007649": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_3.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> DIIIIIIIIIIIRK!'},
"007650": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_4.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> DIRK DIRK DIRK DIRK DIRK DIRK DIRK DIRK DIRK DIRK DIRK!'},
"007651": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_5.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> NOITICE ANYTHIG DIFFERENT A BOUT US DIRG?'},
"007652": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_6.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> THEN ONLY THING I M DRONK ON'},
"007653": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_7.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> OKAY YES!'},
"007654": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_8.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> COME OOOOOOOOOOON DRIK!'},
"007655": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_9.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> NO DIRT DONK U SEE? WERE HAPPY NOW!'},
"007656": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_10.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> SCREW UR MANIME SORD...........'},
"007658": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_11.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> MMPHMHPHMMHMMFFMFMPHMPHMPHMMF!<br /><span style="position:absolute; user-select:none; -webkit-user-select:none;"><span style="opacity:0;">DIRK: MMPHM</span><span style="opacity:0.056;">H</span><span style="opacity:0.11;">P</span><span style="opacity:0.17;">H</span><span style="opacity:0.22;">M</span><span style="opacity:0.28;">M</span><span style="opacity:0.33;">H</span><span style="opacity:0.39;">M</span><span style="opacity:0.44;">M</span><span style="opacity:0.50;">F</span><span style="opacity:0.56;">F</span><span style="opacity:0.61;">M</span><span style="opacity:0.67;">F</span><span style="opacity:0.72;">M</span><span style="opacity:0.78;">P</span><span style="opacity:0.83;">H</span><span style="opacity:0.89;">M</span><span style="opacity:0.94;">P</span>HMPHMMF!</span><span class="dirk">DIRK: MMPHMHPHMMHMMFFMFMPHMPHMPHMMF!</span>'
}],
"007659": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickdirktxt_1.gif" border="0" />',
  repl: "<span class=\"jane\">JANE:</span> YAAAAAAAAAAAY!<br /><span class=\"jake\">JAKE:</span> WHOOPIEEEEEEEEEEE!<br /><span class=\"roxy\">ROXY:</span> YEEEEEEEEEEEHAW!<br /><span class=\"dirk\">DIRK: Ugh.</span><br /><span class=\"roxy\">ROXY:</span> COME O NDIRK! DUNCE 4 US!<br /><span class=\"roxy\">ROXY:</span> OH YESH DREK PLEASE DO A DANCE!<br /><span class=\"dirk\">DIRK: No.</span><br /><span class=\"jane\">JANE:</span> DIRP, DO'NT BE A PRUDE.<br /><span class=\"jane\">JANE:</span> STOMP BEING SUSH A SILLY TIGHTASS ANT CUT THAT RUG!<br /><span class=\"roxy\">ROXY:</span> YEAH DIRK!<br /><span class=\"roxy\">ROXY:</span> DO THE ROBUT!<br /><span class=\"dirk\">DIRK: No.</span><br /><span class=\"jake\">JAKE:</span> YEAD IRK!<br /><span class=\"jake\">JAKE:</span> LEST SEE YOU POPE AND LOCK!<br /><span class=\"dirk\">DIRK: No!</span><br /><span class=\"roxy\">ROXY:</span> DIRK! DIRK! DOOOOOOOOOOO<br /><span class=\"roxy\">ROXY:</span> THE MUSH POTATO!<br /><span class=\"jane\">JANE:</span> NO, I WANA SEE SOME CABBAGE PASHES!<br /><span class=\"jane\">JANE:</span> DO A CABBASH PATCH DARK!!!!!!!!!!!<br /><span class=\"dirk\">DIRK: Absolutely not.</span><br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> Hahaha! Dude, this is heavily ridiculous</span><br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> Your brain is so impenetrable, not even this asshole candy magic can lighten you up</span><br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> I'm so mother fussing amused by this</span><br /><span class=\"dirk\">DIRK: Shut up!</span><br /><span class=\"roxy\">ROXY:</span> NO DIRK HES RIGHT!<br /><span class=\"roxy\">ROXY:</span> JUSH GIVE IN 2 FEELIN GUUD AND DROPPIN PROBZ<br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> I'm afraid he can't, Hypersugar Roxy</span><br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> His mind is as dense as my muscles are STRONG</span><br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> By the way, would you like to feel my muscles, Roxy?</span><br /><span class=\"roxy\">ROXY:</span> OOH YES PLOX ;D<br /><span class=\"dirk\">DIRK: God dammit it. Why did I listen to you?</span><br /><span class=\"dirk\">DIRK: Nothing's changed! You may have merged with a sweaty horse guy, but you still sabotage me every chance you get.</span><br /><span class=\"dirk\">DIRK: What's worse is you still actually believe you're helping me. What a crock of shit.</span>"
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickdirktxt_2.gif" border="0" />',
  repl: "<span class=\"roxy\">ROXY:</span> AW DONT BE SO MEAN 2 HIM DIRK UR MUSCLESPIRIT IS FUN AND COOL<br /><span class=\"roxy\">ROXY:</span> FOMG<br /><span class=\"roxy\">ROXY:</span> U SHOULD FEEL HIS MUNSLES DIRK WHOW HE ES SO RIPPED!<br /><span class=\"roxy\">ROXY:</span> LE SWOOOOOOOOOOON<br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> You herd the woman, Dirk</span><br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> Quit stallion, trot on over here and touch my goof darned muscles</span><br /><span class=\"dirk\">DIRK: For the last time, I'm not touching your stupid muscles!</span><br /><span class=\"dirk\">DIRK: And roxy just so you know, if you hook up with my douche of a sprite, I'm gonna be hella pissed.</span><br /><span class=\"roxy\">ROXY:</span> DAG THES MUSGLES R HARD AS HECK<br /><span class=\"roxy\">ROXY:</span> JANE U WANT INK ON THIS ACTION<br /><span class=\"jane\">JANE:</span> YES I SURELLY DO!<br /><span class=\"jane\">JANE:</span> OOH, THESE RALLY ARE WONDERFUL MUSCULES!<br /><span class=\"jane\">JANE:</span> JAKE YOU SHIMPLY MUST FEEL THIS MUSCULES.<br /><span class=\"jake\">JAKE:</span> BOB HOWDY!<br /><span class=\"jake\">JAKE:</span> DINK YOUR DOPPLEWHOSHIT IS FREAKIN CUT!<br /><span class=\"jake\">JAKE:</span> HES IS TRULEY A MANS MAN.<br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> Dirk, it seems my muscles are a hit</span><br /><span class=\"arquius\">ARQUIUSPRITE: <span class=\"text_image arquius_shades\">--></span> Are you absolutely sure you won't feast your hands on this Grade A Beef?</span><br /><span class=\"dirk\">DIRK: Please. Someone.</span><br /><span class=\"dirk\">DIRK: Make it stop.</span><br /><span class=\"roxy\">ROXY:</span> HEY I KNOW<br /><span class=\"roxy\">ROXY:</span> IF DIRK WANTS 2 KEEP BEING A DRAG THEN MAYBE SHADES MC MUSCLESPRITE WANTS TO QUADRUPLE MARY US INSTEAD?<br /><span class=\"jane\">JANE:</span> THERE'S AN IDEDA!<br /><span class=\"jake\">JAKE:</span> WHAO HEY LADIES LET US NOTE BE HASTY IN EXSHLUDING DIRK FROM OUR HAPPY MARITIAL PLANS.<br /><span class=\"jake\">JAKE:</span> DIRK IAVE BEEN WANNING TO SAY THAT BEFORE I SOVED ALL MY PROSBLEMS I WAS FEELING SO BAD ABOUT THINGS WITH YOU.<br /><span class=\"jake\">JAKE:</span> BUT NOW THAT IM HAPPY I HAV THE ANSWER ON HOW TO MAKE ERVYONE HAPPY!<br /><span class=\"jake\">JAKE:</span> YOU ME ROXY AND OF COURS JANE WHO WAS IN LOVE WITH ME JUST LIKE YOU!<br /><span class=\"jake\">JAKE:</span> SO I FOUD OUT THE BEST WAY TO RESOLVE ROMANIC CONFLICT IS FOR EVERYBRONY TO MARRY EACHOTTER!<br /><span class=\"jake\">JAKE:</span> WHAT YOU SHAY PAL WANDA GET MARRIED TO ME?<br /><span class=\"dirk\">DIRK: Jake, I'm not marrying shit.</span><br /><span class=\"dirk\">DIRK: And frankly, you've got some nerve floating down here babbling about marriage with that shit eating grin and that dumb little pumpkin on your head.</span><br /><span class=\"dirk\">DIRK: After the way you ditched me and ignored all my messages?</span><br /><span class=\"dirk\">DIRK: You know what, if you didn't like me anymore and wanted to stop hanging out, then fine, I could handle that.</span><br /><span class=\"dirk\">DIRK: But to just completely shut me out, like I didn't even deserve an explanation, that's just cowardly. Why couldn't you just man up and talk to me?</span><br /><span class=\"dirk\">DIRK: You act like I don't have feelings, like I'm some kind of robot. Well you're wrong, I do.</span><br /><span class=\"dirk\">DIRK: And I'm using those feelings by starting to FEEL like you're actually kind of an asshole.</span><br /><span class=\"dirk\">DIRK: So whatever you were so afraid to tell me before your fucking sugar high, don't worry about it, I'll save you the trouble.</span><br /><span class=\"dirk\">DIRK: It's over, Jake.</span>"
}],
"007663": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/OHBOY.gif" border="0" />',
  repl: '<span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/OHBOY.gif); height:98px;">OH BOY!!!!!!!!!!!</span>'},
/*"007922": [{
  pat:  '<span style="color: #000000">Have you ever considered a <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/star-heart-horseshoe.png" border="0" /> relationship with someone?</span>',
  repl: '<span style="color: #000000">Have you ever considered a <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/star-heart-horseshoe.png); width:39px;"></span> relationship with someone?</span>'
}, {
  pat:  '<span style="color: #000000">Maybe you will discover you have never truly experienced joy until you have been in <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/star-heart-horseshoe.png" border="0" /> with a dancing elf.</span>',
  repl: '<span style="color: #000000">Maybe you will discover you have never truly experienced joy until you have been in <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/star-heart-horseshoe.png); width:39px;">star heart horseshoe</span> with a dancing elf.</span>'
}],*/
"007980": {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />', 'g'),
  repl: '<span class="text_image scorpio">&#9807;</span>'
},
"007981": {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />', 'g'),
  repl: '<span class="text_image scorpio">&#9807;</span>'
},
"008008": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/johnblurtext1.gif" border="0" />',
  repl: '<span class="john" style="text-shadow:0 0 2px #0715cd; color:rgba(7, 21, 205, 0.25);">JOHN: whoa.</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/johnblurtext2.gif" border="0" />',
  repl: '<span class="john blur1">JOHN: this is making me feel weird.</span>'
}],
"008009": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/johnblurtext3.gif" border="0" />',
  repl: '<span class="john" style="filter:blur(2px);">JOHN: AAAUUUUGH!</span>'},
"008012": {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />', 'g'),
  repl: '<span class="text_image scorpio">&#9807;</span>'},
"008037": {
  pat:  new RegExp('<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />', 'g'),
  repl: '<span class="text_image scorpio">&#9807;</span>'},
"008182": {}, // TODO
"008251": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/glitchtext1.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/glitchtext1.gif); width:528px; height:214px;">TEREZI: 1 DONT R3M3MB3R TH1S STUFF BE1NG H3R3'},
"008281": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/glitchtext2.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/glitchtext2.gif);image-rendering: pixelated;width:528px;height:247px;line-height: 17px;background-position: -4px -4px;font-size: 13px;letter-spacing: .2px;">DIRK: What\'s happening?<br>ARQUIUSPRITE: --&gt; What do you mean?<br>DIRK: What?<br>ARQUIUSPRITE: --&gt; Sir dude, you are breaking up<br>ARQUIUSPRITE: --&gt; Another glut of artifa% must be blowing through your region<br>DIRK: I can\'t understand you.<br>DIRK: Are you just cursing non-stop now?<br>ARQUIUSPRITE: --&gt; Stand by, I will use my potent algorithms to decode your gibberish<br>DIRK: Hello???<br>ARQUIUSPRITE: --&gt; I command you to say more interesting things than hello<br>ARQUIUSPRITE: --&gt; That was too easy to decode</span>'},
"008296": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/glitchtext3.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/glitchtext3.gif); width:528px; height:550px;">timaeusTestified [TT] began pestering turntechGodhead [TG]<br />TT: Hello, is this Dave?<br />TG: what<br />TG: who is this<br />TT: Damn. I should have known.<br />TT: Can you read this?<br />TG: cant understand a thing youre saying<br />TG: is this davesprite<br />TT: What was that?<br />Did you just ask me if this is davesprite?<br />TG: davesprite yo if thats you we should probably talk soon<br />TG: about<br />TG: stuff<br />TT: This isn\'t Davesprite.<br />TT: This is Dirk.<br />TT: Your alternate universe brother.<br />TG: what<br />TG: what about my bro?<br />TT: Fuck.<br />TT: Hello???<br />TG: dude listen i cant talk now<br />TG: im flying over some lava with the mayor<br />TT: The mayor?<br />TT: What mayor?!<br />TG: oh shit you arent up to speed on the fuckin mayor?<br />TG: thats so wrong<br />TG: you gotta meet the mayor<br />TG: anyway lets talk another time when theres less glitchy bullshit<br />TG: later bro<br />TT: Wait, don\'t go!<br />turntechGodhead [TG] ceased pestering timaeusTestified [TT]</span>'},
"008316": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/glitchtext4.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/glitchtext4.gif); width:528px; height:1450px;">The pro8lem is that when the su8ject of leprechaun romance is 8roached, our overly o8essive troll intellects instantly assume the most ingrati8ting posture of admir8tion imagina8le.<br />Which makes it hard! Hard to give it proper academic focus I mean, 8ecause of how gr8 it is.<br />8ut we will do our 8est to understand regardless.<br />Trolls have only four forms of romance. And though we consider it a complic8ted su8ject, spanning a wide range of emotions, social conventions, and implic8tions for reproduction, it is ultim8tely a superficial slice of what leprechauns consider the full 8ody of romantic experience. Our concept of romance, in spite of its capacity to fill our art and literature and to rule our individual destinies like little else, is still just that. A single, quaternary concept. A concept usually denoted 8y four sym8ols.<br />&lt;3 &lt;3&lt; &lt;&gt; o8&lt;<br />Leprechaun romance is more complic8ted than that. Leprechaun romance needs nine sym8ols.<br />The nine quadrants of leprechaun romance are considera8ly more nuanced than our quaint notions of romance, and certainly more alien.<br />In fact, so conditioned is my own understanding of romance that I can\'t help 8ut refer to them as quadrants, when in fact they are not quadrants at all! They are referred to as charms.<br />One of the charms is characterized 8y romantic love, as understood 8y 8oth trolls and humans. 8ut after that, all 8ets are off. There is no division 8etween 8lack or red, concupiscent or conciliatory. Instead their charms comprise a spectral continuum of more su8tly varying types of relationships, most of which are esta8lished in mutual chicanery, such as the exchange of pranks, coy riddles, slapstick shenanigans, and games of chance. Furthermore, a pair of leprechauns is not limited to a single charm. A relationship may 8e defined 8y multiple charms at once! In fact, some of the most interesting relationships arise from exotic charm com8in8tions. A sta8le relationship consisting of three or more charms is called a trove. These advanced relationships are often viewed as the ideal end result for a romance, much the way certain pairing rituals are for humans.<br />No charm is specifically tied to procre8tion, though any type of relationship could 8egin waxing concupiscent if lady luck should so decide. Certain charm com8in8tions are known to 8e more conducive to fertility than others. If the leprechaun pair has 8een so 8lessed, they will 8egin an ela8orate coupling procedure culmin8ting in a lively m8ting jig. The jigs are specific to the charms of course, similar to how different kinds of music lend themselves to various styles of dance.<br />While their romance is endlessly captiv8ting, leprechaun reproduction may 8e the most interesting su8ject of all. Particularly from a perspective of detailed anatomical study, which I will get to shortly. 8ut first it 8ears pointing out that while for humans reproductive relationships are exclusively heterosexual, and for trolls they are 8isexual, for leprechauns they are exclusively homosexual. Yes, you heard right. That means the Felt are &#9617;&#9617;&#9617; super gay. A graphic description of the reproductive process is &#9617;&#9617; follows&#9617;<br />&#9617;&#9617;&#9617; frog penis &#9617;&#9617;&#9617; muppet buttock &#9617;&#9617;&#9617; chafing &#9617;&#9617;&#9617; wriggling &#9617;&#9617;&#9617; puppet pelvis &#9617;&#9617;&#9617; magic gnome phallus &#9617;&#9617;&#9617; elf eggs &#9617;&#9617;&#9617; burrowed fuck deep &#9617;&#9617;&#9617; perky proboscis &#9617;&#9617;&#9617; coarse kermit cock &#9617;&#9617;&#9617; wrist deep in puppet ass &#9617;&#9617;&#9617; pro8oscalypse &#9617;&#9617;&#9617; soft 8ul8ous 8ottom &#9617;&#9617;&#9617; kind of jutting out and impudent &#9617;&#9617;&#9617;</span>'},
"008317": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/davejade_smalltext1.gif" border="0" />',
  repl: '<span class="small_block"><span style="color: #4ac925">JADE:</span> <span style="color: #000000">see look, one of your time doubles is surely predestined to come from a few minutes in the future and appear behind me for a surprise attack, riiiight about...</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">now!</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">...</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">no wait</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">riiiiiiiiiight...</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">...</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">...</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">NOW!</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">....</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">.....</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">dave why is your future self being such a wet blanket</span><br /><span style="color: #e00707">DAVE: i told you</span><br /><span style="color: #e00707">DAVE: im not time traveling</span><br /><span style="color: #e00707">DAVE: i think im giving it up for good actually</span><br /><span style="color: #4ac925">JADE:</span> <span style="color: #000000">:\\</span></span>'},
"008318": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/davejade_smalltext2.gif" border="0" />',
  repl: '<span class="small_block"><br />   <span class="dave" style="opacity:1;">DAVE: im serious</span><br /><span class="dave" style="opacity:1;">DAVE: the thing is</span><br /><span class="dave" style="opacity:1;">DAVE: being a time guy</span><br /><span class="dave" style="opacity:1;">DAVE: like actually MASTERING time travel</span><br /><span class="dave" style="opacity:1;">DAVE: im pretty sure what that involves is</span><br /><span class="dave" style="opacity:0.97;">DAVE: learning to never use it</span><br /><span class="dave" style="opacity:0.93;">DAVE: see its like karate</span><br /><span class="dave" style="opacity:0.9;">DAVE: well</span><br /><span class="dave" style="opacity:0.87;">DAVE: its more like what they SAY about karate</span><br /><span class="dave" style="opacity:0.83;">DAVE: that you learn it so you dont use it</span><br /><span class="dave" style="opacity:0.8;">DAVE: but i mean we all know the truth about karate is if you know karate then obviously in reality you use it all the time</span><br /><span class="dave" style="opacity:0.77;">DAVE: like doing lethal fuckin crane kicks and sweet karate chops while walking down the street just cause you can</span><br /><span class="dave" style="opacity:0.73;">DAVE: its a god damn no brainer thats what you do with karate</span><br /><span class="dave" style="opacity:0.7;">DAVE: but see with time travel</span><br /><span class="dave" style="opacity:0.67;">DAVE: all the stuff about learning it so you dont have to use it is true</span><br /><span class="dave" style="opacity:0.63;">DAVE: theres no good that can come of it</span><br /><span class="dave" style="opacity:0.6;">DAVE: you can crunch the logic on the loops all you want</span><br /><span class="dave" style="opacity:0.57;">DAVE: but all youre doing is painting yourself into a corner</span><br /><span class="dave" style="opacity:0.53;">DAVE: creating inevitabilities you have to rehearse and enact or face death for yourself or everyone you know</span><br /><span class="dave" style="opacity:0.5;">DAVE: and sometimes facing death is the very inevitability you have to rehearse</span><br /><span class="dave" style="opacity:0.47;">DAVE: and then you wait and wait knowing its coming and knowing it has to happen</span><br /><span class="dave" style="opacity:0.43;">DAVE: how do you think it made me feel when we were gathering up all those frogs</span><br /><span class="dave" style="opacity:0.4;">DAVE: and i knew the whole time in a little while you would have to watch me get shot</span><br /><span class="dave" style="opacity:0.37;">DAVE: but i couldnt say anything or it would mess it all up</span><br /><span class="dave" style="opacity:0.33;">DAVE: all cause i thought it would be cool to be marty mcfuckin fly</span><br /><span class="dave" style="opacity:0.3;">DAVE: but instead of shredding johnny b goode on guitar to get my parents to bang</span><br /><span class="dave" style="opacity:0.27;">DAVE: my crowning performance was doing a funny dance while getting pumped full of lead</span><br /><span class="jade" style="opacity:0.23;">JADE:</span> <span class="black" style="opacity:0.23;">......</span><br /><span class="dave" style="opacity:0.2;">DAVE: then i had to leave everyone behind and get into the delorean and return to the 1980s</span><br /><span class="dave" style="opacity:0.17;">DAVE: but the delorean was actually a big purple moon</span><br /><span class="dave" style="opacity:0.13;">DAVE: and the 1980s was me accidentally reaching god tier and living on a shitty meteor for a while</span><br /><span class="dave" style="opacity:0.1;">DAVE: and i guess rose was doc brown</span><br /><span class="dave" style="opacity:0.07;">DAVE: doc brown accidentally reached god tier too</span><br /><span class="dave" style="opacity:0.03;">DAVE: ok i guess this is where the analogy falls apart but you get what i mean</span><br /><span class="jade" style="opacity:0;">JADE:</span> <span class="black" style="opacity:0;">sorry dave, you lost me there after the part where i shot you</span><br /><span class="dave" style="opacity:0;">DAVE: damn</span><br /><span class="dave" style="opacity:0;">DAVE: ok lemme start over</span><br /><span class="jade" style="opacity:0;">JADE:</span> <span class="black" style="opacity:0;">omg, no!</span><br /><span class="jade" style="opacity:0;">JADE:</span> <span class="black" style="opacity:0;">the fact is youre going to have to rely on those powers if you want to stand any chance against a lord of time</span></span>'},
"008453": [
{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/vristext1.gif" border="0" />',
  repl: '<span class="vriska small6">VRISKA: Can I just talk to her already?</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/vristext2.gif" border="0" />',
  repl: '<span class="vriska small6">VRISKA: I just want to say a couple things!!!!!!!!</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/vristext3.gif" border="0" />',
  repl: '<span class="vriska small6">VRISKA: I don\'t have a phone!<br />VRISKA: Here, let me talk to her.</span>'
}],
"008512": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext1.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext1.gif); width:520px; height:450px;">GAD<br />ZOOKS</span>'},
"008514": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext2.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext2.gif); width:520px; height:430px;">BOY<br />HOWDY</span>'},
"008515": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext3.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext3.gif); width:520px; height:400px;">HOLY<br />TOLEDO</span>'},
"008516": [
{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext4.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext4.gif); width:520px; height:520px;">LAND<br />SAKES<br />ALIVE</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext5.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext5.gif); width:520px; height:375px;">HELLO<br />NURSE</span>'
}],
"008517": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext6.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext6.gif); width:520px; height:555px;">BY<br />GUM</span>'},
"008519": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext7.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext7.gif); width:520px; height:555px;">AY CHI<br />HUA<br />HUA</span>'},
"008523": [
{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext1.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: WE MAY HAVE A PROBLEM HERE</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext2.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: I SAID WE MAY HAVE A PROBLEM HERE</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext3.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: I SAID</span><br /><span class="karkat blur1">KARKAT: GOD DAMMIT</span><br /><span class="karkat blur1">KARKAT: ARE YOU TALKING INTO THAT LITTLE ASS AGAIN</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext4.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: I SAID WE MAY HAVE--</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext5.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: I SAID WE--</span>'
}],
"008527": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext8.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext8.gif); width:520px; height:450px;">JUMPIN<br />JEHOSA<br />PHAT</span>'
},
"008531": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext9.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext9.gif); width:520px; height:1075px;">SOCK<br />IT<br />TO<br />ME</span>'},
"008536": [
{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext10.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext10.gif); width:520px; height:270px;">WIN</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext11.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext11.gif); width:520px; height:270px;">ONE</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext12.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext12.gif); width:520px; height:270px;">FOR</span>'
}],
"008537": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext13.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext13.gif); width:520px; height:400px;">THE<br />GIPPER</span>'},
"008551": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/comoc.php?cid=038.jpg" target="_blank" class="postlink"><img src="http://mspaintadventures.com/storyfiles/hs2/scraps/wizordofoz.jpg" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/comoc.php?cid=038.jpg" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/wizordofoz.jpg); height:1609px;">WIZORD OF OZ<br />"THIS IS WHAT THE REFRANCE"</span></a>'},
"008592": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext14.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext14.gif); width:520px; height:350px;">SHUCKY<br />DARN</span>'},
"008646": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/aranea_aaaaaaah.gif" border="0" />',
  repl: '<span class="aranea giant" style="overflow-wrap: anywhere;font-size:110px;">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH</span>'},
"008650": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext15.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext15.gif); width:520px; height:325px;">FIDDLE<br />FADDLE</span>'},
"008688": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/BLOODHONK.gif" border="0" /></span>',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/BLOODHONK.gif); width:558px; height:217px;">HONK</span></span>'},
"009359": [{
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'
}],
"009362": {
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'},
"009410": [{
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'
}],
"009452": {
  pat:  '<img src="http://mspaintadventures.com/scraps2/vris_fuckingloser.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://scraps2/vris_fuckingloser.gif);width: 555px;height: 370px;"><span class="giant" style="font-size:131px;">FUCKING</span><br><span class="giant" style="font-size:181px;">LOSER</span><br><span class="giant" style="font-size:124px; margin: auto -27px;">!!!!!!!!</span></span>'},
"009710": [
{
  pat:  '<img src="http://mspaintadventures.com/scraps2/jasprose_sm1.gif" border="0" />',
  repl: '<span class="roxy small4">JASPROSESPRITE^2: </span><span class="rose small4">:3</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/jasprose_sm2.gif" border="0" />',
  repl: '<span class="roxy small6">JASPROSESPRITE^2: </span><span class="rose small6">:3</span>'
}],
"009773": [{
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'
}],
"009775": [
{
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'
}],
"009834": [
{
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext1.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: hey terezi</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext2.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: you coming or what</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext3.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: what did you say??</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext4.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: get over here</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext5b.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: its almost time to fight</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext5.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: what was that</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext6.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: im having trouble hearing you through the little foam ass</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext7.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: hold on lemme smoosh my ear up against it</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/dave_blurtext8.gif" border="0" />',
  repl: '<span class="dave blur1">DAVE: what</span>'
}],
};
const prependContent = {
  "005976": "GIRL.",
  "005977": "YOU THERE. GIRL.",
  "005978": "GIRL, QUIT ALL THIS SCURRYING AROUND.",
  "005979": "DO YOU BELIEVE YOU CAN ESCAPE ME BEFORE I ARRIVE?",
  "005980": "HOW DO YOU EXPECT TO OUTRUN ME",
  "005981": "WHEN I AM ALREADY HERE?",
  "008232": "<span class=\"john\">JOHN: NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!</span>",
  "008233": "<span class=\"john\">JOHN: NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!</span>",
};
const appendContent = {
  "007623": "CAUCASIAN!<br />PEACHY!<br /><span class=\"jake\">JAKE: NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!</span>",
  "008230": "<span class=\"john\">JOHN: NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!</span>",
};
