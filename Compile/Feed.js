function pug_rethrow(n,e,r,t){if(!(n instanceof Error)){throw n;}if(!('undefined'===typeof window&&e||t)){throw n.message+=' on line '+r,n;}try{t=t||require('fs').readFileSync(e,'utf8');}catch(e){pug_rethrow(n,null,r);}var i=3,a=t.split('\n'),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?'  > ':'    ')+t+'| '+n;}).join('\n');throw n.path=e,n.message=(e||'Pug')+':'+r+'\n'+i+'\n\n'+n.message,n;}function template(locals) {var pug_html = '', pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {'src\u002Fjs\u002Fviews\u002FFeed.pug':'div.feed\r\n  h1 Feed Page\r\n  p This is the feed page content.'};
  ;pug_debug_line = 1;pug_debug_filename = 'src\u002Fjs\u002Fviews\u002FFeed.pug';
  pug_html = pug_html + '\u003Cdiv class="feed"\u003E';
  ;pug_debug_line = 2;pug_debug_filename = 'src\u002Fjs\u002Fviews\u002FFeed.pug';
  pug_html = pug_html + '\u003Ch1\u003E';
  ;pug_debug_line = 2;pug_debug_filename = 'src\u002Fjs\u002Fviews\u002FFeed.pug';
  pug_html = pug_html + 'Feed Page\u003C\u002Fh1\u003E';
  ;pug_debug_line = 3;pug_debug_filename = 'src\u002Fjs\u002Fviews\u002FFeed.pug';
  pug_html = pug_html + '\u003Cp\u003E';
  ;pug_debug_line = 3;pug_debug_filename = 'src\u002Fjs\u002Fviews\u002FFeed.pug';
  pug_html = pug_html + 'This is the feed page content.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E';} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}