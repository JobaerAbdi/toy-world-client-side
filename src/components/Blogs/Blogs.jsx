const Blogs = () => {
  return (
    <div className="px-14">
      <p className="font-bold text-2xl mb-10">
        আসসালামুয়ালাইকুম ভাইয়া/আপু, আমি শারীরিক ভাবে অনেক অসুস্থ. আমার মেরুদণ্ডে
        একটি Problem হয়েছে. MRI Report এ আমার মেরুদণ্ডে Disk Prolapsed (PLID)
        ধরা পরেছে. ডাক্তার আমাকে Medicine ও Physiotherapy এর পাশাপাশি পুরু ১ মাস
        Rest নিতে বলেছেন. ১ মাস পরে সুস্থ না হলে Surgery করতে হবে. মেরুদণ্ডে
        প্রচণ্ড pain নিয়ে বিছানায়ে শুয়ে অনেক কষ্টে Assignment টি করেছি. অনুগ্র
        করে আমার Code এর ভুলত্রুটিগুলো ক্ষমা সুন্দর দৃষ্টিতে দেখবেন Please. আমার
        Average Mark 59.11 যত কষ্ট হোক আমি Course টি Continue করতে চাই. আমার
        জন্য দুয়া করবেন Please.{" "}
      </p>
      <h1 className="text-2xl font-bold">
        (01) What is an access token and refresh token? How do they work and
        where should we store them on the client-side?
      </h1>
      <p className="font-semibold mb-6">
        Access token:= When a user logins in, the authorization server issues an
        access token, which is an artifact that client applications can use to
        make secure calls to an API server. When a client application needs to
        access protected resources on a server on behalf of a user, the access
        token lets the client signal to the server that it has received
        authorization by the user to perform certain tasks or access certain
        resources.
      </p>
      <p className="font-semibold mb-6">
        Refresh token:= A refresh token is a special key that enables a client
        for an API or service to retrieve new access tokens without requiring
        the user to perform a complete login. In other words, an application can
        exchange a valid refresh token for a new access token. In addition to
        the new access token, the service may return a new refresh token too.
      </p>
      <p className="font-semibold mb-6">
        How does Access token work: Access tokens are used in token-based
        authentication to allow an application to access an API. For example, a
        Calendar application needs access to a Calendar API in the cloud so that
        it can read the user's scheduled events and create new events. Once an
        application has received an access token, it will include that token as
        a credential when making API requests. To do so, it should transmit the
        access token to the API as a Bearer credential in an HTTP Authorization
        header.
      </p>
      <p className="font-semibold mb-6">
        How does Refresh token work: The first stage involves the user logging
        in to an API service. This could be done by sending an HTTP request with
        a username and password. Then, on successful authentication, the API
        returns an access token (for example, a JWT).Now that we have a valid
        access token, we can proceed to make a request on behalf of a user. A
        protected endpoint is an endpoint that requires the user to be logged in
        to fetch or write data. A good example is an endpoint that returns the
        current user's profile.
      </p>
      <h1 className="text-2xl font-bold mt-5">
        (02) Compare SQL and NoSQL databases?
      </h1>
      <p className="font-semibold mb-6">
        SQL Databases:= SQL, which stands for “Structured Query Language,” is
        the programming language that’s been widely used in managing data in
        relational database management systems. When storage was expensive, SQL
        databases focused on reducing data duplication. SQL is still widely used
        for querying relational databases, where data is stored in rows and
        tables that are linked in various ways. One table record may link to one
        other or to many others, or many table records may be related to many
        records in another table.
      </p>
      <p className="font-semibold">
        NoSQL Databases:= NoSQL is a non-relational database, meaning it allows
        different structures than a SQL database (not rows and columns) and more
        flexibility to use a format that best fits the data. The systems do not
        use SQL, as NoSQL databases do sometimes support some SQL commands. More
        accurately, NoSQL is sometimes defined as not only SQL.
      </p>
      <h1 className="text-2xl font-bold mt-5">
        (03) What is express js? What is Nest JS?
      </h1>
      <p className="font-semibold mb-6">
        Express js:= Express.js is the most popular web framework for Node.js.
        It is designed for building web applications and APIs and has been
        called the de facto standard server framework for Node.js.
      </p>
      <p className="font-semibold mb-6">
        Next js:= Next.js is a flexible React framework that gives building
        blocks to create fast web applications. By framework, Next.js handles
        the tooling and configuration needed for React, and provides additional
        structure, features, and optimizations for your application.
      </p>
      <h1 className="text-2xl font-bold mt-5">
        (04) What is MongoDB aggregate and how does it work?
      </h1>
      <p className="font-semibold mb-6">
        MongoDB aggregate : Aggregations operations process data records and
        return computed results. Aggregation operations group values from
        multiple documents together, and can perform a variety of operations on
        the grouped data to return a single result. In SQL count and with group
        by is an equivalent of MongoDB aggregation.
      </p>
      <p className="font-semibold mb-6">
        How does MongoDB aggregate work : Aggregation pipelines are collections
        of stages that, combined with the MongoDB query syntax, will allow you
        to obtain an aggregated result. Before the dive into the code, let's
        understand what the aggregation pipeline itself does and how it works.
        In the aggregation pipeline, the list out a series of instructions in a
        stage. For each stage that's defined, MongoDB executes them one after
        another in order to give a finalized output.
      </p>
    </div>
  );
};

export default Blogs;
