var _tcVastTag = typeof tcVastOSTag !== "undefined" ? tcVastOSTag : '';
(async function () {
    /*!
       YAAS Player
       Copyright (c) 2023, YAAS Player, Performoo, All Rights Reserved
       This source code and its use and distribution is subject to the terms
       and conditions of the applicable license agreement.
       https://media-b.performoo.com/tos/performoo-terms-of-services-mar172021.html
       This product includes portions of other software. For the EULA (End User Level Agreement) see ..
       https://media-b.performoo.com/eula/performoo-eula-dec292021.html
    */

    var CUID, CURRENT_SCRIPT = document?.currentScript, setCUID = async () => { var t = await fetch("https://tags3-b.performoo.com/d1Zyfpxv/am/d1ZA1WYv/data0.json"); return CUID = t.headers.get("Cdn-Uid"), CURRENT_SCRIPT.setAttribute("data-cuid", CUID), CUID };

    var loadTag = function (params) { var TC_ERROR = "Error", TC_ERROR_NO_SLOT = "Error_NoSlot", tcYaas = { setup: function setup(i) { var src = i.playerURL, d = document, w = window; if (i.playInCurrentFrame || (d = top.document, w = top), i.config && i.config.isMonitoring && !i.tagTriggerAttempt) { var currentScriptTag = document?.currentScript, dataAttValMap = (null == currentScriptTag ? void 0 : currentScriptTag.dataset) || {}, extraParamObj = { cuid: CUID, playerid: adSlotId, loopCount: 0 }; for (var dataKey in dataAttValMap) extraParamObj[dataKey] = encodeURIComponent(dataAttValMap[dataKey]); delete extraParamObj?.curl, this.captureEvent(i, "Session", extraParamObj), this.captureEvent(i, "cust1", extraParamObj, "track") } i.tagtriggerTime = (new Date).getTime(); var perfSlotSelectorList = i.slotSelector; !i.slotSelector instanceof Array && (perfSlotSelectorList = [i.slotSelector]), perfSlotSelectorList = perfSlotSelectorList.filter((e => !!e.selector && e.selector.length > 0)); var hooks = i.config.hooks || [], hook = hooks.find((e => 1 == e.type)), newAdSlotEle = d.createElement("div"); if (newAdSlotEle.setAttribute("id", i.adSlotId), hook && hook.data) { hook.data = hook.data.replace("[HOOK]", i.adSlotId), eval(hook.data); var pfRefNode = TC_YAAS["hook1_" + i.adSlotId](); if (pfRefNode) { var adSlotEle = d.getElementById(i.adSlotId); adSlotEle && adSlotEle.parentNode.removeChild(adSlotEle), pfRefNode.parentNode.insertBefore(newAdSlotEle, pfRefNode.nextSibling), loadScript() } } else if (perfSlotSelectorList && perfSlotSelectorList.length > 0) { var adSlotEle = d.getElementById(i.adSlotId); adSlotEle && adSlotEle.parentNode.removeChild(adSlotEle); var counter = 0, pfWaitTime = 2 * (i?.config.slot?.waitTime || 3), querySelectorInterval = setInterval((function () { for (var e of perfSlotSelectorList) { var t = e.selector, r = e.index, o = d.querySelectorAll(t); if (o && o.length > r) { clearInterval(querySelectorInterval); var a = o[r = r ? parseInt(r) : 0]; a.parentNode.insertBefore(newAdSlotEle, a.nextSibling), loadScript(); break } } ++counter > pfWaitTime && (window.clearInterval(querySelectorInterval), slotNotFoundHandler()) }), 500) } else d.getElementById(i.adSlotId) || self === top || i.playInCurrentFrame || window?.top?.document?.body?.appendChild(newAdSlotEle), loadScript(); function slotNotFoundHandler() { if (!0 === i?.config.slot?.ifNotFound?.slider?.enable) return newAdSlotEle.setAttribute("data-yaas-slider", "1"), d.body.appendChild(newAdSlotEle), void loadScript(); tcYaas.captureError(TC_ERROR_NO_SLOT, tcYaasConfig, "TCPlayer: Slot position selector not found") } function loadScript() { if (d.getElementById(i.adSlot)) { var e = function () { w.TC_YAAS.setupVastOS({ i: i, tag: i.vastTag, src: src }) }, t = d.createElement("script"); t.async = 1, t.src = src + "/tcInitVast.js", t.onload = e, t.onreadystatechange = e, d.head.appendChild(t) } else tcYaas.captureError(TC_ERROR_NO_SLOT, tcYaasConfig, "TCPlayer: Ad Slot not found") } }, captureError: function (e, t, r) { console.error("TCPlayer Error: ", r), this.captureEvent(t, e, { errorMessage: r }) }, captureEvent: function (e, t, r, o) { var a = o || "adtag"; if (e.ed) { var n = { ...r, srcURL: l(), purl: encodeURIComponent(i()), refURL: document.referrer.split("?")[0], action: t, event: a, ed: e.ed, cacheBuster: (new Date).getTime(), tzOffset: (new Date).getTimezoneOffset() }; if (e.trackBaseURL) (new Image).src = e.trackBaseURL + "?" + function (e) { var t = []; for (var r in e) t.push(r + "=" + e[r]); return t.join("&") }(n) } function l() { var e = document.createElement("a"); return e.href = i(), function (e) { if (!e) return e; var t = e.split("."); if (t.size < 3) return e; if (e.includes("google")) return t.slice(t.length - 2).join("."); return e }(e.hostname) } function i() { if (top === self) return window.location.href.split("?")[0]; var e = document.location.ancestorOrigins; return e && e.length > 0 ? e[e.length - 1] : document.referrer } } }, setAdSlotStyle = function (e, t) { var r = document.getElementById(e); if (r && t?.enable) if (r.parentNode.style.position = "relative", 1 !== t?.type) r.style.position = "absolute"; else { var o = t?.customStyle || {}; for (var a in o) r.style[a] = o[a] } }; function getCUId() { var e = document?.currentScript, t = "cuid", r = e?.getAttribute(t) || "cuid-" + (new Date).getTime() + Math.random(); return e?.setAttribute(t, r), r } setAdSlotStyle(adSlotId, tcYaasConfig.config.placementConfig); try { tcYaas.setup({ ...tcYaasConfig, ...params, adSlot: params.adSlotId }) } catch (e) { console.error("TC Error: ", e), tcYaas.captureError(TC_ERROR, tcYaasConfig, e.message) } };

    var adSlotId = 'pf-vastos-d1ZA1WYv-' + new Date().getTime();
    document.write("<div id='" + adSlotId + "'></div>");
    await setCUID();


    var currentScriptTag = CURRENT_SCRIPT;
    var dataAttVal = currentScriptTag?.dataset || {};

    var tcYaasConfig = {
        trackBaseURL: 'https://trac-b0.performoo.com/capture',
            slotSelector: [],
            env:"b",
            ed:"3BRsqtVZBLO+2W2QvZcRpXUORC74zTnSzLhZmnwLvq75RR6SXV2PK14io5dKOmzlCAyOeGH4XL/UM/0ZobWMp5fH3a5aplf721K9bEvPwhQ=",
            config: {"hooks":[{"at":1.0,"type":"JS","frequency":{"type":"RANDOM","value":101.0},"data":"(function(){\n    var params = {\n        yaasURL: \"https://yaas-b-s.performoo.com/51.0\",\n        netId: \"dYM-zTi_\",\n        tagLauncherId: \"gecZgXi3c\",\n        ed: \"3BRsqtVZBLO+2W2QvZcRpfsBpZq4SclqYAkFOJXsHCPLq1QX/8rGjdH3oVWkrJupiZp/xL/npilcCGd1uazz1QSp4EWffCo+2OslHiZc788=\",\n        env:\"b\"\n    }\n\n    loadScript().then(()=>{\n        if(window?.TC_YAAS?.setupTagLauncher){\n            window.TC_YAAS.setupTagLauncher(params)\n        }\n    }).catch((e)=>{\n        console.error(\"Script URL is wrong : \", params.yaasURL + '/tagLauncher.js');\n    })\n\n    function loadScript() {\n        return new Promise((resolve, reject) => {\n            var script = document.createElement(\"script\")\n            script.src = params.yaasURL + '/tagLauncher.js'\n            script.addEventListener(\"load\", resolve)\n            script.addEventListener(\"error\", reject)\n            document.body.appendChild(script)\n        })\n    }\n}())"}],"isMonitoring":true,"slot":{}},
            dataAttribVal: dataAttVal,
            extraParams: {
                cuid: CUID
            }
        }

    var param = {
        adSlotId: adSlotId,
        vastTag: _tcVastTag,
        netDataURL: 'https://tags3-b.performoo.com/d1Zyfpxv/data.json',
        netId: "d1Zyfpxv",
        tagId: "d1ZA1WYv",
        auId: "",
        labelTagId: "",
        tSrc: "s3",
        playerURL: "https://yaas-dev.s3.amazonaws.com/140.0"
    }
    param.playInCurrentFrame = !(document.body.clientWidth <= 1 || window.frameElement && parseInt(window.frameElement.width) <= 1); var w = top; param.playInCurrentFrame && (w = window); try { w.document } catch (a) { param.playInCurrentFrame = !0, w = window } w.TC_YAAS || (w.TC_YAAS = {}), "undefined" != typeof tcGamMacroClick && (param.gamMacros = { click: tcGamMacroClick }), w.TC_YAAS[adSlotId] = { loadTag: loadTag, params: { ...param } }, loadTag(param);
}())