/**
 * The object "confirmPopupWindow" implements confirmation popup modal window
 * with OK and Cancel buttons.
 * HTML-template - in file /resources/views/common/confirm-popup.blade.php
 * HTML-template should include in page template: @include('common.confirm-popup')
 *
 * @param element - jQuery selector of popup window template
 * @param title - title text
 * @param message - message text
 * @param ok_handler - function calls when OK button clicked
 * @param cancel_handler - function calls when Cancel button clicked
 */
var confirmPopupWindow = function(params){
    this.init = function (params){
        if (params.element === undefined){
            this.element = "#confirm_popup";
        }else{
            this.element = params.element;
        }
        if (params.title === undefined){
            this.title = "Confirmation";
        }else{
            this.title = params.title;
        }
        if (params.message === undefined){
            this.message = "";
        }else{
            this.message = params.message;
        }
        if (params.ok === undefined){
            this.ok_handler = function(){};
        }else{
            this.ok_handler = params.ok;
        }
        if (params.cancel === undefined){
            this.cancel_handler = function(){};
        }else{
            this.cancel_handler = params.cancel;
        }
        this.render();
        this.setEventHandlers();
    };
    this.render = function (){
        $(this.element).find(".modal-title").text(this.title);
        $(this.element).find(".message").text(this.message);
        return this;
    };
    this.setEventHandlers = function (){
        $(this.element).find(".ok-button").on('click', this.ok_handler);
        $(this.element).find(".cancel-button").on('click', this.cancel_handler);
        return this;
    };
    this.open = function (){
        $(this.element).modal();
        return this;
    };
    this.close = function (){
        $(this.element).modal('hide');
        return this;
    };
    this.ok = function (handler){
        this.ok_handler = handler;
        $(this.element).find(".ok-button").on('click', this.ok_handler);
        return this;
    };
    this.cancel = function (handler){
        this.cancel_handler = handler;
        $(this.element).find(".cancel-button").on('click', this.cancel_handler);
        return this;
    };
    this.init(params);
};


/**
 * The object "notificationPopupWindow" implements notification popup modal window
 * with OK button.
 * HTML-template - in file /resources/views/common/notification-popup.blade.php
 * HTML-template should include in page template: @include('common.notification-popup')
 *
 * @param element - jQuery selector of popup window template
 * @param title - title text
 * @param message - message text
 * @param ok_handler - function calls when OK button clicked
 */
var notificationPopupWindow = function(params){
    this.init = function (params){
        if (params.element === undefined){
            this.element = "#notification_popup";
        }else{
            this.element = params.element;
        }
        if (params.title === undefined){
            this.title = "Notification";
        }else{
            this.title = params.title;
        }
        if (params.message === undefined){
            this.message = "";
        }else{
            this.message = params.message;
        }
        if (params.ok === undefined){
            this.ok_handler = function(){};
        }else{
            this.ok_handler = params.ok;
        }
        this.render();
        this.setEventHandlers();
    };
    this.render = function (){
        $(this.element).find(".modal-title").text(this.title);
        $(this.element).find(".message").text(this.message);
        return this;
    };
    this.setEventHandlers = function (){
        $(this.element).find(".ok-button").click(this.ok_handler);
        return this;
    };
    this.open = function (){
        $(this.element).modal();
        return this;
    };
    this.close = function (){
        $(this.element).modal('hide');
        return this;
    };
    this.ok = function (handler){
        this.ok_handler = handler;
        $(this.element).find(".ok-button").on('click', this.ok_handler);
        return this;
    };
    this.init(params);
};


/**
 * The object "progressPopupWindow" implements "progress bar" window with spinner.
 * HTML-template - in file /resources/views/common/progress-popup.blade.php
 * HTML-template should include in page template: @include('common.progress-popup')
 *
 * @param element - jQuery selector of popup window template
 * @param title - title text
 * @param message - message text
 */
var progressPopupWindow = function(params){
    this.init = function (params){
        if (params.element === undefined){
            this.element = "#progress_popup";
        }else{
            this.element = params.element;
        }
        if (params.title === undefined){
            this.title = "";
        }else{
            this.title = params.title;
        }
        if (params.message === undefined){
            this.message = "Please, wait...";
        }else{
            this.message = params.message;
        }
        this.render();
    };
    this.render = function (){
        $(this.element).find(".modal-title").text(this.title);
        $(this.element).find(".message").text(this.message);
        return this;
    };
    this.open = function (){
        $(this.element).modal();
        return this;
    };
    this.close = function (){
        $(this.element).modal('hide');
        return this;
    };
    this.init(params);
};


/**
 * The object "formPopupWindow" implements popup modal window with form.
 * HTML-template - in file /resources/views/common/form-popup.blade.php
 * HTML-template should include in page template: @include('common.form-popup')
 *
 * @param element - jQuery selector of popup window template
 * @param title - title text
 * @param submit_button_title - title text
 * @param cancel_button_title - title text
 * @param form_template_selector - jQuery selector of form template
 * @param submit_button_handler - function calls when 'submit' button clicked
 * @param cancel_button_handler - function calls when 'cancel' button clicked
 */
var formPopupWindow = function(params){
    this.init = function (params){
        if (params.element === undefined){
            this.element = "#form_popup_window";
        }else{
            this.element = params.element;
        }
        if (params.title === undefined){
            this.title = "Form";
        }else{
            this.title = params.title;
        }
        if (params.action === undefined){
            this.action = "#";
        }else{
            this.action = params.action;
        }
        if (params.submit_button_title === undefined){
            this.submit_button_title = "Save";
        }else{
            this.submit_button_title = params.submit_button_title;
        }
        if (params.cancel_button_title === undefined){
            this.cancel_button_title = "Cancel";
        }else{
            this.cancel_button_title = params.cancel_button_title;
        }
        if (params.form_template_selector === undefined){
            this.form_template_selector = ".form_popup_window__form_template";
        }else{
            this.form_template_selector = params.form_template_selector;
        }
        if (params.submit_button_handler === undefined){
            this.submit_button_handler = function(){};
        }else{
            this.submit_button_handler = params.submit_button_handler;
        }
        if (params.cancel_button_handler === undefined){
            this.cancel_button_handler = function(){
                $(this.element).modal('hide');
            };
        }else{
            this.cancel_button_handler = params.cancel_button_handler;
        }
        $(this.element).find(".form_container").empty();
        this.render();
        this.setEventHandlers();
    };
    this.render = function (){
        $(this.element).find(".modal-title").text(this.title);
        $(this.element).find(".submit_button").text(this.submit_button_title);
        $(this.element).find(".cancel_button").text(this.cancel_button_title);
        var form = $(this.form_template_selector).clone();
        $(this.element).find(".form_container").append(form);
        return this;
    };
    this.setEventHandlers = function (){
        $(this.element).find(".submit_button").click(this.submit_button_handler);
        $(this.element).find(".cancel_button").click(this.cancel_button_handler);
        return this;
    };
    this.open = function (){
        $(this.element).modal();
        return this;
    };
    this.close = function (){
        $(this.element).modal('hide');
        return this;
    };
    this.set_submit_button_handler = function (handler){
        this.submit_button_handler = handler;
        $(this.element).find(".submit_button").on('click', this.submit_button_handler);
        return this;
    };
    this.set_cancel_button_handler = function (handler){
        this.cancel_button_handler = handler;
        $(this.element).find(".cancel_button").on('click', this.cancel_button_handler);
        return this;
    };
    this.init(params);
};
