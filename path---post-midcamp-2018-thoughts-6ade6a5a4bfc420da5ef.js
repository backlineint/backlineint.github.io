webpackJsonp([0x8e7cfe574c2c],{1151:function(e,t){e.exports={data:{nodePost:{title:"MidCamp 2018 Thoughts",body:{value:'<p>Another year, another great MidCamp!</p>\r\n\r\n<p>I wasn’t able to attend for training and sprints on Thursday (1st grade play FTW!) but ended up talking to a former co-worker who attended the training \'<a href="https://www.midcamp.org/training/what-am-i-getting-myself-drupal-crash-course-non-developers">What Am I Getting Myself Into? A Drupal Crash Course for Non-Developers.</a>’ While it\'s easy to get wrapped up in the new and advanced at a camp like this, it is also really important to see newcomers, beginners, and people with Drupal-adjacent roles take steps into becoming more hands on with the CMS. She specifically mentioned that the training helped her have some revelations about a few Drupal-isms that us crazy developers have been talking about all this time.</p>\r\n\r\n<p>After some really enjoyable traffic, Friday brought me to the first day of sessions.  A couple of highlights:</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/local-dev-environments-dummies">Local Dev Environments for Dummies</a> - the bulk of this presentation reviewed data from a 2018 Drupal Developer Survey, and the data alone was extremely fascinating. It also provided some interesting perspectives on Vagrant vs. Docker for local development (go Vagrant if matching your prod environment exactly is important, and Docker for pretty much everything else.) I also walked out of this one itching to learn more about <a href="https://docs.devwithlando.io/">Lando</a>.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/decoupled-drupal-across-stack">Decoupled Drupal Across The Stack</a> - always enjoy seeing <a href="https://www.drupal.org/u/prestonso">Preston</a> speak about Decoupled Drupal, and being aware of his (and Acquia’s) perspective on the topic is important if I’m going to be speaking about adjacent topics as well. A good talk for  someone looking to survey the current Decoupled Drupal landscape. Was interesting to see that all of the examples Preston provided included some server side universal JavaScript component to handle the initial page view. I’ve been working on learning more about the <a href="https://jamstack.org/">JAM Stack</a> which specifically does not include JavaScript running on the server. Seeing examples of this alternative stack helped get me thinking more about the pros and cons of both.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/component-based-drupal">Component Based Drupal</a> - Surprise! After a cancellation, <a href="https://www.drupal.org/u/nerdstein">Adam Bergstein</a> and I stepped in without much of a safety net (I learned that I was co-presenting this session due to <a href="https://twitter.com/hook42inc/status/971837614004342784">a mention on twitter</a>) to talk about the current state of building and theming with components in Drupal. I’ve always enjoyed my conversations with Adam on this topic because while we primarily agree, we also have some differences of opinion and take some different approaches in our workflow. Continuing this conversation out in the open seemed to be useful to people, and I even got to joke around a little bit. I wouldn’t be surprised if Adam and I presented in a similar format in the future.</p>\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/IUAVgejng9w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n\r\n<p>Saturday - less traffic, more sessions.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/oop-pokemon-journey">OOP - The Pokemon Journey</a> / <a href="https://www.midcamp.org/topic/bending-behats-benefits-live-coding-adventure">Bending Behat\'s Benefits: A live coding adventure</a> - A journey followed by an adventure? Hell of a way to spend a groggy Saturday morning. I love hearing from both <a href="\r\n">Fatima</a> and <a href="https://www.drupal.org/u/stevector">Steve</a> whenever I can.  The OOP Pokemon Journey was a fun and easy to understand talk on a topic that I honestly don’t yet consider myself an expert on. And Bending Behat’s Benefits made me anxious to incorporate some more test driven development into my process after some time away.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/too-many-cooks-supporting-augmented-teams-without-getting-salty">Too many cooks! Supporting augmented teams without getting salty</a> - I wasn’t able to attend in person, but heard great things. It’s next up in the YouTube queue.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/american-medical-association-topic-landing-pages-d8-case-study">American Medical Association: Topic Landing Pages (A D8 Case Study)</a> - an excellent, and extremely relatable talk about the challenges of Drupal 8 landing page building integrated with a pattern library based approach to theming. I’ve felt so much similar pain/joy on recent projects. They also closed with the reminder that we all need to look into how Layout Builder in 8.5 and the Layout Initiative will impact this process going forward, which I think is extremely important.</p>\r\n\r\n<p><a href="https://www.midcamp.org/topic/hot-jamstack-lessons-building-music-discovery-app-drupal-and-react">Hot JAMS(tack): Lessons from Building a Music Discovery App with Drupal and React</a> -This is my attempt to demystify the process of creating a decoupled app with Drupal and React by way of a fun side project. It was my first time giving a talk that I’ve had brewing for a while, and I was happy with how it went. Heard a lot of positive and helpful feedback and have a few things that I think I can tweak to make it more useful for people. Looking forward to presenting it again <a href="https://events.drupal.org/nashville2018/sessions/hot-jamstack-building-music-discovery-app-drupal-and-react">at DrupalCon Nashville</a>.</p>\r\n\r\n<p>Plus, this was pretty cool:\r\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Funny slide! <a href="https://t.co/LLqwuVXFb3">https://t.co/LLqwuVXFb3</a></p>&mdash; Dries Buytaert (@Dries) <a href="https://twitter.com/Dries/status/972816373545127936?ref_src=twsrc%5Etfw">March 11, 2018</a></blockquote>\r\n</p>\r\n\r\n<p><iframe width="560" height="315" src="https://www.youtube.com/embed/Sj_nE2IukOs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>\r\n\r\n<p>Sunday was sprints, and unfortunately more traffic on the way home.  I was dragging a little bit at this point, but still feel like I was able to get a few things done. I got back to the <a href="https://www.drupal.org/project/foundation_patterns">Foundation Patterns</a> theme and responded to the first issue submitted against the project. I helped <a href="https://www.drupal.org/u/amklose">Tony Klose</a> set up a Pattern Lab instance for a Drupal theme, and realized that I don’t have a clear personal process for including a pattern library as an external dependency of a theme. I also collaborated with Adam Bergstein a bit more looking at a possible React front-end for <a href="https://simplytest.me/">simplytest.me</a></p>\r\n\r\n<p>\r\n<ul>\r\nMajor Takeaways:\r\n<li>I’d like to experiment more with Lando for local dev.</li>\r\n<li>I want to understand more about the advantages and disadvantages between a decoupled architecture using universal JavaScript vs a JAM Stack approach.</li>\r\n<li>I need to make time to better understand how the ongoing efforts related to the Layout Initiative will impact my component driven process.</li>\r\n</ul>\r\n</p>\r\n\r\n<p>A huge thanks goes out to the MidCamp organizers who overcame some pretty steep challenges to put on another great camp. I’ll see everyone next year at <a href="https://twitter.com/midwestcamp/status/973622480853225473">O’Midcamp</a>!</p>'},relationships:{image:null},created:1521050231}},pathContext:{slug:"/post/midcamp-2018-thoughts/"}}}});
//# sourceMappingURL=path---post-midcamp-2018-thoughts-6ade6a5a4bfc420da5ef.js.map