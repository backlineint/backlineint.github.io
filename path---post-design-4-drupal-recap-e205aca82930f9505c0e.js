webpackJsonp([0xa3ef9a036853],{1126:function(e,t){e.exports={data:{nodePost:{title:"Design 4 Drupal Recap",body:{value:'<p style="text-align:center;"><em>(Photo credit: Andy Olson)</em></p>\r\n<p>Being back in Cambridge pretty much feels like being home for me, so I jumped at the chance to participate in <a href="https://www.design4drupal.org/">Design 4 Drupal</a> this year. While I currently live in the Chicago area, I grew up in Rhode Island and lived in Waltham, MA for about 5 years before heading midwest. Cambridge-wise I performed at <a href="http://www.improvboston.com/">ImprovBoston</a> for many years, and also did contract and part-time work for Harvard and MIT. Combine that with a total of <a href="https://www.hs2solutions.com/blog/design-4-drupal-conference-features-hs2-thought-leaders">four HS2 related talks</a>, keynotes from <a href="https://adactio.com/">Jeremy Keith</a> and <a href="https://dri.es/">Dries Buytaert</a> and the excitement levels for this one were super high.</p>\r\n<p>Two keynotes from folks I follow closely were undeniably a big draw here, and they did not disappoint.</p>\r\n<p><b>The Building Blocks Of The Indie Web</b></p>\r\n<p>The concepts behind <a href="https://indieweb.org/">the indie web</a> aren\'t for everyone, at least not with the tools that exist today. But for me, having your own website and owning your own data are <a href="http://brianperryinteractive.com/link/to-pesos-or-to-posse-dries-buytaert/">a big motivator behind how I\'m approaching this site</a> and there is quite a bit more that I\'d like to do in the future. Jeremy\'s talk was a great introduction to the concepts that power the indie web, how they actually work, and what can be done to make this movement thrive. He\'s a really engaging speaker as well - I\'d recommend both <a href="https://www.youtube.com/watch?v=GZUq1kF4wXk">watching the recording</a> and also reading the <a href="https://adactio.com/journal/14074">recap of his Boston trip</a>.</p>\r\n<p><b>Exploring the New Drupal Front-end with JavaScript</b></p>\r\n<p>It was great getting a chance to see Dries speak in a less formal and non-DrupalCon Keynote environment. His presentation featured a nice balance between history and ongoing evolution of both Drupal and JavaScript. From the perspective of evolution, Dries outlined what he sees as the two main focus areas for Drupal 8:</p>\r\n<ol>\r\n<li>Making Drupal easier to use for both content creators and site builders.</li>\r\n<li>Evolving Drupal into an API-first platform.</li> \r\n</ol>\r\n<p>Drupal\'s JavaScript modernization efforts will continue to help evolve the robustness of Drupal\'s API, both by offering alternative formats to REST like JSON API and GraphQL, but also by providing API support for an alternative Drupal admin UI built in React.  Dries outlined a longer list of efforts in support of this JavaScript based administration interface - which had the positive side effect of benefiting all Decoupled Drupal builds.</p>\r\n<p>Dries offered a straightforward rallying cry for how we can continue to allow Drupal to grow and thrive on a JavaScript dominated web - we need to find ways to get people outside of the Drupal community to think of Drupal as an option for storing and managing their data. One of my future goals as a speaker is to expand beyond the Drupal community, so it was nice to hear that I could align with this effort.</p>\r\n<p>In response to some praise during the Q&A related to improvements in Drupal user experience, Dries was brutally honest about the fact that we still have a long way to go. In his opinion, ease of use is still the number one thing holding Drupal back, going as far as stating explicitly "I\'m not satisfied with Drupal\'s ease of use." It would have been easy for him to accept the compliment on behalf of Drupal, but I think many in the design-focused audience would have found that disappointing. Hearing such an impassioned, clear counterpoint from Dries is likely to stand out in my mind for a long time.</p>\r\n<p>Given all I\'ve said, I doubt this would be surprising, but I think that <a href="https://www.youtube.com/watch?v=FCgPM5t7MHg">this talk is a must watch</a> for anyone invested in the future of Drupal.</p>\r\n<p><b>Fellow HS2\'ers at Design for Drupal</b></p>\r\n<p>I was very happy to have a handful of friends from HS2 Solutions presenting at Design 4 Drupal as well.</p>\r\n<p><em><a href="https://www.design4drupal.org/sessions/uxproject-strategy/effective-cross-functional-communication">Effective Cross Functional Communication</a></em></p>\r\n<p>Amanda and Seth provided an insightful look at one of the hidden challenges of this profession - cross functional communication. The talk was full of thoughtful reminders (always assume positive intent, listen to understand - don\'t listen to interrupt) and just as impressively provided a great model for a seamless approach to co-presenting. I\'ll be looking back at this one when prepping for future joint talks. (<a href="https://www.youtube.com/watch?v=nud4i2-lIbY">Video</a>) </p>\r\n<p><em><a href="https://www.design4drupal.org/sessions/case-studypanel/how-svgs-power-wilson-sporting-goods-product-configurator">How SVGs Power Wilson Sporting Goods Product Configurator</a></em></p>\r\n<p>Projects like the Wilson product configurator are among the things that make me proud to work at HS2. Creating a UI to allow customers to design custom versions of uniforms and sporting equipment can seem simple, until you consider the sheer number of possible unique variations that need to be provided. Solving for the hidden complexity in a system like this is something that I find endlessly fascinating, and Andy did an excellent job explaining how it was done. (<a href= "https://www.youtube.com/watch?v=dHNFVL8sTRY">Video</a>) </p>\r\n<p><b>My Talks</b></p>\r\n<p>I gave two talks for the first time which was pretty stressful, but I\'m happy with how both turned out.</p>\r\n<p><em><a href="https://www.design4drupal.org/sessions/uivisual-design/storybook-interactive-pattern-library-your-decoupled-applications">Storybook: An Interactive Pattern Library for Your Decoupled Applications</a></em></p>\r\n<p>Prepping for this talk allowed me to go back and formalize some of the things I had learned about using Storybook as a development environment for React components. The biggest lesson learned for me was how much following a few conventions related to mocking data can streamline the setup and configuration process. I also continue to be impressed with how useful the addon ecosystem is and how well Storybook can inform testing.</p>\r\n\r\n<p>Through follow up discussions with Andy I also spent some time thinking about how a tool like Storybook can fit into component-based JavaScript development workflows at HS2. I personally see Storybook as more of a development environment and less of a style guide (the workshop portion of <a href="http://bradfrost.com/blog/post/the-workshop-and-the-storefront/">Brad Frost’s ‘Workshop and Storefront’ concept</a>.) The finished components can then be consumed in their target applications alongside <a href="https://github.com/bradfrost/gatsby-style-guide-guide">a more formal statically generated style guide</a>. I\'ll be presenting this one again at <a href="https://www.drupalgovcon.org/">Drupal GovCon</a> in August and hope to incorporate a little more of these concepts into the talk.</p>\r\n\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/NwZJ5M5tu7s?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n\r\n<p><em><a href="https://www.design4drupal.org/sessions/theming/back-basics-drupal-8-theming">Back to Basics Drupal 8 Theming</a></em></p>\r\n<p>I had intended for this to be a beginner talk, but I don\'t think it really ended up that way. Maybe beginner++?  I do think there is useful information for beginners in here, but I acknowledge that this would be a tough place to jump in. In any case, the process of putting this talk together and re-evaluating my workflow was an extremely useful exercise for me. I also heard feedback from more than one backend developer who attended that thought it was a nice overview. Hoping to refine this one and present it again. And maybe this time I\'ll try to not be quite as punchy and over caffeinated :)</p>\r\n<iframe width="560" height="315" src="https://www.youtube.com/embed/pDQ_NCxk8vA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n<p><b>Other Sessions I Enjoyed</b></p>\r\n<ul>\r\n<li><a href="Building a Living Style Guide with Herman - in Your Sass!">Building a Living Style Guide with Herman - in Your Sass!</a> - enjoyed learning about Herman, a living style guide tool with some great specialized Sass focused options. There did seem to be a surprising amount of overhead necessary to get it running though. Was also great getting a chance to meet Chris at this conference.</li>\r\n<li><a href="https://www.design4drupal.org/sessions/site-building/meta-and-schema-defining-content-about-your-content">Meta and Schema: Defining the Content about your Content</a> - always enjoy watching Jim speak, and this was an extremely detailed overview in a topic I should be more of an expert in.</li>\r\n<li><a href="https://www.design4drupal.org/sessions/case-studypanel/front-end-tooling-panel-discussion">Front-end Tooling: A Panel Discussion</a> - hearing three experts share their thoughts on this topic was a nice reminder that this really is difficult and constantly evolving (it isn\'t just me.) Also a nice reminder to finally try <a href="https://prettier.io/">Prettier</a>.</li>\r\n</ul>\r\n<p><b>Sessions I Hope to Follow Up On</b></p>\r\n<ul>\r\n<li><a href="https://www.design4drupal.org/sessions/uivisual-design/maintaining-design-consistency-across-every-channel">Maintaining Design Consistency Across Every Channel</a></li>\r\n<li><a href="https://www.design4drupal.org/sessions/site-building/estimates-expectations-and-evolution-during-projects-journey-rfp-release">Estimates, Expectations, and Evolution During a Project\'s Journey from RFP to Release</a></li>\r\n<li><a href="https://www.design4drupal.org/sessions/theming/next-gen-design-systems-pattern-lab-twig-and-web-components">Next Gen Design Systems with Pattern Lab, Twig, and Web Components</a></li>\r\n<li><a href="https://www.design4drupal.org/sessions/site-building/estimates-expectations-and-evolution-during-projects-journey-rfp-release">Estimates, Expectations, and Evolution During a Project\'s Journey from RFP to Release</a> - I\'ve heard great things about this one from multiple Drupal events, and impressively this was successfully presented remotely at Design 4 Drupal.</li>\r\n</ul>\r\n<p><b>Sprints</b></p>\r\n<p>I worked on the <a href="https://www.drupal.org/project/ui_patterns_pattern_lab">UI Patterns Pattern Lab</a> module - merged a pull request, responded to two issues (resolving one,) and got a few cleanup commits. I\'m also hoping that the MacBook that had coffee spilled on it at the end of the day is still functioning.</p>\r\n<p><b>Other Fun!</b></p>\r\n<p>Dinners with friends and family, Drupal Karaoke (and <a href="https://www.mcdwayne.com/2018/07/02/design4drupal-2018/">sent Dwane on a walk I\'ll probably never hear the end of</a>,) saw Restorations and Jeff Rosenstock open for <a href="https://www.instagram.com/p/Bkk0sZOHcbt/">Frank Turner at Royale</a>, and repeatedly had some of my all time favorite iced coffee at Clover. Phew!</p>  \r\n<p>Thanks to all at Design 4 Drupal, especially <a href="https://www.drupal.org/u/leslieg">Leslie Glynn</a> who was extremely supportive and organized a great event. Hope to be back with the New England Drupal community soon.</p>'},relationships:{image:{localFile:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAMABP/aAAwDAQACEAMQAAABj2d56VF5H//EABkQAQEBAAMAAAAAAAAAAAAAAAECEQADEv/aAAgBAQABBQI3m0X2vuxahMskZ//EABcRAAMBAAAAAAAAAAAAAAAAAAABERL/2gAIAQMBAT8Bapk//8QAFREBAQAAAAAAAAAAAAAAAAAAABL/2gAIAQIBAT8BU//EABwQAQACAgMBAAAAAAAAAAAAAAEAAhFREjFhcf/aAAgBAQAGPwLtgo2NTNa8fI51H5BZ/8QAGxAAAwADAQEAAAAAAAAAAAAAAAERIUFRMbH/2gAIAQEAAT8hg5o6SwOzwxuCZ4ZU1CoOPgjSuH//2gAMAwEAAgADAAAAECDP/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARITH/2gAIAQMBAT8QIFcZjLn/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QDGP/xAAaEAEBAQEBAQEAAAAAAAAAAAABESEAMUFh/9oACAEBAAE/EMBQq15ZeNziUgTN59SgoQec7K2A8xFP2X4eN2u2+69//9k=",aspectRatio:1.7699736611062336,src:"/static/1cc9b0d115f1000dc107c7da80683419-494fd6c2d63d7b39f27af58b5153ef65-42807.jpg",srcSet:"/static/1cc9b0d115f1000dc107c7da80683419-494fd6c2d63d7b39f27af58b5153ef65-960f9.jpg 313w,\n/static/1cc9b0d115f1000dc107c7da80683419-494fd6c2d63d7b39f27af58b5153ef65-c36f2.jpg 625w,\n/static/1cc9b0d115f1000dc107c7da80683419-494fd6c2d63d7b39f27af58b5153ef65-42807.jpg 1250w,\n/static/1cc9b0d115f1000dc107c7da80683419-494fd6c2d63d7b39f27af58b5153ef65-dbc5e.jpg 1875w,\n/static/1cc9b0d115f1000dc107c7da80683419-494fd6c2d63d7b39f27af58b5153ef65-80369.jpg 2016w",sizes:"(max-width: 1250px) 100vw, 1250px"}}}}},created:1530625198}},pathContext:{slug:"/post/design-4-drupal-recap/"}}}});
//# sourceMappingURL=path---post-design-4-drupal-recap-e205aca82930f9505c0e.js.map