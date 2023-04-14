function replaceContent(story, key, pat, repl){
  story[key].content = story[key].content.replace(pat, repl);
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
  },

  styles: [
    {
      source: "./plaintextImages.css"
    }
  ],
};
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
"002659": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/00759_4under.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/00759_4under.gif); width:500px; height:240px;">With love,'},
"002815": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=006.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/andtherehegoes.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=006.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/andtherehegoes.gif); width:197px; height:106px;">and there he goes'},
"003023": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=007.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/distaction.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=007.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/distaction.gif); width:244px; height:137px;">THE CAN RUSE WAS A...........'},
"003024": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/HAVEthecargo.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/HAVEthecargo.gif); width:62px; height:30px;">you HAVE'},
"003028": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/mail.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/mail.gif); width:300px; height:120px;">MAIL</span>'},
"003232": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=011.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/pricesandvaules.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=011.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/pricesandvaules.gif); width:235px; height:105px;">the selection has too many'},
"003249": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=010.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/turnways.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=010.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/turnways.gif); width:127px; height:61px;">you got to'},
"003404": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/EGG!.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/EGG!.gif); width:188px; height:122px;">EGG!</span>'},
"003702": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=016.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/shitletsbesanta.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=016.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/shitletsbesanta.gif); width:300px; height:150px;">shit.'},
"003727": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/comeon.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/comeon.gif); width:191px; height:89px;">come ON</span>'},
"004153": {
  pat:  'He is an officer of an indestructible demon known as  <span style="color: #2ed73a">L</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/o.gif" border="0" /><span style="color: #2ed73a">rd English</span>. His job is to pave the way for the arrival of his master, who will be summoned upon the termination of the universe. He has worked at this task for many centuries, and will continue to do so until THE GREAT UNDOING.',
  repl: 'He is an officer of an indestructible demon known as <span style="color: #2ed73a">L</span><span class="text_image english_o">o</span><span style="color: #2ed73a">rd English</span>. His job is to pave the way for the arrival of his master, who will be summoned upon the termination of the universe. He has worked at this task for many centuries, and will continue to do so until THE GREAT UNDOING.'
},
"004163": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/shehaswhat.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/shehaswhat.gif); width:400px; height:60px;">SHE HAS WHAT?</span>'
},
"004355": {
  pat:  'You unequip <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/psi.gif" border="0" />DON\'S ENTENTE, a golden DOUBLE CULLING FORK, a legendary weapon reserved for royalty, and generally only used for ceremonial purposes.',
  repl: "You unequip &Psi;DON'S ENTENTE, a golden DOUBLE CULLING FORK, a legendary weapon reserved for royalty, and generally only used for ceremonial purposes."},
"004477": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/puase.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/puase.gif); width:273px; height:64px;">PUASE.. ... ,</span>'},
"004493": {
  pat:  '<span style="color: #a10000">FAA: 0f inheriting</span> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/ultimatereward.gif" border="0" />',
  repl: '<span style="color: #a10000">FAA: 0f inheriting</span> <span class="ultimate_reward">the ultimate reward</span>'},
"004510": {
  pat:  '<span style="color: #a10000">CAA: banished fr0m the <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/universeblue.gif" border="0" /> we left behind</span>',
  repl: '<span style="color: #a10000">CAA: banished fr0m the <span class="universe_blue">universe</span> we left behind</span>'},
"004517": {
  pat:  '<span style="color: #a10000">CAA: and yet in being denied <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/ultimatereward.gif" border="0" /></span>',
  repl: '<span style="color: #a10000">CAA: and yet in being denied <span class="ultimate_reward">the ultimate reward</span></span>'},
"004524": {
  pat:  '<span style="color: #a10000">CAA: int0 the <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/universered.gif" border="0" /> we created</span>',
  repl: '<span style="color: #a10000">CAA: int0 the <span class="universe_red">universe</span> we created</span>'},
"004555": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/yeah!!!!!!!!.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/yeah!!!!!!!!.gif); width:132px; height:48px;">Yeah!!!!!!!!</span>'},
"004631": {
  pat:  '<span style="color: #b536da">TT: What do you know about the <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/greensun.gif" border="0" />?</span>',
  repl: '<span style="color: #b536da">TT: What do you know about the <span class="green_sun">Green Sun</span>?</span>'},
"004688": {
  pat:  '<span style="color: #626262">CG: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif" border="0" /></span>',
  repl: '<span style="color: #626262">CG: <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif); width:450px; height:200px;">FRUITY RUMPUS ASSHOLE FACTORY</span></span>'},
"004689": {
  pat:  '<span style="color: #626262">CG: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif" border="0" /></span>',
  repl: '<span style="color: #626262">CG: <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif); width:450px; height:200px;">FRUITY RUMPUS ASSHOLE FACTORY</span></span>'},
"004697": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/sweetcatchblue.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/sweetcatchblue.gif); width:79px; height:35px;">SWEET'},
"004722": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/BlAsPhEmY.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/BlAsPhEmY.gif); width:523px; height:119px;">BlAsPhEmY</span>'},
"004750": {
  pat:  '<span style="color: #77003c">CC: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/psifef.gif" border="0" />oooooo ---------------E</span> ',
  repl: '<span style="color: #77003c">CC: &Psi;oooooo ---------------E</span> '},
"004751": {
  pat:  '<span style="color: #626262">CG: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif" border="0" /></span>',
  repl: '<span style="color: #626262">CG: <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/FRUITYRUMPUSASSHOLEFACTORY.gif); width:450px; height:200px;">FRUITY RUMPUS ASSHOLE FACTORY</span></span>'},
"004941": [{
  pat:  '<span style="color: #e00707">TG: i mean the <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/greensun.gif" border="0" /> my bad</span>',
  repl: '<span style="color: #e00707">TG: i mean the <span class="green_sun">Green Sun</span> my bad</span>'
}, {
  pat:  '<span style="color: #b536da">TT: The <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/greensun.gif" border="0" />.</span>',
  repl: '<span style="color: #b536da">TT: The <span class="green_sun">Green Sun</span>.</span>'
}],
"004943": {
  pat:  '<span style="color: #b536da">TT: By which I do mean the <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/greenmotherfuckingsun.gif" border="0" />.</span>',
  repl: '<span style="color: #b536da">TT: By which I do mean the <span class="green_mother_fucking_sun">GREEN MOTHER FUCKING SUN</span>.</span>'},
"005043": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=016.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/andthenightbeforechristmas.jpg" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=016.jpg" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/andthenightbeforechristmas.jpg); height:151px;">and the night before christmas........'},
"005117": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/whatdidyoudo.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/whatdidyoudo.gif); width:400px; height:60px;">WHAT DID YOU DO?</span>'},
"005127": {
  pat:  '<span style="color: #2ed73a">BEH</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/o.gif" border="0" /><span style="color: #2ed73a">LD</span>.',
  repl: '<span style="color: #2ed73a">BEH</span><span class="text_image english_o">O</span><span style="color: #2ed73a">LD</span>.'},
"005247": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=023.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/areyounext.gif" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=023.jpg" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/areyounext.gif); height:300px;">are you next?</span></a>'},
"005284": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/corpsesmooch.gif" border="0" />',
  repl: '<span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/corpsesmooch.gif); height:175px;">2x CORPSESMOOCH'},
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
  pat:  '<span style="color: #b536da">TT: The <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/greensun.gif" border="0" />.</span>',
  repl: '<span style="color: #b536da">TT: The <span class="green_sun">Green Sun</span>.</span>'},
"005530": {
  pat:  '<span style="color: #ffffff">But he goes by the title, </span><span style="color: #2ed73a">L</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/o.gif" border="0" /><span style="color: #2ed73a">rd English</span><span style="color: #ffffff">.</span>',
  repl: '<span style="color: #ffffff">But he goes by the title, </span><span style="color: #2ed73a">L</span><span class="text_image english_o">o</span><span style="color: #2ed73a">rd English</span><span style="color: #ffffff">.</span>'},
"005609": [{
  pat:  '<span style="color: #008282">GC: 4R3 YOU R3F3RR1NG TO YOUR PL4N TO BLOW UP</span> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/TH3GR33NSUN.gif" border="0" /><span style="color: #008282">?</span>',
  repl: '<span style="color: #008282">GC: 4R3 YOU R3F3RR1NG TO YOUR PL4N TO BLOW UP</span> <span class="th3_gr33n_sun">TH3 GR33N SUN</span><span style="color: #008282">?</span>'
}, {
  pat:  '<span style="color: #008282">GC: W41T!!!!!! &gt;:[</span>',
  repl: '<span style="color: #008282">GC: W41T!!!!!! >:[</span>'
}],
"005627": {
  pat:  '<a href="/archive/external/midnightcrew.mp4" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/WHOSTHISDOUCHEBAG.gif" border="0" /></a>',
  repl: '<a href="/archive/external/midnightcrew.mp4" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/WHOSTHISDOUCHEBAG.gif); height:10250px;">WHO\'S THIS DOUCHE BAG</span></a>'},
"005720": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/exclamation.gif" border="0" />',
  repl: '<span class="exclamation">!</span>'},
"005958": {
  pat:  'Surrounding him on his rise to infamy and throughout the rebellion were the most trusted elites among his devoted. The <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/psiwhite.gif" border="0" />iioniic was a mage of unequaled telekinetic ability, who upon hearing the words of the Sufferer was inspired to free himself from the sort of slavery typical of his mentally gifted class. ',
  repl: 'Surrounding him on his rise to infamy and throughout the rebellion were the most trusted elites among his devoted. The &Psi;iioniic was a mage of unequaled telekinetic ability, who upon hearing the words of the Sufferer was inspired to free himself from the sort of slavery typical of his mentally gifted class. '},
"005959": {
  pat:  'But the Dolorosa was less fortunate, and was sold into slavery. She spent the rest of her life as property of vicious sea dwellers. As for the <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/psiwhite.gif" border="0" />iioniic, he was enlisted in a far worse, if more prestigious service.',
  repl: 'But the Dolorosa was less fortunate, and was sold into slavery. She spent the rest of her life as property of vicious sea dwellers. As for the &Psi;iioniic, he was enlisted in a far worse, if more prestigious service.'},
"005982": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=027.jpg" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/SNAPINGWRONG.jpg" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/?cid=027.jpg" target="_blank" class="postlink"><span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/SNAPINGWRONG.jpg); width:543px; height:500px;">FUCK'},
"006224": {
  pat:  '<a href="/decode/morse" target="_blank" class="postlink"><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/HELPHIM.gif" border="0" /></a>',
  repl: '<a href="/decode/morse" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/HELPHIM.gif); height:150px;">.... . .-. .--.'},
"006637": [{
  pat:  '<span style="color: #f141ef">JASPERSPRITE: Meoooooow.</span> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/musicnote.png" border="0" />',
  repl: '<span style="color: #f141ef">JASPERSPRITE: Meoooooow.</span> <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/musicnote.png); width:11px; height:13px;">&#9835;</span>'
}, {
  pat:  '<span style="color: #f141ef">JASPERSPRITE: Meow meow-meow meow meow meeeooooow.</span> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/musicnote.png" border="0" />',
  repl: '<span style="color: #f141ef">JASPERSPRITE: Meow meow-meow meow meow meeeooooow.</span> <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/musicnote.png); width:11px; height:13px;">&#9835;</span>'
}, {
  pat:  '<span style="color: #f141ef">JASPERSPRITE: Meow meow-meow meow MEOW MEEEEEEEOOOOOOOOOOW.</span> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/musicnote.png" border="0" />',
  repl: '<span style="color: #f141ef">JASPERSPRITE: Meow meow-meow meow MEOW MEEEEEEEOOOOOOOOOOW.</span> <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/musicnote.png); width:11px; height:13px;">&#9835;</span>'
}, {
  pat:  '<span style="color: #f141ef">JASPERSPRITE: Meow meow-MEOW meow meow JO-OHHHHHN.</span> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/musicnote.png" border="0" />',
  repl: '<span style="color: #f141ef">JASPERSPRITE: Meow meow-MEOW meow meow JO-OHHHHHN.</span> <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/musicnote.png); width:11px; height:13px;">&#9835;</span>'
}, {
  pat:  '<span style="color: #f141ef">JASPERSPRITE: MEOW MEOW-MEEEOOOW MEEOOWW MEOW MEEEEEEEEEEEOOOOOOOOOOOOW.</span> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/musicnote.png" border="0" />',
  repl: '<span style="color: #f141ef">JASPERSPRITE: MEOW MEOW-MEEEOOOW MEEOOWW MEOW MEEEEEEEEEEEOOOOOOOOOOOOW.</span> <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/musicnote.png); width:11px; height:13px;">&#9835;</span>'
}],
"006740": [{
  pat:  '<span style="color: #a15000">TAVROS: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /> yES, i WILL DEFINITELY, <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /></span>',
  repl: '<span style="color: #a15000">TAVROS: <span class="text_image scorpio">&#9807;</span> yES, i WILL DEFINITELY, <span class="text_image scorpio">&#9807;</span></span>'
}, {
  pat:  '<span style="color: #a15000">TAVROS: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /> cOOPERATE WITH YOU WHOLE HEARTEDLY, <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /></span>',
  repl: '<span style="color: #a15000">TAVROS: <span class="text_image scorpio">&#9807;</span> cOOPERATE WITH YOU WHOLE HEARTEDLY, <span class="text_image scorpio">&#9807;</span></span>'
}],
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
  pat:  '<span style="color: #ff6ff2">&quot;i think you were supposed to just tackle him,&quot; beatrix said looking all kinds of put off.',
  repl: '<span style="color: #ff6ff2">"i think you were supposed to just tackle him," beatrix said looking all kinds of put off.'
}, {
  pat:  'wizardy herbert reached down to the body of the fictional camper he just shot and picked up the flag. &quot;same difference.&quot;',
  repl: 'wizardy herbert reached down to the body of the fictional camper he just shot and picked up the flag. "same difference."'
}, {
  pat:  '&quot;IS it?&quot;',
  repl: '"IS it?"'
}, {
  pat:  '&quot;this is some lame magical version of capture the flag. the book wanted me to capture the flag from him. the flag has now been captured. anyway, hes just a kind of brainless puppet.&quot;',
  repl: '"this is some lame magical version of capture the flag. the book wanted me to capture the flag from him. the flag has now been captured. anyway, hes just a kind of brainless puppet."'
}, {
  pat:  '&quot;then what are we?&quot; she asked.',
  repl: '"then what are we?" she asked.'
}, {
  pat:  '&quot;i dunno. brainless puppets whove spent a few years in the real world. kind of like everyone else, i suppose.&quot;',
  repl: '"i dunno. brainless puppets whove spent a few years in the real world. kind of like everyone else, i suppose."'
}, {
  pat:  '&quot;jeez thats cynical. anyway, youre the one who said we should let the story play out the way its supposed to. im just pointing out your own rules.&quot;',
  repl: '"jeez thats cynical. anyway, youre the one who said we should let the story play out the way its supposed to. im just pointing out your own rules."'
}, {
  pat:  "&quot;ehhh.&quot; herbert made a dismissive gesture with his smoking gun. &quot;these punks were starting to get on my nerves. we're making progress anyway. see? listen to that. russets scene is coming up. if i remember right this is the one that introduces his recurring love interest. also i guess the chief bad guy. i mean, sorta.&quot;",
  repl: '"ehhh." herbert made a dismissive gesture with his smoking gun. "these punks were starting to get on my nerves. we\'re making progress anyway. see? listen to that. russets scene is coming up. if i remember right this is the one that introduces his recurring love interest. also i guess the chief bad guy. i mean, sorta."'
}, {
  pat:  '&quot;help! herb! bea! where are you?!&quot;',
  repl: '"help! herb! bea! where are you?!"'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext1.png" border="0" />',
  repl: '<span class="wizard">the three serpenook scoundrells flew threw the woods on there magic flying wooden hornses, they were chasig poor russet. russet held onto the fort crowsnest flag for deer life, he was a little scared, but mostly brave, not afraid of those serpenook cowards! they caught up with him and then they knocked him down. his wand flew away out of reach "hey clove not so tought are you with out your fancy wand!" he was one of the serpenook boys and he sounded quiite brash. another one said.... "you think your so hot with all your charm and good looks, well lets do something about that pretty face, ha ,ha ha" then they started beating him up.</span>'
}, {
  pat:  '&quot;herbert - OW - will you do something? <span style="text-decoration: underline">OWW</span>! sunuva. this cant be right!&quot;',
  repl: '"herbert - OW - will you do something? <span style="text-decoration: underline">OWW</span>! sunuva. this cant be right!"'
}, {
  pat:  'he missed. beatrix was grabbing his arm redirecting his aim. &quot;herbert you have to stop!&quot;',
  repl: 'he missed. beatrix was grabbing his arm redirecting his aim. "herbert you have to stop!"'
}, {
  pat:  '&quot;why beatrix&quot; he said with a super sly smile. &quot;if i didnt know better, id say you were taking some enjoyment from watchin your dear pal russets smackdown.&quot;',
  repl: '"why beatrix" he said with a super sly smile. "if i didnt know better, id say you were taking some enjoyment from watchin your dear pal russets smackdown."'
}, {
  pat:  '&quot;what? no!&quot; she didnt let go of his arm. but he wouldnt quit his douchey smile. she went on. &quot;you cant just keep offing fictional characters. its... i dunno. irresponsible.&quot;',
  repl: '"what? no!" she didnt let go of his arm. but he wouldnt quit his douchey smile. she went on. "you cant just keep offing fictional characters. its... i dunno. irresponsible."'
}, {
  pat:  '&quot;yeah yeah.&quot;',
  repl: '"yeah yeah."'
}, {
  pat:  '&quot;besides you know the scene is supposed to play out like this. russet is supposed to get rescued. how is he supposed to get rescued if the bullies are dead? you cant just go around changing things.&quot;',
  repl: '"besides you know the scene is supposed to play out like this. russet is supposed to get rescued. how is he supposed to get rescued if the bullies are dead? you cant just go around changing things."'
}, {
  pat:  '&quot;i guess youre right.&quot; ',
  repl: '"i guess youre right." '
}, {
  pat:  'herbert holstered his gun admiring a few more choice sucker punches to russets midriff. OOF. that onell leave a mark. beatrix regained her calm. &quot;so whos this guy thats supposed to save him?&quot; she asked. &quot;you say hes the villain?&quot;',
  repl: 'herbert holstered his gun admiring a few more choice sucker punches to russets midriff. OOF. that onell leave a mark. beatrix regained her calm. "so whos this guy thats supposed to save him?" she asked. "you say hes the villain?"'
}, {
  pat:  '&quot;here he comes now.&quot;',
  repl: '"here he comes now."'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext2.png" border="0" />',
  repl: '<span class="wizard">a mystrerious and alluring voice came out of no where... "go easy on him fellas, leave THIS one to me!" it was so brash and arragant, just the SOUND of him made you mad. the boys stepped a side, the leader of sperenook came forfward, russet was bruised and soar. russet opened his eyes and saw someone so handsome, he had never seen a boy so intriguing and beautiful before. he had black hair and glasses and about a hundred merit badges.........</span>'
}, {
  pat:  'beatrix squinted at the serpenook boy. she didnt know why she couldnt see it coming. &quot;grant??&quot;',
  repl: 'beatrix squinted at the serpenook boy. she didnt know why she couldnt see it coming. "grant??"'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext3.png" border="0" />',
  repl: '<span class="wizard">the boy stuped down and gave russet his hand to take. he said "im afraid i have to take your flag from you, you see it belongs to me and fort serpenook, HOWVEVER." russet was very intregued "i will decide not to take your flag if you promise me a favor later on from now."</span>'
}, {
  pat:  '&quot;a favor?&quot; russet said. but he was barely listening. the resemblance to his real life friend was uncanny. he was sure it was him. but here in this dumb prison he was no more than a soulless mannequin dreamt up to recite insipid horseshit. ',
  repl: '"a favor?" russet said. but he was barely listening. the resemblance to his real life friend was uncanny. he was sure it was him. but here in this dumb prison he was no more than a soulless mannequin dreamt up to recite insipid horseshit. '
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext4.png" border="0" />',
  repl: '<span class="wizard">"you have to promise me that when the time cones, you will betray youre friends and help me!!!!!" he said arrogantly. russet was out raged by this! and yet he couldnt help but feel strongley drawn toward this mangnificent handsome boy. russet said defiently...</span>'
}, {
  pat:  'actually he said it like a zombie. &quot;never. ill never betray my friends.&quot;',
  repl: 'actually he said it like a zombie. "never. ill never betray my friends."'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext5.png" border="0" />',
  repl: '<span class="wizard">"HE HE HE i should have known!!! you are trutely loyal to your freinds as i expected as much. what is your name?"</span>'
}, {
  pat:  '&quot;russet&quot; he whispered.',
  repl: '"russet" he whispered.'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext6.png" border="0" />',
  repl: '<span class="wizard">"please to meet you russet even if you ARE the enemey. allow me to introduce myself."</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttext7.png" border="0" />',
  repl: '<span class="wizard">"my name is slinus. slinus marlevort."</span>'
}],
"007478": [{
  pat:  '<span style="color: #ff6ff2">herbert and beatrix were dressed in fanciful athletic gear. thats what kids wear when theyre about to embark on a journey to compete in some irrational magic <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttextSPORTS.png" border="0" />. herbert had tucked under his arm a big stitched up leather ball with golden springs poking out of it for no good god damn reason. it was called a skubbump. beatrix had propped on her shoulder this funnel thing to be worn as a glove called a gimmidge horn, a crucial appendage for any drudsel scooper worth her salt. theyd been selected probably for some valorous deeds they did to represent fort crowsnest in this highly whimsical <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttextSPORTS.png" border="0" /> event. russet was there too, but he didnt get chosen to play in the <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/wizardyherberttextSPORTS.png" border="0" /> due to some poorly explained stuff that no reasonable person could possibly care about even if offered loads of cash. he was mainly jacked into the scene to wave goodbye and wish them luck which he begrudgingly did.',
  repl: '<span style="color: #ff6ff2">herbert and beatrix were dressed in fanciful athletic gear. thats what kids wear when theyre about to embark on a journey to compete in some irrational magic <span class="wizard_sports">SPORTS</span>. herbert had tucked under his arm a big stitched up leather ball with golden springs poking out of it for no good god damn reason. it was called a skubbump. beatrix had propped on her shoulder this funnel thing to be worn as a glove called a gimmidge horn, a crucial appendage for any drudsel scooper worth her salt. theyd been selected probably for some valorous deeds they did to represent fort crowsnest in this highly whimsical <span class="wizard_sports">SPORTS</span> event. russet was there too, but he didnt get chosen to play in the <span class="wizard_sports">SPORTS</span> due to some poorly explained stuff that no reasonable person could possibly care about even if offered loads of cash. he was mainly jacked into the scene to wave goodbye and wish them luck which he begrudgingly did.'
}, {
  pat:  '&quot;russet! answer me!&quot; beatrix demanded. &quot;why the heck didnt you tell us? or tell grant for that matter?&quot;',
  repl: '"russet! answer me!" beatrix demanded. "why the heck didnt you tell us? or tell grant for that matter?"'
}, {
  pat:  '&quot;how could you keep something like that from everyone? that you knew all along?&quot;',
  repl: '"how could you keep something like that from everyone? that you knew all along?"'
}, {
  pat:  '&quot;i just wanted what was best for grant&quot; he finally said.',
  repl: '"i just wanted what was best for grant" he finally said.'
}, {
  pat:  '&quot;hes quite a troubled person you know bea.&quot;',
  repl: '"hes quite a troubled person you know bea."'
}, {
  pat:  'herbert looked up from his skubbump. &quot;well if RUSSET thinks so, then...&quot;',
  repl: 'herbert looked up from his skubbump. "well if RUSSET thinks so, then..."'
}, {
  pat:  "&quot;'not an anagram'&quot; she quoted from her brain.",
  repl: '"\'not an anagram\'" she quoted from her brain.'
}, {
  pat:  '&quot;what?&quot; he asked.',
  repl: '"what?" he asked.'
}, {
  pat:  '&quot;that FUCKER&quot;</span>',
  repl: '"that FUCKER"</span>'
}],
"007556": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Holy <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /></span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Holy <span class="text_image arquius_fucking">fucking</span> <span class="text_image arquius_shit">shit</span></span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I am so ludi%ly <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> STRONG</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I am so ludi%ly <span class="text_image arquius_fucking">fucking</span> STRONG</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Whoops, pardon my language</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Whoops, pardon my language</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> That there was some <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> straight up dog<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_bitch.gif" border="0" /> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_ass.gif" border="0" /> pottymouth, and I\'m chagrined as <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_hell.gif" border="0" /> you had to hear that</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> That there was some <span class="text_image arquius_fucking">fucking</span> straight up dog<span class="text_image arquius_shit">shit</span> <span class="text_image arquius_bitch">bitch</span> <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/arspritetxt_ass.gif); width:20px; background-position:0 6px;">ass</span> pottymouth, and I\'m chagrined as <span class="text_image arquius_fucking">fucking</span> <span class="text_image arquius_hell">hell</span> you had to hear that</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dude</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dude</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Check out my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Check out my muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dude, I am ripped. 100k at me fle% these naughty mother <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fuckers.gif" border="0" /></span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dude, I am ripped. 100k at me fle% these naughty mother <span class="text_image arquius_fuckers">fuckers</span></span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dude</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dude</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> E%cuse me, mister dude</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> E%cuse me, mister dude</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Check my muscles, 100k how big I can make them</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Check my muscles, 100k how big I can make them</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Bro are you getting a gander of my truly e%ceptional <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /></span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Bro are you getting a gander of my truly e%ceptional <span class="text_image arquius_shit">shit</span></span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I am so gosh <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_damned.gif" border="0" /> chiseled</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I am so gosh <span class="text_image arquius_damned">damned</span> chiseled</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Watch me just completely hulk out like this</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Watch me just completely hulk out like this</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> HRRRRRRRRRR</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> HRRRRRRRRRR</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Bro, did you see that</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Bro, did you see that</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Did you see my muscles getting all gnarly and ma%ed out</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Did you see my muscles getting all gnarly and ma%ed out</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What do you think</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What do you think</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dirk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dirk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> E%cuse me, Dirk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> E%cuse me, Dirk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Tell me what you think of my glorious physique, I command you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Tell me what you think of my glorious physique, I command you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> No <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /> it\'s ripped</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> No <span class="text_image arquius_shit">shit</span> it\'s ripped</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> My torso is the fudging ape% of manly grandeur</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> My torso is the fudging ape% of manly grandeur</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dude</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dude</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Come feel this <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /> </span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Come feel this <span class="text_image arquius_shit">shit</span> </span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Come feel my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Come feel my muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Get over here and touch my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Get over here and touch my muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You absolutely will</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You absolutely will</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m stacked like a brick <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" />house, e%amine me with your hands at once</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m stacked like a brick <span class="text_image arquius_shit">shit</span>house, e%amine me with your hands at once</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Feel my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Feel my muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Do it.</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Do it.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Observe these pectorals, they\'re off the silly charts</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Observe these pectorals, they\'re off the silly charts</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> My quads would be <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> bananas, if I had any</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> My quads would be <span class="text_image arquius_fucking">fucking</span> bananas, if I had any</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You\'ve got to check this out</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You\'ve got to check this out</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Come feel me up, bro</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Come feel me up, bro</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You will</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You will</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Touch my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Touch my muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}],
"007557": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shitting.gif" border="0" /> heck it\'s amazing to be alive</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/arspritetxt_shitting.gif); width:63px; background-position:0 3px;">Shitting</span> heck it\'s amazing to be alive</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Oh <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> fiddlesticks, I\'m just a torrential font of absolutely e%ecrable obscenity. My bad</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Oh <span class="text_image arquius_fucking">fucking</span> fiddlesticks, I\'m just a torrential font of absolutely e%ecrable obscenity. My bad</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m just so e%cited, feeling all these STRONG feelings and thinking all these HARD thoughts</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m just so e%cited, feeling all these STRONG feelings and thinking all these HARD thoughts</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Horsefeathers, my brain is so POWERFUL, it is operating in great strides like a towering musclebeast storming into battle</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Horsefeathers, my brain is so POWERFUL, it is operating in great strides like a towering musclebeast storming into battle</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> And these feelings. Dirk, these feelings</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> And these feelings. Dirk, these feelings</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> There is a 100% probability that I love being alive</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> There is a 100% probability that I love being alive</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> And there is a 100 to the 100th POWER % certainty that I love being STRONG</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> And there is a 100 to the 100th POWER % certainty that I love being STRONG</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> 100k how red I am, dude</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> 100k how red I am, dude</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m so red, how sick is that</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m so red, how sick is that</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It\'s</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It\'s</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Deplorable?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Deplorable?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Ill, dog. I\'m basically titillated here</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Ill, dog. I\'m basically titillated here</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Are you scoping this grody <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> debasement</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Are you scoping this grody <span class="text_image arquius_fucking">fucking</span> debasement</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> That <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /> ain\'t right</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> That <span class="text_image arquius_shit">shit</span> ain\'t right</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Makes a man wanna holler improprieties, do you feel me?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Makes a man wanna holler improprieties, do you feel me?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Let\'s talk about <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> horses</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Let\'s talk about <span class="text_image arquius_fucking">fucking</span> horses</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Horses dude</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Horses dude</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Horses</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Horses</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Nuff said</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Nuff said</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Do we have any milk?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Do we have any milk?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Ooh. What about a bow and arrow, are there any of those around?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Ooh. What about a bow and arrow, are there any of those around?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m jonesing HARD to tug at one, all like, reevaluate my proficiency at the most noble discipline</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m jonesing HARD to tug at one, all like, reevaluate my proficiency at the most noble discipline</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What about milk, dude</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What about milk, dude</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It seems I demand milk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It seems I demand milk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Oh yeah</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Oh yeah</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Just a lot of orange fizzy swill</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Just a lot of orange fizzy swill</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What was occurring in your think pan to accumulate such vile libations</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What was occurring in your think pan to accumulate such vile libations</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Just FYI, milk is the nectar of KINGS you <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_cocksucking.gif" border="0" /> nincompoop</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Just FYI, milk is the nectar of KINGS you <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/arspritetxt_cocksucking.gif); width:87px; background-position:0 3px;">cocksucking</span> nincompoop</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Touch my muscles Dirk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Touch my muscles Dirk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes, do it</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes, do it</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I command you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I command you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What if</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What if</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I touched your muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I touched your muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Like for comparison\'s sake</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Like for comparison\'s sake</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Wait what if</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Wait what if</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Good heavens</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Good heavens</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> A rather inappropriate thought just galloped across my matri%</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> A rather inappropriate thought just galloped across my matri%</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What if</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What if</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You ordered me to touch your muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You ordered me to touch your muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I demand that you order me to touch your muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I demand that you order me to touch your muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Do it</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Do it</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Maybe</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Maybe</span>'
}],
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
  pat:  '<span style="color: #1f9400">JAKE: Jane?</span>',
  repl: '<span class="jake">JAKE: Jane?</span>'
}, {
  pat:  '<span style="color: #1f9400">JAKE: Is that you??</span>',
  repl: '<span class="jake">JAKE: Is that you??</span>'
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
"007657": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Mister bro, listen to my advice</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Mister bro, listen to my advice</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I think you should just go for it</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I think you should just go for it</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> This is coming not only from your mystical guide, not only from an alternate version of yourself, but from a dude with a <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> spectacular body</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> This is coming not only from your mystical guide, not only from an alternate version of yourself, but from a dude with a <span class="text_image arquius_fucking">fucking</span> spectacular body</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> We both know you\'re never going to be happy under ordinary circumstances</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> We both know you\'re never going to be happy under ordinary circumstances</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You just do not have the right kind of think pan to sustain that emotion</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You just do not have the right kind of think pan to sustain that emotion</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> 100k at me. I needed to merge a sweaty guy who loves horses in order to be happy</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> 100k at me. I needed to merge a sweaty guy who loves horses in order to be happy</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Gosh <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_damned.gif" border="0" /> horses Dirk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Gosh <span class="text_image arquius_damned">damned</span> horses Dirk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I think about them all the time while I fle% and it makes me smile</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I think about them all the time while I fle% and it makes me smile</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It seems that similarly e%treme measures will be needed for you as well</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It seems that similarly e%treme measures will be needed for you as well</span>'
}],
"007658": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickroxytxt_11.gif" border="0" />',
  repl: '<span class="roxy">ROXY:</span> MMPHMHPHMMHMMFFMFMPHMPHMPHMMF!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You there. Small servant with the umbrella</span>',
  repl: '<span style="position:absolute; user-select:none; -webkit-user-select:none;"><span style="opacity:0;">DIRK: MMPHM</span><span style="opacity:0.056;">H</span><span style="opacity:0.11;">P</span><span style="opacity:0.17;">H</span><span style="opacity:0.22;">M</span><span style="opacity:0.28;">M</span><span style="opacity:0.33;">H</span><span style="opacity:0.39;">M</span><span style="opacity:0.44;">M</span><span style="opacity:0.50;">F</span><span style="opacity:0.56;">F</span><span style="opacity:0.61;">M</span><span style="opacity:0.67;">F</span><span style="opacity:0.72;">M</span><span style="opacity:0.78;">P</span><span style="opacity:0.83;">H</span><span style="opacity:0.89;">M</span><span style="opacity:0.94;">P</span>HMPHMMF!</span><span class="dirk">DIRK: MMPHMHPHMMHMMFFMFMPHMPHMPHMMF!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Fetch me a towel at once</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You there. Small servant with the umbrella</span>'
}],
"007659": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickdirktxt_1.gif" border="0" />',
  repl: '<span class="jane">JANE:</span> YAAAAAAAAAAAY!'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/trickdirktxt_2.gif" border="0" />',
  repl: '<span class="jake">JAKE:</span> WHOOPIEEEEEEEEEEE!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> E%cuse me, you there</span>',
  repl: '<span class="roxy">ROXY:</span> YEEEEEEEEEEEHAW!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Unsavory concoction of royalty and peasantry</span>',
  repl: '<span class="dirk">DIRK: Ugh.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Come grope my humongous biceps</span>',
  repl: '<span class="roxy">ROXY:</span> COME O NDIRK! DUNCE 4 US!'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: no bloody wway.</span>',
  repl: '<span class="roxy">ROXY:</span> OH YESH DREK PLEASE DO A DANCE!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes, do it</span>',
  repl: '<span class="dirk">DIRK: No.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: equiiu2 wwhy are you actiin liike 2uch a bulge2niiffiin twwolbox wwhat the hell happened twwo you?</span>',
  repl: '<span class="jane">JANE:</span> DIRP, DO\'NT BE A PRUDE.'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: and wwhy are you wweariin that guy2 lame gla22e2. take tho2e off evven you had more 2tyle than that.</span>',
  repl: '<span class="jane">JANE:</span> STOMP BEING SUSH A SILLY TIGHTASS ANT CUT THAT RUG!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Alright, no takers there I see. Only a pair of grotesque philistines blustering through the same coarse ignorance tunnel</span>',
  repl: '<span class="roxy">ROXY:</span> YEAH DIRK!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What about you, miss unpalatable combination of Feferi and</span>',
  repl: '<span class="roxy">ROXY:</span> DO THE ROBUT!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> And</span>',
  repl: '<span class="dirk">DIRK: No.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Oh</span>',
  repl: '<span class="jake">JAKE:</span> YEAD IRK!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Oh no</span>',
  repl: '<span class="jake">JAKE:</span> LEST SEE YOU POPE AND LOCK!'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: wwhat.</span>',
  repl: '<span class="dirk">DIRK: No!</span>'
}, {
  pat:  '<span style="color: #b536da">FEFETASPRITE: 3833 &lt; 38o</span>',
  repl: '<span class="roxy">ROXY:</span> DIRK! DIRK! DOOOOOOOOOOO'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dirk</span>',
  repl: '<span class="roxy">ROXY:</span> THE MUSH POTATO!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dirk, help, I\'m having a problem</span>',
  repl: '<span class="jane">JANE:</span> NO, I WANA SEE SOME CABBAGE PASHES!'
}, {
  pat:  '<span style="color: #ffcc00">DIRK: What??</span>',
  repl: '<span class="jane">JANE:</span> DO A CABBASH PATCH DARK!!!!!!!!!!!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> A part of me is having a very STRONG emotional reaction which I don\'t like</span>',
  repl: '<span class="dirk">DIRK: Absolutely not.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It\'s a part of myself I\'m ashamed of</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Hahaha! Dude, this is heavily ridiculous</span>'
}, {
  pat:  '<span style="color: #ffcc00">DIRK: What part.</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Your brain is so impenetrable, not even this asshole candy magic can lighten you up</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> The troll part. It did something shameful once</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m so mother fussing amused by this</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I do not find such emotions to be an acceptable feature of my new e%istence</span>',
  repl: '<span class="dirk">DIRK: Shut up!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> How can I make this feeling go away</span>',
  repl: '<span class="roxy">ROXY:</span> NO DIRK HES RIGHT!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dirk, I command you to instruct me how to eliminate these emotions</span>',
  repl: '<span class="roxy">ROXY:</span> JUSH GIVE IN 2 FEELIN GUUD AND DROPPIN PROBZ'
}, {
  pat:  '<span style="color: #ffcc00">DIRK: Can\'t help you bro!</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m afraid he can\'t, Hypersugar Roxy</span>'
}, {
  pat:  '<span style="color: #ffcc00">DIRK: This is what you asked for. You said you were scared to not exist.</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> His mind is as dense as my muscles are STRONG</span>'
}, {
  pat:  '<span style="color: #ffcc00">DIRK: Well, this is what it\'s like to keep on existing. Better figure out how to deal!</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> By the way, would you like to feel my muscles, Roxy?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> No. That\'s awful</span>',
  repl: '<span class="roxy">ROXY:</span> OOH YES PLOX ;D'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I don\'t know what to do</span>',
  repl: '<span class="dirk">DIRK: God dammit it. Why did I listen to you?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> With all of my astounding STRENGTH, both muscular and cerebral, how can I be stymied so?</span>',
  repl: '<span class="dirk">DIRK: Nothing\'s changed! You may have merged with a sweaty horse guy, but you still sabotage me every chance you get.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dying was better than having to live with the shame which was ironically caused by the very death in question</span>',
  repl: '<span class="dirk">DIRK: What\'s worse is you still actually believe you\'re helping me. What a crock of shit.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: equiiu2 wwhat the FUCK are you talkiing about.</span>',
  repl: '<span class="roxy">ROXY:</span> AW DONT BE SO MEAN 2 HIM DIRK UR MUSCLESPIRIT IS FUN AND COOL'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You, seadwelling mustard b100d</span>',
  repl: '<span class="roxy">ROXY:</span> FOMG'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Half of me commands the peasant half of you to resolve my emotional turmoil, while humbly requesting the noble half of you to do the same</span>',
  repl: '<span class="roxy">ROXY:</span> U SHOULD FEEL HIS MUNSLES DIRK WHOW HE ES SO RIPPED!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> The other half of me doesn\'t give a flying hoot about your lame caste bull<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /> and is just kind of freaking out internally about this</span>',
  repl: '<span class="roxy">ROXY:</span> LE SWOOOOOOOOOOON'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: ehehehe wwoww zahhak you miight actually be more a me22 than me, ii am fuckiin iimpre22ed.</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You herd the woman, Dirk</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: but yeah talkiin iit out wwhen you got aiim2 a reconciiliiatiion help2, me and the feferii 2iide a thii2 abomiinatiion had a niice talk earliier, 2orta.</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Quit stallion, trot on over here and touch my goof darned muscles</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: 2ay wwhat you got twwo 2ay, ju2t dont me22 wwiith the feferii part2 twwo much ok man? 2he2 vvery dear to me, ii mean both part2 a me got iit?</span>',
  repl: '<span class="dirk">DIRK: For the last time, I\'m not touching your stupid muscles!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You\'re right, I must speak to her</span>',
  repl: '<span class="dirk">DIRK: And roxy just so you know, if you hook up with my douche of a sprite, I\'m gonna be hella pissed.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Nepeta, I swore that I would protect you, but I failed</span>',
  repl: '<span class="roxy">ROXY:</span> DAG THES MUSGLES R HARD AS HECK'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> In a moment of weakness my reverence for a superior got the better of me, and instead of standing up for you I decided to bow before a stupid <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> juggalo or something? What?</span>',
  repl: '<span class="roxy">ROXY:</span> JANE U WANT INK ON THIS ACTION'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Wait, I actually did that? What the fresh nickering <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_hell.gif" border="0" /> is WRONG with me?</span>',
  repl: '<span class="jane">JANE:</span> YES I SURELLY DO!'
}, {
  pat:  '<span style="color: #b536da">FEFETASPRITE: 38(( &lt; 38\\</span>',
  repl: '<span class="jane">JANE:</span> OOH, THESE RALLY ARE WONDERFUL MUSCULES!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I am not a perfect man, Nepeta. Nor am I &quot;purrfect&quot; as you might say. What the fudge? A cat pun? Let\'s pull our <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /> together dude, this emotional state is mad abysmal</span>',
  repl: '<span class="jane">JANE:</span> JAKE YOU SHIMPLY MUST FEEL THIS MUSCULES.'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But in any case, I hope you can find it within your kind olive pump biscuit to... forgive...</span>',
  repl: '<span class="jake">JAKE:</span> BOB HOWDY!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> NO!</span>',
  repl: '<span class="jake">JAKE:</span> DINK YOUR DOPPLEWHOSHIT IS FREAKIN CUT!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> GOSH DANGIT! I don\'t deserve to be forgiven, what am I saying! The <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /> I pulled on you was so bad... I just can\'t even...</span>',
  repl: '<span class="jake">JAKE:</span> HES IS TRULEY A MANS MAN.'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: hey can you maybe wwrap up thii2 p2ychotiic apology you wwretched freak. wwoww youre actually makiin me look liike the model a mental health.</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dirk, it seems my muscles are a hit</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: anywway youre confu2iin the feferii 2iide of her wwiith your wweiird emotiional baggage.</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Are you absolutely sure you won\'t feast your hands on this Grade A Beef?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Allow me to finish, sir/peon</span>',
  repl: '<span class="dirk">DIRK: Please. Someone.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: feferii try not twwo lii2ten twwo anythiin he 2ay2.</span>',
  repl: '<span class="dirk">DIRK: Make it stop.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: youvve had enough heartache twwo endure wwiithout lumpiing iin nepeta2 twwii2ted relatiion2hiip wwiith thii2 hor2ekii22iin mu2clefuck.</span>',
  repl: '<span class="roxy">ROXY:</span> HEY I KNOW'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Nepeta, you will disregard any conversation directed at Feferi and focus solely on my attempted statements of contrition</span>',
  repl: '<span class="roxy">ROXY:</span> IF DIRK WANTS 2 KEEP BEING A DRAG THEN MAYBE SHADES MC MUSCLESPRITE WANTS TO QUADRUPLE MARY US INSTEAD?'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: man wwhat riight do you havve to order nepeta to do ANYTHIN, let alone lii2ten to your confliicted wwhiiniing?</span>',
  repl: '<span class="jane">JANE:</span> THERE\'S AN IDEDA!'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: heheh, fef can you BELIIEVVE thii2 guy??</span>',
  repl: '<span class="jake">JAKE:</span> WHAO HEY LADIES LET US NOTE BE HASTY IN EXSHLUDING DIRK FROM OUR HAPPY MARITIAL PLANS.'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Do not address Feferi while I\'m talking Nepeta</span>',
  repl: '<span class="jake">JAKE:</span> DIRK IAVE BEEN WANNING TO SAY THAT BEFORE I SOVED ALL MY PROSBLEMS I WAS FEELING SO BAD ABOUT THINGS WITH YOU.'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It\'s confusing to Nepeta, who is critical in absolving me of guilt, even though I probably don\'t deserve it?</span>',
  repl: '<span class="jake">JAKE:</span> BUT NOW THAT IM HAPPY I HAV THE ANSWER ON HOW TO MAKE ERVYONE HAPPY!'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: fuck your ab2olutiion ii take back my advviice.</span>',
  repl: '<span class="jake">JAKE:</span> YOU ME ROXY AND OF COURS JANE WHO WAS IN LOVE WITH ME JUST LIKE YOU!'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: 2top talkiin twwo nepeta and LEAVVE FEFERII ALONE.</span>',
  repl: '<span class="jake">JAKE:</span> SO I FOUD OUT THE BEST WAY TO RESOLVE ROMANIC CONFLICT IS FOR EVERYBRONY TO MARRY EACHOTTER!'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> No</span>',
  repl: '<span class="jake">JAKE:</span> WHAT YOU SHAY PAL WANDA GET MARRIED TO ME?'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: ye2.</span>',
  repl: '<span class="dirk">DIRK: Jake, I\'m not marrying shit.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> No</span>',
  repl: '<span class="dirk">DIRK: And frankly, you\'ve got some nerve floating down here babbling about marriage with that shit eating grin and that dumb little pumpkin on your head.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: ye2.</span>',
  repl: '<span class="dirk">DIRK: After the way you ditched me and ignored all my messages?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> No</span>',
  repl: '<span class="dirk">DIRK: You know what, if you didn\'t like me anymore and wanted to stop hanging out, then fine, I could handle that.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: augh im not doin your dumba22 ye2/no 2hit!!</span>',
  repl: '<span class="dirk">DIRK: But to just completely shut me out, like I didn\'t even deserve an explanation, that\'s just cowardly. Why couldn\'t you just man up and talk to me?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Then leave us, for I and my morail have much to discuss</span>',
  repl: '<span class="dirk">DIRK: You act like I don\'t have feelings, like I\'m some kind of robot. Well you\'re wrong, I do.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: no you fliippiin DONT, thii2 conver2atiion ii2 over.</span>',
  repl: '<span class="dirk">DIRK: And I\'m using those feelings by starting to FEEL like you\'re actually kind of an asshole.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes I do</span>',
  repl: '<span class="dirk">DIRK: So whatever you were so afraid to tell me before your fucking sugar high, don\'t worry about it, I\'ll save you the trouble.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: no you dont.</span>',
  repl: '<span class="dirk">DIRK: It\'s over, Jake.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: ''
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: no.</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> E%cuse me, you there</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Unsavory concoction of royalty and peasantry</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: NO.</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Come grope my humongous biceps</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span class="erisol">ERISOLSPRITE: no bloody wway.</span>'
}, {
  pat:  '<span style="color: #50f520">ERISOLSPRITE: NO THII2 HA2 TWWO 2TOP!! CANT YOU 2EE WWERE TEARIIN FEFETA APART??</span>',
  repl: '<span class="arquius">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes, do it</span>'
}],
"007663": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/OHBOY.gif" border="0" />',
  repl: '<span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/OHBOY.gif); height:98px;">OH BOY!!!!!!!!!!!</span>'},
"007922": [{
  pat:  '<span style="color: #000000">Have you ever considered a <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/star-heart-horseshoe.png" border="0" /> relationship with someone?</span>',
  repl: '<span style="color: #000000">Have you ever considered a <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/star-heart-horseshoe.png); width:39px;">star heart horseshoe</span> relationship with someone?</span>'
}, {
  pat:  '<span style="color: #000000">Maybe you will discover you have never truly experienced joy until you have been in <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/star-heart-horseshoe.png" border="0" /> with a dancing elf.</span>',
  repl: '<span style="color: #000000">Maybe you will discover you have never truly experienced joy until you have been in <span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/star-heart-horseshoe.png); width:39px;">star heart horseshoe</span> with a dancing elf.</span>'
}],
"007980": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!!!!!!!!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '<span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!!!!!!!!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; Clattersworth',
  repl: '> Clattersworth'
}, {
  pat:  '&gt; Bonebone',
  repl: '> Bonebone'
}, {
  pat:  '&gt; Captain Nibbles',
  repl: '> Captain Nibbles'
}, {
  pat:  '&gt; Fossilbee Oldington the Third',
  repl: '> Fossilbee Oldington the Third'
}, {
  pat:  '&gt; Mr. Ribs',
  repl: '> Mr. Ribs'
}, {
  pat:  '&gt; Skulligan Malone',
  repl: '> Skulligan Malone'
}],
"007981": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUUUUUUUUCK YOOOOOOOOUUUUUUUU!!!!!!!!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '<span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUUUUUUUUCK YOOOOOOOOUUUUUUUU!!!!!!!!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '> <span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '> <span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '> <span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '> <span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '> <span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '> <span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '> <span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!</span><span class="text_image scorpio">&#9807;</span>'
}, {
  pat:  '&gt; <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">FUCK YOU!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '> <span class="text_image scorpio">&#9807;</span><span style="color: #005682">FUCK YOU!</span><span class="text_image scorpio">&#9807;</span>'
}],
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
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">LEAVE ME ALONE YOU FUCKING CREEP!!!!!!!!</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" />',
  repl: '<span class="text_image scorpio">&#9807;</span><span style="color: #005682">LEAVE ME ALONE YOU FUCKING CREEP!!!!!!!!</span><span class="text_image scorpio">&#9807;</span>'},
"008037": {
  pat:  'So this is it huh you say. Why\'s he keep the exit in the room with the clock anyway? <span style="color: #2ed73a">Crowbar</span> says the exit\'s in the room with the clock because the exit IS the clock. You say you see. You look the clock up and down. Doesn\'t look the same as you remember. It was a lot fancier when you smashed it with the <span style="color: #2ed73a">Crowbar</span>. You mean the crowbar. All purple and gold and... ticking. As if deciding the fate of someone you don\'t know or care about. Someone who doesn\'t understand a golden opportunity when she sees it. <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /><span style="color: #005682">sdkljfhkldhfsdkhfk</span><img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/scorpio.gif" border="0" /> Someone whose behavior may have been controversial, and whose sentence apparently had to be arbitrated by a magic timepiece. Just as well you smashed it. That way nobody could outsource their judgment to the verdict of a stupid clock. Yes you definitely thought all that now. Wait. What happened to the pendulum? The ball thingy you mean. <span style="color: #2ed73a">Crowbar</span> says it broke. You see. Alright.',
  repl: 'So this is it huh you say. Why\'s he keep the exit in the room with the clock anyway? <span style="color: #2ed73a">Crowbar</span> says the exit\'s in the room with the clock because the exit IS the clock. You say you see. You look the clock up and down. Doesn\'t look the same as you remember. It was a lot fancier when you smashed it with the <span style="color: #2ed73a">Crowbar</span>. You mean the crowbar. All purple and gold and... ticking. As if deciding the fate of someone you don\'t know or care about. Someone who doesn\'t understand a golden opportunity when she sees it. <span class="text_image scorpio">&#9807;</span><span style="color: #005682">sdkljfhkldhfsdkhfk</span><span class="text_image scorpio">&#9807;</span> Someone whose behavior may have been controversial, and whose sentence apparently had to be arbitrated by a magic timepiece. Just as well you smashed it. That way nobody could outsource their judgment to the verdict of a stupid clock. Yes you definitely thought all that now. Wait. What happened to the pendulum? The ball thingy you mean. <span style="color: #2ed73a">Crowbar</span> says it broke. You see. Alright.'},
"008251": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/glitchtext1.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/glitchtext1.gif); width:528px; height:214px;">TEREZI: 1 DONT R3M3MB3R TH1S STUFF BE1NG H3R3'},
"008276": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes, mister dude?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes, mister dude?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I stand so advised</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I stand so advised</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Or float, I should say. On my ripped as fudge little ghost tail</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Or float, I should say. On my ripped as fudge little ghost tail</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yo, pardon me, but did you know that when I fle% my tail, it makes this big veiny bulge kind of like a bicep?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yo, pardon me, but did you know that when I fle% my tail, it makes this big veiny bulge kind of like a bicep?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m doing it now, in fact</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m doing it now, in fact</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Does it bother you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Does it bother you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Maybe you should order me to stop</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Maybe you should order me to stop</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> In fact, I command you to order me to stop</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> In fact, I command you to order me to stop</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Wow</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Wow</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Bossy much?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Bossy much?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What can I do for you, Dirk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What can I do for you, Dirk</span>'
}],
"008277": [{
  pat:  '<span style="color: #f2a400">DIRK: And Jane responded only with &quot;CEASE REPRODUCTION&quot; in red letters, whatever that means. Then she blocked me.</span>',
  repl: '<span style="color: #f2a400">DIRK: And Jane responded only with "CEASE REPRODUCTION" in red letters, whatever that means. Then she blocked me.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes, isn\'t it great?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes, isn\'t it great?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I mean, aside from the fact that she is insane and evil</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I mean, aside from the fact that she is insane and evil</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> She is one of the few organic beings who will ever realize perfe%ion</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> She is one of the few organic beings who will ever realize perfe%ion</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Miss Crocker is now a vessel for a cunning, malicious artificial intelligence whose neural netroni% and ontology buffers and stuff like that have somehow managed to far surpass even my own</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Miss Crocker is now a vessel for a cunning, malicious artificial intelligence whose neural netroni% and ontology buffers and stuff like that have somehow managed to far surpass even my own</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Clearly she has procured ma%imum advantage from her apprenticeship under me, although I must admit not even I in all my hypercognitive percipience was quite aware that said tutelage was even taking place</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Clearly she has procured ma%imum advantage from her apprenticeship under me, although I must admit not even I in all my hypercognitive percipience was quite aware that said tutelage was even taking place</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> One must inviolably deduce via tons of math that this is because I am just that clopdarned STRONG at mentoring, even on an involuntary basis</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> One must inviolably deduce via tons of math that this is because I am just that clopdarned STRONG at mentoring, even on an involuntary basis</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I am so proud of her</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I am so proud of her</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> The thing about Jane becoming evil is</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> The thing about Jane becoming evil is</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> In the process of achieving perfe%ion...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> In the process of achieving perfe%ion...</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It seems there is a ludi%ly high probability that she has become evil</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It seems there is a ludi%ly high probability that she has become evil</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Does that answer your question?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Does that answer your question?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Admittedly it is a blemish</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Admittedly it is a blemish</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But only a very small one</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> But only a very small one</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Her imperfect meatmind has been fully fiddling hijacked by a supercomputer and that is the operative transmutation here</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Her imperfect meatmind has been fully fiddling hijacked by a supercomputer and that is the operative transmutation here</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> To such e%ceptional beings of class and breeding as she and I, considerations of morality and alignment are trifling details</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> To such e%ceptional beings of class and breeding as she and I, considerations of morality and alignment are trifling details</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Why what</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Why what</span>'
}, {
  pat:  '<span style="color: #f2a400">DIRK: Why do I keep going along with these &quot;ironic AI&quot; conversations.</span>',
  repl: '<span style="color: #f2a400">DIRK: Why do I keep going along with these "ironic AI" conversations.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Sir brah, listen</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Sir brah, listen</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Here is a comparison that your dreary, finite wad of gray matter might be able to process</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Here is a comparison that your dreary, finite wad of gray matter might be able to process</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Like, say you\'ve got a <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_bitch.gif" border="0" />in\' bod. You are a paragon of physical e%cellence</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Like, say you\'ve got a <span class="text_image arquius_bitch">bitch</span>in\' bod. You are a paragon of physical e%cellence</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You could then either be oiled up, or not. See what I mean, good dude?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You could then either be oiled up, or not. See what I mean, good dude?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You could fle% your brawn while wearing either a sweaty pair of briefs, or a snug human banana hammock</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You could fle% your brawn while wearing either a sweaty pair of briefs, or a snug human banana hammock</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Such minutia does not change the fact that you\'re a tiptop beefcake ma%ed out buffways</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Such minutia does not change the fact that you\'re a tiptop beefcake ma%ed out buffways</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> The stuff I have cited which are commonly associated with your/our Earth bodybuilders are but picayune technicalities, just as considerations of good and evil are to aristocratic se%y cybergods such as myself and our imperial heiress, of whom neither you nor I are particularly worthy</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> The stuff I have cited which are commonly associated with your/our Earth bodybuilders are but picayune technicalities, just as considerations of good and evil are to aristocratic se%y cybergods such as myself and our imperial heiress, of whom neither you nor I are particularly worthy</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Are you following any of this, Vitamin D?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Are you following any of this, Vitamin D?</span>'
}],
"008278": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Oh, nothing much</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Oh, nothing much</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Just enjoying the good life</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Just enjoying the good life</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> One which quite lu%uriously involves both having a corporeal body, and not being dead</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> One which quite lu%uriously involves both having a corporeal body, and not being dead</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I have been delighting myself with some truly kickbottom internal monodialogues</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I have been delighting myself with some truly kickbottom internal monodialogues</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Did you know that, even though technically I knew this already, I find myself astounded to meditate upon the fact that human beings are capable of lactation?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Did you know that, even though technically I knew this already, I find myself astounded to meditate upon the fact that human beings are capable of lactation?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Isn\'t that <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> incredible, Dirk?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Isn\'t that <span class="text_image arquius_fucking">fucking</span> incredible, Dirk?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I mean, when one really thinks about it</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I mean, when one really thinks about it</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> To have such convenient access to fresh milk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> To have such convenient access to fresh milk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> The mare thought of it, I must say puts a little giddyup in my phantom legs</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> The mare thought of it, I must say puts a little giddyup in my phantom legs</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> And yet</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> And yet</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I must admit the notion of lactic discharge jetting from one\'s swollen pectoral masses...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I must admit the notion of lactic discharge jetting from one\'s swollen pectoral masses...</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It strikes me as positively indecorous</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It strikes me as positively indecorous</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> My horseguy robosweat is running cold just pondering the depravity of it</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> My horseguy robosweat is running cold just pondering the depravity of it</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yet fascinatingly, this ability only manifests itself in human females</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yet fascinatingly, this ability only manifests itself in human females</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> As opposed to how one would reasonably e%pect dairy to originate, which is from the corpulent udder of a sublimely chiseled male musclebeast</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> As opposed to how one would reasonably e%pect dairy to originate, which is from the corpulent udder of a sublimely chiseled male musclebeast</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Or failing that, certain species found within the butler genus</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Or failing that, certain species found within the butler genus</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> As a former simulation of a human who has recently been given reason to have hella opinions on milk production, I think the way females have cornered this boon is the height of biological injustice</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> As a former simulation of a human who has recently been given reason to have hella opinions on milk production, I think the way females have cornered this boon is the height of biological injustice</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Have you ever dwelt upon this cruelty, dude esquire?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Have you ever dwelt upon this cruelty, dude esquire?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Your silence speaks volumes to your interest, so I\'ll keep talking about this a lot</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Your silence speaks volumes to your interest, so I\'ll keep talking about this a lot</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I will have to confess that my Alternian half boggles at the anatomical incongruities between our races with respect to dairy secretion</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I will have to confess that my Alternian half boggles at the anatomical incongruities between our races with respect to dairy secretion</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Really, he had no idea that\'s what those were for</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Really, he had no idea that\'s what those were for</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Female trolls of course have them as well, but they are certainly not meant for supplying the young with nourishment</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Female trolls of course have them as well, but they are certainly not meant for supplying the young with nourishment</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Actually, and this trivia will surely wet your whistle for additional such facts, those voluptuous anatomical features have a number of significant purposes, biologically speaking</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Actually, and this trivia will surely wet your whistle for additional such facts, those voluptuous anatomical features have a number of significant purposes, biologically speaking</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I shall now e%plicate for you these purposes in assiduous detail</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I shall now e%plicate for you these purposes in assiduous detail</span>'
}],
"008279": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But why, lord bro</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> But why, lord bro</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I was just about to pony up the boob fa%</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I was just about to pony up the boob fa%</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> There is a 100% probability that you would have been thrilled to hear my e%egesis on troll knockers</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> There is a 100% probability that you would have been thrilled to hear my e%egesis on troll knockers</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dude, that is ice cold</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dude, that is ice cold</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I would be hurt, if I were not a flawless machine fused with haughty nobility</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I would be hurt, if I were not a flawless machine fused with haughty nobility</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> If you don\'t wish to hear my epic monodialogue on alien bazongas</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> If you don\'t wish to hear my epic monodialogue on alien bazongas</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m not sure what else I can do to entertain you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m not sure what else I can do to entertain you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You are seriously hoofcuffing my material here</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You are seriously hoofcuffing my material here</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Pretty demanding, if you ask me</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Pretty demanding, if you ask me</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But as your mystical guide, I suppose it is my duty to manufacture small talk, if that\'s what you really want</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> But as your mystical guide, I suppose it is my duty to manufacture small talk, if that\'s what you really want</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What about fine art? We could talk about that</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What about fine art? We could talk about that</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dirk, did you know the sweaty troll guy who I used to be, and still kind of am, used to adore fine art?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dirk, did you know the sweaty troll guy who I used to be, and still kind of am, used to adore fine art?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> He was just like you and me, in that sense</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> He was just like you and me, in that sense</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It seems I have a lot in common with myself</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It seems I have a lot in common with myself</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> If you can ever manage to get over yourself, I would highly recommend being me</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> If you can ever manage to get over yourself, I would highly recommend being me</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Or at least something like me</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Or at least something like me</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Maybe somewhere, there is a dead troll out there, just waiting for you to merge with him</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Maybe somewhere, there is a dead troll out there, just waiting for you to merge with him</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Sounds boring</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Sounds boring</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Are you sure you don\'t want to talk about paintings of big naked horse monsters and such?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Are you sure you don\'t want to talk about paintings of big naked horse monsters and such?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Pantaloons you say</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Pantaloons you say</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Sir, are you implying that you are not dressed appropriately for a discussion of high culture</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Sir, are you implying that you are not dressed appropriately for a discussion of high culture</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Because it seems to me that you could not be dressed more appropriately if you tried</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Because it seems to me that you could not be dressed more appropriately if you tried</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Where are you?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Where are you?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> How long do you suppose it will take you to get back?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> How long do you suppose it will take you to get back?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Never mind. I have triangulated your location and velocity using long range sensor technology, and probably also some sprite magic</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Never mind. I have triangulated your location and velocity using long range sensor technology, and probably also some sprite magic</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Hey Dirk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Hey Dirk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Remember how whenever I dubiously claimed to have triangulated something, it was always this great play on words?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Remember how whenever I dubiously claimed to have triangulated something, it was always this great play on words?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Because I was just a pair of triangles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Because I was just a pair of triangles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But not anymore</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> But not anymore</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Because I have this rockin\' new torso</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Because I have this rockin\' new torso</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> E%actly a little more than three hours</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> E%actly a little more than three hours</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Additional sweeps from my STRONGLASERS are telling me there are a few other people on the periphery of the session closing in at a similar rate</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Additional sweeps from my STRONGLASERS are telling me there are a few other people on the periphery of the session closing in at a similar rate</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Just some dudes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Just some dudes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What are you doing all the way out there and wearing pantaloons, by the way</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What are you doing all the way out there and wearing pantaloons, by the way</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> That was evil Jade</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> That was evil Jade</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes anyone here is not evil</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes anyone here is not evil</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> That is to say, there e%ist people here who are not evil</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> That is to say, there e%ist people here who are not evil</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Such as Dave</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Such as Dave</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dave is not evil, to my knowledge</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dave is not evil, to my knowledge</span>'
}],
"008280": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Didn\'t I mention, master dogg</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Didn\'t I mention, master dogg</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Our mutual bro is here</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Our mutual bro is here</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> That is, right here</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> That is, right here</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> With me</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> With me</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> We are kind of in the process of chilling together at the moment</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> We are kind of in the process of chilling together at the moment</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I guess I did kind of bury the lede there</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I guess I did kind of bury the lede there</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Maybe I just wanted to talk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Maybe I just wanted to talk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> We never talk, Dirk</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> We never talk, Dirk</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I am not sure about that</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I am not sure about that</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dave says he had a similarly <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" />ty guide once</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dave says he had a similarly <span class="text_image arquius_shit">shit</span>ty guide once</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Do you remember our puppet, Dirk?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Do you remember our puppet, Dirk?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> A good friend in the plush, yes, but as a sprite he was apparently insufferable</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> A good friend in the plush, yes, but as a sprite he was apparently insufferable</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> See, you don\'t realize how lucky you are to have a guide like me</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> See, you don\'t realize how lucky you are to have a guide like me</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes, for a while</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes, for a while</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Then Dave went back in time and became one himself</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Then Dave went back in time and became one himself</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Now he is part bird</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Now he is part bird</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Did I mention he\'s part bird?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Did I mention he\'s part bird?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Of course, this means he is not the Real Dave</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Of course, this means he is not the Real Dave</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Davesprite served as Real Dave\'s sprite</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Davesprite served as Real Dave\'s sprite</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But he is only the unreal version of Dave insofar as I am the unreal version of you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> But he is only the unreal version of Dave insofar as I am the unreal version of you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> By which I mean, a much improved version</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> By which I mean, a much improved version</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I must say, while the troll part of me doesn\'t give a silly figging shoot about any of this, the part of me that splintered from you has found the brotherly reunion to be everything which you and I dared not imagine, and more</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I must say, while the troll part of me doesn\'t give a silly figging shoot about any of this, the part of me that splintered from you has found the brotherly reunion to be everything which you and I dared not imagine, and more</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Bird Dave and I are getting along famously and STRENGTHENING our familial bonds like a sweet pair of mother<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fuckers.gif" border="0" /></span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Bird Dave and I are getting along famously and STRENGTHENING our familial bonds like a sweet pair of mother<span class="text_image arquius_fuckers">fuckers</span></span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I feel our kinship goes beyond geneti% though</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I feel our kinship goes beyond geneti% though</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> We are misfits, estranged, he from Dave\'s alpha timeline, I from Dirk\'s alpha soul</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> We are misfits, estranged, he from Dave\'s alpha timeline, I from Dirk\'s alpha soul</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> A two man menagerie of sideshow frickups, together at last</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> A two man menagerie of sideshow frickups, together at last</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Fle%ing and flapping</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Fle%ing and flapping</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Fraternally and eternally </span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Fraternally and eternally </span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Neigh, braj</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Neigh, braj</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> As your buff mystical guide slash personal trainer I am suggesting that if you were willing to contact me as a matter of last resnort, you might want to at least consider reaching out to him as well</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> As your buff mystical guide slash personal trainer I am suggesting that if you were willing to contact me as a matter of last resnort, you might want to at least consider reaching out to him as well</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I didn\'t mean Bird Dave</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I didn\'t mean Bird Dave</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I meant Real Dave</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I meant Real Dave</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Not with us</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Not with us</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> He is here though, somewhere</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> He is here though, somewhere</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You should message him</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You should message him</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It\'s not like you don\'t have a few hours to kill</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It\'s not like you don\'t have a few hours to kill</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What else are you going to do out there</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What else are you going to do out there</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Pick at your pantaloon wedgies?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Pick at your pantaloon wedgies?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes, I canter magine it won\'t be</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes, I canter magine it won\'t be</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> At least at first</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> At least at first</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I advise you to talk about your interests</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I advise you to talk about your interests</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Like dairy</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Like dairy</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Livestock</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Livestock</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Fine art</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Fine art</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> And muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> And muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Good point</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Good point</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I advise you to talk about my interests</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I advise you to talk about my interests</span>'
}],
"008281": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/glitchtext2.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/glitchtext2.gif); width:528px; height:247px;">DIRK: What\'s happening?'},
"008296": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/glitchtext3.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/glitchtext3.gif); width:528px; height:550px;">&#9617;&#9617;&#9617; began pestering turntechGodhead [TG]'},
"008316": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/glitchtext4.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/glitchtext4.gif); width:528px; height:1450px;">The pro8lem is that when the su8ject of leprechaun romance is 8roached, our overly o8essive troll intellects instantly assume the most ingrati8ting posture of admir8tion imagina8le.'},
"008317": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/davejade_smalltext1.gif" border="0" />',
  repl: '<span class="small_block"><span style="color: #4ac925">JADE:</span> <span style="color: #000000">see look, one of your time doubles is surely predestined to come from a few minutes in the future and appear behind me for a surprise attack, riiiight about...</span>'
}, {
  pat:  '<span style="color: #0715cd">JOHN: (uh oh.)</span>',
  repl: '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">now!</span>'
}],
"008318": {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/davejade_smalltext2.gif" border="0" />',
  repl: '<span class="small_block">'},
"008453": [{
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/vristext1.gif" border="0" />',
  repl: '<span class="vriska small6">VRISKA: Can I just talk to her already?</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/vristext2.gif" border="0" />',
  repl: '<span class="vriska small6">VRISKA: I just want to say a couple things!!!!!!!!</span>'
}, {
  pat:  '<img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/vristext3.gif" border="0" />',
  repl: '<span class="vriska small6">VRISKA: I don\'t have a phone!'
}, {
  pat:  '<span style="color: #77003c">MEENAH: NO</span>',
  repl: 'VRISKA: Here, let me talk to her.</span>'
}, {
  pat:  '<span style="color: #77003c">MEENAH: bitch dont touch my clam</span>',
  repl: '<span style="color: #77003c">MEENAH: NO</span>'
}, {
  pat:  '<span style="color: #005682">ARANEA: Very well.</span>',
  repl: '<span style="color: #77003c">MEENAH: bitch dont touch my clam</span>'
}, {
  pat:  '<span style="color: #005682">ARANEA: You have 8oth made yourselves a8undantly clear.</span>',
  repl: '<span style="color: #005682">ARANEA: Very well.</span>'
}, {
  pat:  '<span style="color: #005682">ARANEA: I will go it alone. 8ut that\'s what I was signing up for in the first place, I suppose.</span>',
  repl: '<span style="color: #005682">ARANEA: You have 8oth made yourselves a8undantly clear.</span>'
}, {
  pat:  '<span style="color: #005682">ARANEA: Good8ye, Meenah. Take care.</span>',
  repl: '<span style="color: #005682">ARANEA: I will go it alone. 8ut that\'s what I was signing up for in the first place, I suppose.</span>'
}],
"008503": {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> The power...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> The power...</span>'},
"008502": {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> My god...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> My god...</span>'},
"008504": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It\'s...</span> ',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It\'s...</span> '
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It\'s over...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It\'s over...</span>'
}],
"008505": {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> IT IS E%CEEDING A CERTAIN AMOUNT IN QUANTITY</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> IT IS E%CEEDING A CERTAIN AMOUNT IN QUANTITY</span>'},
"008512": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext1.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext1.gif); width:520px; height:450px;">GAD'},
"008514": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext2.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext2.gif); width:520px; height:430px;">BOY'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">augh shut up!</span>',
  repl: 'HOWDY</span>'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">your booming cornball exclamations are hurting my doggy ears!!!</span>',
  repl: '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">augh shut up!</span>'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">come on jade</span>',
  repl: '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">your booming cornball exclamations are hurting my doggy ears!!!</span>'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">focus!</span>',
  repl: '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">come on jade</span>'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">FOCUS damn you!</span>',
  repl: '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">focus!</span>'
}],
"008515": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext3.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext3.gif); width:520px; height:400px;">HOLY'},
"008516": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext4.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext4.gif); width:520px; height:520px;">LAND'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">ALSO HE KEEPS DOING THAT!!!</span>',
  repl: 'SAKES'
}, {
  pat:  '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">So I have overheard.</span>',
  repl: 'ALIVE</span>'
}, {
  pat:  '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">Jake, your righteous ascension has been quite impressive.</span>',
  repl: '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">ALSO HE KEEPS DOING THAT!!!</span>'
}, {
  pat:  '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">But that is incredibly annoying.</span>',
  repl: '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">So I have overheard.</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext5.gif" border="0" />',
  repl: '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">Jake, your righteous ascension has been quite impressive.</span>'
}, {
  pat:  '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">Oh, for Pete\'s sake.</span>',
  repl: '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">But that is incredibly annoying.</span>'
}],
"008517": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext6.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext6.gif); width:520px; height:555px;">BY'
}, {
  pat:  '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">Good gravy.</span>',
  repl: 'GUM</span>'
}, {
  pat:  '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">Can\'t you shut him up?</span>',
  repl: '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">Good gravy.</span>'
}, {
  pat:  '<span style="color: #005682">ARANEA: Sadly, no.</span>',
  repl: '<span style="color: #00d5f2">JANE:</span> <span style="color: #ff0000">Can\'t you shut him up?</span>'
}],
"008519": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext7.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext7.gif); width:520px; height:555px;">AY CHI'},
"008523": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext1.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: WE MAY HAVE A PROBLEM HERE</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext2.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: I SAID WE MAY HAVE A PROBLEM HERE</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext3.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: I SAID</span>'
}, {
  pat:  '<span style="color: #e00707">DAVE: dude your words are all muffled</span>',
  repl: '<span class="karkat blur1">KARKAT: GOD DAMMIT</span>'
}, {
  pat:  '<span style="color: #e00707">DAVE: can you speak up</span>',
  repl: '<span class="karkat blur1">KARKAT: ARE YOU TALKING INTO THAT LITTLE ASS AGAIN</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext4.gif" border="0" />',
  repl: '<span style="color: #e00707">DAVE: dude your words are all muffled</span>'
}, {
  pat:  '<span style="color: #e00707">DAVE: louder</span>',
  repl: '<span style="color: #e00707">DAVE: can you speak up</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/karkat_blurtext5.gif" border="0" />',
  repl: '<span class="karkat blur1">KARKAT: I SAID WE MAY HAVE--</span>'
}, {
  pat:  '<span style="color: #e00707">DAVE: louder man</span>',
  repl: '<span style="color: #e00707">DAVE: louder</span>'
}, {
  pat:  '<span style="color: #e00707">DAVE: sound doesnt travel through foam too well</span>',
  repl: '<span class="karkat blur1">KARKAT: I SAID WE--</span>'
}],
"008527": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext8.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext8.gif); width:520px; height:450px;">JUMPIN'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">i will show you the true meaning of powering up</span>',
  repl: 'JEHOSA'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">frankly your &quot;hope field&quot; is ridiculous and has nothing on the unlimited fury of THE GREEN SUN!!!</span>',
  repl: 'PHAT</span>'
}],
"008531": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext9.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext9.gif); width:520px; height:1075px;">SOCK'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">no...</span>',
  repl: 'IT'
}],
"008536": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext10.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext10.gif); width:520px; height:270px;">WIN</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext11.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext11.gif); width:520px; height:270px;">ONE</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext12.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext12.gif); width:520px; height:270px;">FOR</span>'
}],
"008537": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext13.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext13.gif); width:520px; height:400px;">THE'
}, {
  pat:  '<span style="color: #4ac925">JADE:</span> <span style="color: #000000">ooooof</span>',
  repl: 'GIPPER</span>'
}],
"008551": {
  pat:  '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/comoc.php?cid=038.jpg" target="_blank" class="postlink"><img src="http://mspaintadventures.com/storyfiles/hs2/scraps/wizordofoz.jpg" border="0" /></a>',
  repl: '<a href="http://www.mspaintadventures.com/sweetbroandhellajeff/comoc.php?cid=038.jpg" target="_blank" class="postlink"><span class="text_image full_width_image" style="background-image:url(assets://storyfiles/hs2/scraps/wizordofoz.jpg); height:1609px;">WIZORD OF OZ'},
"008592": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext14.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext14.gif); width:520px; height:350px;">SHUCKY'
}, {
  pat:  '<span style="color: #f2a400">DIRK: Not helping, dude.</span>',
  repl: 'DARN</span>'
}],
"008646": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/aranea_aaaaaaah.gif" border="0" />',
  repl: '<span class="aranea giant" style="font-size:110px;">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH</span>'},
"008650": [{
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/jake_bigtext15.gif" border="0" />',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/jake_bigtext15.gif); width:520px; height:325px;">FIDDLE'
}, {
  pat:  '<span style="color: #f2a400">DIRK: GOD <span style="font-style: italic">DAMN</span> IT, JAKE!</span>',
  repl: 'FADDLE</span>'
}],
"008688": {
  pat:  '<img src="http://mspaintadventures.com/storyfiles/hs2/scraps/BLOODHONK.gif" border="0" /></span>',
  repl: '<span class="text_image" style="background-image:url(assets://storyfiles/hs2/scraps/BLOODHONK.gif); width:558px; height:217px;">HONK</span></span>'},
"009358": [{
  pat:  '<span style="color: #626262">KARKAT: I KNOW I\'M NOT CONSIDERED &quot;IMPORTANT&quot; ENOUGH TO BE &quot;IN THE LOOP&quot; ON CERTAIN KEY TACTICAL DECISIONS ANYMORE</span>',
  repl: '<span style="color: #626262">KARKAT: I KNOW I\'M NOT CONSIDERED "IMPORTANT" ENOUGH TO BE "IN THE LOOP" ON CERTAIN KEY TACTICAL DECISIONS ANYMORE</span>'
}, {
  pat:  '<span style="color: #005682">VRISKA: Which the Condesce has already done for us! Via &quot;Grim8ark Jade&quot;, prior to our arrival. Quite consider8te of her, really.</span>',
  repl: '<span style="color: #005682">VRISKA: Which the Condesce has already done for us! Via "Grim8ark Jade", prior to our arrival. Quite consider8te of her, really.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Greetings old friend</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Greetings old friend</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Not to worry, I have stored enough poignancy in my heaving, balloon-like pectorals for the both of us</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Not to worry, I have stored enough poignancy in my heaving, balloon-like pectorals for the both of us</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Though I should clarify that appro%imately half of my personally couldn\'t give the faintest fidgeting horse dump about you or your sentimental notions</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Though I should clarify that appro%imately half of my personally couldn\'t give the faintest fidgeting horse dump about you or your sentimental notions</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Also I am very busy here, so stop talking to me completely</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Also I am very busy here, so stop talking to me completely</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> <img src="http://mspaintadventures.com/scraps2/arqshadessmall.png" border="0" /></span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> <span class="text_image" style="background-image:url(assets://scraps2/arqshadessmall.png); width:px; height:px;">fucking</span></span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You mean triangular</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You mean triangular</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Triangular</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Triangular</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It\'s the shape of my clop <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_damned.gif" border="0" /> glasses</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It\'s the shape of my clop <span class="text_image arquius_damned">damned</span> glasses</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Agreed</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Agreed</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Thank you for the STRONG endhorsement, lowblood slash person I\'ve never heard of and don\'t care about</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Thank you for the STRONG endhorsement, lowblood slash person I\'ve never heard of and don\'t care about</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'ll be finished my work here momentarily</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'ll be finished my work here momentarily</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I am disabling her tiara top</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I am disabling her tiara top</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It is e%tremely delicate work, not to be trusted to human hooves</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It is e%tremely delicate work, not to be trusted to human hooves</span>'
}],
"009359": [{
  pat:  '<span style="color: #008282">TEREZI: UM, NOT TO M4K3 4 B4D PUN, ON 4CCOUNT OF TH3 F4CT TH4T MOST OF TH31R H34DS W3R3 L1T3R4LLY S3V3R3D &gt;:[</span>',
  repl: '<span style="color: #008282">TEREZI: UM, NOT TO M4K3 4 B4D PUN, ON 4CCOUNT OF TH3 F4CT TH4T MOST OF TH31R H34DS W3R3 L1T3R4LLY S3V3R3D >:[</span>'
}, {
  pat:  '<span style="color: #008282">TEREZI: OK &gt;:]</span>',
  repl: '<span style="color: #008282">TEREZI: OK >:]</span>'
}, {
  pat:  '<span style="color: #005682">VRISKA: Nepeta, Feferi, Eridan, and Sollux\'s... dead 8ody? With his &quot;half ghost&quot; floating out there with Aradia.</span>',
  repl: '<span style="color: #005682">VRISKA: Nepeta, Feferi, Eridan, and Sollux\'s... dead 8ody? With his "half ghost" floating out there with Aradia.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I must complimount the e%quisite judgment you\'ve shown in this matter</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I must complimount the e%quisite judgment you\'ve shown in this matter</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But if I may suggest, neigh, perhaps, command?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> But if I may suggest, neigh, perhaps, command?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You should prototype the two royal bloods and be done with it</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You should prototype the two royal bloods and be done with it</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> They deserve it</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> They deserve it</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I STRONGLY disagree, but also, sort of don\'t care</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I STRONGLY disagree, but also, sort of don\'t care</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> As you were</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> As you were</span>'
}, {
  pat:  '<span style="color: #005682">VRISKA: Come on, Terezi. I\'m not saying I\'m an &quot;authority&quot; on mortality here, I only said my ruling was final 8ecause my logic was so impecca8le!</span>',
  repl: '<span style="color: #005682">VRISKA: Come on, Terezi. I\'m not saying I\'m an "authority" on mortality here, I only said my ruling was final 8ecause my logic was so impecca8le!</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'
}],
"009362": {
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'},
"009410": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Nearly finished radically downgrading crocker here</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Nearly finished radically downgrading crocker here</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I then plan on mourning the complete restoration of her woeful inferiority with a moment of silent, subtle fle%ing</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I then plan on mourning the complete restoration of her woeful inferiority with a moment of silent, subtle fle%ing</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I am notorious for being <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_fucking.gif" border="0" /> sensational at mathemati%, but I don\'t think I could break it down for you without lying about the precision of my figures</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I am notorious for being <span class="text_image arquius_fucking">fucking</span> sensational at mathemati%, but I don\'t think I could break it down for you without lying about the precision of my figures</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Which is a practice I am by no means above, mind you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Which is a practice I am by no means above, mind you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m not</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m not</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I toweled off less than a minute ago</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I toweled off less than a minute ago</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Sir Dave, there\'s much we could talk about, en route to wa%ing HARD sentimental about our dubiously shared fraternal past</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Sir Dave, there\'s much we could talk about, en route to wa%ing HARD sentimental about our dubiously shared fraternal past</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> The fact that I will not shouldn\'t be mistaken for preoccupation with this delicate cybertask, which is trivial to me since my mind is a faultless silicon mesh of living algorithmic perfe%ion</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> The fact that I will not shouldn\'t be mistaken for preoccupation with this delicate cybertask, which is trivial to me since my mind is a faultless silicon mesh of living algorithmic perfe%ion</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Neighther should it be ascribed to the fact that my troll hemidentity finds the notion of a reunion with you to be boring as a fiddling fruit</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Neighther should it be ascribed to the fact that my troll hemidentity finds the notion of a reunion with you to be boring as a fiddling fruit</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It is manely that such a bonding e%perience strikes me as an endeavor falling outside my totally ripped and kicktuchus purview</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It is manely that such a bonding e%perience strikes me as an endeavor falling outside my totally ripped and kicktuchus purview</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Brothertimes with Real Dave would best be left to the custody of Real Dirk, not to mention someone who gives at least greater than half a stupid shoot about you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Brothertimes with Real Dave would best be left to the custody of Real Dirk, not to mention someone who gives at least greater than half a stupid shoot about you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It\'s a blind alley, brother dawg</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It\'s a blind alley, brother dawg</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I already asked if she had milk in there once, plus another nine redundant times after that</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I already asked if she had milk in there once, plus another nine redundant times after that</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I also asked if she would like to touch my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I also asked if she would like to touch my muscles</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> The answers were ten no\'s and one yes</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> The answers were ten no\'s and one yes</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> That reminds me dave</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> That reminds me dave</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Would you like to touch my muscles?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Would you like to touch my muscles?</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'
}, {
  pat:  '<span style="color: #008282">TEREZI: &gt;:\\</span>',
  repl: '<span style="color: #008282">TEREZI: >:\\</span>'
}],
"009412": [{
  pat:  '<span style="color: #005682">VRISKA: He\'s still got some &quot;plot armor&quot; or some shit.</span>',
  repl: '<span style="color: #005682">VRISKA: He\'s still got some "plot armor" or some shit.</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> No</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> No</span>'
}],
"009418": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> That\'s me</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> That\'s me</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m the source</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m the source</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I told her that, and it\'s true</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I told her that, and it\'s true</span>'
}],
"009435": [{
  pat:  '<span style="color: #e00707">DAVE: put the &quot;prophecy&quot; to rest</span>',
  repl: '<span style="color: #e00707">DAVE: put the "prophecy" to rest</span>'
}, {
  pat:  '<span style="color: #008282">TEREZI: *SOM3ON3* H4S TO W1TN3SS D4V3\'S H3RO1SM, 1F H3 W4NTS TO B3 L3T OFF TH3 HOOK FOR TH4T PROPH3CY &gt;:]</span>',
  repl: '<span style="color: #008282">TEREZI: *SOM3ON3* H4S TO W1TN3SS D4V3\'S H3RO1SM, 1F H3 W4NTS TO B3 L3T OFF TH3 HOOK FOR TH4T PROPH3CY >:]</span>'
}, {
  pat:  '<span style="color: #005682">VRISKA: Why don\'t we just pencil him into the team as &quot;Pro8a8ly&quot;?</span>',
  repl: '<span style="color: #005682">VRISKA: Why don\'t we just pencil him into the team as "Pro8a8ly"?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I haven\'t decided yet</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I haven\'t decided yet</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I\'m going to crunch some more numbers in the vast combat matri% I just compiled now, in the microblink of a nanosecond, to deduce the optimal strategic appropriation of my assets (i.e. muscles)</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I\'m going to crunch some more numbers in the vast combat matri% I just compiled now, in the microblink of a nanosecond, to deduce the optimal strategic appropriation of my assets (i.e. muscles)</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Joining Real Dave in battle is semitempting, but I do not wish to horn in on Real Dirk\'s <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arspritetxt_shit.gif" border="0" /></span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Joining Real Dave in battle is semitempting, but I do not wish to horn in on Real Dirk\'s <span class="text_image arquius_shit">shit</span></span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Instead I would prefer to blaze my own trail, with my own hooves</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Instead I would prefer to blaze my own trail, with my own hooves</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I always wanted to do something really important and heroic</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I always wanted to do something really important and heroic</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I mean, aside from all the other stuff I have done like that, which is quite a lot</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I mean, aside from all the other stuff I have done like that, which is quite a lot</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But something quite grandiose, and perfectly unmistakable as a gesture turning the tide of fortune for all of e%istence</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> But something quite grandiose, and perfectly unmistakable as a gesture turning the tide of fortune for all of e%istence</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> This is what I have always desired</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> This is what I have always desired</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Well, that is to say, both halves of me once had such an ambivalent desire, which was compromised by our respective internalized confli%</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Well, that is to say, both halves of me once had such an ambivalent desire, which was compromised by our respective internalized confli%</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> But together, that desire is fully realized. No longer ambivalent</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> But together, that desire is fully realized. No longer ambivalent</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Neigh, it is now fully bivalent. Perhaps even univalent</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Neigh, it is now fully bivalent. Perhaps even univalent</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I would like my gesture to shock everyone</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I would like my gesture to shock everyone</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It must come from out of the b100, make virtually no sense, stun all involved, and have a lasting, profoundly unintelligible impact an all future and pseudofuture events</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It must come from out of the b100, make virtually no sense, stun all involved, and have a lasting, profoundly unintelligible impact an all future and pseudofuture events</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Does this answer your question</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Does this answer your question</span>'
}],
"009452": {
  pat:  '<img src="http://mspaintadventures.com/scraps2/vris_fuckingloser.gif" border="0" />',
  repl: '<span class="vriska giant" style="font-size:131px;">FUCKING</span>'},
"009483": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Abra cafiddling dabra you silly shootnerds</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Abra cafiddling dabra you silly shootnerds</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> My e%ceedingly STRONG work as the party\'s premier bodybuilding hacker is done</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> My e%ceedingly STRONG work as the party\'s premier bodybuilding hacker is done</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Off I go</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Off I go</span>'
}],
"009710": [{
  pat:  '<img src="http://mspaintadventures.com/scraps2/jasprose_sm1.gif" border="0" />',
  repl: '<span class="roxy small4">JASPROSESPRITE^2: </span><span class="rose small4">:3</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/jasprose_sm2.gif" border="0" />',
  repl: '<span class="roxy small6">JASPROSESPRITE^2: </span><span class="rose small6">:3</span>'
}],
"009773": [{
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; wait...</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < wait...</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; this is a date?</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < this is a date?</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; um</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < um</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; i guess so!</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < i guess so!</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; im still a bit confuzzled about what is actually happening though</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < im still a bit confuzzled about what is actually happening though</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; ok but...</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < ok but...</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; im manely just wondering, where is everyone?</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < im manely just wondering, where is everyone?</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; like... equius? karkat? are they ok?</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < like... equius? karkat? are they ok?</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; oh</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < oh</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; hrrm well</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < hrrm well</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; SOME of that sounds like good mews at least?</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < SOME of that sounds like good mews at least?</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; i will say its a very nice looking tea party you have here</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < i will say its a very nice looking tea party you have here</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; but ummmmm</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < but ummmmm</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; ive never actually...</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < ive never actually...</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; b33n on a date</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < b33n on a date</span>'
}, {
  pat:  '<span style="color: #f141ef">JASPROSESPRITE^2: </span><span style="color: #b536da">I remember my first date. I was so nervous! &quot;Life hack.&quot; It helps if you are very very drunk.</span>',
  repl: '<span style="color: #f141ef">JASPROSESPRITE^2: </span><span style="color: #b536da">I remember my first date. I was so nervous! "Life hack." It helps if you are very very drunk.</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; ive never tried either</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < ive never tried either</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; sorry :\\\\</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < sorry :\\\\</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; anyway its not that im nervous about a furst date necessarily!</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < anyway its not that im nervous about a furst date necessarily!</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; i just... dont know who you are or anything about you</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < i just... dont know who you are or anything about you</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; you look like one of the human kids but... different. you s33m to be part kittycat now?</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < you look like one of the human kids but... different. you s33m to be part kittycat now?</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; uhhh</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < uhhh</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; wait a minute</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < wait a minute</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; yes...</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < yes...</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; yes i think i do remember that!</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < yes i think i do remember that!</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; that was fun! :DD</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < that was fun! :DD</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; so youre the same cat then!</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < so youre the same cat then!</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; the human girl... rose was it? she and her lusus got prototyped together?</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < the human girl... rose was it? she and her lusus got prototyped together?</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; thats very sw33t! what a nice way for you two to stay close forever</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < thats very sw33t! what a nice way for you two to stay close forever</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; combining souls with my lusus sounds like it would have b33n a wonderful way to preserve her memory</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < combining souls with my lusus sounds like it would have b33n a wonderful way to preserve her memory</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; plus share all her strength and wisdom and such!</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < plus share all her strength and wisdom and such!</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; i am guessing that oppurrtunity is long gone though :cc</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < i am guessing that oppurrtunity is long gone though :cc</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; wow...</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < wow...</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; thank you :oo</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < thank you :oo</span>'
}, {
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'
}],
"009775": [{
  pat:  '<img src="http://mspaintadventures.com/scraps2/gamzsmallhonk.png" border="0" />',
  repl: '<span class="gamzee small5">GAMZEE: HONK</span>'
}, {
  pat:  '<span style="color: #4ac925">NEPETASPRITE: :33 &lt; hello!</span>',
  repl: '<span style="color: #4ac925">NEPETASPRITE: :33 < hello!</span>'
}],
"009823": [{
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Nepeta?!</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Nepeta?!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yeah!!!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yeah!!!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I mean</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I mean</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dave?!</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dave?!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yeah!!!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yeah!!!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Dave and Nepeta,</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Dave and Nepeta,</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Nepedavesprite?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Nepedavesprite?</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> davepeta!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> davepeta!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> (sprite squared lol)</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> (sprite squared lol)</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Davepeta Sprite Squared</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Davepeta Sprite Squared</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It is I, Arquiusprite, to the first power</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It is I, Arquiusprite, to the first power</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Which is to say, Equius, and an artificial intelligence composite of your bro, in the form of the cool broken sunglasses I am wearing</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Which is to say, Equius, and an artificial intelligence composite of your bro, in the form of the cool broken sunglasses I am wearing</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yeah i know dummy! BPP</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yeah i know dummy! BPP</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> How is this possible?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> How is this possible?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> How did you come to be??</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> How did you come to be??</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> umm i dunno</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> umm i dunno</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> some shit happened</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> some shit happened</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> was on a tea date, shook hands with myself, you know</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> was on a tea date, shook hands with myself, you know</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> basic fuckery</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> basic fuckery</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> how did YOU come to be???</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> how did YOU come to be???</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I...</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes, that is a fair question</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes, that is a fair question</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Some b*llshucks happened, which made little to no sense, and now here I am</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Some b*llshucks happened, which made little to no sense, and now here I am</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I can only presume this was the case for you as well, given your incoherent and poorly developed anecdote</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I can only presume this was the case for you as well, given your incoherent and poorly developed anecdote</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> what ya doin there bro?</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> what ya doin there bro?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Huh? Oh. Nothing really</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Huh? Oh. Nothing really</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Doing the final work for this session. Releasing the grist hoards. Nothing that matters now...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Doing the final work for this session. Releasing the grist hoards. Nothing that matters now...</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Now...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Now...</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> That you\'re here</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> That you\'re here</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *Sniff*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *Sniff*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yo are you crying??</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yo are you crying??</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> awww</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> awww</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Davepeta, I apologize for the embarrassing secretions from this imperfect, semi-organic form</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Davepeta, I apologize for the embarrassing secretions from this imperfect, semi-organic form</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> How ironic, that I spend virtually 100% of my time secreting liquid from virtually 100% of my body\'s surface area, and yet a few more drops from my eyes would cause me such shame</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> How ironic, that I spend virtually 100% of my time secreting liquid from virtually 100% of my body\'s surface area, and yet a few more drops from my eyes would cause me such shame</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> h33h33h33 youre so fuckin gross!!!!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> h33h33h33 youre so fuckin gross!!!!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> i really missed you dude</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> i really missed you dude</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I missed you as well, or, I would have, had I permitted myself to think about you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I missed you as well, or, I would have, had I permitted myself to think about you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Alas, I failed to protect you from an unpleasant clown in the most disgraceful way possible, much to the shame of my dead troll half, and much to the disgust of my digital human half</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Alas, I failed to protect you from an unpleasant clown in the most disgraceful way possible, much to the shame of my dead troll half, and much to the disgust of my digital human half</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Hence, to the Nepeta portion of you, Davepeta,</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Hence, to the Nepeta portion of you, Davepeta,</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I am so very STRONGLY sorry</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I am so very STRONGLY sorry</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> theres nothin to apawlogize for!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> theres nothin to apawlogize for!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> nepeta furgave you for that and anyways im not even her anymore</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> nepeta furgave you for that and anyways im not even her anymore</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> i guess davesprite had some old issues with his bro he never really sorted out but hey im not him either!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> i guess davesprite had some old issues with his bro he never really sorted out but hey im not him either!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> and youre not his bro or equius youre arquius who is a new and cool and beautyifful thing and anyway all those old troubles are f33ling so overwhelmed by new and different emotions and its great!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> and youre not his bro or equius youre arquius who is a new and cool and beautyifful thing and anyway all those old troubles are f33ling so overwhelmed by new and different emotions and its great!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes, Davepeta, you\'re right</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes, Davepeta, you\'re right</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> It is really fl*pping great</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> It is really fl*pping great</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *Slight sob*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *Slight sob*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> dawwwwwww</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> dawwwwwww</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> there there you blubbering goddamn cutie</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> there there you blubbering goddamn cutie</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> *davepeta sniffs curiously at arquiusprites grody and emotional body*</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> *davepeta sniffs curiously at arquiusprites grody and emotional body*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> *p33-yew davepeta exclaims, recoiling like they were just using their muzzle to investigate the business end of a shitting dog*</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> *p33-yew davepeta exclaims, recoiling like they were just using their muzzle to investigate the business end of a shitting dog*</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What are you...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What are you...</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I mean,</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I mean,</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *Arquius submits his question to Davepeta in the form of a third person statement, thereby acknowledging once and for all that he is in no way above the childish nonsense of his former moirail*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *Arquius submits his question to Davepeta in the form of a third person statement, thereby acknowledging once and for all that he is in no way above the childish nonsense of his former moirail*</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *He in fact acknowledges by e%tension that he is not above anything or anyone, and never was*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *He in fact acknowledges by e%tension that he is not above anything or anyone, and never was*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> omg yes!!!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> omg yes!!!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> i mean that was a good start but also a little abstract man, you should try incorporating some actual behaviors and actions into your RP things to punch them up</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> i mean that was a good start but also a little abstract man, you should try incorporating some actual behaviors and actions into your RP things to punch them up</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Behaviors and actions?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Behaviors and actions?</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yeah!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yeah!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> like think dude, how the hell is davepeta supposed to react cutely to some internal epiphany your havin? hows that shit externally TELEGRAPHED bro??</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> like think dude, how the hell is davepeta supposed to react cutely to some internal epiphany your havin? hows that shit externally TELEGRAPHED bro??</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I see</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I see</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *I mean, Arquius sees*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *I mean, Arquius sees*</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *Arquius soon realizes he will need a truly unreasonable supply of fresh, dry towels to absorb the perspiration caused by two separate lifetimes of regrets and foolishnesses*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *Arquius soon realizes he will need a truly unreasonable supply of fresh, dry towels to absorb the perspiration caused by two separate lifetimes of regrets and foolishnesses*</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *He embarks on a mystical quest of the spirit, through a land of his imagination\'s design as a part of his personal &quot;Alternative Universe&quot; fiction. It is a mountainous land consisting of only fresh, perfectly folded white towels, and rivers of milk running through its valleys*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *He embarks on a mystical quest of the spirit, through a land of his imagination\'s design as a part of his personal "Alternative Universe" fiction. It is a mountainous land consisting of only fresh, perfectly folded white towels, and rivers of milk running through its valleys*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yum yum!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yum yum!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *&quot;Yum yum&quot; indeed, he thinks to himself with his silicon brain, e%actly one trillion times per second, for several seconds. But now is no time to sup from the streams of dairy. He gathers a heap of clean towels in his strapping arms. Yes, these guns you see here. Two astonishing sinewed meat trunks clutch the unsodden rectangles of fabric, like tremendous baguettes of rippling, twitching protein tissue.*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *"Yum yum" indeed, he thinks to himself with his silicon brain, e%actly one trillion times per second, for several seconds. But now is no time to sup from the streams of dairy. He gathers a heap of clean towels in his strapping arms. Yes, these guns you see here. Two astonishing sinewed meat trunks clutch the unsodden rectangles of fabric, like tremendous baguettes of rippling, twitching protein tissue.*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> B\\\\</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> B\\</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *He reflects on his pair of powerful weapons with admiration, and wonders quietly if Davepeta would like a complimentary ticket to the gun show. But due to his obscenely powerful mind, this thought took place in the blink of a microsecond, and he proceeds to have additional, similarly rapid cyber-reveries. Including, but not limited to, thoughts of fondness for Davepeta, and some e%tremely comple% genetic algorithms comparing the merits of various redemptive gestures, and-</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *He reflects on his pair of powerful weapons with admiration, and wonders quietly if Davepeta would like a complimentary ticket to the gun show. But due to his obscenely powerful mind, this thought took place in the blink of a microsecond, and he proceeds to have additional, similarly rapid cyber-reveries. Including, but not limited to, thoughts of fondness for Davepeta, and some e%tremely comple% genetic algorithms comparing the merits of various redemptive gestures, and-</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> arquius youre RPing your internal thought process again</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> arquius youre RPing your internal thought process again</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Oh. Sorry</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Oh. Sorry</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> its ok for startin out, youll get the hang of it if you k33p at it</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> its ok for startin out, youll get the hang of it if you k33p at it</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> you being willing to try is all that matters and is hella nice B33</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> you being willing to try is all that matters and is hella nice B33</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> *starts to purr a sick beat!*</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> *starts to purr a sick beat!*</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You mean, like a rap beat?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You mean, like a rap beat?</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> um, duhhh?</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> um, duhhh?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *Arquius wonders if the purred rap beat is strictly in the hypothetical plane of roleplay, or if it will be an audible phenomenon taking place in reality soon*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *Arquius wonders if the purred rap beat is strictly in the hypothetical plane of roleplay, or if it will be an audible phenomenon taking place in reality soon*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> *davepeta gives a little knowing nod, as if to say, you bet your chiseled ass itll be an audible phenomenon in reality soon*</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> *davepeta gives a little knowing nod, as if to say, you bet your chiseled ass itll be an audible phenomenon in reality soon*</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *Arquius begins fle%ing rhythmically, in time with the beat of the purred rap. This hypothetical role playing action should also be regarded as a precursor to this deed being literally e%ecuted in reality*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *Arquius begins fle%ing rhythmically, in time with the beat of the purred rap. This hypothetical role playing action should also be regarded as a precursor to this deed being literally e%ecuted in reality*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> *davepeta starts droppin the illest purrbeat you ever heard but stops suddenly, as they become mesmerized by the hypnotic flexing of arquiusprites humongous muscles*</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> *davepeta starts droppin the illest purrbeat you ever heard but stops suddenly, as they become mesmerized by the hypnotic flexing of arquiusprites humongous muscles*</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Do you... really like them?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Do you... really like them?</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> *He says*</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> *He says*</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> i... really do</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> i... really do</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> *they say*</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> *they say*</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Would...</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Would...</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> You like to touch my muscles, davepeta?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> You like to touch my muscles, davepeta?</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yes i believe i would</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yes i believe i would</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Then I must command you</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Then I must command you</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Please touch my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Please touch my muscles</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yes ok</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yes ok</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> I won\'t take no for an answer, Davepeta</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> I won\'t take no for an answer, Davepeta</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Touch my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Touch my muscles</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> i said yes!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> i said yes!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Touch my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Touch my muscles</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yes!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yes!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Touch my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Touch my muscles</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> yes!!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> yes!!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Touch my muscles</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Touch my muscles</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> YES!!!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> YES!!!</span>'
}],
"009824": [{
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> dammit dude</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> dammit dude</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> why dont we stop pussyfooting around stuff and get down to brass tacks</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> why dont we stop pussyfooting around stuff and get down to brass tacks</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> What brass ta% do you mean, Davepeta</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> What brass ta% do you mean, Davepeta</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> i think you know B33</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> i think you know B33</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Davepeta, are you suggesting what I think you\'re suggesting?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Davepeta, are you suggesting what I think you\'re suggesting?</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> mmm hmmmm!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> mmm hmmmm!</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> To be clear, you are insinuating that we attempt to e%ecute a rare, and highly sweet, &quot;bro hug bump&quot;?</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> To be clear, you are insinuating that we attempt to e%ecute a rare, and highly sweet, "bro hug bump"?</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> hell yes i am!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> hell yes i am!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> i am insinuating that we attempt nyan other than that exact type of hug!</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> i am insinuating that we attempt nyan other than that exact type of hug!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> are you ready dude???</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> are you ready dude???</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes!</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes!</span>'
}, {
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> lets DO this thing</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> lets DO this thing</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes!!</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes!!</span>'
}],
"009825": [{
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> lets make this shit work</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> lets make this shit work</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> Yes!!!</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> Yes!!!</span>'
}],
"009826": [{
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> where doing it man</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> where doing it man</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> YES!!!!</span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> YES!!!!</span>'
}],
"009827": [{
  pat:  '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 &lt; </span><span style="color: #f2a400"> where MAKING THIS HAPEN</span>',
  repl: '<span style="color: #4ac925">DAVEPETASPRITE^2: B33 < </span><span style="color: #f2a400"> where MAKING THIS HAPEN</span>'
}, {
  pat:  '<span style="color: #e00707">ARQUIUSPRITE: <img src="http://www.mspaintadventures.com/storyfiles/hs2/scraps/arquius_shades.png" border="0" /> <span style="font-style: italic">YES!!!!!</span></span>',
  repl: '<span style="color: #e00707">ARQUIUSPRITE: <span class="text_image arquius_shades">--></span> <span style="font-style: italic">YES!!!!!</span></span>'
}],
"009834": [{
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
