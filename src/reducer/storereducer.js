
export function storeReducer(state, action) {

  if (state === undefined) {
    return getInitialState();
  }

  switch(action.type) {
    case 'NEW_EXTERNAL_FRAME':
      return { "bands": state.bands,
               "activeLink": action.value };

    default:
      console.log('Unhandled action type;', action.type);
      return state;
  }
}

function getInitialState() {
    var bands = [
                  { label: 'Charles Esten',       link: 'https://www.charlesesten.com/tour' },
                  { label: 'Della Mae',           link: 'https://dellamae.com/tour', frameSameOrigin: true},
                  { label: 'Lyle Lovett',         link: 'https://tour.lylelovett.com' },
                  { label: 'Maria Carrelli',      link: 'https://www.mariacarrellimusic.com'},
                  { label: 'Ma Crow',             link: 'https://www.macrowmusic.net', frameSameOrigin: true },
                  { label: 'Nicki Bluhm',         link: 'https://www.nickibluhm.com' },
                  { label: 'Salty Caramels',      link: 'http://www.thesaltycaramels.net/shows.html'},
                  { label: 'Shiny and the Spoon', link: 'https://www.facebook.com/shinyandthespoon', frameSameOrigin: true },
                  { label: 'Steeldrivers',        link: 'http://www.thesteeldrivers.com/tour-dates/' },
                  { label: 'Tillers',             link: 'http://the-tillers.com/home/?page_id=11' }
                ];

    var places = [
                   { label: "Arnold's",            link: 'http://arnoldsbarandgrill.com/music.htm'},
                   { label: 'College Hill Coffee Shop', link: 'http://collegehillcoffeeco.com/music.htm'},
                   { label: "Crow's Nest",         link: 'http://www.cincycrowsnest.com/calendar/index.php'},
                   { label: "Douglas Corner Cafe (Nashville)", link: 'http://douglascorner.com/calendar.php'},
                   { label: "Blue  Bird Cafe (Nashville)", link: 'http://bluebirdcafe.com/calendar'},
                   { label: 'Fraze Pavillion',     link: 'http://www.fraze.com/category/concerts-and-events/'},
                   { label: 'Front St Cafe',       link: 'https://www.frontstcafe.com/entertainment'},
                   { label: 'Plain Folk Cafe',     link: 'http://plainfolkcafe.com/CALENDAR_OF_EVENTS.html'},
                   { label: 'PNC Pavillion',       link: 'http://www.riverbend.org/venue/pnc-pavilion/'},
                   { label: 'Rabbit Hash',         link: 'https://www.rabbithash.com/upcoming-events.html'},
                   { label: 'Rose Music Center',   link: 'http://www.rosemusiccenter.com/events-tickets/event-list.html'},
                   { label: 'Station Inn (Nashville)', link: 'https://stationinn.com/event/'}
                 ];

    var festivals = [
                      { label: "Bean Blossom",     link: 'http://www.beanblossom.us'},
                      { label: "River Roots",      link: 'http://www.riverroots.org'},
                      { label: "Romp",             link: 'http://www.rompfest.com'},
                      { label: "Whispering Beard", link: 'http://www.whisperingbeard.com/festival/'}
                    ];

    var activeLink = bands[0].link;

    return { "bands": bands,
             "places": places,
             "festivals": festivals,
             "activeLink": activeLink };
}


