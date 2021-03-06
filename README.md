Link: https://kind-bardeen-f70b24.netlify.app/

Install: 
* ```git clone https://github.com/Drogbi/paxful-test.git && cd ./paxful-test```
* ```yarn```

Run: 
* ```yarn start```

OS: Mac OS, Windows (I develop on Mac, but app on Windows looks nice)

Browser: Chrome latest

Code editor: Webstorm

Features: 
1. Responsive
2. Real-time data updates e.g *bitcoin currency* or *${start date} ago*
3. Independent chat states, so you can switch between chats without input state loosing
4. User switch. With help of switch in chat input you can quickly switch between traders
5. Messages notification

Requirements: 
- [x] SPA(React, Typescript)
- [x] Nice design
- [x] Responsive and usability (min-width: 320px a.k.a iPhone SE)
- [x] Trade list
- [x] Chat
- [x] Messages notification
- [x] Delete trade action
- [x] Release bitcoins action
- [x] Uses switch
- [x] Trade information
- [x] Redux
- [x] Hardcoded data
- [x] Real-time data pulling (60s timeout)

Note: 
* Delete button moved from top to right info panel because of design issues on mobile layout
* I haven't optimized performance with useMemo, useCallback and React.memo a lot because it works fine

