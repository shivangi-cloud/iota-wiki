"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46103,29514],{95122:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(37027),l=a(18607),o=a(91891),s=a(54416),i=a(51384);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(19257);var u=function(e){var t,a=e.content,s=e.sidebar,i=a.frontMatter,u=a.assets,d=a.metadata,p=d.title,g=d.description,f=d.nextItem,v=d.prevItem,b=d.date,_=d.tags,h=d.authors,E=i.hide_table_of_contents,N=i.keywords,k=null!=(t=u.image)?t:i.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:s,toc:!E&&a.toc?a.toc:void 0},n.createElement(r.Z,{title:p,description:g,keywords:N,image:k},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),h.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:h.map((function(e){return e.url})).filter(Boolean).join(",")}),_.length>0&&n.createElement("meta",{property:"article:tag",content:_.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:i,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(f||v)&&n.createElement(c,{nextItem:f,prevItem:v}))}},91891:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(67294),r=a(45697),l=a.n(r),o=a(86010),s=a(3905),i=a(54416),c=a(51384),m=a(51402),u=a(19257),d=a(83949),p=a(30513),g={blogHeader:"blogHeader_11Jz",blogPostTitle:"blogPostTitle_nmLu",blogPost__body:"blogPost__body_1F6N",blogPostData:"blogPostData_3WzT",blogPostDetailsFull:"blogPostDetailsFull_3bEF",blogPostDataContainer:"blogPostDataContainer_1pWc"},f=a(21192),v=a(16509);function b(e){var t,a,r,l,b=(r=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,m.C)().withBaseUrl,h=e.children,E=e.frontMatter,N=e.assets,k=e.metadata,y=e.truncated,Z=e.isBlogPostPage,w=void 0!==Z&&Z,P=k.date,T=k.formattedDate,C=k.tags,D=k.readingTime,x=k.title,B=k.editUrl,I=k.authors,O=null!=(t=N.image)?t:E.image,M=E.url;return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(l=w?"h1":"h2",n.createElement("header",{className:g.blogHeader},n.createElement(l,{className:g.blogPostTitle,itemProp:"headline"},w?x:n.createElement(c.Z,{itemProp:"url",to:M},x)),n.createElement("div",{className:"row row--no-gutters"},n.createElement("div",{className:"col"},n.createElement(v.Z,{authors:I,assets:N})),n.createElement("div",{className:(0,o.Z)(g.blogPostData,"margin-vert--md","col")},n.createElement("div",{className:g.blogPostDataContainer},n.createElement("time",{dateTime:P,itemProp:"datePublished"},T),void 0!==D&&n.createElement(n.Fragment,null," \xb7 ",b(D))))))),O&&n.createElement("meta",{itemProp:"image",content:_(O,{absolute:!0})}),n.createElement("div",{className:(0,o.Z)("markdown",[g.blogPost__body]),itemProp:"articleBody"},n.createElement(s.Zo,{components:d.Z},h)),(C.length>0||y)&&n.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",(a={},a[g.blogPostDetailsFull]=w,a))},C.length>0&&n.createElement("div",{className:(0,o.Z)("col",{"col--9":!w})},n.createElement("div",{className:g.tagsList},n.createElement(f.Z,{tags:C}))),w&&B&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(p.Z,{editUrl:B})),!w&&y&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(c.Z,{to:k.permalink,"aria-label":"Read more about "+x},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}b.propTypes={children:l().node,frontMatter:l().object,assets:l().object,metadata:l().shape({date:l().string,formattedDate:l().string,permalink:l().string,tags:l().arrayOf(l().object),readingTime:l().string,title:l().string,editUrl:l().string,authors:l().arrayOf(l().object)}),truncated:l().bool,isBlogPostPage:l().bool},b.defaultProps={isBlogPostPage:!1};var _=b},30513:function(e,t,a){var n=a(67294),r=a(54416),l=a(23779),o=a(15987),s=a(45697),i=a.n(s);function c(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return n.createElement(n.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(l.Z,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):n.createElement(o.Z,{editUrl:t}))}c.propTypes={editUrl:i().string},t.Z=c},32577:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(22122),r=a(19756),l=a(67294),o=a(86010),s=a(51384),i=a(19257),c=a(51402),m=a(45697),u=a.n(m),d=a(34455);function p(e){var t=e.title,a=e.icon,n=e.url,r=e.backgroundColor;return l.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:n},l.createElement("div",{className:"social__font social__icon"},a),l.createElement("div",{className:"social__title"},t))}p.propTypes={title:u().string,icon:u().string,url:u().string,backgroundColor:u().string};var g=function(){var e=(0,i.LU)().socials;return l.createElement("div",{className:"social"},e&&e.map((function(e,t){return l.createElement(p,(0,n.Z)({key:t},e))})))},f=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,a=e.href,o=e.label,i=e.prependBaseUrlToHref,m=(0,r.Z)(e,f),u=(0,c.Z)(t),d=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(s.Z,(0,n.Z)({className:"footer__link-item"},a?{href:i?d:a}:{to:u},m),o)}v.propTypes={to:u().string,href:u().string,label:u().string,prependBaseUrlToHref:u().bool};var b=function(e){var t=e.sources,a=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};b.propTypes={sources:u().shape({light:u().string,dark:u().string}),alt:u().string};var _=function(){var e=(0,i.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,d={light:(0,c.Z)(u.src),dark:(0,c.Z)(u.srcDark||u.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(v,e))}))):null)}))),(u||a)&&l.createElement("div",{className:"footer__bottom padding-bottom--xl"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(s.Z,{href:u.href},l.createElement(b,{alt:u.alt,sources:d})):l.createElement(b,{alt:u.alt,sources:d})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement(g,null)):null}},78358:function(e,t,a){a.d(t,{O:function(){return b}});var n=a(22122),r=a(19756),l=a(67294),o=a(86010),s=a(45697),i=a.n(s),c=a(51384),m=a(51402),u=a(78168),d=a(71699),p=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],g=["className","isDropdownItem"],f=["className"],v=["mobile","to","label"];function b(e){var t=e.activeBasePath,a=e.activeBaseRegex,o=e.to,s=e.href,i=e.label,g=e.sublabel,f=e.icon,v=e.activeClassName,b=void 0===v?"navbar__link--active":v,_=e.prependBaseUrlToHref,h=(0,r.Z)(e,p),E=(0,m.Z)(o),N=(0,m.Z)(t),k=(0,m.Z)(s,{forcePrependBaseUrl:!0}),y=i&&s&&!(0,d.Z)(s),Z="dropdown__link--active"===b;return l.createElement(c.Z,(0,n.Z)({},s?{href:_?k:s}:Object.assign({isNavLink:!0,activeClassName:b,to:E},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(N)}}:null),h),l.createElement("div",{className:"link"},f&&l.createElement("div",{className:"link__icon"},f),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},y?l.createElement("span",null,i,l.createElement(u.Z,Z&&{width:12,height:12})):i),g&&l.createElement("div",{className:"link__sublabel"},g))))}function _(e){var t=e.className,a=e.isDropdownItem,s=void 0!==a&&a,i=(0,r.Z)(e,g),c=l.createElement(b,(0,n.Z)({className:(0,o.Z)(s?"dropdown__link":"navbar__item navbar__link",t)},i));return s?l.createElement("li",null,c):c}function h(e){var t=e.className,a=(0,r.Z)(e,f);return delete a.isDropdownItem,l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,n.Z)({className:(0,o.Z)("menu__link",t)},a)))}function E(e){var t=e.mobile,a=void 0!==t&&t,o=e.to,s=e.label,i=(0,r.Z)(e,v);if(delete i.position,"category-header"===o){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},s)}var c=a?h:_;return l.createElement(c,(0,n.Z)({to:o,label:s},i))}b.propTypes={activeBasePath:i().string,activeBaseRegex:i().string,to:i().string,href:i().string,label:i().string,sublabel:i().string,icon:i().string,activeClassName:i().string,prependBaseUrlToHref:i().bool},b.defaultProps={activeClassName:"navbar__link--active"},_.propTypes={className:i().string,isDropdownItem:i().bool},_.defaultProps={isDropdownItem:!1},h.propTypes={className:i().string},E.propTypes={mobile:i().bool,to:i().string,label:i().string},E.defaultProps={mobile:!1},t.Z=E},61142:function(e,t,a){var n=a(22122),r=a(19756),l=a(67294),o=a(86010),s=a(45697),i=a.n(s),c=a(19257),m=a(78358),u=a(52807),d=["items","position","className"],p=["items","className"],g=["mobile"];function f(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,a=e.items,s=e.position,i=e.className,p=(0,r.Z)(e,d),g=(0,l.useRef)(null),v=(0,l.useRef)(null),b=(0,l.useState)(!1),_=b[0],h=b[1],E=function(e,t,a){var n=t.filter((function(e){return f(e,a)}));return n.length?Object.assign({},n[0],{label:e.label+" > "+n[0].label}):e}(p,a,(0,c.be)());return(0,l.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[g]),l.createElement("div",{ref:g,className:(0,o.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===s,"dropdown--show":_})},l.createElement(m.O,(0,n.Z)({className:(0,o.Z)("navbar__item navbar__link",i)},E,{onClick:p.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!_))}}),null!=(t=p.children)?t:p.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},a.map((function(e,t){return l.createElement(u.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var n=g.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function b(e){var t,a=e.items,s=e.className,i=(0,r.Z)(e,p);delete i.position;var d=(0,c.be)(),g=function(e,t){return e.some((function(e){return f(e,t)}))}(a,d),v=(0,c.uR)({initialState:function(){return!g}}),b=v.collapsed,_=v.toggleCollapsed,h=v.setCollapsed;return(0,l.useEffect)((function(){g&&h(!g)}),[d,g]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(m.O,(0,n.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",s)},i,{onClick:function(e){e.preventDefault(),_()}}),null!=(t=i.children)?t:i.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.map((function(e,t){return l.createElement(u.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:i.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function _(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,g);delete n.isDropdownItem;var o=a?b:v;return l.createElement(o,n)}v.propTypes=Object.assign({items:i().array,position:i().string,className:i().string},m.O.propTypes),b.propTypes=Object.assign({items:i().array,className:i().string},m.O.propTypes),_.propTypes={mobile:i().bool},_.defaultProps={mobile:!1},t.Z=_},52807:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(22122),r=a(19756),l=a(67294),o=a(45697),s=a.n(o),i=a(78358),c=a(61142),m=a(86010),u=a(19257),d=a(98565),p=["items","label","className"],g=["className","to","href","label"],f=["items_","layout","position","className"],v=["items_","className"],b=["mobile"];function _(e,t){return e.some((function(e){e.items?_(e.items,t):function(e,t){!!(0,u.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function h(e){var t,a=e.items,n=e.label,l=e.className,o=(0,r.Z)(e,p),s={items:[],index:0};a?(n&&s.items.push({label:n,className:l}),(t=s.items).push.apply(t,a)):s.items.push(Object.assign({label:n,className:l},o));return s}function E(e){var t=e.className,a=e.to,o=e.href,s=e.label,c=(0,r.Z)(e,g);if(a||o)return l.createElement(i.O,(0,n.Z)({className:(0,m.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:a,href:o,label:s},c));if(s)return l.createElement("div",{className:"dropdown__label"},s);throw"Mega dropdown item must be a link or a category header."}function N(e){var t,a=e.items_,o=e.layout,s=e.position,c=e.className,p=(0,r.Z)(e,f),g=_(a,(0,u.be)()),v=(0,l.useRef)(null),b=(0,l.useState)(!1),N=b[0],k=b[1],y=(0,u.LU)().navbar.hideOnScroll,Z=(0,d.Z)(y).isNavbarVisible,w=a.map(h),P=o.length,T=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),C=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,a){e&&"."!==e&&(C[t+a*P]=e)}))}));for(var D=C.map((function(e){var t,a=w[e];if(a)return null!=(t=a.items[a.index++])?t:null})),x=[],B=null,I=0;I<P;I++){for(var O=[],M=0;M<T;M++){var R=D[I+M*P];O.push(R),R&&(B=R)}x.push(O)}return B.onKeyDown=function(e){"Tab"===e.key&&k(!1)},(0,l.useEffect)((function(){Z||k(!1)}),[Z]),(0,l.useEffect)((function(){var e=function(e){v.current&&!v.current.contains(e.target)&&k(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[v]),l.createElement("div",{ref:v,className:(0,m.Z)("dropdown","dropdown--hoverable","dropdown--mega",{"dropdown--right":"right"===s,"dropdown--show":N}),onMouseLeave:function(){return k(!1)}},l.createElement(i.O,(0,n.Z)({className:(0,m.Z)("navbar__item navbar__link",c,{"navbar__link--active":g})},p,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(!N))},onMouseEnter:function(){return k(!0)}}),null!=(t=p.children)?t:p.label),l.createElement("div",{className:"dropdown__container"},l.createElement("div",{className:"dropdown__menu"},x.map((function(e,t){return l.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return l.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?l.createElement(E,e):null)})))})))))}function k(e){var t,a=e.items_,o=e.className,s=(0,r.Z)(e,v);delete s.position,delete s.layout;var c=(0,u.be)(),d=_(a,c),p=(0,u.uR)({initialState:function(){return!d}}),g=p.collapsed,f=p.toggleCollapsed,b=p.setCollapsed;return(0,l.useEffect)((function(){d&&b(!d)}),[c,d]),l.createElement("li",{className:(0,m.Z)("menu__list-item",{"menu__list-item--collapsed":g})},l.createElement(i.O,(0,n.Z)({role:"button",className:(0,m.Z)("menu__link menu__link--sublist",o)},s,{onClick:function(e){e.preventDefault(),f()}}),null!=(t=s.children)?t:s.label),l.createElement(u.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.map((function(e,t){return l.createElement(x,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:s.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function y(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,b),o=a?k:N;return l.createElement(o,n)}E.propTypes={className:s().string,to:s().string,href:s().string,label:s().string},N.propTypes=Object.assign({items_:s().array,layout:s().arrayOf(s().string),position:s().string,className:s().string},i.O.propTypes),k.propTypes=Object.assign({items_:s().array,className:s().string},i.O.propTypes),y.propTypes={mobile:s().bool},y.defaultProps={mobile:!1};var Z=y,w=a(36508),P=a(62437),T=["type","items","layout"],C={default:function(){return i.Z},localeDropdown:function(){return w.Z},search:function(){return P.Z},dropdown:function(){return c.Z},megaDropdown:function(){return Z},docsVersion:function(){return a(39693).Z},docsVersionDropdown:function(){return a(74493).Z},doc:function(){return a(36673).Z}};function D(e){var t=e.type,a=e.items,o=e.layout,s=(0,r.Z)(e,T),i=function(e){var t=C[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,a){return a?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a,void 0!==o));return l.createElement(i,(0,n.Z)({items:a,layout:o},s))}D.propTypes={type:s().string,items:s().array,layout:s().arrayOf(s().string)};var x=D},5086:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(22122),r=a(67294),l=a(45697),o=a.n(l),s=a(19257),i=a(5730),c=a(86010),m=(0,r.memo)((function(e){var t=e.className,a=e.styles,n=e.icons,l=e.checked,o=e.disabled,s=e.onChange,i=(0,r.useState)(l),m=i[0],u=i[1],d=(0,r.useState)(!1),p=d[0],g=d[1],f=(0,r.useRef)(null);return r.createElement("div",{className:(0,c.Z)("toggle",t,{"toggle--checked":m,"toggle--focused":p,"toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=f.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:a.unchecked},n.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:a.checked},n.checked),r.createElement("input",{ref:f,checked:m,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:s,onClick:function(){return u(!m)},onFocus:function(){return g(!0)},onBlur:function(){return g(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=f.current)||t.click())}}))}));function u(e){var t=(0,s.LU)().colorMode.switchConfig,a=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,u=(0,i.Z)();return r.createElement(m,(0,n.Z)({disabled:!u,styles:{unchecked:c,checked:l},icons:{unchecked:o,checked:a}},e))}m.displayName="ToggleMemo",m.propTypes={className:o().string,styles:o().shape({unchecked:o().any,checked:o().any}),icons:o().shape({unchecked:o().string,checked:o().string}),checked:o().bool,disabled:o().bool,onChange:o().func}}}]);