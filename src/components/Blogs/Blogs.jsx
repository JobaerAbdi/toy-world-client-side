const Blogs = () => {
  return (
    <div className="px-14">
      <h1 className="text-2xl font-bold">
        (01) What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
      </h1>
      <p className="font-semibold">
        Access token:= When a user logins in, the authorization server issues an
        access token, which is an artifact that client applications can use to
        make secure calls to an API server. When a client application needs to
        access protected resources on a server on behalf of a user, the access
        token lets the client signal to the server that it has received
        authorization by the user to perform certain tasks or access certain
        resources.
      </p>
      <p className="font-semibold">
        Refresh token:= A refresh token is a special key that enables a client
        for an API or service to retrieve new access tokens without requiring
        the user to perform a complete login. In other words, an application can
        exchange a valid refresh token for a new access token. In addition to
        the new access token, the service may return a new refresh token too.
      </p>
      <p className="font-semibold">
        How Access token work: Access tokens are used in token-based
        authentication to allow an application to access an API. For example, a
        Calendar application needs access to a Calendar API in the cloud so that
        it can read the user's scheduled events and create new events. Once an
        application has received an access token, it will include that token as
        a credential when making API requests. To do so, it should transmit the
        access token to the API as a Bearer credential in an HTTP Authorization
        header.
      </p>
      <p className="font-semibold">
        How Refresh token work: The first stage involves the user logging in to
        an API service. This could be done by sending an HTTP request with a
        username and password. Then, on successful authentication, the API
        returns an access token (for example, a JWT).Now that we have a valid
        access token, we can proceed to make a request on behalf of a user. A
        protected endpoint is an endpoint that requires the user to be logged in
        to fetch or write data. A good example is an endpoint that returns the
        current user's profile.
      </p>
      <h1 className="text-2xl font-bold mt-5">
        (02) Compare SQL and NoSQL databases?
      </h1>
    </div>
  );
};

export default Blogs;
