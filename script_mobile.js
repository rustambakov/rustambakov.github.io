(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"start":"this.init(); this.restartTourWithoutInteraction(600)","data":{"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1},"locales":{"en":"locale/en.txt","tr-TR":"locale/tr-TR.txt"},"history":{},"name":"Player468"},"mouseWheelEnabled":false,"scrollBarColor":"#000000","hash": "8f0c58fec174ed66395aa44e54f287416ca1227c912201d85101fac6ad87d325", "definitions": [{"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"minWidth":0,"veilOpacity":0.4,"closeButtonRollOverIconColor":"#FFFFFF","scrollBarColor":"#000000","closeButtonBackgroundColor":[],"bodyPaddingLeft":0,"titlePaddingLeft":5,"closeButtonPressedBackgroundOpacity":0,"modal":true,"titleFontColor":"#000000","gap":10,"overflow":"scroll","layout":"vertical","shadow":true,"titleFontFamily":"Arial","verticalAlign":"middle","closeButtonIconWidth":20,"height":"90%","hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out"},"bodyPaddingTop":0,"titleFontSize":"1.29vmin","headerPaddingLeft":10,"backgroundColorRatios":[],"footerHeight":5,"titleHorizontalAlign":"left","showEffect":{"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonPressedBackgroundColorRatios":[],"closeButtonPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"closeButtonRollOverBackgroundOpacity":0,"headerBackgroundOpacity":0,"horizontalAlign":"center","bodyPaddingBottom":0,"closeButtonPressedIconColor":"#FFFFFF","closeButtonRollOverBackgroundColor":[],"closeButtonRollOverBorderSize":0,"bodyBorderColor":"#000000","veilColorDirection":"horizontal","shadowOpacity":0.5,"veilColor":["#000000","#000000"],"footerBorderSize":0,"closeButtonPressedIconLineWidth":3,"headerPaddingTop":10,"bodyBackgroundOpacity":0,"closeButtonPaddingLeft":0,"closeButtonBackgroundOpacity":0,"titlePaddingRight":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"shadowSpread":1,"class":"Window","borderRadius":5,"width":"90%","id":"window_E66697C9_D025_5851_41CA_CA8EAE6A4EF1","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out"},"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out"},"closeButtonRollOverBackgroundColorRatios":[],"shadowColor":"#000000","bodyBorderSize":0,"shadowHorizontalLength":3,"closeButtonPaddingTop":0,"closeButtonRollOverBorderColor":"#000000","closeButtonBorderColor":"#000000","data":{"name":"Window26262"},"footerBackgroundColorDirection":"vertical","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"children":["this.WebFrame_E2DA31CA_D592_651B_41DD_8EDEB474192F"],"titlePaddingTop":5,"headerBorderSize":0,"bodyBackgroundColorDirection":"vertical","closeButtonPaddingRight":0,"closeButtonIconHeight":20,"footerBackgroundOpacity":0,"closeButtonIconColor":"#B2B2B2","closeButtonBackgroundColorRatios":[],"headerBorderColor":"#000000","headerVerticalAlign":"middle","closeButtonBorderRadius":11,"scrollBarMargin":2,"closeButtonPressedBorderColor":"#000000","bodyPaddingRight":0,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"shadowVerticalLength":0,"veilColorRatios":[0,1],"footerBackgroundColorRatios":[0,0.8980392156862745,1],"headerPaddingRight":0,"titlePaddingBottom":5,"backgroundColor":[],"propagateClick":false,"closeButtonRollOverIconLineWidth":2,"headerBackgroundColorDirection":"vertical","minHeight":0,"closeButtonBorderSize":0,"closeButtonPressedBorderSize":0,"footerBorderColor":"#000000"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile","touchControlMode":"drag_rotation","class":"PanoramaPlayer","id":"MainViewer_mobilePanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","aaEnabled":true},{"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"minWidth":0,"veilOpacity":0.4,"closeButtonRollOverIconColor":"#FFFFFF","scrollBarColor":"#000000","closeButtonBackgroundColor":[],"bodyPaddingLeft":0,"titlePaddingLeft":5,"closeButtonPressedBackgroundOpacity":0,"modal":true,"titleFontColor":"#000000","gap":10,"overflow":"scroll","layout":"vertical","shadow":true,"titleFontFamily":"Arial","verticalAlign":"middle","closeButtonIconWidth":20,"height":"90%","hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"bodyPaddingTop":0,"titleFontSize":"1.29vmin","headerPaddingLeft":10,"backgroundColorRatios":[],"footerHeight":5,"titleHorizontalAlign":"left","showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"closeButtonPressedBackgroundColorRatios":[],"closeButtonPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"veilColorDirection":"horizontal","headerBackgroundOpacity":0,"horizontalAlign":"center","bodyPaddingBottom":0,"closeButtonPressedIconColor":"#FFFFFF","closeButtonRollOverBackgroundColor":[],"closeButtonRollOverBorderSize":0,"bodyBorderColor":"#000000","footerBorderSize":0,"shadowOpacity":0.5,"veilColor":["#000000","#000000"],"closeButtonPressedIconLineWidth":3,"headerPaddingTop":10,"bodyBackgroundOpacity":0,"closeButtonRollOverBackgroundOpacity":0,"closeButtonPaddingLeft":0,"closeButtonBackgroundOpacity":0,"titlePaddingRight":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"shadowSpread":1,"class":"Window","borderRadius":5,"width":"90%","id":"window_F7ADB071_D48E_6309_41E4_AC0667A3D523","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"bodyBorderSize":0,"closeButtonRollOverBorderColor":"#000000","closeButtonRollOverBackgroundColorRatios":[],"shadowColor":"#000000","veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"shadowHorizontalLength":3,"closeButtonPaddingTop":0,"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"closeButtonBorderColor":"#000000","data":{"name":"Window11745"},"footerBackgroundColorDirection":"vertical","bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"children":["this.WebFrame_E2DB71C5_D592_6509_41DD_811E9922FC10"],"titlePaddingTop":5,"headerBorderSize":0,"bodyBackgroundColorDirection":"vertical","closeButtonPaddingRight":0,"closeButtonIconHeight":20,"footerBackgroundOpacity":0,"closeButtonIconColor":"#B2B2B2","closeButtonPressedBorderColor":"#000000","closeButtonBackgroundColorRatios":[],"headerBorderColor":"#000000","headerVerticalAlign":"middle","closeButtonBorderRadius":11,"scrollBarMargin":2,"bodyPaddingRight":0,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"shadowVerticalLength":0,"veilColorRatios":[0,1],"footerBackgroundColorRatios":[0,0.8980392156862745,1],"headerPaddingRight":0,"titlePaddingBottom":5,"backgroundColor":[],"propagateClick":false,"closeButtonRollOverIconLineWidth":2,"headerBackgroundColorDirection":"vertical","minHeight":0,"closeButtonBorderSize":0,"closeButtonPressedBorderSize":0,"footerBorderColor":"#000000"},{"thumbnailUrl":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_t.jpg","overlays":["this.overlay_E71E1359_D03F_D871_41E4_E45012D05835"],"label":trans('panorama_FF576416_D07C_DFF3_41DD_035E22F37B49.label'),"hfovMin":"150%","vfov":180,"data":{"label":"PANO_DEMO"},"hfov":360,"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_0/{face}/0/{row}_{column}.webp","height":1536,"colCount":18,"rowCount":3,"tags":["ondemand","mobilevr2gen"],"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_0/{face}/1/{row}_{column}.webp","height":1024,"colCount":12,"rowCount":2,"tags":"ondemand","width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_0/{face}/2/{row}_{column}.webp","height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"],"width":3072}]}}],"class":"Panorama","id":"panorama_FF576416_D07C_DFF3_41DD_035E22F37B49"},{"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","toolTipFontColor":"#FFFFFF","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":5,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Georgia","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadow":true,"progressBackgroundColorRatios":[0.00784313725490196],"vrPointerSelectionTime":2000,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"subtitlesFontSize":"3vmin","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowOpacity":0.7,"vrPointerColor":"#FFFFFF","height":"100%","toolTipBorderRadius":1,"progressBorderColor":"#FFFFFF","width":"100%","subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"data":{"name":"Main Viewer"},"toolTipTextShadowColor":"#000000","toolTipPaddingTop":3,"progressBottom":0,"subtitlesTextShadowHorizontalLength":1,"toolTipBackgroundColor":"#000000","toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorRatios":[0],"progressHeight":10,"toolTipShadowColor":"#333333","playbackBarBottom":5,"top":0,"class":"ViewerArea","progressBorderSize":0,"doubleClickAction":"none","subtitlesBottom":50,"progressBarBorderColor":"#0066FF","progressBarBorderRadius":0,"toolTipTextShadowBlurRadius":1,"id":"MainViewer_mobile","subtitlesTextShadowVerticalLength":1,"firstTransitionDuration":0,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"toolTipOpacity":0.5,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","toolTipPaddingRight":5,"toolTipFontSize":6.5,"progressRight":0,"playbackBarHeadBorderRadius":0,"toolTipShadowBlurRadius":1,"playbackBarHeight":10,"toolTipShadowOpacity":0,"subtitlesTop":0,"playbackBarHeadWidth":6,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingBottom":3,"playbackBarHeadShadowBlurRadius":1.5,"surfaceReticleColor":"#FFFFFF","playbackBarBorderSize":0,"progressBorderRadius":0,"playbackBarHeadBorderColor":"#000000","playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarProgressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"progressLeft":0,"playbackBarHeadBackgroundColorRatios":[0,1],"left":0,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","minWidth":50,"minHeight":25},{"class":"SlideOutEffect","duration":500,"id":"effect_FF657A2B_D5B2_6719_41DE_48B0577EE0F0","to":"left"},{"displayOriginPosition":{"class":"RotationalCameraDisplayPosition","yaw":126.79,"pitch":-90,"hfov":165,"stereographicFactor":1},"enterPointingToHorizon":true,"initialSequence":"this.sequence_FADB3406_D07F_3FD3_41E4_A434451A53E1","class":"PanoramaCamera","id":"panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_camera","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":500},{"class":"TargetRotationalCameraDisplayMovement","targetHfov":100,"duration":3500,"targetPitch":-4.72,"easing":"cubic_in_out","targetStereographicFactor":0}],"initialPosition":{"class":"PanoramaCameraPosition","yaw":126.79,"pitch":-4.72,"hfov":100}},{"class":"SlideInEffect","from":"left","duration":500,"id":"effect_FF615A2A_D5B2_671B_41A6_EAB5532FCD80"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","media":"this.panorama_FF576416_D07C_DFF3_41DD_035E22F37B49","camera":"this.panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_camera","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"mode":"toggle","id":"IconButton_FCAFAED4_D5BE_1F0F_41C8_0B2CDBAE5374","right":"2.22%","pressedIconURL":"skin/IconButton_FB343635_D5B6_EF09_41DE_607C019FA4D3_pressed.png","data":{"name":"image button menu"},"transparencyActive":true,"verticalAlign":"middle","height":45,"width":45,"horizontalAlign":"center","iconURL":"skin/IconButton_FB343635_D5B6_EF09_41DE_607C019FA4D3.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_FF615A2A_D5B2_671B_41A6_EAB5532FCD80, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_FF657A2B_D5B2_6719_41DE_48B0577EE0F0, 'hideEffect', false)}.bind(this); if(!this.IconButton_FCAFAED4_D5BE_1F0F_41C8_0B2CDBAE5374.get('visible')){ visibleFunc(this.IconButton_FCAFAED4_D5BE_1F0F_41C8_0B2CDBAE5374) } else { invisibleFunc(this.IconButton_FCAFAED4_D5BE_1F0F_41C8_0B2CDBAE5374) }","backgroundOpacity":0,"maxHeight":45,"class":"IconButton","minHeight":1,"maxWidth":45,"minWidth":1,"top":"1.3%"},{"class":"PlayerMenuItem","label":trans('menuItem_F5604366_D48E_E50B_41E0_45EB35843ACE.label'),"id":"menuItem_F5604366_D48E_E50B_41E0_45EB35843ACE","click":"this.WebFrame_E2DB71C5_D592_6509_41DD_811E9922FC10.set('url', this.translate('PopupWebFrameBehaviour_F7AC3071_D48E_6309_41EA_8C9A67A46F31.url')); this.showWindow(this.window_F7ADB071_D48E_6309_41E4_AC0667A3D523, null, false)"},{"propagateClick":false,"data":{"name":"WebFrame38993"},"height":"100%","backgroundColorRatios":[],"width":"100%","url":trans('WebFrame_E2DA31CA_D592_651B_41DD_8EDEB474192F.url'),"backgroundColor":[],"minHeight":0,"class":"WebFrame","minWidth":0,"id":"WebFrame_E2DA31CA_D592_651B_41DD_8EDEB474192F"},{"propagateClick":false,"data":{"name":"WebFrame38992"},"height":"100%","backgroundColorRatios":[],"width":"100%","url":trans('WebFrame_E2DB71C5_D592_6509_41DD_811E9922FC10.url'),"backgroundColor":[],"minHeight":0,"class":"WebFrame","minWidth":0,"id":"WebFrame_E2DB71C5_D592_6509_41DD_811E9922FC10"},{"maps":[],"data":{"label":"Polygon"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","pitch":-21.26,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_HS_s7xctw75.webp","height":521,"width":1302}]},"yaw":125.17,"vfov":43.62,"hfov":89.96}],"areas":["this.HotspotPanoramaOverlayArea_E7A0336C_D03F_D857_41C5_F149E0F740E8"],"id":"overlay_E71E1359_D03F_D871_41E4_E45012D05835","rollOverDisplay":true},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":5.31,"yawDelta":22},{"class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":316},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":5.31,"yawDelta":22}],"id":"sequence_FADB3406_D07F_3FD3_41E4_A434451A53E1"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E7A0336C_D03F_D857_41C5_F149E0F740E8","mapColor":"image","click":"this.WebFrame_E2DA31CA_D592_651B_41DD_8EDEB474192F.set('url', this.translate('PopupWebFrameBehaviour_E661C7C9_D025_5851_41DF_901BECF4C58A.url')); this.showWindow(this.window_E66697C9_D025_5851_41CA_CA8EAE6A4EF1, null, false)","displayTooltipInTouchScreens":true}],"scripts":{"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"startMeasurement":TDV.Tour.Script.startMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlays":TDV.Tour.Script.getOverlays,"clone":TDV.Tour.Script.clone,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"existsKey":TDV.Tour.Script.existsKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"registerKey":TDV.Tour.Script.registerKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaByName":TDV.Tour.Script.getMediaByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"initAnalytics":TDV.Tour.Script.initAnalytics,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"isPanorama":TDV.Tour.Script.isPanorama,"init":TDV.Tour.Script.init,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cloneBindings":TDV.Tour.Script.cloneBindings,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"downloadFile":TDV.Tour.Script.downloadFile,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"createTween":TDV.Tour.Script.createTween,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizStart":TDV.Tour.Script.quizStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initQuiz":TDV.Tour.Script.initQuiz,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizFinish":TDV.Tour.Script.quizFinish,"showWindow":TDV.Tour.Script.showWindow,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"resumePlayers":TDV.Tour.Script.resumePlayers,"openLink":TDV.Tour.Script.openLink,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playAudioList":TDV.Tour.Script.playAudioList,"executeJS":TDV.Tour.Script.executeJS,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getKey":TDV.Tour.Script.getKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPixels":TDV.Tour.Script.getPixels,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"textToSpeech":TDV.Tour.Script.textToSpeech},"vrPolyfillScale":0.5,"gap":10,"children":["this.MainViewer_mobile","this.IconButton_FCAFAED4_D5BE_1F0F_41C8_0B2CDBAE5374"],"height":"100%","menu":["this.menuItem_F5604366_D48E_E50B_41E0_45EB35843ACE"],"defaultMenu":[],"backgroundColorRatios":[0],"width":"100%","layout":"absolute","scrollBarMargin":2,"backgroundColor":["#000000"],"minHeight":20,"class":"Player","minWidth":20,"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.7.js.map
})();
//Generated with v2023.1.7, Tue Aug 8 2023