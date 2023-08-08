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
var script = {"left":359.6,"start":"this.init(); this.restartTourWithoutInteraction(600)","data":{"history":{},"defaultLocale":"en","locales":{"tr-TR":"locale/tr-TR.txt","en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"rate":1},"name":"Player468"},"mouseWheelEnabled":false,"gap":10,"scrollBarColor":"#000000","scripts":{"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPixels":TDV.Tour.Script.getPixels,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setValue":TDV.Tour.Script.setValue,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"isPanorama":TDV.Tour.Script.isPanorama,"executeJS":TDV.Tour.Script.executeJS,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"clone":TDV.Tour.Script.clone,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showWindow":TDV.Tour.Script.showWindow,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"downloadFile":TDV.Tour.Script.downloadFile,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initQuiz":TDV.Tour.Script.initQuiz,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"translate":TDV.Tour.Script.translate,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"init":TDV.Tour.Script.init,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMapLocation":TDV.Tour.Script.setMapLocation,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setLocale":TDV.Tour.Script.setLocale,"historyGoBack":TDV.Tour.Script.historyGoBack,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"shareSocial":TDV.Tour.Script.shareSocial,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"registerKey":TDV.Tour.Script.registerKey,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"createTween":TDV.Tour.Script.createTween,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizFinish":TDV.Tour.Script.quizFinish,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"mixObject":TDV.Tour.Script.mixObject,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playAudioList":TDV.Tour.Script.playAudioList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getKey":TDV.Tour.Script.getKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMainViewer":TDV.Tour.Script.getMainViewer},"hash": "7892246ef2602443ed19b9f5b87a372bef464a4c09b61ca62267bbc5025b4466", "definitions": [{"closeButtonBorderSize":0,"gap":10,"verticalAlign":"middle","scrollBarColor":"#000000","closeButtonRollOverIconColor":"#FFFFFF","closeButtonPressedBorderSize":0,"bodyPaddingLeft":0,"minWidth":0,"layout":"vertical","modal":true,"headerBorderSize":0,"titleFontFamily":"Arial","bodyBackgroundColorDirection":"vertical","closeButtonBackgroundColor":[],"shadow":true,"veilColorRatios":[0,1],"headerBackgroundColorDirection":"vertical","titleFontColor":"#000000","veilOpacity":0.4,"closeButtonPressedBackgroundOpacity":0,"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out"},"headerBackgroundColorRatios":[0,0.09803921568627451,1],"footerBorderColor":"#000000","bodyBorderSize":0,"headerBorderColor":"#000000","closeButtonIconWidth":20,"width":"90%","bodyPaddingTop":0,"backgroundColorRatios":[],"closeButtonPaddingBottom":0,"data":{"name":"Window26262"},"closeButtonPressedBackgroundColor":[],"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out"},"titlePaddingLeft":5,"closeButtonPressedIconColor":"#FFFFFF","headerBackgroundOpacity":0,"bodyPaddingBottom":0,"closeButtonPressedBackgroundColorRatios":[],"height":"90%","closeButtonRollOverBackgroundColor":[],"shadowOpacity":0.5,"closeButtonRollOverBorderSize":0,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"closeButtonPressedIconLineWidth":3,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"titlePaddingBottom":5,"closeButtonRollOverBackgroundOpacity":0,"veilColorDirection":"horizontal","shadowSpread":1,"class":"Window","bodyBackgroundOpacity":0,"headerPaddingLeft":10,"closeButtonBackgroundOpacity":0,"borderRadius":5,"id":"window_E66697C9_D025_5851_41CA_CA8EAE6A4EF1","horizontalAlign":"center","veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out"},"headerPaddingBottom":5,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out"},"closeButtonIconLineWidth":2,"shadowColor":"#000000","footerBackgroundColorDirection":"vertical","titlePaddingRight":5,"closeButtonPaddingLeft":0,"headerVerticalAlign":"middle","shadowHorizontalLength":3,"closeButtonRollOverBackgroundColorRatios":[],"titleFontSize":"1.29vmin","closeButtonPaddingTop":0,"closeButtonRollOverBorderColor":"#000000","children":["this.WebFrame_9B828C9E_D06D_48F3_41DD_F27053E82E9B"],"closeButtonBorderColor":"#000000","headerPaddingTop":10,"veilColor":["#000000","#000000"],"closeButtonBorderRadius":11,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"footerBackgroundOpacity":0,"titleHorizontalAlign":"left","titlePaddingTop":5,"shadowVerticalLength":0,"bodyBorderColor":"#000000","closeButtonIconHeight":20,"closeButtonIconColor":"#B2B2B2","closeButtonPaddingRight":0,"footerBorderSize":0,"scrollBarMargin":2,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"bodyPaddingRight":0,"propagateClick":false,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"overflow":"scroll","closeButtonBackgroundColorRatios":[],"closeButtonPressedBorderColor":"#000000","backgroundColor":[],"headerPaddingRight":0,"footerHeight":5,"closeButtonRollOverIconLineWidth":2,"minHeight":0},{"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_FF576416_D07C_DFF3_41DD_035E22F37B49","camera":"this.panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_camera","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"closeButtonBorderSize":0,"gap":10,"verticalAlign":"middle","scrollBarColor":"#000000","closeButtonRollOverIconColor":"#FFFFFF","closeButtonPressedBorderSize":0,"bodyPaddingLeft":0,"minWidth":0,"layout":"vertical","modal":true,"headerBorderSize":0,"titleFontFamily":"Arial","bodyBackgroundColorDirection":"vertical","closeButtonBackgroundColor":[],"shadow":true,"veilColorRatios":[0,1],"headerBackgroundColorDirection":"vertical","titleFontColor":"#000000","veilOpacity":0.4,"closeButtonPressedBackgroundOpacity":0,"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"headerBackgroundColorRatios":[0,0.09803921568627451,1],"footerBorderColor":"#000000","bodyBorderSize":0,"headerBorderColor":"#000000","closeButtonIconWidth":20,"width":"90%","bodyPaddingTop":0,"backgroundColorRatios":[],"closeButtonPaddingBottom":0,"data":{"name":"Window35980"},"closeButtonPressedBackgroundColor":[],"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"titlePaddingLeft":5,"closeButtonPressedIconColor":"#FFFFFF","headerBackgroundOpacity":0,"bodyPaddingBottom":0,"closeButtonPressedBackgroundColorRatios":[],"height":"90%","closeButtonRollOverBackgroundColor":[],"shadowOpacity":0.5,"closeButtonRollOverBorderSize":0,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"closeButtonPressedIconLineWidth":3,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"titlePaddingBottom":5,"closeButtonRollOverBackgroundOpacity":0,"veilColorDirection":"horizontal","shadowSpread":1,"class":"Window","bodyBackgroundOpacity":0,"headerPaddingLeft":10,"closeButtonBackgroundOpacity":0,"borderRadius":5,"id":"window_EF813888_D0E4_C8DF_41CF_9988229FF161","horizontalAlign":"center","veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"headerPaddingBottom":5,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"closeButtonIconLineWidth":2,"shadowColor":"#000000","footerBackgroundColorDirection":"vertical","titlePaddingRight":5,"closeButtonPaddingLeft":0,"headerVerticalAlign":"middle","shadowHorizontalLength":3,"closeButtonRollOverBackgroundColorRatios":[],"titleFontSize":"1.29vmin","closeButtonPaddingTop":0,"closeButtonRollOverBorderColor":"#000000","children":["this.WebFrame_9B826C9E_D06D_48F3_41DE_25919436A0D2"],"closeButtonBorderColor":"#000000","headerPaddingTop":10,"veilColor":["#000000","#000000"],"closeButtonBorderRadius":11,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"footerBackgroundOpacity":0,"titleHorizontalAlign":"left","titlePaddingTop":5,"shadowVerticalLength":0,"bodyBorderColor":"#000000","closeButtonIconHeight":20,"closeButtonIconColor":"#B2B2B2","closeButtonPaddingRight":0,"footerBorderSize":0,"scrollBarMargin":2,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"bodyPaddingRight":0,"propagateClick":false,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"overflow":"scroll","closeButtonBackgroundColorRatios":[],"closeButtonPressedBorderColor":"#000000","backgroundColor":[],"headerPaddingRight":0,"footerHeight":5,"closeButtonRollOverIconLineWidth":2,"minHeight":0},{"thumbnailUrl":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_t.jpg","overlays":["this.overlay_E71E1359_D03F_D871_41E4_E45012D05835"],"label":trans('panorama_FF576416_D07C_DFF3_41DD_035E22F37B49.label'),"hfovMin":"150%","vfov":180,"data":{"label":"PANO_DEMO"},"hfov":360,"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_0/{face}/0/{row}_{column}.webp","height":1536,"colCount":18,"rowCount":3,"tags":["ondemand","mobilevr2gen"],"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_0/{face}/1/{row}_{column}.webp","height":1024,"colCount":12,"rowCount":2,"tags":"ondemand","width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_0/{face}/2/{row}_{column}.webp","height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"],"width":3072}]}}],"class":"Panorama","id":"panorama_FF576416_D07C_DFF3_41DD_035E22F37B49"},{"minWidth":100,"playbackBarBackgroundOpacity":1,"minHeight":50,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","progressBackgroundColorRatios":[0.00784313725490196],"data":{"name":"Main Viewer"},"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadow":true,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowOpacity":1,"vrPointerColor":"#FFFFFF","width":"100%","height":"100%","toolTipFontColor":"#606060","toolTipBorderColor":"#767676","subtitlesFontColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","progressBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333333","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowHorizontalLength":1,"progressBottom":0,"toolTipPaddingTop":4,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBottom":5,"firstTransitionDuration":0,"progressHeight":10,"class":"ViewerArea","subtitlesBottom":50,"top":0,"progressBarBorderColor":"#0066FF","progressBarBorderRadius":0,"progressBorderSize":0,"id":"MainViewer","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","progressBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarHeadWidth":6,"progressRight":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesTop":0,"playbackBarHeight":10,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","playbackBarBorderSize":0,"progressBorderRadius":0,"subtitlesTextShadowColor":"#000000","playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarProgressBorderSize":0,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","progressLeft":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"left":0,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial"},{"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":500},{"class":"TargetRotationalCameraDisplayMovement","duration":3500,"targetPitch":-10.96,"targetStereographicFactor":0,"easing":"cubic_in_out","targetHfov":110}],"enterPointingToHorizon":true,"initialSequence":"this.sequence_FADB3406_D07F_3FD3_41E4_A434451A53E1","displayOriginPosition":{"class":"RotationalCameraDisplayPosition","yaw":126.79,"pitch":-90,"hfov":165,"stereographicFactor":1},"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":126.79,"pitch":-10.96,"hfov":110},"id":"panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_camera"},{"class":"PlayerMenuItem","label":trans('PlayerMenuItem_EE2AE156_D027_5873_41E1_7CAE448A0974.label'),"id":"PlayerMenuItem_EE2AE156_D027_5873_41E1_7CAE448A0974","click":"this.WebFrame_9B826C9E_D06D_48F3_41DE_25919436A0D2.set('url', this.translate('PopupWebFrameBehaviour_EFBFC888_D0E4_C8DF_41E4_197040FA44CF.url')); this.showWindow(this.window_EF813888_D0E4_C8DF_41CF_9988229FF161, null, false)"},{"data":{"name":"WebFrame42013"},"width":"100%","height":"100%","url":trans('WebFrame_9B828C9E_D06D_48F3_41DD_F27053E82E9B.url'),"backgroundColorRatios":[],"propagateClick":false,"backgroundColor":[],"class":"WebFrame","minWidth":0,"id":"WebFrame_9B828C9E_D06D_48F3_41DD_F27053E82E9B","minHeight":0},{"data":{"name":"WebFrame42012"},"width":"100%","height":"100%","url":trans('WebFrame_9B826C9E_D06D_48F3_41DE_25919436A0D2.url'),"backgroundColorRatios":[],"propagateClick":false,"backgroundColor":[],"class":"WebFrame","minWidth":0,"id":"WebFrame_9B826C9E_D06D_48F3_41DE_25919436A0D2","minHeight":0},{"maps":[],"data":{"label":"Polygon"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","pitch":-21.26,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/panorama_FF576416_D07C_DFF3_41DD_035E22F37B49_HS_s7xctw75.webp","height":521,"width":1302}]},"yaw":125.17,"vfov":43.62,"hfov":89.96}],"areas":["this.HotspotPanoramaOverlayArea_E7A0336C_D03F_D857_41C5_F149E0F740E8"],"id":"overlay_E71E1359_D03F_D871_41E4_E45012D05835","rollOverDisplay":true},{"class":"PanoramaCameraSequence","id":"sequence_FADB3406_D07F_3FD3_41E4_A434451A53E1","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":5.31,"yawDelta":22},{"class":"DistancePanoramaCameraMovement","yawSpeed":5.31,"yawDelta":316},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":5.31,"yawDelta":22}]},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_E7A0336C_D03F_D857_41C5_F149E0F740E8","mapColor":"image","click":"this.WebFrame_9B828C9E_D06D_48F3_41DD_F27053E82E9B.set('url', this.translate('PopupWebFrameBehaviour_E661C7C9_D025_5851_41DF_901BECF4C58A.url')); this.showWindow(this.window_E66697C9_D025_5851_41CA_CA8EAE6A4EF1, null, false)","displayTooltipInTouchScreens":true}],"vrPolyfillScale":0.5,"defaultMenu":[],"layout":"absolute","children":["this.MainViewer"],"height":"100%","width":"100%","menu":["this.PlayerMenuItem_EE2AE156_D027_5873_41E1_7CAE448A0974"],"backgroundColorRatios":[0],"scrollBarMargin":2,"backgroundColor":["#000000"],"class":"Player","minWidth":20,"id":"rootPlayer","minHeight":20};
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