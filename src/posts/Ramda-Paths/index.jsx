import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles'
import { RamdaPathsSummary } from 'posts/Ramda-Paths/Summary'

import pathJs from './snippets/path.raw.js'
import pathsApApJs from './snippets/paths-ap-ap.raw.js'
import pathsApApOJs from './snippets/paths-ap-ap-o.raw.js'
import pathsApApOUncurrynUsewithJs from './snippets/paths-ap-ap-o-uncurryn-usewith.raw.js'
import pathsApFlipJs from './snippets/paths-ap-flip.raw.js'
import pathsReduceApJs from './snippets/paths-reduce-ap.raw.js'
import pathsReduceApUnapplyJs from './snippets/paths-reduce-ap-unapply.raw.js'
import pathsReduceApUnapplyUsewithJs from './snippets/paths-reduce-ap-unapply-usewith.raw.js'
import pathsJuxtMapJs from './snippets/paths-juxt-map.raw.js'
import pathsJuxtMapCurriedJs from './snippets/paths-juxt-map-curried.raw.js'
import pathsJuxtMapUncurryNJs from './snippets/paths-juxt-map-uncurryn.raw.js'
import pathsLiftJs from './snippets/paths-lift.raw.js'
import pathsLiftUseWithJs from './snippets/paths-lift-usewith.raw.js'
import pathsMapJs from './snippets/paths-map.raw.js'
import pathsMapFlipJs from './snippets/paths-map-flip.raw.js'
import pathsMapFlipOJs from './snippets/paths-map-flip-o.raw.js'
import pathsMapFlipOUncurrynJs from './snippets/paths-map-flip-o-uncurryn.raw.js'
import pathsProblemStatementJs from './snippets/paths-problem-statement.raw.js'

export const RamdaPaths = () => (
  <div>
    <RamdaPathsSummary />
    <p>
      I have been using Ramda in most of my recent projects at home and at work.
      However, most of the time I was using only a very limited set of functions.
      You know, those that you need when dealing with arrays and objects:
      selecting properties, composing functions, mapping over things.
    </p>
    <p>
      But when I was looking over Ramda's amazing documentation the other day,
      I realized I did not know where to apply some of the more specialized
      utility functions in my code.
      Well, some of the functions appeared a little niche and you would use them only sparsely,
      but others seemed to be pretty useful at first glance!
      For the latter, I opened up a <a href='http://ramdajs.com/repl/'>Ramda REPL</a> and
      decided on a small task to try them out:
      Implementing a <code>paths</code> function.
    </p>
    <h2>Ramda's <code>path</code> Function</h2>
    <p>
      Those of you that do not know Ramda's <code>path</code> function,
      go and have a look at the following code snippet:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathJs}
    </SyntaxHighlighter>
    <p>
      The <code>path</code> function selects a specified portion from a nested object.
      The portion is given to the function as a list of attributes
      that are selected in the specified order:
      In the first case, the <code>obj</code>'s <code>a</code> attribute is selected,
      followed by its <code>c</code> attribute, which returns <code>1</code>.
      The second call to <code>path</code> works analogously.
    </p>
    <h2>Intended Behavior of the <code>paths</code> Function</h2>
    <p>
      The <code>paths</code> function I want to implement using Ramda should
      combine these two functions into one:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsProblemStatementJs}
    </SyntaxHighlighter>
    <p>
      So in contrast to <code>path</code> that gets only a single attribute list,
      the <code>paths</code> function receives a list of attribute lists,
      selects all of them from an object and returns a list of results:
    </p>
    <h2>Implementing <code>paths</code> using <code>map</code></h2>
    <p>
      Let us start by having a look at the most obvious and straight forward
      implementation of <code>paths</code> to nail down what we are aiming at.
      The first implementation uses <code>map</code> to apply <code>path</code> several times:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsMapJs}
    </SyntaxHighlighter>
    <p>
      I assume you are familiar with <code>map</code> and will not go into
      detail how this implementation works.
      The basic idea is to map over the provided paths and call the <code>path</code> function
      for each individual path.
      While this solution is declarative already it could be improved further.
      Also, it still contains a lot of boilerplate like the parameter lists
      and explicitly passed parameters.
    </p>
    <p>
      We may get rid of one of the parameter lists by using <code>flip</code> to
      reverse <code>path</code>'s parameters:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsMapFlipJs}
    </SyntaxHighlighter>
    <p>
      You can make this even shorter by also omitting <code>paths</code>' parameter list:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsMapFlipOJs}
    </SyntaxHighlighter>
    <p>
      Hey, this version of <code>paths</code> is already pretty concise!
      It has almost no boilerplate code and is very declarative.
      It has one big problem, however:
      In point-free programming, we generally want to supply the data a function
      operates on as the last parameter.
      Here, we supply it first.
      Also, the function is always curried and cannot receive two parameters.
    </p>
    <p>
      Lucky for us, Ramda gives us functions to fix this:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsMapFlipOUncurrynJs}
    </SyntaxHighlighter>
    <p>
      But, let's be honest, now the solution is pretty ugly,
      with lots of boilerplate code that deals only with currying
      and with getting the input parameters in the right order.
    </p>
    <h2>Implementing <code>paths</code> using <code>ap</code></h2>
    <p>
      Let us take a first step in unknown territory and try implementing <code>paths</code> with
      the <code>ap</code> function!
      This is one of the functions that I had never used in any of my previous projects.
      So this is the perfect opportunity to get a feeling for it.
    </p>
    <p>
      According to the <a href='http://ramdajs.com/docs/#ap'>Ramda docs</a>, <code>ap</code> applies
      a list of functions to a list of values.
      In this case, we have only one function, which is <code>path</code>.
      But we do have several values,
      as each attribute list is its own input for a <code>path</code> function.
    </p>
    <p>
      So the first straight forward implementation of <code>paths</code> in
      terms of <code>ap</code> looks like this:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsApFlipJs}
    </SyntaxHighlighter>
    <p>
      Here, we first <code>flip</code> the first two parameters of path to be able
      to specify <code>obj</code> first.
      This results into a closure function that expects an attribute list as its only parameter.
      Now <code>ap</code> results into several calls to said closure function:
      One for each supplied attribute list.
    </p>
    <p>
      Honestly, using flip here feels a little bit like cheating.
      And it interferes with getting rid of the explicit parameters, also.
      Thankfully, there is another way to define <code>paths</code> in
      terms of <code>ap</code>:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsApApJs}
    </SyntaxHighlighter>
    <p>
      We just use <code>ap</code> twice!
      In each individual application of <code>ap</code>, one parameter
      of <code>path</code> is applied:
      The inner call to <code>ap</code> results in two partially applied functions,
      each applied to one of the two attribute lists.
      The outer call to <code>ap</code> then applies those two functions to one more
      argument, which is the <code>obj</code>.
    </p>
    <p>
      And hey!
      In the resulting function there is a pattern we have encountered before
      and that we know how to substitute to get more concise code:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsApApOJs}
    </SyntaxHighlighter>
    <p>
      Nice!
      We can collapse the explicit arguments with <code>o</code> (compose) again!
      This is much shorter now.
      However, having to pass the second parameter as an array is inconvenient.
      We can change that, though:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsApApOUncurrynUsewithJs}
    </SyntaxHighlighter>
    <p>
      Well, this adds a lot of boilerplate again.
      Maybe we can figure out a different way to define <code>paths</code> that is less noisy.
    </p>
    <h2>Implementing <code>paths</code> using <code>reduce</code></h2>
    <p>
      Another way to implement <code>paths</code> is by using <code>reduce</code>:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsReduceApJs}
    </SyntaxHighlighter>
    <p>
      I cannot say why, but I really like the esthetics of this one!
      However, we are still passing explicit parameters.
      Lets change that!
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsReduceApUnapplyJs}
    </SyntaxHighlighter>
    <p>
      In the first <code>paths</code> version, <code>reduce</code> needed an array as its last parameter.
      We use <code>unapply</code> here to convert the partially
      applied <code>reduce</code> function into a function that expects two
      parameters instead of an array with two values.
      Unfortunately, <code>obj</code> has to be an array again.
      But we know how to change that as of now:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsReduceApUnapplyUsewithJs}
    </SyntaxHighlighter>
    <p>
      This implementation does what we want.
      However, it is not really pretty.
      Again, we have to add lots of boilerplate code to be able to
      call <code>paths</code> as we wanted.
      But I am confident, there are other solutions that improve upon what we have!
    </p>
    <h2>Implementing <code>paths</code> using <code>lift</code></h2>
    <p>
      Once more we set out to implement <code>paths</code> with a new function!
      This time, we use <code>lift</code>.
      According to <a href='http://ramdajs.com/docs/#lift'>Ramda's docs</a>, <code>lift</code> <i>"lifts"
      a function of arity > 1 so that it may "map over" a list</i>.
      Oh wow, what is that supposed to mean?
    </p>
    <p>
      Apparently this means, <code>lift</code> transforms a function into a new
      function that expects the same number of arguments.
      However, every argument that is provided to the new function needs to be
      wrapped in an array.
      If each of these arrays only contains one value, the function behaves like before,
      apart from the result being wrapped in an array, too.
      (Yes, this is awefully simplifying things. But this is ok here.)
    </p>
    <p>
      It gets interesting, if one of the argument arrays contains more than one value.
      Because then the lifted function is called once for each result of the
      cross product of all values in its argument arrays.
      Wow this is a lot to take in!
      Rather than continue talking, lets have a look at an implementation using <code>lift</code>:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsLiftJs}
    </SyntaxHighlighter>
    <p>
      Here, <code>path</code> is called once for the cross product of all attribute lists and the object.
      Since we have two attribute lists, it is called twice.
      How do we get rid of the explicit arguments?
      By now we should know how to resolve this pattern!
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsLiftUseWithJs}
    </SyntaxHighlighter>
    <p>
      Hey, this looks like a pretty good solution!
      It is comparably short, has only a little bit of boilerplate code,
      and can be called curried, as well as non-curried!
      Lets see if we are at the end of the line, yet.
    </p>
    <h2>Implementing <code>paths</code> using <code>juxt</code></h2>
    <p>
      The <code>juxt</code> function applies a list of functions to a parameter list.
      In this respect it is pretty similar to <code>ap</code>.
      But whereas <code>ap</code> applies its list of functions to each argument in a list of
      arguments, <code>juxt</code> applies each function in its list of functions
      to the same list of parameters:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsJuxtMapJs}
    </SyntaxHighlighter>
    <p>
      In this example, we are constructing <code>juxt</code>'s list of functions
      by partially applying each attribute list to <code>path</code>.
      The parameter list has only one parameter, which is <code>obj</code>.
      Do you see the pattern we can abstract away using <code>o</code>?
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsJuxtMapCurriedJs}
    </SyntaxHighlighter>
    <p>
      Now this is short!
      And it has literally no boilerplate!
      And it is declarative!
      Too bad, it can only be called using curried syntax.
      To meet our goals, we still have to fix that:
    </p>
    <SyntaxHighlighter language='javascript' style={tomorrow}>
      {pathsJuxtMapUncurryNJs}
    </SyntaxHighlighter>
    <p>
      Now we can call <code>paths</code> in both ways.
      And it is still short and has gained only a little bit of weight in terms of boilerplate code.
    </p>
    <h2>Conclusions</h2>
    <p>
      Writing declarative code and avoiding boilerplate are both ways to improve your code quality.
      Not only does it help with keeping your code concise and to the point,
      it also helps with avoiding errors that arise in overly complex and spread out code.
      As demonstrated by implementing <code>paths</code>, Ramda provides a broad
      and varied set of tools to support writing such clean code.
    </p>
    <p>
      Does that mean you should write code as declarative and as point-free as you can?
      Definitely not!
      Finding the right balance between concise code and code that you and your
      team can still easily understand is a challenge we all face.
      Which implementation of <code>paths</code> would you choose?
      I guess the answer to this is different for all of us.
    </p>
    <p>
      If you did not already, you should definitely have a look at Ramda.
      They have a great <a href='http://ramdajs.com/docs/'>documentation</a> and
      even host their own <a href='http://ramdajs.com/repl/'>REPL</a> to
      get you started quickly!
      Whatever you do, I hope you enjoyed reading this post and spread the word about Ramda.
      It is an awesome tool belt that every JavaScript developer should be aware of!
    </p>
  </div>
)
