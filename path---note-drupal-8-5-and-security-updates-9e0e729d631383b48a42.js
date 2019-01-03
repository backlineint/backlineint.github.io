webpackJsonp([9171580546620],{1140:function(e,t){e.exports={data:{nodePost:{title:"Drupal 8.5 and Security Updates",link:null,body:{value:'<p>As always, I learned a few things this week upgrading projects to Drupal 8.5 and applying the most recent <a href="https://www.drupal.org/sa-core-2018-002">highly critical Drupal security update</a>.</p>\r\n\r\n<p>The first is yet another reminder to carefully read and consider the documentation. The highest priority projects that I needed to apply the security release to were on 8.4.5 at the time of the pre-announcement. I took this as a good opportunity to upgrade to 8.5 and then kind of got tunnel vision about getting these projects, and also my lower priority D8 projects up to 8.5 in preparation for the security release. Not having looked back at the security advisory since my initial read, I lost sight of the fact that I could easily apply the patch to their current D8 version and worry about 8.5 when the pressure was off a little bit.  Thankfully I was reminded of this during a well timed check in meeting with the Drupal practice at HS2 - a few of my 8.5 upgrades were a little behind schedule.  Having the flexibility to apply the security update to older versions of D8 really helped and most likely prevented us from rushing a few upgrade related regressions out into production.</p>\r\n\r\n<p>Speaking of the 8.5 upgrade getting a bit behind schedule, minor Drupal updates (8.4, 8.5 and so on) are still more challenging than I\'d expect them to be.  Jeff Geerling\'s post <a href="https://www.jeffgeerling.com/blog/2018/updating-drupalcore-composer-drupal-core-doesnt-update">Updating drupal/core with Composer - but Drupal core doesn\'t update</a> proved invaluable as I ran into the same issue. I also had another pretty tricky dependency conflict that eventually required me to remove and work around a dependency (again, <a href="https://www.jeffgeerling.com/blog/2018/updating-drupalcore-composer-drupal-core-doesnt-update">Jeff Geerling\'s post</a> helped quite a bit here.)  After successfully upgrading to 8.5 composer-wise, I found that <a href="https://www.drupal.org/project/page_manager/issues/2918564">a patch to Page Manager</a> needed to be applied for the site to even run.</p>\r\n\r\n<p>I\'m getting better with managing Drupal projects via composer, but still have some room to grow.  Lowest hanging fruit is that I need to start managing patches via composer. Once that clicked in my brain it was a little to late to experiment with it.  Next time.  I also still sometimes get tripped up with the difference between the ^ and ~ version constraints in composer.json which is embarrassing to admit.</p>\r\n\r\n<p>I also ran updates on Drupal instances based on API-first distributions. Those were a bit of a different beast. In my case, most were single purpose enough that I was able to just run composer update and call it a day.  That said, each distro had their quirks.  The version of <a href="https://github.com/acquia/reservoir">Reservoir</a> I was using had a dependency conflict that prevented the upgrade until I manually locked Reservoir at Alpha 4. <a href="http://www.contentacms.org/">Contenta</a> seems to have <a href="https://github.com/contentacms/contenta_jsonapi/issues/266">a patch that won\'t apply to 8.5</a></p>\r\n\r\n<p>I\'m all for learning, but also looking forward to this process becoming smoother sailing in the future.</p>'},relationships:{image:null},created:1522418446}},pathContext:{slug:"/note/drupal-8.5-and-security-updates/"}}}});
//# sourceMappingURL=path---note-drupal-8-5-and-security-updates-9e0e729d631383b48a42.js.map