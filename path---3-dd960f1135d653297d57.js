webpackJsonp([0xa66b96fba949],{1091:function(e,t){e.exports={pathContext:{group:[{node:{id:"bcc1f98d-3a51-4df3-aa59-e62c885cbecd",title:"Tome - A Drupal 8 Static Site Generator",link:"https://tome.fyi/",body:{value:'<p>With projects like <a href="https://www.gatsbyjs.com/">Gatsby</a> continuing to grow, the static site generator trend does not seem to be going anywhere. While <a href="https://www.gatsbyjs.org/packages/gatsby-source-drupal/">Gatsby can play nice with Drupal</a> (this site being an example,) the process could be a little easier. As a result, I was happy to see the announcement of <a href="https://tome.fyi/">Tome</a> yesterday.</p>\r\n\r\n<p>Tome is a self described "static site generator lovingly crafted with Drupal 8." I think having a solid Drupal-only alternative could be really useful for folks who aren\'t ready to dive into something like React in order to use Gatsby. I ran through the <a href="https://tome.fyi/docs/getting-started/">getting started tutorial</a> and while I did run into <a href="https://www.drupal.org/project/tome/issues/2980514">an issue with generated images</a>, I was impressed with what I saw so far.</p>'},relationships:{image:null},fields:{slug:"/link/tome-a-drupal-8-static-site-generator/"},post_type:"link",created:1529421784}},{node:{id:"979f0840-0aff-4549-b733-5a6c0cbd1543",title:"Twin Cities Drupal Camp Recap",link:null,body:{value:'<p>Sure, I missed the Friday night camp party to go to the Twins game for Prince night, but how can I complain when I got this photo out of it?</p>\r\n\r\n<p>I wasn\'t sure I was going to be able to make it to Twin Cities Drupal Camp this year as I had a little too much travel lined up. I even went as far as telling <a href="https://www.drupal.org/u/stpaultim">Tim Erickson</a> at DrupalCon that I wasn\'t going to attend. However, after hearing that a few other HS2 folks would be submitting sessions I couldn\'t resist. I eventually decided that I\'d lean into the Drupal Camp wave and attend as many as I could this season. So I walked into the University of St. Thomas atrium with my head held high, but as a dirty liar.</p>\r\n\r\n<p>Once things kicked off, I was immediately glad that I had this change of heart. Twin Cities has a wonderful Drupal community with a camp that is well run and has been very supportive of me and <a href="http://2017.tcdrupal.org/session/user-onboarding-and-legend-zelda">my craziest ideas</a> for a few years now. I would have been really sad to have missed it. I was even able to continue the good community vibes with the first session of the camp I attended - <a href="https://2018.tcdrupal.org/session/drupal-and-music-industry-learning-our-success">Drupal and the Music Industry - Learning from our Success</a>. Hearing about all of the music industry sites that are or have been powered by Drupal was a nice reminder that our work can impact the world at large, and even sites our parents and/or kids use. Who needs whitehouse.gov when we\'ve got Justin Bieber?</p>\r\n\r\n<p>The camp also served as a nice opportunity to catch up with past and present co-workers, many who were giving talks.</p>\r\n\r\n<ul>\r\n<li>Was able to catch Will Long\'s <a href="https://2018.tcdrupal.org/session/next-level-twig-extensions">Next Level Twig: Extensions</a> which gave a nice concise overview of popular twig extensions in the contrib space and examples of how to implement your own.</li>\r\n<li>Will was also part of the <a href="https://2018.tcdrupal.org/session/civicrm-secrets-drupalers">CiviCRM Secrets for Drupalers</a> session which provided my first introduction to the <a href="https://civicrm.org/">CiviCRM</a> project and some background on the Drupal integration that the folks at <a href="https://www.mydropwizard.com/">myDropWizard</a> are building for it.</li>\r\n<li>In <a href="https://2018.tcdrupal.org/session/drupal-8-migrate-its-not-rocket-science">Drupal 8 Migrate: It\'s not rocket science...</a> Jack Franks provided one of his typically fun and engaging live demos - this time doing live migrations against NASA APIs. He also gets bonus points for rolling with his computer freezing mid presentation, and also incorporating a partial config import into the demo based on one of my comments during the Q&A.</li>\r\n<li>Finally current HS2 colleague Chris Greatens presented <a href="https://2018.tcdrupal.org/session/hello-username-personalization-everyone">Hello [user:name]: Personalization for Everyone</a> which provided an excellent overview of personalization concepts, along with a look at some examples of some poorly executed uses of personalization. Those personalization missteps inspired quite a bit of discussion from attendees in the Q&A.</li>\r\n</ul>\r\n\r\n<p><em><a href="https://2018.tcdrupal.org/session/component-based-theming-ui-patterns-and-pattern-lab">Component Based Theming With UI Patterns and Pattern Lab</a></em></p>\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/bKD7QZVq9SM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n\r\n<p>This was my second time in 7 days speaking about the UI Patterns module, but I added a little Pattern Lab specific content this time around.  It was another <a href="http://shellmultimedia.com/2018-tcdrupal/hadc24fb8#hadc24fb8">well attended</a> UI Patterns talk which tells me that more folks are understanding the value in the functionality offered by the UI Patterns module, and also that pattern library driven theming workflows still continue to gain popularity in the Drupal community. Thanks to all who attended, to Michelle for <a href="http://shellmultimedia.com/2018-tcdrupal/hadc24fb7#hadc24fb7">this nice photo</a>, and also to <a href="https://www.mediacurrent.com/who-we-are/team/eric-huffman/">Eric from Mediacurrent</a> who I had a chance to walk through the <a href="https://www.drupal.org/project/ui_patterns_pattern_lab">UI Patterns Pattern Lab</a> module during a quiet Saturday AM BOF block.</p>\r\n\r\n<p>Also in the general neighborhood of design components I sat in on <a href="https://www.drupal.org/u/stevector">Steve Persch\'s</a> session <a href="https://2018.tcdrupal.org/session/everything-block-how-wordpress-rewrote-wysiwyg">Everything is a Block: How WordPress Rewrote the WYSIWYG</a>. It shared some overlap with his State of Wordpress session from DrupalCon but dove even deeper into the new hotness that is the Gutenberg editor. While I have some issues with the underlying structure of Gutenberg content (tons of content jammed into a body field,) the upsides to a consistent block based approach in the editor resonated with me.</p>\r\n\r\n<p>Given that, I asked Steve how he thought we could move to a more consistent use of blocks in Drupal. With all of the possible approaches to this problem in Drupal, he thought that the community needs to align on the things we want to stop using. For him in the past his approach was based on layout plugins (which aligns well with the experimental layout builder module now in Drupal Core.) Alongside this layout based approach he also focused on limiting preprocessing as much as possible so that the admin UI could accurately reflect what ends up rendered on the front end. The latter point especially resonated with me as it is a disadvantage of the common Twig mapping approach to component based theming that I think can be improved by the UI Patterns module or something like it. Speaking of that, thanks to Steve for giving a nice shout out to my UI Patterns presentation during his talk.</p>\r\n\r\n<p>The last session I caught at the camp was <a href="https://2018.tcdrupal.org/session/conscious-uncoupling-drupal-8-meets-metalsmith">Conscious Uncoupling -Drupal 8 meets Metalsmith</a>. I was already familiar with many of the concepts here through my experimentation with Drupal and GatsbyJS, but it was great to hear someone else\'s positive experiences with the JAM Stack and decoupled Drupal. It also me amped to finally try Netlify, which I ended up liking quite a bit.</p>\r\n\r\n<p>A few talks I missed but want to go back to:</p>\r\n\r\n<ul>\r\n<li><a href="https://2018.tcdrupal.org/session/progressive-decoupling-case-study-pri">Progressive Decoupling: A case study with PRI</a></li>\r\n<li><a href="https://2018.tcdrupal.org/session/easy-flexible-and-accurate-drupal-8-search-dr-seuss-and-search-api">Easy, Flexible and Accurate Drupal 8 Search with Dr. Seuss and Search API</a></li>\r\n<li><a href="https://2018.tcdrupal.org/session/drupal-and-without-react-head-headless-comparison">Drupal with and without React, a head to headless comparison</a></li>\r\n</ul>\r\n\r\n<p>See you next year Twin Cities.  I\'ll just leave this here.</p>\r\n\r\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">So happy to get a chance to see my favorite <a href="https://twitter.com/TCDrupal?ref_src=twsrc%5Etfw">@TCDrupal</a> friends again this year <a href="https://twitter.com/hashtag/TCDrupal?src=hash&amp;ref_src=twsrc%5Etfw">#TCDrupal</a> <a href="https://t.co/XWlcF7Vh5X">pic.twitter.com/XWlcF7Vh5X</a></p>&mdash; Brian Perry (@bricomedy) <a href="https://twitter.com/bricomedy/status/1005539243823857664?ref_src=twsrc%5Etfw">June 9, 2018</a></blockquote>'},relationships:{image:{localFile:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAXAQEBAQEAAAAAAAAAAAAAAAACAAED/9oADAMBAAIQAxAAAAGkJTXVjOEXx9LmYWEK/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAETEEEhMhMv/aAAgBAQABBQJmYyu8wsSS5otGHEu6jmar22Z//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESEP/aAAgBAwEBPwG2Vv8A/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEBES/9oACAECAQE/Ae5GsVf/xAAeEAABBAEFAAAAAAAAAAAAAAAAAQIRIkEQICExgf/aAAgBAQAGPwIssHbfSqSK3OiW5dgnb//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExQRBRYXGR/9oACAEBAAE/Ie5MdDYLggNmr2lZTyi69k44iLE2VmGqgxG5RlcIACqQPnSMmZ//2gAMAwEAAgADAAAAEAf7z//EABcRAQEBAQAAAAAAAAAAAAAAAAEREHH/2gAIAQMBAT8QJwZzCo5//8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARIRD/2gAIAQIBAT8QwxoijdxZz//EAB8QAQADAAICAwEAAAAAAAAAAAEAESExQWGxcYHB0f/aAAgBAQABPxBnRF61lZIqNHOs/sVA90FS+Y2cZa6ey/2MsVBTBdpCCNZoFUx+wlRrj92+oklBtebyvUejL4hGAYCqOkJbA+I6OVYT/9k=",aspectRatio:.75,src:"/static/8112084a9d882900828a890609debd61-40e342a306702e354a51f3ef20775200-42807.jpg",srcSet:"/static/8112084a9d882900828a890609debd61-40e342a306702e354a51f3ef20775200-960f9.jpg 313w,\n/static/8112084a9d882900828a890609debd61-40e342a306702e354a51f3ef20775200-c36f2.jpg 625w,\n/static/8112084a9d882900828a890609debd61-40e342a306702e354a51f3ef20775200-42807.jpg 1250w,\n/static/8112084a9d882900828a890609debd61-40e342a306702e354a51f3ef20775200-972d9.jpg 1536w",sizes:"(max-width: 1250px) 100vw, 1250px"}}}}},fields:{slug:"/post/twin-cities-drupal-camp-recap/"},post_type:"post",created:1528835772}},{node:{id:"bb93c8f0-a701-4030-876d-bfa00da897cd",title:"My Approach to PatternLab - Mark Conroy",link:"https://mark.ie/blog/web-development/my-approach-patternlab",body:{value:"<blockquote>When I changed the conversation and started talking about ‘Building Blocks’ (what we call our Drupal paragraph types), site blocks (Drupal's search block, branding block), display types (Drupal's view modes such as teaser, search result), etc, they immediately understood.</blockquote>\r\n<p>I'm setting up some front end tooling for an upcoming project and was also considering not using the atoms/molecules/organism naming conventions this time around. My naming conventions will likely vary based on the approach to the build, but the general approach here makes a lot of sense to me. Not surprised that it makes sense to clients as well.</p>\r\n<blockquote>After that, I have Backstop.js set up to regression test all of these, so each time I create a new component I can quickly run the visual regression tests and check that nothing has broken. Since all my CSS/JS is scoped to each individual component, it's rare if something is.</blockquote>\r\n<p>This. For this next build I was planning on having full visual regression testing coverage in the pattern library and then some sampling in Drupal, most likely assisted by the <a href=\"https://www.drupal.org/project/backstop_generator\">Backstop Generator</a> module.</p>"},relationships:{image:null},fields:{slug:"/link/my-approach-to-patternlab-mark-conroy/"},post_type:"link",created:1528833541}},{node:{id:"be4eeadf-7ea1-44c5-a6ca-77cf09a1c26c",title:"A First Taste of Netlify",link:null,body:{value:"<p>As I've been learning about <a href=\"https://jamstack.org/\">the JAMstack</a> I've often heard really good things about using <a href=\"https://www.netlify.com/\">Netlify</a> for hosting. I had a chance to try it out yesterday and I must say that the hype seems pretty warranted.</p>\r\n<p>I often call my blog the least important site on the internet, but the real winner of that award is <a href=\"http://www.campperry.fun/\">Camp Perry</a>, a blog that I created as a joke for the unofficial neighborhood camp that happens in my back yard every summer. I wanted to move the blog to Gatsby and also take better advantage of the campperry.fun domain than I could on my current Github Pages configuration. Seemed like as good an excuse as any to try out Netlify. After granting access to my github repo, Netlify was able to:</p>\r\n<ul>\r\n<li>Automatically determine that I had a Gatsby site, and configure the build process accordingly</li>\r\n<li>Deploy a new build whenever a commit was made to the master branch</li>\r\n<li>For each new pull request, create a deploy preview site that I could use to sanity check my changes</li>\r\n<li>Use my custom domain (this took a little configuration and was the hardest part, but mainly because I'm not great at domain stuff)</li>\r\n</ul>\r\n<p>All of that in a few minutes, and on the free tier. They also offer one click https, which I haven't gotten around to yet. Well worth checking out if you're looking for a place to host a static site build. I'd like to migrate this site to Netlify at some point as well to take advantage of some of the build automation and also https.</p>\r\n<p><em>Update</em>: with my custom domain stuff all squared away I was able to try the one click https features. One click to enable https via letsencrypt, a second click to force https on the site. Took about 90 seconds start to finish. And Netlify will autorenew my letsencrypt certificate before it expires. Pretty amazing.</p>"},relationships:{image:{localFile:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRElEQVQ4y21TS2sUQRCenyx4FTx68qQBQRAvEb0oGMFbLhH0IGxIvARDdsfsY3be06+Zfs1ndc/uukh6+ajqHqr2q/qqkhEAExJ13UCQtdZCKgXOObz39CbAyNdaYxg0OsbACMMwUGSI3p8xIhF1hfz+D5S2UD0FBTsYyOAbF/2A4Pe7b9PdwrgR2vr4zZA1ziP5enqK148fodPAYlNhVXGsKxGxKhmWJUfbj+iIUISe0O78nGmKkSi4QSUskl4qiLaFUD0aJlC3DFXTouMSRADWj9E6stb9B/8PLgJI9h0YjME6XYBTz1Q/RBgqK/QtwDqHcRwfhCcYZ6EpxyEhLNG/W0BIOSXShgRydFdRrPBGcQ8mDMc4g56ESs7q73i2fIe5zpCaAi1nKHmDirBtSihHTOEwjCSEN5PdY3fvqIJGafDA8IJd4315jgt+jR/ZFVaLFe7SFOvNBnlRxnEJx4/+CEcM6Sd6h044yMEdlUwNVQaoacbqehKpp2ShBR3jsQVx0nYCGesO8J5aoywaoZGEfwznUt7isrxDtsmxJHabPEe2zbHJttjmBYqyQlU1kTXnIrJ0JOse2kzzmOybOlO3uCnm4KsWTVZDbBmKrEC6vI/l87ghHdq2IdX7o+043pUxMJwev7W/cJJ9xkl+hlf5FzxZvsWsu4VXoT9UuhrBpQeTZEVYQUkCWppXg6YzseRQ/qHk82qG5/MPeJF+xMv0E57+foOf1Q2U7El1GniytehpG2gBaIwaKQhDRHhnYXatxl9hf+WyJVFuIgAAAABJRU5ErkJggg==",aspectRatio:1.5728346456692914,src:"/static/ebe53d5f14ad4b399519c2178003f54d-65da9898fa7738e3967dc8fcb2506598-7f5d2.png",srcSet:"/static/ebe53d5f14ad4b399519c2178003f54d-65da9898fa7738e3967dc8fcb2506598-a1b93.png 313w,\n/static/ebe53d5f14ad4b399519c2178003f54d-65da9898fa7738e3967dc8fcb2506598-f7d23.png 625w,\n/static/ebe53d5f14ad4b399519c2178003f54d-65da9898fa7738e3967dc8fcb2506598-7f5d2.png 799w",sizes:"(max-width: 799px) 100vw, 799px"}}}}},fields:{slug:"/post/a-first-taste-of-netlify/"},post_type:"post",created:1528753026}},{node:{id:"00273401-c513-4dde-b1d0-934d35a512cf",title:"Texas Camp Recap",link:null,body:{value:'<p style="text-align: center;">Photo by <a href="https://www.flickr.com/people/155787132@N07/">Yes Moon</a></p>\r\n\r\n<p>Had an excellent, jam packed time at <a href="https://2018.texascamp.org/">Texas Camp</a> in Austin. It was an extremely well organized event attended by a bunch of super engaged and friendly Drupalers. A bit of a short trip for me as I had tickets to see <a href="https://www.hdtgminfo.com/">How Did This Get Made</a> back home on Saturday night, but that just resulted in things being focused around a couple of clear themes.</p>\r\n\r\n<p><b>Visual Regression Testing</b></p>\r\n\r\n<p>Visual Regression Testing is a topic I’ve been interested in quite a while now, but I’ve fallen out of practice as of late. I was really excited to see that there was a bunch of content on visual regression testing planned for the camp, much of which was focused around <a href="https://garris.github.io/BackstopJS/">BackstopJS</a>. I’ve tried a number of other solutions in the past (<a href="https://github.com/BBC-News/wraith">Wraith</a>, <a href="https://github.com/HuddleEng/PhantomCSS">PhantomCSS</a>, <a href="http://webdriver.io/">WebDriverIO</a>) but not Backstop JS which seems to be gaining momentum in the Drupal community.</p>\r\n\r\n<p>On Thursday the folks at <a href="http://pantheon.io/">Pantheon</a> held a training session on BackstopJS, which I attended.  It provided a great overview of how they use the tool, along with some example repositories for learning. By the end of the training I had completed a first pass at adding a suite of regression tests to this blog. I would have liked to see a little more content in the training about the general functionality of BackstopJS rather than the Pantheon team’s use cases, but any training where I can walk out with a real world example implemented is a big win.</p>\r\n\r\n<p>Continuing on the Backstop train I also doubled down and attended <a href="https://2018.texascamp.org/sessions/deploy-without-fear--visual-regression-testing-with-backstopjs-is-here">Ryan Bateman from Hook 42’s session on BackstopJS</a>. He provided a little more of the general functional overview that I was looking for after the training, and also talked about the <a href="https://www.drupal.org/project/backstop_generator">Backstop Generator</a> module that he had recently created. Backstop generator allows you to quickly create a backstop.json file that tests against specific pages on your site and/or a random selection of pages. Seems like a great way for Drupal projects to take advantage of BackstopJS with very little effort. It was also great getting a chance to talk with Ryan later on in the camp - I think he stands as the only Alaskan Drupalist I’ve ever met.</p>\r\n\r\n<p>Due to travel I wasn’t able to catch David Stinemetze from Rackspace’s related <a href="https://2018.texascamp.org/sessions/archiving-and-visual-regression-using-drupal-8">Archiving and Visual Regression Using Drupal 8</a> session, but I’m planning on catching up on the video later.<p>\r\n\r\n<p><b>Community</b></p>\r\n\r\n<p>Texas Camp featured two very excellent keynotes that I was lucky enough to enjoy over breakfast burritos. Both are very much worth watching, so rather than try to recap, I’ll just paraphrase a few things that really stuck with me.</p>\r\n\r\n<p>Nikki Stevens - <a href="https://2018.texascamp.org/happenings/keynote-breaking-the-binary-the-politics-of-code-and-inclusivity-in-technology">Breaking the Binary: The Politics of Code and Inclusivity in Technology</a></p>\r\n\r\n<ul>\r\n<li>Diversity is being invited to the party. Inclusion is being asked to dance.</li>\r\n<li>Small choices matter and create new futures.</li>\r\n<li>Forms on a website can influence real world behavior.</li>\r\n</ul>\r\n\r\n<p>Michael Schmid - <a href="https://2018.texascamp.org/happenings/keynote-the-future-of-drupal">The Future of Drupal</a></p>\r\n\r\n<ul>\r\n<li>Change is what keeps us alive.</li>\r\n<li>JavaScript is taking over the web.</li>\r\n<li>The market is (Squarespace, Wix, etc.) is pushing us in the direction of \'ambitious digital experiences\'</li>\r\n</ul>\r\n\r\n<p><b>A Whole Bunch of Me Talking at People on Friday</b></p>\r\n\r\n<p>I was initially scheduled to do my UI Patterns Talk, but was also asked to fill in for a presenter who was unable to attend.  As a result I got to give two talks in a single afternoon. This is fine for me because I love hearing myself talk, but to the brave souls who attended both of my sessions - I salute you.</p>\r\n\r\n<p><em><a href="https://2018.texascamp.org/sessions/component-based-theming-with-ui-patterns">Component Based Theming With UI Patterns</a></em></p>\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/xXt3v3FSxss?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n\r\n<p>Was exceptionally happy with the lively Q&A that followed the session.  Even if you\'ve heard me give this talk before, I\'d encourage you to <a href="https://www.youtube.com/watch?v=xXt3v3FSxss&feature=youtu.be&t=42m42s">jump to the Q&A at the end</a>.</p>\r\n\r\n<p><em><a href="https://2018.texascamp.org/sessions/hot-jamstack-building-a-music-discovery-app-with-drupal-and-react">Hot JAMS(tack): Building a Music Discovery App with Drupal and React</a></em></p>\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/ZzDs3hGx3zY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n\r\n<p>It was fun revisiting this talk after DrupalCon, but I was especially excited to hear from people who either have, or were planning to use the examples in this project to learn more about decoupled Drupal and React. That was main motivation behind the talk in the first place, so I\'m extremely happy that this project may have helped a few people find a starting point to experiment with decoupled Drupal and React.</p>\r\n\r\n<p><b>Other Sessions</b></p>\r\n\r\n<p>I also caught a handful of other great talks.</p>\r\n\r\n<ul>\r\n<li><a href="https://2018.texascamp.org/sessions/web-accessibility-tips-and-tools">Web Accessibility Tips and Tools</a> - provided an excellent overview of a11y resources, many of which are <a href="http://bit.ly/2swdwj4">outlined in this google doc</a>.</li>\r\n<li><a href="https://2018.texascamp.org/sessions/manifestodriven-development">Manifesto-Driven Development</a> - an interesting look at influential tech manifestos and how you could use one to define the direction of a project.  Thinking about writing one for an upcoming project.</li>\r\n<li><a href="https://2018.texascamp.org/sessions/decoupling-edutopiaorg">Decoupling Edutopia.org</a>\r\n - a fascinating look at a complicated, highly performant decoupled build. I was impressed by some of the technical solutions but left wondering if the effort outweighed the benefit in this case.</li>\r\n</ul>\r\n\r\n<p><b>Fun!</b></p>\r\n\r\n<p>Had some great BBQ and craft beer at the after parties, and can\'t stress enough how convenient it was having breakfast tacos around to start the day. And then Saturday night I met up with some old Boston friends and did the tourist-y <a href="http://www.batsinaustin.com/">bat bridge thing</a>, saw a fun band called <a href="http://www.quietcompanymusic.com/">Quiet Company</a> play at Stubbs BBQ, and closed out the night with some Austin food trucks.</p>\r\n\r\n<p>All in all, a great trip. And I barely got this post online before the end of <a href="https://2018.tcdrupal.org/">the next camp on my list</a>.</p> '},relationships:{image:{localFile:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABdyw4J0Gy/wD/xAAaEAEBAAIDAAAAAAAAAAAAAAABAgASAxQi/9oACAEBAAEFAuzGPq9cKpgutnkR/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bh//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AUf/xAAbEAACAQUAAAAAAAAAAAAAAAAAAQIQEUFRYf/aAAgBAQAGPwLJJ7dJI6WP/8QAHBABAAEEAwAAAAAAAAAAAAAAAQARITFBYYHw/9oACAEBAAE/IfYjCyyt4iVQbF7mJo4VYmGuW8//2gAMAwEAAgADAAAAEFQ//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EITKf//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxB1Ld//xAAdEAEAAwEAAgMAAAAAAAAAAAABABEhMVFxgZGx/9oACAEBAAE/EEjg+UawGXD9S3yMAtoJ2wV6ihojZXEfy8mTFqU2eXez/9k=",aspectRatio:1.4788732394366197,src:"/static/9f2fc55c29e276a01cc8294279a9bccd-62f802b73efd93e5dc23ed3cf2c6b480-42807.jpg",srcSet:"/static/9f2fc55c29e276a01cc8294279a9bccd-62f802b73efd93e5dc23ed3cf2c6b480-960f9.jpg 313w,\n/static/9f2fc55c29e276a01cc8294279a9bccd-62f802b73efd93e5dc23ed3cf2c6b480-c36f2.jpg 625w,\n/static/9f2fc55c29e276a01cc8294279a9bccd-62f802b73efd93e5dc23ed3cf2c6b480-42807.jpg 1250w,\n/static/9f2fc55c29e276a01cc8294279a9bccd-62f802b73efd93e5dc23ed3cf2c6b480-e1b4f.jpg 1785w",sizes:"(max-width: 1250px) 100vw, 1250px"}}}}},fields:{slug:"/post/texas-camp-recap/"},post_type:"post",created:1528515271}}],pathPrefix:"",first:!1,last:!1,index:3,pageCount:10,additionalContext:{}}}}});
//# sourceMappingURL=path---3-dd960f1135d653297d57.js.map