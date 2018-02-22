webpackJsonp([0x9ede6228d3fe],{1042:function(e,t){e.exports={data:{nodePost:{title:"Decoupled Drupal Dumb Problems: Malformed Markup",body:{value:'<p><a href="https://www.drupal.org/u/e0ipso">Mateu</a> has many of the Decoupled Drupal <a href="https://www.lullabot.com/articles/decoupled-drupal-hard-problems-image-styles">Hard</a> <a href="https://www.lullabot.com/articles/decoupled-hard-promblems-routing">Problems</a> well covered, so I\'ll take care of one of the dumb ones.</p>\r\n\r\n<p>I noticed last weekend that the build was broken for this site - post switching on the homepage wasn\'t working, and as you scrolled down, posts started to be wrapped in the container for the previous post. I tried a new Gatsby build and saw the same thing. Next, I zeroed in on the post where content started overlapping and eventually noticed that I had some malformed markup in my post in Drupal - a missing closing quote for a href attribute. After updating the post to add the missing quote and doing another build, everything was fine again.</p>\r\n\r\n<p>You could chalk most of this up to me - if I was using a wysiwyg editor it would have added the correct link markup for me, and I should probably be taking a closer look at my build after it goes to GitHub Pages. But I think this hiccup was a nice reminder of the reality of these super sexy decoupled architectures. We lose a bit of the protection that Drupal provided us from something like malformed markup in a body field making a page explode.  Builds will break in ways that they didn\'t with Drupal alone - the site worked fine in development mode but broke when the production bundle was built. And while testing is always important, we likely need to test in ways that are different from when we were testing Drupal by itself.</p>\r\n\r\n<p>There are lessons to be learned even in the dumbest of problems. I\'m sure I\'ll run into some more.</p>'},created:1519140479}},pathContext:{slug:"/post/decoupled-drupal-dumb-problems:-malformed-markup/"}}}});
//# sourceMappingURL=path---post-decoupled-drupal-dumb-problems-malformed-markup-8896025da3a83c0994ab.js.map