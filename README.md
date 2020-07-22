In this project you’ll be creating a pretty neat toy for your 
portfolio to flex your DOM manipulation skills. You’re going to 
build a browser version of something between a sketchpad and an 
Etch-A-Sketch.

This project should not be easy for you. You’ll probably have to 
Google frequently to get the right JavaScript methods and CSS to 
use - in fact, that’s the point! You can build this using the 
tools that you have already learned and there are plenty of 
resources on the net for learning stuff that we haven’t covered 
yet if you decide you need it. We’ll walk you through the basic 
steps, but it will be up to you to actually implement them.

If you get totally stuck drop by the chatroom.. someone will be 
there to point you in the right direction.

---Personal Notes---
Intimidated by the them saying "this project should not be easy 
for you," I chose to practice on previous projects for a day and a 
half before starting this one. I think that was a smart decision, 
because now that I revisit the description and the particular 
steps of the assignment, it no longer looks as daunting, though 
I'm sure I'll be humbled soon enough. 

---Days later---
Yeah, humbling. Still wrestling with the reality that often you know
 what to do and the basics of how to do it, but writing the correct 
 code to execute that plan can be so difficult. Tried very hard to 
 make this project work and to do the optional additional 
 functionality with the tools I have learned to this point through 
 The Odin Project. In researching how to accomplish certain tasks, I 
 saw several solutions that used regular expressions or advanced 
 array manipulation that I don't feel educated about yet. Too 
 overwhelming. So, it took a while to figure it out with basic HTML, 
 CSS, and vanilla JavaScript. 

A particularly unpleasant challenge was trying to understand why and 
when Event Listeners fire. I ran into an issue where event listeners 
stayed attached to elements even when the function that originally 
called them was no longer calling. I couldn't remove the listeners 
from within other functions because they were not in scope. It took 
lots of tedious research to finally find a solution that seemed to 
work, which was "e.target.innerHTML = e.target.innerHTML", which 
seems like it shouldn't change anything, but it did seem to remove 
any existing event listeners so that I could apply only the listener 
I wished to use within the given function. 

Happy enough at this point, though there are still some small 
details I would love to address if I could afford to be more of a 
perfectionist and more ambitious. 