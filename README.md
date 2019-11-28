# Tappy
Are you also annoyed by having tons of tabs open and you can't see the tabs because of the tabs.  
Well I had it with these mother****\*ing tabs in this mother****\*ing browser.
Tappy will fix it for you!

# Why you should use it
If you are like me you'll probably end up with a lot of tabs opened at the end of the day.
After some days you'll get so annoyed you just close all of them, just after remembering that
you found that one handy page that would help you solve some issue, and now it is gone to
somewhere in your web history and you can't seem to find it without looking for a needle in 
a haystack.

All the extensions out there suck as as they are just closing tabs after x time or need to be
triggered manually. If there would just be an extension that closes unused tabs in a more
intuitive way that closes tabs in a more intelligent way.

# What it can do
First things first, this extension just closes tabs that you probably won't need anymore.
It tries to do this with a little bit of intelligence.

The closing strategy looks somewhat like this:

  1. Do not close tabs configured as `Persistent tabs`;
  2. Close `Higly disposable` tabs after not used for x minutes;
  3. Do not close tabs that play media on the background; //todo: check if this is possible
  4. Smart time based close:
     1. Configurable timeout `closeTimeout`;
     1. Calculate time approximately needed to read page `ReadTime`;
     2. Track time page is active in browser `ActiveTime`;
     3. Close if `Readtime < ActiveTime && closeTimeout < notActiveTime`.
     
This way it is possible for you to configure the closing behaviour in a way you like it.
There are multiple strategies possible and you can use them together.

You get to choose.

# How it works
//Todo: add technical description