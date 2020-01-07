Day 1 (07th Jan 2020) Angular Introduction
Architecture
Development Environment
Structure of Angular Apps
Introduction to WebPack
What are Angular Versions and Upgrade Strategy on Angular platforms
Introduction to TypeScript

Day 2 (08th Jan 2020) Angular Fundamentals
Event Handling and Data Displaying
Building Reusable Components
Angular Directives

Day 3 (09th Jan 2020) Templates and Forms
Reactive Forms
Routing and Navigation

Day 4 (10th Jan 2020) Consuming Http Services
Observables and NGRX

if time permits we will look into other modules

What is angular
Angular is an UI framework for developing web apps.
How it is different from Angularjs
ngular is a platform and framework for building client applications in HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.

Building Blocks of Angular

1. Components
   Annotations are used to add metadata
   some important metadata are selectors
   template
   string interpolation
   `*` which modifies structure of DOM
2. Templates
   what are templates
   In Build Directives
   Services
   Dependency Injection

   More from the CLI

3. Displaying Data and handling event
   property binding [] is used | one way binding from component to DOM
   attribute binding [attr.]
   Add the third party bootstrap and web components
   Class binding [class.<targetclass>]
   Style Bindig [style.<tagetStyle>]
   Event Binding `(EventName)=methodName()` | event object passing \$event : known to angular
   Event Bubbling stopPropogation
   Event Filtering `(eventname.filtername)`
   Template Variable event.target.value | `#` templatevariable which is better
   Two way Binding `[(ngModel)]` the two way binding | to implement two way binding
   Pipes used for formatting data | create custom pipes
   PipeTransform Interface
4. Building re-usable components
   Initial State of component
   Property binding does not work. Since it is not a known property
   Hence, we need to define input property
   Hence, notification output property
   A component has a two property for communication called @Input and @Output
   Input property is for State and Output for event.
   Input Properties : Two ways to mark field as `Input` `@Input()` decorator : or use `inputs` in component metadata
   Problem with Second approch
   Alias with Input Property : keeps contract stable
   Output Properties : `@Output()` Decorator
   Important thing is to initialize the event with new EventEmitter Object like `@Output change = new EventEmitter()`
   To raise or publish an event use EventEmitter emit function
   Passing Event Data : use emit to pass data, `$event` built in object to standard DOM event
   you can always define type of event object passing
   A word of advice. always use alias for input and output properties of the component
   Templates:Rule : if your html is more than 5 lines use template url
   All external templates are bundled using JS code
   Styles : Styleurls , styles :
   The one which comes last is picked by angular:
   Angular created a scoped style : which mean these style are not affected outside this component
   View Encapulation:
   Shadow Dom : createShadowRoot
   encapsulation : Emulated, None, Shadow: ngContent is used attributed for Emulated
   ngContent: one way is to use input property:
   runtime insertion of DOM : use select.. custom content
   ngContainer: not to introduce markup
5. Directives : Structural and Attribute
   Strucural Sirective modifies structure of DOM
   Attribute Directive modifies attribute of DOM elements
   nfIf `*ngIf="condition ;else <otherTemplateName>"` using ng-template
   Hidden Properties : [hidden]
   Large tree then ngIf is better to trim down and make ur DOM lean
   However large subtree then use hidden.
   ngSwitch and ngSwitchCase `[ngSwitch]="prop"` and `*ngSwitchCase="'value'"` `*ngSwitchDefault`
