// @require      http://code.jquery.com/jquery-3.x-git.min.js?v2.43
/* globals jQuery, $, waitForKeyElements */
// ==UserScript==
// @name         一起搬砖不辛苦插件
// @namespace    https://greasyfork.org/zh-CN/users/988964-yan-ping-chen
// @version      2.43
// @description  这是“一起搬砖不辛苦”群的专用BUFF市场插件。
// @author       chinapok
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @license         AGPL-3.0
// @copyright       2024, chinapok
// @require         https://cdn.jsdelivr.net/npm/jquery-toast-plugin@1.3.2/dist/jquery.toast.min.js?v2.43
// @require         https://cdn.jsdelivr.net/npm/xlsx-core@1.0.3/xlsx.core.min.js?v2.43
// @require         https://www.buffgoods.com/cdn/jquery.index.js?v2.43
// @require         https://www.buffgoods.com/cdn/jquery.buff.js?v2.43
// @require         https://www.buffgoods.com/cdn/jquery.steam.js?v2.43
// @require         https://www.buffgoods.com/cdn/jquery.csgo.js?v2.43
// @match           https://buff.163.com/market/csgo*
// @match           https://buff.163.com/goods/*
// @match           https://buff.163.com/market/steam_inventory*
// @match           https://buff.163.com/market/sell_order*
// @match           https://buff.163.com/market/sell_order/on_sale*
// @match           https://buff.163.com/market/buy_order*
// @match           https://buff.163.com/market/bill_order*
// @match           https://buff.163.com/market/paintwear_rank*
// @match           https://buff.163.com/market/price_history/buff/*
// @match           https://buff.163.com/user-center/bookmark/*
// @run-at          document-body
// @grant           unsafeWindow
// @grant           GM_info
// @grant           GM_addStyle
// @grant           GM_setValue
// @grant           GM_getValue
// @grant           GM_openInTab
// @grant           GM_listValues
// @grant           GM_deleteValue
// @grant           GM_xmlhttpRequest
// @grant           GM_registerMenuCommand
// @connect         steamcommunity.com
// @connect         www.buffgoods.com
// @connect         steam.jijidui.cn
// @connect         myip.ipip.net
// @connect         www.ipip.net
// @connect         api.myip.la
// @connect         nordvpn.com
// @connect         ip-api.com
// ==/UserScript==
(function () {
  'use strict';
  if ($('.logo').hasClass('buffHelperLoaded')) {
    return;
  }
  $('.logo').addClass('buffHelperLoaded');
  window.onerror = function (e) {
    try {
      if (!e.error) {
        return;
      }
      let scriptName = undefined;
      let renderingEngine = window.navigator.userAgent.match(/(Chrome|Firefox)\/([^ ]*)/);
      let lineno = e.lineno;
      switch (renderingEngine && renderingEngine[1]) {
        case 'Chrome':
          scriptName = decodeURIComponent(
            decodeURIComponent(e.filename.match(/([^\/=]*)\.user\.js/)[1])
          );
          lineno -= 534;
          break;
        case 'Firefox':
          scriptName = decodeURIComponent(e.error.stack.match(/\/([^\/]*)\.user\.js/)[1]).trim();
          lineno -= 1;
          break;
        default:
      }
      if (scriptName == '一起搬砖不辛苦插件') {
        let colno = e.colno;
        let errorMsg = e.error.message;
        let msgBody = `内核：${renderingEngine[0]}<br/>版本：${GM_info.script.version}<br/>区域：${
          helper_config.steamCurrency
        } ${
          steamConnection ? 200 : steamConnection == undefined ? 'Unknow' : 404
        }<br/>位置：${lineno}:${colno}<br/>信息：${errorMsg}<br/>路径：${
          location.pathname
        }<br/>哈希：${location.hash}`;
        let msgHtml = `恭喜！你可能发现了一个bug<hr/>${msgBody}<hr/>点击下面的链接可以直接进行反馈<br/><a href='mailto:chinap@88.com?subject=【${
          GM_info.script.version
        }】${lineno}:${colno} ${errorMsg}&body=${encodeURIComponent(
          msgBody.replaceAll('<br/>', '\r\n')
        )}'>邮件反馈</a><hr/>这种错误绝大部分是网络问题<hr/>请先自查一下使用的节点情况`;
        showMessage('出现了意料之外的错误', msgHtml, 'error', false);
      } else {
        console.log(
          `插件名称：${scriptName}\n代码位置：${e.lineno}:${e.colno}\n错误信息：${e.message}`
        );
      }
    } catch {
      console.warn('unhandled 捕获了一个错误：', e);
    }
  };
  const STEAM_ORDER_SCALE_TEMPLATE =
    '<span class="f_12px f_Bold l_Right steam_temp steam_order_scale"></span>';
  const STEAM_ORDER_NUMBER_TEMPLATE =
    '<span class="steamInfo f_12px" style="position: absolute;display: inline-block;line-height:10px;white-space: nowrap;margin-left: -5px;"></span>';
  const ERROR_TEMPLATE =
    '<span class="f_12px c_Error f_Bold l_Right steam_temp steam_order_number_error"></span>';
  const INFO_TEMPLATE =
    '<span class="f_12px c_Blue l_Right steam_order_number_error" style="position: absolute;display: inline-block;line-height: 10px;white-space: nowrap;margin-left: -5px;"></span>';
  const HIGHLIGHT_TEMPLATE =
    '<span class="f_12px c_Highlight f_Bold l_Right steam_temp steam_order_number_error"></span>';
  const ENHANCEMENT_SUPPORT_LIST = Array(
    'rifle',
    'knife',
    'pistol',
    'smg',
    'machinegun',
    'shotgun',
    'hands'
  );
  const DEFAULT_CONFIG = {
    maxRange: 1,
    minRange: 0.63,
    needSort: null,
    pageSize: 20,
    reverseSticker: false,
    orderFloatLeft: false,
    overrideSortRule: false,
    sortAfterAllDone: true,
    marketColorLow: '#ff1e1e',
    marketColorHigh: '#5027ff',
    steamCurrency: 'USD',
    steamCtoF: 0,
    steamFtoC: 0,
    currencyEffectCalculate: false,
    displaySoldNumber: true,
    buffSellThreshold: 0,
    buffBuyThreshold: 0,
    steamCardPrice: 5.55,
    setSteamRate: 0.0386,
    setRecharge: 0,
    setBalance: 0,
    setWithdraw: 0,
    setDiscount: 0.95,
    setPlayShow: false,
    setShowSteamBtn: true,
    setSellBuyClose: false,
    setRecommendation: false,
    setLinkColor: '#ff1e1e',
    setLinkColorShow: true,
    setCardNum: '',
    steamOrderBuyNo: 0,
    lowestOnSale: false,
    dailySales: false,
    trend: false,
    recentlyTraded: false,
    currentSteamId: null,
    setShelves: 'byplug',
    showTrendTime: 10,
    steamSellTime: 10,
    autoOrderTime: 5,
    steamCostTime: 10,
    displaySoldTime: 5,
    displaySoldCount: 3,
    buffClose: null,
    displayBuffClose: true,
    buffBookMark: false,
    setPriceRatio: 10,
    warePriceBS: false,
    setWearPriceMode: 1,
    setApproachMode: 1,
    setWearPriceNo: 0,
    sameTypeNum: 5,
    buffSellNum: 200,
    buffShelveOk: 30,
    setBuffIdList: '',
    setShelveTime: '',
    setMinPrice: 0.5,
    displayNet: false,
    setSortBy: 0,
    setTagNamePrice: 1,
    setGunKinPriceNo: 3,
    setOtherPriceNo: 3
  };
  const STEAMBUY_CONFIG = {
    steamBuyName: '123',
    steamBuyName2: '123',
    steamBuyAddress: '123',
    steamBuyAddress2: '123',
    steamBuyCity: 'Juneau',
    steamBuyStateProvince: 'CA',
    steamBuyZipCode: '99850',
    steamBuyNation: 'US'
  };
  const g_rgCurrencyData = {
    CNY: {
      strCode: 'CNY',
      eCurrencyCode: 23,
      strSymbol: '¥',
      bSymbolIsPrefix: true,
      bWholeUnitsOnly: true,
      strDecimalSymbol: '.',
      strThousandsSeparator: ',',
      strSymbolAndNumberSeparator: ' '
    },
    USD: {
      strCode: 'USD',
      eCurrencyCode: 1,
      strSymbol: '$',
      bSymbolIsPrefix: true,
      bWholeUnitsOnly: false,
      strDecimalSymbol: '.',
      strThousandsSeparator: ',',
      strSymbolAndNumberSeparator: ''
    },
    EUR: {
      strCode: 'EUR',
      eCurrencyCode: 3,
      strSymbol: '€',
      bSymbolIsPrefix: false,
      bWholeUnitsOnly: false,
      strDecimalSymbol: ',',
      strThousandsSeparator: ' ',
      strSymbolAndNumberSeparator: ''
    },
    ARS: {
      strCode: 'ARS',
      eCurrencyCode: 34,
      strSymbol: 'ARS$',
      bSymbolIsPrefix: true,
      bWholeUnitsOnly: false,
      strDecimalSymbol: ',',
      strThousandsSeparator: '.',
      strSymbolAndNumberSeparator: ' '
    },
    TRY: {
      strCode: 'TRY',
      eCurrencyCode: 17,
      strSymbol: 'TL',
      bSymbolIsPrefix: false,
      bWholeUnitsOnly: false,
      strDecimalSymbol: ',',
      strThousandsSeparator: '.',
      strSymbolAndNumberSeparator: ' '
    }
  };
  const g_rgWalletInfo = {
    wallet_currency: 23,
    wallet_country: 'CN',
    wallet_state: '',
    wallet_fee: '1',
    wallet_fee_minimum: '1',
    wallet_fee_percent: '0.05',
    wallet_publisher_fee_percent_default: '0.10',
    wallet_fee_base: '0',
    wallet_balance: '20028',
    wallet_delayed_balance: '0',
    wallet_max_balance: '1300000',
    wallet_trade_max_balance: '1170000'
  };
  var helper_config = loadConfig();
  var helper_steamBuy_config = loadSteamBuyConfig();
  var steamCurrency;
  var exchangeRate = GM_getValue('exchangeRate') || {
    FtoC: 1,
    CtoF: 1,
    time_next_update_unix: 0,
    time_update_unix: 0
  };
  var ajaxTimeout = 20000;
  var steamConnection = undefined;
  var steamFailedTimes = 0;
  var market_color_high = [];
  var market_color_low = [];
  var itemCount = 0;
  var itemNum = 0;
  var needSort;
  var currentSteamId;
  var buffClose;
  var steam_lowest_sell_order = 0;
  var steam_highest_buy_order = 0;
  initHelper();
  initSteamOrder();
  initCurrency();
  if (location.pathname.startsWith('/goods/')) {
    goodsCss();
    mouseTodo();
    (function initSteamLink() {
      if (!document.querySelector('.detail-cont')) {
        requestIdleCallback(initSteamLink, { timeout: 300 });
        return;
      }
      $('.detail-pic').css('background-repeat', 'round').children().width(250);
      if ($('#j_game-switcher').data('current') == 'dota2') {
        $('.detail-cont>p').append($('.detail-summ>a').clone().addClass('steam-link'));
      } else {
        if (helper_config.setShowSteamBtn ? itemCount == itemNum - 1 : true) {
          $('.detail-cont>div:first').append(
            $('.detail-summ>a')
              .clone()
              .addClass('i_Btn i_Btn_mid i_Btn_D_red l_Right')
              .css({ 'margin-right': '30px' })
          );
        } else {
          $('.detail-cont>div:first').append($('.detail-summ>a').clone().addClass('steam-link'));
        }
      }
      $('.detail-summ>a').hide();
      $('#weapon_case_entry').remove();
      if (typeof unsafeWindow.g.user != 'undefined') {
        $('.detail-cont').css({ 'margin-left': 0, 'padding-bottom': '492px' });
        $('.detail-cont>div:first').css('margin-top', '-20px');
        $('.detail-summ').find('span:first').remove();
        if (helper_config.setPlayShow ? itemCount == itemNum - 1 : true) {
          $('.user-preview').hide();
        }
        if (helper_config.setRecommendation ? itemCount == itemNum - 1 : true) {
          $('.related').hide();
        }
        if (helper_config.setSellBuyClose ? itemCount == itemNum - 1 : true) {
          $('.detail-summ').find('.l_Right').hide();
        }
      }
    })();
    $(document).ajaxSend(function (event, xhr, header, result) {
      let urlParms = getUrlParms(header.url);
      if (typeof urlParms.prices != 'undefined') {
        sellErrorInfo(urlParms, helper_config);
      }
    });
    $(document).ajaxSuccess(function (event, status, header, result) {
      let urlParms = getUrlParms(header.url);
      if (typeof unsafeWindow.g.user == 'undefined') {
        showMessage(
          '账户未登录',
          '功能开启需要登录账号，请先登录BUFF，以及STEAM社区。',
          'error',
          8000
        );
        return false;
      }
      if (
        /^\/api\/market\/goods\/sell_order/.exec(header.url) &&
        result.data &&
        result.data.goods_infos[getGoodsId()] &&
        result.data.total_count
      ) {
        steamFailedTimes = 0;
        buffHelperModule_inspestEnhancementCsgo(result.data);
        window.buffHelperGoodsDetailScale(result.data);
        if ($(this).find('#curTips').length == 0) {
          $(this)
            .find('h1')
            .before(
              `</i><span id="curTips" style="color:#eea20e;">温馨提示：</span><small id="curInfo" style='color:#069b17'>查看ST求购单数据，点击“当前在售”或者从饰品链接进入，刷新“当前在购、成交记录”等会不起作用。</small>`
            );
        }
        if (helper_config.recentlyTraded) {
          let ul = $('.new-tab');
          let goodsName = $(this).find('h1').text();
          let urlParms = getUrlParms(header.url);
          let sellURL =
            'https://buff.163.com/api/market/goods/bill_order?game=csgo&goods_id=' +
            urlParms.goods_id +
            '&_=' +
            new Date().valueOf().toString();
          if ($(this).find('#sell_type').length == 0) {
            goodsSellInfo(sellURL, goodsName, 5);
          }
        }
      } else if (
        /^\/api\/market\/goods\/buy_order/.exec(header.url) &&
        result.data &&
        result.data.total_count
      ) {
        if ($(this).find('#curTips').length == 0) {
          $(this)
            .find('h1')
            .before(
              `</i><span id="curTips" style="color:#eea20e;">温馨提示：</span><small id="curInfo" style='color:#069b17'>查看ST求购单数据，点击“当前在售”或者从饰品链接进入，刷新“当前在购、成交记录”等不会起作用</small>`
            );
        }
        let ul = $('.new-tab');
        let goodsName = $(this).find('h1').text();
        let buffURL =
          'https://buff.163.com/api/market/goods?game=csgo&page_num=1&search=' +
          goodsName +
          '&_=' +
          new Date().valueOf().toString();
        goodsSearchInfo(buffURL, goodsName, ul);
        if (helper_config.recentlyTraded) {
          let urlParms = getUrlParms(header.url);
          let sellURL =
            'https://buff.163.com/api/market/goods/bill_order?game=csgo&goods_id=' +
            urlParms.goods_id +
            '&_=' +
            new Date().valueOf().toString();
          if ($(this).find('#sell_type').length == 0) {
            goodsSellInfo(sellURL, goodsName, 5);
          }
        }
      } else if (
        /^\/api\/market\/goods\/bill_order/.exec(header.url) &&
        result.data &&
        result.data.total_count
      ) {
        if ($(this).find('#curTips').length == 0) {
          $(this)
            .find('h1')
            .before(
              `<span id="curTips" style="color:#eea20e;">温馨提示：</span><small id="curInfo" style='color:#069b17'>查看ST求购单数据，点击“当前在售”或者从饰品链接进入，刷新“当前在购、成交记录”等不会起作用。</small>`
            );
        }
        let ul = $('.new-tab');
        let goodsName = $(this).find('h1').text();
        let buffURL =
          'https://buff.163.com/api/market/goods?game=csgo&page_num=1&search=' +
          goodsName +
          '&_=' +
          new Date().valueOf().toString();
        goodsSearchInfo(buffURL, goodsName, ul);
        if (helper_config.recentlyTraded) {
          let urlParms = getUrlParms(header.url);
          let sellURL =
            'https://buff.163.com/api/market/goods/bill_order?game=csgo&goods_id=' +
            urlParms.goods_id +
            '&_=' +
            new Date().valueOf().toString();
          if ($(this).find('#sell_type').length == 0) {
            goodsSellInfo(sellURL, goodsName, 5);
          }
        }
      } else if (
        /^\/api\/market\/paintwear_rank/.exec(header.url) &&
        result.data &&
        result.data.total_count
      ) {
        if ($(this).find('#curTips').length == 0) {
          $(this)
            .find('h1')
            .before(
              `<span id="curTips" style="color:#eea20e;">温馨提示：</span><small id="curInfo" style='color:#069b17'>查看ST求购单数据，点击“当前在售”或者从饰品链接进入，刷新“当前在购、成交记录”等不会起作用</small>`
            );
        }
        let ul = $('.new-tab');
        let goodsName = $(this).find('h1').text();
        let buffURL =
          'https://buff.163.com/api/market/goods?game=csgo&page_num=1&search=' +
          goodsName +
          '&_=' +
          new Date().valueOf().toString();
        let urlParms = getUrlParms(header.url);
        goodsSearchInfo(buffURL, goodsName, ul);
        if (helper_config.recentlyTraded) {
          let sellURL =
            'https://buff.163.com/api/market/goods/bill_order?game=csgo&goods_id=' +
            urlParms.goods_id +
            '&_=' +
            new Date().valueOf().toString();
          if ($(this).find('#sell_type').length == 0) {
            goodsSellInfo(sellURL, goodsName, 5);
          }
        }
        let tr_n = $('.detail-tab-cont').find('tr');
        if (tr_n.length == 12) {
          for (var i = 2; i < tr_n.length; i++) {
            let f = tr_n[i];
            let s = $(f).find('.sell_tag').length;
            if (s == 0) {
              $(f).hide();
            }
          }
        }
      } else if (/^\/api\/market\/goods\/price_history\/buff?/.exec(header.url)) {
        var sm = $('.detail-summ').find('.f_Strong>small').html();
        $('.detail-summ').find('.f_Strong>small').remove();
        var refPrice = $('.detail-summ').find('.f_Strong').text();
        $('.detail-summ')
          .find('.f_Strong')
          .append('<small class="hide-usd">' + sm + '</small>');
        let referencePrice = replaceAllStr(refPrice, '¥', '').trim();
        let urlParms = getUrlParms(header.url);
        let goodsName = $(this).find('h1').text();
        if (helper_config.recentlyTraded) {
          if (urlParms.currency == 'CNY') {
            if (typeof urlParms.days != 'undefined') {
              if ($(this).find('#curHistory30').length == 0 && urlParms.days == 30) {
                let historyURL =
                  'https://buff.163.com/api/market/goods/price_history/buff?game=csgo&goods_id=' +
                  urlParms.goods_id +
                  '&currency=CNY&days=' +
                  urlParms.days +
                  '&_=' +
                  new Date().valueOf().toString();
                priceHistoryInfo(historyURL, goodsName, referencePrice, helper_config);
              } else if ($(this).find('#curHistory7').length == 0 && urlParms.days == 7) {
                let historyURL =
                  'https://buff.163.com/api/market/goods/price_history/buff?game=csgo&goods_id=' +
                  urlParms.goods_id +
                  '&currency=CNY&days=' +
                  urlParms.days +
                  '&_=' +
                  new Date().valueOf().toString();
                priceHistoryInfo(historyURL, goodsName, referencePrice, helper_config);
              }
            } else {
              if ($(this).find('#curHistory7').length == 0) {
                let historyURL =
                  'https://buff.163.com/api/market/goods/price_history/buff?game=csgo&goods_id=' +
                  urlParms.goods_id +
                  '&currency=CNY&_=' +
                  new Date().valueOf().toString();
                priceHistoryInfo(historyURL, goodsName, referencePrice, helper_config);
              }
            }
          }
        }
        if ($(this).find('#curTips').length == 0) {
          $(this)
            .find('h1')
            .before(
              `<span id="curTips" style="color:#eea20e;">温馨提示：</span><small id="curInfo" style='color:#069b17'>查看ST求购单数据，点击“当前在售”或者从饰品链接进入，刷新“当前在购、成交记录”等不会起作用</small>`
            );
        }
        let ul = $('.new-tab');
        let buffURL =
          'https://buff.163.com/api/market/goods?game=csgo&page_num=1&search=' +
          goodsName +
          '&_=' +
          new Date().valueOf().toString();
        goodsSearchInfo(buffURL, goodsName, ul);
      }
    });
  } else if (location.pathname.startsWith('/market/')) {
    marketCss();
    $(document).ajaxSend(function (event, xhr, header, result) {
      let urlParms = getUrlParms(header.url);
      if (typeof urlParms.prices != 'undefined') {
        sellErrorInfo(urlParms, helper_config);
      }
      if (/^\/api\/market\/goods/.exec(header.url)) {
        header.url += '&page_size=' + helper_config.pageSize;
        $('.helper-progress-bar').remove();
        $('.helper-loading').remove();
        steamFailedTimes = 0;
      }
    });
    $(document).ajaxSuccess(function (event, xhr, header, result) {
      if (typeof unsafeWindow.g.user == 'undefined') {
        showMessage(
          '账户未登录',
          '功能开启需要登录账号，请先登录BUFF，以及STEAM社区。',
          'error',
          8000
        );
        return false;
      }
      let urlParms = getUrlParms(header.url);
      if (/^\/api\/market\/goods/.exec(header.url) && result.data && result.data.total_count) {
        var lt = GM_getValue('lgt');
        if (typeof lt == 'undefined' || lt == '') {
          ipInfoLoad();
        } else {
          var ts = Math.round(new Date().getTime() / 1000).toString();
          var fivets = Math.floor((ts - lt) / 60);
          if (fivets > 2) {
            ipInfoLoad();
          }
        }
        if ($(this).find('#tool-card').length == 0) {
          createSteamOrderMarket(730, helper_steamBuy_config, helper_config, steamConnection);
        }
        window.buffHelperMarkerListScale(result.data.items);
      } else if (/\/api\/market\/steam_inventory/.exec(header.url)) {
        if (result.data && result.data.total_count) {
          buffHelperInventoryListScale(
            result.data.items,
            result.data.total_amount,
            result.data.total_amount_usd,
            urlParms.state
          );
        } else {
          let goodsRate = $('.brief-info>span>strong')[1];
          if (urlParms.state == 'all') {
            let myamountTmp = $('.store-account>h4>span').text();
            let myamount = replaceAllStr(myamountTmp, '¥', '').trim();
            let setMyBalance = helper_config.setBalance;
            if (helper_config.setRecharge != 'undefined' && helper_config.setRecharge > 0) {
              var trueAmount = parseFloat(myamount);
              let setMyWithdraw = helper_config.setWithdraw;
              if (helper_config.setBalance != 'undefined' && setMyBalance > 0) {
                trueAmount = parseFloat(myamount) - parseFloat(setMyBalance);
                if (helper_config.setWithdraw != 'undefined' && setMyWithdraw > 0) {
                  trueAmount = parseFloat(trueAmount) + parseFloat(setMyWithdraw);
                }
              }
              let myRecharge = helper_config.setRecharge;
              var profit = parseFloat(trueAmount) - parseFloat(myRecharge);
              var profitRate = ((profit / trueAmount) * 100).toFixed(2);
              let curWithdraw = '';
              if (helper_config.setWithdraw != 'undefined' && setMyWithdraw > 0) {
                curWithdraw = '(提现¥' + setMyWithdraw + ')';
              }
              $(goodsRate).after(
                ' 充值：<strong class="c_Yellow f_Normal" id="cz">¥' +
                  myRecharge +
                  '</strong> 当前余额：' +
                  myamountTmp +
                  ' <strong class="c_Yellow f_Normal"> 利润：¥' +
                  profit.toFixed(2) +
                  '，利润率：' +
                  profitRate +
                  '%</strong>' +
                  curWithdraw
              );
            }
          } else {
            let myRecharge = helper_config.setRecharge;
            if ($('#cz').length == 0) {
              $(goodsRate).after(
                ' 充值：<strong class="c_Yellow f_Normal" id="cz">¥' + myRecharge + '</strong>'
              );
            }
          }
        }
      } else if (/\/api\/market\/sell_order\/top_bookmarked/.exec(header.url)) {
        let warningTimes = GM_getValue('top_bookmarked-warning') || 0;
        if (warningTimes < 3) {
          GM_setValue('top_bookmarked-warning', ++warningTimes);
          showMessage(
            '插件不会在热门关注运行',
            '出售、求购板块都可以使用<br/>哪有人会关注溢价商品的比例呢？',
            'warning',
            16000 - 4000 * warningTimes
          );
        }
      }
    });
    if (location.pathname.startsWith('/market/csgo')) {
      if ($('.block-header>.l_Right').length == 0) {
        setTimeout(initSortBtn(1), 100);
      } else {
        initSortBtn(1);
      }
    }
    if (location.pathname.startsWith('/market/steam_inventory')) {
      if ($('.block-header>.l_Right').length == 0) {
        setTimeout(initSortBtn(0), 100);
      } else {
        initSortBtn(0);
      }
      window.onload = function () {
        document.getElementById('shelve').addEventListener(
          'click',
          function () {
            selling_preview('shelves');
          },
          false
        );
      };
    }
  }
  if (location.pathname.startsWith('/market/sell_order/history')) {
    var allData = $('.detail-tab-cont').find('.list_tb tr');
    for (let i = 1; i < allData.length; i++) {
      $(allData[i]).find('a').eq(0).attr('target', '_blank');
      $(allData[i]).find('a').eq(1).attr('target', '_blank');
    }
  }
  if (location.pathname.startsWith('/market/sell_order/on_sale')) {
    let btn = document.getElementById('change-price');
    window.onload = function () {
      document.getElementById('change-price').addEventListener(
        'click',
        function () {
          selling_preview('change_price');
        },
        false
      );
    };
    if ($('#j_list_card>ul>li').length > 0) {
      setTimeout(buffHelperSellOrderOnsale(), 100);
      return;
    }
  }
  if (location.pathname.startsWith('/user-center/bookmark/goods')) {
    if ($('.user-record').find('.list_tb tr').length > 0) {
      setTimeout(bookmarkShow(helper_config, helper_steamBuy_config), 200);
      return;
    }
  }
  window.buffHelperGoodsDetailScale = function (data) {
    if ($('#market-selling-list').length == 0) {
      setTimeout(window.buffHelperGoodsDetailScale, 100);
      return;
    }
    let bookmarkattr = $('.detail-fav');
    bookmarkattr.find('.add-bookmark').removeClass('add-bookmark').addClass('add_book_mark');
    bookmarkattr.find('.delete-bookmark').removeClass('delete-bookmark').addClass('del_book_mark');
    $('.detail-cont').append(
      '<i class="icon icon_uploading helper-loading" style=\'margin: 5px;\'></i>'
    );
    goodsDetailLoadData(data);
    async function goodsDetailLoadData(data, secendTry) {
      let price_list = $('.f_Strong');
      let isLogined = $('#navbar-cash-amount').length == 1;
      let isFirstTime = $('.good_scale').length == 0;
      let buff_item_id = getGoodsId();
      let app_id = data.goods_infos[buff_item_id].appid;
      let ch_name = $('.detail-cont h1')
        .text()
        .replace(/[\r\n]/g, '');
      let hash_name = escape(data.goods_infos[buff_item_id].market_hash_name);
      let steamLink =
        $('.detail-summ>a').attr('href') ||
        `https://steamcommunity.com/market/listings/${app_id}/${hash_name}`;
      let items = data.items;
      let steam_price_cny = data.goods_infos[buff_item_id].steam_price_cny * 100;
      let goodsName = data.goods_infos[buff_item_id].name;
      if (isFirstTime) {
        let ul = $('.new-tab');
        var buffURL =
          'https://buff.163.com/api/market/goods?game=csgo&page_num=1&search=' +
          goodsName +
          '&_=' +
          new Date().valueOf().toString();
        let buff_sell_min_price = await goodsSearchInfo(buffURL, goodsName, ul);
        var steamBuyPrice = getSteamPrice(
          buff_sell_min_price,
          helper_config.steamCardPrice,
          helper_config.setSteamRate
        );
        if ($('#buff_show').length == 0) {
          $('#buff_list')
            .parents('#steam_rate')
            .prepend(
              `<span id="buff_show">[BUFF]卡价 <span class="market_commodity_orders_header_promote">${helper_config.steamCardPrice}</span>，当前在售价<span class="market_commodity_orders_header_promote">￥${buff_sell_min_price} </span><small class='market_listing_price_with_fee'> 反推求购价 <span style="color:#f5f5f5;cursor: pointer;" class="gp">$${steamBuyPrice}</span></small></span>`
            );
        }
        if ($('#tool-card').length == 0) {
          createSteamOrderGoods(
            app_id,
            hash_name,
            ch_name,
            buff_item_id,
            helper_steamBuy_config,
            helper_config,
            steamConnection,
            buff_sell_min_price
          );
        }
        goodsShowOrderSelect(
          buff_item_id,
          ch_name,
          steamLink,
          steamBuyPrice,
          helper_config,
          hash_name,
          app_id
        );
        if ($('.market_commodity_orders_table tr').length == 0) {
          let orderList = await getSteamOrderList(buff_item_id, steamLink, 3);
          goodsShowOrderSelectPrice(
            buff_item_id,
            orderList,
            buff_sell_min_price,
            helper_config,
            secendTry,
            data
          );
        }
        showMessage(
          `steam求购列表显示：`,
          '成功数：' +
            GM_getValue('priceOverViewNum') +
            '， 失败数：' +
            GM_getValue('priceOverViewNumNO'),
          'info',
          8000,
          'top-left'
        );
      }
      $('.helper-loading').remove();
      $('.detail-tab-cont th:last').before(
        '<th style="min-width: 70px;" class="t_Left"><span>反推</span></th>'
      );
      let user_thum = $('.detail-tab-cont .user-info');
      for (let i = 0; i < items.length; i++) {
        let buff_sell_price = items[i].price;
        let steamBuyPriceList = getSteamPrice(
          buff_sell_price,
          helper_config.steamCardPrice,
          helper_config.setSteamRate
        );
        $(price_list[i + (isLogined ? 1 : 0)])
          .parents('td')
          .after(
            `<td class="t_Left"><div style="display:table-cell;text-align:center;"><span class="seller_scale">$${steamBuyPriceList}</span></div></td>`
          );
        let date = DateToTime(items[i].created_at);
        let d = new Date(items[i].created_at * 1_000);
        let dateText = commentTimeHandle(d);
        let timeTxt =
          '<div title="' +
          date +
          '" style="font-size: 12px; color: #959595; transform: translate(3.5%, 20%);"><i class="icon icon_time"></i><p style="display: inline; vertical-align: middle; margin-left: 5px;">' +
          dateText +
          '</p></div>';
        $(user_thum[i]).parents('td').append(timeTxt);
      }
      daemonThread();
    }
  };
  window.buffHelperMarkerListScale = async function (items) {
    if ($('#j_list_card>ul>li').length == 0) {
      setTimeout(window.buffHelperMarkerListScale, 100);
      return;
    }
    $('.list_card li>p>span.l_Right').removeClass('l_Right').addClass('l_Left');
    let randomID = Math.round(Math.random() * 1000);
    let goods = $('#j_list_card>ul>li');
    itemNum = items.length;
    $('.tab>li.on').append(
      '<i id=helper-loading-' + randomID + ' class="icon icon_uploading helper-loading"></i>'
    );
    $('.market-list .blank20:last').prepend(
      '<div id=helper-progress-bar-' + randomID + ' class="helper-progress-bar"></div>'
    );
    for (let i = 0; i < goods.length; i++) {
      $(goods[i]).attr('data-default-sort', i);
      if (items[i].sell_num == 0) {
        updateProgressBar(randomID);
        continue;
      }
      await marketListLoadData(items[i], goods[i], randomID);
    }
    async function marketListLoadData(item, good, randomID, secendTry) {
      let target = $(good).find('p>strong.f_Strong')[0];
      let targetSell = $(good).find('p>span.f_12px')[0];
      let buff_item_id = item.id;
      let buff_buy_num = item.buy_num;
      let buff_buy_max_price = item.buy_max_price;
      let buff_sell_num = item.sell_num;
      let buff_sell_min_price = item.sell_min_price;
      let steam_price_cny = item.goods_info.steam_price_cny * 100;
      let steam_market_url = item.steam_market_url;
      let buff_sell_reference_price = item.sell_reference_price;
      let steam_highest_buy_order = undefined;
      let steam_lowest_sell_order = undefined;
      $(good).find('a').eq(0).attr('target', '_blank');
      $(good).find('a').eq(1).attr('target', '_blank');
      showLinkColor(buff_item_id, good, itemCount, itemNum);
      if (
        helper_config.buffSellThreshold >= buff_sell_num ||
        helper_config.buffBuyThreshold >= buff_buy_num
      ) {
        $(good).attr('data-buff-sort', Infinity);
        $(good).attr('data-steam-sort', Infinity);
        $(target).after($(HIGHLIGHT_TEMPLATE).text('已忽略'));
      } else {
        let ft = 'bottom: 85px;background: #333;';
        let scale = getScale(
          buff_sell_min_price,
          steam_lowest_sell_order ? steam_lowest_sell_order.cny : steam_price_cny
        );
        $(good).attr('data-buff-sort', scale);
        $(target).prepend(`<span>${target.childNodes[0].textContent}</span>`);
        target.childNodes[1].remove();
        $(targetSell)
          .css({
            position: 'absolute',
            'margin-top': '14px',
            display: 'inline-block',
            'line-height': '18px',
            'white-space': 'nowrap',
            'margin-left': '-5px'
          })
          .attr('class', 'bsAll f_12px');
        var buy_sell_rate =
          '<span style="float:right;margin-top: 14px;font-size:13px" title="buff求/售比">' +
          (buff_buy_num / buff_sell_num).toFixed(2) +
          '</span>';
        $(target).append(
          $('<span class="buyInfo"></span>')
            .css({
              'margin-left': '5px',
              'font-weight': '500',
              'font-size': '12px',
              color: '#959595'
            })
            .text('求¥' + (buff_buy_max_price || 0))
        );
        let bm = '';
        if (item.bookmarked == true) {
          bm =
            '<span class="on" title="已收藏" style="display: inline-flex;"><i class="icon icon_fav"></i></span>';
        }
        $(targetSell)
          .text(buff_buy_num + '在求，' + buff_sell_num + '在售')
          .append(bm)
          .prepend($('<span id="buff_selling_buy" style="color:#eea20e;">[buff] </span>'));
        $(targetSell).after(buy_sell_rate);
        var steamBuyPriceTmp = getSteamPrice(
          buff_sell_min_price,
          helper_config.steamCardPrice,
          helper_config.setSteamRate
        );
        var steambuymsg =
          item.name +
          '#' +
          steamBuyPriceTmp +
          '#' +
          steam_market_url +
          '#' +
          item.market_hash_name +
          '#' +
          buff_item_id;
        var steamBuyPrice =
          '<span id="' +
          buff_item_id +
          '" style="cursor: pointer;" sbo="' +
          steambuymsg +
          '" class="sbp">' +
          steamBuyPriceTmp +
          '</span>';
        $(target).after(
          $(
            '<span class="buyP" style="position: absolute;' +
              ft +
              'font-size: 12px !important;display: inline-block;border-radius: 2px;color: #f0f0f0;height: 18px;line-height: 17px;padding: 0 6px;margin: 0 6px 0 -8px;white-space: nowrap;"></span>'
          ).html('当前反推求购价$' + steamBuyPrice)
        );
        marketShowOrder(buff_item_id, target);
        paintingGradient(
          scale,
          target,
          3,
          '<a href="' +
            steam_market_url +
            '" style="float: right;" title="查看Steam市场" target="_blank"><strong class="f_16px f_Strong price_scale l_Right"></strong></a>'
        );
        let withoutFeePrice = target.children[target.children.length - 2];
        scale = target.children[target.children.length - 1];
        let strWidth = 5;
        for (let i = 0; i < target.children.length; i++) {
          strWidth += target.children[i].offsetWidth;
        }
        let displayPrice = $(target)
          .text()
          .match(/([€₽\$¥]\s)((\d+)(\.\d{1,2})?)/) || [''];
        let tryMe = 0;
        while (strWidth >= 192) {
          switch (tryMe++) {
            case 0:
              withoutFeePrice.innerText = Math.round(withoutFeePrice.innerText * 10) / 10;
              break;
            case 1:
              withoutFeePrice.innerText = Math.round(withoutFeePrice.innerText);
              break;
            case 2:
              scale.innerText = Math.round(scale.innerText * 10) / 10;
              break;
            case 3:
              var text = displayPrice[1] + Math.ceil(displayPrice[2]);
              $(target).text(text);
              displayPrice = text.match(/([€₽\$¥]\s)((\d+)(\.\d{1,2})?)/);
              break;
            case 4:
              scale.innerText = Math.ceil(scale.innerText);
              break;
            case 5:
              withoutFeePrice.innerText = '';
              strWidth = 0;
              continue;
          }
          strWidth = 5;
          for (let i = 0; i < target.children.length; i++) {
            strWidth += target.children[i].offsetWidth;
          }
        }
      }
      if (needSort && (helper_config.sortAfterAllDone ? itemCount == itemNum - 1 : true)) {
        let arr = needSort.split('_');
        sortGoods('data-' + arr[0], arr[1] == 'asc');
      }
      updateProgressBar(randomID);
    }
  };
  function initHelper() {
    let wdstyle = document.createElement('style');
    wdstyle.innerHTML = `body{background-color:#1e2329!important;}`;
    document.body.appendChild(wdstyle);
    $('.nav>ul').find('li:eq(0)>a').attr('target', '_blank');
    $('.nav>ul').find('li:eq(1)>a').attr('target', '_blank');
    $('.nav>ul').find('li:eq(2)>a').attr('target', '_blank');
    $('.nav>ul').find('li:eq(3)>a').attr('target', '_blank');
    if ($('.floatbar>ul').length == 0) {
      setTimeout(() => {
        initHelper();
      }, 100);
      return;
    }
    if ($('#buff_tool_prevpage').length != 0) {
      return;
    }
    if ($('#buff_tool_nextpage').length != 0) {
      return;
    }
    if (!GM_getValue('helper_alert_first')) {
      if ($('.w-Toast_warning').length == 0) {
        $('body').append(
          '<div id="j_w-Toast" class="w-Toast_warning" style="display: block; margin-left: -195px; margin-top: -35px;"><p><i class="icon icon_warning_mid"></i>你应该是第一次安装“一起搬砖不辛苦插件” 本插件采用识别码方式，识别码请联系群里老师或者开发者获取或者购买使用，本插件属于专用插件，请勿外传免得更卷；【梯子请不要开启全局模式[本机网络全部为外网]】使用本插件不能影响群员或老师利益[否则禁用]，如需其它服务请咨询老师。请熟知。同意此声明，请继续使用或操作。</p> <div> <a href="javascript:void(0)" class="agreementsBtn i_Btn i_Btn_mid i_Btn_D_red" style="margin-top: 15px;">我已知晓<span class="agreementsCountDown" style="margin-left:10px">5</span></a></div></div>'
        );
      }
      let count = 5;
      let countDown = setInterval(function () {
        if (--count == 0) {
          clearInterval(countDown);
          $('.agreementsCountDown').remove();
        } else {
          $('.agreementsCountDown').text(count);
        }
      }, 1000);
      $('.agreementsBtn').click(function () {
        if (!count) {
          GM_setValue('helper_alert_first', true);
          $('#j_w-Toast').hide('normal', () => {
            $('#j_w-Toast').remove();
          });
          $('.helper-setting-shadow')
            .css({
              opacity: 0,
              display: 'flex'
            })
            .animate({ opacity: '1' }, 300);
        } else {
          showMessage('一起搬砖不辛苦插件', '认真看一会，还有' + count + '秒就可以点了', 'info');
        }
      });
    }
    $('.floatbar>ul').find('li:eq(1)>a').attr('target', '_blank');
    $('.floatbar>ul').find('li:eq(3)').remove();
    $('.floatbar>ul').find('li:eq(2)').remove();
    $('.floatbar>ul').prepend(
      "<li><a id='buff_tool_setting'><i class='icon icon_menu_setting'></i><p>设置</p></a></li>"
    );
    $('#buff_tool_setting')
      .click(function () {
        openSettingPanel();
      })
      .parent()
      .css('cursor', 'pointer');
    $('.floatbar>ul').prepend(
      "<li><a id='buff_tool_prevpage'><i class='icon icon_slide_left2' style='height: 40px;width: 39px;'></i><p>上一页</p></a></li>"
    );
    $('#buff_tool_prevpage')
      .click(function () {
        $('.page-link.prev').click();
        $('#sort_scale').removeClass();
      })
      .parent()
      .css('cursor', 'pointer');
    $('.floatbar>ul').prepend(
      "<li><a id='buff_tool_nextpage'><i class='icon icon_slide_right2' style='height: 40px;width: 39px;'></i><p>下一页</p></a></li>"
    );
    $('#buff_tool_nextpage')
      .click(function () {
        $('.page-link.next').click();
        $('#sort_scale').removeClass();
      })
      .parent()
      .css('cursor', 'pointer');
    $('.floatbar>ul').prepend(
      "<li><a id='buff_tool_refresh'><i class='icon icon_refresh2' style='width: 15px;height: 15px;margin: 10px 0 0;filter: grayscale(1);zoom: 1.4'></i><p>刷 新</p></a></li>"
    );
    $('#buff_tool_refresh')
      .click(function () {
        setTimeout(function () {
          window.location.reload();
        }, 1e3);
      })
      .parent()
      .css('cursor', 'pointer');
    $('#helper-version').text($('#helper-version').text() + GM_info.script.version);
    $('#helper-setting-checkBtn').click(() => {
      checkSteamConnection();
    });
    $('#helper-setting-resetAll').click(() => {
      resetConfig();
    });
    $('#helper-setting-exportOrder').click(() => {
      exportOrder();
    });
    $('#helper-setting-resetBuyAll').click(() => {
      resetBuyConfig(2);
    });
    $('.helper-setting-shadow').click(function (e) {
      if (e.target == this) {
        $(this).fadeOut();
      }
    });
    initAddBuy(helper_steamBuy_config);
    $('.helper-setting').change(function (e) {
      let target = e.target;
      let optionTarget = target.dataset.optionTarget;
      let val = target.getAttribute('value') ? target.getAttribute('value') : target.value;
      helper_config[optionTarget] = val;
      if (optionTarget == 'steamCurrency' && g_rgCurrencyData[val].eCurrencyCode != 23) {
        let toast = showMessage(
          `正在获取${val}的汇率`,
          '访问时间取决于steam访问速度，期间请不要关闭页面',
          'info',
          20000
        );
        updateRate(1, toast);
      } else {
        GM_setValue('helper_config', helper_config);
      }
      init();
    });
    GM_registerMenuCommand('联系方式VX：qy66669999', () => {
      showMessage(`联系方式`, '联系方式VX：qy66669999', 'info', 20000);
    });
    GM_registerMenuCommand('打开设置面板', () => {
      openSettingPanel();
    });
    init();
    updateSteamStatus();
    syncCurrency();
    initBuy(helper_steamBuy_config);
    initLoadBuy(helper_config);
  }
  function openSettingPanel() {
    updateSteamStatus();
    $('.helper-setting-shadow')
      .css({
        opacity: 0,
        display: 'flex'
      })
      .animate({ opacity: '1' }, 300);
  }
  function clone_index(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  function loadConfig() {
    let config = GM_getValue('helper_config');
    if (config && Object.keys(config).length) {
      config.pageSize = config.pageSize ? config.pageSize : 20;
      return config;
    }
    return clone_index(DEFAULT_CONFIG);
  }
  function resetConfig() {
    let noTips =
      '<a href="javascript:void(0)" class="dontBtn i_Btn i_Btn_mid i_Btn_D_red" style="margin:10px 6px 0 6px;background:gray;">取消操作</a><a href="javascript:void(0)" class="resetConfigBtn i_Btn i_Btn_mid i_Btn_D_red" style="margin:10px 6px 0 6px;">确定恢复默认设置</a>';
    let showMsg =
      '你正在执行插件的 “恢复默认设置” 操作，该操作会清除插件中除了识别码以外的所有信息数据[不可逆]，执行该操作前注意备份或导出相关数据。';
    if ($('#a_c-Toast').length == 0) {
      GM_addStyle(
        '.helper-msg-resetConfiglShadow{position:fixed;justify-content:center;align-items:center;display:none;z-index:100;top:0;right:0;bottom:0;left:0;margin:0;background:#00000066}'
      );
    }
    $('#a_c-Toast').remove();
    $('body').append(
      '<div id="a_c-Toast" class="cont_main helper-msg-shadow" style="opacity: 1; display: flex;"><div id="j_w-Toast" class="w-Toast_warning" style="display: block; margin-left: -195px; margin-top: -35px;"><p id="showmsg"><i class="icon icon_warning_mid"></i>' +
        showMsg +
        '</p><div id="notips"> ' +
        noTips +
        '</div></div></div>'
    );
    $('#a_c-Toast')
      .css({
        opacity: 0,
        display: 'flex'
      })
      .animate({ opacity: '1' }, 300);
    $('#a_c-Toast').click(function (e) {
      if (e.target == this) {
        $(this).fadeOut();
      }
    });
    $('.dontBtn').click(function () {
      $('#j_w-Toast').hide('normal', () => {
        $('.resetConfigShadow').css({
          opacity: 0,
          display: 'none'
        });
      });
    });
    $('.resetConfigBtn').click(function () {
      $('#j_w-Toast').hide('normal', () => {
        $('.resetConfigShadow').css({
          opacity: 0,
          display: 'none'
        });
      });
      let setCardNum = helper_config.setCardNum;
      GM_setValue('helper_config', null);
      GM_setValue('exchangeRate', null);
      GM_setValue('top_bookmarked-warning', null);
      helper_config = clone(DEFAULT_CONFIG);
      helper_config.setCardNum = setCardNum;
      GM_setValue('helper_config', helper_config);
      clearData();
      init();
      updateSteamStatus();
      syncCurrency();
      showMessage('重置成功', '插件已恢复初始设定', 'info', 2000);
    });
  }
  function initCurrency() {
    for (let key in g_rgCurrencyData) {
      $('.steam-currency-selector').append(
        '<li value=' +
          g_rgCurrencyData[key].strCode +
          '>' +
          g_rgCurrencyData[key].strCode +
          '（' +
          g_rgCurrencyData[key].strSymbol +
          '）</li>'
      );
    }
    syncCurrency();
    if (steamCurrency.eCurrencyCode != 23) {
      updateRate();
    }
  }
  function initSortBtn(t) {
    if (t == 1) {
      $('.block-header>.l_Right').append(
        $(
          '<div class="w-Select-Multi w-Select-scroll buff-helper-sort" style="visibility: visible; width: 140px;"><h3 id="helper-sort-text">比例排序</h3><i class="icon icon_drop"></i><ul style="width: 140px;"><li data-value="null">默认</li><li data-value="buff-sort_asc"><span class="w-Order_asc">buff比例从低到高<i class="icon icon_order"></i></span></li><li data-value="buff-sort_desc"><span class="w-Order_des">buff比例从高到低<i class="icon icon_order"></i></span></li></ul></div>'
        )
      );
    }
    if (t == 0) {
      $('.block-header>.l_Right').append(
        $(
          '<div class="w-Select-Multi w-Select-scroll buff-helper-sort" style="visibility: visible; width: 140px;"><h3 id="helper-sort-text">比例排序</h3><i class="icon icon_drop"></i><ul style="width: 140px;"><li data-value="null">默认</li><li data-value="buff-sort_asc"><span class="w-Order_asc">buff比例从低到高<i class="icon icon_order"></i></span></li><li data-value="buff-sort_desc"><span class="w-Order_des">buff比例从高到低<i class="icon icon_order"></i></span></li></ul></div>'
        )
      );
    }
    var sortBtnTimeout;
    $('.buff-helper-sort')
      .click(function () {
        $(this).addClass('on');
        clearTimeout(sortBtnTimeout);
      })
      .mouseleave(function () {
        let t = $(this);
        if (t.hasClass('on')) {
          sortBtnTimeout = setTimeout(() => t.removeClass('on'), 300);
        }
      });
    $('.buff-helper-sort li').click(function (e) {
      e.stopPropagation();
      needSort = this.dataset.value;
      if (this.dataset.value == 'null') {
        $('#helper-sort-text').text('比例排序');
        sortGoods('data-default-sort', true);
      } else {
        $('#helper-sort-text').text(this.innerText);
        let arr = this.dataset.value.split('_');
        sortGoods('data-' + arr[0], arr[1] == 'asc');
      }
      $('.buff-helper-sort').removeClass('on');
      helper_config.needSort = needSort;
      GM_setValue('helper_config', helper_config);
    });
    syncSort();
    setTimeout(() => {
      $("div[name='sort_by']").change(function () {
        if (helper_config.overrideSortRule && this.getAttribute('value')) {
          needSort = this.dataset.value;
          $('#helper-sort-text').text('默认');
        }
      });
    }, 500);
  }
  function checkSteamConnection() {
    let interval = 0;
    $('.helper-setting-steamConnection').html(
      '<span class="c_Blue"><i class="icon icon_status_progressing"></i>检测中</span>'
    );
    $('#helper-setting-checkBtn').css('visibility', 'hidden');
    let startTime = new Date().getTime();
    let endTime = 0;
    steamConnection = undefined;
    GM_xmlhttpRequest({
      url: 'https://steamcommunity.com/market/',
      timeout: ajaxTimeout,
      method: 'get',
      onloadstart: function (event) {
        countdown(19);
      },
      onload: function (res) {
        if (res && res.status == 200) {
          endTime = new Date().getTime();
          changeSteamStatus(true);
        } else {
          changeSteamStatus(false);
        }
      },
      onerror: function (err) {
        changeSteamStatus(false);
      },
      ontimeout: function () {
        changeSteamStatus(false);
      }
    });
    var cf = clone(GM_getValue('exchangeRate'));
    $('.helper-setting-steamCtoF').html(
      '<span class="c_Green">' + cf.CtoF + '，' + cf.FtoC + '</span>'
    );
    if (helper_config.steamCurrency == 'USD') {
      $('.helper-setting-steamCtoF').html(
        '<span class="c_Green">人民币兑美元$' + cf.CtoF + '，美元兑人民币¥' + cf.FtoC + '</span>'
      );
    }
    ipInfoLoad();
    function changeSteamStatus(status) {
      clearInterval(interval);
      $('.steamConnectionCountdown').hide();
      steamConnection = status;
      if (status) {
        $('.helper-setting-steamConnection').html(
          '<span class="c_Green"><i class="icon icon_status_success"></i>正常</span><span class="c_DGray f_12px">' +
            (endTime - startTime) +
            'ms</span>'
        );
      } else {
        $('.helper-setting-steamConnection').html(
          '<span class="c_DRed"><i class="icon icon_status_failed"></i>无法连接</span>'
        );
      }
      $('#helper-setting-checkBtn').css('visibility', 'visible');
    }
    function countdown(count) {
      $('.steamConnectionCountdown').text('20s').show();
      interval = setInterval(() => {
        $('.steamConnectionCountdown').text(count-- + 's');
      }, 1000);
    }
  }
  function syncCurrency() {
    steamCurrency = g_rgCurrencyData[helper_config.steamCurrency]
      ? g_rgCurrencyData[helper_config.steamCurrency]
      : 'USD';
    $('#helper-setting-currency').attr('value', steamCurrency.strCode);
    $('#helper-setting-currency>h3').text(
      $('#helper-setting-currency li[value=' + steamCurrency.strCode + ']')
        .addClass('on')
        .text()
    );
  }
  function updateSteamStatus() {
    if (steamConnection === undefined) {
    } else if (steamConnection) {
      if (!$('.helper-setting-steamConnection>.c_Green').text()) {
        $('.helper-setting-steamConnection').html(
          '<span class="c_Green"><i class="icon icon_status_success"></i>正常</span>'
        );
      }
    } else {
      $('.helper-setting-steamConnection').html(
        '<span class="c_DRed"><i class="icon icon_status_failed"></i>无法连接</span>'
      );
    }
  }
  function failedSteamConnection() {
    if (++steamFailedTimes > itemNum >> 2) {
      steamConnection = false;
    }
  }
  function updateProgressBar(ID) {
    let bar = $('#helper-progress-bar-' + ID);
    bar.width((++itemCount / itemNum) * 100 + '%');
    if (itemCount >= itemNum) {
      itemCount = 0;
      $('#helper-loading-' + ID).remove();
      bar.fadeOut(500);
    }
  }
  function daemonThread() {
    let count = 30;
    let daemonThreadInterval = setInterval(() => {
      if (count--) {
        if ($('.afkout').length || $('#infolist').length) {
          $('#steam_order').remove();
          $('.detail-summ>a').show();
          $('.steam-link').hide();
          clearInterval(daemonThreadInterval);
        }
      } else {
        clearInterval(daemonThreadInterval);
      }
    }, 100);
  }
  function convertPrice(str) {
    str = str.replace(steamCurrency.strThousandsSeparator, '');
    if (steamCurrency.strDecimalSymbol !== '.') {
      str = str.replace(steamCurrency.strDecimalSymbol, '.');
    }
    return str.match(/(\d+)(\.(\d{1,2}))?/);
  }
  function addCurrencySymbol(origin, currencyCode) {
    let currencyData = g_rgCurrencyData[currencyCode];
    if (currencyData.bSymbolIsPrefix) {
      return currencyData.strSymbol + currencyData.strSymbolAndNumberSeparator + origin;
    } else {
      return origin + currencyData.strSymbolAndNumberSeparator + currencyData.strSymbol;
    }
  }
  function FtoC(valueInCents) {
    if (steamCurrency.eCurrencyCode != 23 && !helper_config.currencyEffectCalculate) {
      return valueInCents * exchangeRate.FtoC;
    }
    return valueInCents;
  }
  function CtoF(valueInCents) {
    if (steamCurrency.eCurrencyCode != 23 && !helper_config.currencyEffectCalculate) {
      return valueInCents * exchangeRate.CtoF;
    }
    return valueInCents;
  }
  function errorTranslator(err) {
    const msg = {
      '0': '访问steam失败，请检查网络连接性',
      '200': '无法处理结果，结果集无法使用',
      '400': '请求参数错误，服务器无法理解参数',
      '404': '页面不存在，无法找到请求的资源',
      '408': '访问steam超时，请检查网络连接性',
      '429': '当前科学上网的IP被ST临时限制，换节点或者饮个茶再来吧~',
      '500': '服务器内部错误，请稍后重试'
    };
    const shortMsg = {
      '0': '无网络',
      '200': '请重试',
      '400': '参数错误',
      '404': '无内容',
      '408': '超时',
      '429': '频繁',
      '500': '请重试'
    };
    switch (err.status) {
      case 0:
        failedSteamConnection();
        break;
      case 429:
        steamConnection = true;
        break;
    }
    err.statusText = msg[err.status];
    err.statusTextShort = shortMsg[err.status];
    return err;
  }
  function updateRate(force, toast) {
    if (!force && exchangeRate && exchangeRate.time_next_update_unix > Date.now()) {
      return;
    }
    if (!steamConnection && steamConnection != undefined) {
      toast && toast.reset();
      showMessage('无网络时无法获取汇率', '没有设置被改变', 'warning');
      return;
    }
    let steamUrl = `https://steamcommunity.com/market/listings/730/Souvenir%20Sawed-Off%20|%20Snake%20Camo%20(Well-Worn)/render/?query=&start=40&count=100&currency=${
      g_rgCurrencyData[helper_config.steamCurrency].eCurrencyCode
    }`;
    steamQuery(steamUrl);
    GM_xmlhttpRequest({
      url: steamUrl,
      method: 'get',
      timeout: ajaxTimeout,
      onload: function (response) {
        toast && toast.reset();
        let data = response.status == 200 ? JSON.parse(response.responseText) : {};
        if (data.success && data.listinginfo['3296062994072312107']) {
          if (
            data.listinginfo['3296062994072312107'].converted_currencyid % 2000 !=
            g_rgCurrencyData[helper_config.steamCurrency].eCurrencyCode
          ) {
            return;
          }
          let timeUnix = Date.now();
          exchangeRate = {
            FtoC: (
              data.listinginfo['3296062994072312107'].price /
              data.listinginfo['3296062994072312107'].converted_price
            ).toFixed(6),
            CtoF: (
              data.listinginfo['3296062994072312107'].converted_price /
              data.listinginfo['3296062994072312107'].price
            ).toFixed(6),
            currencyCode: g_rgCurrencyData[helper_config.steamCurrency].strCode,
            time_next_update_unix: timeUnix + 10800000,
            time_update_unix: timeUnix
          };
          helper_config.steamCtoF = exchangeRate.CtoF;
          helper_config.steamFtoC = exchangeRate.FtoC;
          GM_setValue('exchangeRate', exchangeRate);
          GM_setValue('helper_config', helper_config);
          $('.helper-setting-steamCtoF').html(
            '<span class="c_Green">' + exchangeRate.CtoF + '，' + exchangeRate.FtoC + '</span>'
          );
          if (helper_config.steamCurrency == 'USD') {
            $('.helper-setting-steamCtoF').html(
              '<span class="c_Green">人民币兑美元$' +
                exchangeRate.CtoF +
                '，美元兑人民币¥' +
                exchangeRate.FtoC +
                '</span>'
            );
          }
          showMessage(
            '获取汇率成功',
            `已经同步${helper_config.steamCurrency}的最新汇率`,
            'success'
          );
          return;
        } else {
          console.log(
            '获取汇率时错误',
            '[ST内部汇率]' +
              errorTranslator(response).statusText +
              '，[不是很重要]，可更换VPN节点解决'
          );
        }
      },
      onerror: function (err) {
        showMessage('获取汇率失败', errorTranslator(err).statusText, 'error');
      },
      ontimeout: function () {
        failedSteamConnection();
        let err = { status: 408, statusText: '连接steam超时，请检查steam市场连接性' };
        showMessage('获取汇率超时', err.statusText, 'error');
      }
    });
  }
  function getItemId(buff_item_id, steamLink) {
    return new Promise(function (resolve, reject) {
      let steam_item_id = GM_getValue(buff_item_id);
      if (steam_item_id) {
        let steam_id = steam_item_id.split('##')[0];
        resolve(steam_id);
        return;
      } else if (steam_item_id === null) {
        reject({ status: 404, statusText: '物品不在货架上' });
      }
      GM_xmlhttpRequest({
        url: steamLink,
        timeout: ajaxTimeout,
        method: 'get',
        onload: function (res) {
          if (res.status == 200) {
            let html = res.responseText;
            try {
              steam_item_id = /Market_LoadOrderSpread\(\s?(\d+)\s?\)/.exec(html)[1];
            } catch (error) {
              steamConnection = true;
              GM_setValue(buff_item_id, null);
              res.status = 404;
              res.statusText = '物品不在货架上';
              reject(res);
              return;
            }
            GM_setValue(buff_item_id, steam_item_id);
            resolve(steam_item_id);
          } else {
            reject(errorTranslator(res));
          }
        },
        onerror: function (err) {
          reject(errorTranslator(err));
        },
        ontimeout: function () {
          failedSteamConnection();
          let err = { status: 408, statusText: '连接steam超时，请检查steam市场连接性' };
          reject(err);
        }
      });
    });
  }
  function getSteamOrderList(buff_item_id, steamLink, tos = 0, index = '') {
    return new Promise(function (resolve, reject) {
      if (!steamConnection && steamConnection != undefined) {
        let err = { status: 408, statusText: '无法访问steam' };
        resolve(err);
        return;
      }
      var hc = GM_getValue('helper_config');
      if (hc) {
        if (hc.steamSellTime && hc.steamSellTime != undefined) {
          tos = hc.steamSellTime * 1000;
        } else if (hc.displaySoldTime && hc.displaySoldTime != undefined) {
          tos = hc.displaySoldTime * 1000;
        }
        sleep(tos);
      }
      if (index == '') steamQuery(steamLink);
      getItemId(buff_item_id, steamLink)
        .then(function onFulfilled(steam_item_id) {
          GM_xmlhttpRequest({
            url: `https://steamcommunity.com/market/itemordershistogram?country=CN&language=schinese&currency=${steamCurrency.eCurrencyCode}&item_nameid=${steam_item_id}&two_factor=0`,
            timeout: ajaxTimeout,
            headers: {
              referer: steamLink,
              'X-Requested-With': 'XMLHttpRequest',
              Host: 'steamcommunity.com',
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.35'
            },
            method: 'get',
            onload: function (res) {
              if (res.status == 200) {
                let povnOK = GM_getValue('priceOverViewNum');
                if (!povnOK) {
                  povnOK = 1;
                } else {
                  povnOK++;
                }
                GM_setValue('priceOverViewNumNO', 0);
                GM_setValue('priceOverViewNum', povnOK);
                steamConnection = true;
                resolve(JSON.parse(res.responseText));
                return;
              }
              if (res.status == 429) {
                steamConnection = true;
                let povnNO = GM_getValue('priceOverViewNumNO');
                if (!povnNO) {
                  povnNO = 1;
                } else {
                  povnNO++;
                }
                GM_setValue('priceOverViewNum', 0);
                GM_setValue('priceOverViewNumNO', povnNO);
                var rsol = getOrderMsg(buff_item_id, steam_item_id, hc.setCardNum);
                if (rsol) {
                  resolve(rsol);
                  return;
                }
              }
            },
            onerror: function (err) {
              resolve(errorTranslator(err));
            },
            ontimeout: function () {
              failedSteamConnection();
              let err = { status: 408, statusText: '连接steam超时，请检查steam市场连接性' };
              resolve(err);
            }
          });
        })
        .catch(function onRejected(err) {
          resolve(err);
        });
    });
  }
})();
