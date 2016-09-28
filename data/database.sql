DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `permalink` TEXT NOT NULL,
  `title` TEXT NOT NULL,
  `content` TEXT NOT NULL,
  `is_deleted` INTEGER NOT NULL DEFAULT 0,
  `created_at` TEXT NOT NULL,
  `published_at` TEXT NOT NULL,
  `updated_at` TEXT NOT NULL
);

INSERT INTO `posts` (`permalink`, `title`, `is_deleted`, `created_at`, `published_at`, `updated_at`, `content`)
VALUES ('2013/12/slow-is-smooth-smooth-is-fast', 'Slow Is Smooth; Smooth Is Fast', 0, '2013-12-20 12:00', '2013-12-20 12:00', '2013-12-20 12:00',
'<img src="/images/slow-is-smooth.jpg" class="post-leader-image" /><p>I grew up being a big fan of horror movies. I enjoyed them all; from big blockbuster movies, to unheard of indie flicks, and there''s one type of scene all horror movies have in common: The young heroine manages to escape from the masked killer''s dungeon, and breathlessly makes back to her car. After fidgeting with her keys for what seems like an eternity, she finally gets the door open. She''s almost home free! After spending another minute panicking and dropping the keys on the floor, she finally gets the right key into the ignition. But it''s too late! All the time she wasted fidgeting with the car keys gave the killer a chance to catch up to her, and just as she''s about to start the car and drive off to safety, the killer pulls her out of the driver side window kicking and screaming. She almost made it! She would have made it too had she remembered this:</p>

<b>Slow is smooth; smooth is fast</b>

Or to put that in more familiar words, haste makes waste. The concept is simple: the faster you move while completing a task, the more mistakes you make, and the longer the task ultimately takes. On the other hand taking your time means fewer mistakes, which means you will get things done faster. The concept almost seems counter intuitive; Going slow and taking your time means tasks are finished quicker. Our horror movie maiden would have escaped the killer had she gone slower and not made so many mistakes.
<!--more-->
Programmers are infamous for pulling all night coding sessions fueled by coffee and mountain dew. When I was young I could easily write a thousand lines of code in a single sitting, and dammit, it was fun! But there was one little problem: the code I wrote was total crap. It was unreadable, undocumented, untested, unmaintainable, and worst of all it was full of logic errors. The types of logic errors I could have avoided had I not been mentally traveling at warp speed. The time I gained on the front-end by writing my code so quickly, was lost on the back-end having to fix and rewrite it. Any happiness my clients felt from having their website finished in record time quickly evaporated when it crashed.

Slow down. Take your time. Remember to stay focused on the task at hand. Engineering requires continuous critical thinking. Rushing through a task on mental autopilot leads to mistakes, and the final code will be unorganized, unfocused, and bloated. Taking your time to do things right the first time is the difference between 40 lines of loops and if…then spaghetti code, and 10 lines of easy to maintain engineering excellence.
');

INSERT INTO `posts` (`permalink`, `title`, `is_deleted`, `created_at`, `published_at`, `updated_at`, `content`)
VALUES ('2013/12/the-evolution-of-a-software-engineer', 'The Evolution of a Software Engineer', 0, '2013-12-20 12:00', '2013-12-20 12:00', '2013-12-20 12:00',
'<b>The First Year</b>
<img src="/images/evolution-1.png" class="block" />


<b>The Second Year</b>
<img src="/images/evolution-2.png" class="block" />
<!--more-->

<b>The Third Year</b>
<img src="/images/evolution-3.png" class="block" />


<b>The Fifth Year</b>
<img src="/images/evolution-4.png" class="block" />


<b>The Tenth Year</b>
<img src="/images/evolution-5.png" class="block" />
');

INSERT INTO `posts` (`permalink`, `title`, `is_deleted`, `created_at`, `published_at`, `updated_at`, `content`)
VALUES ('2014/01/is-programming-art', 'Is Programming Art?', 0, '2014-01-01 12:00', '2014-01-01 12:00', '2014-01-01 12:00',
'Christopher Pitt asked a simple question: <a href="https://medium.com/@assertchris/can-a-developer-be-called-a-creative-f43f2278ba05#.wfoap2qlt">Can a developer be called a creative?</a>

<blockquote>
  I am talking about whether systems architects or PHP developers (like me!) can be called a creative, even though we predominantly deal with code, and our grasp of colours, layout and iconography is limited to the unicode characters we appropriate for console and log messages.
</blockquote>

To be honest it never crossed my mind that programming was anything but a creative pursuit, and I’m happy to call myself an artist to anyone that will listen, but I understand why civilians (non-programmers) could see things differently.

A girlfriend once told me programming “looks boring” when I suggested learning a bit of JavaScript and HTML, and many years ago I was roommates with a painter, who, on hearing me proclaim my code was artwork, replied with a condescending, “Yeah, uh huh, sure!”
<!--more-->
Yes, I get it. To the casual observer it may appear terribly dreary staring at a monitor all day and night, with the steady drone of click, click, click coming from a keyboard, and I understand why a classic artist (writer, painter, musician) may scoff at the idea of programming as an art form. No one is going to look at my finished work in a gallery, and discuss the artist’s soul while sipping expensive wine.

What people don’t see is the explosion of activity happening in my head while I stare at those bright monitors with my bloodshot eyes. I’ve never surfed the waves of Hawaii, but I get an adrenaline rush from conquering problems. I’ve never played a hit single to a crowed of adoring fans — and certainly never had a hot groupie throw their bra at me — but I know the feeling of being taken to a higher conscience level when I get into a groove.

I know passion and excitement, and I know what it’s like to feel drained, exhausted, high, and elated when a project is finished. Most importantly though, I know how nerve-racking it can be to finally give my work to the world. Will people love it or hate it? Will people understand and appreciate the nuance of my work, or will they think it’s boring and stupid?

Make no mistake about it, programming is a creative pursuit, and I am an artist. I may work with a keyboard and IDE instead of a paint brush or guitar, but I have the same passion and dreams as an artist, and I live and die by the acceptance or rejection of my work by fans. My work may never be seen in a Soho art gallery, but it will be seen by millions of people.

Heck, I even occasionally sit back and admire my code while sipping expensive wine.
');