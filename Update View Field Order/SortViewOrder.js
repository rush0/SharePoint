$(function () {

    var orderTable = $('tbody#tbodyViewColumns > tr > td.ms-authoringControls tbody');
    var orderSelects = $('tr:not(:first-child) select', orderTable);

    orderSelects.removeAttr("onchange").hide();

    $('b', orderTable).filter(function () {
        return $(this).text() == 'Position from Left';
    }).text('');


    var sortConfig = {

        items: 'tr:not(:first-child)',

        helper: function (e, ui) {
            // fix width glitch with table rows: foliotek.com/devblog/make-table-rows-sortable-using-jquery-ui-sortable/
            ui.children().each(function () {
                $(this).width($(this).width());
            });
            return ui;
        },
        start: function (e, ui) {
            ui.item.find('input').attr('checked', 'checked');
        },

        update: function () {
            orderSelects = $('tr:not(:first-child) select', orderTable);
            orderSelects.each(function (indx) {
                var select = $(this);

                var selectedVal = select.children('option').filter(function () {
                    return $(this).text() == indx + 1;
                }).val();

                select.val(selectedVal);
            });
        },


    };

    orderTable.sortable(sortConfig);

});


