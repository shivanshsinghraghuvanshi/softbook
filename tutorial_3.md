ngContent: one way is to use input property:
Emmet : div.card>div.card-header+div.card-body

ngContainer put it insode calling component and show it does not render extra markup

custom directive example

Lifecycle of an component
constructor

    ngOnChanges
    ngOnInit
    ngDoCheck

    	ngAfterContentInit
    	ngAfterContentChecked
    	ngAfterViewInit
    	ngAfterViewChecked

    		ngOnDestroy

ngOnChanges – This event executes every time when a value of an input control within the component has been changed. Actually, this event is fired first when a value of a bound property has been changed. It always receives a change data map, containing the current and previous value of the bound property wrapped in a SimpleChange.
ngOnInit – This event initializes after Angular first displays the data-bound properties or when the component has been initialized. This event is basically called only after the ngOnChanges()events. This event is mainly used for the initialize data in a component.
ngDoCheck – This event is triggered every time the input properties of a component are checked. We can use this hook method to implement the check with our own logic check. Basically, this method allows us to implement our own custom change detection logic or algorithm for any component.
ngAfterContentInit – This lifecycle method is executed when Angular performs any content projection within the component views. This method executes when all the bindings of the component need to be checked for the first time. This event executes just after the ngDoCheck() method. This method is basically linked with the child component initializations.
ngAfterContentChecked – This lifecycle hook method executes every time the content of the component has been checked by the change detection mechanism of Angular. This method is called after the ngAfterContentInit() method. This method is also called on every subsequent execution of ngDoCheck(). This method is also mainly linked with the child component initializations.
ngAfterViewInit – This lifecycle hook method executes when the component’s view has been fully initialized. This method is initialized after Angular initializes the component’s view and child views. It is called after ngAfterContentChecked(). This lifecycle hook method only applies to components.
ngAfterViewChecked – This method is called after the ngAterViewInit() method. It is executed every time the view of the given component has been checked by the change detection algorithm of Angular. This method executes after every subsequent execution of the ngAfterContentChecked(). This method also executes when any binding of the children directives has been changed. So this method is very useful when the component waits for some value which is coming from its child components.
ngOnDestroy – This method will be executed just before Angular destroys the components. This method is very useful for unsubscribing from the observables and detaching the event handlers to avoid memory leaks. Actually, it is called just before the instance of the component is finally destroyed. This method is called just before the component is removed from the DOM.

`[ViewChildren and ViewChild]`

Routing and Navigation
what is routing
three steps to implement navigation

1. Configure the routes which means what components should have visibility at each routes.
   it is mapping of path to component

2. Add a router outlet this is where we dynamically display dynamic component when route become active
3. Add links

routerLink vs href example
routerLinkActive example

getting routeParameters -> ActivatedRoute route.paramMap
why paramMap are observables
Bring lifecycle and explain
route.snapshot
routing with multiple parameters why needed is for search engine optimization / better link sharing

Query Parameters / Optional Parameters [queryParams]="{}" .. add all optional parameters queryParamMap
Programatic naviagation : Router router.navigate(['/path',<1>,<>],{queryParams:{}})
Dynamic Module Lazy Loading

Multiple Observer Subscription Observable.combineLatest([])
SwitchMap vs map

Form Templates and Reactive Forms
Consuming httpservice
