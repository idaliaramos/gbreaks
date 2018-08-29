
KNOW WHAT MIDDLEWARE IS: WHAT IS MIDDLEWARE
Middleware functions are functions that have access to the request
object (req), the response object (res), and the next middleware function
in the application’s request-response cycle. The next middleware function
is commonly denoted by a variable named next.
HOW TO HANDLE MIDDLEWARE:
MUST CALL ONE OF THESE THREE, OTHERWISE THE CALL WILL hanging the current middleware
 function does not end the request-response cycle, it must call next()
  to pass control to the next middleware function. Otherwise,
  the request will be left hanging
WHAT CAN MIDDLEWARE FUNCTIONS DO?
THESE FUNCTIONS CAN :
Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle,
it must call next() to pass control to the next middleware function. Otherwise,
the request will be left hanging.

WHAT DOES APP.USE DO?
app.use will be excecuted everytime
The function is executed every time the app receives a request.

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})



HOW CAN WE WRITE OUR OWN MIDDLEWARE FUNCTIONS TO MAKE CODE CLEAN?
-checking or validating for certain things,
-can attach anything to the req. object, as req.token = token
-finding something with that query


const verifyUser = (req, res, next) => {
  const id = req.params.id;
  if (id !== user.id)
    return next({
      status: 404,
      message: `Could not find user with id ${id}`
    });

    //since we are not responding with anything, what should we do? call next
  next(); //calls the next functions , since we
};
app.get("/users/:id", verifyUser, (req, res, next) => {
  const data = {
    id: user.id,
    name: user.name
  };
  res.json({ data });
});

//  REMINDER, THINGS DONT CONSOLE.LOG ON THE CLIENT, THEY LOG IN YOUR CONSOLE!
//you can only respond once per request

//change use up and down, talk about error handling,
//talk about writing your own middleware functions and why
