webpackJsonp([0x7af4e6fc7393],{1092:function(e,t){e.exports={pathContext:{group:[{node:{id:"41620f96-21d8-4128-b0d0-70f4d77ec6c8",title:"R U Talkin' R.E.M. RE: ME?",link:"http://www.earwolf.com/show/u-talkin-u2-to-me/",body:{value:"<p>It's very hard to explain why, but I consider '<a href=\"http://www.earwolf.com/show/u-talkin-u2-to-me/\">U Talkin' U2 2 Me?</a>' to be the greatest podcast of all time. Possibly just one of my favorite <em>things</em> of all time. I don't like U2 all that much, yet somehow hearing Scott and Scott break down U2's entire discography over 24 episodes was something I saved for special occasions and often laughed to the point of tears while listening to. And boy, did they ever spend a lot of time talking about the band U2 (not really.)  They even knew the names of every single member of the band. Truly encyclopedic knowledge.</p>\r\n\r\n<p>And now Scott and Scott are back with '<a href=\"http://www.earwolf.com/show/u-talkin-u2-to-me/\">R U Talkin' R.E.M. RE: ME?</a>' in which they explore the output of the band R.E.M in what I'm sure will be painstaking detail. I like R.E.M. more than I like U2, but I can't say I would ever want to go through their entire back catalog. Yet somehow here we are again, and I'm excited to hear all about the album Monster. Listening today was just like old times. Can't wait to save for long road trips and laugh to the point of nearly driving off the road.</p>\r\n\r\n <p>If you're looking for more info on what the hell this is all about, this <a href=\"https://www.stereogum.com/1981761/talkin-to-scott-aukerman-re-u-talkin-r-e-m-re-me/franchises/interview/\">Stereogum interview</a> is as good a place as any. It might just confuse you more, which is par for the course.</p>\r\n\r\n<p>Good ep.</p>"},relationships:{image:null},fields:{slug:"/link/r-u-talkin'-r.e.m.-re:-me/"},post_type:"link",created:1519265586}},{node:{id:"f8c05988-e9df-4d5c-bd3f-e1a2b6011cb1",title:"Decoupled Drupal Dumb Problems: Malformed Markup",link:null,body:{value:'<p><a href="https://www.drupal.org/u/e0ipso">Mateu</a> has many of the Decoupled Drupal <a href="https://www.lullabot.com/articles/decoupled-drupal-hard-problems-image-styles">Hard</a> <a href="https://www.lullabot.com/articles/decoupled-hard-promblems-routing">Problems</a> well covered, so I\'ll take care of one of the dumb ones.</p>\r\n\r\n<p>I noticed last weekend that the build was broken for this site - post switching on the homepage wasn\'t working, and as you scrolled down, posts started to be wrapped in the container for the previous post. I tried a new Gatsby build and saw the same thing. Next, I zeroed in on the post where content started overlapping and eventually noticed that I had some malformed markup in my post in Drupal - a missing closing quote for a href attribute. After updating the post to add the missing quote and doing another build, everything was fine again.</p>\r\n\r\n<p>You could chalk most of this up to me - if I was using a wysiwyg editor it would have added the correct link markup for me, and I should probably be taking a closer look at my build after it goes to GitHub Pages. But I think this hiccup was a nice reminder of the reality of these super sexy decoupled architectures. We lose a bit of the protection that Drupal provided us from something like malformed markup in a body field making a page explode.  Builds will break in ways that they didn\'t with Drupal alone - the site worked fine in development mode but broke when the production bundle was built. And while testing is always important, we likely need to test in ways that are different from when we were testing Drupal by itself.</p>\r\n\r\n<p>There are lessons to be learned even in the dumbest of problems. I\'m sure I\'ll run into some more.</p>'},relationships:{image:null},fields:{slug:"/post/decoupled-drupal-dumb-problems:-malformed-markup/"},post_type:"post",created:1519140479}},{node:{id:"083c9991-1e9b-4aaa-bf51-1c57df383ea7",title:"jQuery and Drupal 8.4 Upgrades",link:null,body:{value:'<p>Learned the hard way recently that Drupal 8.4 upgrades jQuery to jQuery 3.  This kills a few methods that were deprecated in previous versions of jQuery including .load(), .unload(), .error(), and .size().  The <a href="https://www.drupal.org/project/drupal/releases/8.4.0">release notes</a> cover this, but it didn\'t fully click until I actually ran into the issue.</p>\r\n<p>Related: is a minor release really a minor release if it contains major release upgrades for a couple of your largest dependencies?</p>'},relationships:{image:null},fields:{slug:"/note/jquery-and-drupal-8.4-upgrades/"},post_type:"note",created:1519075633}},{node:{id:"60ceb57d-8287-447a-b643-69d1ac70f581",title:"No More Guns Please",link:"http://www.chicagotribune.com/news/local/breaking/ct-met-shooting-hyatt-hotel-20180216-story.html",body:{value:"<blockquote>\r\n<p>Theresa Nicholls was eager to get back home as she packed her bags at the Hyatt Regency Chicago on Friday.</p>\r\n<p>Her weeklong conference of school psychologists had been rocked by the mass shooting at a Florida high school. A day earlier, a Chicago police officer had been shot and killed in the Loop, just blocks from where she and her colleagues were staying.</p>\r\n<p>As she was getting ready to check out, a friend texted her: There had just been a shooting in the lobby of her hotel.</p>\r\n<p>“What the hell is going on?\" she thought. \"What is happening? It’s like the world is falling apart around us.”</p>\r\n</blockquote>\r\n<p>My wife was at this conference. There are a lot of reasons we need to do something about America's access to guns.  Let's add this one to the list.</p>"},relationships:{image:null},fields:{slug:"/link/no-more-guns-please/"},post_type:"link",created:1519066208}},{node:{id:"800ee848-00e3-431b-95f5-e7262013e6e9",title:"React For Drupal",link:"https://www.reactfordrupal.com/",body:{value:"<p>A great collection of resources on creating decoupled applications with Drupal and React from the Lullabot folks.  Hope to contribute a link or two at some point.</p>"},relationships:{image:null},fields:{slug:"/link/react-for-drupal/"},post_type:"link",created:1519065606}}],pathPrefix:"",first:!1,last:!1,index:7,pageCount:10,additionalContext:{}}}}});
//# sourceMappingURL=path---7-f15c6494248cc39c93c9.js.map