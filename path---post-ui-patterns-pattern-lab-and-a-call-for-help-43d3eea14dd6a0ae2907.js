webpackJsonp([0x9f1d705d876f],{1103:function(e,t){e.exports={data:{nodePost:{title:"UI Patterns Pattern Lab and a Call for Help",body:{value:'<p><em>tldr; I’ve recently been working on the <a href="https://www.drupal.org/project/ui_patterns_pattern_lab">UI Patterns Pattern Lab</a> module which automatically discovers components in a Pattern Lab instance for use with Drupal. I’m looking to test it with a variety of Pattern Lab instances - <a href-"https://github.com/backlineint/ui_patterns_pattern_lab/issues/2">can you help</a>?</em></p>\r\n\r\n<p>If we’ve run into each other at Drupal camps over the past couple of years, you’ve probably heard me talk about component based development and most likely also the <a href="https://www.drupal.org/project/ui_patterns">UI Patterns Module</a>. I’m a big supporter of a pattern library driven approach to building a Drupal site, but also feel that some common practices can be complicated - especially for those new to the approach or those not focused on the front end. In my opinion, UI Patterns can reduce that complexity quite a bit.</p>\r\n\r\n<p>When the UI Patterns module came along it seemed too good to be true. It allowed patterns to be formally defined as Drupal plugins and took the data mapping that was commonly happening behind the scenes in Twig templates and exposed these in the admin UI where a wider audience could configure and understand them.  But if you were using an external pattern library in your project, configuring these patterns for use with the UI Patterns module felt a little redundant.</p>\r\n\r\n<p>In <a href="http://patternlab.io/">Pattern Lab</a> for example you would commonly have a json or yaml file that specified sample data for each of the fields in your pattern. Much of that same data would be once again defined in the yaml file for the related UI Pattern in Drupal. The UI Patterns project has always envisioned that there would eventually be supporting modules that could automatically discover patterns from pattern libraries like Pattern Lab and Fractal, which would make it unnecessary to re-define patterns for use with Drupal. The module even contains classes that could be extended for this purpose. But similar to my initial feelings about the module, that just sounded too good to be true.</p>\r\n\r\n<p>I should have seen this coming, but it might not be too good to be true after all.</p>\r\n\r\n<p>On an issue in the UI Patterns repository, <a href="https://www.drupal.org/u/pdureau">Pierre Dureau</a> shared his work creating such an integration module for use with UI Patterns and Fractal. It made a lot of sense to me when I looked at the code, and seemed like something that would be reasonable to adapt to a Pattern Lab version. I asked around to see if folks would be cool with me taking a shot at that, and the <a href="https://www.drupal.org/project/ui_patterns_pattern_lab">UI Patterns Pattern Lab module</a> was born.</p>\r\n\r\n<p>\r\nAs of now, UI Patterns Pattern Lab supports the following:\r\n<ul>\r\n<li>Discovering UI Patterns that exist in the templates directory in any module or theme, or any custom twig namespace defined in a theme. Discovered patterns must have a pattern definition file in json or yaml, and a related twig template.</li>\r\n<li>Creating a library that includes css or js assets associated with your pattern.</li>\r\n<li>Parsing documentation from a related pattern documentation markdown file.</li>\r\n<li>Overriding default discovery behavior via variables in the pattern definition file.</li>\r\n</ul>\r\n</p>\r\n\r\n<p>More detailed documentation is available in <a href="https://www.drupal.org/docs/8/modules/ui-patterns-pattern-lab">the documentation guide on Drupal.org</a></p>\r\n\r\n<p>So the call for help part…</p>\r\n\r\n<p>I think that the more Pattern Lab instances we can test this against, the more useful it can be (I did some initial testing using Emulsify and was able to fix a handful of bugs as a result.) If you have a Pattern Lab instance that you’d be willing to try with the module (or even just one you’d be willing to share with me), it would be a huge help.</p>\r\n\r\n<p>There are a wide variety of ways to configure patterns in Pattern Lab, so don’t be surprised if your pattern library is the one that causes the module to blow up. Also, the thing I’m struggling with right now is how realistic is is to use this with an existing pattern lab instance, especially ones that were set up to do a lot of complicated mapping in twig templates. It remains to be seen if the real use of this module would be with existing pattern lab instance, or along side a pattern library built with this approach in mind. Hopefully after putting this through the paces with a handful of Pattern Lab instances a trend will become obvious.</p>\r\n\r\n<p>I’d appreciate any of the help you or your pattern library can lend here. Feel free to get in touch, or <a href="https://github.com/backlineint/ui_patterns_pattern_lab/issues/2">comment on this github issue</a>. Thanks!</p>'},relationships:{image:null},created:1527789233}},pathContext:{slug:"/post/ui-patterns-pattern-lab-and-a-call-for-help/"}}}});
//# sourceMappingURL=path---post-ui-patterns-pattern-lab-and-a-call-for-help-43d3eea14dd6a0ae2907.js.map