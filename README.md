Welcome to Browseum!

Browseum is a web app that connects to the Harvard Museum API and uses data from that API to display works of art (https://github.com/harvardartmuseums/api-docs). The user can choose to see random works of art or, once a random work of art is displayed, to see other works by the artist, time-period, or culture on display.  The user can also mark works of art as "favorites," revisit those favorites, and see the user's 30-day browsing history.

The front-end of the app was built using React.  For persisting data on the back-end (for example, the user's favorites or history), the app relies on a Ruby-on-Rails-based-server (the "Rails API").  

To use this app:

1. Fork and clone it.

2. In your terminal, `cd` into the parent directory for Browseum.  

3. In your terminal, run `npm install`.  Then run `bundle install`.

4. Next, in your terminal, run: `rake db:migrate`.  This will initialize the Rails API database.

5. Lastly, in your terminal, run: `rake start`.  This will start two servers: one to handle React's client-side rendering, and one for the Rails API.

6. Head to localhost:3000 in your browser.  There you will see the welcome page, and you can use the navigation buttons to being browsing random works of art.  

To close out the program, close your browser, and in the terminal where you ran `rake start`, hit control+c (on a Mac).  

To run the program again, repeat step 2 and then step 5.  

Thanks for stopping by!

Contributing:

Bug reports and pull requests are welcome on GitHub at https://github.com/breadoliveoilsalt/browseum. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant (http://contributor-covenant.org) code of conduct.

License:
The app is available as open source under the terms of the MIT License (http://opensource.org/licenses/MIT).

Code of Conduct:
Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct (https://github.com/breadoliveoilsalt/browseum/blob/master/CODE_OF_CONDUCT.md).
