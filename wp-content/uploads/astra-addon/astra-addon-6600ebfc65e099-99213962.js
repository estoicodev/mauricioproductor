astraToggleSetupPro=function(e,t,a){var n,o,l,s=!1;if(0<(n="off-canvas"===e||"full-width"===e?(o=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),(l=t.classList.contains("ast-header-break-point")?document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle"):document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length):t.classList.contains("ast-header-break-point")?(o=document.querySelectorAll("#ast-mobile-header"),(s=!(0<(n=(l=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length)))?1:n):(o=document.querySelectorAll("#ast-desktop-header"),(l=document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length))||s)for(var r=0;r<n;r++)if(s||(l[r].setAttribute("data-index",r),a[r]||(a[r]=l[r],l[r].addEventListener("click",astraNavMenuToggle,!1))),void 0!==o[r])for(var d,i=0;i<o.length;i++)if(0<(d=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?o[i].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):o[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var c=0;c<d.length;c++)d[c].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuTogglePro=function(e,t,a,n){e.preventDefault();var o=e.target.closest("#ast-desktop-header"),l=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),s=(o=null!=o&&""!==o?o.querySelector(".main-header-menu-toggle"):document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"),document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));if("desktop"===e.currentTarget.trigger_type)return null!==s&&""!==s&&void 0!==s&&(astraToggleClass(s,"toggle-on"),s.classList.contains("toggle-on")?s.style.display="block":s.style.display=""),astraToggleClass(o,"toggled"),void(o.classList.contains("toggled")?(t.classList.add("ast-main-header-nav-open"),"dropdown"===a&&(l.style.display="block")):(t.classList.remove("ast-main-header-nav-open"),l.style.display="none"));e=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),s="0",o=!1;if(null!==n.closest("#ast-fixed-header")&&(e=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),s="0",o=!0),void 0===e[s])return!1;for(var r=e[s].querySelectorAll(".menu-item-has-children"),d=0;d<r.length;d++){r[d].classList.remove("ast-submenu-expanded");for(var i=r[d].querySelectorAll(".sub-menu"),c=0;c<i.length;c++)i[c].style.display="none"}-1!==(n.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[s],"toggle-on"),astraToggleClass(menu_toggle_all[s],"toggled"),o&&1<menu_toggle_all.length&&astraToggleClass(menu_toggle_all[1],"toggled"),e[s].classList.contains("toggle-on")?(e[s].style.display="block",t.classList.add("ast-main-header-nav-open")):(e[s].style.display="",t.classList.remove("ast-main-header-nav-open")))};const accountMenuToggle=function(){const n=astraAddon.hf_account_action_type&&"menu"===astraAddon.hf_account_action_type,o=n&&astraAddon.hf_account_show_menu_on&&"click"===astraAddon.hf_account_show_menu_on,e=document.querySelectorAll(".ast-header-account-wrap");e&&e.forEach(t=>{const a=t.querySelector(".ast-account-nav-menu"),e=(document.addEventListener("pointerup",function(e){(o||n&&document.querySelector("body").classList.contains("ast-header-break-point"))&&!t.contains(e.target)&&(a.style.right="",a.style.left="")}),t.querySelector(".ast-header-account-link"));e&&e.addEventListener("click",function(e){(o||n&&document.querySelector("body").classList.contains("ast-header-break-point"))&&(headerSelectionPosition=e.target.closest(".site-header-section"))&&(headerSelectionPosition.classList.contains("site-header-section-left")?(a.style.right=""===a.style.right?"-100%":"",a.style.left=""===a.style.left?"auto":""):(a.style.left=""===a.style.left?"-100%":"",a.style.right=""===a.style.right?"auto":""))})})};document.addEventListener("astPartialContentRendered",function(){accountMenuToggle()}),window.addEventListener("load",function(){accountMenuToggle()}),document.addEventListener("astLayoutWidthChanged",function(){accountMenuToggle()});function display_mega_menu_on_load(){var e=document.querySelectorAll(".content-width-mega");if(0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-content");null!==e&&e.classList.remove("ast-hidden")});var a=document.querySelectorAll(".menu-container-width-mega");if(0<a.length)for(t=0;t<a.length;t++)a[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-menu-container");null!==e&&e.classList.remove("ast-hidden")});var s=document.querySelectorAll(".full-width-mega");if(0<s.length)for(t=0;t<s.length;t++)s[t].addEventListener("mouseenter",function(e){var t=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full");null!==t&&t.classList.remove("ast-hidden"),null!==e&&e.classList.remove("ast-hidden")});var n=document.querySelectorAll(".full-stretched-width-mega");if(0<n.length)for(t=0;t<n.length;t++)n[t].addEventListener("mouseenter",function(e){var t=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full-stretched");null!==t&&t.classList.remove("ast-hidden"),null!==e&&e.classList.remove("ast-hidden")});var r=document.querySelectorAll(".custom-width-mega");if(0<r.length)for(t=0;t<r.length;t++)r[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-custom");null!==e&&e.classList.remove("ast-hidden")})}document.addEventListener("DOMContentLoaded",display_mega_menu_on_load),document.addEventListener("astPartialContentRendered",display_mega_menu_on_load);var items=document.getElementsByClassName("astra-megamenu-li");function apply_megamenu_width_styles(){[].slice.call(items).forEach(function(f){jQuery(f).hover(function(){var e,t,a,s,n,r,i,l,d,u=jQuery(f).parents(".ast-container"),m=u.children(),u=u.parent(),o=jQuery(this);(o.hasClass("full-width-mega")||o.hasClass("full-stretched-width-mega"))&&(m=jQuery(m).closest(".ast-container")),parseInt(jQuery(window).width())>parseInt(astra.break_point)&&"ast-hf-mobile-menu"!==o.parent().attr("id")&&"ast-desktop-toggle-menu"!==o.parent().attr("id")?(e=m.width(),i=m.offset(),m=(a=o.offset()).left-(i.left+parseFloat(m.css("paddingLeft"))),d=e-(a.left+i.left)+130,t=u.width(),l=u.offset(),a=a.left-(l.left+parseFloat(u.css("paddingLeft"))),o.hasClass("custom-width-mega")&&(r=(r=window.getComputedStyle(o.find(".astra-mega-menu-width-custom")[0],"::before").getPropertyValue("content")||1200).replace(/[^0-9]/g,""),n=(r=parseInt(r))<=e?(n=parseInt(e-r),s=parseInt(m-n),i.left-s):(n=parseInt(r-e),s=parseInt(m+n),i.left+s)),o.hasClass("menu-container-width-mega")&&(l=jQuery(f).parents(".main-navigation"),u.hasClass("ast-above-header")?l=jQuery(".ast-above-header-navigation"):u.hasClass("ast-below-header")&&(l=jQuery(".ast-below-header-actual-nav")),e=($target_container=l.length?l:o.parent("ul")).width()+"px",i=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),u=o.offset(),l=jQuery(window).width()-i-u.left,m=parseInt($target_container.width()-l),d=parseInt(e)-o.outerWidth()-parseInt($target_container.width()-l)),o.hasClass("full-width-mega")?(o.find(".astra-full-megamenu-wrapper").css({left:"-"+a+"px",width:t}),o.find(".astra-megamenu").css({width:e})):o.hasClass("full-stretched-width-mega")?o.find(".astra-full-megamenu-wrapper").css({left:"-"+a+"px",width:t}):o.hasClass("custom-width-mega")?astra.isRtl?o.find(".astra-mega-menu-width-custom").css({right:"-"+n+"px",width:r+"px"}):o.find(".astra-mega-menu-width-custom").css({left:"-"+s+"px",width:r+"px"}):astra.isRtl?o.find(".astra-megamenu").css({right:"-"+d+"px",width:e}):o.find(".astra-megamenu").css({left:"-"+m+"px",width:e})):astra.isRtl?(o.find(".astra-megamenu").css({right:"",width:"","background-image":""}),o.find(".astra-full-megamenu-wrapper").css({right:"",width:"","background-image":""})):(o.find(".astra-megamenu").css({left:"",width:"","background-image":""}),o.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))}),jQuery(f).mouseenter(function(){document.dispatchEvent(new CustomEvent("astra_mega_menu_on_hover",{detail:{}}))})})}apply_megamenu_width_styles(),document.addEventListener("astMenuHoverStyleChanged",function(){apply_megamenu_width_styles()}),[].slice.call(items).forEach(function(o){var e=jQuery(o).parents(".ast-container"),f=e.children(),h=e.parent(),c=jQuery(o);(c.hasClass("full-width-mega")||c.hasClass("full-stretched-width-mega"))&&(f=jQuery(f).closest(".ast-container"),c.find(".astra-full-megamenu-wrapper").removeClass("ast-hidden")),c.find(".menu-link").focusin(function(e){var t,a,s,n,r,i,l,d,u,m;astra.is_header_footer_builder_active||(c.find(".sub-menu").addClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus")),c.find(".sub-menu").removeClass("ast-hidden"),parseInt(jQuery(window).width())>parseInt(astra.break_point)&&"ast-hf-mobile-menu"!==c.parent().attr("id")&&"ast-desktop-toggle-menu"!==c.parent().attr("id")?(t=f.width(),d=f.offset(),u=(s=c.offset()).left-(d.left+parseFloat(f.css("paddingLeft"))),m=s.left+d.left,a=h.width(),l=h.offset(),s=s.left-(l.left+parseFloat(h.css("paddingLeft"))),c.hasClass("custom-width-mega")&&(i=(i=window.getComputedStyle(c.find(".astra-mega-menu-width-custom")[0],"::before").getPropertyValue("content")||1200).replace(/[^0-9]/g,""),r=(i=parseInt(i))<=t?(r=parseInt(t-i),n=parseInt(u-r),d.left-n):(r=parseInt(i-t),n=parseInt(u+r),d.left+n)),c.hasClass("menu-container-width-mega")&&(l=jQuery(o).parents(".main-navigation"),h.hasClass("ast-above-header")?l=jQuery(".ast-above-header-navigation"):h.hasClass("ast-below-header")&&(l=jQuery(".ast-below-header-actual-nav")),t=($target_container=l.length?l:c.parent("ul")).width()+"px",d=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),l=c.offset(),d=jQuery(window).width()-d-l.left,u=parseInt($target_container.width()-d),m=parseInt(t)-c.outerWidth()-parseInt($target_container.width()-d)),c.hasClass("full-width-mega")?(c.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:a}),c.find(".astra-megamenu").css({width:t})):c.hasClass("full-stretched-width-mega")?c.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:a}):c.hasClass("custom-width-mega")?astra.isRtl?c.find(".astra-mega-menu-width-custom").css({right:"-"+r+"px",width:i+"px"}):c.find(".astra-mega-menu-width-custom").css({left:"-"+n+"px",width:i+"px"}):astra.isRtl?c.find(".astra-megamenu").css({right:"-"+m+"px",width:t}):c.find(".astra-megamenu").css({left:"-"+u+"px",width:t})):astra.isRtl?(c.find(".astra-megamenu").css({right:"",width:"","background-image":""}),c.find(".astra-full-megamenu-wrapper").css({right:"",width:"","background-image":""})):(c.find(".astra-megamenu").css({left:"",width:"","background-image":""}),c.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))}),astra.is_header_footer_builder_active||(c.find(".menu-link").keydown(function(e){9==e.which&&e.shiftKey&&(c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"))}),jQuery(o).find(".sub-menu .menu-item").last().focusout(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),jQuery(window).click(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")})),c.click(function(e){jQuery(e.target).hasClass("menu-item")&&e.stopImmediatePropagation()})});!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function d(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o,n;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var s=document.querySelectorAll(".ast-search-box.header-cover"),c=astraAddon.is_header_builder_active||!1,r=0;r<s.length;r++)for(var l=s[r].parentNode.querySelectorAll("a.astra-search-icon"),i=0;i<l.length;i++)l[i]==this&&(d(s[r]),s[r].querySelector("input.search-field").focus(),c?(t=s[r],n=o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(n=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap"),null!==a&&null!==n&&(n=n.offsetHeight,a=a.offsetHeight,o=o.offsetHeight,n=n&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(n)-parseFloat(a):parseFloat(a),t.parentNode.classList.contains("ast-mobile-header-wrap")&&(n=parseFloat(o)),t.style.maxHeight=Math.abs(n)+"px"))):(a=s[r],t=o=void 0,document.body.classList.contains("ast-header-break-point")&&(t=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar"))&&null!==t&&(t=t.offsetHeight,o=o.offsetHeight,t=t&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(t)-parseFloat(o):parseFloat(o),a.style.maxHeight=Math.abs(t)+"px"))));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(d(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.querySelectorAll(".ast-search-box .close"),s=0,r=c.length;s<r;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode)for(var e=document.getElementById("ast-seach-full-screen-form"),t=(null!=e&&(n(e),o("full-screen")),document.querySelectorAll(".ast-search-box.header-cover")),a=0;a<t.length;a++)n(t[a])},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();