
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
                  { label: 'Della Mae',           link: 'https://dellamae.com/tour'},
                  { label: 'Lyle Lovett',         link: 'https://tour.lylelovett.com' },
                  { label: 'Ma Crow',             link: 'https://www.macrowmusic.net' },
                  { label: 'Nicki Bluhm',         link: 'https://www.nickibluhm.com' },
                  { label: 'Salty Caramels',      link: 'http://www.thesaltycaramels.net/shows.html'},
                  { label: 'Shiny and the Spoon', link: 'https://www.facebook.com/shinyandthespoon' },
                  { label: 'Steeldrivers',        link: 'http://www.thesteeldrivers.com/tour-dates/' },
                  { label: 'Tillers',             link: 'http://the-tillers.com/home/?page_id=11' }
                ];
    var activeLink = bands[0].link;

    return { "bands": bands,
             "activeLink": activeLink };
}


