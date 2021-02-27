(window.webpackJsonp=window.webpackJsonp||[]).push([[763],{1066:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(1448),l=n(0),o="#4876d6",i="#c96765",c="#aaa",s="#c96765",m={'code[class*="language-"]':{whiteSpace:"pre",color:"#403f53"},'pre[class*="language-"]':{whiteSpace:"pre",margin:0},comment:{color:c},prolog:{color:c},doctype:{color:c},cdata:{color:c},punctuation:{color:"#403f53"},property:{color:o},tag:{color:"#aa0982"},boolean:{color:i},number:{color:i},constant:{color:i},symbol:{color:i},selector:{color:i},"attr-name":{color:o},string:{color:i},char:{color:i},builtin:{color:s},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},"attr-value":{color:i},keyword:{color:i},regex:{color:s},important:{color:s,fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{color:"green"},deleted:{color:"red"},"class-name":{color:o},"maybe-class-name":{color:o},parameter:{color:o}},d=function(e){var t=e.children;return l.createElement(r.a,{language:"jsx",style:m},t)},u=n(1094),p=n(1110),h=n(1076),g=n(22),f=n(1086);(function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.createElement("div",{className:"pluginWrapper buttonWrapper"},l.createElement("a",{className:"button",href:this.props.href,target:this.props.target},this.props.children))},t}(l.Component)).defaultProps={target:"_self"};var y=function(){var e=Object(g.default)().siteConfig;return l.createElement("div",null,l.createElement("div",{className:"homeContainer"},l.createElement("div",{className:"homeSplashFade"},l.createElement("div",{className:"logo"},l.createElement("img",{src:Object(h.a)("img/relay-white.svg")})),l.createElement("div",{className:"wrapper homeWrapper"},l.createElement("h2",{className:"projectTitle"},e.title,l.createElement("small",null,e.tagline),l.createElement("small",null,e.subtagline))))))},E=function(){var e=Object(g.default)().siteConfig,t=Object(h.b)().withBaseUrl,n=e.customFields.users.filter((function(e){return e.pinned})).map((function(e,n){return l.createElement("a",{href:e.infoLink,key:n},l.createElement("img",{src:t(e.image),title:e.caption}),l.createElement("div",null,l.createElement("h6",null,e.caption),l.createElement("p",null,e.description)))}));return l.createElement("div",null,l.createElement(y,null),l.createElement("div",{className:"homePage mainContainer"},l.createElement(u.a,{className:"textSection",background:"light"},l.createElement("h2",null,"Built for scale"),l.createElement("h3",null,"Relay was designed to be performant from the ground up, and to support scaling your application to"," ",l.createElement("b",null,l.createElement("em",null,"thousands"))," ","of components, while keeping management of data fetching sane, and fast iteration speeds as your application grows and changes."),l.createElement(p.a,{layout:"threeColumn",contents:[{title:"Quick iteration",content:l.createElement("span",null,l.createElement("p",null,"Relay is built upon ",l.createElement("em",null,"locally")," declaring data dependencies for components. This means each component declares ",l.createElement("em",null,"what")," data that it needs, without worrying about ",l.createElement("em",null,"how")," to fetch it; Relay guarantees that the data each component needs is fetched and available."),l.createElement("p",null,"This allows components and their data dependencies to be modified"," ",l.createElement("b",null,l.createElement("em",null,"quickly"))," ","and in"," ",l.createElement("b",null,l.createElement("em",null,"isolation")),", without needing to update other parts of the system or, worrying about breaking other components"))},{title:"Minimal round trips",content:l.createElement("span",null,l.createElement("p",null,"Relay automatically aggregates the data requirements for your entire application, so that they can be fetched in a single GraphQL request."),l.createElement("p",null,"Relay will handle all of the heavy lifting to ensure the data declared by your components is fetched in the most efficient way, for example by deduplicating identical fields, fetching as early as possible, among other optimizations."))},{title:"Automatic data consistency",content:l.createElement("span",null,l.createElement("p",null,"Relay automatically keeps all of your components up to date whenever data that affects them changes, and efficiently update them only when strictly necessary."),l.createElement("p",null,"Relay also supports executing GraphQL Mutations, optionally with optimistic updates, and updates to local data, while ensuring that visible data on the screen is always kept up to date."))}]})),l.createElement(u.a,{className:"exampleSection"},l.createElement("div",{className:"wrapperInner"},l.createElement("div",{className:"radiusRight"},l.createElement("h2",null,"Query Renderer"),l.createElement("p",null,"When creating a new screen, you start with a"," ",l.createElement("a",{href:"/docs/query-renderer"},l.createElement("code",null,"QueryRenderer")),"."),l.createElement("p",null,"A ",l.createElement("code",null,"QueryRenderer")," is a React Component which is the root of a Relay component tree. It handles fetching your query, and uses the ",l.createElement("code",null,"render")," prop to render the resulting data."),l.createElement("p",null,"As React components, ",l.createElement("code",null,"QueryRenderers")," can be rendered anywhere that a React component can be rendered, i.e. not just at the top level but *within* other components or containers. For example, you could use a ",l.createElement("code",null,"QueryRenderer")," to lazily fetch additional data for a popover.")),l.createElement("div",{className:"radiusLeft"},l.createElement("pre",null,l.createElement(d,null,'\nimport React from "react"\nimport { createFragmentContainer, graphql, QueryRenderer } from "react-relay"\nimport environment from "./lib/createRelayEnvironment"\nimport ArtistHeader from "./ArtistHeader"\n\n// Below you can usually use one query renderer per page\n// and it represents the root of a query\nexport default function ArtistRenderer({artistID}) {\n  return (\n    <QueryRenderer\n      environment={environment}\n      query={graphql`\n        query QueryRenderersArtistQuery($artistID: String!) {\n          # The root field for the query\n          artist(id: $artistID) {\n            # A reference to your fragment container\n            ...ArtistHeader_artist\n          }\n        }\n      `}\n      variables={{artistID}}\n      render={({error, props}) => {\n        if (error) {\n          return <div>{error.message}</div>;\n        } else if (props) {\n          return <ArtistHeader artist={props.artist} />;\n        }\n        return <div>Loading</div>;\n      }}\n    />\n  );\n}\n                  '))),l.createElement("div",null,l.createElement("h2",null,"Fragment Container"),l.createElement("p",null,"Step two is to render a tree of React components powered by Relay, which may include ",l.createElement("code",null,"FragmentContainers"),","," ",l.createElement("code",null,"PaginationContainers"),", or"," ",l.createElement("code",null,"RefetchContainers"),"."),l.createElement("p",null,"The most common are ",l.createElement("code",null,"FragmentContainers"),", which you can use to declare a ",l.createElement("em",null,"specification")," of the data that a Component will need in order to render. Note that a"," ",l.createElement("code",null,"FragmentContainer")," won't directly fetch the data; instead, the data will be fetched by a QueryRenderer ancestor at the root, which will aggregate all of the data needed for a tree of Relay components, and fetch it in a *single round trip*."),l.createElement("p",null,"Relay will then guarantee that the data declared by a",l.createElement("code",null,"FragmentContainer")," is available *before* rendering the component.")),l.createElement("div",null,l.createElement("pre",null,l.createElement(d,null,'\nimport React from "react"\nimport { createFragmentContainer, graphql } from "react-relay"\nimport { Link, Image, Name, Bio, View,} from "./views"\n\nfunction ArtistHeader(props) {\n  const {name, href, image, bio} = props.artist;\n  const imageUrl = image && image.url;\n\n  return (\n    <Link href={href}>\n      <Image imageUrl={imageUrl} />\n      <View>\n        <Name>{name}</Name>\n        <Bio>{bio}</Bio>\n      </View>\n    </Link>\n  );\n}\n\nexport default createFragmentContainer(ArtistHeader, {\n  artist: graphql`\n    # This fragment is declaring that this component\n    # needs an Artist, and these specific fields on\n    # the Artist in order to render. Relay will\n    # guarantee that this data is fetched and available\n    # for this component.\n    fragment ArtistHeader_artist on Artist {\n      href\n      bio\n      name\n      image {\n        url\n      }\n    }\n  `,\n});\n                  '))))),l.createElement(u.a,{className:"textSection graphqlSection",background:"light"},l.createElement("h2",null,"GraphQL best practices baked in"),l.createElement("h3",null,"Relay applies and relies on GraphQL best practices. To get the most from Relay\u2019s features, you\u2019ll want your GraphQL server to conform to these standard practices."),l.createElement(p.a,{layout:"threeColumn",contents:[{title:"Fragments",content:l.createElement("div",null,l.createElement("p",null,"A GraphQL"," ",l.createElement("a",{href:"https://graphql.org/learn/queries/#fragments",target:"_blank"},"Fragment")," ","is a reusable selection of fields for a given GraphQL type. It can be composed by including it in other Fragments, or including it as part of GraphQL Queries."),l.createElement("p",null,"Relay uses Fragments to declare data requirements for components, and compose data requirements together."),l.createElement("p",null,"See the Fragment Container docs"))},{title:"Connections",content:l.createElement("div",null,l.createElement("p",null,"GraphQL"," ",l.createElement("a",{href:"https://graphql.org/learn/pagination/#complete-connection-model",target:"_blank"},"Connections")," ","are a model for representing lists of data in GraphQL, so that they can easily be paginated in any direction, as well as to be able to encode rich relationship data."),l.createElement("p",null,"GraphQL Connections are considered a best practice for"," ",l.createElement("a",{href:"https://graphql.org/learn/pagination/"},"Pagination in GraphQL"),", and Relay provides first class support for these, as long as your GraphQL server supports them."),l.createElement("p",null,"See the"," ",l.createElement("a",{href:Object(h.a)("docs/graphql-server-specification#connections")},"Connections")," ","docs"))},{title:"Global Object Identification",content:l.createElement("div",null,l.createElement("p",null,"Relay relies on"," ",l.createElement("a",{href:"https://graphql.org/learn/global-object-identification/",target:"_blank"},"Global Object Identification")," ","to provide reliable caching and refetching, and to make it possible to automatically merge updates for objects."),l.createElement("p",null,"Global Object Identification consists on providing globally unique ids across your entire schema for every type, built using the Node GraphQL interface."),l.createElement("p",null,l.createElement("a",{href:Object(h.a)("docs/graphql-server-specification#object-identification")},"See the Object Identification docs")))}]})),l.createElement(u.a,{className:"textSection declarativeSection",background:"light"},l.createElement("h2",null,"Flexible Mutations"),l.createElement(p.a,{layout:"threeColumn",contents:[{title:"Describe data changing",content:l.createElement("div",null,l.createElement("p",null,"Using GraphQL mutations, you can declaratively define and request the data that will be affected by executing a mutation in a ",l.createElement("em",null,"single round trip"),", and Relay will automatically merge and propagate those changes."))},{title:"Automatic updates",content:l.createElement("div",null,l.createElement("p",null,"Using Global Object Identification, Relay is capable of automatically merging mutation updates for any affected objects, and updating only the affected components."),l.createElement("p",null,"For more complex cases where updates cannot automatically be merged, Relay provides apis to manually update the local Relay data in response to a mutation."))},{title:"Designed for great UX",content:l.createElement("div",null,l.createElement("p",null,"Relay's mutation API supports making optimistic updates to show immediate feedback to users, as well as error handling and automatically reverting changes when mutations fail."))}]})),l.createElement(u.a,{className:"textSection aheadSection"},l.createElement("h2",null,"Ahead-of-time Safety"),l.createElement(p.a,{layout:"threeColumn",contents:[{title:"Peace of mind",content:l.createElement("div",null,l.createElement("p",null,"While you work on a Relay project, the Relay compiler will guide you to ensure project-wide consistency and correctness against your GraphQL schema."))},{title:"Optimized runtime",content:l.createElement("div",null,l.createElement("p",null,"Relay pre-computes a lot of work (like processing and optimizing queries) ahead of time, during build time, in order to make the runtime on the browser or device as efficient as possible."))},{title:"Type safety",content:l.createElement("div",null,l.createElement("p",null,"Relay generates Flow or TypeScript types for each of your React components that use Relay, which represent the data that each component receives, so you can make changes more quickly and safely while knowing that correctness is guaranteed."))}]})),l.createElement(u.a,{className:"textSection relaySection"},l.createElement("h2",null,"Can Relay Work For Me?"),l.createElement(p.a,{layout:"twoColumn",contents:[{title:"Adopt Incrementally",content:l.createElement("div",null,l.createElement("p",null,"If you already can render React components, you\u2019re most of the way there. Relay requires a Babel plugin, and to also run the Relay Compiler."),l.createElement("p",null,"You can use Relay out of the box with Create React App and Next.js."))},{title:"Make Complexity Explicit",content:l.createElement("div",null,l.createElement("p",null,"Relay requires a bit more up-front setup and tools, in favour of supporting an architecture of isolated components which can scale with your team and app complexity."),l.createElement("p",null,"Learn these principles once, then spend more time working on business logic instead of pipelining data."))},{title:"Used at Facebook Scale",content:l.createElement("div",null,l.createElement("p",null,"Relay is critical infrastructure in Facebook, there are tens of thousands of components using it. Relay was built in tandem with GraphQL and has full-time staff working to improve it."))},{title:"Not Just for Big Apps",content:l.createElement("div",null,l.createElement("p",null,"If you\u2019re the sort of team that believes in using Flow or TypeScript to move error detection to dev-time, then Relay is likely a good fit for you."),l.createElement("p",null,"It\u2019s probable you\u2019d otherwise re-create a lot of Relay\u2019s caching, and UI best practices independently."))}]})),l.createElement(u.a,{className:"textSection",background:"light"},l.createElement("h2",null,"Proudly Used Elsewhere"),l.createElement("h3",null,"Relay was originally created for the React Native sections of the Facebook app, and it has been used adapted and improved by other teams internally and externally."),l.createElement("div",null,l.createElement("div",{className:"logosHomepage"},n)),l.createElement("div",{className:"more-users"},l.createElement("a",{className:"button",href:Object(h.a)("users")},"More Relay Users")))))};t.default=function(e){return l.createElement(f.a,null,l.createElement(E,e))}},1094:function(e,t,n){"use strict";var a=n(1092),r=n.n(a),l=n(0),o=function(e){var t,n=r()("container",e.className,{darkBackground:"dark"===e.background,highlightBackground:"highlight"===e.background,lightBackground:"light"===e.background,paddingAll:e.padding.indexOf("all")>=0,paddingBottom:e.padding.indexOf("bottom")>=0,paddingLeft:e.padding.indexOf("left")>=0,paddingRight:e.padding.indexOf("right")>=0,paddingTop:e.padding.indexOf("top")>=0});return t=e.wrapper?l.createElement("div",{className:"wrapper"},e.children):e.children,l.createElement("div",{className:n,id:e.id},t)};o.defaultProps={background:null,padding:[],wrapper:!0},t.a=o},1110:function(e,t,n){"use strict";var a=n(4),r=n(1092),l=n.n(r),o=n(0),i=function(e){function t(){return e.apply(this,arguments)||this}Object(a.a)(t,e);var n=t.prototype;return n.renderBlock=function(e){var t=Object.assign({},{imageAlign:"left"},e),n=l()("blockElement",this.props.className,{alignCenter:"center"===this.props.align,alignRight:"right"===this.props.align,fourByGridBlock:"fourColumn"===this.props.layout,imageAlignSide:t.image&&("left"===t.imageAlign||"right"===t.imageAlign),imageAlignTop:t.image&&"top"===t.imageAlign,imageAlignRight:t.image&&"right"===t.imageAlign,imageAlignBottom:t.image&&"bottom"===t.imageAlign,imageAlignLeft:t.image&&"left"===t.imageAlign,threeByGridBlock:"threeColumn"===this.props.layout,twoByGridBlock:"twoColumn"===this.props.layout}),a=("top"===t.imageAlign||"left"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt),r=("bottom"===t.imageAlign||"right"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt);return o.createElement("div",{className:n,key:t.title},a,o.createElement("div",{className:"blockContent"},this.renderBlockTitle(t.title),t.content),r)},n.renderBlockImage=function(e,t,n){return e?o.createElement("div",{className:"blockImage"},t?o.createElement("a",{href:t},o.createElement("img",{src:e,alt:n})):o.createElement("img",{src:e,alt:n})):null},n.renderBlockTitle=function(e){return e?o.createElement("h2",null,e):null},n.render=function(){return o.createElement("div",{className:"gridBlock"},this.props.contents.map(this.renderBlock,this))},t}(o.Component);i.defaultProps={align:"left",contents:[],layout:"twoColumn"},t.a=i}}]);