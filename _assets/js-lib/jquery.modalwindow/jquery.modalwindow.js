/* Revision:  Dec 10 2010 14:35:46   aalexan1  $*/
;(function($) {

    // modal window plugin
    $.modalWindow = function(options_args) {

        // local globals
        var undefined = "undefined",
            mw = this;
        mw.elem_container,
        mw.content_settings,
        mw.css_settings,
        mw.js_settings,
        mw.options_args = options_args || {},
        mw.defaults = {
                css: {
                    "background":"#fff",
                    "position":"absolute",
                    "top":"50%",
                    "left":"50%",
                    "margin-left":"-235px",
                    "margin-top":"-150px",
                    "border":"3px #006633 solid"
                },
                js: {
                    fadeSpeed: "defaults",
                    trulyModal: true,
                    onPageLoad: true,
                    animateOverlay: true,
                    ajax: {
                        ajaxy: false,
                        url: ""
                    }
                },
                content: {
                    windowTitle: ""
                }
            }

        // function for invoking modals
        function sparkModal(elem_container, css_settings, js_settings, content_settings) {

            if (!css_settings) {
                var css_settings = mw.defaults.css;
            }

            if (!js_settings) {
                var js_settings = mw.defaults.js;
            }

            if (!content_settings) {
                var content_settings = mw.defaults.content;
            }

            $("select").addClass("hidden");

            if ( $("#modal-window").length > 0 ) {
                $("#modal-window")
                    //.html("") for ie8/6? TODO: FIX
                    .removeClass("hide");
            } else {
                elem_container.wrap($("<div id='modal-window' class='container container_16' />"));
            }

            $('#overlay').remove();

            if (js_settings.animateOverlay !== true && js_settings.animateOverlay !== "true") {
                $('<div id="overlay" />').appendTo("#modal-window");
            } else {
                $('<div id="overlay" class="hide" />')
                    .appendTo("#modal-window")
                    .fadeIn(js_settings.fadeSpeed.toString())
                    .removeClass("hide");
            }

            if (content_settings.windowTitle === "") {
                //elem_container.find(".modal-window-title").remove();
            } else {
                elem_container.find(".modal-window-title .title-content").text(content_settings.windowTitle);
            }
            if (js_settings.ajax && js_settings.ajax.ajaxy !== "false" && js_settings.ajax.url !== "") {
                var queryParams = js_settings.ajax.url.match(/\?/),
                    ajaxurl = (queryParams != null) ? js_settings.ajax.url+"&modal=true" : js_settings.ajax.url+"?modal=true";

                $.ajax({
                    url: ajaxurl,
                    cache: false,
                    success: function(content) {
                        elem_container
                            //.clone()
                            .appendTo("#modal-window")
                            .css(css_settings)
                            .fadeIn(js_settings.fadeSpeed.toString())
                            .removeClass("hide");
                        elem_container.find(".content-container").html(content);
                    }
                });
            } else {
                elem_container
                    //.clone()
                    .appendTo("#modal-window")
                    .css(css_settings)
                    .fadeIn(js_settings.fadeSpeed.toString())
                    .removeClass("hide");

                /*
                var cloneId = elem_container.attr("id")+"-clone";

                $("#"+cloneId).find("form").each(function(e) {
                    var that = $(this);
                    that .attr("id", that .attr("id")+"-clone");
                });
                */
            }

            mw.elem_container = elem_container;
            mw.content_settings = content_settings;
            mw.css_settings = css_settings;
            mw.js_settings = js_settings;

        }

       // killing modals, assumes one modal
        $("#overlay,.modal-window-close").bind("click", function(e) {

            $("select").removeClass("hidden");

            if ( (mw.js_settings.trulyModal !== true && mw.js_settings.trulyModal !== "true") || $(this).hasClass("modal-window-close") ) {
                if ( mw.js_settings.animateOverlay !== true && mw.js_settings.animateOverlay !== "true" ) {
                    $(".modal-window-container").fadeOut(mw.js_settings.fadeSpeed.toString());
                    //$("#overlay").addClass("hide");
                    mw.elem_container
                        .addClass("hide")
                        .attr("style", "");

                    $("#modal-window").addClass("hide");
                } else {
                    $(".modal-window-container").fadeOut();
                    $("#overlay").fadeOut(mw.js_settings.fadeSpeed.toString()).queue(function() {
                        //$("#overlay").addClass("hide");
                        $("#overlay").dequeue();

                        // reset container
                        mw.elem_container
                            .addClass("hide")
                            .attr("style", "");

                        $("#modal-window").addClass("hide");
                    });
                }
            }

            $(window).bind('keydown.closemodal', function(e) {
                if (e.keyCode === 27) {
                    $("#modal-window").addClass("hide");
                    $(window).unbind('keydown.closemodal');
                }
            });

            if ($(this).hasClass("modal-window-close")) {
                $("#modal-window").addClass("hide");
            }

            e.preventDefault();

        });

        // killing modals, assumes one modal
        $("#overlay,.modal-window-close").live("click", function(e) {

            $("select").removeClass("hidden");

            if ( (mw.js_settings.trulyModal !== true && mw.js_settings.trulyModal !== "true") || $(this).hasClass("modal-window-close") ) {
                if ( mw.js_settings.animateOverlay !== true && mw.js_settings.animateOverlay !== "true" ) {
                    $(".modal-window-container").fadeOut(mw.js_settings.fadeSpeed.toString());
                    //$("#overlay").addClass("hide");
                    mw.elem_container
                        .addClass("hide")
                        .attr("style", "");

                    $("#modal-window").addClass("hide");
                } else {
                    $(".modal-window-container").fadeOut();
                    $("#overlay").fadeOut(mw.js_settings.fadeSpeed.toString()).queue(function() {
                        //$("#overlay").addClass("hide");
                        $("#overlay").dequeue();

                        // reset container
                        mw.elem_container
                            .addClass("hide")
                            .attr("style", "");

                        $("#modal-window").addClass("hide");
                    });
                }
            }

            $(window).bind('keydown.closemodal', function(e) {
                if (e.keyCode === 27) {
                    $("#modal-window").addClass("hide");
                    $(window).unbind('keydown.closemodal');
                }
            });

            if ($(this).hasClass("modal-window-close")) {
                $("#modal-window").addClass("hide");
            }

            e.preventDefault();

        });

        return {

            sparkModal: sparkModal,

            triggers: $("a[class^='modal_open']").each(function(index, e) {

                    // trigger
                var trigger = $(this),

                    // trigger id
                    trigger_id = trigger.attr("id"),

                    // get @class of trigger elem
                    class_val = trigger.attr("class") || "",

                    // extract elem container name
                    // if no name specified on any anchor, plugin
                    // should find arbitrary container and load it on page load
                    find_elem = class_val.match(/:([A-Za-z0-9-]+)(:|)/),

                    // find matching content container defined in trigger
                    elem_container = (find_elem) ? $("#"+find_elem[1]) : $("#modal-window-1"),

                    find_class_metaoptions = class_val.match(/modal_open:([A-Za-z\-]+):(.*)}} /) || false,
                    //find_class_metaoptions = class_val.match(/modal_open:(.*):{(.*)/) || false,

                    find_class_metaoptions = (find_class_metaoptions !== false) ? find_class_metaoptions[2]+"}}" : "",

                    // pull settings from trigger
                    options_meta = $.parseJSON(find_class_metaoptions) || {};

                trigger.bind("click."+trigger_id, function(e) {

                    // apply css and js or set defaults
                    var css_settings = options_meta.css || mw.options_args.css || mw.defaults.css,
                        js_settings = options_meta.js || mw.options_args.js || mw.defaults.js,
                        content_settings = options_meta.content || mw.options_args.content || mw.defaults.content;

                    if (js_settings.ajax && js_settings.ajax.ajaxy !== "false" && js_settings.ajax.url !== "") {
                        elem_container
                            //.clone()
                            .appendTo("#modal-window")
                            .css(css_settings)
                            .fadeIn(js_settings.fadeSpeed.toString())
                            .removeClass("hide")
                            .attr("id", elem_container.attr("id"));

                        /*
                        var cloneId = elem_container.attr("id")+"-clone";

                        $("#"+cloneId).find("form").each(function(e) {
                            var that = $(this);
                            that .attr("id", that .attr("id")+"-clone");
                        });
                        */

                        mw.elem_container = elem_container;
                        mw.content_settings = content_settings;
                        mw.css_settings = css_settings;
                        mw.js_settings = js_settings;
                    }

                    sparkModal(elem_container, css_settings, js_settings, content_settings);

                    e.preventDefault();
                });

            })
        };

    }; // $.modalWindow

})(jQuery);

$("a[class^='modal_check']").each(function(index, e) {
    var trigger = $(this),

        // trigger id
        trigger_id = trigger.attr("id"),

        // get @class of trigger elem
        class_val = trigger.attr("class") || "",

        // extract elem container name
        // if no name specified on any anchor, plugin
        // should find arbitrary container and load it on page load
        find_elem = class_val.match(/:([A-Za-z0-9-]+)(:|)/),

        // find matching content container defined in trigger
        elem_container = (find_elem) ? $("#"+find_elem[1]) : $("#modal-window-1"),

        find_class_metaoptions = class_val.match(/modal_check:(.*):{(.*)/) || false,

        find_class_metaoptions = (find_class_metaoptions !== false) ? "{"+find_class_metaoptions[2] : "",

        // pull settings from trigger
        options_meta = $.parseJSON(find_class_metaoptions) || {};

    trigger.bind("click."+trigger_id, function(e) {

        var css_settings = options_meta.css,
            js_settings = options_meta.js,
            content_settings = options_meta.content,
            $this = $(this),
            href = js_settings.ajax.url;

        $.ajax({
            url: href,
            cache: true,
            success: function(data) {
                var makeAJAX = (data.match(/redirecturl/)) ? false : true;
                if (makeAJAX) {
                    $.modalWindow().sparkModal($("#"+find_elem[1]), css_settings, js_settings, content_settings);
                } else {
                    location.href=data.replace(/redirecturl=/,"");
                }
            }
        });

        e.preventDefault();
    });
});
