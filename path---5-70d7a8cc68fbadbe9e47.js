webpackJsonp([81823991089174],{1105:function(e,t){e.exports={pathContext:{group:[{node:{id:"2b411df4-169a-4ab2-bc7e-fb25def40733",title:"Looking Forward to DrupalCon Nashville",link:null,body:{value:'<p>Very much looking forward to spending next week in Nashville attending my 4th <a href="https://events.drupal.org/nashville2018">DrupalCon</a>. The spontaneous and unplanned stuff is half of the fun, but there are a few things that are locked on my schedule.</p>\r\n<p><b>Monday: <a href="https://events.drupal.org/nashville2018/decoupled-summit">Decoupled Summit</a></b> - I\'m excited to hear more about what people are doing in the decoupled Drupal space. This will be my first time attending a summit at DrupalCon as well.</p>\r\n<p><b>Tuesday 1 PM: <a href="https://events.drupal.org/nashville2018/bofs/components-and-layout-initiative">Components and the Layout Initiative BOF</a></b> - I\'ll be leading an open discussion on how the Layout Initiative might impact our component-based workflows. I\'ve really enjoyed the BOFs I\'ve led in the past and expect this to be no exception.</p>\r\n<p><b>Wednesday 3:45 PM: <a href="https://events.drupal.org/nashville2018/sessions/hot-jamstack-building-music-discovery-app-drupal-and-react">Hot JAMS(tack): Building a Music Discovery App with Drupal and React</a></b> - I\'ll be sharing my experience building a music discovery app with Drupal and React in my first ever talk at DrupalCon.</p>\r\n<p><b>Thursday: Who knows!</b></p>\r\n<p><b>Friday: <a href="https://events.drupal.org/nashville2018/sprints">Sprints</a></b> - after a week of exciting new ideas, having a sprint to go hands on is a great way to end the week.  I plan on getting back to some forward progress on the <a href="https://github.com/backlineint/foundation_patterns">Foundation Patterns</a> theme.</p>\r\n<p>Can\'t wait to say see friends old and new, learn a bunch of cool new stuff, and land a country music recording contract.</p>'},relationships:{image:null},fields:{slug:"/post/looking-forward-to-drupalcon-nashville/"},post_type:"post",created:1523046899}},{node:{id:"1078b047-d514-4663-9ac1-0bacdf1c0012",title:"Drupal 8.5 and Security Updates",link:null,body:{value:'<p>As always, I learned a few things this week upgrading projects to Drupal 8.5 and applying the most recent <a href="https://www.drupal.org/sa-core-2018-002">highly critical Drupal security update</a>.</p>\r\n\r\n<p>The first is yet another reminder to carefully read and consider the documentation. The highest priority projects that I needed to apply the security release to were on 8.4.5 at the time of the pre-announcement. I took this as a good opportunity to upgrade to 8.5 and then kind of got tunnel vision about getting these projects, and also my lower priority D8 projects up to 8.5 in preparation for the security release. Not having looked back at the security advisory since my initial read, I lost sight of the fact that I could easily apply the patch to their current D8 version and worry about 8.5 when the pressure was off a little bit.  Thankfully I was reminded of this during a well timed check in meeting with the Drupal practice at HS2 - a few of my 8.5 upgrades were a little behind schedule.  Having the flexibility to apply the security update to older versions of D8 really helped and most likely prevented us from rushing a few upgrade related regressions out into production.</p>\r\n\r\n<p>Speaking of the 8.5 upgrade getting a bit behind schedule, minor Drupal updates (8.4, 8.5 and so on) are still more challenging than I\'d expect them to be.  Jeff Geerling\'s post <a href="https://www.jeffgeerling.com/blog/2018/updating-drupalcore-composer-drupal-core-doesnt-update">Updating drupal/core with Composer - but Drupal core doesn\'t update</a> proved invaluable as I ran into the same issue. I also had another pretty tricky dependency conflict that eventually required me to remove and work around a dependency (again, <a href="https://www.jeffgeerling.com/blog/2018/updating-drupalcore-composer-drupal-core-doesnt-update">Jeff Geerling\'s post</a> helped quite a bit here.)  After successfully upgrading to 8.5 composer-wise, I found that <a href="https://www.drupal.org/project/page_manager/issues/2918564">a patch to Page Manager</a> needed to be applied for the site to even run.</p>\r\n\r\n<p>I\'m getting better with managing Drupal projects via composer, but still have some room to grow.  Lowest hanging fruit is that I need to start managing patches via composer. Once that clicked in my brain it was a little to late to experiment with it.  Next time.  I also still sometimes get tripped up with the difference between the ^ and ~ version constraints in composer.json which is embarrassing to admit.</p>\r\n\r\n<p>I also ran updates on Drupal instances based on API-first distributions. Those were a bit of a different beast. In my case, most were single purpose enough that I was able to just run composer update and call it a day.  That said, each distro had their quirks.  The version of <a href="https://github.com/acquia/reservoir">Reservoir</a> I was using had a dependency conflict that prevented the upgrade until I manually locked Reservoir at Alpha 4. <a href="http://www.contentacms.org/">Contenta</a> seems to have <a href="https://github.com/contentacms/contenta_jsonapi/issues/266">a patch that won\'t apply to 8.5</a></p>\r\n\r\n<p>I\'m all for learning, but also looking forward to this process becoming smoother sailing in the future.</p>'},relationships:{image:null},fields:{slug:"/note/drupal-8.5-and-security-updates/"},post_type:"note",created:1522418446}},{node:{id:"a96b9bb8-3afc-4fc8-9491-d3a4b62b85ea",title:"Shop Talk Show 303: JAM Stack with Phil Hawksworth",link:"http://shoptalkshow.com/episodes/303-jam-stack-phil-hawksworth/",body:{value:"<p>A great listen that could serve as a solid introduction to the JAM Stack concept. Especially interesting was the focus on some common counter arguments to the JAM Stack (dynamic things like forms, comments and so on) and how those may be more achievable than one might originally assume. As I try to add a little more punch to the JAM Stack focused portion of <a href=\"https://events.drupal.org/nashville2018/sessions/hot-jamstack-building-music-discovery-app-drupal-and-react\">my DrupalCon talk</a> I see myself going back for another listen.</p>\r\n<p>With a <a href=\"https://www.drupal.org/psa-2018-001\">new critical Drupal security release</a> on the horizon, static site builds are looking better and better. I'm glad I won't have to won't have to worry about this site (Drupal isn't accessible to the public) while I scramble to apply the security release elsewhere.</p>"},relationships:{image:null},fields:{slug:"/link/shop-talk-show-303:-jam-stack-with-phil-hawksworth/"},post_type:"link",created:1521726778}},{node:{id:"e2e0224b-87a1-43fa-abb4-73ade9fc9418",title:"MidCamp 2018 Thoughts",link:null,body:{value:'<p>Another year, another great MidCamp!</p>\r\n\r\n<p>I wasn’t able to attend for training and sprints on Thursday (1st grade play FTW!) but ended up talking to a former co-worker who attended the training \'<a href="https://www.midcamp.org/training/what-am-i-getting-myself-drupal-crash-course-non-developers">What Am I Getting Myself Into? A Drupal Crash Course for Non-Developers.</a>’ While it\'s easy to get wrapped up in the new and advanced at a camp like this, it is also really important to see newcomers, beginners, and people with Drupal-adjacent roles take steps into becoming more hands on with the CMS. She specifically mentioned that the training helped her have some revelations about a few Drupal-isms that us crazy developers have been talking about all this time.</p>\r\n\r\n<p>After some really enjoyable traffic, Friday brought me to the first day of sessions.  A couple of highlights:</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/local-dev-environments-dummies">Local Dev Environments for Dummies</a> - the bulk of this presentation reviewed data from a 2018 Drupal Developer Survey, and the data alone was extremely fascinating. It also provided some interesting perspectives on Vagrant vs. Docker for local development (go Vagrant if matching your prod environment exactly is important, and Docker for pretty much everything else.) I also walked out of this one itching to learn more about <a href="https://docs.devwithlando.io/">Lando</a>.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/decoupled-drupal-across-stack">Decoupled Drupal Across The Stack</a> - always enjoy seeing <a href="https://www.drupal.org/u/prestonso">Preston</a> speak about Decoupled Drupal, and being aware of his (and Acquia’s) perspective on the topic is important if I’m going to be speaking about adjacent topics as well. A good talk for  someone looking to survey the current Decoupled Drupal landscape. Was interesting to see that all of the examples Preston provided included some server side universal JavaScript component to handle the initial page view. I’ve been working on learning more about the <a href="https://jamstack.org/">JAM Stack</a> which specifically does not include JavaScript running on the server. Seeing examples of this alternative stack helped get me thinking more about the pros and cons of both.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/component-based-drupal">Component Based Drupal</a> - Surprise! After a cancellation, <a href="https://www.drupal.org/u/nerdstein">Adam Bergstein</a> and I stepped in without much of a safety net (I learned that I was co-presenting this session due to <a href="https://twitter.com/hook42inc/status/971837614004342784">a mention on twitter</a>) to talk about the current state of building and theming with components in Drupal. I’ve always enjoyed my conversations with Adam on this topic because while we primarily agree, we also have some differences of opinion and take some different approaches in our workflow. Continuing this conversation out in the open seemed to be useful to people, and I even got to joke around a little bit. I wouldn’t be surprised if Adam and I presented in a similar format in the future.</p>\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/IUAVgejng9w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n\r\n<p>Saturday - less traffic, more sessions.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/oop-pokemon-journey">OOP - The Pokemon Journey</a> / <a href="https://www.midcamp.org/topic/bending-behats-benefits-live-coding-adventure">Bending Behat\'s Benefits: A live coding adventure</a> - A journey followed by an adventure? Hell of a way to spend a groggy Saturday morning. I love hearing from both <a href="\r\n">Fatima</a> and <a href="https://www.drupal.org/u/stevector">Steve</a> whenever I can.  The OOP Pokemon Journey was a fun and easy to understand talk on a topic that I honestly don’t yet consider myself an expert on. And Bending Behat’s Benefits made me anxious to incorporate some more test driven development into my process after some time away.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/too-many-cooks-supporting-augmented-teams-without-getting-salty">Too many cooks! Supporting augmented teams without getting salty</a> - I wasn’t able to attend in person, but heard great things. It’s next up in the YouTube queue.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/american-medical-association-topic-landing-pages-d8-case-study">American Medical Association: Topic Landing Pages (A D8 Case Study)</a> - an excellent, and extremely relatable talk about the challenges of Drupal 8 landing page building integrated with a pattern library based approach to theming. I’ve felt so much similar pain/joy on recent projects. They also closed with the reminder that we all need to look into how Layout Builder in 8.5 and the Layout Initiative will impact this process going forward, which I think is extremely important.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/hot-jamstack-lessons-building-music-discovery-app-drupal-and-react">Hot JAMS(tack): Lessons from Building a Music Discovery App with Drupal and React</a> -This is my attempt to demystify the process of creating a decoupled app with Drupal and React by way of a fun side project. It was my first time giving a talk that I’ve had brewing for a while, and I was happy with how it went. Heard a lot of positive and helpful feedback and have a few things that I think I can tweak to make it more useful for people. Looking forward to presenting it again <a href="https://events.drupal.org/nashville2018/sessions/hot-jamstack-building-music-discovery-app-drupal-and-react">at DrupalCon Nashville</a>.</p>\r\n\r\n<p>Plus, this was pretty cool:\r\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Funny slide! <a href="https://t.co/LLqwuVXFb3">https://t.co/LLqwuVXFb3</a></p>&mdash; Dries Buytaert (@Dries) <a href="https://twitter.com/Dries/status/972816373545127936?ref_src=twsrc%5Etfw">March 11, 2018</a></blockquote>\r\n</p>\r\n\r\n<p><iframe width="560" height="315" src="https://www.youtube.com/embed/Sj_nE2IukOs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>\r\n\r\n<p>Sunday was sprints, and unfortunately more traffic on the way home.  I was dragging a little bit at this point, but still feel like I was able to get a few things done. I got back to the <a href="https://www.drupal.org/project/foundation_patterns">Foundation Patterns</a> theme and responded to the first issue submitted against the project. I helped <a href="https://www.drupal.org/u/amklose">Tony Klose</a> set up a Pattern Lab instance for a Drupal theme, and realized that I don’t have a clear personal process for including a pattern library as an external dependency of a theme. I also collaborated with Adam Bergstein a bit more looking at a possible React front-end for <a href="https://simplytest.me/">simplytest.me</a></p>\r\n\r\n<p>\r\n<ul>\r\nMajor Takeaways:\r\n<li>I’d like to experiment more with Lando for local dev.</li>\r\n<li>I want to understand more about the advantages and disadvantages between a decoupled architecture using universal JavaScript vs a JAM Stack approach.</li>\r\n<li>I need to make time to better understand how the ongoing efforts related to the Layout Initiative will impact my component driven process.</li>\r\n</ul>\r\n</p>\r\n\r\n<p>A huge thanks goes out to the MidCamp organizers who overcame some pretty steep challenges to put on another great camp. I’ll see everyone next year at <a href="https://twitter.com/midwestcamp/status/973622480853225473">O’Midcamp</a>!</p>'},relationships:{image:null},fields:{slug:"/post/midcamp-2018-thoughts/"},post_type:"post",created:1521050231}},{node:{id:"c181cdb2-4934-4d08-bd1a-c5040a72e51c",title:"Here's how React's New Context API Works - Wes Bos",link:"https://www.youtube.com/watch?v=XLJN4JfniH4",body:{value:"<p>Have been hedging my bets about learning Redux, but was getting close to taking the plunge. Now I'm wondering if React's upcoming Context API can meet my needs. Looking forward to more takes on advantages and disadvantages of the context API in comparison to things like Redux.</p>"},relationships:{image:null},fields:{slug:"/link/here's-how-react's-new-context-api-works-wes-bos/"},post_type:"link",created:1520962950}}],pathPrefix:"",first:!1,last:!1,index:5,pageCount:9,additionalContext:{}}}}});
//# sourceMappingURL=path---5-70d7a8cc68fbadbe9e47.js.map