jQuery.noConflict()(function () {

    if(location.href.match(/viewedit.aspx/gi)){

    var siteUrl = _spPageContextInfo.siteServerRelativeUrl;
    var css = siteUrl + "/OSLabs/CSS/ViewFieldSorting.css";

    jQuery('head').append('<link rel="stylesheet" href="'+ css +'" type="text/css" /> ');

    var orderTable = jQuery('tbody#tbodyViewColumns > tr > td.ms-authoringControls tbody');
    var orderSelects = jQuery('tr:not(:first-child) select', orderTable);

    orderSelects.removeAttr("onchange").hide();

    jQuery('b', orderTable).filter(function () {
        return jQuery(this).text() == 'Position from Left';
    }).text('');


    var sortConfig = {

        items: 'tr:not(:first-child)',

        helper: function (e, ui) {
            // fix width glitch with table rows: foliotek.com/devblog/make-table-rows-sortable-using-jquery-ui-sortable/
            ui.children().each(function () {
                jQuery(this).width(jQuery(this).width());
            });
            return ui;
        },
        start: function (e, ui) {
            ui.item.find('input').attr('checked', 'checked');
        },

        update: function () {
            orderSelects = jQuery('tr:not(:first-child) select', orderTable);
            orderSelects.each(function (indx) {
                var select = jQuery(this);

                var selectedVal = select.children('option').filter(function () {
                    return jQuery(this).text() == indx + 1;
                }).val();

                select.val(selectedVal);
            });
        },

    };

    orderTable.sortable(sortConfig);
    }
});


