webpackJsonp([0xe1819f1c1139],{1094:function(e,t){e.exports={data:{nodePost:{title:"My Takeaways from DrupalCon Nashville",body:{value:'<p>I’m more than a little late on the traditional DrupalCon recap this year, but even with some time between me and Nashville what I took away is still quite vivid. Better get it in writing before the remaining echoes of country music drown it out.</p>\r\n\r\n<p>My most important takeaway from my trip was that the Nashville Predators let fans smash a car painted with the opponents logo before games. Beyond that, I did also learn some things while at DrupalCon.</p>\r\n\r\n<p><b>There is a lot of excitement behind Layout Builder and layout related initiatives</b></p>\r\n\r\n<p>What the Layout Initiative was able to accomplish with the release of Layout Builder as an experimental module in Drupal 8.5 was extremely impressive.  It is a great foundation that the initiative already appears to have clear plans to flesh out and improve.  It was promising to see many well attended sessions on this topic, coverage in the <a href="https://events.drupal.org/nashville2018/driesnote">Driesnote</a>, and quite a bit of excitement about layouts and Layout Builder buzzing through the halls of Music City Center.</p>\r\n\r\n<p>The biggest gap I see in what exists thus far is the disconnect between the block based layout builder and the blocks UI. You currently have to leave the layout builder interface to create new custom blocks before you can add them to a layout, and these blocks have the potential to flood the main Drupal custom blocks UI.  I was very happy to hear that there is <a href="https://www.drupal.org/project/drupal/issues/2948064">an issue related to inline creation of custom blocks</a> that should help bridge this gap. In a BOF on Components and The Layout Initiative <a href="http://bit.ly/components-layout">a number of other relevant issues were identified</a> that could potentially improve the experience and make Layout Builder play even more nicely with component based workflows. I’m hoping to follow along with these, go hands on frequently, and help out where I can.</p>\r\n\r\n<p><b>Many are decoupling, but approaches vary</b><p>\r\n\r\n<p>To poorly paraphrase <a href="https://www.drupal.org/u/mrjmd">Matt Davis</a>:</p>\r\n\r\n<blockquote>Many people build websites this way outside of the Drupal world, they just don’t call it decoupled</blockquote>\r\n\r\n<p>There was a lot of great discussion at the Decoupled Summit (<a href="https://www.lullabot.com/articles/decoupled-drupal-summit-at-drupalcon">Lullabot has a good recap</a>) but also a feeling that while decoupling continues to gain momentum in the Drupal community, there are still a wide variety of strategies and some alignment on best practices yet to come. That said, I think some of that feeling may just come with the territory of the flexibility of an API based approach and the wide array of application frameworks that can consume these APIs.</p>\r\n\r\n<p>An interesting topic that came up was the concept of content preview and managing editorial layouts. In the developer case studies portion of the summit we saw a number of attempted solutions to these problems, including an amazing offering from <a href="http://www.1xinternet.de/">1XInternet</a> that allowed content managed in Drupal to be edited in either the Drupal or React UI with updates syndicated in near real time. Wow factor aside, conversations later in the summit brought that entire approach into question. The counterpoint being that these editorial conveniences are page-centric in nature and thus won’t always make sense in a truly decoupled context. In this case we’re either putting in a large amount of effort to replicate the traditional coupled website editing experience, or this only represents one portion of the editorial experience we’re trying to manage.  It is understandable that we’re often falling back to the page centric approaches we’re familiar with, but this is more evidence that our approaches to decoupling are still maturing.</p>\r\n\r\n<p>Discussions during the summit also often crossed into two key initiatives...</p>\r\n\r\n<p><b>The Drupal community is pushing to modernize...</b></p>\r\n\r\n<p><a href="https://www.drupal.org/project/drupal/issues/2926656">The Javascript Modernization Initiative</a> looks to improve Drupal’s JavaScript by improving the experience of maintaining Drupal’s current JavaScript codebase, and also creating <a href="https://github.com/jsdrupal/drupal-admin-ui-demo">a new alternative admin UI for Drupal based in React</a>. The initiative has already introduced the AirBnB standards and a JavaScript build process to Drupal Core, but there are more welcome changes on the horizon. One focus area is improving Drupal’s JavaScript based test suite by phasing out the use of PhantomJS and transitioning to Nightwatch.js. They are also attempting to manage aspects of the project primarily on Github which I’d imagine would be a welcome change for many JavaScript developers.</p>\r\n\r\n<p>Another common theme that kept coming up is that the JS initiative has a small group working on these issues and could really use additional help. This is another area where I’d love to find a way to contribute in the coming months.</p>\r\n\r\n<p>In addition to serving as a proof of concept for how Drupal might utilize React, this UI also crosses over nicely with <a href="https://www.drupal.org/project/ideas/issues/2757967">the API-first initiative</a> since the alternative admin UI that is being developed depends on Drupal’s API.  The API-first initiative aims to advance Drupal’s web services in support of decoupling and other new types of integration. Closing gaps in Drupal’s API (file upload support was one that came up as a high priority for 8.6) that could support a decoupled admin UI would also make Drupal’s API more suitable for consumers outside of core.</p>\r\n\r\n<p><b>…but there could be more alignment on how we’re approaching modernization</b><p>\r\n\r\n<p>Complete with its admittedly clickbait title, core conversation <a href="https://events.drupal.org/nashville2018/sessions/farewell-twig">A Farewell to Twig</a> received the passionate discussion that the session appeared to be aiming for. This early and theoretical discussion focused on the concept of making client rendering a first class citizen in Drupal and potentially focusing more on decoupling rather than solving all aspects of front end development. One possible approach involved enhancing Drupal’s front end to be decoupled out of the box and then offering one or more decoupled front ends that could optionally be used with Drupal.  There were various theories on how far this would go - from shipping with a Twig front end by default (a common concern from the audience was related to continuing to support Twig for small to mid range projects, and also for general consistency) all the way to the concept of not shipping with a front end by default.</p>\r\n\r\n<p>It was a thought provoking discussion that also sparked some dissonance with the other things I’d been hearing and thinking about throughout the conference. Much of Dries’ focus in his keynote was on improving the content creator and site builder experience, along with promoting Drupal to non-technical decision makers. This aligns nicely with the layout work (which also featured prominently in the keynote,) but it feels at odds with the focus within the community on decoupling. Can both directions be correct?  Should both efforts be happening in parallel? Should I just relax and enjoy all of the new functionality and improvements Drupal has to offer? No easy answers here, so <a href="https://fulldegreeheyyouau.files.wordpress.com/2017/10/why-not-both-animated-gif-7.gif?w=748">I’ll just link to a relevant meme</a>.</p>\r\n\r\n<p>Tangentially related, <a href="https://www.drupal.org/u/stevector">Steve Persch</a> talked about Drupal’s mission statement compared to WordPress\' during the <a href="https://events.drupal.org/nashville2018/sessions/whats-possible-wordpress-50">What\'s possible with WordPress 5.0</a> presentation. Those missions are best summarized as:</p>\r\n\r\n<p>Wordpress: Democratize publishing<br />\r\nDrupal: Ambitious Digital Experiences</p>\r\n\r\n<p>I’d agree that Drupal’s mission statement isn’t as easy to hang your hat on when compared to WordPress. And does ‘Ambitious Digital Experiences’ really represent what was focused on during the Driesnote?  I’m not so sure.</p>\r\n\r\n<p><b>Presenting at DrupalCon was a ton of fun</b><p>\r\n\r\n<p>I also had the pleasure of presenting <a href="https://events.drupal.org/nashville2018/sessions/hot-jamstack-building-music-discovery-app-drupal-and-react">Hot JAMS(tack): Building a Music Discovery App with Drupal and React</a>. This was my first time speaking at DrupalCon and I had a ton of fun doing so.</p> \r\n\r\n<p>Probably my most interesting takeaway from the session was from an informal poll before the recording even started. The vast majority of people in the room either identified as being new to decoupled Drupal, or new to React. In fact, the vast majority was new to both. This seems to confirm my working theory that there are a lot of people interested in decoupled concepts in the Drupal community but are struggling to find a way to get started. I hope this talk provided a decent starting point and inspired some people to dive in and start experimenting.</p>\r\n\r\n<p>Thanks to everyone who attended, packed the room, and provided thoughts and feedback.</p>\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/d0HOsc5nQtM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n\r\n<p><b>This was my most social sprint experience</b></p>\r\n\r\n<p>This DrupalCon sprint was different for me in that I spent the majority of my time having some great conversations rather than actively writing code. I finally had a chance to meet <a href="https://www.drupal.org/u/kclarkson">Kaleem Clarkson</a> face to face and talk about how he’s been using the <a href="https://www.drupal.org/project/foundation_patterns">Foundation Patterns theme</a>. I also got to meet and have a nice conversation with <a href="https://www.drupal.org/u/murrayw">Murray Woodman</a> talking to him a bit about how I’ve been using the <a href="https://www.drupal.org/project/ui_patterns">UI Patterns</a> module, along with his work with <a href="https://www.drupal.org/project/bricks">Bricks</a> and <a href="https://www.drupal.org/project/modifiers">Modifiers</a>. Especially interesting as earlier in the week I had been talking with <a href="https://www.drupal.org/u/scott-weston">Scott at HS2</a> about how he’s been using the Modifiers module.</p>\r\n\r\n<p>And I got lunch at <a href="https://www.martinsbbqjoint.com/">the best BBQ place in Nashville</a> (according to one of my many Lyft drivers anyway.)</p>\r\n\r\n<p><b>Kevin!</b></p>\r\n\r\n<p>It was a damn pleasure to be there in person to see <a href="https://www.drupal.org/forum/general/community-spotlight/2018-04-24/kevin-thull-from-behind-the-camera">Kevin Thull accept the Aaron Winborn award</a></p>\r\n\r\n<p><b>Looking forward to continuing the momentum</b></p>\r\n\r\n<p>As always, DrupalCon has me energized and ready to run with this Drupal related excitement (although not enough to get this post out quickly for some reason.)  I hope to continue speaking at camps, find some ways to contribute to the initiatives that took up most of my focus at DrupalCon, and an episode of the <a href="http://www.developingup.com/">Developing Up podcast</a> that I recorded with <a href="https://www.drupal.org/u/mikemiles86">Mike Miles</a> at DrupalCon will be released sometime in the future as well.</p>\r\n\r\n<p><b>Other Great Sessions:</b>\r\n<ul>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/advanced-configuration-management-drupal-8">Advanced Configuration Management in Drupal 8</a></li>\r\n<li><a href="https://events.drupal.org/nashville2018/keynote-drupal-and-secret-my-success">Keynote: Drupal and the secret of my success | Steve Francia</a></li>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/site-building-20-how-layout-builder-will-change-everything">Site Building 2.0: How Layout Builder will change everything</a></li>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/intro-react-design-patterns">Introduction to React Design Patterns</a></li>\r\n</ul></p>\r\n\r\n<p><b>Sessions I’m Still Hoping to Watch:</b>\r\n<ul>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/build-banging-sites-bpm-bricks-paragraphs-and-modifiers">Build banging sites with BPM: Bricks, Paragraphs and Modifiers</a></li>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/advanced-topics-decoupled-drupal">Advanced topics in decoupled Drupal</a></li>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/next-level-twig-extensions">Next Level Twig: Extensions</a></li>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/shifting-ux-editorial-experience-0">Shifting UX to the Editorial Experience</a></li>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/javascript-and-accessibility-dont-blame-language">JavaScript and Accessibility: Don\'t Blame the Language</a></li>\r\n<li><a href="https://events.drupal.org/nashville2018/sessions/weathercoms-project-moonracer-decoupled-user-interfaces">Weather.com\'s Project Moonracer - Decoupled User Interfaces</a></li>\r\n</ul>\r\n</p>\r\n\r\n<p>See you in Seattle!</p>'},relationships:{image:{localFile:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBBAUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/9oADAMBAAIQAxAAAAFrZWmUOJpnNmUpmgG//8QAHRAAAwACAgMAAAAAAAAAAAAAAQIDBBEAExQyM//aAAgBAQABBQKMJGYlLmUAtkOsaVGZs379hE5Eg2Id3UeLD1dV3//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAIBAwUAAAAAAAAAAAAAAAABEQIhcTEyQWGB/9oACAEBAAY/Ak6kbCyiwnyLJ4R0JomSrBSaH//EAB4QAAMAAgEFAAAAAAAAAAAAAAABESFRQTFhkbHw/9oACAEBAAE/IWPG3OT6WPCkjBONEi1PHXgW4ajQ1hUhg3ckVbwR8k9BIvSOF+D/2gAMAwEAAgADAAAAEOAOPf/EABcRAQEBAQAAAAAAAAAAAAAAAAARATH/2gAIAQMBAT8Q2s4iv//EABgRAAMBAQAAAAAAAAAAAAAAAAABERAx/9oACAECAQE/EFB9E3Jn/8QAHhABAQEAAgIDAQAAAAAAAAAAAREAITFBgVFhodH/2gAIAQEAAT8QMBSYg6wR4MYVV/cBZ1ATxkkQFn8wFywBBR9bnZTwe8Q+MI4j9/OuhsJ2Me8oEgnRGuUYVtArHBcUUSIoZzWqVz//2Q==",aspectRatio:.7137758743754461,src:"/static/51fd60fed52f384defda1f6e175bf430-a394a219b8832d42ca22648860f433c7-42807.jpg",srcSet:"/static/51fd60fed52f384defda1f6e175bf430-a394a219b8832d42ca22648860f433c7-960f9.jpg 313w,\n/static/51fd60fed52f384defda1f6e175bf430-a394a219b8832d42ca22648860f433c7-c36f2.jpg 625w,\n/static/51fd60fed52f384defda1f6e175bf430-a394a219b8832d42ca22648860f433c7-42807.jpg 1250w,\n/static/51fd60fed52f384defda1f6e175bf430-a394a219b8832d42ca22648860f433c7-dbc5e.jpg 1875w,\n/static/51fd60fed52f384defda1f6e175bf430-a394a219b8832d42ca22648860f433c7-97be6.jpg 2000w",sizes:"(max-width: 1250px) 100vw, 1250px"}}}}},created:1524769043}},pathContext:{slug:"/post/my-takeaways-from-drupalcon-nashville/"}}}});
//# sourceMappingURL=path---post-my-takeaways-from-drupalcon-nashville-120a56403ab990b72d8b.js.map