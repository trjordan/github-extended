$(document).ready(function() {
    /**
     * Define a function that reliably clicks things, like a human.
     * 
     * With advice:
     *   http://stackoverflow.com/questions/4158847/is-there-a-way-to-simulate-key-presses-or-a-click-with-javascript
     */
    var click = function(elt) {
        var element = elt.get(0);
        var dispatchMouseEvent = function(target, var_args) {
            var e = document.createEvent("MouseEvents");
            // If you need clientX, clientY, etc., you can call
            // initMouseEvent instead of initEvent
            e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
            target.dispatchEvent(e);
        };
        dispatchMouseEvent(element, 'mouseover', true, true);
        dispatchMouseEvent(element, 'mousedown', true, true);
        dispatchMouseEvent(element, 'click', true, true);
        dispatchMouseEvent(element, 'mouseup', true, true);
    };

    // Assignee box keyboard shortcut
    $(document).bind('keypress', 'a', function() {
        click($('.js-assignee-context.js-menu-target'));
        $('.js-assignee-context .filterbar input').focus().val('');
        return false;
    });

    // Milestone box keyboard shortcut
    $(document).bind('keypress', 't', function() {
        click($('.js-milestone-context.js-menu-target'));
        $('.js-filterable-milestones .js-placeholder-field input').focus().val('');
        return false;
    });

});