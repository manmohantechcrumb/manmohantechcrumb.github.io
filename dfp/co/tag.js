var _tcVastTag = typeof tcVastOSTag !== "undefined" ? tcVastOSTag : '';
(function () {
/*!
YAAS Player
Copyright (c) 2023, YAAS Player, Performoo, All Rights Reserved
This source code and its use and distribution is subject to the terms
and conditions of the applicable license agreement.
https://media-b.performoo.com/tos/performoo-terms-of-services-mar172021.html
This product includes portions of other software. For the EULA (End User Level Agreement) see ..
https://media-b.performoo.com/eula/performoo-eula-dec292021.html
*/
function getBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return "Opera";
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        return 'Edge';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 'Chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'Firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        return 'IE';
    } else {
        return 'unknown'; 
    }
}
if (getBrowser() == "Safari") return;

var loadTag = function (params) { var TC_ERROR = "Error", TC_ERROR_NO_SLOT = "Error_NoSlot", tcYaas = { setup: function setup(i) { var src = i.playerURL, d = document, w = window; if (i.playInCurrentFrame || (d = top.document, w = top), i.config && i.config.isMonitoring && !i.tagTriggerAttempt) { var currentScriptTag = document?.currentScript, dataAttValMap = (null == currentScriptTag ? void 0 : currentScriptTag.dataset) || {}, extraParamObj = { cuid: getCUId(), playerid: adSlotId, loopCount: 0 }; for (var dataKey in dataAttValMap) extraParamObj[dataKey] = encodeURIComponent(dataAttValMap[dataKey]); delete extraParamObj?.curl, this.captureEvent(i, "Session", extraParamObj) } i.tagtriggerTime = (new Date).getTime(); var perfSlotSelectorList = i.slotSelector; !i.slotSelector instanceof Array && (perfSlotSelectorList = [i.slotSelector]), perfSlotSelectorList = perfSlotSelectorList.filter((e => !!e.selector && e.selector.length > 0)); var hooks = i.config.hooks || [], hook = hooks.find((e => 1 == e.type)), newAdSlotEle = d.createElement("div"); if (newAdSlotEle.setAttribute("id", i.adSlotId), hook && hook.data) { hook.data = hook.data.replace("[HOOK]", i.adSlotId), eval(hook.data); var pfRefNode = TC_YAAS["hook1_" + i.adSlotId](); if (pfRefNode) { var adSlotEle = d.getElementById(i.adSlotId); adSlotEle && adSlotEle.parentNode.removeChild(adSlotEle), pfRefNode.parentNode.insertBefore(newAdSlotEle, pfRefNode.nextSibling), loadScript() } } else if (perfSlotSelectorList && perfSlotSelectorList.length > 0) { var adSlotEle = d.getElementById(i.adSlotId); adSlotEle && adSlotEle.parentNode.removeChild(adSlotEle); var counter = 0, pfWaitTime = 2 * (i?.config.slot?.waitTime || 3), querySelectorInterval = setInterval((function () { for (var e of perfSlotSelectorList) { var t = e.selector, r = e.index, o = d.querySelectorAll(t); if (o && o.length > r) { clearInterval(querySelectorInterval); var a = o[r = r ? parseInt(r) : 0]; a.parentNode.insertBefore(newAdSlotEle, a.nextSibling), loadScript(); break } } ++counter > pfWaitTime && (window.clearInterval(querySelectorInterval), slotNotFoundHandler()) }), 500) } else d.getElementById(i.adSlotId) || self === top || i.playInCurrentFrame || getTopFrameElement(window)?.insertAdjacentElement("afterend", newAdSlotEle), loadScript(); function getTopFrameElement(e) { for (var t = e; t.parent !== top;)t = t.parent; return t.frameElement } function slotNotFoundHandler() { if (!0 === i?.config.slot?.ifNotFound?.slider?.enable) return newAdSlotEle.setAttribute("data-yaas-slider", "1"), d.body.appendChild(newAdSlotEle), void loadScript(); tcYaas.captureError(TC_ERROR_NO_SLOT, tcYaasConfig, "TCPlayer: Slot position selector not found") } function loadScript() { if (d.getElementById(i.adSlot)) { var e = function () { w.TC_YAAS.setupVastOS({ i: i, tag: i.vastTag, src: src }) }, t = d.createElement("script"); t.async = 1, t.src = src + "/tcInitVast.js", t.onload = e, t.onreadystatechange = e, d.head.appendChild(t) } else tcYaas.captureError(TC_ERROR_NO_SLOT, tcYaasConfig, "TCPlayer: Ad Slot not found") } }, captureError: function (e, t, r) { console.error("TCPlayer Error: ", r), this.captureEvent(t, e, { errorMessage: r }) }, captureEvent: function (e, t, r) { if (e.ed) { var o = { ...r, srcURL: a(), purl: encodeURIComponent(n()), refURL: document.referrer.split("?")[0], action: t, event: "adtag", ed: e.ed, cacheBuster: (new Date).getTime(), tzOffset: (new Date).getTimezoneOffset() }; if (e.trackBaseURL) (new Image).src = e.trackBaseURL + "?" + function (e) { var t = []; for (var r in e) t.push(r + "=" + e[r]); return t.join("&") }(o) } function a() { var e = document.createElement("a"); return e.href = n(), function (e) { if (!e) return e; var t = e.split("."); if (t.size < 3) return e; if (e.includes("google")) return t.slice(t.length - 2).join("."); return e }(e.hostname) } function n() { if (top === self) return window.location.href.split("?")[0]; var e = document.location.ancestorOrigins; return e && e.length > 0 ? e[e.length - 1] : document.referrer } } }, setAdSlotStyle = function (e, t) { var r = document.getElementById(e); if (r && t?.enable) if (r.parentNode.style.position = "relative", 1 !== t?.type) r.style.position = "absolute"; else { var o = t?.customStyle || {}; for (var a in o) r.style[a] = o[a] } }; function getCUId() { var e = document?.currentScript, t = "cuid", r = e?.getAttribute(t) || "cuid-" + (new Date).getTime() + Math.random(); return e?.setAttribute(t, r), r } setAdSlotStyle(adSlotId, tcYaasConfig.config.placementConfig); try { tcYaas.setup({ ...tcYaasConfig, ...params, adSlot: params.adSlotId }) } catch (e) { console.error("TC Error: ", e), tcYaas.captureError(TC_ERROR, tcYaasConfig, e.message) } };

var adSlotId = 'pf-vastos-ggpdJCTny-' + new Date().getTime();
//document.write("<div id='" + adSlotId + "'></div>");

var currentScriptTag = document?.currentScript;
var dataAttVal = currentScriptTag?.dataset || {};

var tcYaasConfig = {
trackBaseURL: 'https://trac-b0.performoo.com/capture',
slotSelector: [{"selector":"body","index":0}],
env:"b",
ed:"3BRsqtVZBLO+2W2QvZcRpfsBpZq4SclqYAkFOJXsHCPLq1QX/8rGjdH3oVWkrJupg/yh9RYyAR+5IcUYFtpJFT3oGiscPotMgNFg4Bz4eXs=",
config: {"slot":{},"hooks":[],"isMonitoring":true},
dataAttribVal: dataAttVal
};

var param = {
adSlotId: adSlotId,
vastTag: _tcVastTag,
netDataURL: 'https://tags3-b.performoo.com/dYM-zTi_/data.json',
netId: "dYM-zTi_",
tagId: "ggpdJCTny",
auId: "",
labelTagId: "",
tSrc: "s3",
playerURL: "https://yaas-b-monitor.performoo.com/103.0"
}
param.playInCurrentFrame = false;var w = top; param.playInCurrentFrame && (w = window); try { w.document } catch (a) { param.playInCurrentFrame = !0, w = window } w.TC_YAAS || (w.TC_YAAS = {}), "undefined" != typeof tcGamMacroClick && (param.gamMacros = { click: tcGamMacroClick }), w.TC_YAAS[adSlotId] = { loadTag: loadTag, params: { ...param } }, loadTag(param);
}())