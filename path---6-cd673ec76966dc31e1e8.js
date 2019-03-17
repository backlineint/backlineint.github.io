webpackJsonp([0x927cc07429d8],{1106:function(e,t){e.exports={pathContext:{group:[{node:{id:"91d35341-8cdf-482c-a432-095dedf6ce3c",title:"UI Patterns Pattern Lab and a Call for Help",link:null,body:{value:'<p><em>tldr; I’ve recently been working on the <a href="https://www.drupal.org/project/ui_patterns_pattern_lab">UI Patterns Pattern Lab</a> module which automatically discovers components in a Pattern Lab instance for use with Drupal. I’m looking to test it with a variety of Pattern Lab instances - <a href-"https://github.com/backlineint/ui_patterns_pattern_lab/issues/2">can you help</a>?</em></p>\r\n\r\n<p>If we’ve run into each other at Drupal camps over the past couple of years, you’ve probably heard me talk about component based development and most likely also the <a href="https://www.drupal.org/project/ui_patterns">UI Patterns Module</a>. I’m a big supporter of a pattern library driven approach to building a Drupal site, but also feel that some common practices can be complicated - especially for those new to the approach or those not focused on the front end. In my opinion, UI Patterns can reduce that complexity quite a bit.</p>\r\n\r\n<p>When the UI Patterns module came along it seemed too good to be true. It allowed patterns to be formally defined as Drupal plugins and took the data mapping that was commonly happening behind the scenes in Twig templates and exposed these in the admin UI where a wider audience could configure and understand them.  But if you were using an external pattern library in your project, configuring these patterns for use with the UI Patterns module felt a little redundant.</p>\r\n\r\n<p>In <a href="http://patternlab.io/">Pattern Lab</a> for example you would commonly have a json or yaml file that specified sample data for each of the fields in your pattern. Much of that same data would be once again defined in the yaml file for the related UI Pattern in Drupal. The UI Patterns project has always envisioned that there would eventually be supporting modules that could automatically discover patterns from pattern libraries like Pattern Lab and Fractal, which would make it unnecessary to re-define patterns for use with Drupal. The module even contains classes that could be extended for this purpose. But similar to my initial feelings about the module, that just sounded too good to be true.</p>\r\n\r\n<p>I should have seen this coming, but it might not be too good to be true after all.</p>\r\n\r\n<p>On an issue in the UI Patterns repository, <a href="https://www.drupal.org/u/pdureau">Pierre Dureau</a> shared his work creating such an integration module for use with UI Patterns and Fractal. It made a lot of sense to me when I looked at the code, and seemed like something that would be reasonable to adapt to a Pattern Lab version. I asked around to see if folks would be cool with me taking a shot at that, and the <a href="https://www.drupal.org/project/ui_patterns_pattern_lab">UI Patterns Pattern Lab module</a> was born.</p>\r\n\r\n<p>\r\nAs of now, UI Patterns Pattern Lab supports the following:\r\n<ul>\r\n<li>Discovering UI Patterns that exist in the templates directory in any module or theme, or any custom twig namespace defined in a theme. Discovered patterns must have a pattern definition file in json or yaml, and a related twig template.</li>\r\n<li>Creating a library that includes css or js assets associated with your pattern.</li>\r\n<li>Parsing documentation from a related pattern documentation markdown file.</li>\r\n<li>Overriding default discovery behavior via variables in the pattern definition file.</li>\r\n</ul>\r\n</p>\r\n\r\n<p>More detailed documentation is available in <a href="https://www.drupal.org/docs/8/modules/ui-patterns-pattern-lab">the documentation guide on Drupal.org</a></p>\r\n\r\n<p>So the call for help part…</p>\r\n\r\n<p>I think that the more Pattern Lab instances we can test this against, the more useful it can be (I did some initial testing using Emulsify and was able to fix a handful of bugs as a result.) If you have a Pattern Lab instance that you’d be willing to try with the module (or even just one you’d be willing to share with me), it would be a huge help.</p>\r\n\r\n<p>There are a wide variety of ways to configure patterns in Pattern Lab, so don’t be surprised if your pattern library is the one that causes the module to blow up. Also, the thing I’m struggling with right now is how realistic is is to use this with an existing pattern lab instance, especially ones that were set up to do a lot of complicated mapping in twig templates. It remains to be seen if the real use of this module would be with existing pattern lab instance, or along side a pattern library built with this approach in mind. Hopefully after putting this through the paces with a handful of Pattern Lab instances a trend will become obvious.</p>\r\n\r\n<p>I’d appreciate any of the help you or your pattern library can lend here. Feel free to get in touch, or <a href="https://github.com/backlineint/ui_patterns_pattern_lab/issues/2">comment on this github issue</a>. Thanks!</p>'},relationships:{image:null},fields:{slug:"/post/ui-patterns-pattern-lab-and-a-call-for-help/"},post_type:"post",created:1527789233}},{node:{id:"6514fd97-2e84-4ee9-afe5-aef765de465c",title:"RSS Feed",link:"http://brianperryinteractive.com/rss.xml",body:{value:'<p>In an effort to stay on the absolute cutting edge of web technology, I\'ve added an <a href="http://brianperryinteractive.com/rss.xml">RSS Feed</a>. Enjoy!</p>'},relationships:{image:null},fields:{slug:"/link/rss-feed/"},post_type:"link",created:1527435462}},{node:{id:"9fb543fe-da15-4070-ac8d-da5afcff6f06",title:"Chicagoland Half Marathon 2018",link:null,body:{value:"<p>Completed a soaking wet Chicagoland Half Marathon yesterday.  Finished 1:56:49.  About a minute and a half off of my best time, but far from my worst. Hoping for better weather next year.</p>"},relationships:{image:{localFile:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQL/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAwEC/9oADAMBAAIQAxAAAAHD3HwoZMpqpJzqTr//xAAcEAACAgIDAAAAAAAAAAAAAAAAAgEDERMSIEH/2gAIAQEAAQUCixiXYm1zxYwZNZwNfT//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIQERL/2gAIAQMBAT8BFDVXTP/EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEr/8QAGhAAAQUBAAAAAAAAAAAAAAAAAAEQMTJRIP/aAAgBAQAGPwKVLFlbXwnj/8QAIBAAAgIBAwUAAAAAAAAAAAAAAREAITEQUWFxkaGx4f/aAAgBAQABPyGr7oEfMuNV3ZnOLMEPtMvkorJUDYfTORabaf/aAAwDAQACAAMAAAAQtBPx/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxCcHATg3//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBFB/9oACAECAQE/ENHSf//EACAQAQACAgEEAwAAAAAAAAAAAAEAESExQRBRYYFxocH/2gAIAQEAAT8QXXMmnwi0HRSOBdY+ZqQVqKBLFiOfDzUeuSCtT63mNlp9I99F0hnOooNC+Gc3f56mdq3vRHmHR//Z",aspectRatio:.8003341687552213,src:"/static/70b98f0496180b635bb092547e0b3a61-615943a5c153779a3adb34af2689271e-42807.jpg",srcSet:"/static/70b98f0496180b635bb092547e0b3a61-615943a5c153779a3adb34af2689271e-960f9.jpg 313w,\n/static/70b98f0496180b635bb092547e0b3a61-615943a5c153779a3adb34af2689271e-c36f2.jpg 625w,\n/static/70b98f0496180b635bb092547e0b3a61-615943a5c153779a3adb34af2689271e-42807.jpg 1250w,\n/static/70b98f0496180b635bb092547e0b3a61-615943a5c153779a3adb34af2689271e-dbc5e.jpg 1875w,\n/static/70b98f0496180b635bb092547e0b3a61-615943a5c153779a3adb34af2689271e-6e234.jpg 2500w,\n/static/70b98f0496180b635bb092547e0b3a61-615943a5c153779a3adb34af2689271e-8af24.jpg 2874w",sizes:"(max-width: 1250px) 100vw, 1250px"}}}}},fields:{slug:"/note/chicagoland-half-marathon-2018/"},post_type:"note",created:1526909009}},{node:{id:"2a497081-50c3-44c5-8cbb-60ddffc1bbc5",title:"My Struggle to Learn React - Brad Frost",link:"http://bradfrost.com/blog/post/my-struggle-to-learn-react/",body:{value:"<blockquote>I’m going to be honest: I’ve had a hell of a time getting my head around React. More than any other technology I’ve touched over the last 10 years of my career, I just haven’t had it click for me. It’s very frustrating as I really want to learn it, and it’s clear the library has legs.</blockquote>\r\n\r\n<p>I found React very difficult to learn the first time I attempted it. So much so that I actually just gave up and moved on to other things. Given that, I find Brad's honest take here extremely relatable (except for the part where Dan Abramov personally helped him through his React struggles.) And from a purely selfish perspective, knowing that a developer (sorry, frontend designer) that I admire had similar struggles with React makes me feel a bit better about myself.</p>\r\n\r\n<p>I still don't consider myself a React expert, but three specific things made it click for me:</p>\r\n\r\n<ul>\r\n<li>I know Brad threw some shade in his post, but <a href=\"https://reactforbeginners.com/\">Wes Bos' React for Beginners</a> just made a lot of sense to me when other tutorials didn't.</li>\r\n<li>I enforced what I learned by applying it to <a href=\"https://github.com/backlineint/aoty-visualizations\">a side project that I found legitimately interesting</a>.</li>\r\n<li>I eventually realized that I was trying to tackle things that were too complex. It wasn't until I focused on nailing some really basic stuff that things started to move fast and click. For me it was representing data in a table before I started trying to filter, sort, or otherwise visualize that data. For Brad it was <a href=\"http://bradfrost.com/blog/post/dumb-react/\">rendering a full page worth of mock components</a>.</li>\r\n</ul>\r\n\r\n<p>I'm glad I pushed through. Even though I have a lot to learn and a limited amount of time to do so, I really like React.</p> "},relationships:{image:null},fields:{slug:"/link/my-struggle-to-learn-react-brad-frost/"},post_type:"link",created:1526495549}},{node:{id:"5f95109e-e3bb-4bbd-aa24-ccfea36bd86b",title:"Recommended Pattern Lab Version and Edition for Drupal Integration",link:null,body:{value:'<p>Saw some useful clarification in the #pattern-lab channel on the <a href="http://drupaltwig-slack.herokuapp.com/">Drupaltwig slack</a> about which version and edition of Pattern Lab is recommended to use with Drupal going forward.</p>\r\n\r\n<ul>\r\n<li>As far as which repository to use,  <a href="https://www.drupal.org/u/evanlovely">EvanLovely</a> and <a href="https://github.com/sghoweri">Salem Ghoweri</a> clarified that we should be using the main Pattern Lab repository, not the Drupal fork that was previously active. Most if not all of the changes from the fork have been merged back into the main Pattern Lab repository.</li>\r\n<li>And regarding the edition, <a href="https://www.drupal.org/u/evanlovely">EvanLovely</a> somewhat surprisingly recommends the Twig edition over the Drupal edition. Apparently the differences are minimal, and "A true Drupal edition is better represented as a Drupal theme with the Twig edition integrated."</li>\r\n</ul>\r\n\r\n<p>So in summary, the next time you need Pattern Lab for a Drupal project, <a href="https://github.com/pattern-lab/edition-php-twig-standard">go here</a>.</p> \r\n\r\n<p>Helpful clarification given all of the Pattern Lab forks and editions floating around out there.</p>'},relationships:{image:null},fields:{slug:"/note/recommended-pattern-lab-version-and-edition-for-drupal-integration/"},post_type:"note",created:1525878159}}],pathPrefix:"",first:!1,last:!1,index:6,pageCount:12,additionalContext:{}}}}});
//# sourceMappingURL=path---6-cd673ec76966dc31e1e8.js.map